export interface SurfaceOption {
  id: string;
  name: string;
}

export interface FinishLevelOption {
  id: string;
  name: string;
}

export interface TechnicalPackage {
  id: string;
  planNumber: string;
  name: string;
  subtitle: string;
  level: string;
  description: string;
  features: string[];
  finish: string;
  highlight: boolean;
  warranty: string;
}

export const materialsWorked: string[] = [
  "Mármol",
  "Granito",
  "Granito leather",
  "Terrazo",
  "Mosaicos",
  "Losetas de concreto",
  "Concreto pulido industrial",
  "Porcelanato",
  "Travertino",
  "Caliza",
  "Cuarzo",
];

export const surfaces: SurfaceOption[] = materialsWorked.map((mat) => ({
  id: mat.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name: mat,
}));

export const finishLevels: FinishLevelOption[] = [
  { id: "basico", name: "Básico — Pulido de un grano y cera" },
  { id: "cristalizado-plus", name: "Cristalizado Plus — Pulido progresivo y cristalizado en 2 capas" },
  { id: "premium-alto-transito", name: "Premium alto tránsito — Densificado, resina y vitrificado en 3 capas" },
];

export const technicalPackages: TechnicalPackage[] = [
  {
    id: "basico",
    planNumber: "PLAN 1",
    name: "Básico",
    subtitle: "Pulido de un grano y cera",
    level: "PLAN 1",
    description: "Permite emparejar el piso y quitarle la opacidad en piedras claras y oscuras.",
    features: [
      "Un solo paso de diamantado: empareja el piso y le quita la opacidad",
      "Se termina con una capa de cera protectora",
      "Sirve en piedras claras y oscuras",
      "Acabado: natural a satinado, sin brillo espejo",
    ],
    finish: "Natural a satinado, sin brillo espejo",
    highlight: false,
    warranty: "Garantía de Servicio",
  },
  {
    id: "cristalizado-plus",
    planNumber: "PLAN 2",
    name: "Cristalizado Plus",
    subtitle: "Pulido progresivo y cristalizado en 2 capas",
    level: "PLAN 2 • MÁS POPULAR",
    description: "Superficie nueva, más dura que la original con acabado tipo espejo antideslizante sin cera.",
    features: [
      "Diamantado completo, de grano grueso hasta el más fino",
      "Dos capas de cristalizado aplicadas con máquina y lana de acero",
      "Forma una superficie nueva, más dura que la original",
      "Acabado: brillo espejo y antideslizante, sin cera que reponer",
    ],
    finish: "Brillo espejo y antideslizante, sin cera que reponer",
    highlight: true,
    warranty: "Garantía por Escrito",
  },
  {
    id: "premium-alto-transito",
    planNumber: "PLAN 3",
    name: "Premium alto tránsito",
    subtitle: "Densificado, resina y vitrificado en 3 capas",
    level: "PLAN 3 • MÁXIMA RESISTENCIA",
    description: "Protección total y brillo espejo profundo para zonas de alto uso diario.",
    features: [
      "Diamantado completo hasta acabado espejo",
      "Densificador: penetra en el piso y lo endurece por dentro, no solo en la superficie",
      "Resina selladora: reduce la porosidad capilar y previene la absorción de líquidos y grasas",
      "Tres capas de vitrificado cristalizado, dejando reaccionar entre una y otra",
      "Acabado: brillo espejo profundo y la mayor resistencia al uso diario",
    ],
    finish: "Brillo espejo profundo y la mayor resistencia al uso diario",
    highlight: false,
    warranty: "Garantía por Escrito de Alto Tránsito",
  },
];

export const pricingEstimatorData = {
  sectionBadge: "LOS TRES PLANES DE INTERVENCIÓN",
  title: "Los Tres Planes",
  subtitle:
    "Seleccione el plan y el tipo de material para coordinar una evaluación técnica y recibir una propuesta personalizada.",
  transparencyBadge: "EVALUACIÓN TÉCNICA • PROPUESTA A MEDIDA",
  calculatorTitle: "Estimador Técnico de Metraje",
  calculatorSubtitle: "Proyectá tu requerimiento en Lima Metropolitana y Callao",
};
