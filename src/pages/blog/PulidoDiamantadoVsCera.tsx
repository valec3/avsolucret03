import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Clock, 
  Droplets,
  Scale,
  Microscope,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const PulidoDiamantadoVsCera = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Pulido Diamantado vs. Ceras: Por Qué la Cera Arruina tus Pisos en Lima"
        description="Comparativa técnica entre pulido diamantado y encerado tradicional. Descubra cómo la humedad de Lima oxida las ceras y por qué el diamante reactiva el silicato natural."
        canonical="https://avsolucret.com/blog/pulido-diamantado-vs-ceras"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Pulido Diamantado vs. Ceras", path: "/blog/pulido-diamantado-vs-ceras" },
        ]}
        type="article"
        keywords={[
          "pulido diamantado vs cera",
          "encerado de pisos lima",
          "como quitar cera amarilla de marmol",
          "pulido de pisos san isidro",
          "restauracion de marmol sin ceras",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Pulido Diamantado vs. Ceras Tradicionales: Por Qué la Cera Arruina los Pisos de Mármol en Lima",
          image: "https://avsolucret.com/gallery/pulido-diamantado-vitrificado.jpeg",
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
          datePublished: "2026-10-10",
          description:
            "Análisis petrográfico de la degradación por ceras poliméricas en pavimentos de mármol y terrazo en la costa de Lima.",
        }}
      />

      <Header activeTab="Blog" />

      <main className="pt-28 lg:pt-36">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          
          {/* Breadcrumbs / Back button */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-anthracite-500 hover:text-diamond-700">
              <Link to="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al Blog de Ingeniería</span>
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-xs font-mono text-anthracite-400 mb-4">
              <span className="text-diamond-700 font-bold bg-diamond-50 px-2.5 py-0.5 rounded border border-diamond-200">
                TECNOLOGÍA DIAMANTADA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                6 min de lectura
              </span>
              <span>•</span>
              <span>Por Ing. Alejandro Vidal (CIP)</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
              Pulido Diamantado vs. Ceras Tradicionales: Por Qué la Cera Arruina los Pisos de Mármol en Lima
            </h1>

            <p className="font-sans text-lg text-anthracite-500 leading-relaxed">
              Durante décadas se ha vendido la ilusión del "encerado brillante" como solución rápida.
              Sin embargo, bajo el microscopio y ante el implacable clima de Lima, la cera es el
              mayor enemigo de la piedra noble. A continuación, explicamos la física detrás de este error.
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/gallery/pulido-diamantado-vitrificado.jpeg"
              alt="Comparativa de brillo por pulido diamantado versus cera sintética"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-sm rounded text-white text-[11px] font-mono">
              Reflectometría 94 GU sin películas químicas agregadas
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none space-y-8 text-anthracite-600 font-sans leading-relaxed text-base">
            
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                1. El Efecto "Película Ocluyente" y la Humedad Costera de Lima
              </h2>
              <p>
                Lima Metropolitana presenta niveles promedio de humedad relativa que oscilan entre el{" "}
                <strong>80% y 98%</strong> durante gran parte del año. Las piedras minerales como el mármol,
                el terrazo y el travertino son cuerpos porosos que necesitan "respirar": permiten el intercambio
                natural de vapor entre el subsuelo y el ambiente.
              </p>
              <p>
                Cuando se aplica una cera convencional (generalmente polímeros acrílicos o parafinas emulsionadas),
                se sella artificialmente la boca del poro. El vapor de agua proveniente de la losa de concreto
                queda atrapado bajo esa película plástica. ¿El resultado inevitable?{" "}
                <strong>Oxidación prematura, manchas de condensación blanquecina y el típico amarilleo</strong>{" "}
                que destruye la pureza del color de la cantera.
              </p>
            </section>

            {/* Warning Callout */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-heading text-sm text-amber-900 block mb-1">
                  La trampa del ciclo de encerado infinito:
                </strong>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Cada nueva capa de cera que se aplica se funde con la suciedad ambiental y el polvo de los zapatos.
                  Con el tiempo, el piso acumula de 5 a 10 capas de polímero quemado que solo pueden retirarse
                  mediante un decapado alcalino agresivo.
                </p>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                2. ¿En qué consiste realmente el Pulido Diamantado?
              </h2>
              <p>
                A diferencia de la cera, el diamantado no deposita ningún material sobre el suelo. Se trata de una{" "}
                <strong>intervención puramente mecánica y físico-química</strong>.
              </p>
              <p>
                Mediante maquinaria rotativa planetaria de 380V y almohadillas que incorporan partículas de diamante
                industrial microscópico, se desbasta una micra milimétrica de la superficie degradada.
                La secuencia abrasiva avanza gradualmente:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 list-none my-6">
                <li className="p-3 bg-surface-low rounded-xl border border-slate-200 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-diamond-600 shrink-0" />
                  <span><strong>Granos 50 - 200:</strong> Corte y supresión de rayas profundas.</span>
                </li>
                <li className="p-3 bg-surface-low rounded-xl border border-slate-200 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-diamond-600 shrink-0" />
                  <span><strong>Granos 400 - 800:</strong> Cierre del poro y rectificación óptica.</span>
                </li>
                <li className="p-3 bg-surface-low rounded-xl border border-slate-200 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-diamond-600 shrink-0" />
                  <span><strong>Granos 1500 - 3000:</strong> Vitrificado cerámico de brillo espejo.</span>
                </li>
                <li className="p-3 bg-surface-low rounded-xl border border-slate-200 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span><strong>AV-SHIELD™ Ultra:</strong> Escudo nanométrico transpirable.</span>
                </li>
              </ul>

              <p>
                El brillo que se obtiene refleja la luz porque la superficie ha quedado microscópicamente plana,
                no porque haya una capa química pegajosa encima.
              </p>
            </section>

            {/* Comparison Table */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                3. Tabla Comparativa: Diamantado vs. Cera
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-surface-low text-anthracite-800 font-heading">
                    <tr>
                      <th className="p-3.5 border-b border-slate-200">Parámetro Técnico</th>
                      <th className="p-3.5 border-b border-slate-200 text-diamond-700">Pulido Diamantado Pro</th>
                      <th className="p-3.5 border-b border-slate-200 text-red-600">Ceras Tradicionales</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3.5 font-semibold text-anthracite-800">Naturaleza del Brillo</td>
                      <td className="p-3.5 font-bold text-diamond-700">Reflectancia mineral pura de la roca</td>
                      <td className="p-3.5 text-anthracite-500">Película plástica artificial</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-anthracite-800">Durabilidad Típica</td>
                      <td className="p-3.5 font-bold text-diamond-700">3 a 5 años sin amarilleo</td>
                      <td className="p-3.5 text-anthracite-500">2 a 4 semanas (requiere reaplicación)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-anthracite-800">Respirabilidad del Poro</td>
                      <td className="p-3.5 font-bold text-diamond-700">100% permeable al vapor</td>
                      <td className="p-3.5 text-anthracite-500">0% (oclusión total, atrapa humedad)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-anthracite-800">Reacción al Calor / Sol</td>
                      <td className="p-3.5 font-bold text-diamond-700">Inmune (resistente a rayos UV)</td>
                      <td className="p-3.5 text-anthracite-500">Se ablanda, raya y amarillea</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-anthracite-800">Mantenimiento Diario</td>
                      <td className="p-3.5 font-bold text-diamond-700">Mopa seca o agua con pH neutro</td>
                      <td className="p-3.5 text-anthracite-500">Decapado continuo y pulidoras ligeras</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-anthracite-900">
                4. Conclusión y Recomendación de Ingeniería
              </h2>
              <p>
                Si sus pisos de mármol o terrazo en Lima ya presentan aspecto lechoso, manchas circulares de ácido
                o un tono ámbar sucio, no intente encerar encima. El camino correcto es remover mecánicamente
                la cera envejecida, rectificar la roca con almohadillas diamantadas de alta granulometría e
                inmunizarla con nanotecnología silícica.
              </p>
            </section>

          </div>

          {/* Post Author & Conversion Box */}
          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="bg-surface-low rounded-3xl p-8 border border-slate-200/90 shadow-ambient flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest block mb-1">
                  EVALUACIÓN TÉCNICA PERSONALIZADA
                </span>
                <h3 className="font-heading text-xl font-bold text-anthracite-900 mb-1">
                  ¿Tus pisos sufrieron el efecto de ceras acumuladas?
                </h3>
                <p className="text-xs text-anthracite-500 max-w-lg">
                  Nuestros ingenieros evalúan su superficie sin costo in situ en Lima Metropolitana.
                  Diseñamos un plan de recuperación sin polvo ni ceras.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-xs py-6 px-6 rounded-xl shadow-ambient shrink-0"
                asChild
              >
                <a
                  href={`https://wa.me/51961801932?text=${encodeURIComponent(
                    "Hola AV SOLUCRET, leí su artículo sobre Pulido Diamantado vs Ceras y deseo solicitar un diagnóstico in situ para mi piso."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Consultar por WhatsApp</span>
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

export default PulidoDiamantadoVsCera;
