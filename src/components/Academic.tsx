import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Music, Code2, Award, CheckCircle, ShieldCheck, ExternalLink, Cpu, Layout, Cloud } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useAcademicDegrees } from '../sanity/useSanityData'
import { verifiedCredentials } from '../data/degrees'
import EditButton from './EditButton'

const iconMap: Record<string, typeof GraduationCap> = {
  music: Music,
  bookOpen: BookOpen,
  code: Code2,
  guitar: Award,
}

export default function Academic() {
  const { t, lang } = useTranslation()
  const { formalDegrees, complementaryStudies } = useAcademicDegrees()

  const googleCreds = verifiedCredentials.filter((c) => c.issuer === 'Google')
  const metaCreds = verifiedCredentials.filter((c) => c.issuer === 'Meta')
  const umichCreds = verifiedCredentials.filter((c) => c.issuer === 'University of Michigan' || c.issuer === 'LearnQuest')

  return (
    <section id="academic" className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]">
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
              <GraduationCap size={13} />
              <span>{t('academic.badge')}</span>
            </div>
            <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('academic.title')}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
              {t('academic.subtitle')}
            </p>
          </motion.div>

          <EditButton
            documentType="academicDegree"
            label={lang === 'en' ? 'Manage Degrees & Courses' : 'Gerenciar Cursos & Formação'}
          />
        </div>

        {/* 1. Primary Formal Degrees Grid */}
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
                  className={`relative flex flex-col justify-between rounded-xl border p-6 transition-all duration-200 hover:border-[#8A6224]/50 shadow-xs ${
                    degree.isPrimary
                      ? 'border-[#E8E4DC] bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F]'
                      : 'border-[#E8E4DC] bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F]'
                  }`}
                >
                  <div>
                    {/* Top status bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B]">
                        <Icon size={18} />
                      </div>
                      <span className="tag-pill text-[#1B3B2B] dark:text-[#72947B] font-semibold">
                        <CheckCircle size={10} />
                        {degree.periodLabel[lang]}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-[#1B3B2B] dark:text-[#F3F0E8]">
                      {degree.title[lang]}
                    </h4>

                    <p className="mt-1 font-mono text-[11px] font-semibold text-[#8A6224] dark:text-[#D0AC6C]">
                      {degree.institution}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE]">
                      {degree.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#E8E4DC] pt-3 text-[10px] font-mono uppercase tracking-wider text-[#52514B] dark:border-[#2E322C] dark:text-[#B8B8AE]">
                    {degree.id === 'theology'
                      ? lang === 'en' ? 'Core Theological Degree (In Progress)' : 'Grau Teológico Principal (Em Andamento)'
                      : degree.id === 'sacred-music'
                      ? lang === 'en' ? 'Core Sacred Music Seminary Degree' : 'Grau Histórico de 8 Semestres em Música Sacra'
                      : lang === 'en' ? 'Complementary Tech Degree' : 'Grau Superior Complementar em Tecnologia'}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 2. Ministerial Leadership & Complementary Studies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-14 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-8 dark:border-[#2E322C] dark:bg-[#20231F]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-[#E8E4DC] pb-3 dark:border-[#2E322C]">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-[#8A6224] dark:text-[#D0AC6C]" />
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('academic.complementaryTitle')}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#52514B] dark:text-[#B8B8AE]">
              {lang === 'en' ? 'Leadership & Performance' : 'Liderança & Performance'}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {complementaryStudies.map((study) => (
              <div
                key={study.id}
                className="flex flex-col justify-between rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/80 p-5 dark:border-[#2E322C] dark:bg-[#151714]/80"
              >
                <div>
                  <span className="tag-pill mb-2.5">
                    {study.periodLabel[lang]}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {study.title[lang]}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] text-[#8A6224] dark:text-[#D0AC6C]">
                    {study.institution}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                    {study.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. Verified International Technical Credentials (Google, Meta & Michigan) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-14 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-8 dark:border-[#2E322C] dark:bg-[#20231F]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-[#E8E4DC] pb-4 dark:border-[#2E322C]">
            <div>
              <div className="editorial-badge mb-2">
                <ShieldCheck size={12} />
                <span>{lang === 'en' ? 'Verified Credentials' : 'Credenciais Verificadas'}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('academic.credentials.title')}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#52514B] dark:text-[#B8B8AE]">
                {t('academic.credentials.subtitle')}
              </p>
            </div>
            <a
              href="https://linkedin.com/in/ramonchrystian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-[#8A6224] hover:text-[#1B3B2B] dark:text-[#D0AC6C] dark:hover:text-[#F3F0E8]"
            >
              <span>linkedin.com/in/ramonchrystian</span>
              <ExternalLink size={11} />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Group 1: Google (AI & PM) */}
            <div className="rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/90 p-5 dark:border-[#2E322C] dark:bg-[#151714]/90 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-2.5 dark:border-[#2E322C]">
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-[#8A6224] dark:text-[#D0AC6C]" />
                  <h4 className="font-serif text-base font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    Google
                  </h4>
                </div>
                <span className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE]">
                  AI & Management · 2025
                </span>
              </div>

              <div className="space-y-3">
                {googleCreds.map((cred) => (
                  <div key={cred.id} className="text-xs">
                    <p className="font-medium text-[#252622] dark:text-[#F3F0E8]">
                      {cred.title}
                    </p>
                    {cred.credentialId && (
                      <p className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE]">
                        ID: {cred.credentialId} · Coursera
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2: Meta (Front-End Engineering) */}
            <div className="rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/90 p-5 dark:border-[#2E322C] dark:bg-[#151714]/90 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-2.5 dark:border-[#2E322C]">
                <div className="flex items-center gap-2">
                  <Layout size={16} className="text-[#8A6224] dark:text-[#D0AC6C]" />
                  <h4 className="font-serif text-base font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    Meta
                  </h4>
                </div>
                <span className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE]">
                  Front-End Engineering
                </span>
              </div>

              <div className="space-y-3">
                {metaCreds.map((cred) => (
                  <div key={cred.id} className="text-xs">
                    <p className="font-medium text-[#252622] dark:text-[#F3F0E8]">
                      {cred.title}
                    </p>
                    {cred.credentialId && (
                      <p className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE]">
                        ID: {cred.credentialId} · Coursera
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Group 3: University of Michigan & LearnQuest */}
            <div className="rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/90 p-5 dark:border-[#2E322C] dark:bg-[#151714]/90 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-2.5 dark:border-[#2E322C]">
                <div className="flex items-center gap-2">
                  <Cloud size={16} className="text-[#8A6224] dark:text-[#D0AC6C]" />
                  <h4 className="font-serif text-base font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    Univ. of Michigan & LearnQuest
                  </h4>
                </div>
                <span className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE]">
                  Web & Cloud
                </span>
              </div>

              <div className="space-y-3">
                {umichCreds.map((cred) => (
                  <div key={cred.id} className="text-xs">
                    <p className="font-medium text-[#252622] dark:text-[#F3F0E8]">
                      {cred.title}
                    </p>
                    {cred.credentialId && (
                      <p className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE]">
                        ID: {cred.credentialId} · Coursera
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
