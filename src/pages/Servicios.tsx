import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Check, 
  ChevronDown, 
  Building2, 
  Flame, 
  Clock, 
  Phone,
  MessageSquare,
  Droplets,
  HardHat,
  SearchCheck,
  Scale
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

import { 
  serviceCategories as categories, 
  gritSequence, 
  diagnosticCards 
} from "@/data/services";
import { servicesFaqs } from "@/data/faq";

const Servicios = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Pulido Diamantado y Restauración de Pisos en Lima",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "AV SOLUCRET",
          "url": "https://avsolucret.com",
          "telephone": companyData.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyData.address,
            "addressLocality": "Lima",
            "addressRegion": "Lima",
            "addressCountry": "PE",
          },
        },
        "serviceType": "Restauración y Pulido Diamantado de Pisos",
        "areaServed": companyData.districtsCoverage,
        "description":
          "Servicios profesionales de pulido diamantado para mármol, terrazo veneciano, concreto industrial y cristalizado en Lima, Perú con aspiración hermética libre de polvo.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": servicesFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Servicios de Pulido Diamantado, Terrazo y Mármol"
        description="Catálogo técnico de servicios de restauración, pulido diamantado 7 fases y sellado con nanopartículas en Lima. Libre de polvo y garantía certificada."
        canonical="https://avsolucret.com/servicios"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Catálogo de Servicios", path: "/servicios" },
        ]}
        schema={servicesSchema}
        keywords={[
          "servicios de pulido de pisos lima",
          "pulido de marmol precio m2 lima",
          "pulido diamantado terrazo lima",
          "restauracion de pisos antiguos",
          "vitrificado de pisos lima",
          "concreto pulido oficinas lima",
          "sellado hidrooleofobico pisos",
        ]}
      />
      <Header activeTab="Servicios" />

      <main className="pt-28 lg:pt-36">
        
        {/* ========================================================================= */}
        {/* HERO SERVICIOS (Image 5) */}
        {/* ========================================================================= */}
        <section className="pb-16 lg:pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  <span className="label-editorial text-gold-600 text-[11px] font-bold">
                    CATÁLOGO DE INGENIERÍA EN SUPERFICIES
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
                  SOLUCIONES PROFESIONALES EN{" "}
                  <span className="text-diamond-700">RESTAURACIÓN & PULIDO</span>
                </h1>

                <p className="font-sans text-base text-anthracite-500 leading-relaxed max-w-2xl">
                  Servicios integrales de pulido diamantado, vitrificado y sellado aplicados en obra
                  llave en mano para proyectos residenciales de alto estándar, complejos comerciales
                  e infraestructura industrial con tolerancia cero al polvo.
                </p>
              </div>

              {/* Right Column: Floating 100% Libre de Polvo Card */}
              <div className="lg:col-span-4">
                <div className="p-6 rounded-2xl bg-surface-low border border-slate-200/90 shadow-ambient flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-diamond-700 uppercase tracking-widest">
                      BIENESTAR EN OBRA
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="font-heading text-2xl font-extrabold text-anthracite-900 mb-2">
                    100% Libre de Polvo
                  </div>

                  <p className="text-xs text-anthracite-500 leading-relaxed mb-4">
                    Tecnología de aspiración ciclónica y desbaste micro-lubricado Clase M con filtración HEPA.
                  </p>

                  <div className="flex items-center gap-2 text-xs font-heading font-semibold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Garantía de habitabilidad durante la obra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Pills Bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-diamond-600 text-white shadow-sm"
                      : "bg-surface-low text-anthracite-600 hover:bg-slate-100 border border-slate-200/60"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SHOWCASE EN PROFUNDIDAD DE LOS 4 SERVICIOS (Image 5) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-surface-low/30 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* --------------------------------------------------------------------- */}
            {/* SERVICIO 01: Mármol y Granito Natural */}
            {/* --------------------------------------------------------------------- */}
            {(activeCategory === "all" || activeCategory === "marmol") && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-ambient">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left: Real Project Image & Grit Sequence */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-ambient group bg-slate-950 aspect-[16/10]">
                      <img
                        src="/gallery/pulido-diamantado-marmol-blanco-carrara.jpg"
                        alt="Pulido Diamantado en Mármol Carrara"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xs font-mono font-bold text-gold-400">
                          PULIDO EN HÚMEDO CON ASPIRACIÓN
                        </span>
                        <span className="text-xs font-mono font-bold bg-white/20 px-2.5 py-1 rounded backdrop-blur-sm">
                          Sin Polvo
                        </span>
                      </div>
                    </div>

                    {/* Guía de Granulometría de Diamante (Image 5) */}
                    <div className="p-4 rounded-xl bg-surface-low border border-slate-200/80">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-anthracite-600 uppercase tracking-wider">
                          SECUENCIA ABRASIVA GRADUAL (GRITS)
                        </span>
                        <span className="text-[10px] font-heading font-bold text-gold-700">
                          Resinas Importadas
                        </span>
                      </div>
                      <div className="grid grid-cols-7 gap-1.5 text-center">
                        {gritSequence.map((g) => (
                          <div
                            key={g.grit}
                            className={`py-1.5 rounded text-[11px] font-mono font-bold ${g.color}`}
                            title={g.label}
                          >
                            #{g.grit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Copy & Benefits */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-heading text-3xl font-black text-gold-600">
                          01
                        </span>
                        <span className="text-[10px] font-mono font-bold text-diamond-700 bg-diamond-50 px-2.5 py-1 rounded border border-diamond-200">
                          PIEDRAS CARBONATADAS & SILÍCEAS
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 mb-4">
                        Pulido Diamantado de Mármol y Granito Natural
                      </h3>

                      <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                        Procedimiento de desbastado micro-mecánico y pulido progresivo con almohadillas
                        diamantadas de grano micrométrico y ligantes de resina hasta fase 3000. Eliminamos
                        manchas ácidas, rayaduras de tráfico, micropicaduras y sellamos con sellador original
                        de capa de silicato mineral para que el brillo perdure en el tiempo.
                      </p>

                      <ul className="space-y-3 mb-8 text-xs text-anthracite-600">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Recupera el tono cromático genuino:</strong> Elimina el micro-sarro sin
                            recurrir a ceras amarillentas.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Alineación de niveles o "cejas":</strong> Rectificación óptima para la
                            continuidad visual del plano.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Nano-impermeabilización hidrófuga:</strong> Protección permanente contra
                            aceites, café y agua estancada.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-sm py-6 rounded-xl self-start shadow-ambient hover:shadow-glow-blue"
                      asChild
                    >
                      <a
                        href={`https://wa.me/51961801932?text=${encodeURIComponent(
                          "Hola AV SOLUCRET, deseo cotizar el servicio de Pulido Diamantado de Mármol y Granito."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Solicitar este servicio</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                </div>
              </div>
            )}

            {/* --------------------------------------------------------------------- */}
            {/* SERVICIO 02: Terrazo Veneciano */}
            {/* --------------------------------------------------------------------- */}
            {(activeCategory === "all" || activeCategory === "terrazo") && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-ambient">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left: Media Showcase */}
                  <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 group bg-slate-100">
                    <img
                      src="/general/piso-terrazo.jpg"
                      alt="Restauración de Terrazo Veneciano con agregado de cuarzo expuesto"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] font-mono text-gold-300 uppercase tracking-widest mb-1">
                        PISO PATRIMONIAL RESTAURADO
                      </div>
                      <div className="font-heading text-sm font-bold">
                        Terrazo Veneciano Tradicional con Resina Epóxica
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Copy */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-heading text-3xl font-black text-gold-600">
                          02
                        </span>
                        <span className="text-[10px] font-mono font-bold text-diamond-700 bg-diamond-50 px-2.5 py-1 rounded border border-diamond-200">
                          SUELOS HISTÓRICOS & MODERNOS
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 mb-4">
                        Restauración y Diamantado de Terrazo Veneciano
                      </h3>

                      <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                        El terrazo combina la nobleza del mármol con la resistencia del grano cementoso.
                        Nuestro protocolo trata las fisuras y agujeros superficiales provocados por el tráfico
                        o el envejecimiento de la cera, inyectando masillas del tono exacto del árido original,
                        seguido de pulido diamantado fino que preserva el relieve histórico.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/80">
                          <div className="font-heading text-xs font-bold text-anthracite-900 mb-1">
                            Integración Cromática con Epóxico Especial
                          </div>
                          <div className="text-xs text-anthracite-500">
                            Comparamos el soporte con pigmentos inorgánicos y resinas para igualar el tono
                            final del terrazo hasta hacerlo imperceptible.
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/80">
                          <div className="font-heading text-xs font-bold text-anthracite-900 mb-1">
                            Alineación y Desbaste Profundo (Grano 50/100)
                          </div>
                          <div className="text-xs text-anthracite-500">
                            Remoción de desniveles históricos que impiden el paso seguro para recuperar una
                            superficie completamente plana y monolítica.
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-sm py-6 rounded-xl self-start shadow-ambient hover:shadow-glow-blue"
                      asChild
                    >
                      <a
                        href={`https://wa.me/51961801932?text=${encodeURIComponent(
                          "Hola AV SOLUCRET, deseo cotizar la Restauración de Terrazo Veneciano."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Solicitar este servicio</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                </div>
              </div>
            )}

            {/* --------------------------------------------------------------------- */}
            {/* SERVICIO 03: Concreto Pulido & Superflat */}
            {/* --------------------------------------------------------------------- */}
            {(activeCategory === "all" || activeCategory === "concreto") && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-ambient">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left: Media + TCO Reduction Badge */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 group bg-slate-100">
                      <img
                        src="/general/piso-concreto.jpg"
                        alt="Concreto Pulido Superflat para Industria y Comercio"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-[10px] font-mono text-diamond-300 uppercase tracking-widest mb-1">
                          CENTRO LOGÍSTICO & RETAIL
                        </div>
                        <div className="font-heading text-sm font-bold">
                          Piso Superflat F-Min con Densificado de Litio
                        </div>
                      </div>
                    </div>

                    {/* Badge -70% TCO (Image 5) */}
                    <div className="p-4 rounded-xl bg-surface-low border border-diamond-200 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-heading font-bold text-anthracite-900">
                          Reducción del TCO en 5 años
                        </div>
                        <div className="text-[11px] text-anthracite-500">
                          Menos gasto en reposición de ruedas de montacargas y limpieza.
                        </div>
                      </div>
                      <div className="font-heading text-3xl font-black text-diamond-700">
                        -70%
                      </div>
                    </div>
                  </div>

                  {/* Right: Specs & Action */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-heading text-3xl font-black text-gold-600">
                          03
                        </span>
                        <span className="text-[10px] font-mono font-bold text-diamond-700 bg-diamond-50 px-2.5 py-1 rounded border border-diamond-200">
                          INFRAESTRUCTURA & NAVES INDUSTRIALES
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 mb-4">
                        Concreto Pulido & Superflat para Industria y Comercio
                      </h3>

                      <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                        Transformamos losas de concreto ordinarias en pisos de ingeniería de alto
                        desempeño mediante desbastado rotativo planetario, densificación con nano-silicato
                        de litio y pulido hasta reflectancia espejo. Aumenta la resistencia al desgaste,
                        erradica el polvo de desprendimiento y reduce el costo de mantenimiento a cero.
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs font-mono">
                        <div className="p-2.5 bg-surface-low rounded-lg border border-slate-200/60">
                          Planicidad F-Min ACI 117
                        </div>
                        <div className="p-2.5 bg-surface-low rounded-lg border border-slate-200/60">
                          Dureza ASTM C779 (+300%)
                        </div>
                        <div className="p-2.5 bg-surface-low rounded-lg border border-slate-200/60">
                          Brillo 70+ Gloss Units
                        </div>
                        <div className="p-2.5 bg-surface-low rounded-lg border border-slate-200/60 text-emerald-700 font-bold">
                          Cero VOC / Aprobado LEED
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-sm py-6 rounded-xl self-start shadow-ambient hover:shadow-glow-blue"
                      asChild
                    >
                      <a
                        href={`https://wa.me/51961801932?text=${encodeURIComponent(
                          "Hola AV SOLUCRET, deseo cotizar Concreto Pulido & Superflat Industrial."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Cotizar Proyecto Industrial</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                </div>
              </div>
            )}

            {/* --------------------------------------------------------------------- */}
            {/* SERVICIO 04: Cristalizado Periódico */}
            {/* --------------------------------------------------------------------- */}
            {(activeCategory === "all" || activeCategory === "cristalizado") && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-ambient">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left: Media + Frecuencias */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 group bg-slate-100">
                      <img
                        src="/gallery/pulido-diamantado-vitrificado.jpeg"
                        alt="Cristalizado y Abrillantado Periódico para Hoteles y Oficinas"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-[10px] font-mono text-gold-300 uppercase tracking-widest mb-1">
                          HOSPITALITY & CORPORATIVO
                        </div>
                        <div className="font-heading text-sm font-bold">
                          Programas de Mantenimiento Termoquímico Continuo
                        </div>
                      </div>
                    </div>

                    {/* Frecuencias Disponibles (Image 5) */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-lg bg-surface-low border border-slate-200/80 text-center">
                        <div className="text-[11px] font-heading font-bold text-anthracite-800">
                          PLAN MENSUAL
                        </div>
                        <div className="text-[10px] text-anthracite-500">Retail / Mall</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gold-50 border border-gold-200 text-center">
                        <div className="text-[11px] font-heading font-bold text-gold-800">
                          TRIMESTRAL
                        </div>
                        <div className="text-[10px] text-gold-700">Hoteles / Banca</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-low border border-slate-200/80 text-center">
                        <div className="text-[11px] font-heading font-bold text-anthracite-800">
                          SEMESTRAL
                        </div>
                        <div className="text-[10px] text-anthracite-500">Corporativo</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Copy */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-heading text-3xl font-black text-gold-600">
                          04
                        </span>
                        <span className="text-[10px] font-mono font-bold text-diamond-700 bg-diamond-50 px-2.5 py-1 rounded border border-diamond-200">
                          ACABADOS DE PRESTIGIO & HOSPITALIDAD
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 mb-4">
                        Cristalizado y Abrillantado Periódico
                      </h3>

                      <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                        Dotado de un mantenimiento termoquímico diseñado para instalaciones corporativas
                        y hoteles cinco estrellas que no permiten paradas operativas. Las pastas diamantadas
                        y cristalizadores aceleran el brillo de alta reflectancia a lo largo del año, evitando
                        costosos tratamientos intensivos en épocas complejas de obra. Mantiene la uniformidad
                        del reflejo sin alterar el grano mineral.
                      </p>

                      <ul className="space-y-3 mb-8 text-xs text-anthracite-600">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Cristalización sin ácidos agresivos:</strong> Reacción termomecánica que
                            funde microscópicamente el silicato.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Tránsito inmediato 100%:</strong> La superficie queda transitable al
                            segundo de finalizar la pulidora.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-sm py-6 rounded-xl self-start shadow-ambient hover:shadow-glow-blue"
                      asChild
                    >
                      <a
                        href={`https://wa.me/51961801932?text=${encodeURIComponent(
                          "Hola AV SOLUCRET, deseo consultar por los planes de Cristalizado Periódico."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Solicitar Plan de Mantenimiento</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SELECTOR DIAGNÓSTICO: ¿QUÉ TRATAMIENTO REQUIERE SU SUPERFICIE? (Image 5) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="label-editorial text-gold-600 font-bold block mb-2">
                GUÍA RÁPIDA DIAGNÓSTICA
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight mb-4">
                ¿Qué Tratamiento Requiere su Superficie?
              </h2>
              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed">
                Diagnostique según el síntoma de su piso y elija la solución recomendada con rigor técnico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diagnosticCards.map((card) => (
                <div
                  key={card.title}
                  className="p-7 rounded-2xl bg-surface-low border border-slate-200/90 shadow-ambient flex flex-col justify-between hover:border-diamond-300 hover:shadow-elevated transition-all group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-diamond-600 mb-5 group-hover:bg-diamond-50 group-hover:text-diamond-700 transition-colors">
                      <card.icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-wider block mb-1">
                      {card.tag}
                    </span>

                    <h3 className="font-heading text-lg font-bold text-anthracite-900 mb-3">
                      {card.title}
                    </h3>

                    <p className="font-sans text-xs text-anthracite-500 leading-relaxed">
                      {card.symptom}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 mt-6">
                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-heading font-semibold text-diamond-700 hover:text-diamond-600 flex items-center gap-1.5"
                    >
                      <span>Consultar este caso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* FAQ ACORDEÓN TÉCNICO (Image 5) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-surface-low/50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="label-editorial text-gold-600 font-bold block mb-2">
                RESOLUCIÓN DE DUDAS EN OBRA
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight mb-4">
                Dudas Comunes sobre Nuestros Servicios
              </h2>
              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed">
                Respuestas directas inspiradas en las dudas reales de propietarios y jefes de compras en Lima.
              </p>
            </div>

            <div className="space-y-4">
              {servicesFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                    >
                      <span className="font-heading text-base sm:text-lg font-bold text-anthracite-900 group-hover:text-diamond-700 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-anthracite-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-diamond-600" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 font-sans text-sm text-anthracite-600 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* BANNER ASESOR TÉCNICO DE GUARDIA (Image 5) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-low rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-ambient">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="label-editorial text-diamond-700 font-bold">
                      RESPUESTA PROMEDIO EN MENOS DE 15 MINUTOS
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-anthracite-900 mb-4">
                    ¿Listo para Devolverle el Brillo Espejo a sus Pisos?
                  </h2>

                  <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                    Envíenos metraje aproximado y fotos de la superficie por WhatsApp. Un especialista
                    le responderá con el primer diagnóstico técnico y propuesta personalizada hoy mismo.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-anthracite-600">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-600" />
                      Prospección sin compromiso
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-600" />
                      Visita técnica in situ gratuita
                    </span>
                  </div>
                </div>

                {/* Right Card: Engineer Card */}
                <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-ambient flex flex-col justify-between text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-surface-low border-2 border-gold-300 flex items-center justify-center text-diamond-700 font-heading font-black text-xl mb-3 shadow-sm">
                    AV
                  </div>

                  <div className="font-heading text-sm font-bold text-anthracite-900">
                    {companyData.technicalTeam.title}
                  </div>
                  <div className="text-[11px] font-mono text-gold-700 font-semibold mb-4">
                    {companyData.technicalTeam.description}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-xs py-5 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                    asChild
                  >
                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Chatear por WhatsApp</span>
                    </a>
                  </Button>

                  <a
                    href={`tel:${companyData.phone}`}
                    className="mt-3 text-xs font-sans text-anthracite-500 hover:text-diamond-600 flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-diamond-600" />
                    <span>Línea: {companyData.phoneDisplay}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
