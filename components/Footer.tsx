import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-bolmi-border bg-bolmi-black text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="Bolmi"
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
            </div>
            <span className="font-bold text-white tracking-tight">Bolmi</span>
          </div>

          <p className="text-xs text-bolmi-muted">
            © {new Date().getFullYear()} Bolmi. Todos los derechos reservados.
          </p>

          {/* ✅ Texto agregado */}
          <p className="text-xs text-bolmi-muted mt-2 max-w-md leading-relaxed">
            Tecnología propietaria. Procesos de Debida Diligencia (KYC) a ser integrados bajo estándar bancario.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-bolmi-muted">
          <a
            href="mailto:business@bolmi.app"
            className="hover:text-white transition-colors"
          >
            business@bolmi.app
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
