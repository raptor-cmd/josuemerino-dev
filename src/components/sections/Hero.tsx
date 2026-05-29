import { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { OWNER } from '@/constants/cv-data'
import { prefersReducedMotion } from '@/utils/gsap-helpers'
import josuePhoto from '@/assets/images/josue.webp'

export const Hero = () => {
  const { t, i18n } = useTranslation()
  const cvUrl = i18n.language === 'es' ? '/cv/cv-es.pdf' : '/cv/cv-en.pdf'
  const cvFileName = i18n.language === 'es' ? 'Josue_Merino_ES_CV.pdf' : 'CV_Josue_Merino_EN.pdf'
  const containerRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = OWNER.roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((i) => (i + 1) % OWNER.roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const tl = gsap.timeline()

      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll('.char')
        tl.fromTo(
          chars,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out' },
        )
      }

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.3',
        )
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
          '-=0.2',
        )
      }

      if (photoRef.current) {
        tl.fromTo(
          photoRef.current,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
          0.2,
        )
      }
    },
    { scope: containerRef },
  )

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(var(--accent-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'var(--accent-cyan)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'var(--accent-violet)' }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <div ref={badgeRef}>
            <Badge variant="status" className="mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t('hero.available')}
            </Badge>
          </div>

          <h1
            ref={nameRef}
            className="font-display font-extrabold leading-[1.05] mb-6 overflow-hidden"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            {OWNER.name.split(' ').map((word, wi, arr) => (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split('').map((char, ci) => (
                  <span key={`${wi}-${ci}`} className="char inline-block">{char}</span>
                ))}
                {wi < arr.length - 1 && <span className="char inline-block">&nbsp;</span>}
              </span>
            ))}
          </h1>

          <div className="font-mono text-[var(--accent-cyan)] text-lg mb-8 min-h-[1.75rem]">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-5 bg-[var(--accent-cyan)] ml-0.5 animate-pulse" />
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta_primary')}
              <ArrowDown size={14} className="ml-2 inline" />
            </Button>
            <a
              href={cvUrl}
              download={cvFileName}
              className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-200 inline-flex items-center gap-2"
              aria-label={`${t('hero.cta_secondary')} (${i18n.language.toUpperCase()})`}
            >
              <Download size={14} />
              {t('hero.cta_secondary')}
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div ref={photoRef} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glow-cyan"
              style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)' }}
            >
              <img
                src={josuePhoto}
                alt="Josué Merino"
                className="w-full h-full object-cover object-top"
                width={384}
                height={384}
                loading="eager"
              />
            </div>

            {/* Floating decoration */}
            <div
              className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 text-xs font-mono"
              style={{
                background: 'rgba(8, 12, 24, 0.88)',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="text-[var(--accent-cyan)]">const</span>
              <span className="text-slate-400"> role </span>
              <span className="text-slate-200">= </span>
              <span className="text-emerald-400">"Engineer"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent-cyan)] opacity-50" />
        <ArrowDown size={14} className="text-[var(--fg-muted)]" />
      </div>
    </section>
  )
}
