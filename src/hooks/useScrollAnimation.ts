import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  y?: number
  stagger?: number
  duration?: number
  delay?: number
  start?: string
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {},
) => {
  const containerRef = useRef<T>(null)

  const {
    y = 40,
    stagger = 0.12,
    duration = 0.8,
    delay = 0,
    start = 'top 85%',
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (prefersReduced) return

      const children = gsap.utils.toArray<HTMLElement>(
        containerRef.current.children,
      )

      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: 'play none none none',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return containerRef
}
