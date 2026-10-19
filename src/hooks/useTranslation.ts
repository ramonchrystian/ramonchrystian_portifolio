import translations, { type TranslationKey } from '../data/translations'
import { useLang } from '../context/LangContext'

export function useTranslation() {
  const { lang } = useLang()

  const t = (key: TranslationKey): string => translations[key][lang]

  return { t, lang }
}