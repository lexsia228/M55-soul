import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: '利用規約 | M55',
  description: 'M55の利用規約です。',
};

/**
 * 利用規約ページ
 * SSOT v2 準拠。禁止語なし。返金不可条項必須。
 */
export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>利用規約</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>サービス概要</h2>
          <p className={styles.text}>
            本サービスはデジタルコンテンツの提供を目的としています。
            購入いただいたコンテンツは、決済完了後にご利用可能になります。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>禁止事項</h2>
          <p className={styles.text}>
            以下の行為は禁止いたします。不正アクセス、第三者への転売、
            過剰な自動アクセス・スクレイピング、その他法令・公序良俗に反する行為を含みます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>返金について</h2>
          <p className={styles.text}>
            デジタルコンテンツの性質上、購入確定後のキャンセルおよび返金には原則として応じられません。
            法令上必要な場合を除きます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>免責</h2>
          <p className={styles.text}>
            本サービスで提供するコンテンツは、一般的な範囲において利用できるよう努めておりますが、
            動作保証や結果の保証を行うものではありません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>
          <p className={styles.text}>
            ご不明点はサポート窓口までお問い合わせください。
            <br />
            メール: lexsia228@gmail.com
          </p>
        </section>

        <p className={styles.back}>
          <Link href="/">トップページへ戻る</Link>
        </p>
      </div>
    </main>
  );
}
