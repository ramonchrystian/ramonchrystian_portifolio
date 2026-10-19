import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, BookOpen, FileText, CheckCircle2, X } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const [showCvModal, setShowCvModal] = useState(false)

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E8E4DC] dark:border-[#2E322C]">
      {/* Subtle musical score background watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035] dark:opacity-[0.02]">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-current" />
        <div className="absolute top-[28%] left-0 right-0 h-px bg-current" />
        <div className="absolute top-[31%] left-0 right-0 h-px bg-current" />
        <div className="absolute top-[34%] left-0 right-0 h-px bg-current" />
        <div className="absolute top-[37%] left-0 right-0 h-px bg-current" />
      </div>

      <div className="section-container relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Presentation & Typography (7 cols) */}
          <div className="lg:col-span-7">
            {/* Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="editorial-badge mb-5 sm:mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#B58B49] dark:bg-[#D0AC6C]" />
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* Fluid Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="hero-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]"
            >
              {t('hero.headline')}
            </motion.h1>

            {/* Subheadline with controlled reading width */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE]"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <button
                onClick={() => scrollTo('#ministry')}
                className="btn-primary"
              >
                <span>{t('hero.cta.primary')}</span>
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo('#teaching')}
                className="btn-secondary"
              >
                <span>{t('hero.cta.secondary')}</span>
              </button>
            </motion.div>

            {/* Discreet Secondary Pathways */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#77766F] dark:text-[#B8B8AE]"
            >
              <button
                onClick={() => scrollTo('#digital')}
                className="group inline-flex items-center gap-1.5 font-medium text-[#1B3B2B] hover:text-[#254E39] dark:text-[#72947B] dark:hover:text-[#F3F0E8] cursor-pointer"
              >
                <span>{t('hero.cta.digital')}</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">&rarr;</span>
              </button>

              <span className="opacity-30">•</span>

              <button
                onClick={() => setShowCvModal(true)}
                className="inline-flex items-center gap-1.5 font-medium text-[#77766F] hover:text-[#1B3B2B] dark:text-[#B8B8AE] dark:hover:text-[#D0AC6C] cursor-pointer"
              >
                <FileText size={13} className="text-[#B58B49] dark:text-[#D0AC6C]" />
                <span>{t('hero.downloadCv')}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait / Bookplate Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer classic frame border */}
              <div className="absolute -inset-2 rounded-2xl border border-[#E8E4DC] -z-10 dark:border-[#2E322C]" />

              <div className="overflow-hidden rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]">
                {/* Top Folio Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3 font-mono text-[11px] text-[#77766F] dark:border-[#2E322C] dark:text-[#B8B8AE]">
                  <span>RIO DE JANEIRO, BR</span>
                  <span className="text-[#B58B49] dark:text-[#D0AC6C]">EST. 2010</span>
                </div>

                {/* Central Emblem & Inscription */}
                <div className="py-7 text-center">
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#B58B49]/40 bg-[#FAF8F5] shadow-xs dark:border-[#D0AC6C]/40 dark:bg-[#151714]">
                    <span className="font-serif text-3xl font-semibold tracking-wider text-[#1B3B2B] dark:text-[#D0AC6C]">
                      RC
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    Ramon Chrystian
                  </h2>

                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B58B49] dark:text-[#D0AC6C]">
                    {lang === 'en' ? 'Sacred Music · Ministry Educator' : 'Música Sacra · Educador Ministerial'}
                  </p>

                  <p className="mt-4 text-xs italic leading-relaxed text-[#77766F] dark:text-[#B8B8AE] font-serif max-w-[260px] mx-auto">
                    {lang === 'en'
                      ? '“Serving the Church through theological depth, musical craftsmanship, and practical innovation.”'
                      : '“Servindo à Igreja por meio da solidez teológica, excelência musical e inovação responsável.”'}
                  </p>
                </div>

                {/* Bottom Verification Seal */}
                <div className="border-t border-[#E8E4DC] pt-3.5 flex items-center justify-between font-mono text-[10px] text-[#77766F] dark:border-[#2E322C] dark:text-[#B8B8AE]">
                  <span className="text-[#1B3B2B] dark:text-[#72947B] font-semibold">STBSB ALUMNUS</span>
                  <span>{lang === 'en' ? 'B.Sacred Music' : 'B. Música Sacra'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curriculum Vitae Modal */}
      <AnimatePresence>
        {showCvModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative max-w-lg w-full rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-8 shadow-xl dark:border-[#2E322C] dark:bg-[#20231F]"
            >
              <button
                onClick={() => setShowCvModal(false)}
                className="absolute top-4 right-4 rounded-md p-1.5 text-[#77766F] hover:text-[#1B3B2B] hover:bg-[#E8E4DC]/40 dark:text-[#B8B8AE] dark:hover:text-[#F3F0E8] cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 text-[#1B3B2B] dark:text-[#72947B] mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B]">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {lang === 'en' ? 'Curriculum Vitae & Dossier' : 'Currículo & Dossiê Documental'}
                  </h3>
                  <p className="font-mono text-[11px] text-[#B58B49] dark:text-[#D0AC6C]">
                    {lang === 'en' ? 'Academic & Ministerial Review' : 'Comissões Acadêmicas e Ministeriais'}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE]">
                {lang === 'en'
                  ? 'The comprehensive academic dossier — containing official academic transcripts from STBSB, church ministerial endorsements, syllabi of taught workshops, and portfolio documentation — is prepared and available upon request for admissions committees, seminary faculties, and pastoral search committees.'
                  : 'O dossiê acadêmico e ministerial completo — com históricos oficiais do STBSB, cartas de recomendação pastoral, ementas de workshops ministrados e documentação de projetos — está disponível sob consulta para comissões avaliadoras, seminários e lideranças eclesiásticas.'}
              </p>

              <div className="mt-5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] p-4 dark:border-[#2E322C] dark:bg-[#151714] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#252622] dark:text-[#F3F0E8]">
                  <CheckCircle2 size={14} className="text-[#1B3B2B] dark:text-[#72947B] shrink-0" />
                  <span>{lang === 'en' ? 'Bachelor of Sacred Music (Concluded)' : 'Bacharel em Música Sacra (Concluído)'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#252622] dark:text-[#F3F0E8]">
                  <CheckCircle2 size={14} className="text-[#1B3B2B] dark:text-[#72947B] shrink-0" />
                  <span>{lang === 'en' ? 'Bachelor of Theology (In Progress)' : 'Bacharelado em Teologia (Em andamento)'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#252622] dark:text-[#F3F0E8]">
                  <CheckCircle2 size={14} className="text-[#1B3B2B] dark:text-[#72947B] shrink-0" />
                  <span>{lang === 'en' ? '14+ years local church music leadership' : 'Mais de 14 anos de ministério na igreja local'}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@ramonchrystian.com?subject=Inquiry%20regarding%20Curriculum%20Vitae%20-%20Ramon%20Chrystian"
                  className="btn-primary"
                >
                  <BookOpen size={15} />
                  <span>{lang === 'en' ? 'Request Official CV & Dossier' : 'Solicitar CV & Dossiê Oficial'}</span>
                </a>
                <button
                  onClick={() => setShowCvModal(false)}
                  className="btn-secondary"
                >
                  {lang === 'en' ? 'Close' : 'Fechar'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}