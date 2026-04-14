'use client';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { useLang } from '../context/LangContext';

const h1Lines: Record<string, ReactNode> = {
  de: <><span>Ihr Weg zu deutschen</span><br /><span>Bauprojekten.</span></>,
  ro: <><span>Drumul tău spre</span><br /><span>proiecte germane.</span></>,
  en: <><span>Your Gateway to</span><br /><span>German Construction.</span></>,
  sr: <><span>Vaš most do</span><br /><span>nemačkih projekata.</span></>,
  pl: <><span>Twój most do</span><br /><span>projektów w Niemczech.</span></>,
};

export default function Hero() {
  const { lang, t } = useLang();

  const openZcal = () => window.open('https://zcal.co/yasemin/projekt', '_blank');

  return (
    <div style={{ background: 'linear-gradient(180deg, var(--off) 80%, #e8e8e8 100%)', paddingTop: '68px', overflow: 'hidden' }}>
      <div className="hero-outer-wrap" style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px 100px' }}>

        {/* H1 — always exactly 2 lines */}
        <h1 className="hero-h1" style={{
          fontSize: '80px', lineHeight: '84px', letterSpacing: '-3px', fontWeight: 700,
          maxWidth: '920px', marginBottom: '80px',
          animation: 'fadeUp .7s cubic-bezier(.22,.68,0,1.1) .05s both',
        }}>
          {h1Lines[lang] ?? h1Lines['de']}
        </h1>

        {/* Grid */}
        <div className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center',
          animation: 'fadeUp .7s cubic-bezier(.22,.68,0,1.1) .25s both',
        }}>
          {/* Bild */}
          <div className="hero-img-wrap">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/11', borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="/hero.jpg"
                alt={t('Glasfaser-Messe Deutschland', 'Expoziție Glasfaser Germania', 'Fiber optics trade show Germany', 'Sajam optičkih vlakana Nemačka', 'Targi światłowodów Niemcy')}
                fill
                style={{ objectFit: 'cover', objectPosition: '62% center' }}
                priority
                sizes="(max-width: 768px) 100vw, 640px"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px',
                background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
                borderRadius: '6px', padding: '8px 14px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF7A59', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#fff', fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                  {t('Glasfaser-Messe · Deutschland', 'Expoziție Glasfaser · Germania', 'Fiber Optics Expo · Germany', 'Sajam Glasfaser · Nemačka', 'Targi Glasfaser · Niemcy')}
                </span>
              </div>
            </div>
          </div>

          {/* Text + Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <span className="s-label">
              {t(
                'OSTEUROPÄISCHE BAUFIRMEN · DEUTSCHER MARKT',
                'FIRME DIN EUROPA DE EST · PIAȚA GERMANĂ',
                'EASTERN EUROPEAN FIRMS · GERMAN MARKET',
                'FIRME IZ ISTOČNE EVROPE · NEMAČKO TRŽIŠTE',
                'FIRMY Z EUROPY WSCHODNIEJ · RYNEK NIEMIEC'
              )}
            </span>

            <p className="hero-body-para" style={{
              fontSize: '22px', fontWeight: 400, lineHeight: '32px',
              letterSpacing: '-0.2px', color: 'var(--black)',
            }}>
              {t(
                'Wir verbinden leistungsstarke Baufirmen aus Osteuropa — mit Schwerpunkt Rumänien — mit Aufträgen in Deutschland. Von Glasfaser bis Brückenbau. Mehrsprachig, erfahren, gut vernetzt.',
                'Conectăm firme de construcții din Europa de Est cu proiecte în Germania. Glasfaser, poduri, infrastructură — multilingv, cu experiență, bine conectați.',
                'We connect construction firms from Eastern Europe — focused on Romania — with projects in Germany. Fiber optics to bridge construction. Multilingual, experienced, well-connected.',
                'Povezujemo građevinske firme iz Istočne Evrope sa projektima u Nemačkoj. Optička vlakna, mostovi, infrastruktura — višejezični, iskusni, dobro umreženi.',
                'Łączymy firmy budowlane z Europy Wschodniej z projektami w Niemczech. Światłowody, mosty, infrastruktura — wielojęzyczni, doświadczeni, dobrze połączeni.'
              )}
            </p>

            <div className="hero-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'nowrap', alignItems: 'stretch' }}>
              <button className="sdb-btn sdb-dark" onClick={openZcal}>
                <span className="sdb-label">{t('Termin vereinbaren', 'Programează', 'Book a call', 'Zakaži razgovor', 'Umów rozmowę')}</span>
                <span className="sdb-icon">↗</span>
              </button>
              <a className="sdb-btn sdb-ghost" href="#sektoren">
                <span className="sdb-label">{t('Unsere Sektoren', 'Sectoarele noastre', 'Our sectors', 'Naši sektori', 'Nasze sektory')}</span>
                <span className="sdb-icon">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
