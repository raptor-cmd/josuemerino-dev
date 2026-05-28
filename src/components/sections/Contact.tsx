import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FormState {
  name: string
  email: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export const Contact = () => {
  const { t } = useTranslation()
  const containerRef = useScrollAnimation<HTMLDivElement>({ stagger: 0.15 })

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
    if (!formspreeId) {
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--fg)] text-sm placeholder-[var(--fg-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors duration-200'

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto px-6">
        <div ref={containerRef}>
          <SectionTitle label={t('contact.label')} title={t('contact.title')} />

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact.name')}
                  required
                  className={inputClass}
                  aria-label={t('contact.name')}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('contact.email')}
                  required
                  className={inputClass}
                  aria-label={t('contact.email')}
                />
              </div>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.message')}
              required
              rows={6}
              className={`${inputClass} resize-none`}
              aria-label={t('contact.message')}
            />

            <Button
              type="submit"
              variant="primary"
              disabled={status === 'sending'}
              className="w-full justify-center flex items-center gap-2"
            >
              {status === 'sending' ? (
                t('contact.sending')
              ) : (
                <>
                  {t('contact.send')}
                  <Send size={14} />
                </>
              )}
            </Button>
          </form>

          {status === 'success' && (
            <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm">
              <CheckCircle size={16} />
              {t('contact.success')}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={16} />
              {t('contact.error')}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
