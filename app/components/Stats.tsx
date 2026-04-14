'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LangContext';

function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function StatItem({ num, unit, label }: { num: number; unit: string; label: string }) {
  const { value, ref } = useCounter(num);
  return (
    <div className="stat-item" ref={ref}>
      <div style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}>
        <span className="stat-num">{value}</span>
        {unit && <span className="stat-unit">{unit}</span>}
      </div>
      <span className="stat-lbl">{label}</span>
    </div>
  );
}

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="s white-s" style={{ padding: 0 }}>
      <div className="s-inner" style={{ maxWidth: '100%', padding: 0 }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 40px 60px' }}>
          <div className="s-top">
            <div>
              <span className="s-label">{t('In Zahlen', 'În cifre', 'By the numbers', 'U brojevima', 'W liczbach')}</span>
              <h2>{t('Bewährte Expertise. Messbare Ergebnisse.', 'Expertiză dovedită. Rezultate măsurabile.', 'Proven expertise. Measurable results.', 'Dokazana stručnost. Merljivi rezultati.', 'Sprawdzona ekspertyza. Mierzalne wyniki.')}</h2>
            </div>
            <p className="body-md" style={{ maxWidth: '360px' }}>
              {t(
                'Seit Jahren bauen wir Brücken zwischen osteuropäischen Baufirmen — mit Schwerpunkt Rumänien — und dem deutschen Markt.',
                'De ani de zile construim punți între firmele de construcții din Europa de Est — cu focus pe România — și piața germană.',
                'For years we have been building bridges between Eastern European construction firms — with a focus on Romania — and the German market.',
                'Godinama gradimo mostove između istočnoevropskih građevinskih firmi — s fokusom na Rumuniju — i nemačkog tržišta.',
                'Od lat budujemy mosty między firmami budowlanymi z Europy Wschodniej — z fokusem na Rumunię — a rynkiem niemieckim.'
              )}
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="stats-row" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <StatItem num={80} unit="+" label={t('Vermittelte Projekte', 'Proiecte mediate', 'Projects matched', 'Posredovanih projekata', 'Pośredniczonych projektów')} />
          <StatItem num={6} unit="" label={t('Bausektoren', 'Sectoare de construcții', 'Construction sectors', 'Građevinski sektori', 'Sektory budowlane')} />
          <StatItem num={5} unit="" label={t('Sprachen DE · RO · EN · SR · PL', 'Limbi DE · RO · EN · SR · PL', 'Languages DE · RO · EN · SR · PL', 'Jezika DE · RO · EN · SR · PL', 'Języki DE · RO · EN · SR · PL')} />
        </div>
      </div>
    </section>
  );
}
