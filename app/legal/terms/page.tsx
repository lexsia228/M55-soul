import Link from "next/link";

export const metadata = {
  title: "利用規約 | M55",
};

export default function TermsPage() {
  return (
    <main style={{
      maxWidth: 860,
      margin: "0 auto",
      padding: "24px 16px 56px",
      lineHeight: 1.7,
    }}>
      <h1 style={{
        fontSize: 22,
        fontWeight: 600,
        margin: "0 0 12px",
      }}>
        利用規約
      </h1>

      <p style={{
        margin: "0 0 16px",
        opacity: 0.9,
      }}>
        本規約は、M55 Project（以下「当社」）が提供するデジタルコンテンツ（レポート）の閲覧サービス（以下「本サービス」）の利用条件を定めるものです。
      </p>

      <section style={{ margin: "0 0 16px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>提供内容</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>本サービスは、ユーザー入力に基づく情報整理のレポートを提供します。</li>
          <li>決済完了後、ウェブ上で閲覧可能です（物理配送はありません）。</li>
        </ul>
      </section>

      <section style={{ margin: "0 0 16px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>禁止事項</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>不正アクセス、またはこれを助長する行為</li>
          <li>本サービスの運営を妨げる行為</li>
          <li>法令または公序良俗に反する行為</li>
        </ul>
      </section>

      <section style={{ margin: "0 0 16px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>免責・責任制限</h2>
        <p style={{ margin: 0 }}>本サービスはユーザー入力に基づく情報整理のレポートであり、医療・法律・投資等の助言ではありません。</p>
      </section>

      <section style={{ margin: "0 0 16px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>返金・問い合わせ</h2>
        <p style={{ margin: 0 }}>
          返金条件は <Link href="/legal/refund">/legal/refund</Link> を、サポート窓口は <Link href="/support">/support</Link> を参照してください。
        </p>
      </section>

      <p style={{ margin: 0, fontSize: 12, opacity: 0.75 }}>
        本規約は、必要に応じて改定することがあります。改定後の内容は当サイト上に掲載した時点で効力を生じます。
      </p>
    </main>
  );
}
