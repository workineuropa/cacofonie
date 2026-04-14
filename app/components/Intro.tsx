'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Phrase = { text: string; dir?: 'rtl' } | { logo: true };

const phrases: Phrase[] = [
  { text: 'Vertrauen.' },
  { text: 'Încredere.' },
  { text: 'Поверење.' },
  { logo: true },
];

const HOLD      = 900;
const TEXT_FADE = 320;
const PAUSE     = 60;
const OUTRO     = 900;

export default function Intro() {
  const [index, setIndex]             = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [overlayOut, setOverlayOut]   = useState(false);
  const [hidden, setHidden]           = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const add = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };

  useEffect(() => {
    add(() => setTextVisible(true), 60);
    let t = 60 + TEXT_FADE + HOLD;

    for (let i = 1; i < phrases.length; i++) {
      const nextI = i;
      add(() => setTextVisible(false), t);
      t += TEXT_FADE + PAUSE;
      const hold = nextI === phrases.length - 1 ? 1400 : HOLD;
      add(() => { setIndex(nextI); setTextVisible(true); }, t);
      t += hold;
    }

    add(() => setTextVisible(false), t);
    t += TEXT_FADE + 100;
    add(() => setOverlayOut(true), t);
    add(() => setHidden(true), t + OUTRO + 100);

    return () => timers.current.forEach(clearTimeout);
  }, []);

  if (hidden) return null;

  const phrase = phrases[index];
  const isLogo = 'logo' in phrase;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#131313',
      zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: overlayOut ? 0 : 1,
      transition: `opacity ${OUTRO}ms cubic-bezier(.4,0,.2,1)`,
      pointerEvents: overlayOut ? 'none' : 'all',
    }}>
      <div style={{
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity ${TEXT_FADE}ms cubic-bezier(.4,0,.2,1), transform ${TEXT_FADE}ms cubic-bezier(.4,0,.2,1)`,
        userSelect: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 32px',
      }}>
        {isLogo ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{
              background: '#fff', borderRadius: '10px', padding: '8px 12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Image src="/logo-v2.png" alt="Cacofonie" width={52} height={42} style={{ objectFit: 'contain', display: 'block' }} />
            </div>
            <span className="intro-text" style={{ color: '#ffffff', fontFamily: 'var(--font)' }}>
              Cacofonie
            </span>
          </div>
        ) : (
          <p
            className="intro-text"
            dir={'dir' in phrase ? phrase.dir : undefined}
            style={{ color: '#ffffff', fontFamily: 'var(--font)', textAlign: 'center', margin: 0 }}
          >
            {(phrase as { text: string }).text}
          </p>
        )}
      </div>
    </div>
  );
}
