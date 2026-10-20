import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Music, Code2, Award, CheckCircle, Compass, HeartHandshake, Mail } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useAcademicDegrees } from '../sanity/useSanityData'

const iconMap: Record<string, typeof GraduationCap> = {
  music: Music,
  bookOpen: BookOpen,
  code: Code2,
  guitar: Award,
}

export default function Academic() {
  const { t, lang } = useTranslation()
  const { formalDegrees, complementaryStudies } = useAcademicDegrees()

  return (
    <section id="academic" className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="editorial-badge mb-3">
            <GraduationCap size={13} />
            <span>{t('academic.badge')}</span>
          </div>
          <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
            {t('academic.title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
            {t('academic.subtitle')}
          </p>
        </motion.div>

        {/* Primary Formal Degrees Grid */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3 dark:border-[#2E322C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B3B2B] dark:bg-[#72947B]" />
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('academic.formalTitle')}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {formalDegrees.map((degree, idx) => {
              const Icon = iconMap[degree.icon] || GraduationCap
              return (
                <motion.div
                  key={degree.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col justify-between rounded-xl border p-6 transition-all duration-200 hover:border-[#B58B49]/40 ${
                    degree.isPrimary
                      ? 'border-[#E8E4DC] bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F] shadow-xs'
                      : 'border-[#E8E4DC] bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F]'
                  }`}
                >
                  <div>
                    {/* Top status bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B]">
                        <Icon size={18} />
                      </div>
                      <span className="tag-pill text-[#1B3B2B] dark:text-[#72947B]">
                        <CheckCircle size={9} />
                        {degree.periodLabel[lang]}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-[#1B3B2B] dark:text-[#F3F0E8]">
                      {degree.title[lang]}
                    </h4>

                    <p className="mt-1 font-mono text-[11px] font-medium text-[#77766F] dark:text-[#B8B8AE]">
                      {degree.institution}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#252622]/80 dark:text-[#B8B8AE]">
                      {degree.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#E8E4DC] pt-3 text-[10px] font-mono uppercase tracking-wider text-[#77766F] dark:border-[#2E322C] dark:text-[#B8B8AE]">
                    {degree.isPrimary
                      ? lang === 'en' ? 'Core Ministerial Degree' : 'Grau Ministerial Principal'
                      : lang === 'en' ? 'Complementary Tech Degree' : 'Grau Complementar em Tecnologia'}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Dedicated Truett Theological Seminary MDiv Horizon & Support Card */}
        <motion.div
          id="truett-mdiv"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border-2 border-[#B58B49]/40 bg-[#FAF8F5] p-7 sm:p-9 shadow-xs dark:border-[#D0AC6C]/40 dark:bg-[#1A1D19]"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column (8 cols): Title, Subtitle, Context, Pillars */}
            <div className="lg:col-span-8 space-y-4">
              <div className="editorial-badge">
                <Compass size={13} className="text-[#B58B49] dark:text-[#D0AC6C]" />
                <span>{t('truett.badge')}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8] leading-tight">
                {t('truett.title')}
              </h3>

              <p className="font-mono text-xs uppercase tracking-wider text-[#B58B49] dark:text-[#D0AC6C] font-semibold">
                {t('truett.subtitle')}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE]">
                {t('truett.body')}
              </p>

              {/* 2 Support Pillars */}
              <div className="pt-2 grid gap-3.5 sm:grid-cols-2">
                <div className="rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/80 p-4 dark:border-[#2E322C] dark:bg-[#20231F]/80">
                  <p className="font-serif text-sm sm:text-base font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {t('truett.pillar1.title')}
                  </p>
                  <p className="mt-1.5 text-xs text-[#77766F] dark:text-[#B8B8AE] leading-relaxed">
                    {t('truett.pillar1.desc')}
                  </p>
                </div>
                <div className="rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/80 p-4 dark:border-[#2E322C] dark:bg-[#20231F]/80">
                  <p className="font-serif text-sm sm:text-base font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {t('truett.pillar2.title')}
                  </p>
                  <p className="mt-1.5 text-xs text-[#77766F] dark:text-[#B8B8AE] leading-relaxed">
                    {t('truett.pillar2.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Direct CTA Panel */}
            <div className="lg:col-span-4 flex flex-col justify-center items-stretch rounded-xl border border-[#B58B49]/30 bg-[#FAF8F5] p-6 text-center dark:border-[#D0AC6C]/30 dark:bg-[#20231F]">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#B58B49]/40 bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#D0AC6C]/40 dark:bg-[#151714] dark:text-[#D0AC6C]">
                <HeartHandshake size={22} />
              </div>

              <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {lang === 'en' ? 'Ministerial Partnership' : 'Parceria Ministerial'}
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
                {lang === 'en'
                  ? 'Connect directly to receive theological updates, prayer requests, and formal partnership details.'
                  : 'Entre em contato diretamente para receber boletins do ministério, motivos de oração e detalhes sobre apoio.'}
              </p>

              <a
                href="mailto:ramonchrystian@gmail.com?subject=Apoio%20aos%20Estudos%20Teologicos%20-%20Truett%20Seminary%20-%20Ramon%20Chrystian"
                className="btn-primary mt-5 justify-center w-full"
              >
                <Mail size={15} />
                <span>{t('truett.cta')}</span>
              </a>

              <span className="mt-3 font-mono text-[10px] text-[#77766F] dark:text-[#B8B8AE]">
                ramonchrystian@gmail.com
              </span>
            </div>
          </div>
        </motion.div>

        {/* Discreet Subsection: Complementary Studies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-12 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 dark:border-[#2E322C] dark:bg-[#20231F]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-[#E8E4DC] pb-3 dark:border-[#2E322C]">
            <h3 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('academic.complementaryTitle')}
            </h3>
            <span className="font-mono text-xs text-[#77766F] dark:text-[#B8B8AE]">
              {lang === 'en' ? 'Non-degree specialized formation' : 'Formação livre especializada'}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            {complementaryStudies.map((study) => (
              <div key={study.id} className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {study.title[lang]}
                  </h4>
                  <span className="text-xs text-[#77766F] dark:text-[#B8B8AE] font-mono">
                    — {study.institution}
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
                  {study.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
