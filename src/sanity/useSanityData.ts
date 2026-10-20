import { useState, useEffect } from 'react'
import { client } from './client'
import {
  articlesQuery,
  workshopsQuery,
  ministryExperiencesQuery,
  videosQuery,
  digitalProjectsQuery,
  siteSettingsQuery,
  academicDegreesQuery,
} from './queries'

import { articles as staticArticles } from '../data/articles'
import { workshops as staticWorkshops } from '../data/workshops'
import { ministryExperiences as staticMinistryExperiences } from '../data/ministryExperiences'
import { videos as staticVideos } from '../data/videos'
import { digitalMinistryProjects as staticDigitalProjects } from '../data/digitalProjects'
import { formalDegrees as staticFormalDegrees, complementaryStudies as staticComplementaryStudies } from '../data/degrees'
import type { Article, Workshop, MinistryExperience, VideoProject, DigitalProjectCaseStudy, Degree } from '../types'

export function useArticles(): { articles: Article[]; loading: boolean } {
  const [data, setData] = useState<Article[]>(staticArticles)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<Article[]>(articlesQuery)
      .then((res) => {
        if (isMounted && res && res.length > 0) {
          setData(res)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar artigos, usando dados locais.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { articles: data, loading }
}

export function useWorkshops(): { workshops: Workshop[]; loading: boolean } {
  const [data, setData] = useState<Workshop[]>(staticWorkshops)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<Workshop[]>(workshopsQuery)
      .then((res) => {
        if (isMounted && res && res.length > 0) {
          setData(res)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar workshops, usando dados locais.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { workshops: data, loading }
}

export function useMinistryExperiences(): { experiences: MinistryExperience[]; loading: boolean } {
  const [data, setData] = useState<MinistryExperience[]>(staticMinistryExperiences)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<MinistryExperience[]>(ministryExperiencesQuery)
      .then((res) => {
        if (isMounted && res && res.length > 0) {
          setData(res)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar experiências, usando dados locais.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { experiences: data, loading }
}

export function useVideos(): { videos: VideoProject[]; loading: boolean } {
  const [data, setData] = useState<VideoProject[]>(staticVideos)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<VideoProject[]>(videosQuery)
      .then((res) => {
        if (isMounted && res && res.length > 0) {
          setData(res)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar vídeos, usando dados locais.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { videos: data, loading }
}

export function useDigitalProjects(): { projects: DigitalProjectCaseStudy[]; loading: boolean } {
  const [data, setData] = useState<DigitalProjectCaseStudy[]>(staticDigitalProjects)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<DigitalProjectCaseStudy[]>(digitalProjectsQuery)
      .then((res) => {
        if (isMounted && res && res.length > 0) {
          setData(res)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar projetos digitais, usando dados locais.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { projects: data, loading }
}

export interface SiteSettingsData {
  portrait?: any
  heroHeadline?: { pt: string; en: string }
  heroSubheadline?: { pt: string; en: string }
  bioParagraphs?: Array<{ pt: string; en: string }>
  email?: string
  linkedInUrl?: string
  youtubeUrl?: string
  instagramUrl?: string
  curriculumPdf?: any
}

export function useSiteSettings(): { settings: SiteSettingsData | null; loading: boolean } {
  const [data, setData] = useState<SiteSettingsData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<SiteSettingsData | null>(siteSettingsQuery)
      .then((res) => {
        if (isMounted && res) {
          setData(res)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar configurações do site.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { settings: data, loading }
}

export interface AcademicDegreeItem extends Degree {
  category?: 'formal' | 'complementary'
  order?: number
}

export function useAcademicDegrees(): {
  formalDegrees: Degree[]
  complementaryStudies: Degree[]
  loading: boolean
} {
  const [formal, setFormal] = useState<Degree[]>(staticFormalDegrees)
  const [complementary, setComplementary] = useState<Degree[]>(staticComplementaryStudies)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true
    client
      .fetch<AcademicDegreeItem[]>(academicDegreesQuery)
      .then((res) => {
        if (isMounted && res && res.length > 0) {
          const fetchedFormal = res.filter((d) => d.category === 'formal' || !d.category)
          const fetchedComp = res.filter((d) => d.category === 'complementary')

          if (fetchedFormal.length > 0) setFormal(fetchedFormal)
          if (fetchedComp.length > 0) setComplementary(fetchedComp)
        }
      })
      .catch((err) => {
        console.warn('Sanity: erro ao carregar formações, usando dados locais.', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { formalDegrees: formal, complementaryStudies: complementary, loading }
}
