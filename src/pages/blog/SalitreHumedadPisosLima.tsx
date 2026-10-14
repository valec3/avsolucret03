import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  ArrowRight,
  Sun,
  Shield,
  Layers,
  ThermometerSnowflake
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const SalitreHumedadPisosLima = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Salitre y Humedad en Pisos de Lima: Cómo Combatir la Eflorescencia Salina"
        description="Especialistas en control de salitre y humedad costera en pisos de piedra, lajas y concreto en Lima Metropolitana. Desincrustación neutra y nanoselladores de penetración profunda."
        canonical="https://avsolucret.com/blog/salitre-humedad-pisos-costa-lima"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Salitre y Humedad en Pisos de Lima", path: "/blog/salitre-humedad-pisos-costa-lima" },
        ]}
        type="article"
        keywords={[
          "salitre en pisos lima",
          "como quitar salitre de piso de piedra",
          "manchas blancas en pisos miraflores barranco",
          "sellador antisalitre lima",
          "eflorescencia salina en lajas",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "El Enemigo Invisible en la Costa de Lima: Cómo Combatir el Salitre y la Humedad en Pisos de Piedra y Concreto",
          image: "https://avsolucret.com/blog/03-blog.png",
          author: {
            "@type": "Person",
            name: "Ing. Alejandro Vidal",
            jobTitle: "Gerente Técnico",
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
            "Diagnóstico de salinidad y eflorescencia higroscópica en pisos minerales de distritos costeros de Lima.",
        }}
      />

      <Header activeTab="Blog" />

      <main className="pt-28 lg:pt-36">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-anthracite-500 hover:text-diamond-700">
              <Link to="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al Blog de Ingeniería</span>
              </Link>
            </Button>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-xs font-mono text-anthracite-400 mb-4">
              <span className="text-diamond-700 font-bold bg-diamond-50 px-2.5 py-0.5 rounded border border-diamond-200">
                CLIMATOLOGÍA & MINERALOGÍA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                5 min de lectura
              </span>
              <span>•</span>
              <span>Por Ing. Alejandro Vidal (CIP)</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
              El Enemigo Invisible en la Costa de Lima: Cómo Combatir el Salitre y la Humedad en Pisos de Piedra y Concreto
            </h1>

            <p className="font-sans text-lg text-anthracite-500 leading-relaxed">
              En distritos como Miraflores, Barranco, San Isidro, Chorrillos y Magdalena, el salitre marino
              es implacable. Comprenda por qué lavar con ácido muriático empeora el problema y cómo
              la nanotecnología molecular crea una barrera hidrofóbica que frena la salinidad de raíz.
            </p>
          </header>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/blog/03-blog.png"
              alt="Pisos de piedra rústica y laja protegidos contra el salitre en Lima"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-sm rounded text-white text-[11px] font-mono">
              Tratamiento antisalitre y sellado nanométrico en exteriores
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-anthracite-600 font-sans leading-relaxed text-base">
            
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                1. ¿Qué es exactamente el Salitre y la Eflorescencia Salina?
              </h2>
              <p>
                El fenómeno comúnmente llamado "salitre" no es otra cosa que sales minerales solubles
                (sulfatos, nitratos y cloruros sódicos) que viajan disueltas en el agua capilar desde el terreno
                hacia la superficie del suelo.
              </p>
              <p>
                Cuando el agua llega a la superficie del piso y se evapora por el viento o el sol, las sales
                cristalizan. Este proceso físico genera una expansión volumétrica que no solo crea antiestéticas
                manchas blancas polvorientas, sino que{" "}
                <strong>desmorona milimétricamente la piedra o el fraguado</strong>.
              </p>
            </section>

            <div className="p-6 rounded-2xl bg-red-50/80 border border-red-200 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-heading text-sm text-red-900 block mb-1">
                  ¡Peligro! El mito letal del Ácido Muriático:
                </strong>
                <p className="text-xs text-red-800 leading-relaxed">
                  Lavar el piso con ácido muriático disuelve temporalmente la mancha superficial, pero destruye el
                  aglomerante del piso, abre los poros al doble de su tamaño y deja residuos ácidos que aceleran la
                  aparición de más salitre a los pocos días. Nunca use ácido muriático en mármol, terrazo ni piedras nobles.
                </p>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                2. La Solución Científica en Dos Etapas
              </h2>
              
              <div className="space-y-4 my-6">
                <div className="p-5 bg-surface-low rounded-xl border border-slate-200">
                  <div className="font-heading text-sm font-bold text-anthracite-900 mb-1">
                    Fase 1: Desincrustación Alcalina Neutra y Lavado Ciclónico
                  </div>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    Empleamos agentes quelantes y tensoactivos biodegradables de pH balanceado que emulsionan las
                    sales enquistadas en los poros sin atacar los minerales de la roca. Se retira con extracción
                    al vacío de alta potencia para no reinyectar el agua salina.
                  </p>
                </div>

                <div className="p-5 bg-surface-low rounded-xl border border-slate-200">
                  <div className="font-heading text-sm font-bold text-anthracite-900 mb-1">
                    Fase 2: Blindaje Nanométrico Hidrofugante con AV-SHIELD™ Ultra
                  </div>
                  <p className="text-xs text-anthracite-500 leading-relaxed">
                    A diferencia de los barnices o siliconas comerciales que crean películas plásticas que se
                    descascaran, <strong>AV-SHIELD™ Ultra</strong> penetra hasta 8 milímetros en los capilares.
                    Sus nanopartículas modifican la tensión superficial: la piedra se vuelve 100% repelente al agua
                    líquida (el agua forma gotas redondas que resbalan), pero mantiene un 100% de permeabilidad al
                    vapor. Al no ingresar agua, el salitre no puede volver a cristalizar.
                  </p>
                </div>
              </div>
            </section>

          </div>

          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="bg-surface-low rounded-3xl p-8 border border-slate-200/90 shadow-ambient flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest block mb-1">
                  PROTECCIÓN CLIMÁTICA COSTERA
                </span>
                <h3 className="font-heading text-xl font-bold text-anthracite-900 mb-1">
                  ¿Sus pisos presentan manchas blancas o salitre recurrente?
                </h3>
                <p className="text-xs text-anthracite-500 max-w-lg">
                  Coordinamos un diagnóstico in situ con kit de humedad y prueba de absorción sin costo en Lima.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-xs py-6 px-6 rounded-xl shadow-ambient shrink-0"
                asChild
              >
                <a
                  href={`https://wa.me/51961801932?text=${encodeURIComponent(
                    "Hola AV SOLUCRET, leí su artículo sobre Salitre y Humedad en Lima y deseo solicitar un diagnóstico in situ para mis pisos."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Consultar Solución Antisalitre</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SalitreHumedadPisosLima;
