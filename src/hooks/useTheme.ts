import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'
import type { Theme } from '@/types/global.types'

export const useTheme = () => {
  const { theme, setTheme } = useAppStore()

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'

    if (!document.startViewTransition) {
      applyTheme(next)
      return
    }

    document.startViewTransition(() => {
      applyTheme(next)
    })

    document.documentElement.animate(
      { clipPath: ['inset(0 0 100% 0)', 'inset(0)'] },
      { pseudoElement: '::view-transition-new(root)', duration: 600 },
    )
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    const preferred: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    applyTheme(saved ?? preferred)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { theme, toggleTheme }
}
