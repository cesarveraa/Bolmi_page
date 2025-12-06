import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [scrollY, setScrollY] = useState(0);

  const [particles] = useState(() =>
    Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 5}s`,
      size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-0.5 h-0.5',
      color: Math.random() > 0.7 ? 'bg-bolmi-accent' : 'bg-bolmi-text'
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-6 min-h-[90vh]">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.05] grid-bg pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-0 animate-float ${p.size} ${p.color}`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      {/* Blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none z-0"
        style={{ transform: `translate(-50%, ${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-0 -left-4 w-72 h-72 bg-bolmi-accent/10 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-bolmi-secondary/10 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">

        {/* H1 */}
        <h1
          className="opacity-0 animate-zoom-in text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]"
          style={{ animationDelay: '150ms' }}
        >
          Infraestructura de Datos y Liquidez<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-bolmi-muted">
            para el transporte urbano
          </span>
        </h1>

        {/* ✅ Span SEO (clave para Google) */}
        <span
          className="opacity-0 animate-fade-in-up text-sm md:text-base text-bolmi-muted mb-6"
          style={{ animationDelay: '220ms' }}
        >
          Convertimos Smartphones en terminales bancarios seguros. Sin Hardware. Sin Internet.
        </span>

        {/* Subheadline */}
        <p
          className="opacity-0 animate-fade-in-up text-lg md:text-xl text-bolmi-muted max-w-2xl mb-10 leading-relaxed"
          style={{ animationDelay: '300ms' }}
        >
          Infraestructura de pagos y datos <span className="text-white font-medium">Zero-Hardware</span> para el transporte público.
          Transformamos el caos del efectivo en activos digitales bancarizables mediante tecnología BLE y Offline-First.
        </p>

        {/* Tags */}
        <div
          className="opacity-0 animate-fade-in-up flex flex-wrap justify-center gap-3 mb-10"
          style={{ animationDelay: '450ms' }}
        >
          {['DeepTech', 'Fintech Infrastructure', 'Zero CAPEX'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-bolmi-dark border border-bolmi-border rounded text-xs text-bolmi-muted font-mono"
            >
              [{tag}]
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
