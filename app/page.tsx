import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M55',
  description: 'M55 デジタルコンテンツサービス',
};

/**
 * トップページ（Stripe審査向け）
 * 料金はSSRで直書き。誇張・未来予告・演出は禁止。
 */
export default function RootPage() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px 48px', fontFamily: 'inherit' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 24 }}>M55</h1>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>サービスについて</h2>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
          デジタルコンテンツの保存・再訪を提供します。心の記録を一定期間保持し、いつでも参照できます。
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 12 }}>料金</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
              <th style={{ textAlign: 'left', padding: '8px 0' }}>プラン</th>
              <th style={{ textAlign: 'left', padding: '8px 0' }}>料金</th>
              <th style={{ textAlign: 'left', padding: '8px 0' }}>保持期間</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <td style={{ padding: '8px 0' }}>Free</td>
              <td style={{ padding: '8px 0' }}>¥0</td>
              <td style={{ padding: '8px 0' }}>7日</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <td style={{ padding: '8px 0' }}>Standard</td>
              <td style={{ padding: '8px 0' }}>¥680</td>
              <td style={{ padding: '8px 0' }}>30日</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <td style={{ padding: '8px 0' }}>Premium</td>
              <td style={{ padding: '8px 0' }}>¥1,980</td>
              <td style={{ padding: '8px 0' }}>90日＋月次DTR</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>提供タイミング</h2>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
          決済完了後、すぐにご利用可能です。
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 8 }}>返金・キャンセル</h2>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
          <Link href="/legal/refund" style={{ textDecoration: 'underline' }}>返金・キャンセルについて</Link>
          をご確認ください。
        </p>
      </section>

      <p style={{ marginTop: 32 }}>
        <Link href="/home" style={{ textDecoration: 'underline', fontSize: '0.875rem' }}>アプリへ進む</Link>
      </p>
    </main>
  );
}
