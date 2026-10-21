export interface TestimonialItem {
  name: string;
  role: string;
  district: string;
  stars: number;
  title: string;
  comment: string;
  work: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Arq. Mariana Lévano",
    role: "Estudio de Arquitectura & Diseño Interior",
    district: "San Isidro, Lima",
    stars: 5,
    title: "Mármol Carrara restaurado a la perfección sin desalojar",
    comment:
      "Teníamos 140 m² de mármol Carrara que había sido arruinado con limpiadores ácidos. El equipo de AV SOLUCRET intervino el departamento en 36 horas con su sistema sin polvo. La reflectancia y la nivelación de cejas quedaron impecables.",
    work: "140 m² • Mármol Carrara • Protocolo Espejo Premium",
  },
  {
    name: "Ing. Gonzalo Rosales",
    role: "Administración de Edificio Corporativo",
    district: "Miraflores, Lima",
    stars: 5,
    title: "Cumplimiento estricto de SCTR y turnos nocturnos",
    comment:
      "Para el lobby principal necesitábamos recuperar un terrazo veneciano histórico de alto tráfico sin interrumpir la operación diurna del edificio. Trabajaron de noche con personal 100% asegurado en SCTR y entregaron a primera hora con brillo cerámico uniforme.",
    work: "280 m² • Terrazo Veneciano • Turnos Nocturnos",
  },
  {
    name: "Dra. Patricia Benavides",
    role: "Propietaria Residencial",
    district: "Chacarilla, Surco",
    stars: 5,
    title: "Cero polvo en muebles y paredes, un alivio total",
    comment:
      "Mi mayor temor al pulir el piso de la sala y comedor era que el polvo fino invadiera los dormitorios. Su turbina de aspiración HEPA es impresionante: no dejaron ni un solo rastro en el aire ni en las cortinas. El sellado y cristalizado repele derrames y dejó un acabado impecable.",
    work: "95 m² • Mármol Travertino • Pulido Diamantado y Cristalizado",
  },
];

export const testimonialsOverview = {
  sectionBadge: "OPINIONES Y CASOS REALES EN LIMA",
  title: "La Confianza de Quienes Exigen Perfección",
  ratingValue: "4.9",
  ratingMax: "5.0",
  ratingCount: 128,
  ratingSummaryText: "(Más de 120 proyectos certificados en Lima Metropolitana)",
};
