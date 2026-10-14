import { ClipboardCheck, Wrench, Gem, ShieldCheck, CheckCircle, Handshake, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    title: "Evaluación",
    description: "Visitamos tu espacio para evaluar el estado de las superficies y determinar el tratamiento adecuado.",
  },
  {
    icon: Wrench,
    title: "Preparación",
    description: "Preparamos el área de trabajo con los equipos y materiales necesarios para garantizar un proceso limpio.",
  },
  {
    icon: Gem,
    title: "Pulido Diamantado",
    description: "Aplicamos técnicas de pulido con discos diamantados de diferentes granulometrías para restaurar el brillo.",
  },
  {
    icon: ShieldCheck,
    title: "Vitrificado / Sellado",
    description: "Aplicamos productos profesionales para vitrificar o sellar la superficie según sus necesidades.",
  },
  {
    icon: CheckCircle,
    title: "Acabado Final",
    description: "Realizamos los últimos detalles para lograr un acabado perfecto con brillo espejo.",
  },
  {
    icon: Handshake,
    title: "Entrega y Recomendaciones",
    description: "Entregamos el trabajo terminado con recomendaciones de mantenimiento para prolongar los resultados.",
  },
];
