import { motion } from 'framer-motion'
import { Award, Music, BookOpen, HeartHandshake } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useLang } from '../context/LangContext'
import EditButton from './EditButton'

export default function About() {
  const { t } = useTranslation()
  const { lang } = useLang()

  const profileHighlights = [
    {
      icon: Music,
      title: {
        en: 'Sacred Music & Liturgy',
        pt: 'Música Sacra & Liturgia',
      },
      desc: {
        en: 'Grounded in hymnody, choral direction, and musical craftsmanship for congregational singing.',
        pt: 'Fundamentado na hinódia, regência e zelo musical voltado ao canto congregacional.',
      },
    },
    {
      icon: BookOpen,
      title: {
        en: 'Theological Grounding',
        pt: 'Solidez Teológica',
      },
      desc: {
        en: 'Undergraduate studies in theology deepening biblical hermeneutics and pastoral ministry.',
        pt: 'Formação teológica aprofundando hermenêutica bíblica e ministério pastoral na igreja local.',
      },
    },
    {
      icon: HeartHandshake,
      title: {
        en: 'Local Church Mentorship',
        pt: 'Discipulado na Igreja Local',
      },
      desc: {
        en: 'Over a decade shaping volunteer musicians, developing leaders, and serving pastoral teams.',
        pt: 'Mais de uma década formando instrumentistas voluntários e servindo equipes pastorais.',
      },
    },
  ]

  return (
    <section id="profile" className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]">
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
              <Award size={13} />
              <span>{t('profile.badge')}</span>
            </div>
            <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('profile.title')}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#77766F] dark:text-[#B8B8AE] font-serif italic">
              {t('profile.subtitle')}
            </p>
          </motion.div>

          <EditButton
            documentType="siteSettings"
            label={lang === 'en' ? 'Edit Bio & Profile' : 'Editar Biografia & Perfil'}
          />
        </div>

        {/* Narrative & Profile Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          {/* Main Narrative Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-[17px] leading-[1.8] text-[#252622]/90 dark:text-[#B8B8AE]"
          >
            <p className="text-lg sm:text-xl font-serif text-[#1B3B2B] dark:text-[#F3F0E8] leading-relaxed">
              {t('profile.bio1')}
            </p>
            <p>{t('profile.bio2')}</p>
            <p>{t('profile.bio3')}</p>
          </motion.div>

          {/* Highlights / Foundational Anchors (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="lg:col-span-5 space-y-4"
          >
            {profileHighlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-5 shadow-xs transition-all duration-200 hover:border-[#B58B49]/40 dark:border-[#2E322C] dark:bg-[#20231F] dark:hover:border-[#D0AC6C]/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                        {item.title[lang]}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
                        {item.desc[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Quote banner */}
            <div className="rounded-xl border-l-2 border-[#B58B49] bg-[#FAF8F5] p-5 text-xs sm:text-sm italic leading-relaxed text-[#252622]/85 dark:border-[#D0AC6C] dark:bg-[#20231F] dark:text-[#B8B8AE]">
              {lang === 'en'
                ? '“Worship is never primarily about our aesthetic performance; it is pastoral hospitality that invites the congregation into the presence and truth of God.”'
                : '“O louvor na igreja nunca é primariamente sobre nossa performance estética; é hospitalidade pastoral que convida a congregação à presença e à verdade de Deus.”'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}