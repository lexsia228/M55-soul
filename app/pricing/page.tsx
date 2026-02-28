import Link from "next/link";

export const metadata = {
  title: "Pricing | M55",
};

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px" }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 12px" }}>料金</h1>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>
          DTR（本質） / Static（買い切り）
        </h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>価格：¥1,000（税込）</li>
          <li>提供：購入後に閲覧可能（永続付与 / 再購入不要）</li>
          <li>支払い：カード（Link対応）</li>
        </ul>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <p style={{ margin: "0 0 8px", lineHeight: 1.7 }}>
          返金：原則不可（詳細は <Link href="/legal/refund">/legal/refund</Link>）
        </p>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          サポート：<Link href="/support">/support</Link>
        </p>
      </section>

      <section style={{ margin: "0 0 22px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>準備中</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          PayPay / コンビニ / Apple Pay / Google Pay（表示のみ。リンク無し。購入導線ゼロ）
        </p>
      </section>

      <hr style={{ opacity: 0.25, margin: "18px 0" }} />

      <nav aria-label="Legal links" style={{ display: "flex", flexWrap: "wrap", gap: 12, lineHeight: 1.7 }}>
        <Link href="/legal/tokushoho">特商法</Link>
        <Link href="/legal/privacy">プライバシー</Link>
        <Link href="/legal/terms">利用規約</Link>
        <Link href="/legal/refund">返金</Link>
        <Link href="/support">サポート</Link>
      </nav>
    </main>
  );
