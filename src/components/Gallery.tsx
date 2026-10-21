import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ExternalLink, X, Image as ImageIcon, Sparkles } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useGalleryImages } from '../sanity/useSanityData'
import { urlFor } from '../sanity/client'
import EditButton from './EditButton'
import type { GalleryItem } from '../types'

const categoryLabels: Record<string, { pt: string; en: string }> = {
  all: { pt: 'Todos os Registros', en: 'All Records' },
  worship: { pt: 'Culto & Adoração', en: 'Worship' },
  cantata: { pt: 'Cantatas & Especiais', en: 'Cantatas' },
  choir: { pt: 'Coro & Orquestra', en: 'Choir & Orchestra' },
  workshop: { pt: 'Workshops & Ensino', en: 'Workshops' },
}

export default function Gallery() {
  const { lang } = useTranslation()
  const { galleryItems, googlePhotosUrl } = useGalleryImages()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const resolveImageUrl = (image: any): string => {
    if (!image) return '/retrato1.png'
    if (typeof image === 'string') return image
    try {
      return urlFor(image).width(1200).auto('format').url()
    } catch {
      return '/retrato1.png'
    }
  }

  const resolveThumbnailUrl = (image: any): string => {
    if (!image) return '/retrato1.png'
    if (typeof image === 'string') return image
    try {
      return urlFor(image).width(600).height(450).auto('format').url()
    } catch {
      return '/retrato1.png'
    }
  }

  return (
    <section
      id="gallery"
      className="section-padding bg-[#FAF8F5] dark:bg-[#151714] border-b border-[#E8E4DC] dark:border-[#2E322C]"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="editorial-badge mb-3">
              <Camera size={13} />
              <span>{lang === 'en' ? 'Visual Documentation' : 'Registros Litúrgicos & Artísticos'}</span>
            </div>
            <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              {lang === 'en' ? 'Ministry Photo Archive' : 'Galeria de Registros do Ministério'}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
              {lang === 'en'
                ? 'Curated visual moments from church worship services, choral cantatas, live orchestra productions, and educational workshops.'
                : 'Momentos documentados de liturgias solenes, regência de coros e orquestras, cantatas temáticas e capacitações de equipes de adoração.'}
            </p>
          </motion.div>

          {/* Admin Edit Shortcut */}
          <div className="shrink-0">
            <EditButton
              documentType="galleryImage"
              label={lang === 'en' ? 'Manage Photos' : 'Gerenciar Fotos'}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([key, labelObj]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors cursor-pointer ${
                selectedCategory === key
                  ? 'bg-[#1B3B2B] text-[#FAF8F5] dark:bg-[#72947B] dark:text-[#151714] font-medium'
                  : 'bg-white/60 dark:bg-[#20231F] text-[#77766F] dark:text-[#B8B8AE] border border-[#E8E4DC] dark:border-[#2E322C] hover:border-[#B58B49]/50'
              }`}
            >
              {labelObj[lang]}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => {
            const thumbUrl = resolveThumbnailUrl(item.image)
            const title = item.title[lang] || item.title.pt
            const caption = item.caption ? item.caption[lang] || item.caption.pt : ''
            const catLabel = categoryLabels[item.category]?.[lang] || item.category

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActivePhoto(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#E8E4DC] bg-white dark:border-[#2E322C] dark:bg-[#20231F] shadow-xs hover:border-[#B58B49]/50 transition-all duration-300"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-[#FAF8F5] dark:bg-[#151714]">
                  <img
                    src={thumbUrl}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay info */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#77766F] dark:text-[#B8B8AE] mb-1.5">
                    <span className="text-[#B58B49] dark:text-[#D0AC6C] uppercase tracking-wider font-medium">
                      {catLabel}
                    </span>
                    {item.date && <span>{item.date}</span>}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#1B3B2B] dark:text-[#F3F0E8] line-clamp-1 group-hover:text-[#B58B49] transition-colors">
                    {title}
                  </h3>
                  {caption && (
                    <p className="mt-1 text-xs text-[#77766F] dark:text-[#B8B8AE] line-clamp-2 leading-relaxed">
                      {caption}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Google Photos Dedicated Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-8 dark:border-[#2E322C] dark:bg-[#1A1D19] shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8E4DC] bg-white text-[#1B3B2B] shadow-xs dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#72947B]">
                <ImageIcon size={22} className="text-[#B58B49] dark:text-[#D0AC6C]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#B58B49] dark:text-[#D0AC6C] font-semibold mb-1">
                  <Sparkles size={11} />
                  <span>{lang === 'en' ? 'Complete Photo Repository' : 'Acervo Fotográfico Completo'}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                  {lang === 'en'
                    ? 'Explore the Full Album on Google Photos'
                    : 'Acesse o Álbum Completo no Google Fotos'}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#77766F] dark:text-[#B8B8AE] max-w-xl leading-relaxed">
                  {lang === 'en'
                    ? 'Access our curated collection of high-resolution photo archives including seasonal cantatas, choir rehearsals, and worship leadership assemblies.'
                    : 'Acesse a coletânea pública em alta resolução com centenas de registros fotográficos de celebrações pascais, musicais de Natal, orquestras e oficinas.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={googlePhotosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center text-xs"
              >
                <span>{lang === 'en' ? 'Open Google Photos Album' : 'Abrir Álbum no Google Fotos'}</span>
                <ExternalLink size={13} />
              </a>
              <EditButton
                documentType="siteSettings"
                label={lang === 'en' ? 'Change Link' : 'Alterar Link'}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-[#1A1D19] border border-[#2E322C] shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black/40">
                <img
                  src={resolveImageUrl(activePhoto.image)}
                  alt={activePhoto.title[lang] || activePhoto.title.pt}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#20231F] text-[#F3F0E8]">
                <div className="flex items-center justify-between text-xs font-mono text-[#D0AC6C] mb-1">
                  <span>{categoryLabels[activePhoto.category]?.[lang] || activePhoto.category}</span>
                  {activePhoto.date && <span>{activePhoto.date}</span>}
                </div>
                <h4 className="font-serif text-xl font-semibold">
                  {activePhoto.title[lang] || activePhoto.title.pt}
                </h4>
                {activePhoto.caption && (
                  <p className="mt-2 text-sm text-[#B8B8AE] leading-relaxed">
                    {activePhoto.caption[lang] || activePhoto.caption.pt}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
