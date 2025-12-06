import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, ShieldCheck, Split, CheckCircle2 } from 'lucide-react';

const Solution: React.FC = () => {
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
      id="solution" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden scroll-mt-20 bg-bolmi-black"
    >
      {/* Animated Gradient Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-bolmi-secondary/5 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-bolmi-accent/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-bolmi-accent font-mono text-sm uppercase tracking-widest mb-2 block">Core Tecnológico</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            El Smartphone como Validador Criptográfico
          </h2>
          <p className="text-bolmi-muted max-w-2xl mx-auto text-lg">
            Infraestructura Invisible. Eliminamos el hardware propietario utilizando los dispositivos que los conductores y pasajeros ya poseen, 
            y asentamos esos flujos en <span className="text-bolmi-accent font-semibold">Qubic</span> como capa de liquidación programable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Features List */}
          <div className="space-y-8">
            
            {[
              {
                icon: Smartphone,
                color: "blue-500",
                title: "Offline-First (BLE)",
                desc: <>Transacciones validadas localmente vía Bluetooth Low Energy en <span className="text-white font-mono">&lt;200ms</span>. Funciona perfectamente en zonas sin cobertura 4G/5G, sincronizando el ledger en <span className="text-bolmi-accent font-semibold">Qubic</span> cuando la conectividad se restablece.</>
              },
              {
                icon: ShieldCheck,
                color: "bolmi-accent",
                title: "Non-Custodial sobre Qubic",
                desc: "Modelo legal y técnico donde Bolmi nunca toca los fondos: Qubic opera como capa de liquidación. Reducimos la carga regulatoria y aumentamos la confianza. El dinero fluye directamente de la pasarela de pago a las cuentas de los operadores, usando Qubic como riel de liquidación sin fricción."
              },
              {
                icon: Split,
                color: "bolmi-secondary",
                title: "Split Payment Automático",
                desc: "Dispersión automática en origen: separa la renta del Dueño del vehículo y la ganancia del Chofer. Se programa sobre los flujos liquidados en Qubic, garantizando adopción B2B al asegurar el flujo del propietario."
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className={`flex gap-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border bg-${feature.color}/10 border-${feature.color}/20 text-${feature.color === 'bolmi-accent' ? 'bolmi-accent' : feature.color === 'bolmi-secondary' ? 'bolmi-secondary' : 'blue-500'}`}>
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-bolmi-muted leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Right: Visual Representation */}
          <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Abstract Phone/Interface Placeholder */}
            <div className="relative bg-bolmi-dark border border-bolmi-border rounded-2xl p-8 aspect-[4/3] flex flex-col justify-between overflow-hidden group hover:border-bolmi-accent/30 transition-colors">
              
              <div className="absolute inset-0 bg-gradient-to-br from-bolmi-accent/5 to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-2">
                  <div className="h-2 w-20 bg-bolmi-border rounded animate-pulse" />
                  <div className="h-2 w-32 bg-bolmi-border rounded animate-pulse delay-75" />
                </div>
                <div className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-mono rounded border border-green-900/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  QUBIC_SYNC_OK
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                 {/* Visual Placeholder for Transaction Data */}
                 <div className="bg-bolmi-black p-4 rounded border border-bolmi-border group-hover:border-bolmi-border/80 transition-colors">
                    <div className="text-xs text-bolmi-muted mb-1">Qubic Tx</div>
                    <div className="font-mono text-xs text-bolmi-secondary truncate">0x8f...3a21</div>
                 </div>
                 <div className="bg-bolmi-black p-4 rounded border border-bolmi-border group-hover:border-bolmi-border/80 transition-colors">
                    <div className="text-xs text-bolmi-muted mb-1">Latency</div>
                    <div className="font-mono text-xs text-bolmi-accent">142ms</div>
                 </div>
              </div>

              <div className="relative z-10 mt-auto pt-8">
                 <div className="flex items-center gap-3 p-3 bg-bolmi-black/50 backdrop-blur border border-bolmi-border rounded-lg shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-bolmi-border flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-bolmi-accent" />
                    </div>
                    <div>
                        <div className="text-sm text-white font-medium">Validación BLE Exitosa</div>
                        <div className="text-xs text-bolmi-muted">Liquidación: Qubic • Dispositivo ID: 992-AX-22</div>
                    </div>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
