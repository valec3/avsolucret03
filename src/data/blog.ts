export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryKey: "marmol" | "porcelanato" | "lajas" | "terrazo" | "tecnologia" | "concreto" | "patologia";
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  label: string;
}

export const blogCategories: BlogCategory[] = [
  { id: "all", label: "Todos los Artículos" },
  { id: "marmol", label: "Mármol & Piedra Noble" },
  { id: "terrazo", label: "Terrazo Patrimonial" },
  { id: "tecnologia", label: "Tecnología Diamantada" },
  { id: "concreto", label: "Concreto Industrial" },
  { id: "patologia", label: "Patología & Rescate" },
  { id: "porcelanato", label: "Porcelanato & Cerámicos" },
  { id: "lajas", label: "Piedras Rústicas & Lajas" },
];

export const articles: Article[] = [
  {
    slug: "/blog/cuidados-marmol",
    title: "Cuidados Preventivos del Mármol: La Guía Definitiva contra el Ataque Ácido",
    excerpt:
      "Aprenda por qué el vinagre y los limpiadores con pH ácido corroen el carbonato de calcio del mármol, y cómo protegerlo permanentemente mediante pulido diamantado y sellado nanométrico.",
    category: "Mármol & Piedra Noble",
    categoryKey: "marmol",
    readTime: "5 min de lectura",
    date: "Octubre 2026",
    author: "Ing. Alejandro Vidal (CIP)",
    image: "/blog/01-blog.png",
    featured: true,
  },
  {
    slug: "/blog/cristalizado-vs-pulido-diamantado-diferencias",
    title: "Cristalizado Químico vs. Pulido Diamantado: Diferencias, Mitos y Cuándo Usar Cada Uno",
    excerpt:
      "¿Tu piso necesita ácido fluorosilicato o corte mecánico? Desmitificamos la vitrificación: por qué el cristalizado requiere base plana previa y no reemplaza el desbaste.",
    category: "Tecnología Diamantada",
    categoryKey: "tecnologia",
    readTime: "6 min de lectura",
    date: "Octubre 2026",
    author: "Ing. Alejandro Vidal (CIP)",
    image: "/gallery/pulido-diamantado-vitrificado.jpeg",
  },
  {
    slug: "/blog/peligro-acido-muriatico-marmol-terrazo-reparacion",
    title: "Por Qué NUNCA Debes Usar Ácido Muriático en Mármol o Terrazo: Cómo Reparar el Daño Químico",
    excerpt:
      "El ácido clorhídrico disuelve el carbonato de calcio provocando manchas blancas rugosas. Conozca el protocolo de rescate mediante desbaste y repulido diamantado de emergencia.",
    category: "Patología & Rescate",
    categoryKey: "patologia",
    readTime: "5 min de lectura",
    date: "Octubre 2026",
    author: "Ing. Alejandro Vidal (CIP)",
    image: "/general/piso-marmol.webp",
  },
  {
    slug: "/blog/concreto-pulido-industrial-superflat-lima",
    title: "Concreto Pulido y Densificado con Litio en Lima: Guía de Pisos Superflat para Arquitectura y Logística",
    excerpt:
      "Elimine el desprendimiento de polvo de cemento (dusting) con silicato de litio y pulido mecánico CSDA. Máxima reflectancia y durabilidad sin capas epóxicas que se descascaran.",
    category: "Concreto Industrial",
    categoryKey: "concreto",
    readTime: "7 min de lectura",
    date: "Octubre 2026",
    author: "Ing. Alejandro Vidal (CIP)",
    image: "/general/piso-concreto.jpg",
  },
  {
    slug: "/blog/pulido-diamantado-vs-ceras",
    title: "Pulido Diamantado vs. Ceras Tradicionales: Por Qué la Cera Arruina los Pisos en Lima",
    excerpt:
      "La cera crea una película plástica que atrapa suciedad y amarillea con el calor. El diamantado mecánico regenera la propia estructura cristalina de la roca sin añadir químicos que se degraden.",
    category: "Tecnología Diamantada",
    categoryKey: "tecnologia",
    readTime: "6 min de lectura",
    date: "Octubre 2026",
    author: "Ing. Alejandro Vidal (CIP)",
    image: "/gallery/pulido-diamantado-vitrificado.jpeg",
  },
  {
    slug: "/blog/restauracion-terrazo-veneciano-guia",
    title: "Guía Definitiva de Restauración de Terrazo Veneciano: Fisuras, Rejuntado Epóxico y Nivelación",
    excerpt:
      "Aprenda cómo recuperar pisos de terrazo veneciano tradicional en casonas y edificios de Lima. Reparación de microfisuras, integración cromática y brillo cerámico sin ceras.",
    category: "Terrazo Patrimonial",
    categoryKey: "terrazo",
    readTime: "5 min de lectura",
    date: "Octubre 2026",
    author: "AV SOLUCRET LAB",
    image: "/general/piso-terrazo.jpg",
  },
  {
    slug: "/blog/salitre-humedad-pisos-costa-lima",
    title: "El Enemigo Invisible en la Costa de Lima: Cómo Combatir el Salitre y la Humedad",
    excerpt:
      "En distritos como Miraflores, Barranco y San Isidro, la eflorescencia salina es implacable. Descubra cómo lavar químicamente sin ácido muriático y sellar con nanopolímeros AV-SHIELD™ Ultra.",
    category: "Piedras Rústicas & Lajas",
    categoryKey: "lajas",
    readTime: "5 min de lectura",
    date: "Octubre 2026",
    author: "Ing. Alejandro Vidal (CIP)",
    image: "/blog/03-blog.png",
  },
  {
    slug: "/blog/cuidados-porcelanato",
    title: "Manual de Mantenimiento para Porcelanato de Alto Tránsito",
    excerpt:
      "Descubra los errores más comunes de limpieza con detergentes grasosos que opacan el esmalte, técnicas para remover restos de fragua y el protocolo de decapado profundo.",
    category: "Porcelanato & Cerámicos",
    categoryKey: "porcelanato",
    readTime: "4 min de lectura",
    date: "Septiembre 2026",
    author: "Equipo Técnico AV SOLUCRET",
    image: "/blog/02-blog.png",
  },
  {
    slug: "/blog/cuidados-lajas",
    title: "Tratamiento de Lajas y Piedras Rústicas: Control de Salitre y Humedad Costera",
    excerpt:
      "La brisa marina de Lima acelera la eflorescencia salina en piedras exteriores. Conozca el proceso de desincrustación química neutra y sellado hidrófugo sin alterar el tono mate original.",
    category: "Piedras Rústicas & Lajas",
    categoryKey: "lajas",
    readTime: "6 min de lectura",
    date: "Septiembre 2026",
    author: "Equipo Técnico AV SOLUCRET",
    image: "/gallery/decapado-y-sellado-de-lajas.jpeg",
  },
];
