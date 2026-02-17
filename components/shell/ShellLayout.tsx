'use client';

import { usePathname, useRouter } from 'next/navigation';
import LegacyFrame from '../../src/components/legacy/LegacyFrame';
import styles from './ShellLayout.module.css';

type TabId = '/home' | '/tarot' | '/ai-chat' | '/dtr' | '/my';

const TABS: { href: TabId; label: string; svg: React.ReactNode }[] = [
  {
    href: '/home',
    label: 'ホーム',
    svg: (
      <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: '/tarot',
    label: 'タロット',
    svg: (
      <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="13" y2="15" />
      </svg>
    ),
  },
  {
    href: '/ai-chat',
    label: 'AIチャット',
    svg: (
      <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    href: '/dtr',
    label: '鑑定',
    svg: (
      <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    href: '/my',
    label: 'マイページ',
    svg: (
      <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function ShellLayout({
  iframeSrc,
  iframeTitle,
  useDataBridge,
}: {
  iframeSrc: string;
  iframeTitle: string;
  useDataBridge?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const iframeProps = {
    className: styles.iframe,
    sandbox: 'allow-scripts allow-same-origin allow-forms' as const,
    referrerPolicy: 'no-referrer' as const,
  };

  return (
    <div className={styles.wrapper}>
      {useDataBridge ? (
        <LegacyFrame src={iframeSrc} title={iframeTitle} {...iframeProps} />
      ) : (
        <iframe src={iframeSrc} title={iframeTitle} {...iframeProps} />
      )}
      <nav className={styles.bottomNav} aria-label="ボトムナビ">
        <div className={styles.bottomNavInner}>
          {TABS.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <button
                key={tab.href}
                type="button"
                className={styles.navItem}
                style={{ opacity: isActive ? 1 : 0.3 }}
                onClick={() => router.push(tab.href)}
                aria-label={tab.label}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab.svg}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
