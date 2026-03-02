import Link from "next/link";

export const metadata = { title: "利用規約 | M55" };

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px", lineHeight: 1.8 }}>
      <p style={{ margin: "0 0 10px" }}><Link href="/">M55 Home</Link></p>
      <h1 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>利用規約</h1>

      <p style={{ margin: "0 0 14px" }}>
        本サービスはユーザー入力に基づく情報整理のレポートを提供します。医療・法律・投資等の助言ではありません。
      </p>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>禁止事項</h2>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        <li>法令または公序良俗に反する行為</li>
        <li>不正アクセス、スクレイピング、過度な負荷を与える行為</li>
        <li>第三者の権利侵害（著作権・プライバシー等）</li>
      </ul>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>料金・返金</h2>
      <p style={{ margin: 0 }}>
        料金は商品ページおよび決済画面に表示します。返金・キャンセルは <Link href="/legal/refund">/legal/refund</Link> を参照してください。
      </p>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>免責</h2>
      <p style={{ margin: 0 }}>
        本サービスの利用により生じた損害について、当方に故意または重過失がある場合を除き、当方は責任を負いません。
      </p>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>お問い合わせ</h2>
      <p style={{ margin: 0 }}>サポート：<Link href="/support">/support</Link></p>
    </main>
  );
}