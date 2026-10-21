import { ShieldCheck, FileCheck2, Lock, type LucideIcon } from "lucide-react";

export const limaDistricts = [
  "San Isidro",
  "Miraflores",
  "San Borja",
  "Surco",
  "La Molina",
  "Barranco",
  "Magdalena",
  "San Miguel",
  "Pueblo Libre",
  "Lince",
  "Jesús María",
  "Breña",
  "Cercado de Lima",
  "La Victoria",
  "San Luis",
  "Ate",
  "Santa Anita",
  "Los Olivos",
  "San Martín de Porres",
  "Callao",
  "Otro distrito de Lima Metropolitana",
];

export const mineralSurfaces = [
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
    title: "Contacto y Consulta",
    subtitle: "POR WHATSAPP EN EL DÍA",
    description:
      "Envíenos fotos o el metraje de su piso por WhatsApp. Le brindamos una orientación técnica el mismo día.",
    benefit: "Respuesta en el día",
  },
  {
    step: "02",
    title: "Evaluación y Prueba In Situ",
    subtitle: "DIAGNÓSTICO TÉCNICO IN SITU",
    description:
      "Identificamos el tipo de piedra y su estado. Hacemos una prueba en zona poco visible que usted aprueba antes de continuar.",
    benefit: "Prueba previa técnica",
  },
  {
    step: "03",
    title: "Propuesta Formal y Garantía",
    subtitle: "PRESUPUESTO CERRADO Y GARANTÍA ESCRITA",
    description:
      "Entregamos propuesta detallada y al culminar el trabajo dejamos garantía por escrito y guía de cuidados específica.",
    benefit: "Garantía por escrito",
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
    title: "Trabajamos sin polvo",
    desc: "Pulido en húmedo con aspiración continua. No hay que desocupar la vivienda ni cubrir todo el mobiliario.",
  },
  {
    icon: FileCheck2,
    title: "Empresa formal y factura de ley",
    desc: "MV Arquitectura & Construcción S.A.C. (RUC 20602100198) con equipo técnico propio y garantía por escrito.",
  },
  {
    icon: Lock,
    title: "Sin detener su operación",
    desc: "En empresas trabajamos por sectores y en horarios de baja afluencia. Cada tramo queda transitable al terminar.",
  },
];

export const contactHeroData = {
  badge: "ATENCIÓN EN TODO LIMA METROPOLITANA Y CALLAO",
  titlePrefix: "EVALUACIÓN Y DIAGNÓSTICO",
  titleHighlight: "ESPECIALIZADO",
  subtitle:
    "Para viviendas: mándenos una foto o metraje de su piso por WhatsApp y le brindamos una orientación técnica el mismo día. Para empresas: realizamos inspección técnica en sus instalaciones y entregamos una propuesta integral con metraje, plan de intervención y especificaciones.",
};
