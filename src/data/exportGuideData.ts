import { ExportStep, DiagnosticQuestion, DocumentItem } from '../types';

export const EXPORT_STEPS: ExportStep[] = [
  {
    id: 'formalizacion-bolivia',
    stepNumber: '01',
    title: 'Formalización y Registro como Empresa Exportadora',
    subtitle: 'Habilitación legal en Bolivia ante SEPREC, SIN, SENAVEX y Aduana Nacional',
    badge: 'Requisito Previo',
    institution: 'SENAVEX & Aduana Nacional',
    duration: '5 a 10 días hábiles',
    summary: 'Antes de realizar cualquier envío comercial, la empresa debe estar legalmente constituida (como Sociedad de Responsabilidad Limitada S.R.L., S.A. o Unipersonal) y contar con los padrones habilitados para emitir facturas comerciales de exportación sin derecho a crédito fiscal pero con dosificación válida.',
    keyRequirements: [
      'Matrícula de Comercio actualizada emitida por el SEPREC (Servicio Plurinacional de Registro de Comercio).',
      'Padrón Biométrico Digital de Impuestos Nacionales (NIT con actividad económica de fabricación o comercialización de alimentos).',
      'Registro Único de Exportadores (RUEX) tramitado de forma digital ante SENAVEX (vigencia de 60 días a 1 año según modalidad).',
      'Registro en el Sistema Informático de la Aduana Nacional (SUMA) en el Padrón de Operadores de Comercio Exterior como Exportador Habitual o No Habitual.'
    ],
    documentsRequired: [
      'Testimonio de Constitución de Sociedad (ej. CEAB S.R.L.) y Poder del Representante Legal.',
      'Cédula de Identidad del Representante Legal.',
      'Factura de luz o agua del domicilio fiscal de la planta en Cochabamba.',
      'Formulario de Declaración Jurada para el RUEX debidamente firmado.'
    ],
    tipsForSMEs: 'El trámite del RUEX en SENAVEX para alimentos procesados se puede iniciar en línea en la regional Cochabamba (C. Ayacucho / Av. Heroínas). Guarde su token y firma digital ya que será indispensable para tramitar certificados de origen.',
    regulatoryEntities: [
      { country: 'Bolivia', name: 'SEPREC', role: 'Registro y matrícula mercantil' },
      { country: 'Bolivia', name: 'SENAVEX', role: 'Emisión de RUEX y Certificados de Origen' },
      { country: 'Bolivia', name: 'Aduana Nacional', role: 'Habilitación en sistema aduanero SUMA' }
    ]
  },
  {
    id: 'certificaciones-sanitarias',
    stepNumber: '02',
    title: 'Certificaciones Sanitarias de Inocuidad y Registro DIGESA',
    subtitle: 'Cumplimiento normativo SENASAG (origen) y DIGESA (destino Perú)',
    badge: 'Inocuidad Alimentaria',
    institution: 'SENASAG Bolivia & DIGESA Perú',
    duration: '15 a 30 días hábiles',
    summary: 'Los alimentos elaborados (galletas de quinua, snacks horneados, panificados especiales y barras de cereales) requieren doble control sanitario: la certificación de planta e inocuidad en Bolivia por SENASAG y la obtención del Registro Sanitario en Perú ante DIGESA.',
    keyRequirements: [
      'Registro Sanitario de Empresa procesadora emitido por SENASAG Cochabamba categoría industrial o artesanal.',
      'Certificado de Inocuidad Alimentaria y Certificado Fitosanitario / Libre Venta para exportación emitido por SENASAG.',
      'Registro Sanitario ante DIGESA (Perú): Para que el producto pueda venderse legalmente en Perú, debe estar registrado ante la Dirección General de Salud Ambiental del Ministerio de Salud del Perú (www.digesa.minsa.gob.pe). Este trámite puede gestionarlo el importador peruano. Vigencia: 5 años · Costo: S/. 390 (soles peruanos).',
      'Adecuación al Manual de Advertencias Publicitarias de Perú (Ley 30021 de Promoción de la Alimentación Saludable) con la evaluación de Octógonos Nutricionales.'
    ],
    documentsRequired: [
      'Ficha técnica del producto con lista porcentual de ingredientes y aditivos alimentarios autorizados en el Codex Alimentarius.',
      'Análisis microbiológico, físico-químico y de metales pesados emitido por laboratorio acreditado en Cochabamba (ej. LABIMED o similar).',
      'Boceto final de rotulado y etiqueta con advertencias nutricionales, fecha de vencimiento, lote y datos del importador en Perú.',
      'Certificado de Libre Venta consularizado o apostillado.'
    ],
    tipsForSMEs: 'Ventaja para snacks saludables: Si su fórmula de galletas o barras energéticas mantiene el azúcar, sodio y grasas saturadas por debajo de los umbrales de la Ley 30021 de Perú, su empaque no llevará octógonos negros, lo que representa un argumento de venta de alto valor en supermercados de Lima como Wong, Metro o tiendas orgánicas.',
    regulatoryEntities: [
      { country: 'Bolivia', name: 'SENASAG Cochabamba', role: 'Control de inocuidad en planta y emisión de certificado de exportación' },
      { country: 'Perú', name: 'DIGESA (MINSA)', role: 'Aprobación del Registro Sanitario de alimentos importados en Perú' }
    ]
  },
  {
    id: 'aranceles-comunidad-andina',
    stepNumber: '03',
    title: 'Clasificación Arancelaria y Preferencias CAN (Arancel Cero)',
    subtitle: 'Aprovechamiento del Acuerdo de Cartagena de la Comunidad Andina',
    badge: 'Preferencia Arancelaria 100%',
    institution: 'SENAVEX & Comunidad Andina',
    duration: '2 a 3 días hábiles',
    summary: 'Gracias a la Comunidad Andina (CAN) integrada por Bolivia, Colombia, Ecuador y Perú, los productos de panificación y snacks de cereales originarios de Bolivia ingresan a Perú con un 0% de Arancel Ad-Valorem (desgravación arancelaria del 100%), siempre que estén amparados por un Certificado de Origen válido.',
    keyRequirements: [
      'Determinación exacta de la Partida Arancelaria NANDINA de 10 dígitos (ej. 1905.90.90.00 para panadería y galletería; 1904.10.00.00 para cereales inflados/tostados; 2008.19 para frutos secos preparados).',
      'Elaboración de la Declaración Jurada de Origen (DJO) en la plataforma SENAVEX detallando insumos nacionales (quinua real, amaranto, chía, harinas) e insumos no originarios.',
      'Cumplimiento de la norma de origen andina (generalmente Criterio A: totalmente obtenido, o Criterio B: salto de partida arancelaria y valor de contenido regional).',
      'Emisión y firma digital del Certificado de Origen CAN por SENAVEX antes del despacho aduanero.'
    ],
    documentsRequired: [
      'Factura Comercial Proforma o Definitiva.',
      'Fórmula cuali-cuantitativa que respalde el proceso productivo en Cochabamba.',
      'Declaración Jurada de Origen aprobada por SENAVEX.'
    ],
    tipsForSMEs: 'El Certificado de Origen CAN debe coincidir con precisión milimétrica en descripción, peso neto, unidades y número de factura con los documentos de transporte. Cualquier discrepancia ortográfica o de cantidades en la frontera puede causar demoras de inspección en SUNAT.',
    regulatoryEntities: [
      { country: 'Bolivia', name: 'SENAVEX', role: 'Validación de criterios de origen y emisión de certificados' },
      { country: 'Binacional', name: 'Comunidad Andina (CAN)', role: 'Marco normativo de libre comercio andino' }
    ]
  },
  {
    id: 'logistica-transporte-frontera',
    stepNumber: '04',
    title: 'Cadena Logística Terrestre y Cruce Fronterizo en Desaguadero',
    subtitle: 'Corredor Carretero Cochabamba - El Alto - Desaguadero (CEBAF) - Lima',
    badge: 'Cadena de Suministro',
    institution: 'Transportistas Internacionales & CEBAF',
    duration: '4 a 6 días de tránsito',
    summary: 'La ruta óptima de exportación de alimentos desde Cochabamba hasta Lima es 100% terrestre por la carretera pavimentada bioceánica. Recorre aproximadamente 1,280 km pasando por Suticollo, Oruro, Patacamaya, El Alto, hasta la frontera en Desaguadero, donde opera el Centro Binacional de Atención en Frontera (CEBAF), y continúa por Puno, Moquegua/Arequipa hasta los centros logísticos de Lima.',
    keyRequirements: [
      'Contratación de una Empresa de Transporte Internacional Terrestre legalmente autorizada ante el Ministerio de Obras Públicas de Bolivia y el MTC de Perú.',
      'Emisión de la Carta de Porte Internacional por Carretera (CPIC).',
      'Emisión del Manifiesto Internacional de Carga / Declaración de Tránsito Aduanero (MIC/DTA).',
      'Protección especial contra la altitud: En el tramo El Alto - Desaguadero se superan los 4,000 metros de altura sobre el nivel del mar. Los envases de snacks sellados con aire o nitrógeno deben contar con microperforaciones técnicas o sellado de alta resistencia barométrica para evitar roturas.',
      'Paletizado estándar: Utilizar pallets de madera tratada térmicamente (norma internacional NIMF-15) de 100 x 120 cm con film stretch y esquineros de cartón para proteger la carga contra vibraciones en carretera.'
    ],
    documentsRequired: [
      'CPIC (Carta de Porte Internacional por Carretera).',
      'MIC/DTA (Manifiesto Internacional de Carga).',
      'Certificado de Tratamiento Fitosanitario NIMF-15 para las parihuelas de madera.',
      'Póliza de Seguro de Transporte Internacional de Mercancías "Todo Riesgo Cláusula A".'
    ],
    tipsForSMEs: 'Para envíos iniciales de prueba de 2 a 6 pallets (ej. 1,000 a 3,000 cajas de snacks), conviene utilizar la modalidad de Carga Consolidada (LTL). Esto reduce el costo de flete frente a contratar un camión completo de 24 toneladas (FTL).',
    regulatoryEntities: [
      { country: 'Binacional', name: 'CEBAF Desaguadero', role: 'Centro integrado de control migratorio, aduanero y fitosanitario' },
      { country: 'Bolivia', name: 'Viceministerio de Transportes', role: 'Regulación de empresas de transporte de carga internacional' },
      { country: 'Perú', name: 'SUTRAN / MTC', role: 'Fiscalización de pesos y medidas en red vial peruana' }
    ]
  },
  {
    id: 'despacho-aduanero-binacional',
    stepNumber: '05',
    title: 'Despacho Aduanero Binacional (Aduana Bolivia & SUNAT Perú)',
    subtitle: 'Declaración de Exportación DEX y Nacionalización DAM en Destino',
    badge: 'Aduanas & Fiscalización',
    institution: 'Aduana Nacional de Bolivia & SUNAT Perú',
    duration: '24 a 48 horas en frontera',
    summary: 'El proceso comprende dos actos jurídicos complementarios: la salida aduanera de Bolivia mediante la Declaración Única de Exportación (DEX) en la Aduana Interior Cochabamba o Aduana de Frontera Desaguadero, y el despacho aduanero de importación para el consumo ante la SUNAT en Perú gestionado por el Agente de Aduanas del comprador.',
    keyRequirements: [
      'Elaboración y transmisión de la DEX en el sistema SUMA de la Aduana Nacional (puede ser realizada directamente por el exportador con firma digital o a través de una Agencia Despachante de Aduana).',
      'Asignación del canal de control aduanero en Bolivia: Canal Verde (autorización inmediata de salida), Canal Amarillo (revisión documental), Canal Rojo (revisión física y documental de la mercancía).',
      'Presentación física del camión en el CEBAF Desaguadero para registro de salida de Bolivia y control migratorio/policial.',
      'Ingreso al recinto aduanero peruano: El Agente de Aduana en Perú numera la Declaración Aduanera de Mercancías (DAM), tramita la inspección de DIGESA si corresponde y liquida los tributos internos (IGV 18% + IPM 2%, que el importador peruano recupera como crédito fiscal).'
    ],
    documentsRequired: [
      'Factura Comercial de Exportación dosificada.',
      'Lista de Empaque (Packing List) con detalle de bultos, pesos netos y brutos.',
      'Certificado de Origen CAN.',
      'Certificado de Inocuidad SENASAG.',
      'CPIC y MIC/DTA validados por la aduana de partida.',
      'Póliza de seguro internacional.'
    ],
    tipsForSMEs: 'Realizar el despacho aduanero de exportación en la Aduana Interior Cochabamba (ubicada en el km 7 de la Av. Blanco Galindo) permite que el camión salga precintado desde su planta, lo que agiliza drásticamente el paso por la frontera en Desaguadero hacia canal verde en tránsito.',
    regulatoryEntities: [
      { country: 'Bolivia', name: 'Aduana Nacional de Bolivia', role: 'Control de salida de mercancías y validación de DEX' },
      { country: 'Perú', name: 'SUNAT (Superintendencia Nacional)', role: 'Fiscalización tributaria y aduanera en territorio peruano' }
    ]
  },
  {
    id: 'incoterms-contratos-pagos',
    stepNumber: '06',
    title: 'Negociación Comercial, Términos Incoterms 2020 y Pagos Seguros',
    subtitle: 'Definición de responsabilidades, costos y contratos de suministro',
    badge: 'Cierre Comercial',
    institution: 'Bancos Corresponsales & Cámaras de Comercio',
    duration: 'Continuo',
    summary: 'Para garantizar la rentabilidad y la seguridad financiera de la exportación, la empresa debe negociar adecuadamente el término Incoterm 2020 acordado, formalizar un contrato de compraventa internacional y pactar medios de cobro que protejan el flujo de caja de la PYME.',
    keyRequirements: [
      'Selección estratégica del Incoterm idóneo para transporte carretero: FCA Cochabamba (mínimo riesgo para la PYME), CPT o CIP Lima (el exportador cotiza y gestiona flete y seguro hasta almacén del comprador en Lima, transfiriendo el riesgo al entregar al transportista en Cochabamba), o DAP Lima (entrega en almacén acordado).',
      'Emisión de Factura Comercial de Exportación con desglose claro de los componentes de precio (Valor de la mercancía + Flete + Seguro si aplica).',
      'Definición de la modalidad de pago internacional: Carta de Crédito Irrevocable y Confirmada (máxima seguridad para pedidos grandes), o Transferencia Bancaria Internacional SWIFT con 30% a 50% de anticipo y saldo contra copia de documentos de embarque (DEX y CPIC).',
      'Contrato de distribución o compraventa con cláusulas de resolución de controversias comerciales bajo las reglas de la Cámara de Comercio Internacional (CCI).'
    ],
    documentsRequired: [
      'Contrato de Compraventa Internacional de Alimentos.',
      'Instrucciones de Pago SWIFT con código IBAN/BIC de banco corresponsal boliviano.',
      'Pagaré o instrumento de garantía en caso de crédito comercial.'
    ],
    tipsForSMEs: 'Para una PYME como CEAB S.R.L. que inicia ventas a distribuidores o supermercados peruanos, el Incoterm CIP Lima suele ser el más competitivo porque le facilita la compra al cliente peruano (quien solo debe desaduanar y pagar impuestos internos), mientras que la PYME mantiene control de su transportista de confianza en Bolivia.',
    regulatoryEntities: [
      { country: 'Binacional', name: 'Sistema Bancario (SWIFT)', role: 'Liquidación de divisas y emisión de cartas de crédito' },
      { country: 'Bolivia', name: 'CADEXCO Cochabamba', role: 'Asesoría y arbitraje comercial para exportadores' }
    ]
  },
  {
    id: 'registro-sanitario-digesa-peru',
    stepNumber: '07',
    title: 'Registro Sanitario ante DIGESA (Perú)',
    subtitle: 'Habilitación sanitaria obligatoria para la comercialización legal en territorio peruano',
    badge: 'Vigencia: 5 años · S/. 390',
    institution: 'DIGESA (MINSA Perú)',
    duration: 'Vigencia: 5 años · Costo: S/. 390',
    summary: 'Para que el producto pueda venderse legalmente en Perú, debe estar registrado ante la Dirección General de Salud Ambiental (DIGESA) del Ministerio de Salud del Perú (Web oficial: www.digesa.minsa.gob.pe). Este trámite puede gestionarlo el importador peruano a través de la Ventanilla Única de Comercio Exterior (VUCE Perú).',
    keyRequirements: [
      'Requisito Legal: Para que el producto pueda venderse legalmente en Perú, debe estar registrado ante la Dirección General de Salud Ambiental del Ministerio de Salud del Perú.',
      'Gestión del Trámite: Este trámite puede gestionarlo el importador peruano o representante legal en Lima ante DIGESA (www.digesa.minsa.gob.pe).',
      'Vigencia del Registro: 5 años calendario a partir de la fecha de emisión de la resolución sanitaria.',
      'Costo Oficial del Trámite: S/. 390 (soles peruanos) por derecho de tramitación ante el Ministerio de Salud del Perú.'
    ],
    documentsRequired: [
      'Certificado de Libre Venta o Certificado Sanitario de Exportación emitido por SENASAG Bolivia.',
      'Composición cuali-cuantitativa de ingredientes y aditivos alimentarios.',
      'Análisis físico-químico y microbiológico del producto terminado.',
      'Proyecto de rotulado o etiqueta adaptado a la normativa peruana (incluyendo datos del importador y evaluación de octógonos).'
    ],
    tipsForSMEs: 'Coordine con su importador en Lima antes del primer embarque para que inicie el registro en www.digesa.minsa.gob.pe (costo S/. 390 y vigencia de 5 años). Un solo Registro Sanitario puede amparar toda la línea de sabores de Palitos CEAB (Quinua, Chía, Sésamo y Queso) si comparten la misma naturaleza y proceso.',
    regulatoryEntities: [
      { country: 'Perú', name: 'DIGESA (MINSA)', role: 'Dirección General de Salud Ambiental · www.digesa.minsa.gob.pe' },
      { country: 'Perú', name: 'VUCE Perú', role: 'Plataforma digital donde el importador peruano gestiona el registro (S/. 390)' }
    ]
  },
  {
    id: 'ruta-maritima-mexico-cofepris',
    stepNumber: '08',
    title: 'Ruta Multimodal hacia México y Regulaciones COFEPRIS / NOM-051',
    subtitle: 'Corredor Cochabamba - Puerto Arica - Manzanillo - CDMX y normativa sanitaria mexicana',
    badge: 'Ruta México (22-28 días)',
    institution: 'COFEPRIS, SENASICA & ANAM México',
    duration: '22 a 28 días multimodal',
    summary: 'La exportación hacia México opera bajo un esquema multimodal: salida terrestre desde Cochabamba por Tambo Quemado hacia el Puerto de Arica (Chile), embarque marítimo por el Océano Pacífico hacia el Puerto de Manzanillo (Colima, México) y distribución terrestre hacia Guadalajara o Ciudad de México (CDMX). Requiere cumplimiento de la NOM-051 de etiquetado frontal y control sanitario COFEPRIS/SENASICA.',
    keyRequirements: [
      'Contratación de Agente de Carga Internacional (Freight Forwarder) para tramo terrestre Cochabamba-Arica y flete marítimo Arica-Manzanillo con emisión de Bill of Lading (B/L).',
      'Cumplimiento obligatorio de la NOM-051-SCFI/SSA1-2010 (Norma Oficial Mexicana de Etiquetado): evaluación del sistema de sellos negros octogonales ("Exceso Calorías", "Exceso Azúcares", "Exceso Sodio", "Exceso Grasas Saturadas"). Los Palitos CEAB formulados sin azúcar ni grasas saturadas califican para exención total de sellos.',
      'Homologación sanitaria ante COFEPRIS (Comisión Federal para la Protección contra Riesgos Sanitarios) gestionada por el importador mexicano registrado en el Padrón del SAT.',
      'Inspección fitozoosanitaria ante SENASICA en el punto de ingreso (Puerto de Manzanillo) respaldada por el Certificado Fitosanitario SENASAG Bolivia.',
      'Despacho aduanero de importación definitiva (Pedimento A1) ante la Agencia Nacional de Aduanas de México (ANAM) con Agente Aduanal colegiado en Manzanillo.'
    ],
    documentsRequired: [
      'Bill of Lading (B/L) Conocimiento de Embarque Marítimo emitido por la naviera (ej. Maersk, Hapag-Lloyd, MSC).',
      'Factura Comercial de Exportación en USD detallando Incoterm (CIF Manzanillo o CIP CDMX).',
      'Lista de Empaque (Packing List) con desglose de pallets y peso bruto/neto en contenedor.',
      'Certificado de Origen ACE 66 (Acuerdo de Complementación Económica Bolivia - México) emitido por SENAVEX.',
      'Certificado Fitosanitario / Libre Venta de SENASAG Cochabamba.',
      'Ficha técnica con tabla nutrimental mexicana oficial y constancia de conformidad NOM-051.'
    ],
    tipsForSMEs: 'Para envíos marítimos a México de 18 a 22 días de navegación continua, se deben colocar bolsas desecantes de cloruro de calcio (dry bags) dentro del contenedor 20ft/40ft para evitar la condensación o "lluvia de contenedor" en el cruce del ecuador térmico marítimo.',
    regulatoryEntities: [
      { country: 'México', name: 'COFEPRIS', role: 'Comisión Federal para la Protección contra Riesgos Sanitarios en alimentos' },
      { country: 'México', name: 'ANAM / SAT', role: 'Aduanas de México · Validación de Pedimento A1 y Padrón de Importadores' },
      { country: 'Chile', name: 'Puerto de Arica (TPA)', role: 'Terminal portuario marítimo de salida para carga boliviana en tránsito' }
    ]
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    category: 'Formalización y Registro',
    question: '¿En qué estado se encuentra la constitución legal y los registros exportadores de su empresa en Cochabamba?',
    description: 'Evalúa la capacidad jurídica para emitir facturas de exportación y operar en el sistema de comercio exterior.',
    options: [
      {
        label: 'Tengo empresa formalizada (SEPREC, NIT activo), RUEX en SENAVEX y registro en Aduana SUMA',
        points: 20,
        feedback: 'Excelente. Su empresa cuenta con la habilitación fiscal y aduanera completa para exportar formalmente.'
      },
      {
        label: 'Tengo empresa formal (SEPREC y NIT), pero aún no tramité el RUEX ni el registro en la Aduana',
        points: 12,
        feedback: 'Buen avance. El trámite del RUEX y Aduana toma de 5 a 8 días y puede realizarse en línea.'
      },
      {
        label: 'Tengo un emprendimiento unipersonal o artesanal con NIT básico sin actividad exportadora',
        points: 5,
        feedback: 'Se requiere actualizar la actividad económica en Impuestos y gestionar el RUEX en SENAVEX Cochabamba.'
      },
      {
        label: 'Aún no formalicé la empresa en SEPREC ni cuento con NIT',
        points: 0,
        feedback: 'Primer paso indispensable: formalizar la personería jurídica y obtener el NIT para operar comercialmente.'
      }
    ]
  },
  {
    id: 2,
    category: 'Inocuidad y Sanidad Alimentaria',
    question: '¿Qué nivel de certificación sanitaria posee su planta de producción de alimentos en Cochabamba?',
    description: 'La inocuidad es el filtro obligatorio para el ingreso de alimentos procesados y panificados a Perú.',
    options: [
      {
        label: 'Cuento con Registro Sanitario SENASAG vigente en planta y manual de Buenas Prácticas de Manufactura (BPM)',
        points: 25,
        feedback: 'Impecable. Cumple la condición fundamental para solicitar los certificados de inocuidad y libre venta para exportación.'
      },
      {
        label: 'Tengo Registro Sanitario SENASAG local/departamental en trámite de renovación o ampliación',
        points: 15,
        feedback: 'Debe priorizar la vigencia del registro SENASAG para poder gestionar los certificados de despacho internacional.'
      },
      {
        label: 'Cuento con registro de la Intendencia Municipal o permiso local, pero no SENASAG',
        points: 8,
        feedback: 'Para exportar a Perú se exige exclusivamente el registro nacional emitido por SENASAG.'
      },
      {
        label: 'Elaboramos productos artesanales sin registro formal de inocuidad',
        points: 0,
        feedback: 'Debe implementar Buenas Prácticas de Manufactura y solicitar la inspección de SENASAG Cochabamba.'
      }
    ]
  },
  {
    id: 3,
    category: 'Normativa de Etiquetado y Mercado Peruano (DIGESA)',
    question: '¿Su empaque y fórmula cumplen con los parámetros de la Ley 30021 de Alimentación Saludable de Perú (Octógonos)?',
    description: 'Perú exige Registro Sanitario DIGESA y evaluación obligatoria de octógonos negros si supera límites de azúcar, sodio o grasas.',
    options: [
      {
        label: 'Tenemos tabla nutricional calculada, formulación libre de octógonos o etiquetas adaptadas para Perú',
        points: 20,
        feedback: 'Ventaja competitiva clave. Los alimentos sin octógonos gozan de alta preferencia en góndolas peruanas.'
      },
      {
        label: 'Tenemos etiqueta completa para Bolivia pero no hemos verificado los umbrales de la norma peruana',
        points: 12,
        feedback: 'Se requiere una auditoría técnica de rotulado antes de imprimir bobinas o cajas para exportación.'
      },
      {
        label: 'Usamos etiquetas genéricas básicas sin tabla nutricional formal de laboratorio',
        points: 5,
        feedback: 'Es necesario enviar muestras a un laboratorio acreditado para obtener el perfil nutricional oficial.'
      },
      {
        label: 'No conocemos las exigencias de DIGESA ni el manual de octógonos publicitarios',
        points: 0,
        feedback: 'Riesgo de retención en frontera. RUTAEXPORT le asesora en la adecuación de rotulado para DIGESA.'
      }
    ]
  },
  {
    id: 4,
    category: 'Capacidad Productiva y Embalaje para Altura',
    question: '¿Cómo está preparado su empaque para el transporte terrestre a más de 4,000 metros de altura (Altiplano - Desaguadero)?',
    description: 'La despresurización barométrica en la cumbre andina puede inflar o reventar bolsas de snacks no acondicionadas.',
    options: [
      {
        label: 'Envases sellados probados contra altitud, cajas de cartón corrugado de alta resistencia y parihuelas NIMF-15',
        points: 20,
        feedback: 'Excelente preparación técnica. Previene daños por dilatación de aire y colapso de estiba en viaje.'
      },
      {
        label: 'Empaques de buena calidad pero sin pruebas específicas de altitud ni certificación NIMF-15 en pallets',
        points: 12,
        feedback: 'Se recomienda realizar una prueba piloto de transporte a El Alto/Desaguadero y certificar las maderas.'
      },
      {
        label: 'Empacamos en bolsas simples o cajas corrientes sin estiba técnica',
        points: 5,
        feedback: 'El viaje terrestre de 1,280 km exige cajas corrugadas doble pared y film stretch de sujeción.'
      },
      {
        label: 'Aún no tenemos definido el empaque secundario para distribución mayorista',
        points: 0,
        feedback: 'Fundamental diseñar el empaque de exportación (cajas máster con código de barras y rotulado logístico).'
      }
    ]
  },
  {
    id: 5,
    category: 'Estrategia Comercial e Incoterms',
    question: '¿Tiene definido el precio de exportación y el término Incoterm 2020 para ofrecer a clientes en Lima?',
    description: 'Cotizar correctamente evita pérdidas por imprevistos logísticos o costos aduaneros en frontera.',
    options: [
      {
        label: 'Tenemos matriz de costeo con Incoterms FCA Cochabamba y CIP Lima, y contrato tipo de compraventa',
        points: 15,
        feedback: 'Madurez comercial óptima. Puede presentar ofertas profesionales a supermercados e importadores peruanos.'
      },
      {
        label: 'Conocemos nuestros costos de fábrica pero no sabemos calcular el flete terrestre ni seguros a Lima',
        points: 10,
        feedback: 'Utilice nuestra Calculadora Logística interactiva para determinar sus precios de entrega en Lima.'
      },
      {
        label: 'Solo tenemos precio de venta local en bolivianos para el mercado de Cochabamba',
        points: 4,
        feedback: 'Se debe estructurar una hoja de costos de exportación descontando tributos recuperables como el IVA.'
      },
      {
        label: 'No tenemos experiencia en cotizaciones internacionales',
        points: 0,
        feedback: 'La consultoría RUTAEXPORT le acompaña paso a paso en la estructuración de su primera oferta exportable.'
      }
    ]
  }
];

export const DOCUMENT_CATALOG: DocumentItem[] = [
  {
    id: 'doc-factura',
    code: 'FCE-01',
    title: 'Factura Comercial de Exportación',
    issuer: 'Empresa Exportadora (Servicio de Impuestos Nacionales - SIN)',
    validity: 'Por despacho específico',
    isMandatory: true,
    purpose: 'Documento contable y legal que acredita el valor de la transacción comercial. Debe emitirse sin IVA (derecho al CEDEIM) e indicar Incoterm acordado, moneda USD, condiciones de entrega y forma de pago.',
    commonMistakes: [
      'No consignar el Incoterm 2020 con el lugar geográfico exacto (ej. colocar solo "FOB" en lugar de "CIP Lima, Perú - Almacén del Comprador").',
      'Discrepancia entre el total de unidades facturadas y lo declarado en la lista de empaque.',
      'Emitir la factura con moneda nacional boliviana en lugar de dólares estadounidenses USD.'
    ],
    downloadableTemplateName: 'Plantilla_Factura_Comercial_Exportacion.xlsx'
  },
  {
    id: 'doc-packing-list',
    code: 'PL-02',
    title: 'Lista de Empaque (Packing List)',
    issuer: 'Empresa Exportadora',
    validity: 'Por embarque',
    isMandatory: true,
    purpose: 'Detalla minuciosamente el contenido de cada bulto, número de cajas por pallet, peso bruto total, peso neto de los alimentos, dimensiones y marcas de identificación para facilitar la inspección física aduanera.',
    commonMistakes: [
      'No distinguir entre peso neto del alimento y peso bruto (incluyendo tarimas de madera y cartón).',
      'Omitir la numeración correlativa de bultos (ej. Bulto 1/20 al 20/20).',
      'No declarar el número de lote de producción de los snacks o panificados.'
    ],
    downloadableTemplateName: 'Modelo_Packing_List_Snacks_Alimentos.xlsx'
  },
  {
    id: 'doc-certificado-origen',
    code: 'CO-CAN',
    title: 'Certificado de Origen Comunidad Andina (CAN)',
    issuer: 'SENAVEX Bolivia',
    validity: '180 días calendario desde su emisión',
    isMandatory: true,
    purpose: 'Acredita que el producto fue elaborado en Bolivia cumpliendo los criterios de origen andinos, lo que otorga el beneficio del Arancel Cero (100% de desgravación) al ingresar a territorio peruano.',
    commonMistakes: [
      'Declarar una partida arancelaria distinta a la indicada en la Declaración de Exportación (DEX) o en la factura.',
      'Presentar el certificado con tachaduras o correcciones manuscritas (invalida el documento en SUNAT Perú).',
      'No tramitarlo a tiempo: debe emitirse antes o durante el embarque de la mercancía.'
    ],
    downloadableTemplateName: 'Formulario_Certificado_Origen_CAN_SENAVEX.pdf'
  },
  {
    id: 'doc-senasag-inocuidad',
    code: 'SENASAG-EXP',
    title: 'Certificado Sanitario de Inocuidad Alimentaria para Exportación',
    issuer: 'SENASAG Regional Cochabamba',
    validity: 'Por lote y despacho específico',
    isMandatory: true,
    purpose: 'Garantiza que los alimentos procesados (panificados, galletas, snacks) cumplen con las normas higiénico-sanitarias, fueron procesados en planta habilitada y son aptos para el consumo humano.',
    commonMistakes: [
      'Solicitar el certificado con menos de 5 días de anticipación al carguío del camión.',
      'No contar con los análisis microbiológicos actualizados del lote específico que se cargará.',
      'Discrepancia en el nombre comercial o marca del producto con respecto a la etiqueta física.'
    ],
    downloadableTemplateName: 'Requisitos_Certificado_Inocuidad_SENASAG.pdf'
  },
  {
    id: 'doc-digesa-peru',
    code: 'DIGESA-RS',
    title: 'Registro Sanitario de Alimentos y Bebidas Importadas',
    issuer: 'DIGESA (Ministerio de Salud de Perú)',
    validity: '5 años · Costo: S/. 390 (soles peruanos)',
    isMandatory: true,
    purpose: 'Para que el producto pueda venderse legalmente en Perú, debe estar registrado ante la Dirección General de Salud Ambiental del Ministerio de Salud del Perú (Web: www.digesa.minsa.gob.pe). Este trámite puede gestionarlo el importador peruano vía VUCE Perú, con una vigencia de 5 años y un costo de S/. 390 (soles peruanos).',
    commonMistakes: [
      'Despachar la carga desde Cochabamba sin que el importador cuente con el código de Registro Sanitario DIGESA aprobado.',
      'Etiqueta impresa que no incluye el nombre, RUC y dirección del importador peruano.',
      'Superar los límites de advertencia publicitaria sin colocar los octógonos correspondientes.'
    ],
    downloadableTemplateName: 'Guia_Tramite_VUCE_DIGESA_Peru.pdf'
  },
  {
    id: 'doc-transporte-cpic',
    code: 'CPIC-MIC',
    title: 'Carta de Porte Internacional (CPIC) y Manifiesto de Carga (MIC/DTA)',
    issuer: 'Empresa de Transporte Internacional Terrestre Autorizada',
    validity: 'Durante el tránsito aduanero',
    isMandatory: true,
    purpose: 'Contrato de transporte terrestre internacional y documento aduanero que ampara el tránsito de la mercancía desde la aduana de partida (Cochabamba) hasta la aduana de destino en Perú a través del CEBAF Desaguadero.',
    commonMistakes: [
      'Contratar transportistas que no tengan permiso binacional Bolivia-Perú vigente ante el Viceministerio de Transportes.',
      'Errores en el número de placa del tracto-camión o del semirremolque en el MIC/DTA.',
      'No verificar el estado de los precintos aduaneros antes de salir de la aduana interior.'
    ],
    downloadableTemplateName: 'Ejemplo_Guia_CPIC_MIC_DTA_Terrestre.pdf'
  },
  {
    id: 'doc-bl-maritimo',
    code: 'B/L-MAR',
    title: 'Conocimiento de Embarque Marítimo (Bill of Lading - B/L)',
    issuer: 'Línea Naviera Internacional (ej. Maersk, Hapag-Lloyd, MSC)',
    validity: 'Durante la travesía marítima y entrega en puerto',
    isMandatory: true,
    targetMarket: 'mexico',
    purpose: 'Título valor y contrato de transporte marítimo internacional que ampara la carga en contenedor desde el Puerto de Arica (Chile) hasta el Puerto de Manzanillo (México). Es indispensable para que el importador mexicano reclame y desaduanice el contenedor.',
    commonMistakes: [
      'Discrepancia entre los datos del consignatario (Consignee) y el importador registrado en el padrón del SAT de México.',
      'No solicitar la emisión del B/L con cláusula "Telex Release" o "Express Release", lo que puede obligar al envío postal de originales físicos demorando el retiro de la carga en Manzanillo.',
      'Errores en el número de precinto aduanero (Seal Number) del contenedor declarado.'
    ],
    downloadableTemplateName: 'Modelo_Bill_of_Lading_Maritimo_Mexico.pdf'
  },
  {
    id: 'doc-nom-051-mexico',
    code: 'NOM-051',
    title: 'Constancia de Cumplimiento de Etiquetado Frontal (NOM-051 México)',
    issuer: 'Unidad de Inspección Acreditada (UVA) en México / Secretaría de Economía',
    validity: 'Por diseño de empaque aprobado',
    isMandatory: true,
    targetMarket: 'mexico',
    purpose: 'Certifica que el empaque cumple con la NOM-051-SCFI/SSA1-2010 de México. Los Palitos CEAB formulados sin azúcar añadido ni exceso de sodio acceden limpios de octógonos negros, lo que representa una enorme ventaja comercial en anaqueles mexicanos.',
    commonMistakes: [
      'Colocar sellos con proporciones tipográficas distintas a las fijadas por la Secretaría de Salud de México.',
      'Omitir la declaración de país de origen "Hecho en Bolivia" con tipografía visible en el panel frontal.',
      'No incluir la tabla nutrimental con base estandarizada de 100 gramos/100 ml exigida en México.'
    ],
    downloadableTemplateName: 'Guia_Etiquetado_NOM_051_Mexico.pdf'
  },
  {
    id: 'doc-pedimento-sat',
    code: 'PED-SAT',
    title: 'Pedimento de Importación Definitiva A1 (ANAM / SAT México)',
    issuer: 'Agente Aduanal Mexicano Colegiado / SAT (Secretaría de Hacienda)',
    validity: 'Por despacho aduanero en puerto',
    isMandatory: true,
    targetMarket: 'mexico',
    purpose: 'Declaración fiscal oficial ante la Agencia Nacional de Aduanas de México (ANAM). Liquida el Derecho de Trámite Aduanero (DTA) y el IVA (con tasa 0% en alimentos básicos no preparados en restaurante, o IEPS en caso de productos con densidad calórica específica).',
    commonMistakes: [
      'Importador en México que no tiene activa la inscripción en el Padrón de Importadores General del SAT.',
      'Clasificación errónea de la fracción arancelaria de la TIGIE de 8 o 10 dígitos (NICO).',
      'No anexar el Certificado de Origen ACE 66 para solicitar la exención arancelaria al momento de la validación.'
    ],
    downloadableTemplateName: 'Formato_Pedimento_Aduanal_A1_Mexico.pdf'
  },
  {
    id: 'doc-ace66-origen',
    code: 'CO-ACE66',
    title: 'Certificado de Origen ACE 66 (Bolivia - México)',
    issuer: 'SENAVEX Bolivia',
    validity: '1 año desde su emisión',
    isMandatory: true,
    targetMarket: 'mexico',
    purpose: 'Acredita el origen boliviano de las galletas y snacks CEAB bajo el Acuerdo de Complementación Económica N° 66 (ACE 66) suscrito entre Bolivia y México, liberando el arancel de importación en las aduanas mexicanas.',
    commonMistakes: [
      'Consignar una partida arancelaria distinta a la indicada en la factura comercial de exportación.',
      'Errores en el criterio de origen (ej. salto arancelario o porcentaje de insumos regionales andinos).',
      'Fechas de emisión posteriores al zarpe del buque marítimo desde Arica sin justificación documental.'
    ],
    downloadableTemplateName: 'Certificado_Origen_ACE66_Bolivia_Mexico.pdf'
  }
];

export const TARIFF_DATABASE = [
  {
    code: '1905.90.90.00',
    description: 'Los demás productos de panadería, pastelería o galletería, incluso con adición de cacao.',
    suitableFor: 'Palitos de Quinua y Cañahua CEAB, Palitos de Chía, Sésamo, Queso y Pan Molde con Quinua 600g.',
    adValoremMfn: '11% (Perú) / 10% (México)',
    adValoremCAN: '0% (CAN / ACE 66)',
    preferenceRate: '100% de preferencia arancelaria',
    regulatorBolivia: 'SENASAG',
    regulatorPeru: 'DIGESA (Perú) / COFEPRIS (México)'
  },
  {
    code: '1904.10.00.00',
    description: 'Productos a base de cereales obtenidos por inflado o tostado.',
    suitableFor: 'Granola Cereal Instantáneo CEAB con miel pura y cereales andinos crocantes.',
    adValoremMfn: '11% (Perú) / 10% (México)',
    adValoremCAN: '0% (CAN / ACE 66)',
    preferenceRate: '100% de preferencia arancelaria',
    regulatorBolivia: 'SENASAG',
    regulatorPeru: 'DIGESA (Perú) / COFEPRIS (México)'
  },
  {
    code: '1905.31.00.00',
    description: 'Galletas dulces (con adición de edulcorante o miel).',
    suitableFor: 'Galletas CEAB "Un Placer Crujiente", galletas horneadas con avena integral, linaza y miel.',
    adValoremMfn: '11% (Perú) / 15% (México)',
    adValoremCAN: '0% (CAN / ACE 66)',
    preferenceRate: '100% de preferencia arancelaria',
    regulatorBolivia: 'SENASAG',
    regulatorPeru: 'DIGESA (Perú) / COFEPRIS (México)'
  },
  {
    code: '1905.90.10.00',
    description: 'Pan de molde, incluso tostado, y productos similares.',
    suitableFor: 'Pan Molde Multi Grano CEAB (girasol, sésamo, linaza, avena) y Molde Fibra con Miel.',
    adValoremMfn: '11% (Perú) / 10% (México)',
    adValoremCAN: '0% (CAN / ACE 66)',
    preferenceRate: '100% de preferencia arancelaria',
    regulatorBolivia: 'SENASAG',
    regulatorPeru: 'DIGESA (Perú) / COFEPRIS (México)'
  }
];

export const CORRIDOR_PERU_CITIES = [
  {
    city: 'Planta CEAB S.R.L. (Vinto, Cochabamba)',
    altitude: '2,570 msnm',
    km: '0 km',
    phase: 'Planta industrial en Av. Albina Patiño Km 1, Vinto. Paletizado bajo norma NIMF-15, precintado e inspección SENASAG en origen.'
  },
  {
    city: 'Oruro / Caracollo',
    altitude: '3,700 msnm',
    km: '210 km',
    phase: 'Tránsito por carretera pavimentada RN4 y RN1. Control de peajes Vías Bolivia.'
  },
  {
    city: 'El Alto / La Paz',
    altitude: '4,070 msnm',
    km: '390 km',
    phase: 'Punto de mayor altitud barométrica. Verificación de resistencia de sellos de envases.'
  },
  {
    city: 'Desaguadero (CEBAF)',
    altitude: '3,810 msnm',
    km: '495 km',
    phase: 'Frontera Bolivia - Perú. Trámite integrado: DEX Aduana Bolivia + Control SENASAG / SENASA + DAM SUNAT.'
  },
  {
    city: 'Puno / Juliaca',
    altitude: '3,820 msnm',
    km: '640 km',
    phase: 'Ingreso formal a la red vial peruana concesionada. Control de pesaje SUTRAN.'
  },
  {
    city: 'Arequipa / Repartición',
    altitude: '2,325 msnm',
    km: '890 km',
    phase: 'Descenso hacia la costa sur peruana. Conexión directa con la Carretera Panamericana Sur.'
  },
  {
    city: 'Lima (Callao / Almacenes)',
    altitude: '150 msnm',
    km: '1,280 km',
    phase: 'Llegada a almacén del comprador, descarga, recepción conforme e inicio de distribución.'
  }
];

export const CORRIDOR_MEXICO_CITIES = [
  {
    city: 'Planta CEAB S.R.L. (Vinto, Cochabamba)',
    altitude: '2,570 msnm',
    km: '0 km',
    phase: 'Planta industrial en Vinto. Consolidación en contenedor marítimo de 20ft o 40ft HC, paletizado con parihuelas NIMF-15 y bolsas desecantes antihumedad.'
  },
  {
    city: 'Tambo Quemado / Chungará (Frontera Bolivia - Chile)',
    altitude: '4,200 msnm',
    km: '420 km',
    phase: 'Paso aduanero internacional de alta cordillera. Despacho DEX Aduana Bolivia y tránsito aduanero hacia Arica bajo régimen de libre tránsito.'
  },
  {
    city: 'Puerto de Arica (TPA, Chile)',
    altitude: '5 msnm',
    km: '680 km terrestre',
    phase: 'Terminal portuario marítimo del Pacífico. Ingreso a almacén extraportuario, inspección y estiba a bordo del buque portacontenedores. Emisión del Bill of Lading (B/L).'
  },
  {
    city: 'Travesía Marítima Océano Pacífico',
    altitude: '0 msnm',
    km: '~5,200 km náuticos',
    phase: 'Ruta de navegación marítima de 18 a 22 días conectando la costa pacífica sudamericana con México Pacífico (Líneas navieras regulares Maersk, Hapag-Lloyd, MSC).'
  },
  {
    city: 'Puerto de Manzanillo (Colima, México)',
    altitude: '2 msnm',
    km: 'Arribo a México',
    phase: 'Principal puerto marítimo comercial de México. Validación de Pedimento A1 ante la aduana ANAM/SAT, pago de DTA e inspección fitozoosanitaria SENASICA / COFEPRIS.'
  },
  {
    city: 'Guadalajara (Jalisco)',
    altitude: '1,560 msnm',
    km: '+290 km carretero',
    phase: 'Centro neurálgico logístico e industrial del Bajío y occidente mexicano. Distribución hacia cadenas mayoristas de botanas y alimentos saludables.'
  },
  {
    city: 'Ciudad de México (CDMX / CEDIS Central)',
    altitude: '2,240 msnm',
    km: 'Total ~6,630 km',
    phase: 'Recepción en centros de distribución de cadenas de autoservicio (Walmart México, Chedraui, Soriana, La Comer, City Market) y tiendas especializadas en nutrición.'
  }
];

export const CORRIDOR_CITIES = CORRIDOR_PERU_CITIES;

