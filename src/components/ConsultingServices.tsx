import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

export const ConsultingServices: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: 'CEAB S.R.L.',
    contactName: '',
    email: '',
    phone: '',
    productType: 'Panadería y Snacks Saludables',
    currentStage: 'Tengo producto pero necesito habilitar SENASAG/DIGESA',
    estimatedBoxes: '500 cajas (Primer lote piloto)',
    serviceInterest: 'Homologación Sanitaria DIGESA y Coordinación Logística',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.contactName.trim()) {
      setErrorMessage('Por favor ingrese el nombre de su empresa y de la persona de contacto.');
      return;
    }
    if (!formData.email.includes('@') || formData.email.length < 5) {
      setErrorMessage('Por favor ingrese un correo electrónico corporativo válido.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMessage('Por favor ingrese un número de teléfono o WhatsApp de contacto válido.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <section id="consultoria" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <span>Servicios de Consultoría RUTAEXPORT</span>
            <span aria-hidden="true">·</span>
            <span>Comercio Exterior y Cadena Logística</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Acompañamiento Técnico Personalizado para Exportar a Perú
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Nuestro equipo de especialistas en logística internacional y normativa sanitaria acompaña a su empresa desde la adecuación de fórmulas y registros sanitarios hasta la entrega física de sus productos en Lima.
          </p>
        </div>

        {/* 4 Pillars Bento */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">01. Legal & Aduanas</span>
            <h3 className="mt-1 text-base font-bold text-slate-900">Formalización y RUEX</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Tramitación acelerada del RUEX ante SENAVEX Cochabamba, habilitación en el padrón SUMA de la Aduana Nacional y dosificación de facturas comerciales de exportación.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">02. Sanitario</span>
            <h3 className="mt-1 text-base font-bold text-slate-900">Homologación DIGESA Perú</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Gestión del Registro Sanitario de alimentos procesados en Lima, revisión de tabla nutricional y adecuación de empaque para exención de octógonos publicitarios.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">03. Logística Terrestre</span>
            <h3 className="mt-1 text-base font-bold text-slate-900">Cruce CEBAF Desaguadero</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Selección de transportistas autorizados con póliza internacional, consolidación LTL o camión completo FTL y monitoreo en frontera hasta el arribo a Lima.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">04. Comercial</span>
            <h3 className="mt-1 text-base font-bold text-slate-900">Incoterms & Cobro Seguro</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Estructuración de contratos de compraventa internacional bajo normas de la CCI, apertura de cartas de crédito bancarias y optimización de precios CIP Lima.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Contacto Directo RUTAEXPORT
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  Solicite una Sesión de Diagnóstico Inicial
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Agende una reunión técnica con nuestros consultores para revisar el estado sanitario de su planta en Cochabamba y estimar la viabilidad de su producto en el mercado de Lima.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Oficina Central:</strong> Av. Pando esq. América, Edificio Empresarial Cochabamba, Bolivia
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Representación Perú:</strong> Av. Javier Prado Este, San Isidro, Lima, Perú
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>+591 (4) 425-8900 · WhatsApp: +591 717-34567</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>consultoria@rutaexport.bo</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Lunes a Viernes: 08:30 - 18:30 (Hora Bolivia)</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300">
                <p className="font-semibold text-amber-400">Compromiso de Confidencialidad:</p>
                <p className="mt-1">
                  Las recetas, fórmulas cuali-cuantitativas y datos comerciales de CEAB S.R.L. y PYMES asociadas están protegidos por acuerdos estrictos de confidencialidad comercial (NDA).
                </p>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    ¡Solicitud de Asesoría Recibida con Éxito!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Gracias, <strong>{formData.contactName}</strong> de <strong>{formData.companyName}</strong>. Uno de nuestros consultores senior de comercio exterior le contactará en menos de 24 horas hábiles al correo <strong>{formData.email}</strong> o vía WhatsApp para coordinar la revisión técnica de su producto.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg cursor-pointer transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                    Formulario de Diagnóstico y Cotización
                  </h4>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nombre de la Empresa / PYME *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Ej. CEAB S.R.L."
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Persona de Contacto *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        placeholder="Ej. Ing. Daniela Paco"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="contacto@empresa.com"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+591 71234567"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Línea de Productos
                      </label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="Panadería y Snacks Saludables">Panadería y Snacks Saludables</option>
                        <option value="Galletas de Quinua / Chía">Galletas de Quinua / Chía</option>
                        <option value="Barras de Amaranto y Granola">Barras de Amaranto y Granola</option>
                        <option value="Cereales Tostados e Inflados">Cereales Tostados e Inflados</option>
                        <option value="Panificados Tradicionales y Secos">Panificados Tradicionales y Secos</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Servicio Principal Requerido
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="Homologación Sanitaria DIGESA y Coordinación Logística">Homologación Sanitaria DIGESA y Coordinación Logística</option>
                        <option value="Auditoría Integral de Exportabilidad">Auditoría Integral de Exportabilidad</option>
                        <option value="Trámite de RUEX y Aduana Nacional">Trámite de RUEX y Aduana Nacional</option>
                        <option value="Cotización de Flete Terrestre Carretero a Lima">Cotización de Flete Terrestre Carretero a Lima</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Detalles o Consultas Específicas
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Describa brevemente si ya cuenta con registro SENASAG, empaque rotulado o si busca clientes en Lima..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Solicitud de Consultoría</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
