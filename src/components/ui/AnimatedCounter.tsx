import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/gsap-helpers'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  value: number
  suffix?: string
}

export const AnimatedCounter = ({ value, suffix = '' }: AnimatedCounterProps) => {
  const countRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!countRef.current || prefersReducedMotion()) {
      if (countRef.current) countRef.current.textContent = `${value}${suffix}`
      return
    }

    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${Math.round(obj.val)}${suffix}`
        }
      },
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  return <span ref={countRef}>0{suffix}</span>
}
