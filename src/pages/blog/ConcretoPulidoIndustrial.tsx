import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Layers, 
  CheckCircle2, 
  HardHat, 
  Clock, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const ConcretoPulidoIndustrial = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Concreto Pulido y Densificado con Litio en Lima: Guía de Pisos Superflat"
        description="Aprenda cómo transformar losas de concreto rústico en pavimentos pulidos Superflat con densificadores moleculares de silicato de litio en Lima y Perú."
        canonical="https://avsolucret.com/blog/concreto-pulido-industrial-superflat-lima"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Concreto Pulido y Densificado con Litio", path: "/blog/concreto-pulido-industrial-superflat-lima" },
        ]}
        type="article"
        image="https://avsolucret.com/general/piso-concreto.jpg"
        keywords={[
          "concreto pulido lima peru",
          "piso de concreto superflat pulido",
          "densificador de litio concreto peru",
          "pulido de cemento industrial lurin",
          "revestimiento epoxico vs concreto pulido",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Concreto Pulido y Densificado con Litio en Lima: Guía de Pisos Superflat para Arquitectura y Logística",
          image: "https://avsolucret.com/general/piso-concreto.jpg",
          author: {
            "@type": "Person",
            name: "Ing. Alejandro Vidal",
            jobTitle: "Ingeniero Especialista en Superficies",
          },
          publisher: {
            "@type": "Organization",
            name: "AV SOLUCRET",
            logo: {
              "@type": "ImageObject",
              url: "https://avsolucret.com/main/logo.png",
            },
          },
          datePublished: "2026-10-12",
          description:
            "Especificaciones técnicas y protocolo de densificación química con nanopartículas de litio para pavimentos industriales y comerciales en Lima.",
        }}
      />

      <Header activeTab="Blog" />

      <main className="pt-28 lg:pt-36">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-diamond-700 hover:text-diamond-800 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver a la Biblioteca Técnica</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-diamond-50 border border-diamond-200 text-diamond-800 text-xs font-mono font-bold uppercase tracking-wider">
                INGENIERÍA DE PAVIMENTOS
              </span>
              <span className="text-xs text-anthracite-400 font-sans">
                Lectura técnica de 7 minutos • Octubre 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
              Concreto Pulido y Densificado con Litio en Lima: <br className="hidden sm:inline" />
              <span className="text-diamond-700">Guía de Pisos Superflat para Arquitectura y Logística</span>
            </h1>

            <p className="font-sans text-lg text-anthracite-600 leading-relaxed border-l-4 border-diamond-600 pl-4 py-1 italic bg-diamond-50/30 rounded-r-lg">
              "El concreto no es solo un material estructural de soporte: con densificación molecular se convierte en un pavimento pétreo continuo, sin desprendimiento de polvo de cemento y con una dureza que supera las resinas epóxicas convencionales."
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/general/piso-concreto.jpg"
              alt="Losa de concreto pulido industrial con reflejo especular en centro logístico"
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="p-3 bg-surface-low text-xs text-anthracite-500 flex items-center justify-between border-t border-slate-200">
              <span>Pavimento Superflat pulido hasta grano 1500 con densificador penetrante de litio.</span>
              <span className="font-mono text-diamond-700 font-bold">LURÍN / VILLA EL SALVADOR</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-slate max-w-none text-anthracite-700 font-sans leading-relaxed space-y-8">
            
            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <HardHat className="w-6 h-6 text-diamond-600" />
                1. El Problema del Desprendimiento de Polvo (Dusting) en Lima
              </h2>
              <p>
                En almacenes, estacionamientos y restaurantes de diseño industrial en Lima, la queja más recurrente es el polvo constante de cemento. Este fenómeno, técnicamente llamado <em>dusting</em>, ocurre por la debilidad de la capa superior de lechada y el sangrado del concreto fresco. Las ruedas de los montacargas y el tránsito peatonal desgastan los enlaces de silicato libres, generando una niebla continua de polvo fino que ensucia mercadería y filtros de aire.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-gold-600" />
                2. ¿Cómo funciona la Densificación con Litio Molecular?
              </h2>
              <p>
                A diferencia de los antiguos endurecedores de silicato de sodio (que generaban eflorescencias blanquecinas difíciles de lavar), la nanotecnología actual utiliza <strong>Silicato de Litio</strong>.
              </p>
              <p>
                Al penetrar hasta 5 a 8 mm dentro de la matriz porosa del concreto, el litio reacciona químicamente con el <em>hidróxido de calcio libre</em> (cal hidratada sobrante del fraguado) y produce <strong>Silicato de Calcio Hidratado (CSH)</strong>. Los cristales CSH crecen dentro de los canales capilares, sellando la losa desde el interior hacia afuera y aumentando la dureza superficial hasta 7 u 8 en la escala de Mohs.
              </p>
            </section>

            {/* Industrial Advantages Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl bg-surface-low border border-slate-200 shadow-sm">
                <div className="font-heading font-bold text-sm text-anthracite-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Cero Desprendimiento Epóxico
                </div>
                <p className="text-xs text-anthracite-500">
                  Las pinturas o autonivelantes epóxicos terminan descascarándose por humedad freática o impacto de paletas. El concreto pulido es el propio sustrato, por lo que nunca se deslamina.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-low border border-slate-200 shadow-sm">
                <div className="font-heading font-bold text-sm text-anthracite-900 mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-diamond-600" />
                  Ahorro en Iluminación y Mantenimiento
                </div>
                <p className="text-xs text-anthracite-500">
                  Una losa pulida a grano 800 o 1500 refleja la luz natural y luminarias LED hasta en un 35%, reduciendo el consumo eléctrico de plantas logísticas y locales comerciales.
                </p>
              </div>
            </div>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-diamond-700" />
                3. Secuencia Técnica de Ejecución en Obra
              </h2>
              <p>
                En <strong>AV SOLUCRET</strong> ejecutamos el protocolo internacional CSDA (Concrete Sawing & Drilling Association):
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Desbaste Metálico (Grano 30 a 70):</strong> Nivelación de ondulaciones, eliminación de marcas de helicóptero o lechada residual con platos de diamante de liga metálica.
                </li>
                <li>
                  <strong>Micro-Afinado Híbrido (Grano 100 a 200):</strong> Homogeneización del agregado mineral expuesto (sal y pimienta o agregado medio).
                </li>
                <li>
                  <strong>Inundación con Densificador de Litio:</strong> Saturación homogénea a baja presión y tiempo de penetración de 45 minutos para completar la cristalización CSH.
                </li>
                <li>
                  <strong>Pulido con Resinas Diamantadas (Grano 400, 800 y 1500):</strong> Cierre de poros y generación del brillo especular mecánico.
                </li>
                <li>
                  <strong>Escudo Nanosellador Térmico:</strong> Capa protectora anti-manchas contra derrames de aceites mecánicos, café y líquidos industriales.
                </li>
              </ul>
            </section>

          </div>

          {/* CTA Banner inside article */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-anthracite-900 to-anthracite-800 text-white shadow-ambient">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono font-bold text-gold-400 tracking-widest uppercase">
                CONSULTORÍA PARA ARQUITECTOS & CONTRATISTAS
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-white mt-1 mb-3">
                ¿Planeas un proyecto con piso de concreto pulido en Lima?
              </h3>
              <p className="text-xs text-anthracite-300 mb-6 leading-relaxed">
                Coordinamos pruebas de muestra in situ en tus losas para determinar la dureza con esclerómetro Schmidt y definir el nivel de brillo requerido por las especificaciones técnicas del proyecto.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gold-500 hover:bg-gold-600 text-anthracite-900 font-heading font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm"
                >
                  <a
                    href="https://wa.me/51961801932?text=Hola%20AV%20SOLUCRET,%20deseo%20asesoría%20técnica%20para%20un%20proyecto%20de%20concreto%20pulido%20y%20densificado."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar con Ingeniero por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-heading text-xs px-5 py-2.5 rounded-lg"
                >
                  <Link to="/contacto">Coordinar Muestra en Obra</Link>
                </Button>
              </div>
            </div>
          </div>

        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConcretoPulidoIndustrial;
