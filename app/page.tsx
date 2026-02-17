import { redirect } from 'next/navigation';

/**
 * Phase 7-B: ルート / は /home へサーバーサイド即座にリダイレクト
 */
export default function RootPage() {
  redirect('/home');
}
