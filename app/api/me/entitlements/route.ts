import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

const NO_STORE_HEADERS = {
  'Cache-Control': 'private, no-store, max-age=0',
  'Pragma': 'no-cache',
};

const TIER_RETENTION: Record<string, number> = { free: 0, standard: 30, premium: 90 };
const TIER_CHAT_LIMIT: Record<string, number> = { free: 1, standard: 5, premium: -1 };
const TIER_TAROT_LIMIT: Record<string, number> = { free: 1, standard: 5, premium: -1 };

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE_HEADERS });
  }

  try {
    const db = getSupabaseAdmin();

    const [subRes, rightsRes] = await Promise.all([
      db.from('subscriptions').select('tier, status').eq('user_id', userId).maybeSingle(),
      db.from('entitlement_rights').select('right_key, right_value, expires_at').eq('user_id', userId),
    ]);

    const tier = subRes.data?.status === 'active' ? (subRes.data.tier as string) : 'free';
    const dtrRights: string[] = [];

    for (const r of rightsRes.data ?? []) {
      const key = r.right_key as string;
      const exp = r.expires_at ? new Date(r.expires_at).getTime() : null;
      if (exp !== null && exp < Date.now()) continue;
      if (key.startsWith('m55_p:')) dtrRights.push(key);
    }

    return NextResponse.json(
      {
        tier,
        retention_days: TIER_RETENTION[tier] ?? 0,
        chat_daily_limit: TIER_CHAT_LIMIT[tier] ?? 1,
        tarot_daily_limit: TIER_TAROT_LIMIT[tier] ?? 1,
        dtr_rights: dtrRights,
      },
      { status: 200, headers: NO_STORE_HEADERS }
    );
  } catch {
    return NextResponse.json(
      { tier: 'free', retention_days: 0, chat_daily_limit: 1, tarot_daily_limit: 1, dtr_rights: [] },
      { status: 200, headers: NO_STORE_HEADERS }
    );
  }
}
