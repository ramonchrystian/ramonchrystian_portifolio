import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, HeartHandshake } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import { useAdmin } from '../context/AdminContext'
import { navLinks } from '../data/navigation'

export default function Header() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const { isAdmin } = useAdmin()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`glass fixed right-0 left-0 z-50 transition-all duration-300 ${
        isAdmin ? 'top-[42px]' : 'top-0'
      } ${
        scrolled
          ? 'shadow-xs border-b border-[#E8E4DC] dark:border-[#2E322C]'
          : 'border-b border-[#E8E4DC]/70 dark:border-[#2E322C]/70'
      }`}
    >
      <nav className="section-container flex items-center justify-between py-3.5 sm:py-4">
        {/* Logo / Editorial Typography */}
        <a
          href="#"
          className="group flex flex-col font-serif tracking-tight shrink-0 mr-4"
        >
          <span className="text-xl sm:text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8] transition-colors group-hover:text-[#254E39] dark:group-hover:text-[#72947B]">
            Ramon Chrystian
          </span>
          <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#52514B] dark:text-[#B8B8AE]">
            {lang === 'en' ? 'Minister of Music · Sacred Music & Theology' : 'Ministro de Música · Música Sacra e Teologia'}
          </span>
        </a>

        {/* Desktop Nav - visible on lg screens and up */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="group relative whitespace-nowrap text-[10.5px] xl:text-[11px] font-medium uppercase tracking-[0.12em] xl:tracking-[0.15em] text-[#252622]/80 transition-colors duration-150 hover:text-[#1B3B2B] dark:text-[#F3F0E8]/80 dark:hover:text-[#72947B] cursor-pointer"
            >
              <span>{link.label[lang]}</span>
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#8A6224] transition-all duration-200 group-hover:w-full dark:bg-[#D0AC6C]" />
            </button>
          ))}
        </div>

        {/* Right Actions: Partner CTA + Theme + Lang */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Prestigious, dignified partner button */}
          <button
            onClick={() => handleNavClick('#partnership')}
            className="group shrink-0 whitespace-nowrap inline-flex items-center gap-2 rounded-full border border-[#8A6224]/30 bg-[#1B3B2B] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-serif font-medium text-[#FAF8F5] shadow-xs transition-all duration-200 hover:bg-[#254E39] hover:shadow-md hover:border-[#8A6224]/60 dark:border-[#D0AC6C]/40 dark:bg-[#D0AC6C] dark:text-[#151714] dark:hover:bg-[#E0BC7C] cursor-pointer"
            title={t('nav.partner')}
          >
            <HeartHandshake
              size={14}
              className="shrink-0 text-[#D0AC6C] transition-transform duration-200 group-hover:scale-110 dark:text-[#151714]"
            />
            <span className="tracking-wide">{t('nav.partner')}</span>
          </button>

          {/* Elegant vertical separator */}
          <div className="h-4 w-px bg-[#E8E4DC] dark:bg-[#2E322C] hidden sm:block" />

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="rounded-md p-1.5 sm:p-2 text-[#52514B] transition-colors duration-150 hover:bg-[#E8E4DC]/50 hover:text-[#1B3B2B] dark:text-[#B8B8AE] dark:hover:bg-[#20231F] dark:hover:text-[#F3F0E8] cursor-pointer"
              aria-label={t(theme === 'dark' ? 'theme.light' : 'theme.dark')}
              title={t(theme === 'dark' ? 'theme.light' : 'theme.dark')}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={toggleLang}
              className="rounded-md border border-[#E8E4DC] px-2 sm:px-2.5 py-1 font-mono text-[11px] sm:text-xs font-medium text-[#252622] transition-all duration-150 hover:border-[#8A6224] hover:text-[#1B3B2B] dark:border-[#2E322C] dark:text-[#F3F0E8] dark:hover:border-[#D0AC6C] dark:hover:text-[#D0AC6C] cursor-pointer"
              aria-label={`Switch language to ${lang === 'en' ? 'Português' : 'English'}`}
              title={`Switch language to ${lang === 'en' ? 'Português' : 'English'}`}
            >
              {lang === 'en' ? 'PT' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Toggle (shown when screen < lg) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-0.5 rounded-md p-1.5 text-[#252622] transition-colors hover:text-[#1B3B2B] lg:hidden dark:text-[#F3F0E8] dark:hover:text-[#72947B] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#E8E4DC] bg-[#FAF8F5]/98 lg:hidden dark:border-[#2E322C] dark:bg-[#151714]/98 backdrop-blur-md"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-md px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-[#252622] transition-colors duration-150 hover:bg-[#E8E4DC]/50 hover:text-[#1B3B2B] dark:text-[#F3F0E8] dark:hover:bg-[#20231F]"
                >
                  {link.label[lang]}
                </button>
              ))}

              <button
                onClick={() => handleNavClick('#partnership')}
                className="my-2 flex items-center justify-center gap-2 rounded-full bg-[#1B3B2B] px-4 py-3 text-xs font-serif font-semibold text-[#FAF8F5] shadow-sm transition-colors hover:bg-[#254E39] dark:bg-[#D0AC6C] dark:text-[#151714]"
              >
                <HeartHandshake size={15} className="text-[#D0AC6C] dark:text-[#151714]" />
                <span>{t('nav.partner')}</span>
              </button>

              <div className="mt-2 flex items-center justify-between border-t border-[#E8E4DC] pt-3 px-3 dark:border-[#2E322C]">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-xs text-[#52514B] hover:text-[#1B3B2B] dark:text-[#B8B8AE] dark:hover:text-[#F3F0E8]"
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  <span>{t(theme === 'dark' ? 'theme.light' : 'theme.dark')}</span>
                </button>
                <button
                  onClick={toggleLang}
                  className="rounded-md border border-[#E8E4DC] px-3 py-1 font-mono text-xs font-medium text-[#252622] hover:border-[#8A6224] dark:border-[#2E322C] dark:text-[#F3F0E8]"
                >
                  {lang === 'en' ? 'Mudar para Português' : 'Switch to English'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}