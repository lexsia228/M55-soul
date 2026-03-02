import Link from "next/link";

export const metadata = { title: "DTR | M55" };

export default function DtrLpPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px", lineHeight: 1.75 }}>
      <p style={{ margin: "0 0 10px" }}><Link href="/">M55 Home</Link></p>

      <h1 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 10px" }}>DTR Core Static V1</h1>

      <p style={{ margin: "0 0 14px" }}>
        ウェブ上で提供するデジタルコンテンツ（レポート）です。決済完了後に閲覧できます（物理配送なし）。
      </p>

      <section style={{ margin: "0 0 16px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 800, margin: "0 0 6px" }}>価格</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>¥1,000（税込）</li>
        </ul>
      </section>

      <section style={{ margin: "0 0 16px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 800, margin: "0 0 6px" }}>提供・支払い</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>提供：決済完了後に閲覧可能</li>
          <li>支払い：クレジットカード（Stripe）</li>
        </ul>
      </section>

      <p style={{ margin: "0 0 10px" }}>
        返金・キャンセル：<Link href="/legal/refund">/legal/refund</Link>
      </p>
      <p style={{ margin: "0 0 18px" }}>
        サポート：<Link href="/support">/support</Link>
      </p>

      <p style={{ margin: 0, fontSize: 12, opacity: 0.75 }}>
        本サービスは医療・法律・投資等の助言ではありません。
      </p>
    </main>
  );
}