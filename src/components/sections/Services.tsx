import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, BrainCircuit, Camera, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/constants/cv-data'
import { prefersReducedMotion } from '@/utils/gsap-helpers'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Camera,
  Server,
}

export const Services = () => {
  const { t } = useTranslation()
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!gridRef.current || prefersReducedMotion()) return

      const cards = gsap.utils.toArray<HTMLElement>(gridRef.current.children)
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
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
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label={t('services.label')} title={t('services.title')} />

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Code2
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 group cursor-default transition-all duration-300 hover:border-[var(--accent-cyan)] hover:glow-cyan"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)' }}
                >
                  <Icon size={20} className="text-[var(--accent-cyan)]" />
                </div>

                <h3 className="font-display font-bold text-lg text-[var(--fg)] mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-5">
                  {t(service.descKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <Badge key={tech} variant="tech">{tech}</Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA block */}
        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="text-[var(--fg)] font-display font-semibold text-xl md:text-2xl max-w-xl">
            {t('services.cta_question')}
          </p>
          <Button
            variant="primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta_primary')} &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
