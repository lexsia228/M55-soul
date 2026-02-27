import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './refund.module.css';

export const metadata: Metadata = {
  title: '返金・キャンセル | M55',
  description: 'M55の返金・キャンセルポリシーです。',
};

/**
 * 返金・キャンセルページ（Stripe審査必須）
 * 誇張・未来予告は禁止。事実のみ。
 */
export default function RefundPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>返金・キャンセル</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>返金について</h2>
          <p className={styles.text}>
            デジタルコンテンツの性質上、原則として返金には応じられません。
            二重請求や決済処理の誤りなど、決済上の問題が確認された場合は個別に対応いたします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>解約について</h2>
          <p className={styles.text}>
            次回更新時点でご利用を停止できます。手続きが難しい場合はサポート窓口までご連絡ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>
          <p className={styles.text}>
            <Link href="/support">サポートページ</Link> からご連絡ください。
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
