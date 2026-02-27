import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import successStyles from './success.module.css';
import { QuietPolling } from '../../../components/QuietPolling';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

/**
 * 購入成功ページ（Stripe決済直後のリダイレクト先）
 * SSOT: entitlements テーブルのみを信頼。クライアント側での権利付与は絶対に行わない。
 * Defense in Depth: supabaseAdmin で直接確認。public スキーマ。
 */
export default async function PurchaseSuccessPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect('/sign-in');
  }

  let supabaseAdmin;
  try {
    supabaseAdmin = getSupabaseAdmin();
  } catch {
    return <PurchaseSuccessFallback message="設定エラー" />;
  }

  const { data, error } = await supabaseAdmin
    .from('entitlements')
    .select('id')
    .eq('user_id', userId)
    .eq('product_id', 'DTR_CORE_STATIC_V1')
    .eq('status', 'active')
    .limit(1)
    .maybeSingle();

  if (error) {
    return <PurchaseSuccessFallback message="確認中にエラーが発生しました" />;
  }

  if (data) {
    redirect('/dtr/core?post_purchase=1');
  }

  return <PurchaseSuccessFallback />;
}

function PurchaseSuccessFallback({ message }: { message?: string }) {
  return (
    <main className={successStyles.page}>
      <div className={successStyles.inner}>
        <h1 className={successStyles.title}>購入完了</h1>
        {message ? (
          <p className={successStyles.desc}>{message}</p>
        ) : (
          <>
            <p className={successStyles.desc}>決済を確認しています...</p>
            <QuietPolling />
          </>
        )}
      </div>
    </main>
  );
}
