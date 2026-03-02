import Link from "next/link";

export const metadata = {
  title: "サポート | M55",
};

export default function SupportPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 12px" }}>サポート</h1>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>お問い合わせ</h2>
        <p style={{ margin: "0 0 6px", opacity: 0.9 }}>
          ご不明点・ご要望は下記メールアドレスまでお送りください。
        </p>
        <p style={{ margin: 0, opacity: 0.9 }}>
          メール：lexsia228@gmail.com
        </p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>返信について</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>
          通常、1〜3営業日程度でご返信するよう努めております（状況により前後します）。
        </p>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>対応範囲</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>購入・請求に関する確認</li>
          <li>閲覧権限の確認</li>
          <li>返金に関する相談（<Link href="/legal/refund">/legal/refund</Link>）</li>
          <li>アカウント/データに関する依頼</li>
        </ul>
      </section>

      <section style={{ margin: "0 0 18px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>ご連絡時に必要な情報</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>決済日時</li>
          <li>メールアドレス</li>
          <li>発生している状況</li>
        </ul>
      </section>

      <p style={{ margin: 0 }}>
        <Link href="/">トップページへ戻る</Link>
      </p>
    </main>
  );
}
