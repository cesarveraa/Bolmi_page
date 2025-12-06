import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Map, DollarSign } from 'lucide-react';

const Impact: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-24 bg-bolmi-dark border-y border-bolmi-border scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className={`mb-12 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Más allá de los Pagos (ESG)
          </h2>
          <p className="text-bolmi-muted max-w-2xl">
            Nuestra infraestructura genera valor financiero y data estratégica
            para ciudades, trabajadores y entidades del ecosistema.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 – Inclusión Financiera */}
          <div
            className={`group relative bg-bolmi-black p-8 rounded-xl border border-bolmi-border overflow-hidden delay-100 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={120} className="text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="text-bolmi-accent" size={24} />
                Inclusión Financiera
              </h3>
              <p className="text-bolmi-muted mb-6 leading-relaxed">
                Transformamos el comportamiento operativo en un
                <strong className="text-white"> scoring crediticio alternativo</strong>,
                habilitando microcréditos pre-aprobados para conductores no bancarizados.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-bolmi-accent rounded-full" />
                  Historial de ingresos verificable
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-bolmi-accent rounded-full" />
                  Identidad digital laboral
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 – Data as a Service */}
          <div
            className={`group relative bg-bolmi-black p-8 rounded-xl border border-bolmi-border overflow-hidden delay-200 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Map size={120} className="text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <Map className="text-bolmi-secondary" size={24} />
                Data as a Service
              </h3>
              <p className="text-bolmi-muted mb-6 leading-relaxed">
                Cada validación genera datos geoespaciales en tiempo real.
                Ofrecemos <strong className="text-white">inteligencia urbana agregada </strong>
                para gobiernos y operadores de transporte.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-bolmi-secondary rounded-full" />
                  Optimización de rutas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-bolmi-secondary rounded-full" />
                  Análisis de demanda predictiva
                </li>
              </ul>
            </div>
          </div>

          {/* ✅ Card 3 – Qubic Liquidity */}
          <div
            className={`group relative bg-bolmi-black p-8 rounded-xl border border-bolmi-border overflow-hidden delay-300 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign size={120} className="text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <DollarSign className="text-emerald-400" size={24} />
                Liquidez Programable en Qubic
              </h3>
              <p className="text-bolmi-muted mb-6 leading-relaxed">
                Los flujos diarios se asientan sobre <strong className="text-white">Qubic</strong> como
                liquidez programable de muy bajo costo. Esto permite construir rieles
                de pago, reparto de ingresos e incentivos directamente sobre la capa
                de liquidación.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                  Saldos on-chain por chofer, línea y sindicato
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                  Rieles programables para crédito, bonuses e incentivos
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
