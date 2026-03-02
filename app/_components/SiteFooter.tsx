import Link from "next/link";

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.12)", marginTop: 32, padding: "16px 0 24px" }}>
      <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: 12, fontSize: 12, lineHeight: 1.7 }}>
        <Link href="/">M55 Home</Link>
        <Link href="/dtr/lp">Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/legal/tokushoho">特定商取引法</Link>
        <Link href="/legal/terms">利用規約</Link>
        <Link href="/legal/privacy">プライバシーポリシー</Link>
        <Link href="/legal/refund">返金・キャンセル</Link>
        <Link href="/support">サポート</Link>
      </nav>
      <p style={{ margin: "12px 0 0", fontSize: 12, opacity: 0.7 }}>© 2026 M55 Project</p>
    </footer>
  );
}