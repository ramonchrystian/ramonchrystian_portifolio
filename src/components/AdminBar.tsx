import { ShieldCheck, ExternalLink, Power, Settings, Eye, EyeOff, Loader2 } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'
import { useLang } from '../context/LangContext'

export default function AdminBar() {
  const {
    isAdmin,
    isMaintenance,
    adminPreviewSite,
    toggleAdminPreviewSite,
    toggleMaintenance,
    isUpdatingMaintenance,
    logout,
  } = useAdmin()
  const { lang } = useLang()

  if (!isAdmin) return null

  return (
    <aside
      aria-label={lang === 'en' ? 'Administrative Control Bar' : 'Barra de Controle Administrativo'}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    >
      <div className="bg-[#1B3B2B] text-[#FAF8F5] border-b border-[#8A6224]/50 shadow-xl backdrop-blur-md">
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

          {/* Center: Maintenance Mode Controller & Preview Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/30 px-3 py-1 rounded-full border border-white/10">
            <span className="text-[11px] font-mono text-[#E8E4DC] hidden lg:inline">
              {lang === 'en' ? 'Visitor Status:' : 'Status para Visitantes:'}
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isMaintenance ? 'bg-amber-400 animate-pulse ring-2 ring-amber-400/30' : 'bg-emerald-400'
                }`}
              />
              <span className="font-mono text-[11px] font-medium">
                {isMaintenance
                  ? lang === 'en'
                    ? 'Maintenance Mode Active'
                    : 'Modo Manutenção Ativo'
                  : lang === 'en'
                    ? 'Site Online to Public'
                    : 'Site Online (Público)'}
              </span>
            </div>

            {/* Toggle Maintenance Button */}
            <button
              onClick={toggleMaintenance}
              disabled={isUpdatingMaintenance}
              className={`ml-2 px-3 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold transition-all cursor-pointer flex items-center gap-1 ${
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
              {isUpdatingMaintenance ? (
                <>
                  <Loader2 size={10} className="animate-spin" />
                  <span>Salvando...</span>
                </>
              ) : isMaintenance ? (
                lang === 'en' ? 'Open to Public' : 'Abrir Site ao Público'
              ) : (
                lang === 'en' ? 'Enable Maintenance' : 'Ativar Manutenção'
              )}
            </button>

            {/* Admin Preview Mode Switch (when maintenance is ON) */}
            {isMaintenance && (
              <button
                onClick={toggleAdminPreviewSite}
                className="ml-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-colors bg-white/10 hover:bg-white/20 text-[#D0AC6C] flex items-center gap-1 cursor-pointer border border-[#D0AC6C]/30"
                title={adminPreviewSite ? 'Alternar para visualizar a tela de manutenção' : 'Alternar para visualizar o site completo'}
              >
                {adminPreviewSite ? (
                  <>
                    <EyeOff size={11} />
                    <span>{lang === 'en' ? 'View Maintenance Screen' : 'Ver Tela de Manutenção'}</span>
                  </>
                ) : (
                  <>
                    <Eye size={11} />
                    <span>{lang === 'en' ? 'Preview Full Site' : 'Ver Site Completo (Admin)'}</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Right: Shortcuts & Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://ramonchrystian.sanity.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF8F5] text-[#1B3B2B] hover:bg-[#FAF8F5]/90 font-mono font-medium text-[11px] shadow-xs transition-colors cursor-pointer"
            >
              <Settings size={12} className="text-[#8A6224]" />
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
