import { Shield, Award, FileCheck2, Leaf, type LucideIcon } from "lucide-react";

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
    year: "2014",
    tag: "FUNDACIÓN EN LIMA",
    description:
      "Iniciamos operaciones introduciendo el desbaste con copas de diamante importadas en proyectos residenciales de Miraflores y San Isidro.",
  },
  {
    year: "2018",
    tag: "ESPECIALIZACIÓN CLÍNICA Y MINERA",
    description:
      "Incorporación de aspiración ciclónica HEPA industrial de grado clínico. Los trabajos de pulido pasan a ejecutarse sin desalojar inmuebles ni manchar mobiliario.",
  },
  {
    year: "+150,000 m²",
    tag: "HITO DE METRAJE",
    description:
      "Alcanzamos más de cien mil metros cuadrados intervenidos entre terrazo veneciano patrimonial, mármol travertino y áreas de concreto masivo industrial.",
  },
  {
    year: "2024",
    tag: "LIDERAZGO CORPORATIVO",
    description:
      "Consolidación como la contratista técnica predilecta para estudios de arquitectura, retail premium, clubes sociales y sedes bancarias en el Perú.",
  },
];

export const guarantees: GuaranteeItem[] = [
  {
    icon: Shield,
    title: "Protocolo Cero Polvo",
    subtitle: "FILTRADO HEPA CLASE M",
    desc: "Turbinas ciclónicas con microfiltros HEPA acopladas directamente a las bocas de desbaste. Cero polvo técnico suspendido en obra.",
    check: "Seguro para habitar",
  },
  {
    icon: FileCheck2,
    title: "Seguro SCTR al Día",
    subtitle: "CONFORMIDAD LABORAL",
    desc: "El 100% de nuestros operadores cuenta con póliza SCTR (Salud y Pensión) vigente, EPP certificado y exámenes médicos para faenas corporativas.",
    check: "Habilitación inmediata",
  },
  {
    icon: Award,
    title: "Garantía Escrita 5 Años",
    subtitle: "RESPALDO CONTRACTUAL",
    desc: "Certificado de garantía respaldado por factura y contrato. Garantizamos la fijación nanotecnológica y la no delaminación de poros.",
    check: "Acta de Conformidad",
  },
  {
    icon: Leaf,
    title: "Química LEED®",
    subtitle: "CERTIFICACIÓN ECOLÓGICA",
    desc: "Formulaciones de densificación y cristalizado acuoso de nulo olor y bajo VOC, compatibles con créditos de certificación LEED.",
    check: "100% inocuo para la salud",
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    step: "01",
    title: "Diagnóstico Petrográfico",
    desc: "Evaluamos la porosidad, carbonatación y micro-fisuras del pavimento existente para seleccionar la matriz de resina adecuada.",
  },
  {
    step: "02",
    title: "Secuencia Gradual Pro",
    desc: "Pasos metódicos desde grano grueso metálico a híbrido y pads resinados 3000 para conseguir brillo natural cerámico sin cera.",
  },
  {
    step: "03",
    title: "Sellado Hídro-Óleo Fugante",
    desc: "Impregnación molecular no ocluyente: repele aceites, vinos, cafés y humedad sin alterar la textura respirable del suelo mineral.",
  },
];

export const aboutMission = {
  number: "01",
  title: "Nuestra Misión",
  description:
    "Transformar superficies degradadas en obras arquitectónicas de máxima reflectividad y durabilidad con procesos sustentables y libres de polvo tóxico, asegurando espacios habitables más limpios e higiénicos.",
  commitmentsHeader: "COMPROMISOS OPERATIVOS",
  commitments: [
    "Durabilidad de pulido profundo sin adición de ceras",
    "Eliminación definitiva de capas de micro-amarilleo",
  ],
};

export const aboutVision = {
  number: "02",
  title: "Nuestra Visión",
  description:
    "Ser el referente indiscutible en restauración y pulido diamantado en el Perú, combinando artesanía de precisión y bioseguridad industrial, reconocidos por prolongar la vida útil de los pavimentos de lujo hasta por medio siglo.",
  commitmentsHeader: "HORIZONTE NORMATIVO",
  commitments: [
    "Mantenimiento preventivo planificado sin cerrar sedes",
    "Estandarización técnica de cuadrilla bajo supervisión de ingeniería CIP",
  ],
};

export const substrateHighlights = [
  {
    category: "Mármoles y Calizas",
    treatment: "Cristalización Termoquímica sin Ácidos",
    image: "/general/piso-marmol.webp",
  },
  {
    category: "Terrazos y Granitos",
    treatment: "Desbastado Plano y Sellado Silícico",
    image: "/general/piso-terrazo.jpg",
  },
];
