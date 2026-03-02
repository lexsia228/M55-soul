import Link from "next/link";

export const metadata = {
  title: "特定商取引法に基づく表記 | M55",
};

export default function TokushohoPage() {
  return (
    <main style={{
      maxWidth: 860,
      margin: "0 auto",
      padding: "24px 16px 56px",
      lineHeight: 1.7,
    }}>
      <h1 style={{
        fontSize: 22,
        fontWeight: 600,
        margin: "0 0 12px",
      }}>
        特定商取引法に基づく表記
      </h1>

      <p style={{
        margin: "0 0 16px",
        opacity: 0.9,
      }}>
        当サイトは、オンラインで提供するデジタルコンテンツ（レポート）を販売しています。
      </p>

      <section style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 12,
        padding: 16,
        margin: "0 0 16px",
      }}>
        <h2 style={{
          fontSize: 14,
          fontWeight: 700,
          margin: "0 0 8px",
        }}>
          事業者情報
        </h2>

        <ul style={{
          margin: 0,
          paddingLeft: 18,
        }}>
          <li>販売事業者：M55 Project</li>
          <li>連絡先メールアドレス：lexsia228@gmail.com</li>
          <li>所在地・電話番号：ご請求をいただければ遅滞なく開示いたします。</li>
        </ul>
      </section>

      <section style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 12,
        padding: 16,
        margin: "0 0 16px",
      }}>
        <h2 style={{
          fontSize: 14,
          fontWeight: 700,
          margin: "0 0 8px",
        }}>
          商品・価格
        </h2>

        <p style={{
          margin: "0 0 6px",
        }}>
          <strong>DTR Core Static V1</strong>
        </p>

        <ul style={{
          margin: 0,
          paddingLeft: 18,
        }}>
          <li>販売価格：¥1,000（税込）</li>
          <li>提供方法：決済完了後にウェブ上で閲覧可能（物理配送なし）</li>
          <li>支払方法：クレジットカード（Link対応）</li>
        </ul>
      </section>

      <section style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 12,
        padding: 16,
        margin: "0 0 16px",
      }}>
        <h2 style={{
          fontSize: 14,
          fontWeight: 700,
          margin: "0 0 8px",
        }}>
          返品・返金
        </h2>

        <p style={{
          margin: 0,
        }}>
          返金・キャンセルの条件は <Link href="/legal/refund">/legal/refund</Link> を参照してください。
        </p>
      </section>

      <p style={{
        margin: 0,
        fontSize: 12,
        opacity: 0.75,
      }}>
        本サービスはユーザー入力に基づく情報整理のレポートであり、医療・法律・投資等の助言ではありません。
      </p>
    </main>
  );
}
