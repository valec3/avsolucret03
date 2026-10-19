import { Shield, Award, FileCheck2, Clock, type LucideIcon } from "lucide-react";

export interface TimelineEvent {
  year: string;
  tag: string;
  description: string;
}

export interface GuaranteeItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  check: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  desc: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2022",
    tag: "INICIO DE OPERACIONES",
    description:
      "Desde 2022 atendiendo viviendas, edificios y empresas en Lima, con equipo técnico propio y empresa formal.",
  },
  {
    year: "SIN POLVO",
    tag: "TECNOLOGÍA EN HÚMEDO",
    description:
      "Pulido en húmedo con aspiración. No hay que desocupar la vivienda ni cubrir todo el mobiliario.",
  },
  {
    year: "POR ESCRITO",
    tag: "GARANTÍA Y CUIDADOS",
    description:
      "Cada servicio se entrega con su garantía y una guía de cuidados específica para el material tratado.",
  },
  {
    year: "EMPRESAS",
    tag: "CONTINUIDAD OPERATIVA",
    description:
      "En empresas trabajamos por sectores y en horarios de baja afluencia. Cada tramo queda transitable al terminar la jornada.",
  },
];

export const guarantees: GuaranteeItem[] = [
  {
    icon: Shield,
    title: "Trabajamos sin polvo",
    subtitle: "PULIDO EN HÚMEDO CON ASPIRACIÓN",
    desc: "Pulido en húmedo con aspiración de alta eficiencia. No hay que desocupar la vivienda ni cubrir todo el mobiliario.",
    check: "Sin polvo en el ambiente",
  },
  {
    icon: Award,
    title: "Garantía por escrito",
    subtitle: "GUÍA DE CUIDADOS INCLUIDA",
    desc: "Cada servicio se entrega con su garantía por escrito y una guía de cuidados específica para el material tratado.",
    check: "Garantía certificada",
  },
  {
    icon: Clock,
    title: "Sin detener su operación",
    subtitle: "CONTINUIDAD COMERCIAL",
    desc: "En empresas trabajamos por sectores y en horarios de baja afluencia. Cada tramo queda transitable al terminar la jornada.",
    check: "Tránsito habilitado",
  },
  {
    icon: FileCheck2,
    title: "Cuatro años de operación",
    subtitle: "EMPRESA FORMAL",
    desc: "Desde 2022 atendiendo en Lima con equipo técnico propio, personería jurídica formal (RUC 20602100198) y factura de ley.",
    check: "Equipo técnico propio",
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    step: "01",
    title: "Evaluamos y protegemos",
    desc: "Identificamos el tipo de piedra y su estado. Hacemos una prueba en zona poco visible que usted aprueba antes de continuar. Cubrimos zócalos, puertas y mobiliario.",
  },
  {
    step: "02",
    title: "Diamantado progresivo",
    desc: "Discos de diamante de grano grueso a fino. Los primeros emparejan y quitan rayas hondas; los últimos afinan hasta que aparece el brillo. En húmedo y con aspiración.",
  },
  {
    step: "03",
    title: "Empastado, si corresponde",
    desc: "En mosaicos, terrazo y concreto rellenamos los poros con pasta del color de la loseta y dejamos curar antes de seguir puliendo.",
  },
  {
    step: "04",
    title: "Acabado según el plan",
    desc: "Encerado, cristalizado o vitrificado. Al entregar dejamos una guía de cuidados con los plazos y los productos que debe y no debe usar.",
  },
];

export const aboutMission = {
  number: "01",
  title: "Nuestra Misión",
  description:
    "Recuperar y mantener pisos de mármol, granito, terrazo, mosaicos, porcelanato y concreto en viviendas, oficinas, hoteles y locales comerciales, trabajando sin polvo y garantizando un acabado de alta calidad.",
  commitmentsHeader: "COMPROMISOS OPERATIVOS",
  commitments: [
    "Pulido en húmedo con aspiración para cero polvo en el ambiente",
    "Entrega de garantía por escrito y guía de cuidados para cada cliente",
  ],
};

export const aboutVision = {
  number: "02",
  title: "Nuestra Visión",
  description:
    "Ser la empresa líder y de mayor confianza en pulido, cristalizado y mantenimiento de pisos en Lima Metropolitana y Callao, destacando por puntualidad, acabados de primer nivel y total transparencia técnica.",
  commitmentsHeader: "HORIZONTE NORMATIVO",
  commitments: [
    "Mantenimiento para empresas por sectores y en horarios de baja afluencia",
    "Estandarización de procesos con equipo técnico propio y empresa formal",
  ],
};

export const substrateHighlights = [
  {
    category: "Mármoles y Granitos",
    treatment: "Pulido Diamantado y Cristalizado Espejo",
    image: "/general/piso-marmol.webp",
  },
  {
    category: "Terrazos y Concretos",
    treatment: "Empastado de Poros y Restauración",
    image: "/general/piso-terrazo.jpg",
  },
];
