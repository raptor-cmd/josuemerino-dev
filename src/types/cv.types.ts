export interface LocalizedString {
  es: string
  en: string
}

export interface StatItem {
  value: number
  suffix: string
  labelKey: string
}

export interface Service {
  id: string
  icon: string
  titleKey: string
  descKey: string
  stack: string[]
}

export interface ExperienceItem {
  company: string
  role: LocalizedString
  location: string
  period: string
  tags: string[]
  highlightKey: string
}

export type TechStack = Record<string, string[]>
