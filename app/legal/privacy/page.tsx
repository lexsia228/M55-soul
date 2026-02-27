import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | M55',
  description: 'M55のプライバシーポリシーです。',
};

/**
 * プライバシーポリシーページ
 * SSOT v2 準拠。個人情報最小限。禁止語なし。
 */
export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>プライバシーポリシー</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>収集する情報</h2>
          <p className={styles.text}>
            アカウント識別子、決済識別子、アクセスログ、ご利用端末情報などを収集することがあります。
            住所・電話番号は、請求があった場合に遅滞なく開示いたします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>利用目的</h2>
          <p className={styles.text}>
            サービス提供、本人確認、決済処理、お問い合わせ対応、改善のための分析に利用します。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第三者提供</h2>
          <p className={styles.text}>
            決済処理・ホスティング・認証等に必要な範囲で、Stripe、Supabase、Vercel 等のサービスに委託することがあります。
            必要最小限の委託に限ります。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>
          <p className={styles.text}>
            個人情報の取り扱いに関するご質問は、下記窓口までご連絡ください。
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
