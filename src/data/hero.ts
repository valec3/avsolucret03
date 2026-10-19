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
  badge: "RECUBRIMIENTOS Y CRISTALIZADOS DE SUPERFICIES",
  h1: "Pulido, Cristalizado y Mantenimiento de Pisos en Lima",
  headlinePrefix: "Pulido, Cristalizado y",
  headlineHighlight: "Mantenimiento de Pisos",
  headlineSuffix: "en Lima",
  subtitle:
    "Recuperamos y mantenemos pisos de mármol, granito, terrazo, mosaicos, porcelanato y concreto en viviendas, oficinas, hoteles y locales comerciales. Trabajamos sin polvo, por sectores y en horarios de baja afluencia, para que su operación no se detenga.",
  ctaPrimaryText: "Cotizar por WhatsApp",
  ctaSecondaryText: "Ver trabajos",
  microTrust: [
    {
      id: "sin-polvo",
      text: "Trabajamos sin polvo con aspiración",
      iconType: "shield",
    },
    {
      id: "garantia",
      text: "Garantía por escrito y guía de cuidados",
      iconType: "check",
    },
    {
      id: "sectores",
      text: "Por sectores y sin detener su operación",
      iconType: "shield",
    },
    {
      id: "experiencia",
      text: "Desde 2022 con equipo técnico propio",
      iconType: "check",
    },
  ],
  bentoCards: {
    main: {
      image: "/general/piso-marmol.webp",
      alt: "Pulido, cristalizado y mantenimiento de pisos de mármol en Lima",
      badge: "MÁRMOL Y GRANITO • BRILLO TIPO ESPEJO",
    },
    statCard: {
      image: "/gallery/pulido-diamantado-vitrificado.jpeg",
      alt: "Piso cristalizado antideslizante sin cera",
      statValue: "Sin Cera",
      statLabel: "ACABADO TIPO ESPEJO Y ANTIDESLIZANTE",
    },
    industrialCard: {
      image: "/general/piso-concreto.jpg",
      alt: "Pisos de concreto pulido, terrazo y mosaicos en Lima",
      badge: "VIVIENDAS, OFICINAS Y LOCALES",
    },
  },
  stats: [
    {
      value: "Desde 2022",
      label: "4 Años de Operación",
      sublabel: "Equipo propio y empresa formal",
    },
    {
      value: "Sin Polvo",
      label: "En Húmedo y Aspiración",
      sublabel: "Sin desocupar la vivienda",
    },
    {
      value: "100%",
      label: "Garantía por Escrito",
      sublabel: "Con guía de cuidados específica",
    },
    {
      value: "Lima & Callao",
      label: "Cobertura Completa",
      sublabel: "Viviendas, hoteles y empresas",
      isSpecial: true,
    },
  ] as HeroStat[],
};
