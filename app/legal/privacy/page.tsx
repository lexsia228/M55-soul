import Link from "next/link";

export const metadata = { title: "プライバシーポリシー | M55" };

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 56px", lineHeight: 1.8 }}>
      <p style={{ margin: "0 0 10px" }}><Link href="/">M55 Home</Link></p>
      <h1 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>プライバシーポリシー</h1>

      <p style={{ margin: "0 0 14px" }}>
        当方は、本サービス提供のため、必要な範囲でユーザー情報を取得・利用します。
      </p>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>取得する情報</h2>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        <li>認証に必要な情報（アカウント識別子等）</li>
        <li>お問い合わせ内容</li>
        <li>アクセスログ等（不正防止・品質改善）</li>
      </ul>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>利用目的</h2>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        <li>サービス提供、本人確認、不正防止</li>
        <li>サポート対応</li>
        <li>品質改善、障害対応</li>
      </ul>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>第三者提供</h2>
      <p style={{ margin: 0 }}>
        法令に基づく場合等を除き、本人の同意なく第三者に提供しません。
      </p>

      <h2 style={{ fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>お問い合わせ</h2>
      <p style={{ margin: 0 }}>サポート：<Link href="/support">/support</Link></p>
    </main>
  );
}