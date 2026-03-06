'use client';

import { useEffect, useState } from 'react';

type Entitlements = {
  tier: string;
  retention_days: number;
  chat_daily_limit: number;
  tarot_daily_limit: number;
  dtr_rights: string[];
};

const DTR_SLOTS = [
  { key: 'm55_p:core_origin', label: 'Core', desc: '本質レポート（永久）' },
  { key: 'm55_p:week:', label: 'Weekly', desc: '週次（7日）' },
  { key: 'm55_p:day:', label: 'Daily', desc: '日次（1日）' },
];

const TIER_RETENTION: Record<string, number> = { free: 0, standard: 30, premium: 90 };

function hasRight(rightKey: string, rights: string[]): boolean {
  if (rightKey === 'm55_p:core_origin') return rights.some((r) => r === rightKey);
  if (rightKey.startsWith('m55_p:week:')) return rights.some((r) => r.startsWith('m55_p:week:'));
  if (rightKey.startsWith('m55_p:day:')) return rights.some((r) => r.startsWith('m55_p:day:'));
  return false;
}

export default function PrototypeHubPage() {
  const [ent, setEnt] = useState<Entitlements | null>(null);

  useEffect(() => {
    fetch('/api/me/entitlements')
      .then((r) => (r.ok ? r.json() : null))
      .then(setEnt)
      .catch(() => setEnt({ tier: 'free', retention_days: 0, chat_daily_limit: 1, tarot_daily_limit: 1, dtr_rights: [] }));
  }, []);

  const tier = ent?.tier ?? 'free';
  const rights = ent?.dtr_rights ?? [];

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui', maxWidth: 640, margin: '0 auto' }}>
      <h1 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>接続ハブ</h1>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 8px' }}>保存期間（比較）</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li>Free: {TIER_RETENTION.free}日</li>
          <li>Standard: {TIER_RETENTION.standard}日</li>
          <li>Premium: {TIER_RETENTION.premium}日</li>
        </ul>
        <p style={{ margin: '8px 0 0', fontSize: 12, opacity: 0.8 }}>現在: {tier}</p>
      </section>

      <section>
        <h2 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 8px' }}>DTR棚</h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {DTR_SLOTS.map((slot) => {
            const unlocked = hasRight(slot.key, rights);
            return (
              <li key={slot.key} style={{ marginBottom: 8, padding: 12, border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8 }}>
                <strong>{slot.label}</strong> — {slot.desc}
                {unlocked ? (
                  <span style={{ marginLeft: 8, fontSize: 12, color: 'green' }}>利用可</span>
                ) : (
                  <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.7 }}>ロック（購入導線は既存の /dtr/lp を利用）</span>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
