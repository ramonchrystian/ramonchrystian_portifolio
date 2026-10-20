import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Mail, Globe, Camera, Video, KeyRound, AlertCircle, ArrowRight, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'

interface MaintenanceProps {
  onUnlock: () => void
}

export default function Maintenance({ onUnlock }: MaintenanceProps) {
  const { lang, toggleLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (username.trim().toLowerCase() === 'ramon' && password === 'Podx3!ramonchrystian') {
      setError(false)
      localStorage.setItem('rc_dev_auth', 'true')
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#FAF8F5] text-[#252622] transition-colors duration-200 dark:bg-[#151714] dark:text-[#F3F0E8] overflow-hidden">
      {/* Subtle musical score watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035] dark:opacity-[0.02]">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-current" />
        <div className="absolute top-[28%] left-0 right-0 h-px bg-current" />
        <div className="absolute top-[31%] left-0 right-0 h-px bg-current" />
        <div className="absolute top-[34%] left-0 right-0 h-px bg-current" />
        <div className="absolute top-[37%] left-0 right-0 h-px bg-current" />
      </div>

      {/* Top Bar */}
      <header className="relative z-10 border-b border-[#E8E4DC] dark:border-[#2E322C] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex flex-col font-serif">
            <span className="text-lg sm:text-xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
              Ramon Chrystian
            </span>
            <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#77766F] dark:text-[#B8B8AE]">
              {lang === 'en' ? 'Minister of Music · Sacred Music & Theology' : 'Ministro de Música · Música Sacra e Teologia'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="rounded-lg border border-[#E8E4DC] px-2.5 py-1 text-xs font-mono font-medium text-[#252622] transition-colors hover:bg-[#E8E4DC]/50 dark:border-[#2E322C] dark:text-[#F3F0E8] dark:hover:bg-[#20231F] cursor-pointer"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-[#E8E4DC] p-1.5 text-[#252622] transition-colors hover:bg-[#E8E4DC]/50 dark:border-[#2E322C] dark:text-[#F3F0E8] dark:hover:bg-[#20231F] cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* Central Hero Maintenance Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-xl w-full text-center"
        >
          {/* Outer classical border frame */}
          <div className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-8 sm:p-11 shadow-sm dark:border-[#2E322C] dark:bg-[#1A1D19]">
            {/* Portrait Frame */}
            <div className="relative mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-2 border-[#B58B49]/50 shadow-md dark:border-[#D0AC6C]/50">
              <img
                src="/retrato1.png"
                alt="Ramon Chrystian - Ministro de Música"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Editorial Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B58B49]/40 bg-[#FAF8F5] px-3.5 py-1 font-mono text-[11px] text-[#1B3B2B] shadow-2xs dark:border-[#D0AC6C]/40 dark:bg-[#151714] dark:text-[#D0AC6C] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B58B49] dark:bg-[#D0AC6C] animate-pulse" />
              <span>{lang === 'en' ? 'Under Preparation · Final Curation' : 'Em Preparação · Curadoria Final'}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8] leading-tight">
              {lang === 'en'
                ? 'Website Currently Under Curation'
                : 'Portal em Atualização & Curadoria Documental'}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#252622]/85 dark:text-[#B8B8AE] max-w-md mx-auto">
              {lang === 'en'
                ? 'We are currently organizing and finalizing the academic dossier, musical recordings, and ministry timeline. The full portfolio will be launched shortly.'
                : 'Estamos organizando e finalizando a curadoria do dossiê acadêmico, registros de adoração e trajetória ministerial. O portal completo estará disponível em breve.'}
            </p>

            {/* Direct Contact Channels */}
            <div className="mt-8 border-t border-[#E8E4DC] pt-6 dark:border-[#2E322C]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-3 font-medium">
                {lang === 'en' ? 'Direct Channels & Ministry Contact:' : 'Canais Diretos & Contato Ministerial:'}
              </p>

              <div className="flex flex-wrap justify-center gap-2.5">
                <a
                  href="mailto:ramonchrystian@gmail.com"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] px-3 py-1.5 text-xs font-mono text-[#1B3B2B] hover:border-[#1B3B2B]/40 hover:bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#F3F0E8]"
                >
                  <Mail size={13} className="text-[#B58B49] dark:text-[#D0AC6C]" />
                  <span>ramonchrystian@gmail.com</span>
                </a>

                <a
                  href="https://letrasonora.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] px-3 py-1.5 text-xs font-mono text-[#1B3B2B] hover:border-[#1B3B2B]/40 hover:bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#F3F0E8]"
                >
                  <Globe size={13} className="text-[#B58B49] dark:text-[#D0AC6C]" />
                  <span>letrasonora.com.br</span>
                </a>

                <a
                  href="https://instagram.com/ramonchrystian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] px-3 py-1.5 text-xs font-mono text-[#1B3B2B] hover:border-[#1B3B2B]/40 hover:bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#F3F0E8]"
                >
                  <Camera size={13} className="text-[#B58B49] dark:text-[#D0AC6C]" />
                  <span>@ramonchrystian</span>
                </a>

                <a
                  href="https://youtube.com/@ramonchrystian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] px-3 py-1.5 text-xs font-mono text-[#1B3B2B] hover:border-[#1B3B2B]/40 hover:bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F] dark:text-[#F3F0E8]"
                >
                  <Video size={13} className="text-[#B58B49] dark:text-[#D0AC6C]" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Discreet Developer Unlock Link */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#77766F] hover:text-[#1B3B2B] dark:text-[#B8B8AE] dark:hover:text-[#D0AC6C] cursor-pointer transition-colors"
              >
                <Lock size={12} />
                <span>{lang === 'en' ? 'Developer Access' : 'Acesso do Desenvolvedor'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#E8E4DC] dark:border-[#2E322C] px-6 py-4 text-center font-mono text-[11px] text-[#77766F] dark:text-[#B8B8AE]">
        <span>© {new Date().getFullYear()} Ramon Chrystian · Rio de Janeiro, Brasil</span>
      </footer>

      {/* Developer Unlock Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-sm w-full rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-2xl dark:border-[#2E322C] dark:bg-[#1A1D19]"
            >
              <div className="flex items-center gap-3 text-[#1B3B2B] dark:text-[#72947B] mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#151714]">
                  <KeyRound size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {lang === 'en' ? 'Developer Authentication' : 'Acesso Restrito'}
                  </h3>
                  <p className="font-mono text-[11px] text-[#77766F] dark:text-[#B8B8AE]">
                    {lang === 'en' ? 'Preview Mode Unlock' : 'Liberação para Visualização'}
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-300/60 bg-red-50/60 p-2.5 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-480">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{lang === 'en' ? 'Invalid credentials.' : 'Usuário ou senha incorretos.'}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1">
                    {lang === 'en' ? 'User' : 'Usuário'}
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ramon"
                    className="w-full rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] px-3 py-2 text-sm text-[#252622] outline-hidden focus:border-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1">
                    {lang === 'en' ? 'Password' : 'Senha'}
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] px-3 py-2 text-sm text-[#252622] outline-hidden focus:border-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
                  />
                </div>

                <div className="mt-5 flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="btn-primary flex-1 justify-center text-xs"
                  >
                    <span>{lang === 'en' ? 'Enter' : 'Acessar'}</span>
                    <ArrowRight size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginModal(false)
                      setError(false)
                    }}
                    className="btn-secondary text-xs"
                  >
                    {lang === 'en' ? 'Cancel' : 'Cancelar'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
