'use client';
import Image from 'next/image';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="footer-logo">
          <Image src="/logo-v2.png" alt="Cacofonie" width={36} height={28} style={{ objectFit: 'contain' }} />
          <span className="logo-text" style={{ color: 'var(--white)' }}>Cacofonie</span>
        </a>
        <span className="footer-copy">© 2026 Cacofonie Consulting · cacofonie.ro</span>
        <ul className="footer-links">
          <li><a href="#sektoren">{t('Sektoren', 'Sectoare', 'Sectors', 'Sektori', 'Sektory')}</a></li>
          <li><a href="#prozess">{t('Prozess', 'Proces', 'Process', 'Proces', 'Proces')}</a></li>
          <li><a href="#ueber">{t('Über uns', 'Despre noi', 'About', 'O nama', 'O nas')}</a></li>
          <li><a href="#kontakt">{t('Kontakt', 'Contact', 'Contact', 'Kontakt', 'Kontakt')}</a></li>
        </ul>
        {/* Social links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* YouTube */}
          <a href="https://www.youtube.com/channel/UCQbpOxoYLknBR77D7MAv5dw" target="_blank" rel="noopener noreferrer"
            style={{ color: '#666', transition: 'color .2s', display: 'flex', alignItems: 'center' }}
            onMouseOver={e => (e.currentTarget.style.color='#FF0000')}
            onMouseOut={e => (e.currentTarget.style.color='#666')}
            aria-label="YouTube">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@cacofonie_" target="_blank" rel="noopener noreferrer"
            style={{ color: '#666', transition: 'color .2s', display: 'flex', alignItems: 'center' }}
            onMouseOver={e => (e.currentTarget.style.color='#fff')}
            onMouseOut={e => (e.currentTarget.style.color='#666')}
            aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
            </svg>
          </a>
        </div>
        {/* 5 languages */}
        <div style={{ fontSize: '11px', color: '#333', letterSpacing: '0.06em' }}>
          DE · RO · EN · SR · PL
        </div>
      </div>
    </footer>
  );
}
