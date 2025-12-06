import React, { useState } from 'react'

const TEAM_EMAIL = 'business@bolmi.app' // 👈 cambia esto por el correo real

const ContactSection: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSent(false)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor completa nombre, correo y mensaje.')
      return
    }

    const subject = encodeURIComponent('Contacto desde la página de Bolmi')
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      (company ? `Organización: ${company}\n` : '') +
      `\nMensaje:\n${message}`
    )

    // Abre el cliente de correo del usuario
    window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Te interesa Bolmi?
          </h2>
          <p className="text-bolmi-muted max-w-2xl mx-auto">
            Escríbenos y coordinamos una demo, un piloto con tu sindicato o
            simplemente resolvemos tus dudas.
          </p>
        </div>

        {/* Card */}
        <div className="bg-bolmi-dark/60 border border-bolmi-border/70 rounded-2xl p-6 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-bolmi-muted mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-bolmi-black/60 border border-bolmi-border px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-bolmi-accent/60 focus:border-bolmi-accent/60"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-bolmi-muted mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-bolmi-black/60 border border-bolmi-border px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-bolmi-accent/60 focus:border-bolmi-accent/60"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-bolmi-muted mb-1">
                  Organización / Sindicato (opcional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg bg-bolmi-black/60 border border-bolmi-border px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-bolmi-accent/60 focus:border-bolmi-accent/60"
                  placeholder="Sindicato 24 de Junio, Línea 123…"
                />
              </div>
            </div>

            <div className="space-y-4 flex flex-col">
              <div className="flex-1">
                <label className="block text-sm font-medium text-bolmi-muted mb-1">
                  ¿En qué te ayudamos? *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full rounded-lg bg-bolmi-black/60 border border-bolmi-border px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-bolmi-accent/60 focus:border-bolmi-accent/60 resize-none"
                  placeholder="Cuéntanos si quieres una demo, un piloto o más información sobre la tecnología."
                />
              </div>

              {error && (
                <p className="text-xs text-red-400">{error}</p>
              )}

              {sent && (
                <p className="text-xs text-emerald-400">
                  Abriendo tu cliente de correo… si no se abre, puedes escribirnos a{' '}
                  <span className="font-mono">{TEAM_EMAIL}</span>
                </p>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-bolmi-accent text-bolmi-black hover:bg-bolmi-accent/90 transition-colors shadow-[0_10px_40px_rgba(251,191,36,0.35)]"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Texto de contacto directo */}
        <p className="text-center text-xs text-bolmi-muted mt-4">
          También puedes escribirnos directamente a{' '}
          <a
            href={`mailto:${TEAM_EMAIL}`}
            className="text-bolmi-accent hover:underline"
          >
            {TEAM_EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}

export default ContactSection
