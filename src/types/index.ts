export interface ExportStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  institution: string;
  duration: string;
  summary: string;
  keyRequirements: string[];
  documentsRequired: string[];
  tipsForSMEs: string;
  targetMarket?: 'all' | 'peru' | 'mexico';
  regulatoryEntities: {
    country: 'Bolivia' | 'Perú' | 'México' | 'Chile' | 'Binacional' | 'Internacional';
    name: string;
    role: string;
  }[];
}

export interface DiagnosticQuestion {
  id: number;
  category: string;
  question: string;
  description: string;
  options: {
    label: string;
    points: number;
    feedback: string;
  }[];
}

export interface DocumentItem {
  id: string;
  code: string;
  title: string;
  issuer: string;
  validity: string;
  isMandatory: boolean;
  purpose: string;
  targetMarket?: 'all' | 'peru' | 'mexico';
  commonMistakes: string[];
  downloadableTemplateName?: string;
}

export interface CorridorCity {
  city: string;
  altitude: string;
  km: string;
  phase: string;
  type?: 'origin' | 'transit' | 'border' | 'port' | 'ocean' | 'destination';
}

export interface CalculatorState {
  destinationCountry: 'peru' | 'mexico';
  productType: 'bakery' | 'quinoa_snacks' | 'energy_bars' | 'cereal_puffs';
  packagingUnits: number;
  boxWeightKg: number;
  cargoMode: 'LTL' | 'FTL';
  palletsCount: number;
  fobValueUsd: number;
  incoterm: 'FCA_CBB' | 'DAP_DES' | 'CIP_LIM' | 'DDP_LIM' | 'FOB_ARI' | 'CIF_MNZ' | 'CIP_MEX' | 'DDP_MEX';
}

export interface QuoteBreakdown {
  destinationCountry: 'peru' | 'mexico';
  inlandFreightBoliviaUsd: number;
  borderTransitUsd: number;
  internationalFreightUsd: number;
  sanitaryAndOriginCertsUsd: number;
  customsAgentDestUsd: number;
  cargoInsuranceUsd: number;
  totalLogisticsCostUsd: number;
  unitLogisticsCostUsd: number;
  transitDays: string;
  totalWeightKg: number;
  // Backward compatibility fields
  peruFreightUsd?: number;
  customsAgentPeruUsd?: number;
}
