'use client';

import Link from 'next/link';
import PurchaseButton from '../../../components/PurchaseButton';
import styles from './lp.module.css';

/**
 * DTR Core Static V1 繝ｩ繝ｳ繝・ぅ繝ｳ繧ｰ繝壹・繧ｸ
 * - 雉ｼ蜈･繝懊ち繝ｳ: PurchaseButton (productId: DTR_CORE_STATIC_V1)
 * - 萓｡譬ｼ陦ｨ遉ｺ: 雉ｼ蜈･逕ｻ髱｢縺ｫ陦ｨ遉ｺ・育ｨ手ｾｼ・俄・Stripe Checkout 逕ｻ髱｢縺ｧ遞手ｾｼ萓｡譬ｼ繧定｡ｨ遉ｺ縺吶ｋ險ｭ險・ */
export default function DtrLpPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>DTR Core Static V1</h1>
        <p className={styles.desc}>
          M55髑大ｮ壹さ繧｢繧ｳ繝ｳ繝・Φ繝・・髱咏噪迚医〒縺吶・        </p>
        <div className={styles.price}>
          <span className={styles.priceLabel}>萓｡譬ｼ</span>
          <span className={styles.priceValue}>雉ｼ蜈･逕ｻ髱｢縺ｫ陦ｨ遉ｺ・育ｨ手ｾｼ・・/span>
        </div>
        <div className={styles.actions}>
          <PurchaseButton productId="DTR_CORE_STATIC_V1" className={styles.btn}>
            雉ｼ蜈･縺吶ｋ
          </PurchaseButton>
        </div>
        <p className={styles.legal}>
          <Link href="/legal/tokushoho">迚ｹ螳壼膚蜿門ｼ墓ｳ輔↓蝓ｺ縺･縺剰｡ｨ險・/Link>
        </p>
      </div>
    </main>
  );
}
