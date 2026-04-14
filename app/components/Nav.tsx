'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLang } from '../context/LangContext';
import type { Lang } from '../context/LangContext';


export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openZcal = () => {
    window.open('https://zcal.co/lore/projekt', '_blank');
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '#sektoren', de: 'Sektoren',  ro: 'Sectoare',   en: 'Sectors', pl: 'Sektory'  },
    { href: '#prozess',  de: 'Prozess',   ro: 'Proces',     en: 'Process', pl: 'Proces'   },
    { href: '#ueber',    de: 'Über uns',  ro: 'Despre noi', en: 'About',   pl: 'O nas'    },
    { href: '#kontakt',  de: 'Kontakt',   ro: 'Contact',    en: 'Contact', pl: 'Kontakt'  },
  ];

  const allLangs: { code: Lang; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'ro', label: 'RO' },
    { code: 'en', label: 'EN' },
    { code: 'sr', label: 'SR' },
    { code: 'pl', label: 'PL' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '68px',
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        display: 'flex', alignItems: 'center', padding: '0 40px',
        zIndex: 1000,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color .3s, background .3s',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo-v2.png" alt="Cacofonie" width={46} height={36} style={{ objectFit: 'contain' }} priority />
          <span style={{
            fontSize: '14px', fontWeight: 700, color: 'var(--black)',
            letterSpacing: '-0.2px', fontFamily: 'var(--font)',
          }}>Cacofonie</span>
        </a>

        {/* Desktop Nav links */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {t(link.de, link.ro, link.en, undefined, link.pl)}
            </a>
          ))}
        </div>

        {/* Right: Language + Button + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Language Switcher — 7 languages */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1px', flexWrap: 'nowrap' }}>
            {allLangs.map((l, i) => (
              <span key={l.code} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <span style={{ color: '#ddd', fontSize: '9px', margin: '0 1px' }}>·</span>}
                <button onClick={() => setLang(l.code)} className="lang-btn" style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '10px', fontWeight: lang === l.code ? 700 : 400,
                  color: lang === l.code ? 'var(--black)' : 'var(--g400)',
                  fontFamily: 'var(--font)', textTransform: 'uppercase',
                  letterSpacing: '0.05em', padding: '2px 2px',
                }}>{l.label}</button>
              </span>
            ))}
          </div>

          {/* Desktop Button */}
          <button className="btn-nav nav-cta-desktop" onClick={openZcal}>
            <span className="btn-label">{t('Termin vereinbaren', 'Programează', 'Book a call')}</span>
            <span className="btn-arrow">↗</span>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none', background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px', flexDirection: 'column', gap: '5px',
            }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--black)', transition: 'transform .25s, opacity .25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--black)', transition: 'opacity .25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--black)', transition: 'transform .25s, opacity .25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 999, display: 'flex', flexDirection: 'column',
          padding: '32px 40px', gap: '0',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '28px', fontWeight: 700, color: 'var(--black)',
                textDecoration: 'none', padding: '18px 0',
                borderBottom: '1px solid var(--border)', letterSpacing: '-0.5px',
              }}
            >
              {t(link.de, link.ro, link.en, undefined, link.pl)}
            </a>
          ))}
          <button
            onClick={openZcal}
            style={{
              marginTop: '32px', background: 'var(--black)', color: '#fff',
              border: 'none', padding: '18px 24px', fontSize: '16px', fontWeight: 600,
              fontFamily: 'var(--font)', cursor: 'pointer', textAlign: 'left',
              borderRadius: '4px',
            }}
          >
            {t('Termin vereinbaren', 'Programează', 'Book a call')} ↗
          </button>
        </div>
      )}
    </>
  );
}
