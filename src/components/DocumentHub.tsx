import React, { useState } from 'react';
import { DOCUMENT_CATALOG, TARIFF_DATABASE } from '../data/exportGuideData';
import { FileText, AlertTriangle, Check, ShieldCheck, Download, Search, Globe, Truck, Ship } from 'lucide-react';

export const DocumentHub: React.FC = () => {
  const [marketFilter, setMarketFilter] = useState<'all' | 'peru' | 'mexico'>('all');
  const [selectedDocId, setSelectedDocId] = useState<string>(DOCUMENT_CATALOG[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredDocs = DOCUMENT_CATALOG.filter((d) => {
    const matchesSearch =
      d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (marketFilter === 'all') return matchesSearch;
    if (marketFilter === 'peru') return matchesSearch && (d.targetMarket === 'peru' || !d.targetMarket || d.targetMarket === 'all');
    if (marketFilter === 'mexico') return matchesSearch && (d.targetMarket === 'mexico' || !d.targetMarket || d.targetMarket === 'all');
    return matchesSearch;
  });

  const selectedDoc = DOCUMENT_CATALOG.find((d) => d.id === selectedDocId) || filteredDocs[0] || DOCUMENT_CATALOG[0];

  return (
    <section id="documentos" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <span>Centro Documental & Regulatorio Binacional y Regional</span>
            <span aria-hidden="true">·</span>
            <span>Perú (CAN) & México (ACE 66)</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Documentación Obligatoria y Partidas Arancelarias NANDINA / TIGIE
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Consulte los requisitos formales de exportación tanto para la ruta terrestre a Perú como para la ruta marítima a México. Conozca las entidades certificadoras (SENASAG, SENAVEX, DIGESA, COFEPRIS, ANAM y SUNAT) para evitar retenciones en frontera o puerto.
          </p>
        </div>

        {/* Tabular Aranceles Preview */}
        <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold text-white">
                Partidas Arancelarias para Snacks y Panificación CEAB S.R.L.
              </h3>
              <p className="text-xs text-slate-400">
                Preferencia del 100% (Arancel 0%) en el marco de la Comunidad Andina (CAN) y Acuerdo ACE 66 Bolivia - México
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800">
                Arancel 0% CAN (Perú)
              </span>
              <span className="text-xs font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-950/60 border border-amber-800">
                Arancel 0% ACE 66 (México)
              </span>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-3">Código NANDINA / TIGIE</th>
                  <th className="py-3 px-3">Descripción Arancelaria</th>
                  <th className="py-3 px-3">Productos CEAB S.R.L.</th>
                  <th className="py-3 px-3 text-right">Aranceles Generales</th>
                  <th className="py-3 px-3 text-right">Arancel Preferencial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {TARIFF_DATABASE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-3 font-mono-numbers font-bold text-amber-400 whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-200">
                      {item.description}
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      {item.suitableFor}
                    </td>
                    <td className="py-3 px-3 text-right font-mono-numbers text-slate-400">
                      {item.adValoremMfn}
                    </td>
                    <td className="py-3 px-3 text-right font-mono-numbers font-bold text-emerald-400 whitespace-nowrap">
                      {item.adValoremCAN}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Filter Bar for Documents */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setMarketFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                marketFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos los Documentos ({DOCUMENT_CATALOG.length})
            </button>
            <button
              type="button"
              onClick={() => setMarketFilter('peru')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                marketFilter === 'peru' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Truck className="w-3.5 h-3.5 text-amber-600" />
              <span>Ruta Perú (DIGESA/SUNAT)</span>
            </button>
            <button
              type="button"
              onClick={() => setMarketFilter('mexico')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                marketFilter === 'mexico' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Ship className="w-3.5 h-3.5 text-blue-600" />
              <span>Ruta México (COFEPRIS/NOM-051/B/L)</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Mostrando {filteredDocs.length} documentos obligatorios
          </div>
        </div>

        {/* Document Explorer Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Document List */}
          <div className="lg:col-span-5 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Buscar documento por código o nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* List */}
            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
              {filteredDocs.map((doc) => {
                const isSelected = doc.id === selectedDoc.id;

                return (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono-numbers">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-800">{doc.code}</span>
                        {doc.targetMarket === 'mexico' && (
                          <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                            Ruta México
                          </span>
                        )}
                        {doc.targetMarket === 'peru' && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                            Ruta Perú
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500">{doc.validity}</span>
                    </div>
                    <h4 className="mt-1 text-sm font-bold text-slate-900">
                      {doc.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      Emisor: {doc.issuer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Document Detail & Common Mistakes */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono-numbers font-bold text-amber-700 uppercase tracking-wider block">
                  {selectedDoc.code} · {selectedDoc.targetMarket === 'mexico' ? 'Obligatorio para México' : 'Obligatorio'}
                </span>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Emitido por: <strong className="text-slate-700">{selectedDoc.issuer}</strong>
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Vigencia</span>
                <span className="text-xs font-bold text-slate-800 font-mono-numbers block">
                  {selectedDoc.validity}
                </span>
              </div>
            </div>

            {/* Purpose */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Objetivo Legal y Función Aduanera
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                {selectedDoc.purpose}
              </p>
            </div>

            {/* Common Mistakes to Avoid */}
            <div className="p-4 rounded-xl bg-red-50/80 border border-red-200">
              <h4 className="text-xs font-bold text-red-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Errores Frecuentes que Detienen la Carga en Aduana o Puerto
              </h4>
              <ul className="mt-2.5 space-y-2">
                {selectedDoc.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-red-950">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CEAB S.R.L. Document Pre-Filled Data */}
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-slate-800">
              <p className="font-bold text-amber-900">
                📋 Datos Oficiales de Emisión para CEAB S.R.L.:
              </p>
              <p className="mt-1 text-slate-700">
                Razón Social: <strong>Elaboración de Alimentos de Bolivia S.R.L.</strong> · NIT: <strong className="font-mono-numbers">125673022</strong> · R.S. SENASAG: <strong className="font-mono-numbers">02-02-03-06-0010</strong> · Domicilio: Av. Albina Patiño Km. 1, Vinto, Cochabamba.
              </p>
            </div>

            {/* Action download / template */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <span className="text-xs text-slate-500">
                Archivo de referencia técnica: <strong>{selectedDoc.downloadableTemplateName}</strong>
              </span>

              <button
                type="button"
                onClick={() => {
                  alert(`Descargando modelo oficial: ${selectedDoc.downloadableTemplateName}`);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Formato</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
