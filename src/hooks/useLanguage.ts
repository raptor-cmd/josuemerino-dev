import { useTranslation } from 'react-i18next'
import { useAppStore } from '@/store/useAppStore'
import type { Locale } from '@/types/global.types'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useAppStore()

  const toggleLanguage = () => {
    const next: Locale = language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    setLanguage(next)
  }

  return { language, toggleLanguage }
}
