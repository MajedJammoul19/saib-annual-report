import { useLanguageStore } from '../store/useLanguageStore'
import { translations } from './translations'

export const useTranslation = () => {
  const { language } = useLanguageStore()

  const t = (key: string): string => {
    const found = translations.find((item) => item.key === key)
    if (!found) return key 
    return found[language]
  }

  return { t, language }
}