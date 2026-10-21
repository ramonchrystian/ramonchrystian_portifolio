import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KeyRound, AlertCircle, ArrowRight, X } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'
import { useLang } from '../context/LangContext'

export default function AdminLoginModal() {
  const { showLoginModal, setShowLoginModal, login } = useAdmin()
  const { lang } = useLang()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  if (!showLoginModal) return null

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const success = login(username, password)
    if (success) {
      setError(false)
      setShowLoginModal(false)
      setUsername('')
      setPassword('')
    } else {
      setError(true)
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-sm w-full rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-7 shadow-2xl dark:border-[#2E322C] dark:bg-[#1A1D19]"
        >
          <button
            onClick={() => {
              setShowLoginModal(false)
              setError(false)
            }}
            className="absolute top-4 right-4 text-[#77766F] hover:text-[#252622] dark:text-[#B8B8AE] dark:hover:text-[#F3F0E8] cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 text-[#1B3B2B] dark:text-[#72947B] mb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8E4DC] bg-white dark:border-[#2E322C] dark:bg-[#151714] shadow-xs">
              <KeyRound size={20} className="text-[#B58B49] dark:text-[#D0AC6C]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {lang === 'en' ? 'Administrator Login' : 'Acesso Administrativo'}
              </h3>
              <p className="font-mono text-[11px] text-[#77766F] dark:text-[#B8B8AE]">
                {lang === 'en' ? 'Manage portfolio & content' : 'Gerenciar site & conteúdo'}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-300/60 bg-red-50/70 p-2.5 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-400">
              <AlertCircle size={15} className="shrink-0" />
              <span>{lang === 'en' ? 'Invalid credentials.' : 'Usuário ou senha incorretos.'}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1">
                {lang === 'en' ? 'User' : 'Usuário'}
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ramon"
                className="w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-2 text-sm text-[#252622] outline-hidden focus:border-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1">
                {lang === 'en' ? 'Password' : 'Senha'}
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-2 text-sm text-[#252622] outline-hidden focus:border-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
              />
            </div>

            <div className="mt-5 flex gap-2 pt-2">
              <button
                type="submit"
                className="btn-primary flex-1 justify-center text-xs"
              >
                <span>{lang === 'en' ? 'Sign In' : 'Entrar como Admin'}</span>
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
    </AnimatePresence>
  )
}
