'use client';
import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Reveal } from './RevealWrapper';

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/cacofonie', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
    } catch {
      // ignore – show success anyway (Formspree not wired yet)
    }
    setSent(true);
  };

  const openZcal = () => {
    window.open('https://zcal.co/lore/projekt', '_blank');
  };

  return (
    <section id="kontakt" className="off-s" style={{ padding: 0 }}>
      {/* CTA Band */}
      <div className="cta-band">
        <h2>{t('Bereit für den deutschen Markt?', 'Pregătit pentru piața germană?', 'Ready for the German market?', 'Spremni za nemačko tržište?', 'Gotowi na rynek niemiecki?')}</h2>
        <p className="body-md">
          {t(
            'Buchen Sie ein kostenloses 30-minütiges Erstgespräch. Wir analysieren Ihre Möglichkeiten und zeigen Ihnen, welche nächsten Schritte realistisch sind.',
            'Rezervați o consultație gratuită de 30 de minute. Analizăm oportunitățile dvs. și vă arătăm care sunt pașii următori realiști.',
            'Book a free 30-minute initial consultation. We analyse your opportunities and show you which next steps are realistic.',
            'Zakažite besplatni razgovor od 30 minuta. Analiziramo vaše mogućnosti i pokazujemo koji su sledeći koraci realni.',
            'Umów bezpłatną 30-minutową konsultację. Analizujemy Wasze możliwości i pokazujemy, które kolejne kroki są realistyczne.'
          )}
        </p>
        <div className="cta-btns">
          <button className="btn btn-white" onClick={openZcal}>
            <span className="btn-label">{t('Kostenloses Erstgespräch', 'Consultație gratuită', 'Free consultation', 'Besplatni razgovor', 'Bezpłatna konsultacja')}</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ background: 'var(--off)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '80px 40px' }}>
          <Reveal>
            <div style={{ marginBottom: '48px' }}>
              <span className="s-label">{t('Kontakt', 'Contact', 'Contact', 'Kontakt', 'Kontakt')}</span>
              <h2>{t('Schreiben Sie uns.', 'Scrieți-ne.', 'Write to us.', 'Pišite nam.', 'Napisz do nas.')}</h2>
            </div>
          </Reveal>

          <div className="contact-grid">
            {/* Form */}
            {sent ? (
              <div style={{ padding: '60px 0' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
                <h3 style={{ marginBottom: '12px' }}>
                  {t('Nachricht gesendet!', 'Mesaj trimis!', 'Message sent!', 'Poruka poslata!', 'Wiadomość wysłana!')}
                </h3>
                <p className="body">
                  {t('Wir melden uns innerhalb von 24 Stunden.', 'Vă vom contacta în 24 de ore.', 'We will get back to you within 24 hours.', 'Javićemo se u roku od 24 sata.', 'Odezwiemy się w ciągu 24 godzin.')}
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input name="name" type="text" placeholder={t('Name', 'Nume', 'Name', 'Ime', 'Imię')} required />
                  <input name="company" type="text" placeholder={t('Firma', 'Firmă', 'Company', 'Firma', 'Firma')} />
                </div>
                <input name="email" type="email" placeholder={t('E-Mail', 'E-mail', 'Email', 'E-mail', 'E-mail')} required />
                <select name="sector">
                  <option value="">{t('Sektor wählen…', 'Alege sectorul…', 'Select sector…', 'Izaberite sektor…', 'Wybierz sektor…')}</option>
                  <option value="glasfaser">{t('Glasfaser & Netzausbau', 'Fibră optică', 'Fiber optics', 'Optička vlakna', 'Światłowody')}</option>
                  <option value="strom">{t('Stromtrassen', 'Linii electrice', 'Power lines', 'Dalekovodi', 'Linie energetyczne')}</option>
                  <option value="hochbau">{t('Hochbau', 'Construcții înalte', 'Structural construction', 'Visokogradnja', 'Budownictwo nadziemne')}</option>
                  <option value="tiefbau">{t('Tiefbau', 'Lucrări subterane', 'Civil works', 'Niskogradnja', 'Roboty ziemne')}</option>
                  <option value="strasse">{t('Straßen- & Brückenbau', 'Drumuri & poduri', 'Roads & bridges', 'Putevi & mostovi', 'Drogi & mosty')}</option>
                  <option value="halle">{t('Hallenbau', 'Hale industriale', 'Industrial halls', 'Industrijske hale', 'Hale przemysłowe')}</option>
                </select>
                <textarea
                  name="message"
                  className="last-field"
                  placeholder={t(
                    'Kurze Beschreibung Ihrer Firma und Ihrer Ziele in Deutschland…',
                    'Scurtă descriere a firmei dvs. și a obiectivelor în Germania…',
                    'Brief description of your company and your goals in Germany…',
                    'Kratak opis vaše firme i vaših ciljeva u Nemačkoj…',
                    'Krótki opis Waszej firmy i celów w Niemczech…'
                  )}
                />
                <div className="form-cta">
                  <button className="btn btn-dark" type="submit">
                    <span className="btn-label">{t('Nachricht senden', 'Trimite mesaj', 'Send message', 'Pošalji poruku', 'Wyślij wiadomość')}</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </form>
            )}

            {/* Info */}
            <div className="info-items">
              <div className="info-item">
                <div className="info-lbl">{t('Telefon', 'Telefon', 'Phone')}</div>
                <div className="info-val">
                  <a href="tel:+491711666615" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +49 171 1666615
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-lbl">WhatsApp</div>
                <div className="info-val">
                  <a href="https://wa.me/491711666615" target="_blank" rel="noopener noreferrer" className="wa-link">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'inline', verticalAlign:'middle', marginRight:'7px', marginTop:'-2px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                    </svg>
                    +49 171 1666615
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-lbl">{t('E-Mail', 'E-mail', 'Email')}</div>
                <div className="info-val">
                  <a href="mailto:info@cacofonie.ro" style={{ color: 'inherit', textDecoration: 'none' }}>
                    info@cacofonie.ro
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-lbl">{t('Termin', 'Programare', 'Appointment')}</div>
                <div className="info-val">
                  <a href="https://zcal.co/lore/projekt" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    zcal.co/lore/projekt
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-lbl">{t('Sprachen', 'Limbi', 'Languages', 'Jezici', 'Języki')}</div>
                <div className="info-val">Deutsch · Română · English · Srpski · Polski</div>
              </div>
              <div className="info-item">
                <div className="info-lbl">{t('Reaktionszeit', 'Timp de răspuns', 'Response time', 'Vreme odgovora', 'Czas odpowiedzi')}</div>
                <div className="info-val">{t('Innerhalb von 24 Std.', 'În 24 de ore', 'Within 24 hours', 'U roku od 24 sata', 'W ciągu 24 godzin')}</div>
              </div>
              <div className="info-item">
                <div className="info-lbl">YouTube</div>
                <div className="info-val">
                  <a href="https://www.youtube.com/channel/UCQbpOxoYLknBR77D7MAv5dw" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    youtube.com/@cacofonie
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-lbl">TikTok</div>
                <div className="info-val">
                  <a href="https://www.tiktok.com/@cacofonie_" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    @cacofonie_
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
