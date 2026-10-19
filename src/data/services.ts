import { Scale, Layers, Flame, Droplets, Building2, Wrench, type LucideIcon } from "lucide-react";

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
    category: "SUPERFICIE ORIGINAL",
    segmentBadge: "SIN POLVO EN EL AMBIENTE",
    title: "Pulido diamantado",
    description:
      "Recuperación de pisos opacos, rayados o desnivelados mediante discos de diamante de grano progresivo. Devuelve la superficie original de la piedra sin aplicar recubrimientos. Trabajamos en húmedo y con aspiración: sin polvo en el ambiente.",
    image: "/gallery/pulido-diamantado-marmol-blanco-carrara.jpg",
    imageTag: "TRABAJAMOS EN HÚMEDO Y CON ASPIRACIÓN",
    linkText: "Cotizar Pulido Diamantado",
    linkHref: "#contact",
  },
  {
    number: "02",
    category: "BRILLO ESPEJO",
    segmentBadge: "ACABADO ANTIDESLIZANTE",
    title: "Cristalizado",
    description:
      "Tratamiento que endurece la superficie de la piedra y le devuelve el brillo tipo espejo. Reemplaza el encerado tradicional: no amarillea, no se pela y deja un acabado antideslizante.",
    image: "/gallery/cristalizado-marmol-penthouse-vista-panoramica.jpg",
    imageTag: "NO AMARILLEA • NO SE PELA",
    linkText: "Cotizar Cristalizado",
    linkHref: "#contact",
  },
  {
    number: "03",
    category: "SELLADO PENETRANTE",
    segmentBadge: "PROTECCIÓN ANTIMANCHAS",
    title: "Vitrificado y sellado",
    description:
      "Cierre del poro de la piedra con resina y sellador penetrante. Protege de manchas de vino, café, aceite y humedad, y facilita la limpieza diaria. Indicado en cocinas, comedores, barras y zonas húmedas.",
    image: "/gallery/vitrificado-sellado-mosaicos-decorativos-terraza.jpg",
    imageTag: "COCINAS, COMEDORES Y ZONAS HÚMEDAS",
    linkText: "Cotizar Vitrificado y Sellado",
    linkHref: "#contact",
  },
  {
    number: "04",
    category: "RECUPERACIÓN INTEGRAL",
    segmentBadge: "SIN CAMBIAR EL PISO",
    title: "Restauración de pisos deteriorados",
    description:
      "Pisos con manchas incrustadas, juntas abiertas, desniveles entre losetas o tratamientos anteriores mal aplicados. Diamantado, empastado de poros y recuperación del acabado, sin romper ni cambiar el piso.",
    image: "/gallery/restauracion-terrazo-veneciano-diseno-olas.jpg",
    imageTag: "EMPASTADO DE POROS Y NIVELACIÓN",
    linkText: "Cotizar Restauración",
    linkHref: "#contact",
  },
  {
    number: "05",
    category: "CORPORATIVO Y COMERCIAL",
    segmentBadge: "PLAN PERIÓDICO",
    title: "Mantenimiento de pisos para empresas",
    description:
      "Programa periódico para edificios, oficinas, hoteles, clínicas y locales comerciales. Visitas programadas de conservación del acabado en halls, escaleras, pasillos y zonas comunes, con informe técnico del estado de los pisos. Evita la intervención mayor y mantiene el inmueble presentable todo el año.",
    image: "/gallery/mantenimiento-pisos-empresas-damero-restaurante.jpg",
    imageTag: "TRABAJO POR SECTORES SIN DETENER OPERACIÓN",
    pills: ["EDIFICIOS", "OFICINAS", "HOTELES", "CLÍNICAS", "LOCALES"],
    linkText: "Cotizar Plan Empresas",
    linkHref: "#contact",
  },
  {
    number: "06",
    category: "COCINA Y BAÑO",
    segmentBadge: "INCLUIDO ACABADO LEATHER",
    title: "Tableros y encimeras",
    description:
      "Pulido, sellado y recuperación de tableros de cocina y baño en granito, mármol y cuarzo, incluido el acabado leather. Tratamiento específico para manchas de grasa y absorción.",
    image: "/gallery/pulido-sellado-tablero-granito-leather.jpg",
    imageTag: "GRANITO, MÁRMOL Y CUARZO",
    linkText: "Cotizar Tableros y Encimeras",
    linkHref: "#contact",
  },
];

export const serviceCategories = [
  { id: "all", label: "Todos los Servicios" },
  { id: "pulido", label: "Pulido Diamantado" },
  { id: "cristalizado", label: "Cristalizado" },
  { id: "vitrificado", label: "Vitrificado y Sellado" },
  { id: "restauracion", label: "Restauración Deteriorados" },
  { id: "empresas", label: "Pisos para Empresas" },
  { id: "tableros", label: "Tableros y Encimeras" },
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
    title: "Pulido diamantado",
    symptom:
      "Recuperación de pisos opacos, rayados o desnivelados mediante discos de diamante de grano progresivo en húmedo.",
    icon: Layers,
    tag: "SIN POLVO EN EL AMBIENTE",
  },
  {
    title: "Cristalizado",
    symptom:
      "Endurece la superficie de la piedra y devuelve brillo tipo espejo antideslizante sin amarillear.",
    icon: Flame,
    tag: "BRILLO ESPEJO DURADERO",
  },
  {
    title: "Vitrificado y sellado",
    symptom:
      "Cierre del poro con resina y sellador penetrante. Protege contra manchas de vino, café, grasa y humedad.",
    icon: Droplets,
    tag: "PROTECCIÓN PENETRANTE",
  },
  {
    title: "Restauración de deteriorados",
    symptom:
      "Diamantado, empastado de poros y nivelación de juntas abiertas o manchas incrustadas sin romper ni cambiar el piso.",
    icon: Scale,
    tag: "SIN CAMBIAR EL PISO",
  },
  {
    title: "Mantenimiento para empresas",
    symptom:
      "Visitas programadas con informe técnico en halls, escaleras y pasillos sin detener la operación de su negocio.",
    icon: Building2,
    tag: "PLANES CORPORATIVOS",
  },
  {
    title: "Tableros y encimeras",
    symptom:
      "Pulido, sellado y rescate contra absorción y manchas de grasa en mármol, granito y cuarzo, incluido acabado leather.",
    icon: Wrench,
    tag: "COCINAS Y BAÑOS",
  },
];

export const servicesCatalogOffers = [
  {
    name: "Pulido diamantado",
    description:
      "Recuperación de pisos opacos, rayados o desnivelados mediante discos de diamante de grano progresivo. Trabajamos en húmedo y con aspiración: sin polvo en el ambiente.",
  },
  {
    name: "Cristalizado",
    description:
      "Tratamiento que endurece la superficie de la piedra y le devuelve el brillo tipo espejo. Reemplaza el encerado tradicional: no amarillea, no se pela y deja un acabado antideslizante.",
  },
  {
    name: "Vitrificado y sellado",
    description:
      "Cierre del poro de la piedra con resina y sellador penetrante. Protege de manchas de vino, café, aceite y humedad, y facilita la limpieza diaria.",
  },
  {
    name: "Restauración de pisos deteriorados",
    description:
      "Pisos con manchas incrustadas, juntas abiertas o desniveles entre losetas. Diamantado, empastado de poros y recuperación del acabado, sin romper ni cambiar el piso.",
  },
  {
    name: "Mantenimiento de pisos para empresas",
    description:
      "Programa periódico para edificios, oficinas, hoteles, clínicas y locales comerciales con informe técnico. Evita la intervención mayor y mantiene el inmueble presentable todo el año.",
  },
  {
    name: "Tableros y encimeras",
    description:
      "Pulido, sellado y recuperación de tableros de cocina y baño en granito, mármol y cuarzo, incluido el acabado leather. Tratamiento específico para manchas de grasa y absorción.",
  },
];
