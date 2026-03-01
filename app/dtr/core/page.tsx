import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import styles from './core.module.css';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

/**
 * DTR Core 繧ｳ繝ｳ繝・Φ繝・ｼ井ｿ晁ｭｷ繝壹・繧ｸ・・ * Defense in Depth: supabaseAdmin 縺ｧ entitlements 繧堤峩謗･遒ｺ隱阪Ｑublic 繧ｹ繧ｭ繝ｼ繝槭・ * 讓ｩ蛻ｩ縺後↑縺・ｴ蜷医・ /dtr/lp 縺ｸ繝ｪ繝繧､繝ｬ繧ｯ繝医・ */
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
        <p className={styles.desc}>M55髑大ｮ壹さ繧｢繧ｳ繝ｳ繝・Φ繝・ｼ井ｿ晁ｭｷ繧ｳ繝ｳ繝・Φ繝・ｼ・/p>
      </div>
    </main>
  );
}
