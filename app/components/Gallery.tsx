'use client';
import Image from 'next/image';
import { useLang } from '../context/LangContext';
import { Reveal } from './RevealWrapper';

const photos = [
  {
    src: '/gallery1.jpg',
    alt: {
      de: 'UGG Glasfaser Messestand — Wir leben Glasfaser, Netzausbau Deutschland',
      ro: 'Stand UGG Glasfaser la expoziție — construcții rețele Germania',
      en: 'UGG Glasfaser trade show booth — fiber network expansion Germany',
    },
    label: { de: 'UGG · Glasfaser-Messe', ro: 'UGG · Expoziție Glasfaser', en: 'UGG · Fiber Expo' },
  },
  {
    src: '/gallery2.jpg',
    alt: {
      de: 'vitroconnect Messestand — Netzwerk und Konnektivität Branche Deutschland',
      ro: 'Stand vitroconnect — rețele și conectivitate Germania',
      en: 'vitroconnect trade show — networking and connectivity Germany',
    },
    label: { de: 'vitroconnect · Networking', ro: 'vitroconnect · Rețele', en: 'vitroconnect · Networking' },
  },
  {
    src: '/gallery3.jpg',
    alt: {
      de: 'OXG Glasfaser Messestand — Mit jeder Faser für Sie da, Breitbandausbau',
      ro: 'Stand OXG Glasfaser — infrastructură broadband Germania',
      en: 'OXG Glasfaser booth — broadband infrastructure expansion Germany',
    },
    label: { de: 'OXG · Glasfaser & Breitband', ro: 'OXG · Broadband', en: 'OXG · Fiber & Broadband' },
  },
];

export default function Gallery() {
  const { t } = useLang();
  return (
    <section className="s white-s" aria-label={t('Branchenmessen Deutschland', 'Expoziții de specialitate Germania', 'German industry trade shows')}>
      <div className="s-inner">
        <Reveal>
          <div className="s-top" style={{ marginBottom: '48px' }}>
            <div>
              <span className="s-label">{t('Präsenz vor Ort', 'Prezență locală', 'On-site presence')}</span>
              <h2>{t('Wir sind dort, wo der Markt entsteht.', 'Suntem acolo unde se formează piața.', 'We are where the market is made.')}</h2>
            </div>
            <p className="body-md" style={{ maxWidth: '380px' }}>
              {t(
                'Auf den wichtigsten Branchenmessen Deutschlands knüpfen wir die Kontakte, die für rumänische Baufirmen den Unterschied machen.',
                'La cele mai importante târguri din Germania, construim relațiile care fac diferența pentru firmele românești.',
                'At Germany\'s most important trade fairs we build the connections that make a difference for Romanian construction firms.'
              )}
            </p>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <Reveal key={i}>
              <div className="gallery-item">
                <div className="gallery-img-wrap">
                  <Image
                    src={photo.src}
                    alt={t(photo.alt.de, photo.alt.ro, photo.alt.en)}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1160px) 50vw, 360px"
                    loading="lazy"
                  />
                  <div className="gallery-overlay" />
                </div>
                <div className="gallery-caption">
                  <span className="gallery-dot" />
                  <span>{t(photo.label.de, photo.label.ro, photo.label.en)}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
