import React from 'react';
import { Compass, ExternalLink, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Wordmark & Statement */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                RUTA<span className="text-amber-400">EXPORT</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Manual técnico y consultoría en comercio exterior y logística internacional. Diseñado para optimizar la exportación de alimentos saludables y panificación desde Cochabamba hacia Lima, Perú.
            </p>

            <div className="pt-2 text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Cochabamba, Bolivia · Lima, Perú</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>contacto@rutaexport.bo</span>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Contenido del Manual
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('manual')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  01. Registro y RUEX en Bolivia
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('manual')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  02. Certificaciones SENASAG y DIGESA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('manual')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  03. Arancel Cero Comunidad Andina
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ruta')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  04. Corredor Terrestre Desaguadero
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('manual')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  05. Despacho Aduana y SUNAT
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('manual')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  06. Incoterms CIP y Pagos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Links to Official Regulators */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Enlaces Institucionales
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.senasag.gob.bo"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>SENASAG Bolivia (Inocuidad)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.digesa.minsa.gob.pe"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>DIGESA Perú (Registro Sanitario)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aduana.gob.bo"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Aduana Nacional de Bolivia (SUMA)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.sunat.gob.pe"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>SUNAT Perú (Aduanas)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.senavex.gob.bo"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>SENAVEX (RUEX & Origen CAN)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Tools Quick Jump */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Herramientas
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('calculadora')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Calculadora de Flete
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('diagnostico')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Test Diagnóstico PYME
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('documentos')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Descarga de Modelos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('consultoria')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Agendar Consultoría
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} RUTAEXPORT. Guía técnica y consultoría logística para PYMES de Cochabamba hacia el mercado peruano.
          </p>
          <div className="flex items-center gap-4">
            <span>Marco Legal Comunidad Andina (CAN)</span>
            <span aria-hidden="true">·</span>
            <span>CEBAF Desaguadero</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
