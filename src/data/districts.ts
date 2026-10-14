export interface DistrictCaseStudy {
  title: string;
  substrate: string;
  area: string;
  challenge: string;
  solution: string;
  glossUnits: string;
  image: string;
}

export interface DistrictFaq {
  question: string;
  answer: string;
}

export interface DistrictInfo {
  id: string;
  slug: string; // e.g. "pulido-de-pisos-san-isidro"
  name: string; // "San Isidro"
  title: string; // H1 & SEO Title
  metaDescription: string;
  headline: string;
  subheadline: string;
  targetArchitecture: string; // e.g. "Departamentos de lujo, embajadas y edificios corporativos"
  predominantSubstrates: string[];
  localProblemTitle: string;
  localProblemDesc: string;
  engineeredSolutionTitle: string;
  engineeredSolutionDesc: string;
  caseStudy: DistrictCaseStudy;
  faqs: DistrictFaq[];
  geo: {
    latitude: number;
    longitude: number;
  };
}

export const districtsData: Record<string, DistrictInfo> = {
  "pulido-de-pisos-san-isidro": {
    id: "san-isidro",
    slug: "pulido-de-pisos-san-isidro",
    name: "San Isidro",
    title: "Pulido Diamantado de Pisos en San Isidro | Mármol & Granito sin Polvo",
    metaDescription:
      "Servicio técnico in situ de pulido diamantado y restauración de mármol en San Isidro. Cuadrillas móviles con aspiración HEPA sin polvo para residencias y lobbies corporativos.",
    headline: "Pulido Diamantado de Mármol y Granito en San Isidro",
    subheadline:
      "Intervención técnica de alto estándar para residencias de lujo, embajadas y edificios corporativos. 100% libre de polvo residual mediante aspiración ciclónica HEPA.",
    targetArchitecture: "Penthouse residenciales, lobbies corporativos en El Golf y zonas financieras de San Isidro.",
    predominantSubstrates: ["Mármol Crema Marfil", "Mármol Carrara Blanco", "Granito Negro San Gabriel", "Mármol Botticino"],
    localProblemTitle: "Desgaste Óptico y Daño por Químicos Ácidos en Suelos de Lujo",
    localProblemDesc:
      "En las residencias y recepciones corporativas de San Isidro, el uso prolongado de limpiadores domésticos inadecuados y el alto tránsito en reuniones degradan el carbonato de calcio, produciendo manchas opacas y micro-rayas que las ceras convencionales solo empeoran.",
    engineeredSolutionTitle: "Secuencia Diamantada al Agua y Cristalizado Termoquímico",
    engineeredSolutionDesc:
      "Aplicamos micro-desbaste con discos diamantados resinados de grano 100 a 3000 bajo refrigeración al agua controlada. Aspiración continua Clase M que garantiza paredes y cortinas 100% libres de partículas de polvo. Brillo espejo natural superior a 90 GU.",
    caseStudy: {
      title: "Penthouse en Av. Pezet, San Isidro",
      substrate: "Mármol Crema Marfil Español (160 m²)",
      area: "160 m²",
      challenge: "Pérdida severa de brillo en área de recepción social y ataque ácido por vino y cítricos.",
      solution: "Nivelación con grano 200/400, pulido progresivo en 7 pasos y termocristalizado de alta reflectividad.",
      glossUnits: "92 GU (Espejo Puro)",
      image: "/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
    },
    faqs: [
      {
        question: "¿El trabajo genera polvo que afecte muebles o cuadros en mi departamento de San Isidro?",
        answer:
          "Absolutamente no. Nuestro protocolo trabaja con maquinaria industrial refrigerada al agua combinada con extractores ciclónicos con filtro HEPA. El lodo residual se succiona instantáneamente, dejando el ambiente habitable e impecable.",
      },
      {
        question: "¿Pueden realizar intervenciones nocturnas o en horarios restringidos por juntas de propietarios?",
        answer:
          "Sí. En San Isidro coordinamos con las administraciones de edificios y comités vecinales para operar en horarios autorizados o turnos nocturnos silenciosos para lobbies corporativos.",
      },
    ],
    geo: {
      latitude: -12.0967,
      longitude: -77.0353,
    },
  },

  "pulido-de-pisos-miraflores": {
    id: "miraflores",
    slug: "pulido-de-pisos-miraflores",
    name: "Miraflores",
    title: "Restauración de Terrazo y Mármol en Miraflores | Tratamiento Anti-Salitre",
    metaDescription:
      "Especialistas en restauración de terrazo veneciano y mármol en Miraflores. Eliminación de humedad por capilaridad y vitrificado de pisos in situ con garantía escrita.",
    headline: "Restauración de Terrazo Veneciano y Mármol en Miraflores",
    subheadline:
      "Recuperación patrimonial de pisos clásicos en departamentos frente al mar y malecones miraflorinos. Protección nanotecnológica contra el salitre y la humedad costera.",
    targetArchitecture: "Edificios clásicos de los años 60-80, departamentos en Malecones (Armendáriz, Cisneros) y casonas miraflorinas.",
    predominantSubstrates: ["Terrazo Veneciano Clásico", "Mosaico Granítico", "Mármol Travertino Nacional", "Porcelanatos de Alto Tránsito"],
    localProblemTitle: "Ataque de Salitre, Humedad Marina y Juntas Desniveladas",
    localProblemDesc:
      "La proximidad al Océano Pacífico somete a los pisos de Miraflores a eflorescencia salina constante. En terrazos antiguos, esto provoca desprendimiento de marmolina en juntas y una capa blanquecina opaca que ninguna limpieza superficial logra eliminar.",
    engineeredSolutionTitle: "Desbaste Profundo, Remasillado Polimérico y Barrera Nanométrica",
    engineeredSolutionDesc:
      "Nivelamos cejas y juntas con diamantes metálicos de corte plano. Reparamos fisuras con masilla polimérica tintada al tono exacto de la piedra y aplicamos nuestro sellador transpirable AV-SHIELD™ para bloquear el ascenso capilar del salitre.",
    caseStudy: {
      title: "Departamento Clásico en Malecón 28 de Julio, Miraflores",
      substrate: "Terrazo Veneciano Bicolor (145 m²)",
      area: "145 m²",
      challenge: "Grietas estructurales en juntas de dilatación y opacidad por humedad salina de 25 años.",
      solution: "Apertura y sellado epóxico de juntas, desbaste completo en 5 granos y cristalizado endurecedor con fluorosilicato.",
      glossUnits: "88 GU (Brillo Óptico)",
      image: "/gallery/pulido-diamantado-de-losetas-de-granito-terrazo.jpeg",
    },
    faqs: [
      {
        question: "¿Se puede recuperar un piso de terrazo antiguo en Miraflores que tiene rajaduras profundas?",
        answer:
          "Sí. Retiramos el material degradado, preparamos una mezcla de ligante y grano de mármol del mismo calibre y colorimetría original, y pulimos mecánicamente hasta lograr una superficie continua sin saltos.",
      },
      {
        question: "¿Cómo protegen el piso frente a la brisa marina del malecón?",
        answer:
          "Aplicamos un protector penetrante alifático que no crea película plástica amarilla, permitiendo que la piedra respire mientras repele agua, sales y grasa.",
      },
    ],
    geo: {
      latitude: -12.1211,
      longitude: -77.0297,
    },
  },

  "pulido-de-pisos-surco": {
    id: "surco",
    slug: "pulido-de-pisos-surco",
    name: "Santiago de Surco",
    title: "Pulido de Mármol Travertino y Terrazas en Surco | Servicio a Domicilio",
    metaDescription:
      "Pulido diamantado y masillado de mármol travertino en Santiago de Surco (Chacarilla, Casuarinas, Monterrico). Restauración in situ de áreas sociales y terrazas.",
    headline: "Pulido de Mármol Travertino y Terrazas en Santiago de Surco",
    subheadline:
      "Tratamiento integral de áreas sociales, halls y escaleras en residencias de Chacarilla del Estanque, Las Casuarinas, Monterrico y Tambo de Monterrico.",
    targetArchitecture: "Residencias familiares de gran extensión, casas de campo y condominios exclusivos en Santiago de Surco.",
    predominantSubstrates: ["Mármol Travertino Rústico y Pulido", "Mármol Crema Marfil", "Piedra Laja Arequipeña", "Granito en Cocinas y Terrazas"],
    localProblemTitle: "Cavernas Abiertas en Travertino y Sarro por Riego de Jardines",
    localProblemDesc:
      "El mármol travertino en residencias de Surco sufre el destape constante de sus porosidades de origen sedimentario. Al filtrarse agua con sarro de riego de jardines y detergentes, las cavidades se ennegrecen y pierden completamente su elegancia.",
    engineeredSolutionTitle: "Limpieza Cavitaria, Relleno de Resina Translúcida y Afinado Diamantado",
    engineeredSolutionDesc:
      "Limpiamos y desinfectamos cada poro con vapor presurizado. Rellenamos las oquedades con resina poliéster/epóxica con polvo de travertino para un acabado homogéneo, seguido de desbaste diamantado semi-mate o brillante de larga vida útil.",
    caseStudy: {
      title: "Residencia en Chacarilla del Estanque, Surco",
      substrate: "Mármol Travertino en Hall y Escaleras (220 m²)",
      area: "220 m²",
      challenge: "Poros abiertos acumulando suciedad negra y peldaños de escalera desgastados en bordes.",
      solution: "Masillado integral al tono original, rectificado de narices de peldaños y vitrificado semimate atérmico.",
      glossUnits: "85 GU (Acabado Satinado Noble)",
      image: "/gallery/pulido-diamantado-de-marmol-travertino.jpeg",
    },
    faqs: [
      {
        question: "¿El tratamiento de travertino en Surco cambia el color natural de la piedra?",
        answer:
          "No. El pulido diamantado no aplica tintes artificiales; desbasta las micro-capas superficiales oxidadas para revelar el color y veteado original del travertino.",
      },
      {
        question: "¿Atienden casas con metrajes grandes en Chacarilla o Las Casuarinas?",
        answer:
          "Sí. Desplegamos equipos de alto rendimiento para cubrir áreas desde 50 m² hasta más de 500 m² con planificación por sectores para no incomodar la vida familiar.",
      },
    ],
    geo: {
      latitude: -12.1389,
      longitude: -76.9981,
    },
  },

  "pulido-de-pisos-la-molina": {
    id: "la-molina",
    slug: "pulido-de-pisos-la-molina",
    name: "La Molina",
    title: "Decapado y Sellado de Lajas y Mármol en La Molina | Protección UV",
    metaDescription:
      "Restauración de piedras rústicas, lajas y mármoles en La Molina (Rinconada, Sol de La Molina, Camacho). Eliminación de ceras viejas y sellado hidrófugo in situ.",
    headline: "Restauración de Piedras Rústicas, Lajas y Mármol en La Molina",
    subheadline:
      "Solución especializada para residencias en La Rinconada, El Sol de La Molina, Camacho y La Planicie. Rescate de terrazas con alta exposición solar.",
    targetArchitecture: "Casas con amplios jardines, terrazas exteriores de piedra, piscinas y zonas de parrilla en La Molina.",
    predominantSubstrates: ["Piedra Laja Negra y Verde", "Cantería Arequipeña", "Mármol Travertino", "Concreto Estampado y Frotachado"],
    localProblemTitle: "Capas de Cera Negra Quemada por Sol y Eflorescencia Calcárea",
    localProblemDesc:
      "El microclima soleado y seco de La Molina calienta las superficies de piedra exterior. La costumbre de aplicar ceras acrílicas domésticas produce capas plásticas amarillentas y pegajosas que se 'queman' con la radiación UV, atrapando polvo y perdiendo adherencia.",
    engineeredSolutionTitle: "Decapado Termomecánico y Sellado Oleofóbico Nanométrico",
    engineeredSolutionDesc:
      "Decapamos químicamente todas las capas residuales de ceras sin agredir la piedra. Luego aplicamos nuestro protector penetrante mate que repele grasas de parrillas y sarro de piscinas sin dejar películas plásticas que se descascaren.",
    caseStudy: {
      title: "Terraza y Área de Piscina en El Sol de La Molina",
      substrate: "Piedra Laja Rústica y Adoquín (180 m²)",
      area: "180 m²",
      challenge: "Acumulación de 6 capas de cera emulsionada quemada por el sol con manchas de grasa de parrilla.",
      solution: "Decapado ecológico alcalino con cepillo de cerdas de carburo de silicio y sellador nanométrico hidrofugante.",
      glossUnits: "Mate Natural Hidrorrepelente",
      image: "/gallery/decapado-y-sellado-de-lajas.jpeg",
    },
    faqs: [
      {
        question: "¿El sellador para exteriores en La Molina hace resbaloso el piso alrededor de la piscina?",
        answer:
          "Al contrario. Nuestro protector penetra los poros de la piedra sin formar película sobre la superficie, manteniendo el coeficiente de fricción antideslizante original de la laja.",
      },
      {
        question: "¿Cuánto tiempo dura la protección contra la grasa y el sol en La Molina?",
        answer:
          "Tiene una durabilidad de hasta 3 a 5 años dependiendo del uso, y se limpia fácilmente con agua y jabón neutro sin requerir encerados periódicos.",
      },
    ],
    geo: {
      latitude: -12.0833,
      longitude: -76.9167,
    },
  },
};
