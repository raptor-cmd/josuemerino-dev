import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const fadeUp = (
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) => {
  if (prefersReducedMotion()) return
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', ...options },
  )
}

export const staggerFadeUp = (
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) => {
  if (prefersReducedMotion()) return
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      ...options,
    },
  )
}

export const fadeIn = (
  targets: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) => {
  if (prefersReducedMotion()) return
  return gsap.fromTo(
    targets,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.out', ...options },
  )
}

export const createScrollTrigger = (
  trigger: gsap.DOMTarget,
  animation: gsap.core.Tween | gsap.core.Timeline,
  start = 'top 85%',
) => {
  ScrollTrigger.create({
    trigger,
    start,
    animation,
    toggleActions: 'play none none none',
  })
}
