'use client';
import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'de' | 'ro' | 'en' | 'sr' | 'pl';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (de: string, ro: string, en: string, sr?: string, pl?: string) => string;
}

const LangContext = createContext<LangCtx>({ lang: 'de', setLang: () => {}, t: (de) => de });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('de');

  const setLang = (l: Lang) => {
    setLangState(l);
  };

  const t = (de: string, ro: string, en: string, sr?: string, pl?: string): string => {
    if (lang === 'de') return de;
    if (lang === 'ro') return ro;
    if (lang === 'sr') return sr ?? en;
    if (lang === 'pl') return pl ?? en;
    return en;
  };

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
