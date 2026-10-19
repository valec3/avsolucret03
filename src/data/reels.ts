export interface WorkReel {
  id: string;
  title: string;
  tag: string;
  material: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
}

export const workReels: WorkReel[] = [
  {
    id: "reel-pulido",
    title: "Diamantado en Húmedo",
    tag: "MAQUINARIA EN ACCIÓN",
    material: "Piedra Natural",
    description: "Desbaste progresivo con platos diamantados refrigerados con agua para eliminar desniveles y rayas profundas.",
    videoSrc: "/videos/video-pulido-diamantado-maquina.mp4",
    posterSrc: "/videos/poster-pulido.jpg",
  },
  {
    id: "reel-cristalizado",
    title: "Cristalizado Termoquímico",
    tag: "BRILLO ESPEJO",
    material: "Mármol Blanco",
    description: "Reacción sobre la calcita que endurece la superficie y proyecta una reflectancia espejo antideslizante sin ceras.",
    videoSrc: "/videos/video-cristalizado-reflejo-espejo.mp4",
    posterSrc: "/videos/poster-cristalizado.jpg",
  },
  {
    id: "reel-aspirado",
    title: "Aspirado Ciclónico Sin Polvo",
    tag: "0% POLVO EN EL AMBIENTE",
    material: "Terrazo & Granito",
    description: "Extracción inmediata de lodo y residuos líquidos en tiempo real. Cero polvo tóxico en sus muebles y cortinas.",
    videoSrc: "/videos/video-aspirado-sin-polvo-obra.mp4",
    posterSrc: "/videos/poster-aspirado.jpg",
  },
  {
    id: "reel-acabado",
    title: "Entrega de Obra Impecable",
    tag: "RESULTADO FINAL",
    material: "Mármol Residencial",
    description: "Piso completamente seco, transitable y con garantía por escrito de durabilidad y reflectometría.",
    videoSrc: "/videos/video-acabado-piso-marmol-sala.mp4",
    posterSrc: "/videos/poster-acabado.jpg",
  },
];
