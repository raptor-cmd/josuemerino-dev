import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { OWNER } from '@/constants/cv-data'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#services', labelKey: 'nav.services' },
  { href: '#experience', labelKey: 'nav.experience' },
  { href: '#stack', labelKey: 'nav.stack' },
  { href: '#contact', labelKey: 'nav.contact' },
]

export const Navbar = () => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled border-b border-[var(--border)] py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl text-[var(--fg)] tracking-tight"
          onClick={closeMenu}
        >
          <span className="text-gradient">{OWNER.initials}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, labelKey }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-200 font-medium"
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>

          <Button
            variant="icon"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
            className="font-mono text-xs w-9 h-9 flex items-center justify-center"
          >
            {language.toUpperCase()}
          </Button>

          {/* Mobile hamburger */}
          <Button
            variant="icon"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-[var(--border)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, labelKey }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block text-sm text-[var(--fg-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-200 font-medium py-1"
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
