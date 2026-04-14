'use client';
import { useLang } from '../context/LangContext';
import { Reveal, Stagger } from './RevealWrapper';

const testimonials = [
  {
    quote: {
      de: 'In vier Wochen hatten wir unseren ersten deutschen Auftrag. Cacofonie hat nicht vermittelt — sie haben begleitet, von der ersten E-Mail bis zur Unterschrift.',
      ro: 'În patru săptămâni am obținut primul contract german. Cacofonie nu a intermediat pur și simplu — ne-au ghidat de la primul e-mail până la semnătură.',
      en: 'Within four weeks we had our first German contract. Cacofonie did not just connect us — they guided us from the first email to the signature.',
      sr: 'Za četiri nedelje imali smo prvi nemački ugovor. Cacofonie nije samo posredovala — pratila nas je od prvog e-maila do potpisa.',
      pl: 'W ciągu czterech tygodni mieliśmy pierwszy kontrakt w Niemczech. Cacofonie nie tylko nas połączyła — towarzyszyła nam od pierwszego e-maila do podpisu.',
    },
    name: 'Marian D.',
    role: {
      de: 'Geschäftsführer · Tiefbau-GmbH, Timișoara',
      ro: 'Director General · firmă Tiefbau, Timișoara',
      en: 'CEO · Civil Engineering GmbH, Timișoara',
      sr: 'Generalni direktor · GmbH Niskogradnja, Timișoara',
      pl: 'Dyrektor Generalny · firma inżynieryjna, Timișoara',
    },
  },
  {
    quote: {
      de: 'Verträge auf Deutsch, Entsendedokumente, Koordination mit dem GU — alles wurde professionell abgewickelt. Wir konnten uns auf das konzentrieren, was wir können: bauen.',
      ro: 'Contracte în germană, documente de detașare, coordonare cu antreprenorul general — totul gestionat profesional. Ne-am concentrat pe ce știm: construcții.',
      en: 'Contracts in German, posting documents, GC coordination — all handled professionally. We could focus on what we do best: building.',
      sr: 'Ugovori na nemačkom, dokumenti o upućivanju, koordinacija sa generalnim izvođačem — sve profesionalno rešeno. Mogli smo da se fokusiramo na ono što umemo: gradnju.',
      pl: 'Umowy po niemiecku, dokumenty delegowania, koordynacja z generalnym wykonawcą — wszystko profesjonalnie. Mogliśmy skupić się na tym, co umiemy: budowaniu.',
    },
    name: 'Elena R.',
    role: {
      de: 'Inhaberin · Hochbau-Unternehmen, Cluj-Napoca',
      ro: 'Proprietar · firmă construcții înalte, Cluj',
      en: 'Owner · Structural Construction, Cluj-Napoca',
      sr: 'Vlasnica · firma visokogradnje, Cluj-Napoca',
      pl: 'Właścicielka · firma budowlana, Cluj-Napoca',
    },
  },
  {
    quote: {
      de: 'Wir hatten Kontakte, aber keine Aufträge. Sechs Monate nach dem ersten Gespräch mit Cacofonie hatten wir drei laufende Projekte in Bayern.',
      ro: 'Aveam contacte, dar fără contracte. La șase luni după prima discuție cu Cacofonie, aveam trei proiecte active în Bavaria.',
      en: 'We had contacts but no contracts. Six months after the first meeting with Cacofonie, we had three active projects in Bavaria.',
      sr: 'Imali smo kontakte, ali bez ugovora. Šest meseci nakon prvog razgovora sa Cacofonie, imali smo tri aktivna projekta u Bavarskoj.',
      pl: 'Mieliśmy kontakty, ale bez kontraktów. Sześć miesięcy po pierwszym spotkaniu z Cacofonie mieliśmy trzy aktywne projekty w Bawarii.',
    },
    name: 'Bogdan M.',
    role: {
      de: 'Geschäftsführer · Straßenbau, Brașov',
      ro: 'Director · construcții drumuri, Brașov',
      en: 'CEO · Road Construction, Brașov',
      sr: 'Generalni direktor · gradnja puteva, Brașov',
      pl: 'Dyrektor Generalny · budowa dróg, Brașov',
    },
  },
  {
    quote: {
      de: 'Was den Unterschied macht: Das Team denkt rumänisch und kommuniziert deutsch. Diese Brücke ist unbezahlbar — und genau das braucht man, wenn man in Deutschland wachsen will.',
      ro: 'Ceea ce face diferența: echipa gândește românește și comunică în germană. Această punte este de neprețuit — exact ce ai nevoie ca să crești în Germania.',
      en: 'What makes the difference: the team thinks Romanian and communicates German. That bridge is priceless — and exactly what you need to grow in Germany.',
      sr: 'Ono što pravi razliku: tim razmišlja rumunski a komunicira nemački. Taj most je neprocenjiv — i upravo to vam treba ako želite da rastete u Nemačkoj.',
      pl: 'To, co robi różnicę: zespół myśli po rumuńsku i komunikuje się po niemiecku. Ten most jest bezcenny — i dokładnie tego potrzebujesz, żeby rosnąć w Niemczech.',
    },
    name: 'Andreea P.',
    role: {
      de: 'Leiterin Expansion · Baukonzern, Sibiu',
      ro: 'Director Expansiune · grup construcții, Sibiu',
      en: 'Head of Expansion · Construction Group, Sibiu',
      sr: 'Direktorica ekspanzije · građevinska grupa, Sibiu',
      pl: 'Kierownik ds. Ekspansji · Grupa Budowlana, Sibiu',
    },
  },
];

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section id="ueber" className="white-s" style={{ padding: 0 }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 40px 60px' }}>
        <Reveal>
          <div className="s-top">
            <div>
              <span className="s-label">{t('Stimmen', 'Testimoniale', 'Testimonials', 'Utisci', 'Opinie')}</span>
              <h2>{t('Was unsere Partner sagen.', 'Ce spun partenerii noștri.', 'What our partners say.', 'Šta kažu naši partneri.', 'Co mówią nasi partnerzy.')}</h2>
            </div>
            <p className="body-md" style={{ maxWidth: '360px' }}>
              {t(
                'Echte Erfahrungen von osteuropäischen Baufirmen, die mit unserer Hilfe auf dem deutschen Markt Fuß gefasst haben.',
                'Experiențe reale ale firmelor de construcții din Europa de Est care au reușit pe piața germană cu ajutorul nostru.',
                'Real experiences from Eastern European construction firms that have successfully entered the German market with our help.',
                'Stvarna iskustva istočnoevropskih građevinskih firmi koje su uz našu pomoć ušle na nemačko tržište.',
                'Prawdziwe doświadczenia wschodnioeuropejskich firm budowlanych, które z naszą pomocą weszły na rynek niemiecki.'
              )}
            </p>
          </div>
        </Reveal>
      </div>
      <Stagger>
        <div className="testi-grid">
          {testimonials.map((item, i) => (
            <div key={i} className="testi">
              <p className="testi-quote">„{t(item.quote.de, item.quote.ro, item.quote.en, item.quote.sr, item.quote.pl)}"</p>
              <div className="testi-who">
                <div className="testi-av">
                  <span style={{ fontSize: '7px', textAlign: 'center', lineHeight: 1.3 }}>FOTO</span>
                </div>
                <div>
                  <div className="testi-name">{item.name}</div>
                  <div className="testi-role">{t(item.role.de, item.role.ro, item.role.en, item.role.sr, item.role.pl)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Stagger>

      {/* YouTube Video Placeholder */}
      <Reveal>
        <div style={{ maxWidth: '1160px', margin: '60px auto 0', padding: '0 40px 100px' }}>
          <div className="yt-placeholder" onClick={() => window.open('https://www.youtube.com/channel/UCQbpOxoYLknBR77D7MAv5dw', '_blank')}>
            <div className="yt-inner">
              <div className="yt-play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="yt-label">{t('Unser YouTube-Kanal', 'Canalul nostru YouTube', 'Our YouTube channel', 'Naš YouTube kanal', 'Nasz kanał YouTube')}</p>
              <p className="yt-sub">{t('Wie wir osteuropäische Baufirmen nach Deutschland bringen', 'Cum aducem firmele de construcții din Europa de Est în Germania', 'How we bring Eastern European construction firms to Germany', 'Kako dovodimo istočnoevropske građevinske firme u Nemačku', 'Jak wprowadzamy wschodnioeuropejskie firmy budowlane do Niemiec')}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
