import React, { useState } from 'react';
import { Award, Store, TrendingUp, CheckCircle, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

interface CeabProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  nandinaCode: string;
  certification: string;
  weight: string;
  exportHighlights: string;
  targetChannels: string;
}

const CEAB_PRODUCTS: CeabProduct[] = [
  {
    id: 'palitos-quinua',
    name: 'Galletas en forma de Palitos con Quinua CEAB',
    category: 'Snacks Saludables Andinos · Sin Preservantes',
    image: '/assets/aistudio/ceab_20261_47276ec9.jpg',
    nandinaCode: '1905.90.90.00',
    certification: 'Sello de Calidad IBNORCA · Hecho en Bolivia · SENASAG 02-02-03-06-0010',
    weight: 'Bolsa de 12 unidades / Caja máster x 24 bolsas',
    exportHighlights: 'Galletas horneadas en forma de palitos con quinua real andina, 100% libres de preservantes. Formulación limpia sin octógonos negros conforme a la Ley 30021 de Perú, ideal para loncheras escolares y consumo saludable.',
    targetChannels: 'Supermercados Wong, Vivanda, Tiendas Saludables Flora & Fauna y La Sanahoria en Lima.'
  },
  {
    id: 'palitos-chia',
    name: 'Galletas en forma de Palitos con Chía CEAB',
    category: 'Snacks Saludables Funcionales · Sin Preservantes',
    image: '/assets/aistudio/ceab_22222222_8e4dbdea.jpg',
    nandinaCode: '1905.90.90.00',
    certification: 'Sello de Calidad IBNORCA · Hecho en Bolivia · BPM en Planta',
    weight: 'Bolsa de 12 unidades / Caja máster x 24 bolsas',
    exportHighlights: 'Galletas en forma de palitos enriquecidas con semillas de chía, fuente natural de Omega 3 y fibra dietaria, sin preservantes. Empaque hermético bilaminado de alta resistencia barométrica.',
    targetChannels: 'Cadenas de farmacias con góndola saludable, tiendas gourmet y autoservicios de San Isidro y Miraflores.'
  },
  {
    id: 'palitos-sesamo',
    name: 'Galletas en forma de Palitos con Sésamo CEAB',
    category: 'Snacks Saludables Gourmet · Sin Preservantes',
    image: '/assets/aistudio/ceab_20263_9a8c83f3.jpg',
    nandinaCode: '1905.90.90.00',
    certification: 'Sello IBNORCA · Hecho en Bolivia · Registro SENASAG',
    weight: 'Bolsa de 12 unidades / Caja máster x 24 bolsas',
    exportHighlights: 'Palitos horneados con semillas de sésamo enteras tostadas, sin preservantes, alto aporte de calcio y minerales naturales. Crocancia resistente al transporte terrestre.',
    targetChannels: 'Hoteles, cafeterías de especialidad y canal retail moderno en Lima.'
  },
  {
    id: 'palitos-queso',
    name: 'Galletas en forma de Palitos con Queso CEAB',
    category: 'Snacks de Panificación Seca · Sin Preservantes',
    image: '/assets/aistudio/ceab4444_d3bcc5b0.jpg',
    nandinaCode: '1905.90.90.00',
    certification: 'Sello de Calidad IBNORCA · Hecho en Bolivia',
    weight: 'Bolsa de 12 unidades / Caja máster x 24 bolsas',
    exportHighlights: 'Galletas en forma de palitos elaboradas con queso seleccionado del valle cochabambino, sin preservantes. Presentación práctica de 12 unidades para loncheras, aperitivos y maridajes.',
    targetChannels: 'Supermercados Plaza Vea, Metro y canal mayorista de snacks en Lima.'
  },
  {
    id: 'galletas-ceab',
    name: 'Galletas CEAB "Un Placer Crujiente"',
    category: 'Galletería y Panificación',
    image: '/assets/aistudio/ceab_imagen_11_b2de1e15.jpg',
    nandinaCode: '1905.31.00.00',
    certification: 'SENASAG Cochabamba · Control de Lote',
    weight: 'Paquete familiar surtido / Cajas máster',
    exportHighlights: 'Variedades con avena integral, chía y miel de abeja natural. Precio competitivo en dólares para canal de alta rotación.',
    targetChannels: 'Distribución mayorista a bodegas y supermercados de Lima Norte, Centro y Sur.'
  },
  {
    id: 'pan-molde-quinua',
    name: 'Pan Molde con Quinua Andina CEAB',
    category: 'Panadería Integral Envasada',
    image: '/assets/aistudio/cead_imagen_19_fd236fa4.jpg',
    nandinaCode: '1905.90.90.00',
    certification: 'Libre de Bromato · Sello IBNORCA · SENASAG',
    weight: 'Bolsa 600g rebanado',
    exportHighlights: 'Harina de trigo enriquecida con quinua andina. Alto contenido de aminoácidos esenciales y textura suave de larga frescura.',
    targetChannels: 'Supermercados Wong, Vivanda y canal de desayunos saludables en Lima.'
  },
  {
    id: 'pan-molde-multigrano',
    name: 'Pan Molde Multi Grano CEAB',
    category: 'Panadería Saludable Especializada',
    image: '/assets/aistudio/cead_imagen_18_3a6f3829.jpg',
    nandinaCode: '1905.90.90.00',
    certification: 'Sello IBNORCA · Certificado BPM',
    weight: 'Bolsa 500g rebanado',
    exportHighlights: 'Trigo entero combinado con semillas de girasol, sésamo, linaza y hojuelas de avena. Gran aceptación en el consumidor fitness limeño.',
    targetChannels: 'Cadenas de supermercados y clubes deportivos en distritos clave de Lima.'
  },
  {
    id: 'granola-instantanea',
    name: 'Granola Cereal Instantáneo CEAB',
    category: 'Cereales Andinos Listos para Consumir',
    image: '/assets/aistudio/ceab_imagen_12_14d39ac5.jpg',
    nandinaCode: '1904.10.00.00',
    certification: 'Registro SENASAG · IBNORCA',
    weight: 'Pouch 1,000g / 500g',
    exportHighlights: 'Cereal extruido con miel pura, pasas y granos andinos. Ideal para desayuno completo nutritivo con leche o yogurt.',
    targetChannels: 'Tiendas naturistas, autoservicios y programas de alimentación institucional.'
  }
];

export const CeabCaseStudy: React.FC<{ onNavigateToConsulting: () => void }> = ({ onNavigateToConsulting }) => {
  const [activeProductId, setActiveProductId] = useState<string>(CEAB_PRODUCTS[0].id);

  const activeProduct = CEAB_PRODUCTS.find((p) => p.id === activeProductId) || CEAB_PRODUCTS[0];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>Caso de Éxito y Empresa Piloto</span>
            <span aria-hidden="true">·</span>
            <span>Vinto, Cochabamba, Bolivia</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight text-balance">
            CEAB S.R.L. · Catálogo Oficial de Productos para Exportación a Lima y México
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Fundada en 1929, <strong>Elaboración de Alimentos de Bolivia S.R.L. ("CEAB S.R.L.")</strong> es un referente pionero en panificación y snacks saludables con Sello de Calidad IBNORCA y Registro Sanitario SENASAG. Sus líneas de productos a base de quinua, chía, sésamo y multigranos poseen un perfil ideal para los mercados de Lima, Perú y Ciudad de México bajo aranceles preferenciales del 0% (CAN y ACE 66).
          </p>
        </div>

        {/* Company Identity Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-800 to-slate-800 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-white p-2 shadow-md flex items-center justify-center shrink-0 border border-amber-200">
              <img
                src="/assets/aistudio/ceab_imagen_2_d6815dd0.jpg"
                alt="Logo CEAB S.R.L. Por una vida más saludable"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Ficha Técnica Empresarial
              </span>
              <h3 className="text-lg font-bold text-white">
                Elaboración de Alimentos de Bolivia S.R.L. "CEAB S.R.L."
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Planta: Av. Albina Patiño Km. 1, Vinto, Cochabamba · NIT: <strong className="text-white">125673022</strong> · R.S. SENASAG: <strong className="text-white">02-02-03-06-0010</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Trayectoria</span>
              <span className="text-sm font-extrabold text-amber-400">Desde 1929</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Certificación</span>
              <span className="text-sm font-extrabold text-emerald-400">Sello IBNORCA</span>
            </div>
          </div>
        </div>

        {/* Product Catalog Grid & Spotlight */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Líneas de Productos CEAB con Potencial de Exportación:
            </p>
            {CEAB_PRODUCTS.map((prod) => {
              const isSelected = prod.id === activeProductId;

              return (
                <div
                  key={prod.id}
                  onClick={() => setActiveProductId(prod.id)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 shadow-md ring-1 ring-amber-400 text-white'
                      : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-700">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block truncate">
                      {prod.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {prod.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono-numbers block">
                      Partida: {prod.nandinaCode}
                    </span>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Product Dossier */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-7 shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeProduct.category}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  {activeProduct.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Presentación: <strong className="text-slate-200">{activeProduct.weight}</strong>
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 block">Arancel CAN</span>
                <span className="text-lg font-bold text-emerald-400 font-mono-numbers block">
                  0% Ad-Valorem
                </span>
              </div>
            </div>

            {/* Product Photo Showcase */}
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 max-h-80 flex items-center justify-center relative">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-contain max-h-80"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] text-amber-300 font-semibold">
                Fotografía Oficial CEAB S.R.L.
              </div>
            </div>

            {/* Regulatory & Trade Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                  Partida NANDINA
                </span>
                <span className="font-mono-numbers font-bold text-amber-400 text-sm mt-0.5 block">
                  {activeProduct.nandinaCode}
                </span>
                <span className="text-slate-400 block mt-1">
                  Desgravación 100% Comunidad Andina con Certificado de Origen SENAVEX.
                </span>
              </div>

              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700 text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
                  Certificaciones Bolivianas
                </span>
                <span className="font-bold text-white text-xs mt-0.5 block">
                  {activeProduct.certification}
                </span>
                <span className="text-slate-400 block mt-1">
                  Apta para homologación sanitaria inmediata ante DIGESA Perú.
                </span>
              </div>
            </div>

            {/* Export Highlights */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Ventajas Competitivas para el Mercado de Lima:
              </h4>
              <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                {activeProduct.exportHighlights}
              </p>
            </div>

            {/* Target Distribution Channels */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 space-y-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
                <Store className="w-4 h-4 text-emerald-400" />
                Canales Minoristas Sugeridos en Perú y México:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                🇵🇪 <strong className="text-white">Perú (Lima):</strong> {activeProduct.targetChannels}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                🇲🇽 <strong className="text-white">México (CDMX / Guadalajara):</strong> Autoservicios y canal saludable (Walmart Supercenter, Chedraui Selecto, Soriana Híper, City Market, La Comer, Tiendas Nutrisa).
              </p>
            </div>

            {/* Direct Action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                ¿Desea cotizar un lote de exportación de este producto?
              </span>
              <button
                type="button"
                onClick={onNavigateToConsulting}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Solicitar Cotización de Ruta
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
