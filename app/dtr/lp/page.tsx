'use client';

import Link from 'next/link';
import PurchaseButton from '../../../components/PurchaseButton';
import styles from './lp.module.css';

/**
 * DTR Core Static V1 ランディングページ
 * - 購入ボタン: PurchaseButton (productId: DTR_CORE_STATIC_V1)
 * - 価格表示: 購入画面に表示（税込）— Stripe Checkout 画面で税込価格を表示する設計
 */
export default function DtrLpPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>DTR Core Static V1</h1>
        <p className={styles.desc}>
          M55鑑定コアコンテンツの静的版です。
        </p>
        <div className={styles.price}>
          <span className={styles.priceLabel}>価格</span>
          <span className={styles.priceValue}>購入画面に表示（税込）</span>
        </div>
        <div className={styles.actions}>
          <PurchaseButton productId="DTR_CORE_STATIC_V1" className={styles.btn}>
            購入する
          </PurchaseButton>
        </div>
        <p className={styles.legal}>
          <Link href="/legal/tokushoho">特定商取引法に基づく表記</Link>
        </p>
      </div>
    </main>
  );
}
