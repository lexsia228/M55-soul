import Link from "next/link";

export const metadata = { title: "特定商取引法 | M55" };

export default function TokushohoPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px", lineHeight: 1.8 }}>
      <p style={{ margin: "0 0 10px" }}><Link href="/">M55 Home</Link></p>
      <h1 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>特定商取引法に基づく表記</h1>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>販売事業者</h2>
        <p style={{ margin: 0 }}>M55 Project</p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>お問い合わせ</h2>
        <p style={{ margin: 0 }}>サポート：<Link href="/support">/support</Link></p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>販売価格</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>DTR Core Static V1：¥1,000（税込）</li>
        </ul>
        <p style={{ margin: "6px 0 0" }}>※ 価格の最終表示は商品ページ（/dtr/lp）および決済画面の表示に従います。</p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>支払方法・支払時期</h2>
        <p style={{ margin: 0 }}>クレジットカード（Stripe）／決済確定時に課金されます。</p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>提供時期</h2>
        <p style={{ margin: 0 }}>決済完了後、当該コンテンツを閲覧できます。</p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>返品・キャンセル</h2>
        <p style={{ margin: 0 }}>デジタル提供の性質上、原則として購入後のキャンセル・返金はできません。詳細：<Link href="/legal/refund">/legal/refund</Link></p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>動作環境</h2>
        <p style={{ margin: 0 }}>最新の主要ブラウザ（Chrome / Safari / Edge）</p>
      </section>
    </main>
  );
}