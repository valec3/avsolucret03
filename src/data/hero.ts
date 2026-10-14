export interface HeroStat {
  value: string;
  label: string;
  sublabel: string;
  isSpecial?: boolean;
}

export interface HeroBentoCard {
  image: string;
  alt: string;
  badge: string;
  statValue?: string;
  statLabel?: string;
  badgeType?: "dark" | "white" | "standard";
}

export const heroData = {
  badge: "SERVICIOS PREMIUM EN LIMA & CALLAO • CERTIFICACIÓN INDUSTRIAL",
  headlinePrefix: "EXPERTOS EN",
  headlineHighlight: "PULIDO DIAMANTADO",
  headlineSuffix: "EN LIMA, PERÚ.",
  subtitle:
    "Restauración de alto estándar para mármol, terrazo, granito y concreto arquitectónico. Brillo espejo natural sin ceras químicas, máxima durabilidad para residencias exclusivas y complejos corporativos de Lima Metropolitana.",
  ctaPrimaryText: "Cotizar Ahora (Presupuesto Libre)",
  ctaSecondaryText: "Ver Trabajos Finales",
  microTrust: [
    {
      id: "prospeccion",
      text: "Prospección in situ sin costo en Lima Metropolitana",
      iconType: "check",
    },
    {
      id: "maquinaria",
      text: "Maquinaria planetaria trifásica 100% libre de polvo",
      iconType: "shield",
    },
  ],
  bentoCards: {
    main: {
      image: "/general/piso-marmol.webp",
      alt: "Pisos Carrara con Brillo Espejo y Calibración Diamantada en Lima",
      badge: "MÁRMOL CARRARA • BRILLO ESPEJO NATURAL",
    },
    statCard: {
      image: "/gallery/pulido-diamantado-vitrificado.jpeg",
      alt: "Retención de brillo en superficie mineral pulida con nanoprotección",
      statValue: "98% Retención",
      statLabel: "DURABILIDAD PROLONGADA • CERO CERAS",
    },
    industrialCard: {
      image: "/general/piso-concreto.jpg",
      alt: "Concreto arquitectónico pulido superflat en almacenes de Lima",
      badge: "CONCRETO INDUSTRIAL & RESIDENCIAL",
    },
  },
  stats: [
    {
      value: "500+",
      label: "Proyectos en Lima",
      sublabel: "Residenciales y Corporativos",
    },
    {
      value: "10+",
      label: "Años de Liderazgo",
      sublabel: "Tecnología Diamantada Mixta",
    },
    {
      value: "100%",
      label: "Garantía Técnica",
      sublabel: "Cero Polvo • Cero Ceras",
    },
    {
      value: "Cobertura Total",
      label: "Lima & Provincias",
      sublabel: "San Isidro a Miraflores a Surco a Asia",
      isSpecial: true,
    },
  ] as HeroStat[],
};
