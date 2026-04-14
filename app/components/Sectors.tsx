'use client';
import Image from 'next/image';
import { useLang } from '../context/LangContext';
import { Reveal, Stagger } from './RevealWrapper';

const SectorIcon = ({ src, alt, size = 120 }: { src: string; alt: string; size?: number }) => (
  <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
    <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} sizes={`${size}px`} loading="lazy" />
  </div>
);

export default function Sectors() {
  const { t } = useLang();

  return (
    <section id="sektoren" className="s white-s" style={{ padding: 0 }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 40px 0' }}>
        <Reveal>
          <div className="cap-top">
            <div>
              <span className="s-label">{t('Unsere Sektoren', 'Sectoarele noastre', 'Our sectors', 'Naši sektori', 'Nasze sektory')}</span>
              <h2>{t('Sechs Bereiche. Ein starker Partner.', 'Șase domenii. Un partener puternic.', 'Six sectors. One strong partner.', 'Šest oblasti. Jedan jak partner.', 'Sześć dziedzin. Jeden silny partner.')}</h2>
            </div>
            <p className="body-md">
              {t(
                'Wir sind spezialisiert auf die wichtigsten Wachstumssektoren des deutschen Baumarkts und vermitteln gezielt Kapazitäten aus Osteuropa dorthin.',
                'Suntem specializați în cele mai importante sectoare de creștere ale pieței germane și conectăm capacități din Europa de Est.',
                'We specialize in the key growth sectors of the German construction market, connecting capacity from Eastern Europe.',
                'Specijalizovani smo za najvažnije sektore rasta nemačkog tržišta građevinarstva i dovodimo kapacitete iz Istočne Evrope.',
                'Specjalizujemy się w kluczowych sektorach wzrostu niemieckiego rynku budowlanego i dostarczamy zdolności produkcyjne z Europy Wschodniej.'
              )}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Large cards */}
      <Stagger>
        <div className="cap-grid-large" style={{ maxWidth: '1160px', margin: '0 auto' }}>

          {/* 01 Glasfaser */}
          <div className="cap-card-lg">
            <div className="card-illo">
              <SectorIcon src="/icon-glasfaser.svg" alt={t('Glasfaser Icon', 'Iconiță fibră optică', 'Fiber optic icon', 'Ikona optičkih vlakana', 'Ikona światłowodów')} size={100} />
            </div>
            <span className="cap-num">01</span>
            <h3>{t('Glasfaser & Netzausbau', 'Fibră optică & Extindere rețele', 'Fiber optics & Network expansion', 'Optička vlakna & Razvoj mreža', 'Światłowody & Rozbudowa sieci')}</h3>
            <p className="body">
              {t(
                'Deutschland investiert Milliarden in den Glasfaserausbau. Wir vermitteln spezialisierte Tiefbau-Teams aus Osteuropa für Leitungsverlegung und Netzinfrastruktur.',
                'Germania investește miliarde în extinderea fibrei optice. Conectăm echipe specializate din Europa de Est pentru lucrări de infrastructură.',
                'Germany is investing billions in fiber expansion. We connect specialized civil engineering teams from Eastern Europe for network infrastructure projects.',
                'Nemačka investira milijarde u razvoj optičkih vlakana. Dovodimo specijalizovane timove iz Istočne Evrope za polaganje kablova i mrežnu infrastrukturu.',
                'Niemcy inwestują miliardy w rozbudowę światłowodów. Łączymy wyspecjalizowane zespoły z Europy Wschodniej do prac przy infrastrukturze sieciowej.'
              )}
            </p>
          </div>

          {/* 02 Stromtrassen */}
          <div className="cap-card-lg">
            <div className="card-illo">
              <SectorIcon src="/icon-strom.png" alt={t('Stromtrassen Icon', 'Iconiță linii electrice', 'Power line icon', 'Ikona dalekovoda', 'Ikona linii energetycznych')} size={100} />
            </div>
            <span className="cap-num">02</span>
            <h3>{t('Stromtrassen', 'Linii electrice', 'Power line infrastructure', 'Dalekovodi', 'Linie energetyczne')}</h3>
            <p className="body">
              {t(
                'Die Energiewende treibt den Bau neuer Stromtrassen und Umspannwerke voran. Osteuropäische Firmen mit Hochspannungserfahrung sind hier sehr gefragt.',
                'Tranziția energetică impulsionează construcția de noi linii electrice. Firmele din Europa de Est cu experiență în înaltă tensiune sunt foarte căutate.',
                'The energy transition drives new power line construction. Eastern European firms with high-voltage experience are in very high demand.',
                'Energetska tranzicija pokreće gradnju novih dalekovoda i trafostanica. Firme iz Istočne Evrope sa iskustvom u visokom naponu su veoma tražene.',
                'Transformacja energetyczna napędza budowę nowych linii energetycznych. Firmy z Europy Wschodniej z doświadczeniem w wysokim napięciu są bardzo poszukiwane.'
              )}
            </p>
          </div>

        </div>
      </Stagger>

      {/* Small cards */}
      <Stagger>
        <div className="cap-grid-small" style={{ maxWidth: '1160px', margin: '0 auto' }}>

          {/* 03 Hochbau */}
          <div className="cap-card-sm">
            <div className="card-illo card-illo-sm">
              <SectorIcon src="/icon-hochbau.png" alt={t('Hochbau Icon', 'Iconiță construcții înalte', 'Structural construction icon', 'Ikona visokogradnje', 'Ikona budownictwa')} size={100} />
            </div>
            <span className="cap-num">03</span>
            <h3>{t('Hochbau', 'Construcții înalte', 'Structural construction', 'Visokogradnja', 'Budownictwo nadziemne')}</h3>
            <p className="body">
              {t(
                'Wohn- und Gewerbebau, Industrie- und Logistikgebäude. Osteuropäische Hochbauunternehmen überzeugen durch Qualität und Effizienz.',
                'Construcții rezidențiale și comerciale, clădiri industriale. Firmele din Europa de Est impresionează prin calitate și eficiență.',
                'Residential, commercial and industrial construction. Eastern European firms impress with quality and efficiency.',
                'Stambena, poslovna i industrijska gradnja. Istočnoevropske firme impresioniraju kvalitetom i efikasnošću.',
                'Budownictwo mieszkalne, komercyjne i przemysłowe. Wschodnioeuropejskie firmy imponują jakością i efektywnością.'
              )}
            </p>
          </div>

          {/* 04 Tiefbau */}
          <div className="cap-card-sm">
            <div className="card-illo card-illo-sm">
              <SectorIcon src="/icon-tiefbau.svg" alt={t('Tiefbau Icon', 'Iconiță lucrări subterane', 'Civil engineering icon', 'Ikona niskogradnje', 'Ikona budownictwa podziemnego')} size={82} />
            </div>
            <span className="cap-num">04</span>
            <h3>{t('Tiefbau', 'Lucrări subterane', 'Civil & underground works', 'Niskogradnja', 'Roboty ziemne i podziemne')}</h3>
            <p className="body">
              {t(
                'Kanal- und Rohrleitungsbau, Fundamentarbeiten, Erdbewegungen. Tiefbauexperten aus Osteuropa für anspruchsvolle Infrastrukturprojekte.',
                'Canalizare, lucrări de conducte, fundații. Experți în construcții subterane din Europa de Est pentru proiecte de infrastructură.',
                'Sewage, pipeline works, foundations. Civil engineering experts from Eastern Europe for demanding infrastructure projects.',
                'Kanalizacija, cevovodi, temelji, zemljani radovi. Stručnjaci za niskogradnju iz Istočne Evrope za zahtevne infrastrukturne projekte.',
                'Kanalizacja, rurociągi, fundamenty, roboty ziemne. Eksperci z Europy Wschodniej do wymagających projektów infrastrukturalnych.'
              )}
            </p>
          </div>

          {/* 05–06 Straßen, Brücken & Hallenbau */}
          <div className="cap-card-sm">
            <div className="card-illo card-illo-sm">
              <SectorIcon src="/icon-strasse.svg" alt={t('Straßenbau Icon', 'Iconiță drumuri', 'Road construction icon', 'Ikona gradnje puteva', 'Ikona budowy dróg')} size={100} />
            </div>
            <span className="cap-num">05–06</span>
            <h3>{t('Straßen-, Brücken- & Hallenbau', 'Drumuri, poduri & hale', 'Roads, bridges & halls', 'Putevi, mostovi i hale', 'Drogi, mosty i hale')}</h3>
            <p className="body">
              {t(
                'Straßensanierung, Brückenerneuerung und Hallenbau gehören zu den volumenstärksten Segmenten. Osteuropäische Teams bieten hier echten Mehrwert.',
                'Reabilitare drumuri, renovare poduri și construcții hale — segmente cu volum mare unde echipele din Europa de Est aduc valoare reală.',
                'Road rehabilitation, bridge renewal and hall construction — high-volume segments where Eastern European teams deliver real value.',
                'Sanacija puteva, obnova mostova i izgradnja hala — segmenti visokog obima gde timovi iz Istočne Evrope donose pravu vrednost.',
                'Rehabilitacja dróg, odnawianie mostów i budowa hal — segmenty o dużym wolumenie, gdzie zespoły z Europy Wschodniej wnoszą realną wartość.'
              )}
            </p>
          </div>

        </div>
      </Stagger>
      <div style={{ height: '100px' }} />
    </section>
  );
}
