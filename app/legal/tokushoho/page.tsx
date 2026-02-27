import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './tokushoho.module.css';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | M55',
  description: 'M55の特定商取引法に基づく表記ページです。',
};

/**
 * 特定商取引法に基づく表記ページ
 * Stripe審査必須。事業者情報はプレースホルダー（ご自身の〜）で記載し、運用前に実データへ差し替えてください。
 */
export default function TokushohoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>特定商取引法に基づく表記</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>販売事業者</h2>
          <dl className={styles.dl}>
            <dt className={styles.dt}>販売事業者名</dt>
            <dd className={styles.dd}>（ご自身の事業者名・屋号を記載してください）</dd>

            <dt className={styles.dt}>代表者名</dt>
            <dd className={styles.dd}>（ご自身の代表者名を記載してください）</dd>

            <dt className={styles.dt}>所在地</dt>
            <dd className={styles.dd}>請求があった場合、遅滞なく開示いたします。</dd>

            <dt className={styles.dt}>電話番号</dt>
            <dd className={styles.dd}>請求があった場合、遅滞なく開示いたします。</dd>

            <dt className={styles.dt}>メールアドレス</dt>
            <dd className={styles.dd}>lexsia228@gmail.com</dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>販売価格・送料等</h2>
          <dl className={styles.dl}>
            <dt className={styles.dt}>販売価格</dt>
            <dd className={styles.dd}>各商品の購入画面に表示（税込）</dd>

            <dt className={styles.dt}>送料</dt>
            <dd className={styles.dd}>デジタルコンテンツのため送料は発生しません。</dd>

            <dt className={styles.dt}>その他手数料</dt>
            <dd className={styles.dd}>決済手数料は販売価格に含まれています。</dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>代金の支払い時期・方法</h2>
          <dl className={styles.dl}>
            <dt className={styles.dt}>支払い時期</dt>
            <dd className={styles.dd}>クレジットカード決済の場合はご注文確定時にお支払いが確定します。</dd>

            <dt className={styles.dt}>支払い方法</dt>
            <dd className={styles.dd}>クレジットカード決済（Stripe経由）</dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>商品の引渡時期</h2>
          <dl className={styles.dl}>
            <dt className={styles.dt}>引渡時期</dt>
            <dd className={styles.dd}>デジタルコンテンツにつき、決済完了後、即時にコンテンツをご利用いただけます。</dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>返品・交換について</h2>
          <dl className={styles.dl}>
            <dt className={styles.dt}>返品・キャンセル</dt>
            <dd className={styles.dd}>
              デジタルコンテンツの性質上、購入確定後のキャンセルおよび返金には原則として応じられません。法令上必要な場合を除きます。
              決済処理の誤りや当社の過失による場合については、個別に対応いたします。
            </dd>

            <dt className={styles.dt}>不良品の対応</dt>
            <dd className={styles.dd}>
              コンテンツの不具合等が確認された場合は、速やかに修正または返金に対応いたします。
              お問い合わせは上記メールアドレスまでご連絡ください。
            </dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>特定商取引法に基づく表記の表記責任者</h2>
          <dl className={styles.dl}>
            <dt className={styles.dt}>表記責任者</dt>
            <dd className={styles.dd}>上記販売事業者と同じ</dd>
          </dl>
        </section>

        <p className={styles.back}>
          <Link href="/">トップページへ戻る</Link>
        </p>
      </div>
    </main>
  );
}
