import React, { useEffect, useRef, useState } from 'react'

const ProductDemo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          // Reproducir ambos al mismo tiempo
          videoRefs.current.forEach((video) => {
            if (video) {
              video.play().catch(() => null)
            }
          })
        } else {
          // Pausar al salir de la sección
          videoRefs.current.forEach((video) => {
            if (video) {
              video.pause()
            }
          })
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const phoneFrameClasses =
    'relative mx-auto w-full max-w-[260px] aspect-[9/19] rounded-[2.5rem] ' +
    'border border-white/10 bg-black/80 shadow-2xl overflow-hidden ' +
    'before:content-[""] before:absolute before:top-2 before:left-1/2 ' +
    'before:-translate-x-1/2 before:w-20 before:h-1.5 before:bg-white/10 ' +
    'before:rounded-full'

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="py-24 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mira cómo funciona en la vida real
          </h2>
          <p className="text-bolmi-muted max-w-2xl mx-auto">
            Simulamos la experiencia real dentro de la app: desde el pago
            offline en minibús hasta la visualización de datos en tiempo real.
          </p>
        </div>

        {/* Grid de videos */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Teléfono 1 */}
          <div className="flex flex-col items-center gap-4">
            <figure className={phoneFrameClasses}>
              <video
                ref={(el) => (videoRefs.current[0] = el)}
                muted
                loop
                playsInline
                autoPlay={hasStarted}
                className="w-full h-full object-cover"
                src="/videos/bolmi-pago-offline-bluetooth-pasajero.mp4"
                poster="/videos/bolmi-pago-offline-bluetooth-pasajero-poster.jpg"
                preload="metadata"
              />
              <figcaption className="sr-only">
                Flujo de pago instantáneo del pasajero usando Bolmi sin conexión.
              </figcaption>
            </figure>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-1">
                Pago instantáneo en minibús
              </h3>
              <p className="text-sm text-bolmi-muted">
                El usuario paga con Bluetooth de baja energía, sin internet y
                en segundos.
              </p>
            </div>
          </div>

          {/* Teléfono 2 */}
          <div className="flex flex-col items-center gap-4">
            <figure className={phoneFrameClasses}>
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                muted
                loop
                playsInline
                autoPlay={hasStarted}
                className="w-full h-full object-cover"
                src="/videos/bolmi-panel-datos-transporte-publico.mp4"
                poster="/videos/bolmi-panel-datos-transporte-publico-poster.jpg"
                preload="metadata"
              />
              <figcaption className="sr-only">
                Panel para sindicatos y conductores con datos de pagos en tiempo real.
              </figcaption>
            </figure>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-1">
                Panel para sindicatos y conductores
              </h3>
              <p className="text-sm text-bolmi-muted">
                Visualización de recorridos, volumen de pagos y comportamiento
                en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDemo
