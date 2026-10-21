import { motion } from 'framer-motion'
import { BookOpen, MapPin, Calendar, ExternalLink, GraduationCap, FileText, BookMarked, Newspaper } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useWorkshops, useArticles } from '../sanity/useSanityData'
import { publishedBooks, editorialPeriodicals, publications } from '../data/publications'
import EditButton from './EditButton'

const typeLabelMap: Record<string, { en: string; pt: string }> = {
  workshop: { en: 'Workshop', pt: 'Oficina / Workshop' },
  lecture: { en: 'Keynote Lecture', pt: 'Palestra Magna' },
  class: { en: 'Masterclass', pt: 'Aula Especial' },
  training: { en: 'Ministry Training', pt: 'Treinamento Prático' },
}

export default function Teaching() {
  const { t, lang } = useTranslation()
  const { workshops } = useWorkshops()
  const { articles } = useArticles()

  return (
    <section id="teaching" className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]">
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
              <span>{t('teaching.badge')}</span>
            </div>
            <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {t('teaching.title')}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
              {t('teaching.subtitle')}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            <EditButton
              documentType="workshop"
              label={lang === 'en' ? 'Manage Workshops' : 'Gerenciar Workshops'}
            />
            <EditButton
              documentType="article"
              label={lang === 'en' ? 'Manage Articles' : 'Gerenciar Artigos'}
            />
          </div>
        </div>

        {/* 3 Verified Indicators (Replacing generic metrics) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-12 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-8 dark:border-[#2E322C] dark:bg-[#20231F] shadow-xs"
        >
          <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-[#E8E4DC] dark:md:divide-[#2E322C]">
            {/* Card 1: Docência Teológica & Musical */}
            <div className="space-y-2 md:pr-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8A6224] dark:text-[#D0AC6C] font-semibold block">
                FABAT & STBN
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {lang === 'en' ? 'Theological & Music Faculty' : 'Docência Teológica & Musical'}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {lang === 'en'
                  ? 'Guest professor/faculty at FABAT (Faculdade Batista do Rio de Janeiro) and STBN (Seminário Teológico Batista de Niterói).'
                  : 'Professor convidado/docente na FABAT (Faculdade Batista do Rio de Janeiro) e no Seminário Teológico Batista de Niterói (STBN).'}
              </p>
            </div>

            {/* Card 2: Alcance Interestadual (5 Estados) */}
            <div className="space-y-2 md:px-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8A6224] dark:text-[#D0AC6C] font-semibold block">
                {lang === 'en' ? '5 Brazilian States' : '5 Estados Brasileiros'}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {lang === 'en' ? 'Interstate Baptist Reach' : 'Alcance Interestadual'}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {lang === 'en'
                  ? 'Keynote speaker and clinician across Baptist Music Conventions: AMBB (National), AMBC (Carioca), AMBF (Fluminense), AMBMG (Minas Gerais), and AMBEES (Espírito Santo).'
                  : 'Preletor e oficineiro em congressos da AMBB (Brasil), AMBC (Carioca), AMBF (Fluminense), AMBMG (Minas Gerais) e AMBEES (Espírito Santo).'}
              </p>
            </div>

            {/* Card 3: Produção Editorial */}
            <div className="space-y-2 md:pl-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8A6224] dark:text-[#D0AC6C] font-semibold block">
                EST. 2008 / 2011
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {lang === 'en' ? 'Editorial & Authorial Production' : 'Produção Editorial & Autoral'}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                {lang === 'en'
                  ? 'Published author, founder of Letra Sonora (since 2008), and regular contributor to national denominational periodicals.'
                  : 'Autor de livros publicados, fundador do Letra Sonora (desde 2008) e articulista em veículos denominacionais nacionais.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            SUBSEÇÃO PRIORITÁRIA: LIVROS PUBLICADOS & ATUAÇÃO EDITORIAL
           ========================================================================= */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 border-b border-[#E8E4DC] pb-4 dark:border-[#2E322C]">
            <div>
              <div className="editorial-badge mb-2">
                <BookMarked size={12} />
                <span>{t('teaching.books.badge')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('teaching.books.title')}
              </h3>
              <p className="mt-1 text-sm text-[#52514B] dark:text-[#B8B8AE]">
                {t('teaching.books.subtitle')}
              </p>
            </div>
            <span className="font-mono text-xs text-[#52514B] dark:text-[#B8B8AE]">
              {lang === 'en' ? 'Pastoral Literature' : 'Literatura Pastoral'}
            </span>
          </div>

          {/* Books Side-by-Side Display */}
          <div className="grid gap-6 md:grid-cols-2">
            {publishedBooks.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col justify-between rounded-xl border p-6 sm:p-7 transition-all duration-200 hover:border-[#8A6224]/50 shadow-xs ${
                  book.isFeatured
                    ? 'border-[#8A6224]/40 bg-[#FAF8F5] dark:border-[#D0AC6C]/40 dark:bg-[#1E211D]'
                    : 'border-[#E8E4DC] bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="tag-pill text-[#8A6224] dark:text-[#D0AC6C]">
                      {book.isFeatured
                        ? lang === 'en' ? 'Featured Work · Amazon' : 'Obra em Destaque · Amazon'
                        : lang === 'en' ? 'Available Book' : 'Livro Publicado'}
                    </span>
                    {book.year && (
                      <span className="font-mono text-xs text-[#52514B] dark:text-[#B8B8AE]">
                        {book.year}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {book.title[lang]}
                  </h4>

                  {book.subtitle && (
                    <p className="mt-1 font-mono text-xs text-[#8A6224] dark:text-[#D0AC6C]">
                      {book.subtitle[lang]}
                    </p>
                  )}

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE]">
                    {book.description[lang]}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E8E4DC] pt-4 flex flex-wrap items-center justify-between gap-3 dark:border-[#2E322C]">
                  {book.publisher && (
                    <span className="font-mono text-[11px] text-[#52514B] dark:text-[#B8B8AE]">
                      {book.publisher[lang]}
                    </span>
                  )}
                  {book.url && (
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2 px-4 text-xs"
                    >
                      <span>{lang === 'en' ? 'View on Amazon' : 'Ver na Amazon'}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Block: Atuação Editorial & Periódicos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-8 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 dark:border-[#2E322C] dark:bg-[#20231F]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={16} className="text-[#8A6224] dark:text-[#D0AC6C]" />
              <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('teaching.editorial.title')}
              </h4>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE] mb-5">
              {t('teaching.editorial.desc')}
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {editorialPeriodicals.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-[#E8E4DC] bg-[#FAF8F5]/80 p-3.5 dark:border-[#2E322C] dark:bg-[#151714]/80"
                >
                  <p className="font-serif text-sm font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {item.name[lang]}
                  </p>
                  <p className="font-mono text-[10px] uppercase text-[#8A6224] dark:text-[#D0AC6C] mt-0.5">
                    {item.role[lang]}
                  </p>
                  <p className="font-mono text-[10px] text-[#52514B] dark:text-[#B8B8AE] mt-0.5">
                    {item.organization[lang]}
                  </p>
                  <p className="text-xs text-[#52514B] dark:text-[#B8B8AE] mt-2 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Selected Workshops Subsection */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 border-b border-[#E8E4DC] pb-4 dark:border-[#2E322C]">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('teaching.workshops.title')}
              </h3>
              <p className="mt-1 text-sm text-[#52514B] dark:text-[#B8B8AE]">
                {t('teaching.workshops.subtitle')}
              </p>
            </div>
            <span className="font-mono text-xs text-[#52514B] dark:text-[#B8B8AE]">
              {lang === 'en' ? 'Documented Selection' : 'Seleção Documentada'}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {workshops.map((w, idx) => {
              const typeLabel = typeLabelMap[w.type] ? typeLabelMap[w.type][lang] : w.type
              return (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 shadow-xs transition-all duration-200 hover:border-[#8A6224]/40 dark:border-[#2E322C] dark:bg-[#20231F]"
                >
                  <div>
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="tag-pill">
                        {typeLabel}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs text-[#52514B] dark:text-[#B8B8AE]">
                        <Calendar size={11} />
                        {typeof w.year === 'string' ? w.year : w.year[lang]}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-[#1B3B2B] dark:text-[#F3F0E8]">
                      {w.title[lang]}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm font-medium text-[#52514B] dark:text-[#B8B8AE]">
                      {w.event[lang]}
                    </p>

                    <p className="mt-1 text-xs text-[#52514B]/80 dark:text-[#B8B8AE]/80">
                      {w.institution[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#E8E4DC] pt-3 flex items-center justify-between text-xs text-[#52514B] dark:border-[#2E322C] dark:text-[#B8B8AE]">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <MapPin size={11} className="text-[#8A6224] dark:text-[#D0AC6C]" />
                      {w.city}, Brazil
                    </span>
                    {w.url && (
                      <a
                        href={w.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#1B3B2B] hover:text-[#254E39] dark:text-[#72947B] text-xs font-mono"
                      >
                        <span>{lang === 'en' ? 'Evidence' : 'Registro'}</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Editorial Publications & Essays from Letra Sonora */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 border-b border-[#E8E4DC] pb-4 dark:border-[#2E322C]">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('teaching.articles.title')}
              </h3>
              <p className="mt-1 text-sm text-[#52514B] dark:text-[#B8B8AE]">
                {t('teaching.articles.subtitle')}
              </p>
            </div>
            <a
              href="https://letrasonora.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#1B3B2B] hover:text-[#254E39] dark:text-[#72947B] self-start sm:self-auto"
            >
              <span>letrasonora.com.br</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {articles.map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 shadow-xs transition-all duration-200 hover:border-[#8A6224]/40 dark:border-[#2E322C] dark:bg-[#20231F]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#52514B] mb-3 dark:text-[#B8B8AE]">
                    <span className="flex items-center gap-1 text-[#8A6224] dark:text-[#D0AC6C]">
                      <BookOpen size={12} />
                      Letra Sonora
                    </span>
                    <span>
                      {new Date(article.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'pt-BR', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-semibold leading-snug text-[#1B3B2B] dark:text-[#F3F0E8] group-hover:text-[#254E39] dark:group-hover:text-[#72947B] transition-colors">
                    {article.title[lang]}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                    {article.excerpt[lang]}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E8E4DC] pt-3 flex items-center justify-between text-xs font-medium text-[#1B3B2B] dark:border-[#2E322C] dark:text-[#72947B]">
                  <span>{lang === 'en' ? 'Read full essay' : 'Ler ensaio completo'}</span>
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Academic Publications Subsection (if verified items are added) */}
        {publications.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8] mb-6">
              {t('teaching.publications.title')}
            </h3>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="flex items-start gap-4 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 dark:border-[#2E322C] dark:bg-[#20231F]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B]">
                    <FileText size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                      {pub.title[lang]}
                    </h4>
                    <p className="text-xs font-mono text-[#52514B] mt-0.5 dark:text-[#B8B8AE]">{pub.venue[lang]}</p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#52514B] dark:text-[#B8B8AE]">
                      {pub.description[lang]}
                    </p>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-[#1B3B2B] hover:text-[#254E39] dark:text-[#72947B]"
                      >
                        <span>{lang === 'en' ? 'Source' : 'Fonte'}</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}