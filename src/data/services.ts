import { Scale, Layers, Flame, Droplets, type LucideIcon } from "lucide-react";

export interface ProtocolCardData {
  number: string;
  category: string;
  segmentBadge?: string;
  title: string;
  description: string;
  image?: string;
  imageTag?: string;
  statBadge?: {
    value: string;
    label: string;
  };
  pills?: string[];
  linkText: string;
  linkHref: string;
}

export const protocols: ProtocolCardData[] = [
  {
    number: "01",
    category: "PIEDRA NOBLE",
    segmentBadge: "RESIDENCIAL + HOTELES",
    title: "Pulido Diamantado de Mármol y Granito",
    description:
      "Eliminación de manchas ácidas, rayas y porosidad mediante resinas diamantadas importadas. Recuperación del tono original y sellado microporoso con acabado brillo espejo permanente.",
    image: "/general/piso-marmol.webp",
    imageTag: "CALIDAD HOSPITALARIA • REFLEXIÓN CLARA",
    linkText: "Especificaciones de Mármol",
    linkHref: "#contact",
  },
  {
    number: "02",
    category: "PATRIMONIAL",
    segmentBadge: "CASAS HISTÓRICAS • LOBBIES",
    title: "Restauración de Pisos de Terrazo Veneciano",
    description:
      "Nivelación de juntas y desbaste profundo para reavivar la vivacidad del grano de mármol o chip de cuarzo. Tratamiento antimanchas con sellado hidrofugante nanotecnológico.",
    image: "/general/piso-terrazo.jpg",
    linkText: "Ver Proceso de Terrazo",
    linkHref: "#contact",
  },
  {
    number: "03",
    category: "INDUSTRIAL / LOGÍSTICO",
    title: "Concreto Pulido y Densificado de Litio",
    description:
      "Transformación molecular mediante silicato de litio. Multiplica la dureza superficial (+300%), erradica el desprendimiento de polvo y reduce el costo de mantenimiento a cero.",
    statBadge: {
      value: "+300% Resistencia",
      label: "Tráfico pesado de montacargas y showrooms",
    },
    linkText: "Catálogo Industrial",
    linkHref: "#contact",
  },
  {
    number: "04",
    category: "CONSERVACIÓN PERIÓDICA",
    segmentBadge: "PLANES CORPORATIVOS ANUALES",
    title: "Mantenimiento Preventivo y Cristalizado Termoquímico",
    description:
      "Programas de mantenimiento para bancos, clínicas, hoteles y centros comerciales. Tratamiento termoquímico que preserva la reflectancia sin frenar las operaciones del edificio.",
    pills: ["TURNOS NOCTURNOS", "SIN OLORES TÓXICOS", "TRÁFICO INMEDIATO"],
    linkText: "Planes para Edificios",
    linkHref: "#contact",
  },
];

export const serviceCategories = [
  { id: "all", label: "Todos los Servicios" },
  { id: "marmol", label: "Mármol y Granito" },
  { id: "terrazo", label: "Terrazo Veneciano" },
  { id: "concreto", label: "Concreto Pulido" },
  { id: "cristalizado", label: "Cristalizado & Mantenimiento" },
];

export const gritSequence = [
  { grit: "50", color: "bg-amber-700 text-white", label: "Corte / Desbaste" },
  { grit: "100", color: "bg-orange-600 text-white", label: "Nivelación" },
  { grit: "200", color: "bg-amber-500 text-white", label: "Afinado 1" },
  { grit: "400", color: "bg-yellow-400 text-anthracite-900", label: "Afinado 2" },
  { grit: "800", color: "bg-sky-400 text-anthracite-900", label: "Pre-Brillo" },
  { grit: "1500", color: "bg-blue-600 text-white", label: "Brillo Mecánico" },
  { grit: "3000", color: "bg-purple-600 text-white", label: "Espejo Puro" },
];

export interface DiagnosticCardData {
  title: string;
  symptom: string;
  icon: LucideIcon;
  tag: string;
}

export const diagnosticCards: DiagnosticCardData[] = [
  {
    title: "Desbastado y Nivelación",
    symptom:
      "Para pisos con desniveles, tropiezos, cejas pronunciadas de obra o desprendimiento irregular de lechada.",
    icon: Scale,
    tag: "NIVELACIÓN FÍSICA",
  },
  {
    title: "Pulido Diamantado",
    symptom:
      "Para superficies que han perdido su brillo por tráfico continuo, porosidad visible o envejecimiento de ceras.",
    icon: Layers,
    tag: "RESTAURACIÓN TOTAL",
  },
  {
    title: "Cristalizado Espejo",
    symptom:
      "Ideal en sustratos sanos que requieren brillo ultra-reflectivo y protección contra micro-rayaduras cotidianas.",
    icon: Flame,
    tag: "ALTO BRILLO PERIÓDICO",
  },
  {
    title: "Sellador Hidrófugo",
    symptom:
      "Tratamiento esencial para evitar manchas permanentes de aceite, vino, café o salitre marino en interiores y terrazas.",
    icon: Droplets,
    tag: "PROTECCIÓN QUÍMICA",
  },
];

export const servicesCatalogOffers = [
  {
    name: "Pulido Diamantado de Mármol y Granito",
    description: "Nivelación y rectificación de mármol con discos resinados hasta grano 3000.",
  },
  {
    name: "Restauración de Terrazo Veneciano",
    description: "Curación de fisuras estructurales, micro-nivelación y brillo cerámico.",
  },
  {
    name: "Concreto Pulido y Densificado con Litio",
    description: "Tratamiento Superflat para estacionamientos y complejos industriales.",
  },
  {
    name: "Sellado Nanométrico AV-SHIELD™ Ultra",
    description: "Blindaje oleofóbico e hidrofóbico respirable no ocluyente.",
  },
];
