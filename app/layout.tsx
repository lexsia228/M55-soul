import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { jaJP } from '@clerk/localizations';
import './globals.css';

export const metadata: Metadata = {
  title: 'M55',
  description: 'M55 Phase6 Next.js integration shell'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={jaJP}
  appearance={{
    variables: { colorPrimary: '#ffffff' },
    elements: {
      card: 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-none',
      headerTitle: 'text-white/90 font-light',
      headerSubtitle: 'text-white/45',
      socialButtonsBlockButton: 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80',
      formButtonPrimary: 'bg-white/90 hover:bg-white text-black text-xs uppercase tracking-widest',
      footerActionText: 'text-white/45',
      footerActionLink: 'text-white/80 hover:text-white',
      identityPreviewText: 'text-white/90',
      identityPreviewEditButton: 'text-white/45 hover:text-white'
    }
  }}
>
      <html lang="ja">
        <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
          <div style={{ flex: '1 0 auto' }}>
            {children}
          </div>
          <footer style={{ flexShrink: 0, padding: '16px 12px', borderTop: '1px solid rgba(0,0,0,0.10)', textAlign: 'center', fontSize: 11, opacity: 0.65 }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/legal/tokushoho" style={{ textDecoration: 'underline', color: 'inherit' }}>特定商取引法</a>
              <a href="/legal/terms" style={{ textDecoration: 'underline', color: 'inherit' }}>利用規約</a>
              <a href="/legal/privacy" style={{ textDecoration: 'underline', color: 'inherit' }}>プライバシーポリシー</a>
              <a href="/support" style={{ textDecoration: 'underline', color: 'inherit' }}>サポート</a>
              <span>© 2026 M55 Project</span>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
