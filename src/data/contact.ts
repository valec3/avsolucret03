import { ShieldCheck, FileCheck2, Lock, type LucideIcon } from "lucide-react";

export const limaDistricts = [
  "San Isidro",
  "Miraflores",
  "Santiago de Surco",
  "San Borja",
  "La Molina",
  "Barranco",
  "Magdalena del Mar",
  "Jesús María",
  "San Miguel",
  "Pueblo Libre",
  "Lince",
  "Surquillo",
  "Callao / Bellavista",
  "Chorrillos",
  "Ate / Vitarte",
  "Lurín / Pachacamac",
  "Lima Norte (Los Olivos, Independencia)",
  "Asia / Playas del Sur",
  "Otra Zona / Provincia",
];

export const mineralSurfaces = [
  "Mármol (Carrara, Marfil, Travertino)",
  "Terrazo Veneciano Tradicional",
  "Concreto Pulido / Superflat Industrial",
  "Granito Natural",
  "Lajas y Piedras Rústicas",
  "Porcelanato de Alto Tránsito",
  "Mosaicos Empastados Rossello",
];

export interface ContactRoadmapStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  benefit: string;
}

export const contactRoadmap: ContactRoadmapStep[] = [
  {
    step: "01",
    title: "Diagnóstico Inicial",
    subtitle: "POR WHATSAPP EN 15 MIN",
    description:
      "Envianos fotos o vídeos de tu piso junto con el metraje aproximado. Un ingeniero evalúa el desgaste y te brinda un rango técnico preliminar inmediato.",
    benefit: "Respuesta en <15 min",
  },
  {
    step: "02",
    title: "Visita In Situ y Muestra Gratuita",
    subtitle: "SIN COSTO NI COMPROMISO",
    description:
      "Coordinamos una inspección presencial en tu inmueble. Medimos la planimetría, revisamos juntas y realizamos una prueba de brillo real sobre una baldosa.",
    benefit: "Prueba de brillo sin costo",
  },
  {
    step: "03",
    title: "Propuesta Formal y Garantía",
    subtitle: "PRESUPUESTO CERRADO Y GARANTIZADO",
    description:
      "Te entregamos una cotización formal detallada con cronograma de obra, protocolo diamantado específico y certificado de garantía escrita por hasta 5 años.",
    benefit: "Garantía formal por escrito",
  },
];

export interface InstitutionalGuarantee {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const institutionalGuarantees: InstitutionalGuarantee[] = [
  {
    icon: ShieldCheck,
    title: "Personal Asegurado con SCTR",
    desc: "100% de operarios con póliza de salud y pensión al día, EPP certificado y habilitación para faenas residenciales y corporativas.",
  },
  {
    icon: FileCheck2,
    title: "Contrato y Facturación Legal",
    desc: "Empresa constituida con RUC formal, actas de entrega técnica y comprobantes de pago de ley.",
  },
  {
    icon: Lock,
    title: "Privacidad y Confidencialidad",
    desc: "Tus datos e imágenes de obra son tratados bajo estricta reserva y cumplimiento de la Ley N° 29733 de Protección de Datos Personales.",
  },
];

export const contactHeroData = {
  badge: "ATENCIÓN EN TODO LIMA METROPOLITANA Y PROVINCIAS",
  titlePrefix: "¿LISTO PARA TRANSFORMAR",
  titleHighlight: "TUS SUPERFICIES?",
  subtitle:
    "Respuesta promedio en menos de 15 minutos. Envíanos fotos o metraje de tu piso para una evaluación petrográfica inicial y presupuesto formal preliminar sin compromiso.",
};
