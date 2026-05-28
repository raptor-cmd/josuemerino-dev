import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { OWNER } from '@/constants/cv-data'

const Hero = lazy(() => import('@/components/sections/Hero').then((m) => ({ default: m.Hero })))
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })))
const Services = lazy(() => import('@/components/sections/Services').then((m) => ({ default: m.Services })))
const Experience = lazy(() => import('@/components/sections/Experience').then((m) => ({ default: m.Experience })))
const TechStack = lazy(() => import('@/components/sections/TechStack').then((m) => ({ default: m.TechStack })))
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })))

const SectionFallback = () => (
  <div className="section-padding flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[var(--accent-cyan)] border-t-transparent animate-spin" />
  </div>
)

function App() {
  return (
    <>
      <Helmet>
        <title>{OWNER.shortName} — Full-Stack Developer & AI Engineer</title>
        <meta
          name="description"
          content="Full-Stack Developer with 5+ years of experience specialising in PHP/Laravel, ReactJS/TypeScript, AI/LLM engineering and Computer Vision."
        />
        <meta property="og:title" content={`${OWNER.shortName} — Full-Stack Developer`} />
        <meta property="og:description" content="Building intelligent systems and elegant technical solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${OWNER.website}`} />
        <link rel="canonical" href={`https://${OWNER.website}`} />
      </Helmet>

      <Navbar />

      <main>
        <Suspense fallback={<SectionFallback />}><Hero /></Suspense>
        <Suspense fallback={<SectionFallback />}><About /></Suspense>
        <Suspense fallback={<SectionFallback />}><Services /></Suspense>
        <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
        <Suspense fallback={<SectionFallback />}><TechStack /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
