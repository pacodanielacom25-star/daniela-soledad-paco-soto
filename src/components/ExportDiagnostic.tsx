import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/exportGuideData';
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw, Award, Check, Sparkles } from 'lucide-react';

export const ExportDiagnostic: React.FC<{ onNavigateToConsulting: () => void }> = ({ onNavigateToConsulting }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const totalScore = Object.entries(selectedAnswers).reduce((acc, [qId, optIdx]) => {
    const q = DIAGNOSTIC_QUESTIONS.find((item) => item.id === parseInt(qId, 10));
    if (!q) return acc;
    return acc + (q.options[optIdx]?.points || 0);
  }, 0);

  const getMaturityLevel = (score: number) => {
    if (score >= 80) {
      return {
        title: 'Nivel Avanzado: Empresa Lista para Despacho a Lima',
        description: 'Su empresa cuenta con las condiciones jurídicas, sanitarias y logísticas fundamentales para formalizar su primer embarque hacia Perú con bajo riesgo aduanero.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        badge: 'Madurez Alta'
      };
    } else if (score >= 50) {
      return {
        title: 'Nivel Intermedio: En Proceso de Adecuación Sanitaria o Logística',
        description: 'Tiene bases sólidas pero requiere afinar la homologación de empaques para DIGESA, pruebas de altitud o el registro aduanero antes de cargar el camión.',
        color: 'text-amber-800 bg-amber-50 border-amber-300',
        badge: 'Madurez Media'
      };
    } else {
      return {
        title: 'Nivel Inicial: Fase de Formalización y Buenas Prácticas',
        description: 'Se recomienda enfocar los esfuerzos en la habilitación del Registro Sanitario SENASAG en planta y la obtención del RUEX en SENAVEX Cochabamba.',
        color: 'text-blue-900 bg-blue-50 border-blue-300',
        badge: 'Madurez Básica'
      };
    }
  };

  const maturity = getMaturityLevel(totalScore);

  return (
    <section id="diagnostico" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <span>Herramienta de Autodiagnóstico</span>
            <span aria-hidden="true">·</span>
            <span>PYMES de Cochabamba (CEAB S.R.L. y Sector Alimentos)</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Test de Madurez Exportadora al Mercado Peruano
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Evalúe en 3 minutos el grado de preparación operativa de su empresa de panificación o snacks saludables para cumplir con las regulaciones de SENASAG, DIGESA, Aduana Nacional y SUNAT.
          </p>
        </div>

        {/* Diagnostic Form Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Questions Stream */}
          <div className="lg:col-span-7 space-y-6">
            {DIAGNOSTIC_QUESTIONS.map((q) => {
              const currentSelected = selectedAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <span>Pregunta 0{q.id} de 05</span>
                    <span className="text-amber-700 font-bold">{q.category}</span>
                  </div>

                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {q.question}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {q.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isChosen = currentSelected === optIdx;

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                            isChosen
                              ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 text-slate-900'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 border ${
                              isChosen
                                ? 'border-amber-600 bg-amber-500 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChosen && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div className="text-xs">
                            <span className="font-semibold block leading-snug">{opt.label}</span>
                            {isChosen && (
                              <span className="mt-1 block text-[11px] text-amber-800 font-medium">
                                💡 {opt.feedback}
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Results Scoreboard on Right */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className={`p-6 sm:p-7 rounded-2xl border shadow-sm ${maturity.color}`}>
              <div className="flex items-center justify-between border-b border-current/20 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Índice de Madurez Exportadora
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/70">
                  {maturity.badge}
                </span>
              </div>

              {/* Gauge Metric */}
              <div className="mt-5 flex items-center gap-4">
                <div className="text-5xl font-extrabold font-mono-numbers">
                  {totalScore}
                  <span className="text-xl font-normal opacity-70">/100</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">
                    {maturity.title}
                  </h4>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed opacity-90">
                {maturity.description}
              </p>

              {/* Specific Action Recommendations */}
              <div className="mt-5 pt-4 border-t border-current/20">
                <h5 className="text-xs font-bold uppercase tracking-wide">
                  Plan de Acción Recomendado:
                </h5>
                <ul className="mt-2 space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Verificar límite de azúcar y grasas para exención de octógonos DIGESA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Solicitar análisis microbiológico en laboratorio acreditado de Cochabamba.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Cotizar flete terrestre carretero consolidado (LTL) hasta Lima.</span>
                  </li>
                </ul>
              </div>

              {/* Jump to Consulting */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={onNavigateToConsulting}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  <span>Solicitar Asesoría de Homologación</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Context Card for CEAB S.R.L. */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-900">
                📌 Enfoque para Empresas de Panificación y Snacks:
              </p>
              <p>
                Los productos como galletas de cereales andinos, barras de amaranto y panes integrales tienen una alta demanda en los distritos de Miraflores, San Isidro, Surco y La Molina en Lima, donde el ticket promedio por snacks saludables supera en un 40% a los productos convencionales.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
