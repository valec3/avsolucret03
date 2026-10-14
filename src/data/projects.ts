export interface Project {
  id: string;
  title: string;
  district: string;
  category: "residencial" | "patrimonial" | "corporativo" | "industrial";
  categoryLabel: string;
  material: string;
  area: string;
  challenge: string;
  solution: string;
  glossUnits: string;
  image: string;
}

export interface ClientReviewItem {
  name: string;
  role: string;
  project: string;
  content: string;
  rating: number;
}

export const projectCategories = [
  { id: "all", label: "Todos los Trabajos" },
  { id: "residencial", label: "Residencial Premium" },
  { id: "patrimonial", label: "Patrimonial & Histórico" },
  { id: "corporativo", label: "Corporativo & Hospitality" },
  { id: "industrial", label: "Industrial & Logístico" },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Penthouse Pezet",
    district: "San Isidro, Lima",
    category: "residencial",
    categoryLabel: "RESIDENCIAL PREMIUM",
    material: "Mármol Blanco Carrara",
    area: "145 m²",
    challenge: "Manchas ácidas de cítricos, microrayaduras de tráfico y pérdida severa de reflectancia.",
    solution: "Desbaste progresivo 7 fases con diamantes resinados hasta grano 3000 y sellado AV-SHIELD™ Ultra.",
    glossUnits: "94 GU (Espejo Puro)",
    image: "/general/piso-marmol.webp",
  },
  {
    id: "p2",
    title: "Lobby Hotel Boutique",
    district: "Miraflores, Lima",
    category: "corporativo",
    categoryLabel: "HOSPITALITY",
    material: "Terrazo Veneciano Tradicional",
    area: "280 m²",
    challenge: "Fisuras históricas por asentamiento y amarilleo por acumulación de capas de cera vieja.",
    solution: "Alineación de cejas, inyección de resina epóxica con pigmento mineral y cristalizado térmico continuo.",
    glossUnits: "88 GU",
    image: "/general/piso-terrazo.jpg",
  },
  {
    id: "p3",
    title: "Casona República de Panamá",
    district: "Barranco, Lima",
    category: "patrimonial",
    categoryLabel: "PATRIMONIO HISTÓRICO",
    material: "Mosaico Empastado y Mármol Travertino",
    area: "190 m²",
    challenge: "Poro abierto con alta eflorescencia salina por proximidad costera y desprendimientos.",
    solution: "Micro-desbaste no invasivo, decapado alcalino neutro y consolidación con nanopartículas de silicato.",
    glossUnits: "85 GU (Satinado Natural)",
    image: "/gallery/pulido-diamantado-de-marmol-travertino.jpeg",
  },
  {
    id: "p4",
    title: "Centro Logístico Megacentro",
    district: "Lurín, Lima",
    category: "industrial",
    categoryLabel: "INDUSTRIAL & LOGÍSTICA",
    material: "Concreto Arquitectónico Superflat",
    area: "1,200 m²",
    challenge: "Polvillo de desprendimiento de concreto que dañaba sensores de montacargas y alta fricción.",
    solution: "Desbastado planetario 380V, densificación con silicato de litio líquido y sellado ocluyente de alta resistencia.",
    glossUnits: "72 GU",
    image: "/general/piso-concreto.jpg",
  },
  {
    id: "p5",
    title: "Residencia Las Casuarinas",
    district: "Santiago de Surco, Lima",
    category: "residencial",
    categoryLabel: "RESIDENCIAL PREMIUM",
    material: "Mármol Crema Marfil Español",
    area: "210 m²",
    challenge: "Opacidad generalizada en zona social y rayas profundas por arrastre de muebles.",
    solution: "Eliminación de rayas con copas híbridas grano 200/400, afinado diamantado y brillo termoquímico.",
    glossUnits: "92 GU (Espejo Puro)",
    image: "/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
  },
  {
    id: "p6",
    title: "Showroom Automotriz",
    district: "Surquillo / San Borja, Lima",
    category: "corporativo",
    categoryLabel: "RETAIL & SHOWROOM",
    material: "Granito Negro San Gabriel",
    area: "340 m²",
    challenge: "Manchas de aceites y derrames de taller con pérdida de contraste en la piedra.",
    solution: "Desengrasado alcalino profundo, pulido al agua con ligante diamantado y sellador hidrófugo-oleofóbico.",
    glossUnits: "90 GU",
    image: "/general/piso-granito.webp",
  },
];

export const clientReviews: ClientReviewItem[] = [
  {
    name: "Arq. María González",
    role: "Directora de Obra • Estudio González & Asociados",
    project: "Restauración de Mármol Carrara en San Isidro",
    content:
      "La precisión milimétrica de AV SOLUCRET es inigualable en Lima. Lograron un acabado espejo puro en 145 m² sin generar una sola mota de polvo sobre las paredes recién pintadas. Son nuestro contratista de cabecera.",
    rating: 5,
  },
  {
    name: "Ing. Carlos Mendoza",
    role: "Administrador General • Edificio Torre Empresarial",
    project: "Terrazo Veneciano en Lobby Principal",
    content:
      "Intervinieron el lobby de nuestro edificio durante turnos nocturnos sin interrumpir las operaciones bancarias del primer piso. El piso quedó transitable inmediatamente a las 7 AM. Rigor y seriedad absoluta.",
    rating: 5,
  },
  {
    name: "Dra. Ana Lucía Torres",
    role: "Propietaria • Residencia en Casuarinas",
    project: "Mármol Crema Marfil 210 m²",
    content:
      "Habíamos probado con varias empresas de limpieza que solo aplicaban ceras que se ponían amarillas a las dos semanas. AV SOLUCRET le devolvió el brillo natural de fábrica con diamantes. Excelente atención del Ing. Vidal.",
    rating: 5,
  },
];
