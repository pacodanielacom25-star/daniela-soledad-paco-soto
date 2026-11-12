import React, { useState, useMemo } from 'react';
import { CalculatorState, QuoteBreakdown } from '../types';
import { Calculator, DollarSign, Truck, Shield, Clock, FileSpreadsheet, Download, RefreshCw, CheckCircle2, Ship, Globe2 } from 'lucide-react';

export const LogisticsCalculator: React.FC = () => {
  const [destinationCountry, setDestinationCountry] = useState<'peru' | 'mexico'>('peru');
  const [productType, setProductType] = useState<CalculatorState['productType']>('quinoa_snacks');
  const [boxesCount, setBoxesCount] = useState<number>(600);
  const [boxWeightKg, setBoxWeightKg] = useState<number>(5);
  const [cargoMode, setCargoMode] = useState<CalculatorState['cargoMode']>('LTL');
  const [fobValueUsd, setFobValueUsd] = useState<number>(7200);
  const [incotermPeru, setIncotermPeru] = useState<'FCA_CBB' | 'DAP_DES' | 'CIP_LIM' | 'DDP_LIM'>('CIP_LIM');
  const [incotermMexico, setIncotermMexico] = useState<'FOB_ARI' | 'CIF_MNZ' | 'CIP_MEX' | 'DDP_MEX'>('CIP_MEX');
  const [showQuotationModal, setShowQuotationModal] = useState<boolean>(false);

  // Boxes per pallet estimate (usually 50 boxes of 5kg per pallet = 250kg + 25kg pallet)
  const palletsCount = useMemo(() => {
    return Math.max(1, Math.ceil(boxesCount / 50));
  }, [boxesCount]);

  const totalWeightKg = useMemo(() => {
    return boxesCount * boxWeightKg;
  }, [boxesCount, boxWeightKg]);

  // Breakdown calculations based on real Cochabamba -> Lima and Cochabamba -> Mexico rates
  const quote = useMemo<QuoteBreakdown>(() => {
    let boliviaFreight = 0;
    let borderOrPortFee = 0;
    let internationalFreight = 0;
    let destInlandFreight = 0;
    let sanitaryCerts = 140; // SENASAG + SENAVEX
    let customsAgentDest = 0;
    let cargoInsurance = 0;
    let totalLogisticsCost = 0;
    let transitDays = '';

    if (destinationCountry === 'peru') {
      borderOrPortFee = 160;
      customsAgentDest = 280;

      if (cargoMode === 'LTL') {
        boliviaFreight = palletsCount * 75; // ~$75 USD per pallet Cochabamba - Desaguadero
        internationalFreight = palletsCount * 115; // ~$115 USD per pallet Desaguadero - Lima
        transitDays = '5 a 7 Días';
      } else {
        boliviaFreight = 1100;
        internationalFreight = 1650;
        borderOrPortFee = 220;
        transitDays = '4 a 5 Días';
      }

      const baseCif = fobValueUsd + boliviaFreight + internationalFreight;
      cargoInsurance = Math.max(65, Math.round(baseCif * 0.004));

      if (incotermPeru === 'FCA_CBB') {
        totalLogisticsCost = sanitaryCerts;
      } else if (incotermPeru === 'DAP_DES') {
        totalLogisticsCost = boliviaFreight + sanitaryCerts + borderOrPortFee;
      } else if (incotermPeru === 'CIP_LIM') {
        totalLogisticsCost = boliviaFreight + borderOrPortFee + internationalFreight + sanitaryCerts + cargoInsurance;
      } else if (incotermPeru === 'DDP_LIM') {
        totalLogisticsCost = boliviaFreight + borderOrPortFee + internationalFreight + sanitaryCerts + cargoInsurance + customsAgentDest;
      }
    } else {
      // MEXICO ROUTE (Multimodal via Puerto Arica - Puerto Manzanillo - CDMX)
      customsAgentDest = 380; // Agente aduanal ANAM / SAT en Manzanillo

      if (cargoMode === 'LTL') {
        // LCL Marítimo
        boliviaFreight = palletsCount * 85; // Cochabamba a Puerto Arica
        borderOrPortFee = palletsCount * 35; // Gastos de terminal portuario THC Arica
        internationalFreight = palletsCount * 145; // Flete marítimo LCL Arica - Manzanillo
        destInlandFreight = palletsCount * 80; // Flete terrestre Manzanillo - CDMX
        transitDays = '24 a 28 Días';
      } else {
        // FCL Contenedor 20ft
        boliviaFreight = 850;
        borderOrPortFee = 180;
        internationalFreight = 1950;
        destInlandFreight = 750;
        transitDays = '20 a 24 Días';
      }

      const baseCif = fobValueUsd + boliviaFreight + borderOrPortFee + internationalFreight;
      cargoInsurance = Math.max(95, Math.round(baseCif * 0.005)); // Póliza marítima Institute Cargo Clauses A

      if (incotermMexico === 'FOB_ARI') {
        totalLogisticsCost = boliviaFreight + borderOrPortFee + sanitaryCerts;
      } else if (incotermMexico === 'CIF_MNZ') {
        totalLogisticsCost = boliviaFreight + borderOrPortFee + internationalFreight + sanitaryCerts + cargoInsurance;
      } else if (incotermMexico === 'CIP_MEX') {
        totalLogisticsCost = boliviaFreight + borderOrPortFee + internationalFreight + destInlandFreight + sanitaryCerts + cargoInsurance;
      } else if (incotermMexico === 'DDP_MEX') {
        totalLogisticsCost = boliviaFreight + borderOrPortFee + internationalFreight + destInlandFreight + sanitaryCerts + cargoInsurance + customsAgentDest;
      }
    }

    const unitCost = boxesCount > 0 ? totalLogisticsCost / boxesCount : 0;

    return {
      destinationCountry,
      inlandFreightBoliviaUsd: boliviaFreight,
      borderTransitUsd: borderOrPortFee,
      internationalFreightUsd: internationalFreight + (destinationCountry === 'mexico' ? destInlandFreight : 0),
      sanitaryAndOriginCertsUsd: sanitaryCerts,
      customsAgentDestUsd: customsAgentDest,
      cargoInsuranceUsd: cargoInsurance,
      totalLogisticsCostUsd: totalLogisticsCost,
      unitLogisticsCostUsd: Number(unitCost.toFixed(2)),
      transitDays,
      totalWeightKg,
      peruFreightUsd: internationalFreight,
      customsAgentPeruUsd: customsAgentDest
    };
  }, [destinationCountry, cargoMode, palletsCount, fobValueUsd, incotermPeru, incotermMexico, boxesCount, boxWeightKg, totalWeightKg]);

  const productNameMap = {
    quinoa_snacks: 'Galletas en forma de Palitos con Quinua CEAB (Partida 1905.90.90)',
    bakery: 'Galletas en forma de Palitos Chía / Sésamo / Queso CEAB (Partida 1905.90.90)',
    energy_bars: 'Pan Molde con Quinua Andina CEAB 600g (Partida 1905.90.90)',
    cereal_puffs: 'Granola Cereal Instantáneo y Galletas CEAB (Partida 1904.10)'
  };

  const incotermLabelsPeru = {
    FCA_CBB: 'FCA Cochabamba (En planta CEAB S.R.L. Vinto)',
    DAP_DES: 'DAP Desaguadero (Frontera Bolivia - Perú / CEBAF)',
    CIP_LIM: 'CIP Lima (Almacén del comprador con transporte y seguro pagados)',
    DDP_LIM: 'DDP Lima (Entregado con despacho aduanero SUNAT pagado)'
  };

  const incotermLabelsMexico = {
    FOB_ARI: 'FOB Puerto Arica (Cargado en buque marítimo en Arica, Chile)',
    CIF_MNZ: 'CIF Puerto Manzanillo (Flete marítimo y seguro pagados hasta México)',
    CIP_MEX: 'CIP Ciudad de México / Guadalajara (Entregado en almacén con seguro)',
    DDP_MEX: 'DDP México (Entregado con despacho aduanal ANAM/SAT pagado)'
  };

  return (
    <section id="calculadora" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
              <span>Simulador Logístico Internacional</span>
              <span aria-hidden="true">·</span>
              <span>Tarifas Referenciales 2026</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              Calculadora de Costos de Exportación: Cochabamba → Perú / México
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Estime con precisión los fletes terrestres y marítimos, gastos portuarios, aduanas, seguros de carga y el costo unitario por caja para productos de <strong>CEAB S.R.L.</strong> hacia Lima o Ciudad de México.
            </p>
          </div>

          {/* Destination Selector Tabs */}
          <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-slate-300 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => setDestinationCountry('peru')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                destinationCountry === 'peru'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>🇵🇪 Destino: Perú (Lima)</span>
            </button>
            <button
              type="button"
              onClick={() => setDestinationCountry('mexico')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                destinationCountry === 'mexico'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>🇲🇽 Destino: México (CDMX)</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Inputs on Left, Real-Time Breakdown on Right */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Route indicator badge */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
              <span className="font-bold text-amber-900 flex items-center gap-1.5">
                {destinationCountry === 'peru' ? <Truck className="w-4 h-4 text-amber-600" /> : <Ship className="w-4 h-4 text-amber-600" />}
                Ruta activa: {destinationCountry === 'peru' ? 'Cochabamba → Desaguadero → Lima (Terrestre)' : 'Cochabamba → Arica → Manzanillo → CDMX (Multimodal)'}
              </span>
              <span className="font-mono-numbers text-amber-800 font-bold">
                {destinationCountry === 'peru' ? 'CAN Arancel 0%' : 'ACE 66 Arancel 0%'}
              </span>
            </div>

            {/* Product Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Línea de Productos CEAB S.R.L. a Exportar
              </label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value as CalculatorState['productType'])}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="quinoa_snacks">Galletas en forma de Palitos con Quinua CEAB (Partida 1905.90)</option>
                <option value="bakery">Palitos Chía / Sésamo / Queso CEAB (Partida 1905.90)</option>
                <option value="energy_bars">Pan Molde con Quinua Andina CEAB 600g (Partida 1905.90)</option>
                <option value="cereal_puffs">Granola Cereal Instantáneo y Galletas CEAB (Partida 1904.10)</option>
              </select>
            </div>

            {/* Boxes and Weight Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Cajas Máster a Despachar
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={50}
                    max={10000}
                    step={50}
                    value={boxesCount}
                    onChange={(e) => setBoxesCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-bold font-mono-numbers focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">cajas</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Peso Neto por Caja
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    step={0.5}
                    value={boxWeightKg}
                    onChange={(e) => setBoxWeightKg(Math.max(0.5, parseFloat(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-bold font-mono-numbers focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">kg/caja</span>
                </div>
              </div>
            </div>

            {/* Cargo Mode & Pallets Calculation */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Modalidad de Envío
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCargoMode('LTL')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    cargoMode === 'LTL'
                      ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500 text-amber-950 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-xs font-bold">
                    {destinationCountry === 'peru' ? 'Carga Consolidada (LTL Terrestre)' : 'Carga Consolidada (LCL Marítimo)'}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {destinationCountry === 'peru' ? 'Pallets en camión compartido' : 'Pallets consolidados en contenedor'}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setCargoMode('FTL')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    cargoMode === 'FTL'
                      ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500 text-amber-950 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-xs font-bold">
                    {destinationCountry === 'peru' ? 'Camión Completo (FTL)' : 'Contenedor Completo (FCL 20ft/40ft)'}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {destinationCountry === 'peru' ? 'Furgón 10 a 24 Tn exclusivo' : 'Contenedor marítimo exclusivo'}
                  </p>
                </button>
              </div>

              <div className="mt-2.5 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 flex items-center justify-between font-mono-numbers">
                <span>Tarimas estimadas (100x120 cm NIMF-15):</span>
                <span className="font-bold text-slate-900">{palletsCount} Pallets ({totalWeightKg.toLocaleString()} kg netos)</span>
              </div>
            </div>

            {/* Declared FOB Value */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                5. Valor de la Mercancía en Fábrica (USD)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={500}
                  step={100}
                  value={fobValueUsd}
                  onChange={(e) => setFobValueUsd(Math.max(100, parseFloat(e.target.value) || 0))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-bold font-mono-numbers focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">USD Factura</span>
              </div>
            </div>

            {/* Incoterm Choice based on Destination */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                6. Término Incoterm 2020 a Cotizar ({destinationCountry === 'peru' ? 'Ruta Perú' : 'Ruta México'})
              </label>
              {destinationCountry === 'peru' ? (
                <select
                  value={incotermPeru}
                  onChange={(e) => setIncotermPeru(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="CIP_LIM">CIP Lima - Flete terrestre y seguro pagados por Exportador (Recomendado)</option>
                  <option value="DAP_DES">DAP Desaguadero - Puesto en Frontera Bolivia/Perú</option>
                  <option value="FCA_CBB">FCA Cochabamba - Entrega en Planta Vinto CEAB</option>
                  <option value="DDP_LIM">DDP Lima - Entregado con despacho aduanero SUNAT pagado</option>
                </select>
              ) : (
                <select
                  value={incotermMexico}
                  onChange={(e) => setIncotermMexico(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="CIP_MEX">CIP Ciudad de México / Guadalajara - Transporte y Seguro pagados (Recomendado)</option>
                  <option value="CIF_MNZ">CIF Puerto Manzanillo - Flete marítimo y seguro marítimo pagados hasta México</option>
                  <option value="FOB_ARI">FOB Puerto de Arica - Puesto a bordo del buque en Chile</option>
                  <option value="DDP_MEX">DDP México - Entregado con despacho aduanal ANAM/SAT pagado</option>
                </select>
              )}
            </div>

          </div>

          {/* Quotation & Real-Time Breakdown Output */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
                <span>Presupuesto Logístico Estimado</span>
                <span className="flex items-center gap-1 font-mono-numbers">
                  <Clock className="w-3.5 h-3.5" /> {quote.transitDays}
                </span>
              </div>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Cotización Cochabamba → {destinationCountry === 'peru' ? 'Lima, Perú' : 'Ciudad de México, México'}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Incoterm seleccionado:{' '}
                <span className="text-slate-200 font-semibold">
                  {destinationCountry === 'peru' ? incotermLabelsPeru[incotermPeru] : incotermLabelsMexico[incotermMexico]}
                </span>
              </p>
            </div>

            {/* Itemized Table */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                <span className="text-slate-300 text-xs">
                  {destinationCountry === 'peru' ? 'Flete Terrestre Cochabamba - Desaguadero' : 'Flete Terrestre Cochabamba - Puerto Arica (Chile)'}
                </span>
                <span className="font-mono-numbers text-slate-100 font-medium">
                  ${quote.inlandFreightBoliviaUsd} USD
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                <span className="text-slate-300 text-xs">
                  {destinationCountry === 'peru' ? 'Trámites y Manifiesto MIC/DTA en CEBAF Desaguadero' : 'Gastos Terminal Portuario THC y Estiba en Arica'}
                </span>
                <span className="font-mono-numbers text-slate-100 font-medium">
                  ${quote.borderTransitUsd} USD
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                <span className="text-slate-300 text-xs">
                  {destinationCountry === 'peru'
                    ? 'Flete Terrestre Desaguadero - Lima (Almacén del Comprador)'
                    : 'Flete Marítimo Arica - Manzanillo + Flete Terrestre a CDMX'}
                </span>
                <span className="font-mono-numbers text-slate-100 font-medium">
                  ${quote.internationalFreightUsd} USD
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                <span className="text-slate-300 text-xs">
                  Certificados Sanitarios (SENASAG Inocuidad + SENAVEX Origen {destinationCountry === 'peru' ? 'CAN' : 'ACE 66'})
                </span>
                <span className="font-mono-numbers text-slate-100 font-medium">${quote.sanitaryAndOriginCertsUsd} USD</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                <span className="text-slate-300 text-xs">
                  {destinationCountry === 'peru'
                    ? 'Póliza de Seguro Carretero Internacional'
                    : 'Póliza de Seguro Marítimo Internacional (Institute Cargo Clauses A)'}
                </span>
                <span className="font-mono-numbers text-slate-100 font-medium">
                  ${quote.cargoInsuranceUsd} USD
                </span>
              </div>

              {((destinationCountry === 'peru' && incotermPeru === 'DDP_LIM') ||
                (destinationCountry === 'mexico' && incotermMexico === 'DDP_MEX')) && (
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-300 text-xs">
                    {destinationCountry === 'peru'
                      ? 'Agente de Aduana SUNAT Perú (Despacho DAM)'
                      : 'Agente Aduanal Mexicano ANAM / SAT (Pedimento A1 Manzanillo)'}
                  </span>
                  <span className="font-mono-numbers text-slate-100 font-medium">${quote.customsAgentDestUsd} USD</span>
                </div>
              )}
            </div>

            {/* Total Highlight Box */}
            <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    Costo Logístico Total Asumido
                  </span>
                  <span className="text-3xl font-extrabold text-amber-400 font-mono-numbers">
                    ${quote.totalLogisticsCostUsd.toLocaleString()} USD
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                    Costo por Caja
                  </span>
                  <span className="text-xl font-bold text-emerald-400 font-mono-numbers">
                    ${quote.unitLogisticsCostUsd} USD/caja
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <span>
                  {destinationCountry === 'peru'
                    ? 'Arancel Preferencial CAN aplicable en Perú:'
                    : 'Arancel Preferencial ACE 66 aplicable en México:'}
                </span>
                <span className="font-bold text-emerald-400">
                  {destinationCountry === 'peru' ? '0% (Ahorro del 11% Ad-Valorem)' : '0% (Ahorro del 10%-15% Ad-Valorem)'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowQuotationModal(true)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Generar Resumen de Cotización</span>
              </button>
            </div>

          </div>

        </div>

        {/* Modal for Quotation Preview */}
        {showQuotationModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Ficha Técnica de Cotización Logística
                  </h4>
                  <p className="text-xs text-slate-500">
                    RUTAEXPORT · Cochabamba hacia {destinationCountry === 'peru' ? 'Lima (Perú)' : 'Ciudad de México (México)'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowQuotationModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p><strong>Destino:</strong> {destinationCountry === 'peru' ? 'Perú (Lima vía Desaguadero)' : 'México (CDMX / Manzanillo vía Arica)'}</p>
                  <p><strong>Producto:</strong> {productNameMap[productType]}</p>
                  <p><strong>Volumen:</strong> {boxesCount} cajas ({quote.totalWeightKg} kg netos) en {palletsCount} parihuelas NIMF-15</p>
                  <p><strong>Modalidad:</strong> {cargoMode === 'LTL' ? (destinationCountry === 'peru' ? 'Carga Consolidada LTL' : 'Carga Consolidada LCL Marítimo') : (destinationCountry === 'peru' ? 'Camión Completo FTL' : 'Contenedor FCL 20ft')}</p>
                  <p><strong>Incoterm:</strong> {destinationCountry === 'peru' ? incotermLabelsPeru[incotermPeru] : incotermLabelsMexico[incotermMexico]}</p>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="font-bold text-amber-900">Resumen Financiero:</p>
                  <p className="mt-1">Valor FOB declarado: <strong>${fobValueUsd} USD</strong></p>
                  <p>Costo Logístico Internacional: <strong>${quote.totalLogisticsCostUsd} USD</strong></p>
                  <p>Costo Logístico Unitario: <strong>${quote.unitLogisticsCostUsd} USD / caja</strong></p>
                  <p>Tiempo de Entrega Estimado: <strong>{quote.transitDays}</strong></p>
                  <p>Beneficio Arancelario: <strong>0% Ad-Valorem ({destinationCountry === 'peru' ? 'CAN' : 'ACE 66 Bolivia-México'})</strong></p>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Tarifas referenciales basadas en fletes carreteros y marítimos internacionales vigentes para el sector agroindustrial de Cochabamba.
                </p>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    window.print();
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Imprimir / Guardar PDF
                </button>
                <button
                  type="button"
                  onClick={() => setShowQuotationModal(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
