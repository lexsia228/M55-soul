import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import styles from './core.module.css';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

/**
 * DTR Core コンチE��チE��保護ペ�Eジ�E�E * Defense in Depth: supabaseAdmin で entitlements を直接確認。public スキーマ、E * 権利がなぁE��合�E /dtr/lp へリダイレクト、E */
export default async function DtrCorePage() {
  const { userId } = await auth();
  if (!userId) {
    redirect('/dtr/lp');
  }

  let supabaseAdmin;
  try {
    supabaseAdmin = getSupabaseAdmin();
  } catch {
    redirect('/dtr/lp');
  }

  const { data, error } = await supabaseAdmin
    .from('entitlements')
    .select('id')
    .eq('user_id', userId)
    .eq('product_id', 'DTR_CORE_STATIC_V1')
    .eq('status', 'active')
    .limit(1)
    .maybeSingle();

  if (error || !data) {
    redirect('/dtr/lp');
  }

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>DTR Core</h1>
        <p className={styles.desc}>M55解析コアコンチE��チE��保護コンチE��チE��E/p>
      </div>
    </main>
  );
}
