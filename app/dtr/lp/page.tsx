import Link from "next/link";

export const metadata = { title: "DTR | M55" };

export default function DtrLpPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px" }}>
      <p style={{ margin: "0 0 10px" }}>
        <Link href="/">M55 Home</Link>
      </p>

      <h1 style={{ fontSize: "1.25rem", margin: "0 0 12px" }}>DTR Core Static V1</h1>

      <p style={{ margin: "0 0 12px", lineHeight: 1.7 }}>
        本サービスはユーザー入力に基づく情報整理のレポートであり、医療・法律・投資等の助言ではありません。
      </p>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: "1rem", margin: "0 0 8px" }}>価格</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>¥1,000（税込）</li>
          <li>提供：決済完了後に閲覧可能</li>
          <li>支払い：カード（Stripe）</li>
        </ul>
      </section>

      <p style={{ margin: "0 0 10px" }}>
        返金：原則不可（詳細は <Link href="/legal/refund">/legal/refund</Link>）
      </p>
      <p style={{ margin: "0 0 18px" }}>
        サポート：<Link href="/support">/support</Link>
      </p>
    </main>
  );
}