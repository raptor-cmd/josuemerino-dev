import { create } from 'zustand'
import type { Theme, Locale } from '@/types/global.types'

interface AppState {
  theme: Theme
  language: Locale
  setTheme: (theme: Theme) => void
  setLanguage: (language: Locale) => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  language: 'en',
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}))
