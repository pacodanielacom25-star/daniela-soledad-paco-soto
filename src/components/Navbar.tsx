import React from 'react';
import { Compass, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element with clean mark) */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
            <Compass className="w-6 h-6 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white whitespace-nowrap">
              RUTA<span className="text-amber-400">EXPORT</span>
            </span>
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider -mt-1 whitespace-nowrap">
              Manual de Exportación
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (4-5 clean single-line links with hover state) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('manual')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-amber-400 ${
              activeSection === 'manual' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Manual Paso a Paso
          </button>
          <button
            onClick={() => onNavigate('ruta')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-amber-400 ${
              activeSection === 'ruta' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Corredor Logístico
          </button>
          <button
            onClick={() => onNavigate('calculadora')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-amber-400 ${
              activeSection === 'calculadora' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Calculadora de Costos
          </button>
          <button
            onClick={() => onNavigate('documentos')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-amber-400 ${
              activeSection === 'documentos' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Documentación
          </button>
          <button
            onClick={() => onNavigate('diagnostico')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-amber-400 ${
              activeSection === 'diagnostico' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Diagnóstico PYME
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('consultoria')}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Consultoría Especializada</span>
          </button>
        </div>
      </div>
    </header>
  );
};
