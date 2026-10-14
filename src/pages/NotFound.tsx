import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  ArrowLeft, 
  Home, 
  Layers, 
  Briefcase, 
  BookOpen, 
  Phone,
  Search
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log informativo para monitoreo de rutas rotas
    console.warn("404 Inexistente detectado:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="404 - Coordenada No Encontrada | AV SOLUCRET"
        description="La página que busca no existe o fue reubicada en nuestro nuevo catálogo de ingeniería de superficies."
        canonical="https://avsolucret.com/404"
        keywords={["error 404 av solucret"]}
      />

      <Header />

      <main className="pt-32 lg:pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200">
              <Compass className="w-4 h-4 text-gold-600 animate-spin" style={{ animationDuration: "12s" }} />
              <span className="label-editorial text-gold-700 text-xs font-bold tracking-widest">
                COORDENADA NO ENCONTRADA EN PLANO
              </span>
            </div>

            {/* Big 404 Number */}
            <div className="font-heading text-7xl sm:text-9xl font-black text-anthracite-900 tracking-tighter select-none">
              4<span className="text-diamond-600">0</span>4
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-anthracite-900 tracking-tight">
              Esta superficie mineral no se encuentra en obra
            </h1>

            <p className="font-sans text-sm sm:text-base text-anthracite-500 max-w-xl mx-auto leading-relaxed">
              La dirección <code className="px-2 py-0.5 rounded bg-surface-low border border-slate-200 font-mono text-xs text-diamond-700">{location.pathname}</code> fue reestructurada como parte de nuestra nueva arquitectura técnica o no existe.
            </p>

            {/* Quick Navigation Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              <Link
                to="/"
                className="p-4 rounded-xl bg-surface-low hover:bg-slate-100 border border-slate-200/80 transition-all group hover:-translate-y-0.5"
              >
                <Home className="w-5 h-5 text-diamond-600 mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-xs font-bold text-anthracite-900">Inicio</div>
                <div className="text-[11px] text-anthracite-500">Página principal</div>
              </Link>

              <Link
                to="/servicios"
                className="p-4 rounded-xl bg-surface-low hover:bg-slate-100 border border-slate-200/80 transition-all group hover:-translate-y-0.5"
              >
                <Layers className="w-5 h-5 text-diamond-600 mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-xs font-bold text-anthracite-900">Servicios</div>
                <div className="text-[11px] text-anthracite-500">Catálogo técnico</div>
              </Link>

              <Link
                to="/trabajos"
                className="p-4 rounded-xl bg-surface-low hover:bg-slate-100 border border-slate-200/80 transition-all group hover:-translate-y-0.5"
              >
                <Briefcase className="w-5 h-5 text-diamond-600 mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-xs font-bold text-anthracite-900">Trabajos</div>
                <div className="text-[11px] text-anthracite-500">Casos de éxito</div>
              </Link>

              <Link
                to="/blog"
                className="p-4 rounded-xl bg-surface-low hover:bg-slate-100 border border-slate-200/80 transition-all group hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5 text-diamond-600 mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-xs font-bold text-anthracite-900">Blog Técnico</div>
                <div className="text-[11px] text-anthracite-500">Guías & patología</div>
              </Link>
            </div>

            {/* Back action */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="bg-anthracite-900 hover:bg-anthracite-800 text-white font-heading font-bold text-xs px-6 py-2.5 rounded-lg shadow-sm"
              >
                <Link to="/">
                  <ArrowLeft className="w-3.5 h-3.5 mr-2" />
                  Regresar a la Portada
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-anthracite-700 hover:bg-slate-50 font-heading text-xs px-6 py-2.5 rounded-lg"
              >
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-emerald-600" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>

          </motion.div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
