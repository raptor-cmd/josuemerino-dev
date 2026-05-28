import { useTranslation } from 'react-i18next'
import { ExternalLink, Mail } from 'lucide-react'
import { OWNER } from '@/constants/cv-data'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-lg text-gradient">
            {OWNER.initials}
          </p>
          <p className="text-xs text-[var(--fg-muted)] mt-1">{t('footer.tagline')}</p>
        </div>

        <p className="text-xs text-[var(--fg-muted)] text-center">
          {t('footer.copyright')}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-200"
          >
            <ExternalLink size={15} />
          </a>
          <a
            href={`mailto:${OWNER.email}`}
            aria-label="Send email"
            className="p-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-200"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
