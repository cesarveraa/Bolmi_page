import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky state
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['problem', 'solution', 'impact', 'team'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problema', href: '#problem', id: 'problem' },
    { name: 'Tecnología', href: '#solution', id: 'solution' },
    { name: 'Impacto', href: '#impact', id: 'impact' },
    { name: 'Equipo', href: '#team', id: 'team' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
        ? 'bg-bolmi-black/90 backdrop-blur-lg border-bolmi-border/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-bolmi-black border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl">
            <img
              src="/logo.svg"
              loading="lazy"
              alt="Bolmi"
              className={`w-12 h-12 object-contain transition-all duration-300 ${scrolled
                  ? `
          drop-shadow-[0_0_8px_rgba(251,191,36,0.85)]
          drop-shadow-[0_0_18px_rgba(251,191,36,0.55)]
          drop-shadow-[0_0_32px_rgba(251,191,36,0.35)]
          drop-shadow-[0_0_48px_rgba(251,191,36,0.2)]
        `
                  : ''
                }`}
            />
          </div>




          {/* Marca */}
          <span className="text-xl font-semibold tracking-tight text-white">
            Bolmi
          </span>
        </div>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeSection === link.id
                ? 'text-bolmi-accent bg-bolmi-accent/10 shadow-[0_0_10px_rgba(251,191,36,0.1)]'
                : 'text-bolmi-muted hover:text-white hover:bg-white/5'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bolmi-black/95 backdrop-blur-xl border-b border-bolmi-border p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`p-4 text-lg font-medium rounded-lg transition-colors ${activeSection === link.id
                ? 'text-bolmi-accent bg-bolmi-accent/10'
                : 'text-bolmi-muted hover:text-white hover:bg-white/5'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;