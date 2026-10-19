import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Lang } from '../types'

interface LangContextType {
  lang: Lang
  toggleLang: () => void
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'pt') return stored
      return 'en'
  })

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'pt' : 'en')
  }, [lang, setLang])

  return (
    <LangContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}