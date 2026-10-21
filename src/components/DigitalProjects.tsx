import { motion } from 'framer-motion'
import { Laptop, ExternalLink, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useDigitalProjects } from '../sanity/useSanityData'
import EditButton from './EditButton'

export default function DigitalProjects() {
  const { t, lang } = useTranslation()
  const { projects: digitalMinistryProjects } = useDigitalProjects()

  const featuredProject = digitalMinistryProjects.find((p) => p.isFeatured)
  const regularProjects = digitalMinistryProjects.filter((p) => !p.isFeatured)

  return (
    <section id="digital" className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="editorial-badge mb-3">
              <Laptop size={13} />
              <span>{t('digital.badge')}</span>
            </div>
            <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('digital.title')}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
              {t('digital.subtitle')}
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#77766F] dark:text-[#B8B8AE] italic">
              {t('digital.description')}
            </p>
          </motion.div>

          <EditButton
            documentType="digitalProject"
            label={lang === 'en' ? 'Manage Projects' : 'Gerenciar Projetos'}
          />
        </div>

        {/* 1. FEATURED FLAGSHIP SPOTLIGHT: LETRA SONORA */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-12 overflow-hidden rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-7 sm:p-10 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="editorial-badge">
                    <Sparkles size={11} />
                    {featuredProject.badge?.[lang] || 'Featured Project'}
                  </span>
                  <span className="font-mono text-xs text-[#77766F] dark:text-[#B8B8AE]">
                    letrasonora.com.br
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                  {featuredProject.name}
                </h3>

                <p className="font-serif text-base sm:text-lg italic text-[#252622]/85 dark:text-[#B8B8AE]">
                  {featuredProject.tagline[lang]}
                </p>

                {/* Case Study Details */}
                <div className="mt-6 space-y-3.5 text-xs sm:text-sm leading-relaxed border-t border-[#E8E4DC] pt-5 dark:border-[#2E322C]">
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] block mb-1">
                      {t('digital.caseStudy.context')}:
                    </span>
                    <p className="text-[#252622]/85 dark:text-[#B8B8AE]">
                      {featuredProject.context[lang]}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] block mb-1">
                      {t('digital.caseStudy.contribution')}:
                    </span>
                    <p className="text-[#252622]/85 dark:text-[#B8B8AE]">
                      {featuredProject.contribution[lang]}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] block mb-1">
                      {t('digital.caseStudy.outcome')}:
                    </span>
                    <p className="text-[#252622]/85 dark:text-[#B8B8AE]">
                      {featuredProject.statusOrOutcome[lang]}
                    </p>
                  </div>
                </div>

                {/* Tags & Action */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {featuredProject.url && (
                    <a
                      href={featuredProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>{t('digital.caseStudy.viewProject')}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (5 cols): Editorial Visual Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 shadow-xs dark:border-[#2E322C] dark:bg-[#151714]">
                  <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3 font-mono text-[10px] text-[#77766F] dark:border-[#2E322C] dark:text-[#B8B8AE]">
                    <span>EST. 2023</span>
                    <span className="text-[#B58B49] dark:text-[#D0AC6C]">EDITORIAL INITIATIVE</span>
                  </div>

                  <div className="py-6 text-center space-y-3">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#72947B]">
                      <BookOpen size={24} />
                    </div>
                    <h4 className="font-serif text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                      Letra Sonora
                    </h4>
                    <p className="text-xs text-[#77766F] dark:text-[#B8B8AE] leading-relaxed">
                      {lang === 'en'
                        ? 'Connecting theological reflection, hymnological history, and practical wisdom for church musicians.'
                        : 'Unindo reflexão teológica, história dos hinos e sabedoria prática para músicos cristãos.'}
                    </p>
                  </div>

                  <div className="border-t border-[#E8E4DC] pt-3.5 space-y-2 text-xs text-[#252622]/85 dark:border-[#2E322C] dark:text-[#B8B8AE]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1B3B2B] dark:text-[#72947B] shrink-0" />
                      <span>{lang === 'en' ? 'Bilingual theological newsletter' : 'Newsletter teológica bilíngue'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1B3B2B] dark:text-[#72947B] shrink-0" />
                      <span>{lang === 'en' ? 'Congregational singing studies' : 'Estudos de canto congregacional'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1B3B2B] dark:text-[#72947B] shrink-0" />
                      <span>{lang === 'en' ? 'Liturgical resources for pastors' : 'Recursos litúrgicos para líderes'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. COMPLEMENTARY CASE STUDIES: ADORE APP, CATEDRAL RIO, PIBMB AI */}
        <div className="mt-16">
          <div className="border-b border-[#E8E4DC] pb-4 mb-8 dark:border-[#2E322C]">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {lang === 'en' ? 'Ministry Case Studies' : 'Estudos de Caso Ministeriais'}
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {regularProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 shadow-xs transition-all duration-200 hover:border-[#B58B49]/40 dark:border-[#2E322C] dark:bg-[#20231F]"
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="tag-pill">
                      {project.badge?.[lang] || 'Case Study'}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#77766F] hover:text-[#1B3B2B] dark:text-[#B8B8AE] dark:hover:text-[#72947B]"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <h4 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {project.name}
                  </h4>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#77766F] dark:text-[#B8B8AE]">
                    {project.tagline[lang]}
                  </p>

                  {/* Case Study Sections */}
                  <div className="mt-4 space-y-3 text-xs leading-relaxed border-t border-[#E8E4DC] pt-4 dark:border-[#2E322C]">
                    <div>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] block mb-0.5">
                        {t('digital.caseStudy.context')}:
                      </span>
                      <p className="text-[#252622]/80 dark:text-[#B8B8AE]">
                        {project.context[lang]}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] block mb-0.5">
                        {t('digital.caseStudy.contribution')}:
                      </span>
                      <p className="text-[#252622]/80 dark:text-[#B8B8AE]">
                        {project.contribution[lang]}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] block mb-0.5">
                        {t('digital.caseStudy.outcome')}:
                      </span>
                      <p className="text-[#252622]/80 dark:text-[#B8B8AE]">
                        {project.statusOrOutcome[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer tags */}
                <div className="mt-6 border-t border-[#E8E4DC] pt-4 flex flex-wrap gap-1.5 dark:border-[#2E322C]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
