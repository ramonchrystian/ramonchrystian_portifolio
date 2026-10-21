import { Edit3, ExternalLink } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'
import { useLang } from '../context/LangContext'

interface EditButtonProps {
  documentType?: string
  label?: string
  className?: string
}

export default function EditButton({
  documentType,
  label,
  className = '',
}: EditButtonProps) {
  const { isAdmin } = useAdmin()
  const { lang } = useLang()

  if (!isAdmin) return null

  const studioUrl = documentType
    ? `https://ramonchrystian.sanity.studio/structure/${documentType}`
    : 'https://ramonchrystian.sanity.studio'

  const defaultLabel = lang === 'en' ? 'Edit in Studio' : 'Editar no Studio'

  return (
    <a
      href={studioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#B58B49]/50 bg-[#FAF8F5]/90 px-2.5 py-1 font-mono text-[10px] font-semibold text-[#1B3B2B] shadow-xs backdrop-blur-xs transition-all hover:bg-[#1B3B2B] hover:text-[#FAF8F5] hover:border-[#1B3B2B] dark:border-[#D0AC6C]/40 dark:bg-[#20231F]/90 dark:text-[#D0AC6C] dark:hover:bg-[#72947B] dark:hover:text-[#151714] cursor-pointer ${className}`}
      title={lang === 'en' ? 'Open in Sanity Studio to edit' : 'Abrir no Sanity Studio para editar'}
    >
      <Edit3 size={11} className="shrink-0" />
      <span>{label || defaultLabel}</span>
      <ExternalLink size={9} className="opacity-60 shrink-0" />
    </a>
  )
}
