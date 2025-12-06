import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Traction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      status: 'completed',
      title: 'Validación Tecnológica MVP (BLE + Qubic)',
      detail:
        'Equipos de gama baja testeados exitosamente. Latencia <200ms y primer prototipo de liquidación por lotes corriendo sobre Qubic.',
      date: 'Q3 2025',
    },
    {
      status: 'current',
      title: 'Alianzas Financieras & Ecosistema Qubic',
      detail:
        'Negociación activa con instituciones financieras reguladas y diseño de integración con la infraestructura de Qubic como capa de liquidación sin comisiones.',
      date: 'Q4 2025',
    },
    {
      status: 'upcoming',
      title: 'Despliegue Piloto con Liquidación en Qubic',
      detail:
        'Inicio de operaciones con primer sindicato de transporte (500 unidades), asentando los flujos diarios sobre Qubic para balances, split y reporting.',
      date: 'Q1 2026',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-bolmi-dark border-t border-bolmi-border">
      <div className="max-w-5xl mx-auto px-6">
        
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Roadmap & Tracción</h2>
          <p className="text-bolmi-muted">
            Estatus actual del proyecto, integración con Qubic y despliegue comercial.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-bolmi-border md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                } transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Icon Marker */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 w-8 h-8 rounded-full bg-bolmi-black border-4 border-bolmi-dark z-10 flex items-center justify-center">
                  {milestone.status === 'completed' && (
                    <div className="w-3 h-3 bg-bolmi-accent rounded-full" />
                  )}
                  {milestone.status === 'current' && (
                    <div className="w-3 h-3 bg-bolmi-secondary rounded-full animate-pulse" />
                  )}
                  {milestone.status === 'upcoming' && (
                    <div className="w-3 h-3 bg-bolmi-border rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                  <div
                    className={`p-6 rounded-xl border ${
                      milestone.status === 'current'
                        ? 'bg-bolmi-black border-bolmi-secondary/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                        : 'bg-bolmi-black border-bolmi-border opacity-80'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-xs font-mono uppercase tracking-wider ${
                          milestone.status === 'completed'
                            ? 'text-bolmi-accent'
                            : milestone.status === 'current'
                            ? 'text-bolmi-secondary'
                            : 'text-bolmi-muted'
                        }`}
                      >
                        {milestone.status === 'completed'
                          ? 'Completado'
                          : milestone.status === 'current'
                          ? 'En Curso'
                          : 'Próximo'}
                      </span>
                      <span className="text-xs text-bolmi-muted font-mono">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-sm text-bolmi-muted">{milestone.detail}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
