import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'
import { AdminProvider, useAdmin } from './context/AdminContext'
import Maintenance from './components/Maintenance'
import AdminBar from './components/AdminBar'
import AdminLoginModal from './components/AdminLoginModal'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ministry from './components/Ministry'
import Teaching from './components/Teaching'
import Academic from './components/Academic'
import DigitalProjects from './components/DigitalProjects'
import Gallery from './components/Gallery'
import VocationalHorizon from './components/VocationalHorizon'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Eye, AlertTriangle } from 'lucide-react'

function MainContent() {
  const { isAdmin, isMaintenance, adminPreviewSite, toggleAdminPreviewSite } = useAdmin()

  // If maintenance mode is active:
  // - Regular visitors ALWAYS see the maintenance screen.
  // - Admin also sees the maintenance screen by default to verify it, with AdminBar at the top.
  // - Admin can toggle "adminPreviewSite" to temporarily inspect the full site.
  if (isMaintenance && (!isAdmin || !adminPreviewSite)) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#151714]">
        {isAdmin && <AdminBar />}
        <div className={isAdmin ? 'pt-[42px]' : ''}>
          <Maintenance />
        </div>
        <AdminLoginModal />
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 bg-[#FAF8F5] text-[#252622] dark:bg-[#151714] dark:text-[#F3F0E8] ${
        isAdmin ? 'pt-[42px]' : ''
      }`}
    >
      <AdminBar />

      {/* Amber banner when admin is previewing full site while maintenance is active */}
      {isAdmin && isMaintenance && adminPreviewSite && (
        <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-2 text-center text-xs font-mono text-amber-900 dark:text-amber-300 flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
          <span>
            <strong>Modo Manutenção Ativo:</strong> Os visitantes externos estão vendo a tela de manutenção. Você está visualizando o site como Administrador.
          </span>
          <button
            onClick={toggleAdminPreviewSite}
            className="inline-flex items-center gap-1 underline font-semibold hover:opacity-80 cursor-pointer ml-1"
          >
            <Eye size={12} />
            Ver Tela de Manutenção
          </button>
        </div>
      )}

      <Header />
      <main>
        <Hero />
        <About />
        <Ministry />
        <Teaching />
        <Academic />
        <DigitalProjects />
        <Gallery />
        <VocationalHorizon />
        <Contact />
      </main>
      <Footer />
      <AdminLoginModal />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <ThemeProvider>
        <AdminProvider>
          <MainContent />
        </AdminProvider>
      </ThemeProvider>
    </LangProvider>
  )
}
