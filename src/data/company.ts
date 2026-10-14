export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Trabajos", href: "/trabajos" },
  { name: "Contacto", href: "/contacto" },
  { name: "Blog", href: "/blog" },
];

export const footerNavItems: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Trabajos Realizados", href: "/trabajos" },
  { name: "Contacto y Presupuesto", href: "/contacto" },
  { name: "Blog & Academia Técnica", href: "/blog" },
];

export const coverageDistricts: string[] = [
  "Miraflores",
  "San Isidro",
  "Santiago de Surco",
  "La Molina",
  "San Borja",
  "Barranco",
  "Magdalena",
  "Callao Industrial",
];

export const companyData = {
  name: "AV SOLUCRET",
  legalName: "AV SOLUCRET S.A.C.",
  tagline: "INGENIERÍA DE SUPERFICIES",
  phone: "961 801 932",
  phoneDisplay: "961 801 932",
  email: "proyectos@avsolucret.pe",
  address: "Servicio Técnico In Situ a Domicilio y Obra, Lima Metropolitana",
  postalCode: "15001",
  city: "Lima",
  country: "Perú",
  countryCode: "PE",
  ruc: "20608549102",
  hours: "Lun - Sáb: 7:00 AM - 7:00 PM",
  openingHoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  geo: {
    latitude: -12.046374,
    longitude: -77.042793,
  },
  engineer: {
    name: "Ing. Alejandro Vidal",
    role: "Gerente Técnico",
    cip: "CIP Reg. 184652",
    colegio: "Colegio de Ingenieros del Perú",
  },
  whatsappUrl:
    "https://wa.me/51961801932?text=Hola%20AV%20SOLUCRET,%20deseo%20coordinar%20una%20visita%20t%C3%A9cnica%20gratuita%20para%20mis%20pisos.",
  social: {
    facebook: "https://www.facebook.com/share/17UfYYCQmq/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@avsolucret",
    instagram: "https://www.instagram.com/av_solucret",
  },
  coverageDistricts,
  districtsCoverage: [
    "Lima Metropolitana",
    "San Isidro",
    "Miraflores",
    "Santiago de Surco",
    "San Borja",
    "La Molina",
    "Barranco",
    "Lurín",
    "Callao",
  ],
  guaranteeText: "Garantía Escrita y Personal con Seguro SCTR",
};
