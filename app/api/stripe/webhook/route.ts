import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { getStripe } from '../../../../lib/stripe';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PRODUCT_ID_FROM_META = 'DTR_CORE_STATIC_V1';

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 });
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const sig = (await headers()).get('stripe-signature');
  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (e) {
    console.error('[webhook] signature verification failed:', e);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const db = supabase as any;
  const { data: existing } = await db
    .from('stripe_events')
    .select('id')
    .eq('event_id', event.id)
    .limit(1)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const { error: insertErr } = await db.from('stripe_events').insert({ event_id: event.id });

  if (insertErr) {
    if (insertErr.code === '23505') {
      return NextResponse.json({ received: true }, { status: 200 });
    }
    console.error('[webhook] stripe_events insert failed:', insertErr);
    return NextResponse.json({ error: 'Idempotency failed' }, { status: 500 });
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session.client_reference_id ?? null;
  const productId = (session.metadata?.productId as string) ?? PRODUCT_ID_FROM_META;

  if (!userId) {
    console.error('[webhook] checkout.session.completed without client_reference_id');
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const { error: upsertErr } = await db
    .from('entitlements')
    .upsert(
      {
        user_id: userId,
        product_id: productId,
        status: 'active',
        stripe_session_id: session.id,
      },
      { onConflict: 'user_id,product_id' }
    );

  if (upsertErr) {
    console.error('[webhook] entitlements upsert failed:', upsertErr);
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
