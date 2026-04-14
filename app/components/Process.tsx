'use client';
import Image from 'next/image';
import { useLang } from '../context/LangContext';

function ProcessIllo({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: 'relative', width: 200, height: 200, flexShrink: 0 }}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} sizes="200px" loading="lazy" />
    </div>
  );
}

export default function Process() {
  const { t } = useLang();

  const openZcal = () => window.open('https://zcal.co/lore/projekt', '_blank');

  const steps = [
    {
      num: '01',
      illo: <ProcessIllo src="/proc-icon-erstgespraech.png" alt="Erstgespräch" />,
      titleDe: 'Erstgespräch & Analyse',
      titleRo: 'Prima întâlnire & Analiză',
      titleEn: 'Initial consultation & Analysis',
      titleSr: 'Uvodni razgovor & Analiza',
      titlePl: 'Pierwsze spotkanie & Analiza',
      bodyDe: 'Wir lernen Ihre Firma kennen — Kapazitäten, Referenzen, Zertifizierungen. In 30 Minuten schaffen wir Klarheit, welche deutschen Märkte für Sie realistisch erreichbar sind.',
      bodyRo: 'Vă cunoaștem firma — capacități, referințe, certificări. În 30 de minute clarificăm ce piețe germane sunt realiste pentru dumneavoastră.',
      bodyEn: 'We get to know your firm — capacities, references, certifications. In 30 minutes we clarify which German markets are realistically reachable for you.',
      bodySr: 'Upoznajemo vašu firmu — kapaciteti, reference, sertifikati. Za 30 minuta razjašnjavamo koja nemačka tržišta su realno dostupna za vas.',
      bodyPl: 'Poznajemy Waszą firmę — moce produkcyjne, referencje, certyfikaty. W 30 minut wyjaśniamy, które rynki niemieckie są dla Was realistycznie osiągalne.',
    },
    {
      num: '02',
      illo: <ProcessIllo src="/proc-icon-marktpos.svg" alt="Marktpositionierung" />,
      titleDe: 'Marktpositionierung',
      titleRo: 'Poziționare pe piață',
      titleEn: 'Market positioning',
      titleSr: 'Pozicioniranje na tržištu',
      titlePl: 'Pozycjonowanie rynkowe',
      bodyDe: 'Wir übersetzen Ihre Stärken in das deutsche Marktumfeld: Zertifizierungen, Nachweise, Präsentationen. Ihr Profil wird fit für deutsche Auftraggeber gemacht.',
      bodyRo: 'Vă traducem punctele forte în mediul german: certificări, dovezi, prezentări. Profilul dvs. devine potrivit pentru beneficiarii germani.',
      bodyEn: 'We translate your strengths into the German market context: certifications, evidence, presentations. Your profile is made ready for German clients.',
      bodySr: 'Prevodimo vaše prednosti u nemačko tržišno okruženje: sertifikati, dokazi, prezentacije. Vaš profil postaje spreman za nemačke naručioce.',
      bodyPl: 'Przekładamy Wasze mocne strony na realia niemieckiego rynku: certyfikaty, dowody, prezentacje. Wasz profil jest gotowy dla niemieckich zleceniodawców.',
    },
    {
      num: '03',
      illo: <ProcessIllo src="/proc-icon-marktpos-hand.png" alt="Matching" />,
      titleDe: 'Matching & Introductions',
      titleRo: 'Potrivire & Introduceri',
      titleEn: 'Matching & Introductions',
      titleSr: 'Uparivanje & Predstavljanje',
      titlePl: 'Dobór partnerów & Wprowadzenie',
      bodyDe: 'Aus unserem Netzwerk an Generalunternehmern, Netzbetreibern und öffentlichen Auftraggebern wählen wir gezielt die richtigen Partner und stellen Sie persönlich vor.',
      bodyRo: 'Din rețeaua noastră de antreprenori generali, operatori de rețea și beneficiari publici alegem partenerii potriviți și vă prezentăm personal.',
      bodyEn: 'From our network of general contractors, network operators and public clients we select the right partners and personally introduce you.',
      bodySr: 'Iz naše mreže generalnih izvođača, mrežnih operatera i javnih naručilaca biramo prave partnere i lično vas predstavljamo.',
      bodyPl: 'Z naszej sieci generalnych wykonawców, operatorów sieci i zamawiających publicznych wybieramy właściwych partnerów i osobiście Was przedstawiamy.',
    },
    {
      num: '04',
      illo: <ProcessIllo src="/proc-icon-support.png" alt="Support" />,
      titleDe: 'Dauerhafter Support',
      titleRo: 'Suport continuu',
      titleEn: 'Ongoing support',
      titleSr: 'Trajna podrška',
      titlePl: 'Stałe wsparcie',
      bodyDe: 'Wir begleiten Sie durch Vertragsverhandlungen, Entsendeanmeldungen und den laufenden Projektbetrieb. Als mehrsprachiger Ansprechpartner sind wir immer erreichbar.',
      bodyRo: 'Vă însoțim prin negocierile contractuale, notificările de detașare și operațiunile curente ale proiectului. Ca partener multilingv, suntem mereu disponibili.',
      bodyEn: 'We accompany you through contract negotiations, posting registrations and ongoing project operations. As a multilingual contact, we are always available.',
      bodySr: 'Pratimo vas kroz pregovore o ugovorima, prijave upućivanja radnika i tekuće projektne operacije. Kao višejezični kontakt, uvek smo dostupni.',
      bodyPl: 'Towarzyszymy Wam przez negocjacje umów, rejestracje delegowania i bieżące operacje projektowe. Jako wielojęzyczny kontakt, jesteśmy zawsze dostępni.',
    },
  ];

  return (
    <section id="prozess" className="dark-s" style={{ padding: 0 }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '80px 40px 60px' }}>
        <span className="s-label">{t('Unser Prozess', 'Procesul nostru', 'Our process', 'Naš proces', 'Nasz proces')}</span>
        <h2 style={{ color: 'var(--white)' }}>
          {t('Vom Erstgespräch zum ersten Auftrag.', 'De la prima discuție la primul contract.', 'From first call to first contract.', 'Od prvog razgovora do prvog posla.', 'Od rozmowy do pierwszego kontraktu.')}
        </h2>
      </div>

      <div className="dark-divider" />

      {steps.map((step, i) => (
        <div key={i}>
          <div className="process-step">
            <div className="proc-num">{step.num}</div>
            <div className="proc-illo">
              <div className="proc-illo-inner">{step.illo}</div>
            </div>
            <div className="proc-text">
              <h3>{t(step.titleDe, step.titleRo, step.titleEn, step.titleSr, step.titlePl)}</h3>
              <p className="body">{t(step.bodyDe, step.bodyRo, step.bodyEn, step.bodySr, step.bodyPl)}</p>
            </div>
          </div>
          {i < steps.length - 1 && <div className="dark-divider" />}
        </div>
      ))}

      <div style={{ textAlign: 'center', padding: '80px 40px' }}>
        <button className="btn btn-white" onClick={openZcal}>
          <span className="btn-label">{t('Jetzt Erstgespräch buchen', 'Rezervați prima consultație', 'Book your free consultation', 'Zakaži besplatni razgovor', 'Umów bezpłatną konsultację')}</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </section>
  );
}
