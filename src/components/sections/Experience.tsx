import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Calendar } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { EXPERIENCE } from '@/constants/cv-data'
import { prefersReducedMotion } from '@/utils/gsap-helpers'

gsap.registerPlugin(ScrollTrigger)

export const Experience = () => {
  const { t, i18n } = useTranslation()
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!timelineRef.current || prefersReducedMotion()) return

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          },
        )
      }

      const cards = gsap.utils.toArray<HTMLElement>('.exp-card')
      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    },
    { scope: timelineRef },
  )

  const locale = i18n.language as 'es' | 'en'

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle label={t('exp.label')} title={t('exp.title')} />

        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-violet))' }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => (
              <div
                key={item.company}
                className={`exp-card relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full border-2 border-[var(--accent-cyan)] bg-[var(--bg)] z-10" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-10 md:ml-0 glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[var(--fg)]">
                        {item.company}
                      </h3>
                      <p className="text-[var(--accent-cyan)] text-sm font-medium mt-0.5">
                        {item.role[locale]}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-[var(--fg-muted)] justify-end">
                        <Calendar size={11} />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--fg-muted)] justify-end mt-1">
                        <MapPin size={11} />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4">
                    {t(item.highlightKey)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="tag">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
