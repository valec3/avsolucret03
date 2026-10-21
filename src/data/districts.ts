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
      "Recuperación patrimonial de pisos clásicos en departamentos frente al mar y malecones miraflorinos. Protección especializada contra el salitre y la humedad costera.",
    targetArchitecture: "Edificios clásicos de los años 60-80, departamentos en Malecones (Armendáriz, Cisneros) y casonas miraflorinas.",
    predominantSubstrates: ["Terrazo Veneciano Clásico", "Mosaico Granítico", "Mármol Travertino Nacional", "Porcelanatos de Alto Tránsito"],
    localProblemTitle: "Ataque de Salitre, Humedad Marina y Juntas Desniveladas",
    localProblemDesc:
      "La proximidad al Océano Pacífico somete a los pisos de Miraflores a eflorescencia salina constante. En terrazos antiguos, esto provoca desprendimiento de marmolina en juntas y una capa blanquecina opaca que ninguna limpieza superficial logra eliminar.",
    engineeredSolutionTitle: "Desbaste Profundo, Remasillado Polimérico y Barrera de Sellado Penetrante",
    engineeredSolutionDesc:
      "Nivelamos cejas y juntas con diamantes metálicos de corte plano. Reparamos fisuras con masilla polimérica tintada al tono exacto de la piedra y aplicamos sellador transpirable para reducir la porosidad y bloquear el ascenso capilar del salitre.",
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

  "pulido-de-pisos-san-borja": {
    id: "san-borja",
    slug: "pulido-de-pisos-san-borja",
    name: "San Borja",
    title: "Pulido y Cristalizado de Pisos en San Borja | Mármol & Terrazo sin Polvo",
    metaDescription:
      "Servicio especializado de pulido diamantado y cristalizado de mármol y terrazo en San Borja (Chacarilla, San Borja Norte y Sur). Cero polvo con turbina HEPA.",
    headline: "Pulido Diamantado y Cristalizado de Pisos en San Borja",
    subheadline:
      "Atención in situ para departamentos y residencias en San Borja. Protocolo en húmedo con aspiración continua, garantizando ambientes limpios y sin polvo residual.",
    targetArchitecture: "Departamentos residenciales en San Borja Norte y Sur, penthouses en Chacarilla y residencias unifamiliares clásicas.",
    predominantSubstrates: ["Mármol Travertino", "Mármol Crema Marfil", "Terrazo Veneciano Pulido", "Granito Natural"],
    localProblemTitle: "Pérdida de Brillo en Áreas Sociales y Desgaste por Tránsito Diario",
    localProblemDesc:
      "En los departamentos y casas de San Borja, el uso constante de salas y comedores, sumado al paso del tiempo y a productos de limpieza con pH inadecuado, desgasta el sellado original y opaca el reflejo de la piedra.",
    engineeredSolutionTitle: "Desbaste Diamantado Progresivo y Cristalizado Antideslizante",
    engineeredSolutionDesc:
      "Restauramos la planimetría mediante pasajes sucesivos de diamante resinado al agua. Aplicamos cristalizado endurecedor que sella la porosidad sin crear películas plásticas, logrando un brillo espejo duradero y seguro al caminar.",
    caseStudy: {
      title: "Departamento en Av. San Borja Sur",
      substrate: "Mármol Travertino y Crema Marfil (120 m²)",
      area: "120 m²",
      challenge: "Micro-rayaduras por movimiento de sillas y opacidad generalizada en área social.",
      solution: "Pulido fino diamantado en 5 pasos al agua y cristalizado termo-químico con máquina rotativa.",
      glossUnits: "91 GU (Brillo Espejo)",
      image: "/gallery/cristalizado-marmol-penthouse-vista-panoramica.jpg",
    },
    faqs: [
      {
        question: "¿El pulido afectará a los vecinos o las áreas comunes de mi edificio en San Borja?",
        answer:
          "No. Nuestro sistema funciona en húmedo con turbina de aspiración industrial y bajo nivel sonoro, cumpliendo estrictamente con las normas de convivencia de juntas de propietarios en San Borja.",
      },
      {
        question: "¿Es necesario retirar muebles pesados de la sala?",
        answer:
          "Trabajamos coordinadamente por sectores. Movemos el mobiliario ligero y protegemos zócalos y muebles fijos para que no tenga que desocupar la vivienda.",
      },
    ],
    geo: {
      latitude: -12.1075,
      longitude: -77.0016,
    },
  },

  "pulido-de-pisos-barranco": {
    id: "barranco",
    slug: "pulido-de-pisos-barranco",
    name: "Barranco",
    title: "Restauración de Pisos en Barranco | Mosaicos, Terrazo y Mármol Histórico",
    metaDescription:
      "Restauración patrimonial y pulido de pisos en Barranco. Especialistas en mosaicos empastados, terrazo veneciano y casonas frente al mar con protección contra el salitre.",
    headline: "Restauración de Mosaicos, Terrazo y Mármol en Barranco",
    subheadline:
      "Recuperación patrimonial de pisos clásicos en casonas y lofts de Barranco. Sellado hidrófugo transpirable para bloquear la brisa marina y el salitre.",
    targetArchitecture: "Casonas patrimoniales en Pedro de Osma y Av. Grau, lofts y departamentos frente al mar en Malecón Paul Harris.",
    predominantSubstrates: ["Mosaicos Empastados Artesanales", "Terrazo Veneciano Artístico", "Mármol Blanco", "Madera y Piedra"],
    localProblemTitle: "Salinidad Marina, Decoloración de Pastas y Desprendimiento en Juntas",
    localProblemDesc:
      "La extrema cercanía al mar somete a los pisos de Barranco a una humedad salina permanente. En mosaicos empastados antiguos y terrazos, esto genera pérdida de contraste en los pigmentos, manchas blancas de salitre y desmoronamiento de juntas.",
    engineeredSolutionTitle: "Decapado Profundo, Consolidación con Silicatos y Sellado Transpirable",
    engineeredSolutionDesc:
      "Limpieza técnica con tensoactivos neutros para remover suciedad incrustada sin quemar los colores. Desbaste superficial milimétrico y tratamiento penetrante a base de silicatos que densifica el material sin formar película plástica superficial.",
    caseStudy: {
      title: "Casona Patrimonial en Av. Pedro de Osma, Barranco",
      substrate: "Mosaicos Empastados y Terrazo Decorativo (95 m²)",
      area: "95 m²",
      challenge: "Suciedad adherida por décadas, pérdida de color en motivos geométricos y ataque de salitre costero.",
      solution: "Lavado y decapado neutro, nivelación diamantada suave, remasillado de juntas y sellado transpirable para realzar los tonos originales.",
      glossUnits: "Tono Realzado Mate Natural",
      image: "/gallery/vitrificado-sellado-mosaicos-decorativos-terraza.jpg",
    },
    faqs: [
      {
        question: "¿Se pueden recuperar los colores de un piso de mosaico antiguo en Barranco sin dañarlo?",
        answer:
          "Sí. No usamos ácidos corrosivos como ácido muriático que destruye la pasta. Empleamos pulido diamantado fino al agua y selladores transpirables que reviven la pigmentación original del mosaico artesanal.",
      },
      {
        question: "¿Cómo evitan que el salitre vuelva a brotar en pisos cercanos al mar?",
        answer:
          "Aplicamos sistemas de sellado por intercambio iónico que penetran en el capilar de la loseta. Al no crear una película plástica superficial, el piso respira la humedad sin atrapar sales que causen descascaramiento.",
      },
    ],
    geo: {
      latitude: -12.1481,
      longitude: -77.0211,
    },
  },

  "pulido-de-pisos-magdalena": {
    id: "magdalena",
    slug: "pulido-de-pisos-magdalena",
    name: "Magdalena",
    title: "Pulido y Vitrificado de Pisos en Magdalena del Mar | Mármol & Terrazo",
    metaDescription:
      "Pulido diamantado y vitrificado de pisos en Magdalena del Mar. Eliminación de ceras acumuladas y cristalizado antideslizante para departamentos y edificios.",
    headline: "Pulido Diamantado y Vitrificado de Pisos en Magdalena",
    subheadline:
      "Renovación integral de pisos de mármol, terrazo y loseta en departamentos y recepciones de Magdalena del Mar. Trabajo limpio sin levantar polvo.",
    targetArchitecture: "Edificios residenciales en Malecón Castagnola, Jr. Bolognesi, Av. Javier Prado Oeste y zonas tradicionales de Magdalena.",
    predominantSubstrates: ["Terrazo Veneciano", "Loseta Granítica", "Mármol Crema Marfil", "Porcelanato"],
    localProblemTitle: "Capas Amarillentas de Cera Antigua y Reflejo Opaco por Humedad",
    localProblemDesc:
      "El uso recurrente de ceras acrílicas o autobrillantes genera una costra pegajosa que atrapa polvo y se oscurece con la humedad costera. El piso se vuelve resbaladizo y pierde su estética mineral.",
    engineeredSolutionTitle: "Decapado Mecánico al 100% y Cristalizado Directo al Mineral",
    engineeredSolutionDesc:
      "Removemos la totalidad de ceras viejas mediante pads abrasivos al agua. Luego pulimos con diamantes hasta abrir la superficie sana y sellamos con cristalizado termo-químico directo sobre la piedra.",
    caseStudy: {
      title: "Departamento Residencial en Javier Prado Oeste, Magdalena",
      substrate: "Terrazo Veneciano Claro (110 m²)",
      area: "110 m²",
      challenge: "Cinco capas de cera amarillenta acumuladas y manchas opacas por limpiadores ácidos.",
      solution: "Decapado mecánico completo, pulido diamantado en 6 granos y cristalizado de alta dureza.",
      glossUnits: "89 GU (Reflejo Espejo)",
      image: "/gallery/pulido-diamantado-damero-terrazo-hall.jpg",
    },
    faqs: [
      {
        question: "¿El tratamiento con cristalizado deja el piso resbaloso?",
        answer:
          "No. A diferencia de las ceras, el pulido diamantado y cristalizado rectifica el plano microscópico del mineral, aumentando la fricción en seco y cumpliendo normas de coeficiente antideslizante.",
      },
      {
        question: "¿Cuánto tiempo demora el servicio en un departamento de Magdalena?",
        answer:
          "Para un metraje promedio de 70 a 120 m², el trabajo se ejecuta habitualmente en 2 a 3 días, dejando los ambientes transitables y limpios.",
      },
    ],
    geo: {
      latitude: -12.0911,
      longitude: -77.0706,
    },
  },

  "pulido-de-pisos-san-miguel": {
    id: "san-miguel",
    slug: "pulido-de-pisos-san-miguel",
    name: "San Miguel",
    title: "Pulido de Pisos y Sellado Bristone® en San Miguel | Concreto & Terrazo",
    metaDescription:
      "Servicio de pulido diamantado, cristalizado y sellado densificador en San Miguel (Costanera, Maranga, Av. La Marina). Residencias, comercios e industrias.",
    headline: "Pulido Diamantado y Densificado de Pisos en San Miguel",
    subheadline:
      "Tratamiento profesional para terrazo, concreto y mármol en condominios, locales comerciales y viviendas en San Miguel. Cero polvo y garantía escrita.",
    targetArchitecture: "Condominios en Costanera y Bertolotto, residencias en Maranga y locales en ejes comerciales de Av. La Marina.",
    predominantSubstrates: ["Terrazo Bicolor", "Concreto Pulido", "Loseta de Cemento", "Mármol"],
    localProblemTitle: "Desgaste por Tránsito y Erosión por Brisa Marina en la Costa de San Miguel",
    localProblemDesc:
      "Los condominios en el eje Costanera y las viviendas de San Miguel sufren el impacto combinado del tránsito continuo y la salinidad del mar, provocando porosidad abierta y empolvado en superficies de concreto y terrazo.",
    engineeredSolutionTitle: "Densificado con Silicatos e Intercambio Iónico (Sistema Bristone®)",
    engineeredSolutionDesc:
      "Desbaste plano para eliminar imperfecciones seguido de la aplicación de densificador penetrante Bristone® Concret Sealer. La reacción de intercambio iónico endurece la matriz mineral por dentro y evita el desprendimiento de polvo.",
    caseStudy: {
      title: "Hall de Ingreso y Sala en Condominio Costanera, San Miguel",
      substrate: "Terrazo Veneciano y Concreto Mastercron (135 m²)",
      area: "135 m²",
      challenge: "Empolvado superficial y pérdida de lustre por abrasión pedestre y salitre costero.",
      solution: "Diamantado con desbaste progresivo, densificado con silicato alcalino e hidropulido con abrillantador.",
      glossUnits: "88 GU (Acabado Satinado Espejo)",
      image: "/gallery/restauracion-loseta-granitica-terrazo-amarillo.jpg",
    },
    faqs: [
      {
        question: "¿Qué producto usan para evitar que el piso de concreto o terrazo siga botando polvo?",
        answer:
          "Aplicamos densificadores a base de silicatos que penetran la superficie y reaccionan químicamente para cerrar los poros capilares, deteniendo el empolvado permanentemente sin formar películas plásticas.",
      },
      {
        question: "¿Atienden locales comerciales en San Miguel con turnos especiales?",
        answer:
          "Sí, operamos en horarios nocturnos o fines de semana para entregar áreas transitables al inicio de la jornada comercial.",
      },
    ],
    geo: {
      latitude: -12.0772,
      longitude: -77.0864,
    },
  },
};
