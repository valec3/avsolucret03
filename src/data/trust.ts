import { Building2, Home, Hotel, ShieldCheck, Factory, type LucideIcon } from "lucide-react";

export interface SectorItem {
  icon: LucideIcon;
  label: string;
}

export const trustSectors: SectorItem[] = [
  { icon: Home, label: "Residencias y Condominios de Alto Valor" },
  { icon: Building2, label: "Edificios Corporativos y Embajadas" },
  { icon: Hotel, label: "Hoteles 5 Estrellas y Restaurantes" },
  { icon: ShieldCheck, label: "Clínicas y Laboratorios de Grado HEPA" },
  { icon: Factory, label: "Centros Logísticos y Showrooms Comerciales" },
];
