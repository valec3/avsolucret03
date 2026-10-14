export interface TransformationMetric {
  label: string;
  value: string;
  desc: string;
}

export interface TransformationCase {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  metrics: TransformationMetric[];
}

export const transformationCases: TransformationCase[] = [
  {
    id: "marmol",
    title: "Mármol Natural Crema Marfil",
    location: "Departamento Dúplex • San Isidro",
    beforeImage: "/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
    afterImage: "/general/piso-marmol.webp",
    beforeLabel: "ANTES • DESGASTE ÁCIDO Y RAYAS",
    afterLabel: "DESPUÉS • DIAMANTADO ESPEJO 94 GU",
    description:
      "Recuperación integral de mármol deslustrado por tráfico y limpiadores alcalinos. Se eliminó la película plástica residual y se rectificó con resinas diamantadas grano 50 a 3000.",
    metrics: [
      { label: "Reflectancia", value: "94 GU", desc: "Gloss Units (Espejo Puro)" },
      { label: "Tiempo de Obra", value: "36 Horas", desc: "Habitado sin desalojar" },
      { label: "Polvo Suspendido", value: "0%", desc: "Aspirado ciclónico HEPA" },
    ],
  },
  {
    id: "terrazo",
    title: "Terrazo Veneciano Tradicional",
    location: "Lobby Edificio Residencial • Miraflores",
    beforeImage: "/gallery/pulido-diamantado-de-losetas-de-granito-terrazo.jpeg",
    afterImage: "/general/piso-terrazo.jpg",
    beforeLabel: "ANTES • MANCHAS Y JUNTAS ABIERTAS",
    afterLabel: "DESPUÉS • RESTAURACIÓN & SELLADO",
    description:
      "Nivelación de cejas milimétricas entre losetas, remasillado de juntas con resina al tono del grano de mármol y sellado protector oleofóbico permanente.",
    metrics: [
      { label: "Reflectancia", value: "88 GU", desc: "Brillo cerámico natural" },
      { label: "Tráfico Soportado", value: "Alto Flujo", desc: "Edificios y lobbies" },
      { label: "Garantía", value: "5 Años", desc: "Certificado contractual" },
    ],
  },
  {
    id: "travertino",
    title: "Mármol Travertino Rústico",
    location: "Residencia Unifamiliar • La Molina",
    beforeImage: "/gallery/pulido-diamantado-de-marmol-travertino.jpeg",
    afterImage: "/gallery/pulido-diamantado-vitrificado.jpeg",
    beforeLabel: "ANTES • POROSIDAD Y DESGASTE",
    afterLabel: "DESPUÉS • BLINDAJE AV-SHIELD™",
    description:
      "Tratamiento ocluyente y abrillantado controlado para travertino. Relleno de cavidades naturales y aplicación de nanosellador hidrófugo que previene la absorción de humedad.",
    metrics: [
      { label: "Impermeabilidad", value: "100%", desc: "Repele líquidos y café" },
      { label: "Mantenimiento", value: "Agua Neutra", desc: "Cero ceras químicas" },
      { label: "Entrega", value: "48 Horas", desc: "Garantía escrita formal" },
    ],
  },
];
