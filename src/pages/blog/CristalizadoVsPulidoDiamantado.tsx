import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Scale, 
  Microscope, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

const CristalizadoVsPulidoDiamantado = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Cristalizado vs. Pulido Diamantado: Diferencias, Mitos y Cuándo Usar Cada Uno"
        description="¿Tu piso necesita cristalizado químico o pulido diamantado mecánico? Descubra las diferencias petrográficas, durabilidad real y cuándo aplicar cada tecnología."
        canonical="https://avsolucret.com/blog/cristalizado-vs-pulido-diamantado-diferencias"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Cristalizado vs. Pulido Diamantado", path: "/blog/cristalizado-vs-pulido-diamantado-diferencias" },
        ]}
        type="article"
        image="https://avsolucret.com/gallery/pulido-diamantado-vitrificado.jpeg"
        keywords={[
          "cristalizado vs pulido diamantado",
          "diferencia entre cristalizar y pulir marmol",
          "vitrificado de pisos lima",
          "acido oxalico fluorosilicato pisos",
          "pulido de marmol profesional peru",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Cristalizado Químico vs. Pulido Diamantado Mecánico: Diferencias, Mitos y Aplicación",
          image: "https://avsolucret.com/gallery/pulido-diamantado-vitrificado.jpeg",
          author: {
            "@type": "Person",
            name: "Ing. Alejandro Vidal",
            jobTitle: "Gerente Técnico (CIP)",
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
            "Guía técnica sobre la reacción termo-química del fluorosilicato frente al rectificado por diamantes sintéticos en pisos de mármol y terrazo.",
        }}
      />

      <Header activeTab="Blog" />

      <main className="pt-28 lg:pt-36">
        {/* Article Breadcrumbs & Header */}
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
                QUÍMICA VS MECÁNICA
              </span>
              <span className="text-xs text-anthracite-400 font-sans">
                Lectura técnica de 6 minutos • Octubre 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
              Cristalizado Químico vs. Pulido Diamantado: <br className="hidden sm:inline" />
              <span className="text-diamond-700">Mitos, Diferencias y Cuándo Aplicar Cada Uno</span>
            </h1>

            <p className="font-sans text-lg text-anthracite-600 leading-relaxed border-l-4 border-gold-500 pl-4 py-1 italic bg-gold-50/30 rounded-r-lg">
              "Muchos propietarios creen que cristalizar un piso rayado solucionará el problema. La realidad físico-química es otra: el cristalizado no desbasta ni repara; solo reacciona con la superficie que ya está plana y pulida."
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/gallery/pulido-diamantado-vitrificado.jpeg"
              alt="Máquina rotativa realizando pulido diamantado y cristalizado"
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="p-3 bg-surface-low text-xs text-anthracite-500 flex items-center justify-between border-t border-slate-200">
              <span>Proceso de termo-reacción bajo máquina monodisco de 175 RPM con lana de acero.</span>
              <span className="font-mono text-diamond-700 font-bold">AV SOLUCRET LAB</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-slate max-w-none text-anthracite-700 font-sans leading-relaxed space-y-8">
            
            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <Microscope className="w-6 h-6 text-diamond-600" />
                1. ¿Qué es exactamente el Pulido Diamantado? (La Fase Mecánica)
              </h2>
              <p>
                El <strong>pulido diamantado</strong> es un procedimiento puramente mecánico de rectificación y corte micro-métrico. Se emplean cabezales rotativos montados con pastillas de diamantes sintéticos electrodepositados o aglomerados en resina fenólica.
              </p>
              <p>
                El trabajo arranca con granulometrías abrasivas de desbaste (grano 50 o 100) para eliminar cejas, rayones profundos de arrastre, manchas ácidas y porosidad superficial, progresando secuencialmente (200, 400, 800, 1500) hasta llegar a grano 3000. El brillo resultante es el <strong>reflejo natural del mineral</strong> al estar nivelado con tolerancia micrométrica: no hay ninguna película ni resina sobre el piso.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-gold-600" />
                2. ¿Qué es el Cristalizado o Vitrificado? (La Reacción Química)
              </h2>
              <p>
                El <strong>cristalizado</strong> (conocido popularmente también como vitrificado) no es un desbaste de abrasión. Es una <strong>reacción termo-química</strong> controlada entre el carbonato de calcio ($CaCO_3$) del mármol o terrazo y un compuesto líquido formulado a base de fluorosilicato de magnesio y ácidos orgánicos débiles.
              </p>
              <p>
                Al pasar una máquina monodisco de alta fricción con lana de acero fina (lana de acero N° 0 o 1), el calor generado por la fricción desencadena una transformación química: parte del carbonato de calcio se transmuta en <em>fluoruro de calcio</em>, una estructura cristalina micro-dura insoluble al agua que otorga un brillo vítreo y endurece la capa más externa contra el rayado de tránsito peatonal.
              </p>
            </section>

            {/* Comparison Table */}
            <div className="my-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
              <div className="bg-anthracite-900 p-4 text-white font-heading font-bold text-sm flex items-center gap-2">
                <Scale className="w-4 h-4 text-gold-400" />
                <span>Matriz de Decisión Técnica: Diamantado vs. Cristalizado</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-low border-b border-slate-200 text-anthracite-700 font-heading">
                      <th className="p-3">Variable Técnica</th>
                      <th className="p-3 text-diamond-700">Pulido Diamantado Mecánico</th>
                      <th className="p-3 text-gold-600">Cristalizado / Vitrificado Químico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans">
                    <tr>
                      <td className="p-3 font-semibold text-anthracite-900">Principio de Acción</td>
                      <td className="p-3">Abrasión física por diamantes industriales.</td>
                      <td className="p-3">Reacción termo-química (Fluorosilicatos + Calor).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-anthracite-900">¿Elimina Rayones y Cejas?</td>
                      <td className="p-3 text-emerald-700 font-bold">SÍ, rectifica y nivela desniveles.</td>
                      <td className="p-3 text-red-600 font-bold">NO, no remueve material físico.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-anthracite-900">Tipo de Brillo Obtenido</td>
                      <td className="p-3">Profundo, natural y mineral (85 - 95 GU).</td>
                      <td className="p-3">Brillo espejo vítreo cristalino (90 - 98 GU).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-anthracite-900">Superficies Compatibles</td>
                      <td className="p-3">Mármol, granito, terrazo, concreto, lajas.</td>
                      <td className="p-3">Solo rocas con carbonato de calcio (mármol, terrazo, travertino). Granito no reacciona.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-anthracite-900">Frecuencia Recomendada</td>
                      <td className="p-3">Cada 4 a 8 años según tráfico.</td>
                      <td className="p-3">Mantenimiento semestral o anual para revitalizar.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                3. El Gran Error de los Propietarios en Lima
              </h2>
              <p>
                El error más costoso que observamos en departamentos de <strong>San Isidro, Miraflores y Surco</strong> es contratar un "cristalizado exprés" sobre un piso que lleva años sin pulirse y que tiene microfisuras o rayones por arena de playa.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                <strong>¿Qué sucede si cristalizas un piso no nivelado?</strong>
                <p className="mt-1 text-xs">
                  La reacción química vitrificará la superficie pero las rayas y ondulaciones quedarán aumentadas ópticamente por el brillo vítreo. La luz rebota en ángulos irregulares provocando un efecto de "espejo distorsionado" y las manchas viejas quedarán atrapadas bajo la película dura.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-anthracite-900 tracking-tight mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                4. La Fórmula Maestra: Primero Diamante, Luego Cristalizado
              </h2>
              <p>
                En <strong>AV SOLUCRET</strong> no planteamos estas tecnologías como rivales, sino como <strong>fases complementarias del ciclo de vida del pavimento</strong>:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>
                  <strong>Fase Inicial Reconstructiva:</strong> Pulido Diamantado con aspiración ciclónica para llevar la roca a una planimetría perfecta y abrir el poro microscópico hasta grano 1500/3000.
                </li>
                <li>
                  <strong>Fase de Blindaje:</strong> Aplicación de nanopolímero oleofóbico penetrante <em>AV-SHIELD™ Ultra</em> para cerrar la red capilar.
                </li>
                <li>
                  <strong>Fase de Sellado Térmico Opcional:</strong> Si el cliente busca reflectometría superior a 95 GU de vitrina comercial, se ejecuta el cristalizado termo-químico con pad especial sobre la superficie ya impecable.
                </li>
              </ol>
            </section>

          </div>

          {/* CTA Banner inside article */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-anthracite-900 to-anthracite-800 text-white shadow-ambient">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono font-bold text-gold-400 tracking-widest uppercase">
                DIAGNÓSTICO EN SITU SIN COSTO
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-white mt-1 mb-3">
                ¿Tu piso necesita restauración diamantada o solo vitrificado?
              </h3>
              <p className="text-xs text-anthracite-300 mb-6 leading-relaxed">
                Nuestros ingenieros evalúan la dureza en escala de Mohs y el nivel de rayaduras en tu departamento u oficina en Lima con reflectómetro digital portátil.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gold-500 hover:bg-gold-600 text-anthracite-900 font-heading font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm"
                >
                  <a
                    href="https://wa.me/51961801932?text=Hola%20AV%20SOLUCRET,%20deseo%20una%20evaluación%20in%20situ%20para%20saber%20si%20mi%20piso%20requiere%20diamantado%20o%20cristalizado."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-heading text-xs px-5 py-2.5 rounded-lg"
                >
                  <Link to="/contacto">Solicitar Visita Técnica</Link>
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

export default CristalizadoVsPulidoDiamantado;
