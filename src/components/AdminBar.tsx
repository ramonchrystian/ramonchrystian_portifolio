import { ShieldCheck, ExternalLink, Power, Settings } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'
import { useLang } from '../context/LangContext'

export default function AdminBar() {
  const { isAdmin, isMaintenance, toggleMaintenance, logout } = useAdmin()
  const { lang } = useLang()

  if (!isAdmin) return null

  return (
    <aside
      aria-label={lang === 'en' ? 'Administrative Control Bar' : 'Barra de Controle Administrativo'}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="bg-[#1B3B2B] text-[#FAF8F5] border-b border-[#B58B49]/40 shadow-xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Admin Identity */}
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FAF8F5]/10 text-[#D0AC6C]">
              <ShieldCheck size={14} />
            </span>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="font-semibold text-[#F3F0E8]">Ramon Chrystian</span>
              <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#FAF8F5]/15 text-[#D0AC6C]">
                Admin
              </span>
            </div>
          </div>

          {/* Center: Maintenance Mode Controller */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/25 px-3 py-1 rounded-full border border-white/10">
            <span className="text-[11px] font-mono text-[#E8E4DC] hidden md:inline">
              {lang === 'en' ? 'Visitor Status:' : 'Status para Visitantes:'}
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  isMaintenance ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                }`}
              />
              <span className="font-mono text-[11px] font-medium">
                {isMaintenance
                  ? lang === 'en'
                    ? 'Maintenance Mode (Visitors Blocked)'
                    : 'Modo Manutenção (Visitantes Bloqueados)'
                  : lang === 'en'
                    ? 'Public Mode (Site Online)'
                    : 'Site Público (Online para Todos)'}
              </span>
            </div>

            <button
              onClick={toggleMaintenance}
              className={`ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold transition-colors cursor-pointer ${
                isMaintenance
                  ? 'bg-amber-400 text-[#151714] hover:bg-amber-300'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
              title={
                isMaintenance
                  ? 'Clique para abrir o site para todos os visitantes'
                  : 'Clique para ativar a tela de manutenção para os visitantes'
              }
            >
              {isMaintenance
                ? lang === 'en'
                  ? 'Open to Public'
                  : 'Abrir Site ao Público'
                : lang === 'en'
                  ? 'Enable Maintenance'
                  : 'Ativar Manutenção'}
            </button>
          </div>

          {/* Right: Shortcuts & Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://ramonchrystian.sanity.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF8F5] text-[#1B3B2B] hover:bg-[#FAF8F5]/90 font-mono font-medium text-[11px] shadow-xs transition-colors cursor-pointer"
            >
              <Settings size={12} className="text-[#B58B49]" />
              <span>Sanity Studio</span>
              <ExternalLink size={10} className="opacity-60" />
            </a>

            <button
              onClick={logout}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-red-500/80 text-white font-mono text-[11px] transition-colors cursor-pointer"
              title="Encerrar sessão de administrador"
            >
              <Power size={11} />
              <span>{lang === 'en' ? 'Exit' : 'Sair'}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
