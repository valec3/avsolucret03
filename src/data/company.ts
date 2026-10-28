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
];

export const companyData = {
  name: "AV Solucret",
  brandName: "AV Solucret",
  legalName: "MV Arquitectura & Construcción S.A.C.",
  tagline: "Recubrimientos y cristalizados de superficies",
  phone: "961 801 932",
  phoneDisplay: "961 801 932",
  email: "ventas@avsolucret.com",
  office: "Jr. Aguarico 424, of. 210 · Breña, Lima",
  address: "Jr. Aguarico 424, of. 210, Breña, Lima",
  postalCode: "15082",
  city: "Lima",
  country: "Perú",
  countryCode: "PE",
  ruc: "20602100198",
  operatingSince: "2022",
  yearsOfOperation: "4",
  hours: "Lun - Sáb: 7:00 AM - 7:00 PM",
  openingHoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  geo: {
    latitude: -12.056944,
    longitude: -77.051944,
  },
  technicalTeam: {
    title: "Equipo Técnico AV Solucret",
    role: "Dirección Técnica Especializada",
    description: "Equipo técnico propio y empresa formal.",
  },
  engineer: {
    name: "Equipo Técnico AV Solucret",
    role: "Dirección Técnica Especializada",
  },
  whatsappUrl:
    "https://wa.me/51961801932?text=Hola%20AV%20Solucret,%20deseo%20cotizar%20el%20mantenimiento%20de%20mis%20pisos.",
  social: {
    facebook: "https://www.facebook.com/share/17UfYYCQmq/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@avsolucret",
    instagram: "https://www.instagram.com/av_solucret",
  },
  instagramHandle: "@av_solucret",
  coverageDistricts,
  coverageText:
    "Atendemos todo Lima Metropolitana y Callao, en viviendas, edificios, oficinas, hoteles y locales comerciales.",
  districtsCoverage: [
    "Lima Metropolitana",
    "Callao",
    ...coverageDistricts,
  ],
  guaranteeText: "Garantía por escrito y guía de cuidados específica",
  valueProps: [
    {
      title: "Cuatro años de operación",
      description:
        "Desde 2022 atendiendo viviendas, edificios y empresas en Lima, con equipo técnico propio y empresa formal.",
    },
    {
      title: "Trabajamos sin polvo",
      description:
        "Pulido en húmedo con aspiración. No hay que desocupar la vivienda ni cubrir todo el mobiliario.",
    },
    {
      title: "Garantía por escrito",
      description:
        "Cada servicio se entrega con su garantía y una guía de cuidados específica para el material tratado.",
    },
    {
      title: "Sin detener su operación",
      description:
        "En empresas trabajamos por sectores y en horarios de baja afluencia. Cada tramo queda transitable al terminar la jornada.",
    },
  ],
  closingCta: {
    residential: {
      title: "Residencial",
      text: "Evaluación técnica ágil. Mándenos una foto o metraje de su piso por WhatsApp y le brindamos una orientación el mismo día.",
      cta: "Consultar por WhatsApp",
    },
    companies: {
      title: "Empresas",
      text: "Diagnóstico técnico especializado. Visitamos sus instalaciones y elaboramos una propuesta formal con metraje, plan de intervención y especificaciones.",
      cta: "Solicitar diagnóstico técnico",
    },
  },
};
