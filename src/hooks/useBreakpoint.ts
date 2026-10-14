import { useState, useEffect } from "react";

export type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export interface BreakpointState {
  breakpoint: BreakpointKey;
  isPhone: boolean;       // < 640px
  isMobile: boolean;      // < 768px
  isTablet: boolean;      // >= 768px && < 1024px
  isLaptop: boolean;      // >= 1024px && < 1280px
  isDesktop: boolean;     // >= 1280px
  width: number;
  height: number;
  isPortrait: boolean;
  isLandscape: boolean;
  isAbove: (bp: keyof typeof BREAKPOINTS) => boolean;
  isBelow: (bp: keyof typeof BREAKPOINTS) => boolean;
}

const getBreakpoint = (width: number): BreakpointKey => {
  if (width < BREAKPOINTS.sm) return "xs";
  if (width < BREAKPOINTS.md) return "sm";
  if (width < BREAKPOINTS.lg) return "md";
  if (width < BREAKPOINTS.xl) return "lg";
  if (width < BREAKPOINTS["2xl"]) return "xl";
  return "2xl";
};

export const useBreakpoint = (): BreakpointState => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      // Debounce ligero de 16ms (~60fps) para evitar recalcular en cada frame durante drag-resize
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 16);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    // Llamada inicial para asegurar dimensiones exactas
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const width = dimensions.width;
  const height = dimensions.height;
  const breakpoint = getBreakpoint(width);

  const isPhone = width < BREAKPOINTS.sm;
  const isMobile = width < BREAKPOINTS.md;
  const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
  const isLaptop = width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl;
  const isDesktop = width >= BREAKPOINTS.xl;
  const isPortrait = height > width;
  const isLandscape = width >= height;

  const isAbove = (bp: keyof typeof BREAKPOINTS) => width >= BREAKPOINTS[bp];
  const isBelow = (bp: keyof typeof BREAKPOINTS) => width < BREAKPOINTS[bp];

  return {
    breakpoint,
    isPhone,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    width,
    height,
    isPortrait,
    isLandscape,
    isAbove,
    isBelow,
  };
};

export default useBreakpoint;
