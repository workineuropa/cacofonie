'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext';

export default function Pain() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.style.animation = 'floatLoop 3s ease-in-out infinite';
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      de: 'Keine Kontakte zu deutschen Auftraggebern',
      ro: 'Fără contacte cu beneficiarii germani',
      en: 'No contacts with German clients',
      sr: 'Bez kontakata sa nemačkim naručiocima',
      pl: 'Brak kontaktów z niemieckimi zleceniodawcami',
    },
    {
      de: 'Sprachbarrieren und Missverständnisse',
      ro: 'Bariere lingvistice și neînțelegeri',
      en: 'Language barriers and misunderstandings',
      sr: 'Jezičke barijere i nesporazumi',
      pl: 'Bariery językowe i nieporozumienia',
    },
    {
      de: 'Unbekannte Ausschreibungsverfahren',
      ro: 'Proceduri de licitație necunoscute',
      en: 'Unknown tender procedures',
      sr: 'Nepoznate procedure tendera',
      pl: 'Nieznane procedury przetargowe',
    },
    {
      de: 'Entsenderecht und Sozialversicherung',
      ro: 'Dreptul de detașare și asigurări sociale',
      en: 'Posted workers law and social security',
      sr: 'Pravo na upućivanje i socijalno osiguranje',
      pl: 'Prawo delegowania i ubezpieczenia społeczne',
    },
  ];

  return (
    <div className="pain-outer">
      <div className="pain-inner">
        {/* Row 1 */}
        <div className="pain-row">
          <div className="pain-card">
            <div className="pain-icon">⚠</div>
            {t(cards[0].de, cards[0].ro, cards[0].en, cards[0].sr, cards[0].pl)}
          </div>
          <div className="pain-card">
            <div className="pain-icon">⚠</div>
            {t(cards[1].de, cards[1].ro, cards[1].en, cards[1].sr, cards[1].pl)}
          </div>
        </div>

        {/* Central */}
        <div className="pain-central" ref={ref}>
          <h2>
            {t(
              'Wir kennen die Hürden. Deshalb beginnt Ihr Weg nach Deutschland hier.',
              'Cunoaștem obstacolele. De aceea, drumul tău spre Germania începe aici.',
              'We know the hurdles. That\'s why your path to Germany starts here.',
              'Znamo prepreke. Zato vaš put do Nemačke počinje ovde.',
              'Znamy przeszkody. Dlatego Twoja droga do Niemiec zaczyna się tutaj.'
            )}
          </h2>
        </div>

        {/* Row 2 */}
        <div className="pain-row">
          <div className="pain-card">
            <div className="pain-icon">⚠</div>
            {t(cards[2].de, cards[2].ro, cards[2].en, cards[2].sr, cards[2].pl)}
          </div>
          <div className="pain-card">
            <div className="pain-icon">⚠</div>
            {t(cards[3].de, cards[3].ro, cards[3].en, cards[3].sr, cards[3].pl)}
          </div>
        </div>
      </div>
    </div>
  );
}
