export interface SurfaceOption {
  id: string;
  name: string;
}

export interface FinishLevelOption {
  id: string;
  name: string;
}

export interface TechnicalPackage {
  name: string;
  level: string;
  description: string;
  features: string[];
  highlight: boolean;
  warranty: string;
}

export const surfaces: SurfaceOption[] = [
  { id: "marmol", name: "Mármol Natural" },
  { id: "terrazo", name: "Terrazo Veneciano" },
  { id: "granito", name: "Granito" },
  { id: "concreto", name: "Concreto Arquitectónico" },
];

export const finishLevels: FinishLevelOption[] = [
  { id: "mantenimiento", name: "Mantenimiento & Cristalizado" },
  { id: "restauracion", name: "Restauración Estándar" },
  { id: "premium", name: "Espejo Diamantado Premium ★" },
];

export const technicalPackages: TechnicalPackage[] = [
  {
    name: "Protocolo Básico",
    level: "NIVEL DE INTERVENCIÓN 01",
    description: "Mantenimiento preventivo y regeneración de brillo sin alterar la cota del piso.",
    features: [
      "Cristalizado térmico libre de ceras químicas",
      "Micro-diamantado superficial de grano fino",
      "Aspirado HEPA 100% libre de polvo",
    ],
    highlight: false,
    warranty: "Garantía de Reflectancia 6 Meses",
  },
  {
    name: "Protocolo Estándar",
    level: "NIVEL DE INTERVENCIÓN 02",
    description: "Restauración para pisos con desgaste por tráfico, rayas superficiales y pérdida de brillo.",
    features: [
      "Desbaste medio para eliminar arañazos y porosidad",
      "Secuencia diamantada progresiva de 5 fases",
      "Sellado protector contra manchas de uso diario",
    ],
    highlight: false,
    warranty: "Garantía Técnica 1 Año",
  },
  {
    name: "Protocolo Espejo Premium",
    level: "MÁXIMA CALIBRACIÓN • 7 FASES",
    description: "Restauración integral. Máxima reflectancia espejo con protección nanoscópica permanente.",
    features: [
      "Nivelación micrométrica y pulido hasta grano 3000",
      "Densificación con silicato de litio + AV-SHIELD™",
      "Certificación con glossmetro digital (90+ GU)",
    ],
    highlight: true,
    warranty: "Garantía Escrita 5 Años",
  },
  {
    name: "Protocolo Corporativo",
    level: "GRAN ESCALA & LOGÍSTICA",
    description: "Diseñado para complejos comerciales, clínicas, hoteles y plantas industriales.",
    features: [
      "Operación en turnos nocturnos sin parar el local",
      "Operarios con seguro SCTR y homologaciones",
      "Maquinaria planetaria de alto rendimiento",
    ],
    highlight: false,
    warranty: "Acuerdo de Servicio Operacional",
  },
];

export const pricingEstimatorData = {
  sectionBadge: "ESTÁNDARES DE ESPECIFICACIÓN Y ALCANCE",
  title: "Protocolos Técnicos y Estimador de Alcance",
  subtitle:
    "Seleccioná el metraje y las condiciones de tu piso para proyectar el nivel de intervención adecuado. Todo trabajo cuenta con visita previa y muestra de brillo gratuita in situ.",
  transparencyBadge: "PRESUPUESTO EXACTO TRAS DIAGNÓSTICO EN SITIO",
  calculatorTitle: "Estimador Técnico de Superficie",
  calculatorSubtitle: "Simulá el requerimiento de tu piso en Lima Metropolitana",
};
