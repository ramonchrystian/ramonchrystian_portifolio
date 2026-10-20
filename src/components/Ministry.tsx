import { motion } from 'framer-motion'
import { Music, Users, Sliders, Calendar, ChevronRight, Church } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { ministryExperiences } from '../data/ministryExperiences'
import { videos } from '../data/videos'

const pillarIconMap: Record<string, typeof Music> = {
  worship: Music,
  direction: Users,
  session: Sliders,
}

const pillars = [
  {
    id: 'worship',
    title: {
      en: 'Worship Leadership & Congregational Song',
      pt: 'Liderança de Adoração & Canto Congregacional',
    },
    description: {
      en: 'Pastoral planning of the gathered assembly’s singing, blending historic hymnody and contemporary worship with theological clarity and congregational voice primacy.',
      pt: 'Planejamento pastoral do canto da congregação reunida, unindo a riqueza da hinódia histórica e canções contemporâneas com primazia da voz da igreja.',
    },
    icon: 'worship',
  },
  {
    id: 'direction',
    title: {
      en: 'Musical Direction & Team Development',
      pt: 'Direção Musical & Formação de Equipes',
    },
    description: {
      en: 'Band leadership, vocal coaching, rehearsal structuring, and intentional spiritual and musical mentorship for volunteer church musicians.',
      pt: 'Regência de bandas, preparação vocal, estruturação metódica de ensaios e mentoria espiritual e técnica contínua para voluntários locais.',
    },
    icon: 'direction',
  },
  {
    id: 'session',
    title: {
      en: 'Arranging & Liturgical Production',
      pt: 'Arranjos & Produção Litúrgica',
    },
    description: {
      en: 'Custom vocal and instrumental arrangements, acoustic balancing, guitar craftsmanship, and DAW workflow integration to elevate the church’s weekly worship.',
      pt: 'Elaboração de arranjos sob medida para banda e vozes, sensibilidade dinâmica na guitarra e uso criterioso de tecnologia de áudio para servir ao culto.',
    },
    icon: 'session',
  },
]

export default function Ministry() {
  const { t, lang } = useTranslation()

  // Only render videos with actual verified IDs
  const verifiedVideos = videos.filter(
    (v) => v.youtubeId && v.youtubeId !== 'dQw4w9WgXcQ' && v.youtubeId.trim() !== ''
  )

  return (
    <section id="ministry" className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]">
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
            <Church size={13} />
            <span>{t('ministry.badge')}</span>
          </div>
          <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
            {t('ministry.title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
            {t('ministry.subtitle')}
          </p>
        </motion.div>

        {/* Ministerial Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillarIconMap[pillar.icon] || Music
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-xs transition-all duration-200 hover:border-[#B58B49]/40 dark:border-[#2E322C] dark:bg-[#20231F] dark:hover:border-[#D0AC6C]/40"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B] mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {pillar.title[lang]}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
                    {pillar.description[lang]}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E8E4DC] pt-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#B58B49] dark:border-[#2E322C] dark:text-[#D0AC6C]">
                  <span>— {lang === 'en' ? 'Ministerial Practice' : 'Prática Ministerial'}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Ministry Experience Timeline */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-2xl"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('ministry.experience.title')}
            </h3>
            <p className="mt-2 text-sm text-[#77766F] dark:text-[#B8B8AE]">
              {t('ministry.experience.subtitle')}
            </p>
          </motion.div>

          <div className="relative border-l border-[#E8E4DC] pl-6 sm:pl-10 space-y-10 ml-2 sm:ml-4 dark:border-[#2E322C]">
            {ministryExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Timeline Node Marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#E8E4DC] bg-[#FAF8F5] shadow-xs dark:border-[#2E322C] dark:bg-[#151714] text-[#1B3B2B] dark:text-[#72947B]">
                  <Calendar size={13} />
                </div>

                {/* Experience Card */}
                <div className="rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8E4DC] pb-4 dark:border-[#2E322C]">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                        {exp.church[lang]}
                      </h4>
                      <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#77766F] dark:text-[#B8B8AE]">
                        {exp.role[lang]}
                      </p>
                    </div>
                    <span className="tag-pill self-start sm:self-auto">
                      {typeof exp.period === 'string' ? exp.period : exp.period[lang]}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-2 font-medium">
                      {lang === 'en' ? 'Core Responsibilities:' : 'Responsabilidades Principais:'}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {exp.responsibilities[lang].map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE]">
                          <ChevronRight size={13} className="mt-1 shrink-0 text-[#B58B49] dark:text-[#D0AC6C]" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights if present */}
                  {exp.highlights && exp.highlights[lang] && exp.highlights[lang].length > 0 && (
                    <div className="mt-5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] p-3.5 dark:border-[#2E322C] dark:bg-[#151714]">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[#1B3B2B] dark:text-[#72947B] font-semibold mb-1">
                        {lang === 'en' ? 'Ministerial Highlights' : 'Destaques Ministeriais'}:
                      </p>
                      <ul className="space-y-1">
                        {exp.highlights[lang].map((h, i) => (
                          <li key={i} className="text-xs leading-relaxed text-[#77766F] dark:text-[#B8B8AE] italic">
                            • {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verified Videos or Repertoire Recordings Section (if verified exist) */}
        {verifiedVideos.length > 0 && (
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 max-w-2xl"
            >
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('ministry.videosTitle')}
              </h3>
              <p className="mt-2 text-sm text-[#77766F] dark:text-[#B8B8AE]">
                {t('ministry.videosSubtitle')}
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {verifiedVideos.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] transition-all duration-200 hover:border-[#B58B49]/40 dark:border-[#2E322C] dark:bg-[#20231F]"
                >
                  <div className="aspect-video bg-[#E8E4DC]/40 flex items-center justify-center dark:bg-[#151714]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#72947B] transition-transform duration-200 group-hover:scale-105">
                      <Music size={20} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                      {video.title[lang]}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
                      {video.description[lang]}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}