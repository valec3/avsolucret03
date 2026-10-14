import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * Garantiza que cada transición de ruta en react-router-dom
 * devuelva la vista a la cota superior (top: 0, left: 0) inmediatamente.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si la URL contiene un fragmento #id, dejamos que el navegador o un selector lo busque
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // En cambio de pantalla regular, reseteamos el scroll a la cumbre de forma instantánea
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
