import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-bolmi-black border border-bolmi-border w-full max-w-md rounded-xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-bolmi-muted hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold text-white mb-2">Solicitar Acceso</h3>
            <p className="text-sm text-bolmi-muted mb-6">
              Acceso exclusivo para VC, Ángeles e Instituciones. Recibe nuestro Data Room y acceso a la Demo Técnica.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-bolmi-muted mb-1 uppercase">Email Corporativo</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@fund.com"
                  className="w-full bg-bolmi-dark border border-bolmi-border rounded p-3 text-white focus:outline-none focus:border-bolmi-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-mono text-bolmi-muted mb-1 uppercase">Firma / Institución</label>
                <input 
                  type="text" 
                  required
                  placeholder="Capital Partners"
                  className="w-full bg-bolmi-dark border border-bolmi-border rounded p-3 text-white focus:outline-none focus:border-bolmi-accent transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-bolmi-accent text-bolmi-black font-bold py-3 rounded hover:bg-emerald-400 transition-colors mt-2"
              >
                Solicitar Data Room
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
              <Check size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Solicitud Enviada</h3>
            <p className="text-bolmi-muted text-sm">
              Nuestro equipo de IR contactará contigo en breve para verificar credenciales.
            </p>
            <button 
              onClick={onClose}
              className="mt-6 text-sm text-bolmi-text underline hover:text-white"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactModal;