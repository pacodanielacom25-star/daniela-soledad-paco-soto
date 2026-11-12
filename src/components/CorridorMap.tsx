import React, { useState } from 'react';
import { CORRIDOR_PERU_CITIES, CORRIDOR_MEXICO_CITIES } from '../data/exportGuideData';
import { MapPin, Mountain, AlertTriangle, ShieldCheck, Navigation, ArrowRight, Ship, Truck, Globe2 } from 'lucide-react';

export const CorridorMap: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<'peru' | 'mexico'>('peru');
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(3);

  const activeCities = activeRoute === 'peru' ? CORRIDOR_PERU_CITIES : CORRIDOR_MEXICO_CITIES;
  const safeIndex = selectedCityIndex < activeCities.length ? selectedCityIndex : 0;
  const selectedCity = activeCities[safeIndex];

  const handleRouteChange = (route: 'peru' | 'mexico') => {
    setActiveRoute(route);
    setSelectedCityIndex(route === 'peru' ? 3 : 4); // Default to border (Desaguadero) or arrival port (Manzanillo)
  };

  return (
    <section id="ruta" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <span>Corredores Logísticos Internacionales</span>
              <span aria-hidden="true">·</span>
              <span>Conectividad Terrestre y Multimodal</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight text-balance">
              Rutas de Exportación: Cochabamba hacia Perú y México
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Seleccione el corredor logístico para visualizar paso a paso los nodos críticos, las variaciones de altitud barométrica, inspecciones aduaneras y las exigencias de transporte carretero o marítimo.
            </p>
          </div>

          {/* Route Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-800/90 rounded-xl border border-slate-700 shrink-0">
            <button
              type="button"
              onClick={() => handleRouteChange('peru')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeRoute === 'peru'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>🇵🇪 Ruta 1: Perú (Lima) · 1,280 km</span>
            </button>
            <button
              type="button"
              onClick={() => handleRouteChange('mexico')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeRoute === 'mexico'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Ship className="w-4 h-4" />
              <span>🇲🇽 Ruta 2: México (CDMX) · 6,630 km</span>
            </button>
          </div>
        </div>

        {/* Route Overview Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">
              {activeRoute === 'peru'
                ? 'Corredor Carretero Bioceánico: Cochabamba → Desaguadero (CEBAF) → Lima'
                : 'Corredor Multimodal Pacífico: Cochabamba → Puerto Arica (Chile) → Manzanillo (México) → CDMX'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-mono-numbers">
            <span>
              Distancia: <strong className="text-amber-400">{activeRoute === 'peru' ? '~1,280 km' : '~6,630 km'}</strong>
            </span>
            <span>
              Tiempo: <strong className="text-emerald-400">{activeRoute === 'peru' ? '4 a 6 Días' : '22 a 28 Días'}</strong>
            </span>
            <span>
              Modalidad: <strong className="text-slate-100">{activeRoute === 'peru' ? '100% Carretera Terrestre' : 'Terrestre + Marítimo Pacífico'}</strong>
            </span>
          </div>
        </div>

        {/* Altitude & Logistics Graphic Bento */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Corridor Timeline */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>
                  {activeRoute === 'peru' ? 'Hitos del Corredor Vial Bolivia - Perú' : 'Hitos del Corredor Multimodal Bolivia - México'}
                </span>
              </h3>
              <span className="text-xs font-mono-numbers text-amber-400">
                {activeCities.length} Puntos de Control
              </span>
            </div>
            
            <div className="mt-6 relative pl-6 border-l-2 border-slate-700 space-y-5">
              {activeCities.map((city, idx) => {
                const isSelected = idx === safeIndex;
                const isKeyCheckpoint =
                  city.city.includes('Desaguadero') ||
                  city.city.includes('Manzanillo') ||
                  city.city.includes('Arica');

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedCityIndex(idx)}
                    className={`relative cursor-pointer group transition-all p-3.5 rounded-xl border ${
                      isSelected
                        ? 'bg-slate-700/90 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-700/40'
                    }`}
                  >
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[35px] top-4 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                        isKeyCheckpoint
                          ? 'bg-amber-400 border-white ring-4 ring-amber-400/20'
                          : isSelected
                          ? 'bg-white border-amber-400'
                          : 'bg-slate-700 border-slate-900'
                      }`}
                    />

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${isKeyCheckpoint ? 'text-amber-400' : 'text-slate-400'}`} />
                        <h4 className="text-sm font-bold text-white">
                          {city.city}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono-numbers">
                        <span className="text-amber-300 flex items-center gap-1">
                          <Mountain className="w-3 h-3" /> {city.altitude}
                        </span>
                        <span className="text-slate-400">{city.km}</span>
                      </div>
                    </div>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {city.phase}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Spotlight & Customs Border Image */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual of Selected Corridor Node */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800 relative">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={
                    safeIndex === 0
                      ? '/assets/aistudio/ceab_imagen_13_9872a628.jpg'
                      : activeRoute === 'peru' && safeIndex === 3
                      ? '/src/assets/images/customs_logistics_terminal_1793802092081.jpg'
                      : activeRoute === 'mexico' && (safeIndex === 2 || safeIndex === 3 || safeIndex === 4)
                      ? '/src/assets/images/customs_logistics_terminal_1793802092081.jpg'
                      : '/assets/aistudio/ceab_2026_cafc8387.jpg'
                  }
                  alt={selectedCity.city}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs">
                  <span className="font-bold text-amber-400 block uppercase tracking-wider text-[11px]">
                    {safeIndex === 0
                      ? 'Punto de Partida: Origen Cochabamba'
                      : activeRoute === 'peru'
                      ? 'Corredor Carretero Bolivia - Perú'
                      : 'Corredor Multimodal Bolivia - México'}
                  </span>
                  <span className="font-semibold text-white block">
                    {selectedCity.city}
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Node Details Card */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Detalles Operativos del Punto
                </span>
                <span className="text-xs font-mono-numbers text-slate-300 bg-slate-700 px-2 py-0.5 rounded">
                  {selectedCity.km}
                </span>
              </div>

              <h4 className="mt-3 text-lg font-bold text-white">
                {selectedCity.city}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Altitud oficial sobre el nivel del mar: <strong className="text-amber-300">{selectedCity.altitude}</strong>
              </p>

              <div className="mt-4 p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedCity.phase}
                </p>
              </div>

              {/* Special Warning regarding Route Conditions */}
              {activeRoute === 'peru' ? (
                <div className="mt-4 p-3.5 bg-amber-950/40 border border-amber-800/60 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      Atención Barométrica para Snacks (Ruta Perú)
                    </h5>
                    <p className="mt-1 text-xs text-amber-100/90 leading-relaxed">
                      Al pasar de Cochabamba (2,570 m) a El Alto (4,070 m), la presión atmosférica desciende drásticamente. Las bolsas selladas de snacks se expanden. Si la resistencia del termosellado no es adecuada, pueden reventar antes de descender hacia la costa de Lima.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-3.5 bg-blue-950/40 border border-blue-800/60 rounded-xl flex items-start gap-3">
                  <Ship className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-blue-300 uppercase tracking-wide">
                      Control de Humedad y Marítimo (Ruta México)
                    </h5>
                    <p className="mt-1 text-xs text-blue-100/90 leading-relaxed">
                      La travesía marítima por el Pacífico dura entre 18 y 22 días. Se deben instalar bolsas desecantes industriales (dry bags de cloruro de calcio) dentro del contenedor en Arica para evitar condensación ("lluvia de contenedor") y preservar la crocancia de los Palitos CEAB hasta el Puerto de Manzanillo.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
