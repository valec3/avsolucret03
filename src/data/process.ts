import { ShieldCheck, Layers, Paintbrush, Award, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "1",
    icon: ShieldCheck,
    title: "Evaluamos y protegemos",
    description:
      "Identificamos el tipo de piedra y su estado. Hacemos una prueba en zona poco visible que usted aprueba antes de continuar. Cubrimos zócalos, puertas y mobiliario.",
    tag: "DIAGNÓSTICO Y PROTECCIÓN",
  },
  {
    number: "2",
    icon: Layers,
    title: "Diamantado progresivo",
    description:
      "Discos de diamante de grano grueso a fino. Los primeros emparejan y quitan rayas hondas; los últimos afinan hasta que aparece el brillo. En húmedo y con aspiración.",
    tag: "EN HÚMEDO Y CON ASPIRACIÓN",
  },
  {
    number: "3",
    icon: Paintbrush,
    title: "Empastado, si corresponde",
    description:
      "En mosaicos, terrazo y concreto rellenamos los poros con pasta del color de la loseta y dejamos curar antes de seguir puliendo.",
    tag: "RELLENO DE POROS",
  },
  {
    number: "4",
    icon: Award,
    title: "Acabado según el plan",
    description:
      "Encerado, cristalizado o vitrificado. Al entregar dejamos una guía de cuidados con los plazos y los productos que debe y no debe usar.",
    tag: "GUÍA DE CUIDADOS INCLUIDA",
  },
];
