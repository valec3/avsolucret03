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
  { id: "residencial", label: "Residencial" },
  { id: "patrimonial", label: "Terrazo y Mosaicos" },
  { id: "corporativo", label: "Comercial y Oficinas" },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Sala con Vista Panorámica",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "RESIDENCIAL",
    material: "Piso de Mármol Crema",
    area: "Área social y mampara",
    challenge: "Pérdida de brillo por tránsito y luz natural constante en zona de mampara.",
    solution: "Diamantado progresivo en húmedo con aspiración y cristalizado antideslizante.",
    glossUnits: "Brillo Espejo",
    image: "/gallery/cristalizado-marmol-penthouse-vista-panoramica.jpg",
  },
  {
    id: "p2",
    title: "Terrazo Veneciano con Diseño de Olas",
    district: "Lima Metropolitana",
    category: "patrimonial",
    categoryLabel: "TERRAZO Y MOSAICOS",
    material: "Terrazo Veneciano Bicolor",
    area: "Pasillo y distribución",
    challenge: "Desniveles entre juntas y opacidad en el diseño artesanal ondulado.",
    solution: "Desbaste progresivo con diamantes, sellado de poros y cristalizado protector.",
    glossUnits: "Reflejo Nítido",
    image: "/gallery/restauracion-terrazo-veneciano-diseno-olas.jpg",
  },
  {
    id: "p3",
    title: "Pasos de Escalera y Descansos",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "RESIDENCIAL",
    material: "Mármol Travertino",
    area: "Gradas y descansos",
    challenge: "Poros abiertos por desgaste de uso y restos de cera vieja acumulada en esquinas.",
    solution: "Empastado de cavidades, afinado mecánico diamantado y acabado semi-brillo.",
    glossUnits: "Acabado Suave",
    image: "/gallery/pulido-diamantado-escalera-marmol-travertino.jpg",
  },
  {
    id: "p4",
    title: "Tablero de Isla en Acabado Leather",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "TABLEROS Y ENCIMERAS",
    material: "Granito Negro Leather",
    area: "Tablero de cocina",
    challenge: "Absorción de grasas, marcas de humedad y pérdida de textura original.",
    solution: "Limpieza profunda de poro, sellado hidrofugante/oleofóbico y realce de textura satinada.",
    glossUnits: "Satinado Leather",
    image: "/gallery/pulido-sellado-tablero-granito-leather.jpg",
  },
  {
    id: "p5",
    title: "Piso Damero en Local Comercial",
    district: "Lima Metropolitana",
    category: "corporativo",
    categoryLabel: "COMERCIAL Y OFICINAS",
    material: "Losetas de Concreto / Terrazo Damero",
    area: "Salón principal",
    challenge: "Tránsito continuo de calzado, acumulación de grasa y desniveles entre piezas.",
    solution: "Pulido diamantado en húmedo sin detener la atención del local y cristalizado de 2 capas.",
    glossUnits: "Antideslizante",
    image: "/gallery/mantenimiento-pisos-empresas-damero-restaurante.jpg",
  },
  {
    id: "p6",
    title: "Piso de Mármol Blanco Veteado",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "RESIDENCIAL",
    material: "Mármol Blanco",
    area: "Ambiente principal",
    challenge: "Rayas superficiales de arrastre de muebles y reflejo desparejo.",
    solution: "Secuencia diamantada completa desde grano de desbaste hasta pulido fino.",
    glossUnits: "Brillo Espejo",
    image: "/gallery/pulido-diamantado-marmol-blanco-carrara.jpg",
  },
  {
    id: "p7",
    title: "Piso Exterior en Mosaicos",
    district: "Lima Metropolitana",
    category: "patrimonial",
    categoryLabel: "TERRAZO Y MOSAICOS",
    material: "Mosaicos Empastados",
    area: "Patio / Terraza",
    challenge: "Pérdida de intensidad en los colores de la pasta y suciedad adherida por intemperie.",
    solution: "Pulido diamantado y cristalizado para recuperar el tono original de la pasta y sellar la superficie.",
    glossUnits: "Tono Realzado",
    image: "/gallery/vitrificado-sellado-mosaicos-decorativos-terraza.jpg",
  },
  {
    id: "p8",
    title: "Hall de Ingreso en Loseta Damero",
    district: "Lima Metropolitana",
    category: "corporativo",
    categoryLabel: "COMERCIAL Y OFICINAS",
    material: "Terrazo / Loseta Damero",
    area: "Ingreso peatonal y escalera",
    challenge: "Opacidad en la ruta de mayor circulación peatonal y pérdida de brillo.",
    solution: "Pulido progresivo con máquina rotativa y aplicación de cristalizador endurecedor.",
    glossUnits: "Brillo Alto",
    image: "/gallery/pulido-diamantado-damero-terrazo-hall.jpg",
  },
  {
    id: "p9",
    title: "Piso Damero Claro y Oscuro",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "RESIDENCIAL",
    material: "Losetas Bicolor Pulidas",
    area: "Sala con ventanal",
    challenge: "Reflejo opaco y capas de ceras viejas amarillentas superpuestas.",
    solution: "Decapado mecánico total de ceras y cristalizado directo sobre el mineral.",
    glossUnits: "Reflejo Espejo",
    image: "/gallery/cristalizado-piso-damero-frente-al-mar.jpg",
  },
  {
    id: "p10",
    title: "Piso de Piedra Natural Veteada",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "RESIDENCIAL",
    material: "Piedra Natural / Mármol",
    area: "Zona social y barandales",
    challenge: "Desgaste y pérdida de contraste en las vetas naturales de la roca.",
    solution: "Pulido diamantado al agua y cristalizado para realzar el contraste natural.",
    glossUnits: "Brillo Profundo",
    image: "/gallery/pulido-diamantado-marmol-exotico-veteado.jpg",
  },
  {
    id: "p11",
    title: "Descanso de Escalera en Mármol",
    district: "Lima Metropolitana",
    category: "residencial",
    categoryLabel: "RESIDENCIAL",
    material: "Mármol Travertino Claro",
    area: "Descanso de escalera",
    challenge: "Desgaste focalizado en zona de giro y micro-poros visibles.",
    solution: "Empastado al tono de la piedra y afinado progresivo sin polvo en el ambiente.",
    glossUnits: "Semi-Brillo",
    image: "/gallery/cristalizado-espejo-descanso-escalera-marmol.jpg",
  },
  {
    id: "p12",
    title: "Piso de Terrazo Veneciano Granito",
    district: "Lima Metropolitana",
    category: "patrimonial",
    categoryLabel: "TERRAZO Y MOSAICOS",
    material: "Terrazo Granito Fino",
    area: "Sala comedor",
    challenge: "Superficie áspera al tacto y pérdida del reflejo original de la piedra.",
    solution: "Desbaste diamantado para nivelar y cristalizado para sellar el poro y lograr acabado de alto brillo.",
    glossUnits: "Brillo Alto",
    image: "/gallery/restauracion-terrazo-veneciano-grano-fino.png",
  },
];

export const clientReviews: ClientReviewItem[] = [
  {
    name: "Arq. María González",
    role: "Supervisora de Obras",
    project: "Piso de Mármol en San Isidro",
    content:
      "Excelente trabajo de AV Solucret. Cumplieron con el proceso de pulido en húmedo con aspiración y dejaron el mármol con brillo espejo sin levantar polvo en el departamento.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Administración de Inmuebles",
    project: "Piso Damero en Edificio Comercial",
    content:
      "Coordinamos el servicio para realizarlo por sectores y en horarios que no afectaran el tránsito de personas. El piso recuperó el brillo y nos entregaron garantía por escrito.",
    rating: 5,
  },
  {
    name: "Ana Lucía Torres",
    role: "Propietaria Residencial",
    project: "Mármol en Pasillos y Sala",
    content:
      "Teníamos el mármol opaco por ceras viejas. Hicieron la prueba de brillo previa, retiraron las capas de cera y el cristalizado quedó parejo y antideslizante.",
    rating: 5,
  },
];
