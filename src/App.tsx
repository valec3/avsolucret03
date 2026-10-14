import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Trabajos from "./pages/Trabajos";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import CuidadosMarmol from "./pages/blog/CuidadosMarmol";
import CuidadosPorcelanato from "./pages/blog/CuidadosPorcelanato";
import CuidadosLajas from "./pages/blog/CuidadosLajas";
import PulidoDiamantadoVsCera from "./pages/blog/PulidoDiamantadoVsCera";
import RestauracionTerrazoVeneciano from "./pages/blog/RestauracionTerrazoVeneciano";
import SalitreHumedadPisosLima from "./pages/blog/SalitreHumedadPisosLima";
import CristalizadoVsPulidoDiamantado from "./pages/blog/CristalizadoVsPulidoDiamantado";
import ConcretoPulidoIndustrial from "./pages/blog/ConcretoPulidoIndustrial";
import AcidoMuriaticoPisosPeligro from "./pages/blog/AcidoMuriaticoPisosPeligro";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import DistritoLanding from "./pages/DistritoLanding";
import ScrollToTop from "./components/ScrollToTop";
import SocialSidebar from "./components/SocialSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/cuidados-marmol" element={<CuidadosMarmol />} />
          <Route
            path="/blog/cuidados-porcelanato"
            element={<CuidadosPorcelanato />}
          />
          <Route path="/blog/cuidados-lajas" element={<CuidadosLajas />} />
          <Route
            path="/blog/pulido-diamantado-vs-ceras"
            element={<PulidoDiamantadoVsCera />}
          />
          <Route
            path="/blog/restauracion-terrazo-veneciano-guia"
            element={<RestauracionTerrazoVeneciano />}
          />
          <Route
            path="/blog/salitre-humedad-pisos-costa-lima"
            element={<SalitreHumedadPisosLima />}
          />
          <Route
            path="/blog/cristalizado-vs-pulido-diamantado-diferencias"
            element={<CristalizadoVsPulidoDiamantado />}
          />
          <Route
            path="/blog/concreto-pulido-industrial-superflat-lima"
            element={<ConcretoPulidoIndustrial />}
          />
          <Route
            path="/blog/peligro-acido-muriatico-marmol-terrazo-reparacion"
            element={<AcidoMuriaticoPisosPeligro />}
          />
          <Route
            path="/politica-de-privacidad"
            element={<PoliticaPrivacidad />}
          />
          <Route
            path="/terminos-y-condiciones"
            element={<TerminosCondiciones />}
          />
          <Route path="/zonas/:slug" element={<DistritoLanding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
