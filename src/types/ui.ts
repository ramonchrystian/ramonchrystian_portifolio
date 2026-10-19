export interface NavLink {
  label: Record<'en' | 'pt', string>
  href: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface PillarItem {
  id: string
  title: Record<'en' | 'pt', string>
  description: Record<'en' | 'pt', string>
  icon: string
}