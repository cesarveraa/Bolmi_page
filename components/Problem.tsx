import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, EyeOff, Ban } from 'lucide-react';

const Problem: React.FC = () => {
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

  const problems = [
    {
      icon: AlertTriangle,
      title: "Fallo del Hardware",
      stat: "$500 USD",
      context: "Costo por bus",
      description: "Los validadores físicos tradicionales requieren mantenimiento constante, conectividad estable y tienen un alto costo de implementación, haciendo insostenible la digitalización para el 90% de la flota."
    },
    {
      icon: EyeOff,
      title: "Mercado Invisible",
      stat: "$482M USD",
      context: "SAM Anual (Efectivo)",
      description: "Este volumen masivo de transacciones solo en La Paz opera completamente fuera del sistema bancario. Sin trazabilidad, este capital no genera valor data-driven ni inteligencia de mercado."
    },
    {
      icon: Ban,
      title: "Exclusión Financiera",
      stat: "0%",
      context: "Acceso a Crédito",
      description: "Sin datos digitales verificables, los conductores y dueños de unidades son 'invisibles' para la banca tradicional, forzándolos a operar con prestamistas informales."
    }
  ];

  return (
    <section id="problem" ref={sectionRef} className="py-24 bg-bolmi-dark border-y border-bolmi-border relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={`mb-16 md:flex justify-between items-end reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              La Barrera de lo fisico <br /> y la Economía Invisible
            </h2>
            <p className="text-bolmi-muted text-lg">
              El modelo actual de 'Smart Cities' ignora la realidad de la infraestructura en LATAM.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-bolmi-black border border-bolmi-border p-8 rounded-xl hover:border-bolmi-accent/50 group reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 bg-bolmi-dark rounded-lg flex items-center justify-center mb-6 text-bolmi-secondary group-hover:text-bolmi-accent transition-colors">
                <item.icon size={24} />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-white mb-1 font-mono">{item.stat}</div>
                <div className="text-xs uppercase tracking-wider text-bolmi-muted font-semibold">{item.context}</div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-bolmi-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problem;