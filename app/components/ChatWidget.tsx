'use client';
import { useState, useRef } from 'react';
import { useLang } from '../context/LangContext';

const WA_NUMBER = '491711666615';
const TRACK_ENDPOINT = 'https://formspree.io/f/xpwzrqkl'; // eigene Formspree-ID für Tracking

async function trackVisitor(event: string) {
  try {
    const ipRes = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' });
    const { ip } = await ipRes.json();
    await fetch(TRACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        event,
        ip,
        url: window.location.href,
        ua: navigator.userAgent.slice(0, 120),
        ts: new Date().toISOString(),
      }),
    });
  } catch {
    // silent — tracking is best-effort
  }
}

export default function ChatWidget() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [pulsed, setPulsed] = useState(true);
  const tracked = useRef(false);

  const handleOpen = () => {
    setOpen(true);
    setPulsed(false);
    if (!tracked.current) {
      tracked.current = true;
      trackVisitor('chat_open');
    }
  };

  const handleWhatsApp = () => {
    const text = msg.trim()
      ? encodeURIComponent(msg)
      : encodeURIComponent(t(
          'Hallo, ich interessiere mich für Ihre Dienstleistungen.',
          'Bună, sunt interesat de serviciile dvs.',
          'Hello, I am interested in your services.'
        ));
    trackVisitor('wa_click');
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={handleOpen}
        className={`chat-bubble${pulsed ? ' chat-pulse' : ''}`}
        aria-label="WhatsApp Chat öffnen"
        style={{ display: open ? 'none' : undefined }}
      >
        {/* WhatsApp SVG */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white"/>
        </svg>
      </button>

      {/* Chat card */}
      {open && (
        <div className="chat-card">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="chat-name">Cacofonie</div>
                <div className="chat-status">
                  <span className="chat-dot" />
                  {t('Online · Antwortet schnell', 'Online · Răspunde rapid', 'Online · Replies fast')}
                </div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Schließen">✕</button>
          </div>

          {/* Bubble message */}
          <div className="chat-body">
            <div className="chat-msg">
              👋 {t(
                'Hallo! Wie können wir Ihnen helfen? Schreiben Sie uns direkt auf WhatsApp.',
                'Bună! Cu ce vă putem ajuta? Scrieți-ne direct pe WhatsApp.',
                'Hello! How can we help you? Write to us directly on WhatsApp.'
              )}
            </div>
          </div>

          {/* Input row */}
          <div className="chat-footer">
            <input
              className="chat-input"
              placeholder={t('Ihre Nachricht…', 'Mesajul dvs.…', 'Your message…')}
              value={msg}
              onChange={e => setMsg(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleWhatsApp()}
            />
            <button className="chat-send" onClick={handleWhatsApp} aria-label="Senden">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
