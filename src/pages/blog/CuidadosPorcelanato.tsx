import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Layers,
  Wrench,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";

const CuidadosPorcelanato = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Manual de Cuidados del Porcelanato de Alto Tránsito | AV SOLUCRET"
        description="Protocolo de desengrase, eliminación de restos de fragua y decapado profundo para pisos de porcelanato en Lima. Sin manchas grasas ni ceras residuales."
        canonical="https://avsolucret.com/blog/cuidados-porcelanato"
        type="article"
        image="https://avsolucret.com/blog/02-blog.png"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Cuidados del Porcelanato", path: "/blog/cuidados-porcelanato" },
        ]}
        keywords={[
          "cuidados del porcelanato lima",
          "como limpiar porcelanato manchado",
          "remover fragua de porcelanato",
          "decapado de porcelanato surco",
          "limpiar porcelanato brillante opaco",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Manual de Mantenimiento para Porcelanato de Alto Tránsito",
          image: "https://avsolucret.com/blog/02-blog.png",
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
          datePublished: "2026-09-20",
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
              <span className="inline-block px-3 py-1 rounded-full bg-diamond-50 border border-diamond-200 text-diamond-700 text-xs font-mono font-bold uppercase tracking-wider">
                PORCELANATO & CERÁMICOS
              </span>
              <span className="text-xs text-anthracite-400 font-sans">
                Lectura técnica de 4 minutos • Septiembre 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
              Manual de Mantenimiento para <br className="hidden sm:inline" />
              <span className="text-diamond-700">Porcelanato de Alto Tránsito</span>
            </h1>

            <p className="font-sans text-lg text-anthracite-600 leading-relaxed border-l-4 border-diamond-500 pl-4 py-1 italic bg-diamond-50/30 rounded-r-lg">
              "El porcelanato no se raya con facilidad, pero tiene un enemigo silencioso: la acumulación de detergentes con bio-grasas y los restos de fragua polimérica mal retirados en entrega de obra."
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/blog/02-blog.png"
              alt="Piso de porcelanato brillante rectificado"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-xs flex items-center justify-between">
              <span>Superficie decapada y desincrustada tras fin de obra en Santiago de Surco.</span>
              <span className="font-mono text-diamond-400 font-bold">AV SOLUCRET LAB</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-8 font-sans text-anthracite-700 leading-relaxed text-sm sm:text-base">
            
            <div className="bg-surface-low p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900 mb-3 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-diamond-600" />
                ¿Por qué mi porcelanato se ve opaco o manchado a contra-luz?
              </h2>
              <p className="text-anthracite-600 text-sm leading-relaxed">
                El esmalte vítreo del porcelanato pulido o satinado no es absorbente (absorción de agua &lt; 0.5%). Cuando se perciben huellas de zapatos o una película lechosa, no es el piso el que está desgastado, sino una <strong>capa acumulada de residuos grasosos</strong> provocada por limpiadores comerciales con aromatizantes y ceras autolimpiables que jamás deben usarse sobre gres porcelánico.
              </p>
            </div>

            {/* Protocol */}
            <section className="space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Las 3 Reglas de Oro para Porcelanato Impecable
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    1. Cero Suavizantes ni Ceras
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    Use soluciones alcohólicas neutras desengrasantes. Las ceras forman un filme que atrapa pelusa y se mancha con cada pisada.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    2. Retiro de Velo de Obra
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    Si el piso es nuevo, el residuo blanquecino es fragua cementicia. Requiere un desincrustante específico no clorhídrico de acción amortiguada.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    3. Limpieza de Juntas Epóxicas
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    Las juntas de dilatación deben limpiarse con cepillo de cerdas de nylon y jabón alcalino neutro para prevenir colonias de moho por humedad limeña.
                  </p>
                </div>
              </div>
            </section>

            {/* Decapado Banner */}
            <div className="p-6 rounded-2xl bg-diamond-50/70 border border-diamond-200 text-diamond-950 space-y-2">
              <h3 className="font-heading font-bold text-base flex items-center gap-2 text-diamond-900">
                <Wrench className="w-5 h-5 text-diamond-700" />
                Servicio Especializado: Decapado y Desengrase Mecánico
              </h3>
              <p className="text-xs text-diamond-900 leading-relaxed">
                Cuando el porcelanato ha acumulado años de ceras y grasas domésticas, el trapero común ya no sirve. En <strong>AV SOLUCRET</strong> realizamos un decapado rotativo con máquina monodisco de baja velocidad y pads de microfibra desincrustante que devuelven el brillo original sin rayar el esmalte.
              </p>
            </div>

            {/* Bottom CTA Banner */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-anthracite-900 to-anthracite-800 text-white shadow-ambient">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold text-gold-400 tracking-widest uppercase">
                  LIMPIEZA PROFUNDA & DECAPADO EN LIMA
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white mt-1 mb-3">
                  ¿Tu porcelanato tiene restos de obra o grasa rebelde?
                </h3>
                <p className="text-xs text-anthracite-300 mb-6 leading-relaxed">
                  Realizamos decapado profesional en departamentos, oficinas y comercios sin interrumpir tus actividades cotidianas.
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
                      Cotizar Decapado por WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-heading text-xs px-5 py-2.5 rounded-lg"
                  >
                    <Link to="/contacto">Coordinar Evaluación</Link>
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

export default CuidadosPorcelanato;
