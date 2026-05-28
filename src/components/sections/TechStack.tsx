import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { TECH_STACK } from '@/constants/cv-data'
import { prefersReducedMotion } from '@/utils/gsap-helpers'

gsap.registerPlugin(ScrollTrigger)

export const TechStack = () => {
  const { t } = useTranslation()
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!gridRef.current || prefersReducedMotion()) return

      const badges = gsap.utils.toArray<HTMLElement>('.tech-badge')
      gsap.fromTo(
        badges,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: { each: 0.06, from: 'start' },
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      )
    },
    { scope: gridRef },
  )

  return (
    <section id="stack" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label={t('stack.label')} title={t('stack.title')} />

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(TECH_STACK).map(([category, techs]) => (
            <div key={category} className="glass-card rounded-2xl p-6">
              <h3 className="font-mono text-xs text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech} variant="tech" className="tech-badge animate-float">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
