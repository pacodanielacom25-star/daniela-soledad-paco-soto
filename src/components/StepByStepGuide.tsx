import React, { useState } from 'react';
import { EXPORT_STEPS } from '../data/exportGuideData';
import { Check, Clock, Building2, FileText, Lightbulb, ChevronRight, CheckCircle, ShieldAlert } from 'lucide-react';

export const StepByStepGuide: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(EXPORT_STEPS[0].id);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const activeStep = EXPORT_STEPS.find((s) => s.id === activeStepId) || EXPORT_STEPS[0];

  const toggleStepCompletion = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / EXPORT_STEPS.length) * 100);

  return (
    <section id="manual" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-wider">
            <span>Guía Oficial Paso a Paso</span>
            <span aria-hidden="true">·</span>
            <span>Normativa Binacional y Regional Bolivia - Perú - México</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Manual Operativo de Exportación para Panificación y Snacks
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Ruta crítica exhaustiva y validada para que las PYMES agroindustriales de Cochabamba cumplan todos los requisitos legales, fitosanitarios, arancelarios y logísticos para ingresar a los mercados de Lima, Perú y México de forma rentable y sin contingencias.
          </p>
        </div>

        {/* Progress tracker bar */}
        <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
              {completedCount}/{EXPORT_STEPS.length}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Progreso del Checklist Operativo de su PYME</p>
              <p className="text-xs text-slate-500">Marque cada etapa a medida que su empresa complete los trámites</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-full sm:w-48 bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-700 font-mono-numbers shrink-0">{progressPercentage}%</span>
          </div>
        </div>

        {/* Step Navigation Tabs & Active Content Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Step Selector */}
          <div className="lg:col-span-4 space-y-2.5">
            {EXPORT_STEPS.map((step) => {
              const isActive = step.id === activeStepId;
              const isDone = !!completedSteps[step.id];

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-amber-400'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        Paso {step.stepNumber}
                      </span>
                      <span className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {step.institution}
                      </span>
                    </div>

                    {/* Completion checkbox button */}
                    <button
                      type="button"
                      onClick={(e) => toggleStepCompletion(step.id, e)}
                      title={isDone ? 'Marcar como pendiente' : 'Marcar como completado'}
                      className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                        isDone
                          ? 'bg-emerald-500 text-white'
                          : isActive
                          ? 'border border-slate-600 hover:border-slate-400 text-transparent'
                          : 'border border-slate-300 hover:border-slate-400 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3
                    className={`mt-2 text-sm font-bold leading-snug ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>
                  
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className={`flex items-center gap-1 ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      <Clock className="w-3 h-3" /> {step.duration}
                    </span>
                    <span className={`font-medium ${isActive ? 'text-amber-300' : 'text-amber-600'}`}>
                      {step.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Chapter View */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            
            {/* Step Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wide">
                  <span>Paso {activeStep.stepNumber} de 0{EXPORT_STEPS.length}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStep.institution}</span>
                </div>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  {activeStep.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {activeStep.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => toggleStepCompletion(activeStep.id, e)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    completedSteps[activeStep.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>
                    {completedSteps[activeStep.id] ? 'Completado por mi empresa' : 'Marcar como realizado'}
                  </span>
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Resumen Ejecutivo del Proceso
              </h4>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {activeStep.summary}
              </p>
            </div>

            {/* Key Requirements List */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                Requisitos Operativos y Obligaciones
              </h4>
              <ul className="mt-3 space-y-2.5">
                {activeStep.keyRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-700" />
                Documentación Específica a Presentar
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStep.documentsRequired.map((doc, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                    <p className="font-semibold text-slate-900">📄 {doc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Entities Involved */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-700" />
                Entidades Oficiales Involucradas
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeStep.regulatoryEntities.map((ent, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      {ent.country}
                    </span>
                    <span className="text-xs font-bold text-slate-900 block mt-0.5">
                      {ent.name}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1 leading-snug">
                      {ent.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SME Pro-Tip Card */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wide text-amber-900">
                  Recomendación Estratégica RUTAEXPORT para PYMES
                </h5>
                <p className="mt-1 text-xs text-amber-950 leading-relaxed">
                  {activeStep.tipsForSMEs}
                </p>
              </div>
            </div>

            {/* Next Step Nav Bar */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Paso {activeStep.stepNumber} de {EXPORT_STEPS.length}
              </span>

              {parseInt(activeStep.stepNumber, 10) < EXPORT_STEPS.length ? (
                <button
                  type="button"
                  onClick={() => {
                    const nextIndex = EXPORT_STEPS.findIndex((s) => s.id === activeStep.id) + 1;
                    if (nextIndex < EXPORT_STEPS.length) {
                      setActiveStepId(EXPORT_STEPS[nextIndex].id);
                    }
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Siguiente: Paso 0{parseInt(activeStep.stepNumber, 10) + 1}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveStepId(EXPORT_STEPS[0].id)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Volver al inicio del manual</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
