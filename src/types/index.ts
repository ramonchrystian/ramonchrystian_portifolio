export type Lang = 'en' | 'pt'

export type Theme = 'light' | 'dark'

export interface VideoProject {
  id: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  youtubeId: string
  thumbnailUrl?: string
  tags: string[]
  pillar: 'worship' | 'direction' | 'session'
}

export interface Article {
  id: string
  title: Record<Lang, string>
  excerpt: Record<Lang, string>
  url: string
  date: string
}

export interface SoftwareProject {
  id: string
  name: string
  description: Record<Lang, string>
  tags: string[]
  url?: string
  githubUrl?: string
  highlights: Record<Lang, string[]>
}

export interface Degree {
  id: string
  title: Record<Lang, string>
  institution: string
  periodLabel: Record<Lang, string>
  description: Record<Lang, string>
  icon: string
  isPrimary?: boolean
}

export interface MinistryExperience {
  id: string
  church: Record<Lang, string>
  role: Record<Lang, string>
  period: string | Record<Lang, string>
  responsibilities: Record<Lang, string[]>
  highlights?: Record<Lang, string[]>
}

export interface Workshop {
  id: string
  title: Record<Lang, string>
  event: Record<Lang, string>
  institution: Record<Lang, string>
  city: string
  year: string
  type: 'workshop' | 'lecture' | 'class' | 'training'
  url?: string
}

export interface Publication {
  id: string
  title: Record<Lang, string>
  venue: Record<Lang, string>
  date: string
  description: Record<Lang, string>
  type: 'article' | 'talk' | 'congress' | 'editorial'
  url?: string
}

export interface DigitalProjectCaseStudy {
  id: string
  name: string
  tagline: Record<Lang, string>
  badge?: Record<Lang, string>
  context: Record<Lang, string>
  objective: Record<Lang, string>
  contribution: Record<Lang, string>
  statusOrOutcome: Record<Lang, string>
  tags: string[]
  url?: string
  githubUrl?: string
  isFeatured?: boolean
}