'use client';

import { useState } from 'react';

/**
 * productId → 環境変数マッピング
 * DTR_CORE_STATIC_V1 は STRIPE_PRICE_DTR_CORE_STATIC_V1 を参照
 */
const PRODUCT_ID_TO_ENV: Record<string, string> = {
  DTR_CORE_STATIC_V1: 'STRIPE_PRICE_DTR_CORE_STATIC_V1',
};

export type PurchaseButtonProps = {
  productId: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * 購入ボタン
 * productId を受け取り、/api/purchase/checkout へ productId を送信して Stripe Checkout へリダイレクト
 */
export default function PurchaseButton({
  productId,
  children = '購入する',
  className,
}: PurchaseButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/purchase/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? `Error ${res.status}`);
      }
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Checkout URL not returned');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'エラーが発生しました');
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={className}
        aria-busy={loading}
        aria-live="polite"
      >
        {loading ? '処理中...' : children}
      </button>
      {error && (
        <p role="alert" style={{ marginTop: 8, fontSize: 14, color: '#c00' }}>
          {error}
        </p>
      )}
    </div>
  );
}

export { PRODUCT_ID_TO_ENV };
