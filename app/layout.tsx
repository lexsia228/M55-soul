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
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
