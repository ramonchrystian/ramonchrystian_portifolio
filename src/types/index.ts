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
  startTime?: number
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
  photo?: any
  caption?: Record<Lang, string>
}

export interface GalleryItem {
  id: string
  title: Record<Lang, string>
  caption?: Record<Lang, string>
  image: any
  category: 'worship' | 'cantata' | 'choir' | 'workshop' | 'portrait'
  date?: string
  order?: number
}

export interface Workshop {
  id: string
  title: Record<Lang, string>
  event: Record<Lang, string>
  institution: Record<Lang, string>
  city: string
  year: string | Record<Lang, string>
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

export interface Book {
  id: string
  title: Record<Lang, string>
  subtitle?: Record<Lang, string>
  description: Record<Lang, string>
  year?: string
  publisher?: Record<Lang, string>
  url?: string
  isFeatured?: boolean
}

export interface EditorialPeriodical {
  id: string
  name: Record<Lang, string>
  organization: Record<Lang, string>
  role: Record<Lang, string>
  description: Record<Lang, string>
}

export interface VerifiedCredential {
  id: string
  issuer: 'Google' | 'Meta' | 'University of Michigan' | 'LearnQuest'
  title: string
  credentialId?: string
  date?: string
  url?: string
  grade?: string
  category?: 'ai' | 'pm' | 'frontend' | 'cloud'
}