import { Droplets, Sun, Shield, Layers, type LucideIcon } from "lucide-react";

export interface ProductSpec {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const productSpecs: ProductSpec[] = [
  {
    icon: Droplets,
    title: "100% Permeable al vapor de agua",
    desc: "Permite que la piedra respire sin retener humedad atrapada.",
  },
  {
    icon: Sun,
    title: "Inmune a la radiación UV",
    desc: "No amarillea con el sol ni genera películas plásticas que se descascaran.",
  },
  {
    icon: Shield,
    title: "Anti-manchas de aceite y cocina",
    desc: "Repele grasas, café, vino tinto y ácidos cítricos domésticos.",
  },
  {
    icon: Layers,
    title: "Compatible con pulido diamantado",
    desc: "Se integra a nivel atómico sin alterar el brillo espejo alcanzado.",
  },
];

export const productData = {
  badge: "GRADO ALIMENTARIO • 100% COMPLIANT",
  name: "AV-SHIELD™ ULTRA",
  category: "NANO-PROTECCIÓN LIQUIDBLOCK",
  sectionLabel: "INGENIERÍA Y NANOTECNOLOGÍA APLICADA",
  title: "Sellador Profesional Nanométrico para Piedra y Concreto",
  description:
    "Formulado exclusivamente para el clima húmedo de la costa limeña. Penetra los capilares minerales hasta 8mm de profundidad, generando un escudo hidrofóbico y oleofóbico que repele aceites, vinos, cafés y salinidad marina sin alterar la textura natural ni generar películas plásticas artificiales.",
  inclusionBadge: "INCLUIDO EN PROTOCOLOS PREMIUM • SIN COSTO ADICIONAL",
  ctaText: "Solicitar Aplicación en Mi Proyecto",
  ctaWhatsAppMessage:
    "Hola AV SOLUCRET, me interesa aplicar la nano-protección AV-SHIELD™ Ultra en mis pisos de mármol/concreto. Deseo coordinar diagnóstico in situ.",
};
