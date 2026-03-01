import Link from "next/link";

export const metadata = { title: "DTR | M55" };

export default function DtrLpPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: "1.25rem", margin: "0 0 12px" }}>DTR Core Static V1</h1>

      <p style={{ margin: "0 0 12px", lineHeight: 1.7 }}>
        本サービスはユーザー入力に基づく情報整理のレポートであり、医療・法律・投資等の助言ではありません。
      </p>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: "1rem", margin: "0 0 8px" }}>価格</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>¥1,000（税込）</li>
          <li>提供：購入後に閲覧可能（購入履歴に基づき再アクセス可能）</li>
          <li>支払い：カード（Link対応）</li>
        </ul>
      </section>

      <p style={{ margin: "0 0 10px" }}>返金：原則不可（詳細は <Link href="/legal/refund">/legal/refund</Link>）</p>
      <p style={{ margin: "0 0 18px" }}>サポート：<Link href="/support">/support</Link></p>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.12)", margin: "18px 0" }} />

      <nav style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12 }}>
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