import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  ShieldCheck,
  Layers,
  Flame,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";

const CuidadosLajas = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Tratamiento de Lajas y Piedras Rústicas: Control de Salitre | AV SOLUCRET"
        description="Guía técnica de desincrustación química neutra y sellado hidrófugo para lajas, mosaicos y piedras rústicas en la costa de Lima. Proteja sus exteriores contra la brisa marina."
        canonical="https://avsolucret.com/blog/cuidados-lajas"
        type="article"
        image="https://avsolucret.com/blog/03-blog.png"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Cuidados de Lajas y Piedras Rústicas", path: "/blog/cuidados-lajas" },
        ]}
        keywords={[
          "tratamiento de lajas lima",
          "salitre en piedras rusticas miraflores",
          "sellador hidrofugo para lajas",
          "mantenimiento mosaicos rossello lima",
          "sellado de piedra talamoye",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Tratamiento de Lajas y Piedras Rústicas: Control de Salitre y Humedad Costera",
          image: "https://avsolucret.com/blog/03-blog.png",
          author: {
            "@type": "Person",
            name: "Equipo Técnico AV SOLUCRET",
          },
          publisher: {
            "@type": "Organization",
            name: "AV SOLUCRET",
            logo: {
              "@type": "ImageObject",
              url: "https://avsolucret.com/main/logo.png",
            },
          },
          datePublished: "2026-09-15",
        }}
      />

      <Header activeTab="Blog" />

      <main className="pt-28 lg:pt-36">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-diamond-700 hover:text-diamond-800 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver a la Biblioteca Técnica</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-mono font-bold uppercase tracking-wider">
                PIEDRAS RÚSTICAS & LAJAS
              </span>
              <span className="text-xs text-anthracite-400 font-sans">
                Lectura técnica de 6 minutos • Septiembre 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
              Tratamiento de Lajas y Piedras Rústicas: <br className="hidden sm:inline" />
              <span className="text-diamond-700">Control de Salitre y Humedad Costera</span>
            </h1>

            <p className="font-sans text-lg text-anthracite-600 leading-relaxed border-l-4 border-gold-500 pl-4 py-1 italic bg-gold-50/30 rounded-r-lg">
              "En distritos de la costa de Lima como Miraflores, Barranco y Chorrillos, la brisa marina deposita sales continuas que pulverizan las lajas desde adentro si no cuentan con un sellado permeable al vapor."
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/blog/03-blog.png"
              alt="Piso exterior de lajas y piedras rústicas selladas"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-xs flex items-center justify-between">
              <span>Terraza exterior en Malecón de Miraflores con tratamiento de sellado penetrante transpirable.</span>
              <span className="font-mono text-gold-400 font-bold">AV SOLUCRET LAB</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-8 font-sans text-anthracite-700 leading-relaxed text-sm sm:text-base">
            
            <div className="bg-surface-low p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900 mb-3 flex items-center gap-2.5">
                <Sun className="w-5 h-5 text-gold-600" />
                La Patología de la Eflorescencia Salina en Lima
              </h2>
              <p className="text-anthracite-600 text-sm leading-relaxed">
                Las lajas (talamoye, arequipeña, pizarra o andesita) tienen una porosidad abierta del 8% al 15%. La humedad subterránea y la niebla costera cargada de sales ascienden por capilaridad. Al evaporarse el agua bajo el sol del mediodía, las sales cristalizan dentro del poro mineral expandiéndose mecánicamente (criptoeflorescencia), lo que provoca el <strong>desmoronamiento y descascaramiento del piso en escamas</strong>.
              </p>
            </div>

            {/* Protocol Steps */}
            <section className="space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Protocolo Técnico de Recuperación y Blindaje
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    1. Lavado Químico Desincrustante Neutro
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    Eliminación de eflorescencias superficiales y hongos con tensoactivos biodegradables no ácidos. Cero ácido muriático que devora el aglomerante.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    2. Deshidratación Completa
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    El sustrato debe secar con humedad relativa &lt; 4% antes de aplicar selladores. Sellar sobre piedra húmeda atrapa condensación y genera manchas blancas.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    3. Sellado Penetrante Hidrófugo
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    Aplicación de sellador penetrante transpirable: crea una barrera repelente al agua sin sellar la respirabilidad de la piedra.
                  </p>
                </div>
              </div>
            </section>

            {/* Warning */}
            <section className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-3">
              <h3 className="font-heading font-bold text-base flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                El grave error de las "Lacas Efecto Húmedo" convencionales
              </h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                Muchos maestros de obra aplican lacas acrílicas o barnices para piedras para lograr "brillo húmedo". En Lima, la humedad que sube del terreno queda atrapada bajo la película plástica de la laca. En 2 o 3 meses, la laca se vuelve blanquecina, se ampolla y se descascara, requiriendo un costoso proceso de decapado químico solvente.
              </p>
            </section>

            {/* Bottom CTA Banner */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-anthracite-900 to-anthracite-800 text-white shadow-ambient">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold text-gold-400 tracking-widest uppercase">
                  BLINDAJE DE PIEDRAS EXTERIORES EN LIMA
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white mt-1 mb-3">
                  ¿Tus lajas o terrazas presentan salitre continuo?
                </h3>
                <p className="text-xs text-anthracite-300 mb-6 leading-relaxed">
                  Realizamos pruebas de impregnación en tus pisos exteriores para verificar la absorción y porosidad del sustrato.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-gold-500 hover:bg-gold-600 text-anthracite-900 font-heading font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm"
                  >
                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar Tratamiento por WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-heading text-xs px-5 py-2.5 rounded-lg"
                  >
                    <Link to="/contacto">Agendar Visita In Situ</Link>
                  </Button>
                </div>
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

export default CuidadosLajas;
