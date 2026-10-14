import { companyData } from "./company.ts";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface RouteSeoConfig {
  path: string;
  title: string;
  description: string;
  canonical: string;
  type: "website" | "article";
  image: string;
  keywords: string[];
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  fallbackH1: string;
  fallbackSummary: string;
}

export const routesSeoData: Record<string, RouteSeoConfig> = {
  "/": {
    path: "/",
    title: "AV SOLUCRET | Pulido Diamantado y Restauración de Pisos en Lima",
    description:
      "Empresa líder en pulido diamantado, vitrificado y restauración de pisos en Lima: mármol, terrazo, granito y concreto industrial. 100% libre de polvo y garantía por escrito.",
    canonical: "https://avsolucret.com/",
    type: "website",
    image: "https://avsolucret.com/general/piso-marmol.webp",
    keywords: [
      "pulido de pisos lima",
      "pulido diamantado lima",
      "restauracion de marmol san isidro",
      "pulido de terrazo miraflores",
      "concreto pulido surco",
      "vitrificado de pisos lima",
      "sellado de pisos peru",
    ],
    fallbackH1: "Pulido Diamantado y Restauración de Pisos en Lima",
    fallbackSummary:
      "Servicio de ingeniería en restauración de mármol, terrazo, granito y concreto industrial en Lima Metropolitana. Tecnología diamantada sin polvo y dirección colegiada CIP.",
  },
  "/servicios": {
    path: "/servicios",
    title: "Servicios de Pulido Diamantado y Restauración de Pisos en Lima",
    description:
      "Protocolos especializados de desbaste diamantado, vitrificado, cristalizado y sellado para mármol, terrazo, granito, lajas y concreto industrial en Lima Metropolitana.",
    canonical: "https://avsolucret.com/servicios",
    type: "website",
    image: "https://avsolucret.com/gallery/pulido-diamantado-vitrificado.jpeg",
    keywords: [
      "servicios pulido de pisos lima",
      "pulido diamantado marmol",
      "cristalizado de terrazo",
      "vitrificado de pisos",
      "tratamiento de concreto industrial",
      "decapado de lajas lima",
    ],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/servicios" },
    ],
    fallbackH1: "Servicios de Pulido Diamantado y Tratamiento de Suelos",
    fallbackSummary:
      "Catálogo integral de procedimientos de restauración de suelos minerales: desbaste mecánico en 7 pasos diamantados, cristalizado termoquímico y sellado nanométrico AV-SHIELD™.",
  },
  "/trabajos": {
    path: "/trabajos",
    title: "Galería de Trabajos y Proyectos Realizados en Lima",
    description:
      "Casos reales de antes y después en restauración de mármol, terrazo y concreto en San Isidro, Miraflores, Surco y La Molina. Inspección visual y métricas de brillo.",
    canonical: "https://avsolucret.com/trabajos",
    type: "website",
    image: "https://avsolucret.com/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
    keywords: [
      "trabajos de pulido de pisos lima",
      "antes y despues pulido marmol",
      "proyectos terrazo san isidro",
      "galeria pulido diamantado peru",
    ],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Trabajos Realizados", path: "/trabajos" },
    ],
    fallbackH1: "Proyectos y Restauraciones Ejecutadas en Lima Metropolitana",
    fallbackSummary:
      "Evidencia fotográfica y técnica de intervenciones en residencias de alto estándar, áreas corporativas y complejos industriales de Lima.",
  },
  "/nosotros": {
    path: "/nosotros",
    title: "Nosotros | Empresa Formal de Restauración de Pisos en Lima",
    description:
      "Conoce a AV SOLUCRET S.A.C.: empresa formal (RUC 20608549102), dirección técnica con CIP Reg. 184652, cobertura SCTR y tecnología de aspiración ciclónica HEPA.",
    canonical: "https://avsolucret.com/nosotros",
    type: "website",
    image: "https://avsolucret.com/main/logo.png",
    keywords: [
      "empresa pulido pisos lima",
      "av solucret ruc",
      "ingenieria restauracion pisos peru",
      "pulido pisos sin polvo lima",
    ],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Nosotros", path: "/nosotros" },
    ],
    fallbackH1: "Ingeniería y Formalidad en Tratamiento de Pisos",
    fallbackSummary:
      "Trayectoria, estándares de seguridad SCTR, personal capacitado en planilla y respaldo colegiado para proyectos residenciales y corporativos en el Perú.",
  },
  "/contacto": {
    path: "/contacto",
    title: "Contacto y Cotización de Pulido de Pisos en Lima",
    description:
      "Solicita diagnóstico técnico gratuito en tu domicilio o empresa. Atención directa en San Isidro, Miraflores, Santiago de Surco, San Borja, La Molina y todo Lima.",
    canonical: "https://avsolucret.com/contacto",
    type: "website",
    image: "https://avsolucret.com/general/piso-marmol.webp",
    keywords: [
      "cotizar pulido pisos lima",
      "telefono av solucret",
      "diagnostico marmol gratuito lima",
      "presupuesto restauracion pisos",
    ],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Contacto", path: "/contacto" },
    ],
    fallbackH1: "Solicite Diagnóstico Técnico Gratuito y Cotización",
    fallbackSummary:
      "Comuníquese con nuestros ingenieros y especialistas para agendar una inspección técnica in situ sin costo en Lima Metropolitana.",
  },
  "/blog": {
    path: "/blog",
    title: "Blog Técnico: Mantenimiento y Restauración de Pisos",
    description:
      "Guías técnicas, análisis patológico de minerales y consejos de conservación para pisos de mármol, terrazo, granito y concreto por ingenieros especialistas.",
    canonical: "https://avsolucret.com/blog",
    type: "website",
    image: "https://avsolucret.com/blog/01-blog.png",
    keywords: [
      "blog pulido pisos",
      "cuidados del marmol lima",
      "reparar terrazo antiguo",
      "manchas de acido en pisos",
      "tratamiento salitre lima",
    ],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog Técnico", path: "/blog" },
    ],
    fallbackH1: "Centro de Conocimiento Técnico y Patología de Pisos",
    fallbackSummary:
      "Artículos especializados redactados por especialistas en restauración de suelos minerales y concreto industrial.",
  },
  "/blog/cuidados-marmol": {
    path: "/blog/cuidados-marmol",
    title: "Cuidados Preventivos del Mármol | Blog AV SOLUCRET",
    description:
      "Guía técnica para evitar el ataque ácido en pisos de mármol, por qué los limpiadores comerciales lo dañan y cómo conservarlo con pulido diamantado.",
    canonical: "https://avsolucret.com/blog/cuidados-marmol",
    type: "article",
    image: "https://avsolucret.com/blog/01-blog.png",
    keywords: ["cuidados marmol lima", "ataque acido marmol", "limpieza marmol san isidro"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Cuidados Mármol", path: "/blog/cuidados-marmol" },
    ],
    fallbackH1: "Cuidados Preventivos del Mármol: La Guía Definitiva contra el Ataque Ácido",
    fallbackSummary:
      "Aprenda por qué el vinagre y los limpiadores ácidos corroen el carbonato de calcio del mármol y cómo protegerlo permanentemente mediante pulido diamantado.",
  },
  "/blog/cuidados-porcelanato": {
    path: "/blog/cuidados-porcelanato",
    title: "Cuidados y Mantenimiento de Porcelanato | Blog AV SOLUCRET",
    description:
      "Aprende cómo limpiar y desmanchar porcelanato pulido y satinado, eliminar cera protectora de fábrica y sellar fraguas contra la suciedad en Lima.",
    canonical: "https://avsolucret.com/blog/cuidados-porcelanato",
    type: "article",
    image: "https://avsolucret.com/general/piso-porcelanato.webp",
    keywords: ["limpieza porcelanato lima", "desmanchar porcelanato", "sellado de fraguas"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Cuidados Porcelanato", path: "/blog/cuidados-porcelanato" },
    ],
    fallbackH1: "Guía de Mantenimiento y Recuperación de Porcelanatos",
    fallbackSummary:
      "Protocolo para desengrase profundo, remoción de ceras de fábrica y sellado de juntas en suelos de porcelanato de alto tránsito.",
  },
  "/blog/cuidados-lajas": {
    path: "/blog/cuidados-lajas",
    title: "Tratamiento y Sellado de Lajas y Piedras Rústicas | AV SOLUCRET",
    description:
      "Cómo proteger lajas, cantería y piedras rústicas del moho, la humedad costera de Lima y el deterioro por ceras inadecuadas.",
    canonical: "https://avsolucret.com/blog/cuidados-lajas",
    type: "article",
    image: "https://avsolucret.com/general/piso-lajas.webp",
    keywords: ["sellado de lajas lima", "decapado piedra rustica", "hidrofugante piedra la molina"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Cuidados de Lajas", path: "/blog/cuidados-lajas" },
    ],
    fallbackH1: "Tratamiento de Piedras Rústicas y Lajas en la Costa Peruana",
    fallbackSummary:
      "Soluciones para evitar desprendimientos, eflorescencias salinas y acumulación de moho en áreas exteriores e interiores.",
  },
  "/blog/pulido-diamantado-vs-ceras": {
    path: "/blog/pulido-diamantado-vs-ceras",
    title: "Pulido Diamantado vs Ceras Acrílicas: Por Qué las Ceras Arruinan tu Piso",
    description:
      "Comparativa técnica entre el encerado tradicional y el pulido diamantado. Conoce por qué las ceras amarillean y cómo el desbaste diamantado devuelve el brillo natural.",
    canonical: "https://avsolucret.com/blog/pulido-diamantado-vs-ceras",
    type: "article",
    image: "https://avsolucret.com/blog/01-blog.png",
    keywords: ["pulido diamantado vs cera", "quitar cera vieja marmol", "brillo natural pisos lima"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Pulido Diamantado vs Ceras", path: "/blog/pulido-diamantado-vs-ceras" },
    ],
    fallbackH1: "Pulido Diamantado vs Ceras Acrílicas: La Verdad Técnica",
    fallbackSummary:
      "Análisis de durabilidad, costo en el tiempo y estética entre la acumulación plástica de ceras y la reflectividad óptica del pulido mecánico con diamantes.",
  },
  "/blog/restauracion-terrazo-veneciano-guia": {
    path: "/blog/restauracion-terrazo-veneciano-guia",
    title: "Guía Completa de Restauración de Terrazo Veneciano en Lima",
    description:
      "Aprende cómo recuperar pisos de terrazo antiguos o dañados: desbaste, remasillado de grietas y cristalizado para devolverles su brillo original.",
    canonical: "https://avsolucret.com/blog/restauracion-terrazo-veneciano-guia",
    type: "article",
    image: "https://avsolucret.com/general/piso-terrazo.jpg",
    keywords: ["restauracion terrazo veneciano lima", "pulir terrazo miraflores", "arreglar fisuras terrazo"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Restauración Terrazo Veneciano", path: "/blog/restauracion-terrazo-veneciano-guia" },
    ],
    fallbackH1: "Restauración de Terrazo Veneciano: Rescate Patrimonial",
    fallbackSummary:
      "Cómo reparar roturas, nivelar losetas graníticas y cristalizar la matriz de cemento y mármol en inmuebles históricos de Lima.",
  },
  "/blog/salitre-humedad-pisos-costa-lima": {
    path: "/blog/salitre-humedad-pisos-costa-lima",
    title: "Salitre y Humedad en Pisos de la Costa de Lima: Diagnóstico y Solución",
    description:
      "Descubre cómo combatir la eflorescencia salina y la humedad por capilaridad en pisos de mármol, terrazo y concreto en distritos costeros como Miraflores y Barranco.",
    canonical: "https://avsolucret.com/blog/salitre-humedad-pisos-costa-lima",
    type: "article",
    image: "https://avsolucret.com/blog/02-blog.png",
    keywords: ["salitre pisos lima", "humedad capilaridad pisos", "eflorescencia salina marmol"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Salitre y Humedad en Pisos", path: "/blog/salitre-humedad-pisos-costa-lima" },
    ],
    fallbackH1: "Control de Salitre y Humedad por Capilaridad en Pisos Costeros",
    fallbackSummary:
      "Estrategias de barreras transpirables y desalinización para prolongar la vida útil de pisos en el litoral limeño.",
  },
  "/blog/cristalizado-vs-pulido-diamantado-diferencias": {
    path: "/blog/cristalizado-vs-pulido-diamantado-diferencias",
    title: "Cristalizado Químico vs Pulido Diamantado: Diferencias y Usos",
    description:
      "Descubre cuándo conviene cristalizar químicamente y cuándo es obligatorio desbastar con diamantes para lograr un acabado espejo duradero.",
    canonical: "https://avsolucret.com/blog/cristalizado-vs-pulido-diamantado-diferencias",
    type: "article",
    image: "https://avsolucret.com/gallery/pulido-diamantado-vitrificado.jpeg",
    keywords: ["cristalizado vs pulido", "fluorosilicato marmol", "diferencia pulido diamantado"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Cristalizado vs Pulido", path: "/blog/cristalizado-vs-pulido-diamantado-diferencias" },
    ],
    fallbackH1: "Cristalizado Químico vs Pulido Diamantado Mecánico",
    fallbackSummary:
      "Comprenda la interacción química entre el carbonato cálcico y el fluorosilicato de magnesio frente a la abrasión por diamantes industriales.",
  },
  "/blog/concreto-pulido-industrial-superflat-lima": {
    path: "/blog/concreto-pulido-industrial-superflat-lima",
    title: "Concreto Pulido Industrial y Pisos Superflat en Lima",
    description:
      "Tratamiento de losas industriales con densificadores de litio y pulido diamantado para máxima resistencia a tránsito pesado y libre de polvo.",
    canonical: "https://avsolucret.com/blog/concreto-pulido-industrial-superflat-lima",
    type: "article",
    image: "https://avsolucret.com/general/piso-concreto.jpg",
    keywords: ["concreto pulido lima", "pisos superflat", "densificador de litio concreto"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Concreto Pulido Industrial", path: "/blog/concreto-pulido-industrial-superflat-lima" },
    ],
    fallbackH1: "Concreto Pulido Industrial y Pisos Superflat en Lima",
    fallbackSummary:
      "Normas técnicas de planeidad, resistencia al desprendimiento de polvo y densificación química con silicato de litio en plantas y almacenes.",
  },
  "/blog/peligro-acido-muriatico-marmol-terrazo-reparacion": {
    path: "/blog/peligro-acido-muriatico-marmol-terrazo-reparacion",
    title: "Peligro del Ácido Muriático en Mármol y Terrazo: Cómo Repararlo",
    description:
      "Por qué nunca debes aplicar ácido muriático sobre pisos calcáreos y cuál es el protocolo técnico para revertir manchas blancas y porosidad.",
    canonical: "https://avsolucret.com/blog/peligro-acido-muriatico-marmol-terrazo-reparacion",
    type: "article",
    image: "https://avsolucret.com/gallery/pulido-diamantado-de-marmol-travertino.jpeg",
    keywords: ["acido muriatico marmol danado", "reparar mancha acido terrazo", "desbaste quimico pisos"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Peligro del Ácido Muriático", path: "/blog/peligro-acido-muriatico-marmol-terrazo-reparacion" },
    ],
    fallbackH1: "Peligro del Ácido Muriático en Suelos Calcáreos y Protocolo de Rescate",
    fallbackSummary:
      "El desbaste diamantado como único método físico capaz de retirar la capa calcinada por ácido clorhídrico y restituir la reflectividad original.",
  },
  "/politica-de-privacidad": {
    path: "/politica-de-privacidad",
    title: "Política de Privacidad | AV SOLUCRET S.A.C.",
    description:
      "Conoce cómo AV SOLUCRET protege tus datos personales de acuerdo con la Ley N° 29733 de Protección de Datos Personales en el Perú.",
    canonical: "https://avsolucret.com/politica-de-privacidad",
    type: "website",
    image: "https://avsolucret.com/main/logo.png",
    keywords: ["politica de privacidad av solucret", "ley 29733 peru"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Política de Privacidad", path: "/politica-de-privacidad" },
    ],
    fallbackH1: "Política de Privacidad y Tratamiento de Datos",
    fallbackSummary:
      "Tratamiento de datos personales recabados con fines de prospección comercial y asesoramiento técnico formal bajo legislación peruana.",
  },
  "/terminos-y-condiciones": {
    path: "/terminos-y-condiciones",
    title: "Términos y Condiciones del Servicio | AV SOLUCRET",
    description:
      "Términos del servicio de restauración, pulido diamantado y garantías técnicas emitidas por AV SOLUCRET S.A.C.",
    canonical: "https://avsolucret.com/terminos-y-condiciones",
    type: "website",
    image: "https://avsolucret.com/main/logo.png",
    keywords: ["terminos condiciones av solucret", "garantias tecnicas pulido pisos"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Términos y Condiciones", path: "/terminos-y-condiciones" },
    ],
    fallbackH1: "Términos y Condiciones del Servicio",
    fallbackSummary:
      "Alcance contractual, cláusulas de garantía formal por escrito y protocolos operativos de AV SOLUCRET S.A.C.",
  },
  "/zonas/pulido-de-pisos-san-isidro": {
    path: "/zonas/pulido-de-pisos-san-isidro",
    title: "Pulido Diamantado de Pisos en San Isidro | Mármol & Granito sin Polvo",
    description:
      "Servicio técnico in situ de pulido diamantado y restauración de mármol en San Isidro. Cuadrillas móviles con aspiración HEPA sin polvo para residencias y lobbies corporativos.",
    canonical: "https://avsolucret.com/zonas/pulido-de-pisos-san-isidro",
    type: "website",
    image: "https://avsolucret.com/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
    keywords: ["pulido de pisos san isidro", "restauracion de marmol san isidro", "pulido diamantado pezet el golf", "vitrificado sin polvo lima"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Zonas de Atención", path: "/contacto" },
      { name: "San Isidro", path: "/zonas/pulido-de-pisos-san-isidro" },
    ],
    fallbackH1: "Pulido Diamantado de Mármol y Granito en San Isidro",
    fallbackSummary:
      "Intervención técnica in situ de alto estándar para residencias de lujo y edificios corporativos en San Isidro. 100% libre de polvo residual.",
  },
  "/zonas/pulido-de-pisos-miraflores": {
    path: "/zonas/pulido-de-pisos-miraflores",
    title: "Restauración de Terrazo y Mármol en Miraflores | Tratamiento Anti-Salitre",
    description:
      "Especialistas en restauración de terrazo veneciano y mármol en Miraflores. Eliminación de humedad por capilaridad y vitrificado de pisos in situ con garantía escrita.",
    canonical: "https://avsolucret.com/zonas/pulido-de-pisos-miraflores",
    type: "website",
    image: "https://avsolucret.com/gallery/pulido-diamantado-de-losetas-de-granito-terrazo.jpeg",
    keywords: ["restauracion de terrazo miraflores", "pulido de marmol malecon miraflores", "tratamiento salitre pisos lima", "vitrificado terrazo"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Zonas de Atención", path: "/contacto" },
      { name: "Miraflores", path: "/zonas/pulido-de-pisos-miraflores" },
    ],
    fallbackH1: "Restauración de Terrazo Veneciano y Mármol en Miraflores",
    fallbackSummary:
      "Recuperación patrimonial de pisos de terrazo y mármol en malecones y zonas costeras de Miraflores con selladores transpirables contra el salitre.",
  },
  "/zonas/pulido-de-pisos-surco": {
    path: "/zonas/pulido-de-pisos-surco",
    title: "Pulido de Mármol Travertino y Terrazas en Surco | Servicio a Domicilio",
    description:
      "Pulido diamantado y masillado de mármol travertino en Santiago de Surco (Chacarilla, Casuarinas, Monterrico). Restauración in situ de áreas sociales y terrazas.",
    canonical: "https://avsolucret.com/zonas/pulido-de-pisos-surco",
    type: "website",
    image: "https://avsolucret.com/gallery/pulido-diamantado-de-marmol-travertino.jpeg",
    keywords: ["pulido de marmol surco", "travertino chacarilla surco", "restauracion pisos monterrico", "pulido diamantado casas surco"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Zonas de Atención", path: "/contacto" },
      { name: "Santiago de Surco", path: "/zonas/pulido-de-pisos-surco" },
    ],
    fallbackH1: "Pulido de Mármol Travertino y Terrazas en Santiago de Surco",
    fallbackSummary:
      "Tratamiento cavitario, remasillado polimérico y pulido diamantado semi-mate para residencias familiares en Santiago de Surco.",
  },
  "/zonas/pulido-de-pisos-la-molina": {
    path: "/zonas/pulido-de-pisos-la-molina",
    title: "Decapado y Sellado de Lajas y Mármol en La Molina | Protección UV",
    description:
      "Restauración de piedras rústicas, lajas y mármoles en La Molina (Rinconada, Sol de La Molina, Camacho). Eliminación de ceras viejas y sellado hidrófugo in situ.",
    canonical: "https://avsolucret.com/zonas/pulido-de-pisos-la-molina",
    type: "website",
    image: "https://avsolucret.com/gallery/decapado-y-sellado-de-lajas.jpeg",
    keywords: ["sellado de lajas la molina", "decapado piedra rustica la molina", "protector solar piedras terrazas", "marmol la planicie"],
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Zonas de Atención", path: "/contacto" },
      { name: "La Molina", path: "/zonas/pulido-de-pisos-la-molina" },
    ],
    fallbackH1: "Restauración de Piedras Rústicas, Lajas y Mármol en La Molina",
    fallbackSummary:
      "Decapado termomecánico de ceras quemadas por radiación UV y sellado nanométrico hidrofugante para terrazas en La Molina.",
  },
};
