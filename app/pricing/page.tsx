import Link from "next/link";

export const metadata = { title: "Pricing | M55" };

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px" }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 12px" }}>Pricing</h1>

      <p style={{ margin: "0 0 16px", lineHeight: 1.7 }}>
        本ページは料金とサポート導線の説明です。医療・法律・投資等の助言ではありません。
      </p>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>DTR Core Static V1</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>¥1,000（税込）</li>
          <li>返金・キャンセル：<Link href="/legal/refund">/legal/refund</Link></li>
          <li>サポート：<Link href="/support">/support</Link></li>
        </ul>
      </section>

      <p style={{ margin: "0 0 18px" }}>
        外部確認用ページ：<Link href="/dtr/lp">/dtr/lp</Link>
      </p>

      <hr style={{ opacity: 0.25, margin: "18px 0" }} />

      <nav style={{ display: "flex", flexWrap: "wrap", gap: 12, lineHeight: 1.7 }}>
        <Link href="/legal/tokushoho">特定商取引法</Link>
        <Link href="/legal/terms">利用規約</Link>
        <Link href="/legal/privacy">プライバシーポリシー</Link>
        <Link href="/legal/refund">返金・キャンセル</Link>
        <Link href="/support">サポート</Link>
      </nav>

      <p style={{ margin: "12px 0 0", fontSize: 12, opacity: 0.7 }}>© 2026 M55 Project</p>
    </main>
  );
}