import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  AlertOctagon, 
  CheckCircle2, 
  Flame, 
  Droplets, 
  ShieldAlert, 
  ArrowRight,
  HelpCircle,
  Wrench
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const AcidoMuriaticoPisosPeligro = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Ácido Muriático en Mármol y Terrazo: Por Qué los Arruina y Cómo Repararlos"
        description="¿Manchaste o quemaste tu piso de mármol o terrazo con ácido muriático? Aprende por qué ocurre la reacción química y cuál es el único método real para restaurarlo a nuevo."
        canonical="https://avsolucret.com/blog/peligro-acido-muriatico-marmol-terrazo-reparacion"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Peligro del Ácido Muriático en Pisos", path: "/blog/peligro-acido-muriatico-marmol-terrazo-reparacion" },
        ]}
        type="article"
        image="https://avsolucret.com/general/piso-marmol.webp"
        keywords={[
          "acido muriatico en marmol como quitar manchas",
          "reparar piso quemado por acido lima",
          "quitar mancha blanca acido terrazo",
          "como limpiar piso manchado con acido clorhidrico",
          "pulido de emergencia pisos san isidro miraflores",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Por Qué NUNCA Debes Usar Ácido Muriático en Mármol o Terrazo: Cómo Reparar el Daño Químico",
          image: "https://avsolucret.com/general/piso-marmol.webp",
          author: {
            "@type": "Person",
            name: "Ing. Alejandro Vidal",
            jobTitle: "Especialista en Tratamiento de Pisos",
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
            "Diagnóstico de corrosión por ácido clorhídrico en pavimentos carbonatados y protocolo de desbaste reconstructivo en Lima, Perú.",
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
              <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
                ALERTA DE PATOLOGÍA QUÍMICA
              </span>
              <span className="text-xs text-anthracite-400 font-sans">
                Lectura técnica de 5 minutos • Octubre 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
              Por Qué NUNCA Debes Usar Ácido Muriático en Mármol o Terrazo: <br className="hidden sm:inline" />
              <span className="text-red-600">Cómo Reparar el Daño Químico</span>
            </h1>

            <p className="font-sans text-lg text-anthracite-600 leading-relaxed border-l-4 border-red-500 pl-4 py-1 italic bg-red-50/30 rounded-r-lg">
              "El ácido muriático no es un limpiador: es ácido clorhídrico industrial diluido. Al tocar mármol o terrazo, no 'limpia la mugre', sino que disuelve instantáneamente la piedra viva."
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/general/piso-marmol.webp"
              alt="Mármol pulido restaurado tras ataque químico por ácido"
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="p-3 bg-surface-low text-xs text-anthracite-500 flex items-center justify-between border-t border-slate-200">
              <span>Superficie recuperada al 100% mediante micro-desbaste diamantado controlado sin polvo.</span>
              <span className="font-mono text-red-600 font-bold">CASO SAN ISIDRO</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-slate max-w-none text-anthracite-700 font-sans leading-relaxed space-y-8">
            
            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6 text-red-600" />
                1. La Reacción Química que Destruye el Pavimento
              </h2>
              <p>
                El mármol, el travertino y los fragmentos pétreos del terrazo veneciano están compuestos principalmente por <strong>carbonato de calcio ($CaCO_3$)</strong>.
              </p>
              <p>
                Cuando el ácido muriático ($HCl$) entra en contacto con la losa, se desata una reacción violenta e irreversible:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs sm:text-sm my-4 overflow-x-auto">
                <code>CaCO₃ (Piedra Noble) + 2HCl (Ácido) ➔ CaCl₂ (Sal soluble) + H₂O + CO₂ (Burbujeo)</code>
              </div>
              <p>
                Ese burbujeo efervescente que muchos confunden con "suciedad saliendo" es en realidad <strong>la propia roca mineral desintegrándose en gas de dióxido de carbono</strong>. Lo que queda en la superficie no es una mancha que se pueda lavar, sino un microcráter áspero, poroso y blanquecino donde la superficie lisa fue arrancada.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <AlertOctagon className="w-6 h-6 text-amber-600" />
                2. Los Tres Errores Fatales Tras el Accidente
              </h2>
              <ol className="list-decimal pl-5 space-y-3 text-sm">
                <li>
                  <strong>Fregar con lejía o desengrasantes fuertes:</strong> Intentar blanquear la quemadura solo genera reacciones cruzadas o añade sales que aceleran la eflorescencia.
                </li>
                <li>
                  <strong>Echar ceras líquidas para "tapar el opaco":</strong> La cera entra en el cráter abierto por el ácido, se oxida en días con la humedad de Lima y convierte la mancha blanca en una mancha amarillenta o negra.
                </li>
                <li>
                  <strong>Raspar con esponjas verdes abrasivas:</strong> Rallará los bordes sanos del mármol circundante, agrandando el área dañada.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-diamond-700" />
                3. La Única Solución Real: Desbaste Mecánico Diamantado
              </h2>
              <p>
                Dado que el material superficial fue destruido físicamente, <strong>ningún químico ni producto milagroso puede devolverle el brillo por arte de magia</strong>. Se debe rebajar la milimétrica capa afectada hasta alcanzar la cota de piedra sana subyacente.
              </p>
              <p>
                En <strong>AV SOLUCRET</strong> realizamos un protocolo de rescate en 4 fases:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-surface-low border border-slate-200">
                  <span className="text-xs font-mono font-bold text-diamond-700">FASE 1: NEUTRALIZACIÓN</span>
                  <p className="text-xs text-anthracite-600 mt-1">
                    Lavado alcalino compensatorio para frenar la actividad corrosiva ácida dentro de las fisuras microscópicas.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-low border border-slate-200">
                  <span className="text-xs font-mono font-bold text-diamond-700">FASE 2: CORTE DIAMANTADO</span>
                  <p className="text-xs text-anthracite-600 mt-1">
                    Desbaste milimétrico controlado con pastillas de diamante grano 100 y 200 hasta emparejar la cota de la quemadura.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-low border border-slate-200">
                  <span className="text-xs font-mono font-bold text-diamond-700">FASE 3: REFRACTANCIA PROGRESIVA</span>
                  <p className="text-xs text-anthracite-600 mt-1">
                    Pasajes con resinas diamantadas grano 400, 800, 1500 y 3000 hasta regenerar el reflejo espejo de fábrica.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-low border border-slate-200">
                  <span className="text-xs font-mono font-bold text-diamond-700">FASE 4: NANOSELLADO OLEOFÓBICO</span>
                  <p className="text-xs text-anthracite-600 mt-1">
                    Blindaje capilar con <em>AV-SHIELD™ Ultra</em> para que futuros derrames de vinagre, limón o desinfectantes no penetren el mineral.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* CTA Banner inside article */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-anthracite-900 to-anthracite-800 text-white shadow-ambient">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono font-bold text-red-400 tracking-widest uppercase">
                EMERGENCIAS POR QUEMADURAS QUÍMICAS
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-white mt-1 mb-3">
                ¿Tu piso sufrió daño por ácido muriático o limpiadores corrosivos?
              </h3>
              <p className="text-xs text-anthracite-300 mb-6 leading-relaxed">
                Envíanos una foto en primer plano de la mancha o zona afectada por WhatsApp. Nuestros ingenieros evaluarán la profundidad del ataque y te indicarán el protocolo de recuperación sin costo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-red-500 hover:bg-red-600 text-white font-heading font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm"
                >
                  <a
                    href="https://wa.me/51961801932?text=Hola%20AV%20SOLUCRET,%20mi%20piso%20se%20manchó%20con%20ácido%20y%20necesito%20ayuda%20para%20repararlo."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar Foto de la Mancha por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-heading text-xs px-5 py-2.5 rounded-lg"
                >
                  <Link to="/contacto">Coordinar Diagnóstico</Link>
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

export default AcidoMuriaticoPisosPeligro;
