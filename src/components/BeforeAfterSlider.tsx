import { useState, useRef, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider = ({
  beforeImage = "/gallery/pulido-diamantado-de-marmol-marfil.jpeg",
  afterImage = "/general/piso-marmol.webp",
  beforeLabel = "ANTES • PISO OPACO Y RAYADO",
  afterLabel = "DESPUÉS • DIAMANTADO ESPEJO 3000",
  className = "",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // ResizeObserver para soportar rotación de teléfonos y tablets sin desfase de píxeles
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden select-none cursor-ew-resize border border-slate-200 shadow-ambient touch-pan-y ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background / Full) */}
      <img
        src={afterImage}
        alt="Piso después del diamantado espejo"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
        decoding="async"
      />

      {/* Before Image (Clipped / Foreground) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Piso antes de pulir"
          className="absolute inset-0 h-full object-cover max-w-none pointer-events-none"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-gold-500 shadow-elevated flex items-center justify-center text-anthracite-800">
          <MoveHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-diamond-700" />
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute bottom-3 left-3 z-10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-white text-[9px] sm:text-[10px] font-heading font-semibold uppercase tracking-wider">
        {beforeLabel}
      </div>

      <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-diamond-700/90 backdrop-blur-sm border border-white/20 text-white text-[9px] sm:text-[10px] font-heading font-semibold uppercase tracking-wider">
        {afterLabel}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
