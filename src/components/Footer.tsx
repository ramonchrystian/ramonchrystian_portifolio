import { Church } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[#E8E4DC] py-12 bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#151714]">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <a href="#" className="font-serif text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8] tracking-tight">
              Ramon Chrystian
            </a>
            <p className="mt-1 text-xs text-[#77766F] dark:text-[#B8B8AE]">
              &copy; {new Date().getFullYear()} Ramon Chrystian. {t('footer.copyright')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-[#77766F] dark:text-[#B8B8AE]">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#1B3B2B] dark:text-[#72947B]">
              <Church size={12} />
              <span>{t('footer.designedFor')}</span>
            </div>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="font-mono text-[11px]">{t('footer.location')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}