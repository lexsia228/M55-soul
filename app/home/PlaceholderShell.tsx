'use client';

import Link from 'next/link';
import './home.css';

type TabId = 'home' | 'tarot' | 'ai-chat' | 'dtr' | 'my';

export default function PlaceholderShell({
  children,
  activeBottomTab = 'home',
}: {
  children: React.ReactNode;
  activeBottomTab?: TabId;
}) {
  return (
    <div className="home-hub">
      <div className="app-shell main-container">
        <header className="app-header">
          <Link href="/home" className="app-title" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="app-logo-orb" />
            <span className="app-logo-text">M55</span>
          </Link>
          <div className="header-right" />
        </header>
        <main className="home-main content-area">{children}</main>
        <nav className="bottom-nav" aria-label="ボトムナビ">
          <div className="bottom-nav-inner">
            <Link href="/home" className={`nav-item${activeBottomTab === 'home' ? ' active' : ''}`}>
              <span>🏠</span>ホーム
            </Link>
            <Link href="/tarot" className={`nav-item${activeBottomTab === 'tarot' ? ' active' : ''}`}>
              <span>🃏</span>タロット
            </Link>
            <Link href="/ai-chat" className={`nav-item${activeBottomTab === 'ai-chat' ? ' active' : ''}`}>
              <span>💬</span>AIチャット
            </Link>
            <Link href="/dtr" className={`nav-item${activeBottomTab === 'dtr' ? ' active' : ''}`}>
              <span>📜</span>プレミアム鑑定
            </Link>
            <Link href="/my" className={`nav-item${activeBottomTab === 'my' ? ' active' : ''}`}>
              <span>👤</span>マイページ
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
