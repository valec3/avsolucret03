import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, ShieldCheck, ArrowRight } from "lucide-react";
import { workReels, WorkReel } from "@/data/reels";
import { Button } from "@/components/ui/button";

const ReelCard = ({ reel }: { reel: WorkReel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-ambient flex flex-col justify-end aspect-[9/16] max-w-[280px] sm:max-w-none mx-auto w-full">
      {/* Video element */}
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.posterSrc}
        playsInline
        muted={isMuted}
        loop
        preload="none"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
      />

      {/* Overlays */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none transition-opacity duration-300"
      />

      {/* Top Controls & Badges */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-auto">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-400 font-mono text-[10px] font-bold border border-gold-400/30">
          {reel.tag}
        </span>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors border border-white/20"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Center Play Button indicator when paused */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Reproducir video"
          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all z-10"
        >
          <Play className="w-6 h-6 ml-1 fill-white" />
        </button>
      )}

      {/* Bottom Info */}
      <div className="relative z-10 p-4 text-white pointer-events-none">
        <div className="text-[11px] font-mono text-gold-400 font-bold mb-0.5">
          {reel.material}
        </div>
        <h3 className="font-heading font-extrabold text-base leading-snug mb-1.5 drop-shadow-sm">
          {reel.title}
        </h3>
        <p className="font-sans text-[11px] text-slate-200 line-clamp-2 leading-relaxed opacity-90 mb-2">
          {reel.description}
        </p>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Personal propio en planilla con SCTR</span>
        </div>
      </div>
    </div>
  );
};

export const WorkReelsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-low/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
              <span className="label-editorial text-gold-800 font-extrabold tracking-widest uppercase">
                EN OBRA • EQUIPO Y MAQUINARIA EN VIVO
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15]">
              Así Trabaja Nuestro Equipo en Lima
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium lg:text-right">
            Sin intermediarios ni subcontratas. Videos reales capturados in situ durante la ejecución de obras residenciales y comerciales.
          </p>
        </div>

        {/* 4 Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-extrabold text-anthracite-900 mb-1">
              ¿Desea una evaluación técnica in situ para su piso?
            </h4>
            <p className="text-xs sm:text-sm text-anthracite-600 font-medium">
              Evaluamos estado de poros, manchas y desniveles con prueba de brillo demostrativa.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-xs sm:text-sm py-6 px-8 rounded-xl shadow-ambient shrink-0"
            asChild
          >
            <a
              href="https://wa.me/51961801932?text=Hola%20AV%20Solucret,%20vi%20los%20videos%20de%20su%20equipo%20trabajando%20y%20deseo%20coordinar%20una%20visita%20t%C3%A9cnica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Coordinar Visita por WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default WorkReelsSection;
