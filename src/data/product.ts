export interface ProductSpec {
  title: string;
  desc: string;
}

export interface TechnicalSheetItem {
  param: string;
  value: string;
}

export interface TechnicalSheet {
  title: string;
  subtitle: string;
  rows: TechnicalSheetItem[];
}

export const productSpecs: ProductSpec[] = [
  {
    title: "Penetra y densifica la superficie",
    desc: "Reduce la porosidad y aumenta la dureza del piso. El intercambio iónico continúa hasta 6 meses después del tratamiento.",
  },
  {
    title: "No forma película",
    desc: "La penetración química no crea capas superficiales, por lo que no altera la textura antideslizante original del piso.",
  },
  {
    title: "No amarillea ni decolora",
    desc: "Mantiene el aspecto en el tiempo y evita que el concreto se empolve.",
  },
  {
    title: "Alta resistencia al tránsito",
    desc: "Resistente a la abrasión peatonal y vehicular, apto para zonas de alto tránsito.",
  },
];

export const productData = {
  sectionLabel: "SISTEMA PROFESIONAL DE SELLADO Y DENSIFICADO",
  title: "Sistema Bristone® para loseta, terrazo y concreto",
  description:
    "Tratamiento a base de silicatos que penetra la superficie, reduce la porosidad y endurece el piso mediante intercambio iónico, sin formar película. A diferencia de las ceras y acabados acrílicos, no deposita una capa que se desgaste: la reacción ocurre dentro del propio material y continúa durante los primeros meses posteriores a la aplicación.",
  inclusionBadge:
    "Fabricado en Lima por Limpi Max S.A. · Incluido en los protocolos Plus y Premium",
  ctaText: "Solicitar evaluación de mi piso",
  ctaWhatsAppMessage:
    "Hola AV SOLUCRET, deseo solicitar una evaluación de mi piso para la aplicación del Sistema Bristone® (densificado y sellado penetrante).",
  image: "/products/sistema-bristone-terrazo-acabado.jpg",
  imageAlt:
    "Piso de terrazo veneciano terminado con reflejo nítido y sellado densificador - Obra ejecutada por AV Solucret",
  trademarkNotice:
    "Bristone® es marca registrada del fabricante Limpi Max S.A. (San Miguel, Lima). AV Solucret aplica el sistema siguiendo estrictamente las especificaciones de sus hojas técnicas.",
};

export const technicalSheets: TechnicalSheet[] = [
  {
    title: "BRISTONE® CONCRET SEALER",
    subtitle: "Sellador Penetrante",
    rows: [
      { param: "Composición", value: "Compuesto de siliconatos alcalinos (silicato de sodio)" },
      { param: "Apariencia", value: "Líquido incoloro, inodoro" },
      { param: "pH", value: "10" },
      { param: "Densidad", value: "1.33 kg/L a 20 °C" },
      { param: "Tiempo de secado", value: "30 a 60 minutos" },
      { param: "Superficies recomendadas", value: "Loseta veneciana, terrazo, concreto simple y concreto Mastercron" },
      { param: "Presentación", value: "Galón de 3.785 L" },
      { param: "Vida útil", value: "1 año (ASTM D1791)" },
    ],
  },
  {
    title: "BRISTONE® II Y III",
    subtitle: "Restauradores de Brillo",
    rows: [
      { param: "Composición", value: "Silicato de potasio (el III incorpora además tensoactivo aniónico)" },
      { param: "Contenido de sólidos", value: "28 %" },
      { param: "pH", value: "10" },
      { param: "Rendimiento", value: "80 a 100 m² por litro, sujeto a la condición del piso" },
      { param: "Peso por litro", value: "1.1 kg" },
      { param: "Características", value: "Alta resistencia al tráfico · No se oscurece · No se acumula ni amarillea" },
      { param: "Vida útil", value: "1 año · No combustible" },
    ],
  },
];
