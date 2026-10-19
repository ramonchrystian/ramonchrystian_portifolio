import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Video, Camera, BookOpen, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const verifiedDirectChannels = [
  {
    icon: Mail,
    label: 'Email',
    handle: 'hello@ramonchrystian.com',
    url: 'mailto:hello@ramonchrystian.com',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    handle: 'ramonchrystian',
    url: 'https://linkedin.com/in/ramonchrystian',
    isTechNotice: true,
  },
  {
    icon: Video,
    label: 'YouTube',
    handle: '@ramonchrystian',
    url: 'https://youtube.com/@ramonchrystian',
  },
  {
    icon: Camera,
    label: 'Instagram',
    handle: '@ramonchrystian',
    url: 'https://instagram.com/ramonchrystian',
  },
  {
    icon: BookOpen,
    label: 'Letra Sonora',
    handle: 'letrasonora.com.br',
    url: 'https://letrasonora.com.br',
  },
]

export default function Contact() {
  const { t, lang } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailtoSubject = encodeURIComponent(`[ramonchrystian.com] ${formData.subject || 'Ministry Inquiry'}`)
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:hello@ramonchrystian.com?subject=${mailtoSubject}&body=${mailtoBody}`
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 6000)
  }

  return (
    <section id="contact" className="section-padding bg-[#FAF8F5] dark:bg-[#151714]">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Context & Direct Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="editorial-badge mb-3">
                <MessageSquare size={13} />
                <span>{t('contact.badge')}</span>
              </div>
              <h2 className="section-title font-serif font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                {t('contact.title')}
              </h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#77766F] dark:text-[#B8B8AE]">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Direct Channels List */}
            <div className="pt-2">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#77766F] font-semibold mb-3 dark:text-[#B8B8AE]">
                {t('contact.direct')}
              </p>
              <div className="space-y-2">
                {verifiedDirectChannels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <a
                      key={channel.label}
                      href={channel.url}
                      target={channel.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] p-3 transition-all duration-150 hover:border-[#1B3B2B]/40 hover:bg-[#FAF8F5] dark:border-[#2E322C] dark:bg-[#20231F] dark:hover:border-[#72947B]/40"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B]">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="font-serif text-sm font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                            {channel.label}
                          </p>
                          <p className="font-mono text-[11px] text-[#77766F] dark:text-[#B8B8AE]">
                            {channel.handle}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-[#77766F] opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-[#1B3B2B] dark:group-hover:text-[#72947B]">
                        &rarr;
                      </span>
                    </a>
                  )
                })}
              </div>

              {/* LinkedIn Note as requested */}
              <p className="mt-4 text-[11px] leading-relaxed text-[#77766F] dark:text-[#B8B8AE] italic font-mono">
                {t('contact.linkedinNote')}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-9 shadow-xs dark:border-[#2E322C] dark:bg-[#20231F]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E8E4DC] bg-[#FAF8F5] text-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#72947B] mb-4">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1B3B2B] dark:text-[#F3F0E8]">
                    {lang === 'en' ? 'Message Sent' : 'Mensagem Enviada'}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-[#77766F] dark:text-[#B8B8AE] leading-relaxed">
                    {t('contact.form.success')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1.5">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-[#E8E4DC] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#252622] transition-colors placeholder:text-[#77766F]/50 focus:border-[#1B3B2B] focus:outline-none focus:ring-1 focus:ring-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
                        placeholder={lang === 'en' ? 'Rev. John Doe / Prof. Smith' : 'Pr. João Silva / Prof. Carlos'}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1.5">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-md border border-[#E8E4DC] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#252622] transition-colors placeholder:text-[#77766F]/50 focus:border-[#1B3B2B] focus:outline-none focus:ring-1 focus:ring-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
                        placeholder="contact@institution.edu"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1.5">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-md border border-[#E8E4DC] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#252622] transition-colors placeholder:text-[#77766F]/50 focus:border-[#1B3B2B] focus:outline-none focus:ring-1 focus:ring-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
                      placeholder={lang === 'en' ? 'Workshop invitation / Academic inquiry' : 'Convite para workshop / Consulta acadêmica'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#77766F] dark:text-[#B8B8AE] mb-1.5">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-y rounded-md border border-[#E8E4DC] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#252622] transition-colors placeholder:text-[#77766F]/50 focus:border-[#1B3B2B] focus:outline-none focus:ring-1 focus:ring-[#1B3B2B] dark:border-[#2E322C] dark:bg-[#151714] dark:text-[#F3F0E8] dark:focus:border-[#72947B]"
                      placeholder={lang === 'en' ? 'Please share details regarding your church, conference date, or academic topic...' : 'Compartilhe informações sobre sua igreja, data do evento ou diálogo acadêmico...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center sm:w-auto"
                  >
                    <Send size={14} />
                    <span>{t('contact.form.send')}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}