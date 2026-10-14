import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Wrench, 
  ArrowRight,
  Shield,
  Layers,
  Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const RestauracionTerrazoVeneciano = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Guía de Restauración de Terrazo Veneciano: Grietas, Rejuntado y Pulido"
        description="Aprenda cómo recuperar pisos de terrazo veneciano tradicional en casonas y edificios de Lima. Reparación de microfisuras, desbaste plano y brillo cerámico sin ceras."
        canonical="https://avsolucret.com/blog/restauracion-terrazo-veneciano-guia"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Restauración de Terrazo Veneciano", path: "/blog/restauracion-terrazo-veneciano-guia" },
        ]}
        type="article"
        keywords={[
          "restauracion de terrazo veneciano lima",
          "reparar grietas en piso de terrazo",
          "como limpiar piso de terrazo antiguo",
          "pulido de terrazo miraflores",
          "pulido de terrazo barranco",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Guía Definitiva de Restauración de Terrazo Veneciano: Fisuras, Rejuntado Epóxico y Nivelación",
          image: "https://avsolucret.com/general/piso-terrazo.jpg",
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
          datePublished: "2026-10-11",
          description:
            "Manual técnico para la preservación, desbaste gradual y sellado nanotecnológico de pavimentos de terrazo en Lima.",
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
                TERRAZO PATRIMONIAL & MODERNO
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                5 min de lectura
              </span>
              <span>•</span>
              <span>Por AV SOLUCRET LAB</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
              Guía Definitiva de Restauración de Terrazo Veneciano: Fisuras, Rejuntado Epóxico y Nivelación
            </h1>

            <p className="font-sans text-lg text-anthracite-500 leading-relaxed">
              El terrazo veneciano es uno de los patrimonios arquitectónicos más valiosos de Lima, presente en
              las casonas de Barranco, edificios de San Isidro y lobbies residenciales. Descubra cómo
              restaurar sus fisuras y recuperar la vivacidad de los chips de mármol sin alterar su valor histórico.
            </p>
          </header>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/general/piso-terrazo.jpg"
              alt="Terrazo Veneciano restaurado con agregado de mármol y ligante de resina"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-sm rounded text-white text-[11px] font-mono">
              Integración cromática y pulido espejo de terrazo veneciano
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-anthracite-600 font-sans leading-relaxed text-base">
            
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                1. Anatomía del Terrazo: ¿Por qué se daña con los años?
              </h2>
              <p>
                A diferencia de una baldosa homogénea, el terrazo veneciano tradicional es un suelo compuesto:
                consiste en una matriz aglomerante de cemento blanco o gris enriquecida con agregados de mármol,
                granos de cuarzo o vidrios triturados.
              </p>
              <p>
                Con el paso de las décadas, surgen tres patologías clásicas en las viviendas limeñas:
              </p>
              <ul className="space-y-2 pl-4">
                <li>
                  <strong>Micro-fisuras por dilatación y sismos:</strong> Grietas capilares que cruzan la losa y acumulan suciedad negra en las juntas.
                </li>
                <li>
                  <strong>Desgaste diferencial del cemento:</strong> La pasta cementicia es más blanda que el mármol incrustado, por lo que el tráfico la desgasta más rápido, dejando los cantos de las piedras expuestos ("cejas").
                </li>
                <li>
                  <strong>Porosidad manchada:</strong> Al perder los selladores antiguos, el terrazo absorbe grasas de cocina, café y agua jabonosa.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                2. El Secreto del Rejuntado Epóxico con Pigmentación Mimetizada
              </h2>
              <p>
                El mayor error de los maestros empastadores tradicionales es rellenar las fisuras con yeso o cemento
                blanco común. Con los meses, ese relleno se desprende o se torna gris oscuro.
              </p>
              <p>
                En <strong>AV SOLUCRET</strong> empleamos resinas epóxicas tixotrópicas formuladas con pigmentos
                minerales inorgánicos. Tomamos muestras del tono del aglomerado original y de los chips de mármol
                circundantes para formular una mezcla con idéntico índice de refracción. Una vez curada, la grieta
                queda estructuralmente soldada y ópticamente invisible.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                3. Las Fases del Protocolo de Restauración
              </h2>

              <div className="space-y-4 my-6">
                <div className="p-4 bg-surface-low rounded-xl border border-slate-200">
                  <div className="font-heading text-sm font-bold text-anthracite-900 mb-1">
                    Paso 1: Desbastado Plano y Apertura de Fisuras
                  </div>
                  <p className="text-xs text-anthracite-500">
                    Con platos metálicos grano 30/60 removemos ceras viejas, rebajamos cejas y abrimos limpiamente
                    las grietas para una adherencia estructural total.
                  </p>
                </div>

                <div className="p-4 bg-surface-low rounded-xl border border-slate-200">
                  <div className="font-heading text-sm font-bold text-anthracite-900 mb-1">
                    Paso 2: Inyección y Masillado Epóxico
                  </div>
                  <p className="text-xs text-anthracite-500">
                    Sellado a espátula de presión en cada poro y fisura abierta con resina epóxica de alta dureza Mohs.
                  </p>
                </div>

                <div className="p-4 bg-surface-low rounded-xl border border-slate-200">
                  <div className="font-heading text-sm font-bold text-anthracite-900 mb-1">
                    Paso 3: Afinado Progresivo y Brillo Diamantado
                  </div>
                  <p className="text-xs text-anthracite-500">
                    Secuencia gradual con pads resinados hasta grano 3000, eliminando marcas de desbaste y logrando
                    un plano continuo suave al tacto con reflectancia cristalina.
                  </p>
                </div>

                <div className="p-4 bg-surface-low rounded-xl border border-slate-200">
                  <div className="font-heading text-sm font-bold text-anthracite-900 mb-1">
                    Paso 4: Sellado Nanoscópico AV-SHIELD™ Ultra
                  </div>
                  <p className="text-xs text-anthracite-500">
                    Blindaje hidrofugante que previene la absorción de manchas en el aglomerado de cemento.
                  </p>
                </div>
              </div>
            </section>

          </div>

          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="bg-surface-low rounded-3xl p-8 border border-slate-200/90 shadow-ambient flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest block mb-1">
                  PATRIMONIO ARQUITECTÓNICO
                </span>
                <h3 className="font-heading text-xl font-bold text-anthracite-900 mb-1">
                  ¿Tiene un piso de terrazo que desea recuperar?
                </h3>
                <p className="text-xs text-anthracite-500 max-w-lg">
                  Evaluamos la profundidad de fisuras y formulamos la prueba de color in situ sin costo en Lima.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-xs py-6 px-6 rounded-xl shadow-ambient shrink-0"
                asChild
              >
                <a
                  href={`https://wa.me/51961801932?text=${encodeURIComponent(
                    "Hola AV SOLUCRET, leí su guía sobre Restauración de Terrazo Veneciano y deseo coordinar una visita técnica."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Consultar Restauración de Terrazo</span>
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

export default RestauracionTerrazoVeneciano;
