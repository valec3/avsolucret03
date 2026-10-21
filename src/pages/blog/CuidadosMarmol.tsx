import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Layers,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";

const CuidadosMarmol = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Cuidados Preventivos del Mármol: La Guía Definitiva contra el Ataque Ácido"
        description="Aprenda cómo proteger el mármol contra el vinagre y los limpiadores corrosivos en Lima. Protocolos de pH neutro y pulido diamantado profesional."
        canonical="https://avsolucret.com/blog/cuidados-marmol"
        type="article"
        image="https://avsolucret.com/blog/01-blog.png"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
          { name: "Cuidados del Mármol", path: "/blog/cuidados-marmol" },
        ]}
        keywords={[
          "cuidados del marmol lima",
          "como limpiar marmol opaco",
          "reparar manchas de limon en marmol",
          "pulido de marmol san isidro",
          "sellador para marmol peru",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Cuidados Preventivos del Mármol: La Guía Definitiva contra el Ataque Ácido",
          image: "https://avsolucret.com/blog/01-blog.png",
          author: {
            "@type": "Person",
            name: "Equipo Técnico AV Solucret",
          },
          publisher: {
            "@type": "Organization",
            name: "AV SOLUCRET",
            logo: {
              "@type": "ImageObject",
              url: "https://avsolucret.com/main/logo.png",
            },
          },
          datePublished: "2026-10-01",
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
                MÁRMOL & PIEDRA NOBLE
              </span>
              <span className="text-xs text-anthracite-400 font-sans">
                Lectura técnica de 5 minutos • Octubre 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
              Cuidados Preventivos del Mármol: <br className="hidden sm:inline" />
              <span className="text-diamond-700">La Guía Definitiva contra el Ataque Ácido</span>
            </h1>

            <p className="font-sans text-lg text-anthracite-600 leading-relaxed border-l-4 border-gold-500 pl-4 py-1 italic bg-gold-50/30 rounded-r-lg">
              "El mármol es una roca metamórfica calcárea viva. Cualquier líquido con pH inferior a 7 no 'ensucia' la superficie: desintegra químicamente el carbonato de calcio."
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-ambient mb-12 bg-slate-100">
            <img
              src="/blog/01-blog.png"
              alt="Cuidados preventivos del mármol en interiores"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-xs flex items-center justify-between">
              <span>Superficie de mármol Blanco Carrara tratada con nanopolímero hidrófugo.</span>
              <span className="font-mono text-gold-400 font-bold">AV SOLUCRET LAB</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-8 font-sans text-anthracite-700 leading-relaxed text-sm sm:text-base">
            
            {/* Box 1 */}
            <div className="bg-surface-low p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900 mb-3 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-gold-600" />
                ¿Por qué es fundamental cuidar el mármol con rigor técnico?
              </h2>
              <p className="text-anthracite-600 text-sm leading-relaxed">
                El mármol está compuesto por más del 90% de <strong>carbonato de calcio ($CaCO_3$)</strong>. Al entrar en contacto con sustancias ácidas de uso doméstico cotidiano (vinagre, limón, gaseosas, salsa de tomate o perfumes), se produce una reacción de disolución química inmediata que crea cráteres microscópicos y elimina el brillo pulido de fábrica.
              </p>
            </div>

            {/* Daily Care */}
            <section className="space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Protocolo de Mantenimiento Diario Recomendado
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    1. Limpieza de pH Neutro (7.0)
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed mb-3">
                    Utilice únicamente agua templada y jabón de pH neutro. Evite a toda costa detergentes con amoníaco, lejías o vinagres de limpieza.
                  </p>
                  <ul className="text-xs text-anthracite-600 space-y-1">
                    <li>• Paños suaves de microfibra</li>
                    <li>• Secado inmediato con mopa</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    2. Retiro Inmediato de Derrames
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed mb-3">
                    Todo derrame debe ser absorbido por contacto (apoyando papel secante), nunca frotando en círculos para no extender la mancha.
                  </p>
                  <ul className="text-xs text-anthracite-600 space-y-1">
                    <li>• Jugos cítricos y vino tinto</li>
                    <li>• Café y cosméticos alcohólicos</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h3 className="font-heading font-bold text-sm text-anthracite-900 mb-2">
                    3. Protección Física Preventiva
                  </h3>
                  <p className="text-xs text-anthracite-500 leading-relaxed mb-3">
                    Coloque fieltros adhesivos en las patas de mesas y sillas. En accesos desde el exterior, use felpudos atrapa-arena para evitar abrasión.
                  </p>
                  <ul className="text-xs text-anthracite-600 space-y-1">
                    <li>• Posavasos bajo cristalería</li>
                    <li>• Fieltros en mobiliario móvil</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Warning Box */}
            <section className="p-6 rounded-2xl bg-red-50/70 border border-red-200 text-red-950 space-y-3">
              <h3 className="font-heading font-bold text-base flex items-center gap-2 text-red-900">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Lo que NUNCA debes hacer sobre un piso de mármol
              </h3>
              <ul className="space-y-2 text-xs text-red-900">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">✗</span>
                  <span><strong>Nunca aplicar ácido muriático ni antisalitre corrosivo:</strong> quema la roca en segundos dejando una mancha blanca irreversible sin pulido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">✗</span>
                  <span><strong>Nunca usar ceras líquidas para "tapar rayones":</strong> la cera atrapa el polvo ambiental de Lima y amarillea con el calor en menos de un mes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">✗</span>
                  <span><strong>Nunca usar esponjas verdes abrasivas ni cepillos de alambre:</strong> rayan la superficie a nivel micro-métrico.</span>
                </li>
              </ul>
            </section>

            {/* FAQs Accordion-style cards */}
            <section className="space-y-4 pt-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-anthracite-900">
                Preguntas Frecuentes sobre el Mantenimiento del Mármol
              </h2>

              <div className="space-y-3">
                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h4 className="font-heading font-bold text-sm text-anthracite-900 mb-1">
                    ¿Cada cuánto tiempo conviene realizar un pulido diamantado profesional?
                  </h4>
                  <p className="text-xs text-anthracite-600 leading-relaxed">
                    En áreas residenciales de tránsito moderado, cada 3 a 5 años. En lobbies corporativos o restaurantes de alto tránsito, se sugiere mantenimiento semestral o anual con resinas de alto grano y sellado penetrante.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h4 className="font-heading font-bold text-sm text-anthracite-900 mb-1">
                    ¿Cómo comprobar si el sellador del mármol sigue activo?
                  </h4>
                  <p className="text-xs text-anthracite-600 leading-relaxed">
                    Realice la <em>Prueba de la Gota de Agua</em>: coloque unas gotas de agua en la superficie. Si al cabo de 5 a 10 minutos el agua se absorbe o oscurece la piedra, el sellado ha perdido efecto y requiere un nuevo servicio de pulido y sellado hidrófugo.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-low border border-slate-200/80">
                  <h4 className="font-heading font-bold text-sm text-anthracite-900 mb-1">
                    ¿Se puede recuperar un mármol completamente opaco y manchado?
                  </h4>
                  <p className="text-xs text-anthracite-600 leading-relaxed">
                    Absolutamente. El desbaste diamantado desbasta de 0.5 a 1.0 mm de la capa superficial dañada, revelando el estrato mineral sano con brillo de fábrica y sin generar nube de polvo gracias al sistema de aspiración Clase M.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom CTA Banner */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-anthracite-900 to-anthracite-800 text-white shadow-ambient">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold text-gold-400 tracking-widest uppercase">
                  DIAGNÓSTICO TÉCNICO IN SITU EN LIMA
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white mt-1 mb-3">
                  ¿Tu mármol perdió su reflejo o tiene manchas ácidas?
                </h3>
                <p className="text-xs text-anthracite-300 mb-6 leading-relaxed">
                  Evaluamos el estado del poro y la profundidad del daño en tu domicilio con prueba de reflectancia in situ. Te explicamos exactamente qué fase de desbaste requiere sin sorpresas.
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

          </div>

        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CuidadosMarmol;
