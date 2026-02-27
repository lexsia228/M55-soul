import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getStripe } from '../../../../lib/stripe';

const PRODUCT_ID_TO_ENV: Record<string, string> = {
  DTR_CORE_STATIC_V1: 'STRIPE_PRICE_DTR_CORE_STATIC_V1',
};

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: 'Stripe is not configured' },
      { status: 503 }
    );
  }

  let body: { productId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const productId = body?.productId;
  if (!productId || typeof productId !== 'string') {
    return NextResponse.json(
      { error: 'productId is required' },
      { status: 400 }
    );
  }

  const envKey = PRODUCT_ID_TO_ENV[productId];
  const priceId = envKey ? process.env[envKey] : undefined;
  if (!priceId) {
    return NextResponse.json(
      { error: `Product ${productId} is not configured (missing env: ${envKey ?? 'N/A'})` },
      { status: 400 }
    );
  }

  const stripe = getStripe();
  const origin = req.headers.get('origin') ?? req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/purchase/success`,
      cancel_url: `${origin}/dtr/lp?checkout=cancelled`,
      client_reference_id: userId,
      metadata: { productId },
      locale: 'ja',
    });

    const url = session.url;
    if (!url) {
      return NextResponse.json(
        { error: 'Stripe session URL not created' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url });
  } catch (e) {
    console.error('[checkout]', e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Checkout failed' },
      { status: 500 }
    );
  }
}
