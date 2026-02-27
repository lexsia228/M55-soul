import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './support.module.css';

export const metadata: Metadata = {
  title: 'サポート | M55',
  description: 'M55のお問い合わせ窓口です。',
};

/**
 * サポートページ
 * SSOT v2 準拠。監視可能なメール窓口。返信目安は断言を避ける。
 */
export default function SupportPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>サポート</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>
          <p className={styles.text}>
            ご不明点・ご要望は下記メールアドレスまでお送りください。
            <br />
            メール: lexsia228@gmail.com
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>返信について</h2>
          <p className={styles.text}>
            通常、2〜5営業日程度でご返信するよう努めております。
            お急ぎの場合は件名にその旨をご記載ください。
          </p>
        </section>

        <p className={styles.back}>
          <Link href="/">トップページへ戻る</Link>
        </p>
      </div>
    </main>
  );
}
