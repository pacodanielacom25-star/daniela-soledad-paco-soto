import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Truck, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-radial from-slate-800/40 via-slate-900/90 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition and Provided Brief Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Context metadata (unboxed text with separators, no pill badge) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400 tracking-wide uppercase mb-4">
              <span>Cochabamba, Bolivia</span>
              <span aria-hidden="true">·</span>
              <span>Ruta 1: Lima, Perú (1,280 km)</span>
              <span aria-hidden="true">·</span>
              <span>Ruta 2: Ciudad de México (6,630 km)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Manual Técnico y Logístico de Exportación de Alimentos a Perú y México
            </h1>

            {/* Subheading with exact user-requested introduction */}
            <div className="mt-5 p-5 bg-slate-800/80 rounded-xl border border-slate-700/80 shadow-inner">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                Este manual ha sido diseñado para ayudar a <strong className="text-amber-400 font-semibold">PYMES como CEAB S.R.L.</strong> y empresas de panificación y snacks saludables en Cochabamba a exportar sus productos al mercado peruano y mexicano de manera ordenada, legal y exitosa. Aquí encontrarás paso a paso todo lo que necesitas saber, desde cómo registrar tu empresa y exportar, hasta cómo obtener tus certificaciones de alimentos y coordinar el envío de tu mercancía hacia Lima, Perú y Ciudad de México, detallando los procesos clave para optimizar la cadena de suministro internacional.
              </p>
            </div>

            {/* Value bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Normativas SENASAG (Bolivia), DIGESA (Perú) y COFEPRIS / NOM-051 (México)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Arancel 0% preferencial mediante Comunidad Andina (CAN) y ACE 66 (México)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Control de altura barométrica (4,000 msnm) y travesía marítima en contenedor</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Calculadora interactiva de flete carretero a Lima y marítimo a Manzanillo/CDMX</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('manual')}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-sm rounded-lg transition-colors shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Explorar Manual Paso a Paso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onNavigate('diagnostico')}
                className="flex items-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-lg border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Test Diagnóstico PYME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase with real CEAB S.R.L. assets */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              {/* Main Image: CEAB El pan de los Bolivianos */}
              <div className="aspect-[4/4] max-h-[480px] w-full relative overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/assets/aistudio/ceab_imagen_13_9872a628.jpg"
                  alt="CEAB - El pan de los Bolivianos"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scrim for Legibility */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Overlay Badge Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" /> CEAB · El pan de los Bolivianos
                    </span>
                    <span className="font-mono-numbers">1,280 km</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Planta Vinto, Cochabamba <span className="text-amber-400">→</span> CEBAF Desaguadero <span className="text-amber-400">→</span> Lima, Perú
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Context Card with Verified CEAB credentials */}
            <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Empresa Productora</p>
                <p className="text-sm font-semibold text-slate-100">CEAB S.R.L. (Desde 1929)</p>
                <p className="text-[11px] text-amber-400">Sello IBNORCA · SENASAG 02-02-03-06-0010</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Arancel Preferencial</p>
                <p className="text-sm font-bold text-emerald-400">0% Ad-Valorem (CAN)</p>
                <p className="text-[11px] text-slate-400">NANDINA 1905.90 / 1904.10</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Metrics Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 block">Distancia de Rutas</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono-numbers mt-1 block">1,280 / 6,630 km</span>
            <span className="text-xs text-slate-400 mt-1 block">Carretero a Lima · Multimodal a México</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 block">Arancel de Importación</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono-numbers mt-1 block">0.0% Preferencial</span>
            <span className="text-xs text-slate-400 mt-1 block">CAN (Perú 100%) · ACE 66 (México 100%)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 block">Tiempos de Tránsito</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono-numbers mt-1 block">4-6d · 22-28d</span>
            <span className="text-xs text-slate-400 mt-1 block">Lima vía Desaguadero / Manzanillo vía Pacífico</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 block">Homologación Sanitaria</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono-numbers mt-1 block">DIGESA & COFEPRIS</span>
            <span className="text-xs text-slate-400 mt-1 block">Perú (S/. 390 · 5 años) / México (NOM-051)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
