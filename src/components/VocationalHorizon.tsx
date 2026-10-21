import { motion } from 'framer-motion'
import { HeartHandshake, Compass, Users, GraduationCap, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

export default function VocationalHorizon() {
  const { t, lang } = useTranslation()

  const partnerMailto = encodeURIComponent(
    lang === 'en'
      ? '[Truett Seminary Sending Mission] Ministry Partnership - Ramon Chrystian'
      : '[Envio Truett Seminary] Parceria Ministerial - Ramon Chrystian'
  )

  const workshopMailto = encodeURIComponent(
    lang === 'en'
      ? '[Church Workshop Invitation] Ministry Training - Ramon Chrystian'
      : '[Convite para Workshop] Treinamento Ministerial na Igreja - Ramon Chrystian'
  )

  return (
    <section
      id="partnership"
      className="section-padding relative overflow-hidden bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]"
    >
      {/* Anchor for #vocational-horizon */}
      <div id="vocational-horizon" className="absolute -top-16 left-0" />

      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#8A6224]/5 pointer-events-none blur-3xl dark:bg-[#D0AC6C]/5" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#1B3B2B]/5 pointer-events-none blur-3xl dark:bg-[#72947B]/5" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="editorial-badge mx-auto mb-3">
            <Compass size={13} />
            <span>{t('partnership.badge')}</span>
          </div>

          <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
            {t('partnership.title')}
          </h2>

          <p className="mt-3 text-sm sm:text-base font-mono font-medium text-[#8A6224] dark:text-[#D0AC6C] uppercase tracking-wider">
            {t('partnership.subtitle')}
          </p>
        </motion.div>

        {/* 1. Narrative of Calling and Vision (3 Columns) */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* A Caminhada */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B] mb-4">
                <Users size={18} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('partnership.journey.title')}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {t('partnership.journey.desc')}
              </p>
            </div>
            <div className="mt-6 border-t border-[#E8E4DC] pt-3 font-mono text-[10px] uppercase text-[#8A6224] dark:border-[#2E322C] dark:text-[#D0AC6C]">
              {lang === 'en' ? 'Sustained Local Church Ministry' : 'Ministério Pastoral Consolidado'}
            </div>
          </motion.div>

          {/* A Visão */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B] mb-4">
                <Compass size={18} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('partnership.vision.title')}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {t('partnership.vision.desc')}
              </p>
            </div>
            <div className="mt-6 border-t border-[#E8E4DC] pt-3 font-mono text-[10px] uppercase text-[#8A6224] dark:border-[#2E322C] dark:text-[#D0AC6C]">
              {lang === 'en' ? 'Biblical & Liturgical Renewal' : 'Renovação Bíblica & Litúrgica'}
            </div>
          </motion.div>

          {/* O Próximo Passo (Fall 2027) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-between rounded-xl border-2 border-[#8A6224]/40 bg-[#FAF8F5] p-6 sm:p-7 shadow-xs dark:border-[#D0AC6C]/40 dark:bg-[#1E211D]"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#8A6224]/50 bg-[#FAF8F5] text-[#8A6224] dark:border-[#D0AC6C]/50 dark:bg-[#151714] dark:text-[#D0AC6C] mb-4">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('partnership.nextStep.title')}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {t('partnership.nextStep.desc')}
              </p>
            </div>
            <div className="mt-6 border-t border-[#E8E4DC] pt-3 flex items-center justify-between font-mono text-[10px] uppercase text-[#8A6224] dark:border-[#2E322C] dark:text-[#D0AC6C]">
              <span>Baylor University</span>
              <span>Waco, Texas</span>
            </div>
          </motion.div>
        </div>

        {/* 2. As Três Frentes de Parceria Ministerial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-7 sm:p-10 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="editorial-badge mb-2">
              <HeartHandshake size={12} />
              <span>{lang === 'en' ? 'Walking Together' : 'Caminhando Juntos'}</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('partnership.fronts.title')}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#52514B] dark:text-[#B8B8AE]">
              {lang === 'en'
                ? 'Three specific ways churches, pastoral colleagues, and partners can walk alongside our family’s sending mission.'
                : 'Três caminhos concretos e dignos para cooperar com nossa família no envio ministerial para o Truett Seminary.'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Frente 1: Oração */}
            <div className="rounded-xl border border-[#E8E4DC] bg-[#FAF8F5]/90 p-6 dark:border-[#2E322C] dark:bg-[#151714]/90 space-y-3">
              <span className="tag-pill text-[#8A6224] dark:text-[#D0AC6C]">
                {lang === 'en' ? 'Spiritual Covering' : 'Cobertura Espiritual'}
              </span>
              <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('partnership.front1.title')}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {t('partnership.front1.desc')}
              </p>
            </div>

            {/* Frente 2: Fundo Inicial de Chegada */}
            <div className="rounded-xl border border-[#8A6224]/40 bg-[#FAF8F5]/90 p-6 dark:border-[#D0AC6C]/40 dark:bg-[#1E211D] space-y-3">
              <span className="tag-pill text-[#8A6224] dark:text-[#D0AC6C]">
                {lang === 'en' ? 'Initial Logistical Fund' : 'Fundo Logístico Inicial'}
              </span>
              <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('partnership.front2.title')}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {t('partnership.front2.desc')}
              </p>
            </div>

            {/* Frente 3: Workshops & Treinamentos */}
            <div className="rounded-xl border border-[#E8E4DC] bg-[#FAF8F5]/90 p-6 dark:border-[#2E322C] dark:bg-[#151714]/90 space-y-3">
              <span className="tag-pill text-[#8A6224] dark:text-[#D0AC6C]">
                {lang === 'en' ? 'Mutual Blessing' : 'Bênção Mútua na Igreja'}
              </span>
              <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('partnership.front3.title')}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {t('partnership.front3.desc')}
              </p>
            </div>
          </div>

          {/* 3. Action CTAs (2 Buttons) */}
          <div className="mt-10 pt-8 border-t border-[#E8E4DC] dark:border-[#2E322C] flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:ramonchrystian@gmail.com?subject=${partnerMailto}`}
              className="btn-primary w-full sm:w-auto justify-center text-sm py-3 px-6 shadow-xs"
            >
              <HeartHandshake size={16} />
              <span>{t('partnership.cta.partner')}</span>
              <ArrowRight size={14} />
            </a>

            <a
              href={`mailto:ramonchrystian@gmail.com?subject=${workshopMailto}`}
              className="btn-secondary w-full sm:w-auto justify-center text-sm py-3 px-6 border-[#8A6224]/50 hover:border-[#8A6224] text-[#8A6224] dark:text-[#D0AC6C]"
            >
              <Calendar size={16} />
              <span>{t('partnership.cta.workshop')}</span>
            </a>
          </div>

          {/* Institutional note */}
          <div className="mt-6 text-center">
            <p className="font-mono text-[11px] text-[#52514B] dark:text-[#B8B8AE]">
              <span className="inline-flex items-center gap-1">
                <MapPin size={11} className="text-[#8A6224] dark:text-[#D0AC6C]" />
                George W. Truett Theological Seminary · Baylor University (Waco, TX)
              </span>
              {' · '}
              <a
                href="mailto:ramonchrystian@gmail.com"
                className="underline hover:text-[#1B3B2B] dark:hover:text-[#F3F0E8]"
              >
                ramonchrystian@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
