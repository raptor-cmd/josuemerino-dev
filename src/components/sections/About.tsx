import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { STATS } from '@/constants/cv-data'

export const About = () => {
  const { t } = useTranslation()
  const containerRef = useScrollAnimation<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={containerRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text block */}
          <div>
            <SectionTitle label={t('about.label')} title={t('about.title')} className="mb-8" />
            <p className="text-[var(--fg-muted)] leading-relaxed mb-4">
              {t('about.bio1')}
            </p>
            <p className="text-[var(--fg-muted)] leading-relaxed">
              {t('about.bio2')}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.labelKey}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="font-display font-extrabold text-4xl text-gradient mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-[var(--fg-muted)] font-mono tracking-wide uppercase mt-2">
                  {t(stat.labelKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
