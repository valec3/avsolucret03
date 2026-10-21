import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Layers, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Star, 
  Quote, 
  Filter,
  Maximize2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

import { Project, projects, clientReviews, projectCategories } from "@/data/projects";

const Trabajos = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Casos de Éxito y Proyectos de Pulido de Pisos en Lima | AV SOLUCRET",
        "description": "Portafolio de obras reales de pulido diamantado y restauración en San Isidro, Miraflores, Surco y Lurín con reflectometría certificada.",
        "url": "https://avsolucret.com/trabajos",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "AV SOLUCRET",
          "telephone": companyData.phone,
        },
      },
      ...projects.map((proj) => ({
        "@type": "CreativeWork",
        "name": `${proj.title} - ${proj.material}`,
        "creator": {
          "@type": "Organization",
          "name": "AV SOLUCRET",
        },
        "locationCreated": {
          "@type": "Place",
          "name": proj.district,
        },
        "description": `${proj.challenge} ${proj.solution}`,
        "image": `https://avsolucret.com${proj.image}`,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Proyectos y Casos de Éxito en Restauración de Pisos"
        description="Vea nuestros casos de éxito en San Isidro, Miraflores, Surco y Lurín. Resultados reales con reflectometría superior a 90 GU sin polvo residual."
        canonical="https://avsolucret.com/trabajos"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Portafolio de Trabajos", path: "/trabajos" },
        ]}
        schema={portfolioSchema}
        keywords={[
          "fotos pulido de marmol antes y despues",
          "casos de exito pulido de pisos lima",
          "restauracion terrazo miraflores fotos",
          "pulido de marmol carrara san isidro",
          "concreto pulido lurin proyectos",
        ]}
      />
      <Header activeTab="Trabajos" />

      <main className="pt-28 lg:pt-36">
        
        {/* ========================================================================= */}
        {/* HERO TRABAJOS */}
        {/* ========================================================================= */}
        <section className="pb-16 lg:pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-600 shrink-0" />
                <span className="label-editorial text-gold-800 text-[11px] font-extrabold tracking-widest">
                  PORTAFOLIO DE OBRAS & CASOS DE ESTUDIO EN LIMA
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
                EVIDENCIA TÉCNICA:{" "}
                <span className="text-diamond-700">PROYECTOS EJECUTADOS</span> CON
                PRECISIÓN DIAMANTADA
              </h1>

              <p className="font-sans text-base text-anthracite-500 leading-relaxed max-w-2xl">
                Explora nuestras restauraciones en mármol, terrazo, granito y concreto pulido en Lima
                Metropolitana. Registro fotográfico, fichas técnicas de sustrato y mediciones
                instrumentales de reflectometría en obra real.
              </p>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-8 mt-8 border-t border-slate-100">
              {projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all ${
                    filter === cat.id
                      ? "bg-diamond-600 text-white shadow-sm"
                      : "bg-surface-low text-anthracite-600 hover:bg-slate-100 border border-slate-200/60"
                  }`}
                >
                  {cat.label} {cat.id === "all" ? `(${projects.length})` : ""}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DESTACADO CASO EMBLEMÁTICO */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-surface-low/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5">
                <span className="label-editorial text-gold-600 font-bold block mb-2">
                  TRABAJO REALIZADO • OBRA ENTREGADA
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-anthracite-900 tracking-tight leading-tight mb-4">
                  Cristalizado de Piso en Sala Residencial
                </h2>
                <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                  Tratamiento de piso de mármol con discos de diamante de grano progresivo en húmedo y aspiración continua. Acabado cristalizado antideslizante sin aplicar ceras temporales.
                </p>

                <div className="space-y-3 p-4 bg-white rounded-xl border border-slate-200/80 mb-6 text-xs text-anthracite-600">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Material:</span>
                    <span className="font-mono text-anthracite-800 font-bold">Piso de Mármol Crema</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="font-semibold">Acabado:</span>
                    <span className="font-mono text-emerald-600 font-bold">Brillo Espejo Antideslizante</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="font-semibold">Método:</span>
                    <span className="font-mono text-anthracite-800 font-bold">En Húmedo y con Aspiración (Sin Polvo)</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-xs py-5 rounded-xl shadow-ambient"
                  asChild
                >
                  <a
                    href={`https://wa.me/51961801932?text=${encodeURIComponent(
                      "Hola AV Solucret, vi el trabajo de pulido y cristalizado de mármol en su web y deseo cotizar para mi piso."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Cotizar Proyecto Similar por WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-ambient group bg-slate-950 aspect-[16/10]">
                  <img
                    src="/gallery/cristalizado-marmol-penthouse-vista-panoramica.jpg"
                    alt="Cristalizado de piso de mármol en sala"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-mono font-bold text-gold-400">
                      Fotografía real de obra entregada
                    </span>
                    <span className="text-xs font-mono font-bold bg-white/20 px-2.5 py-1 rounded backdrop-blur-sm">
                      Lima Metropolitana
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GRID DE CASOS DE ESTUDIO TÉCNICOS */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="label-editorial text-gold-600 font-bold block mb-2">
                FICHA TÉCNICA DE OBRAS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight mb-4">
                Proyectos Intervenidos en Lima Metropolitana
              </h2>
              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed">
                Cada obra cuenta con memoria técnica de sustrato, metraje y lectura instrumental garantizada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-ambient hover:shadow-elevated hover:border-gold-300 transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Project Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono font-bold tracking-wider">
                          {project.categoryLabel}
                        </div>

                        {/* Bottom Gloss Badge */}
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-diamond-700/90 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono font-bold flex items-center gap-1">
                          <Gauge className="w-3 h-3 text-gold-300" />
                          <span>{project.glossUnits}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-1.5 text-xs text-anthracite-400 font-medium mb-1.5">
                          <MapPin className="w-3.5 h-3.5 text-diamond-600 shrink-0" />
                          <span>{project.district}</span>
                        </div>

                        <h3 className="font-heading text-xl font-bold text-anthracite-900 mb-4 group-hover:text-diamond-700 transition-colors">
                          {project.title}
                        </h3>

                        {/* Metadata Box */}
                        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-surface-low border border-slate-200/70 mb-5 text-[11px] font-mono">
                          <div>
                            <span className="text-anthracite-400 block text-[9px] uppercase">
                              Sustrato
                            </span>
                            <span className="font-bold text-anthracite-800 line-clamp-1">
                              {project.material}
                            </span>
                          </div>
                          <div>
                            <span className="text-anthracite-400 block text-[9px] uppercase">
                              Área Intervenida
                            </span>
                            <span className="font-bold text-diamond-700">
                              {project.area}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3 text-xs leading-relaxed">
                          <div>
                            <strong className="text-anthracite-800 block text-[11px] font-heading">
                              Desafío Inicial:
                            </strong>
                            <p className="text-anthracite-500">{project.challenge}</p>
                          </div>
                          <div>
                            <strong className="text-diamond-700 block text-[11px] font-heading">
                              Solución Técnica:
                            </strong>
                            <p className="text-anthracite-500">{project.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <a
                        href={`https://wa.me/51961801932?text=${encodeURIComponent(
                          `Hola AV SOLUCRET, me interesa un trabajo similar al de ${project.title} (${project.material}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-heading font-semibold text-diamond-700 hover:text-diamond-600 flex items-center gap-1.5 pt-4"
                      >
                        <span>Cotizar un caso similar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mt-4">
                        100% CERO POLVO
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* MURO DE RESEÑAS Y CLIENTES VERIFICADOS */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-surface-low/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="label-editorial text-gold-600 font-bold block mb-2">
                REPUTACIÓN COMPROBADA
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight mb-4">
                Lo que Dicen Quienes Ya Confiaron sus Pisos
              </h2>
              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed">
                Testimonios de arquitectos, directores de obra y propietarios en Lima Metropolitana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {clientReviews.map((rev) => (
                <div
                  key={rev.name}
                  className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-ambient flex flex-col justify-between relative group hover:border-gold-300 transition-all"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4 text-gold-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500" />
                      ))}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed italic mb-6">
                      “{rev.content}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="font-heading text-sm font-bold text-anthracite-900">
                      {rev.name}
                    </div>
                    <div className="text-[11px] text-anthracite-500">
                      {rev.role}
                    </div>
                    <div className="text-[10px] font-mono text-gold-700 font-semibold mt-1">
                      {rev.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strip de Métricas Consolidadas */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-ambient">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="pt-2 md:pt-0">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-diamond-700">
                    +150,000
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-anthracite-500 mt-1">
                    Metros Cuadrados
                  </div>
                </div>
                <div className="pt-2 md:pt-0">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-anthracite-900">
                    500+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-anthracite-500 mt-1">
                    Proyectos en Lima
                  </div>
                </div>
                <div className="pt-2 md:pt-0">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-gold-600">
                    98%
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-anthracite-500 mt-1">
                    Retención a 12 Meses
                  </div>
                </div>
                <div className="pt-2 md:pt-0">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-emerald-600">
                    0%
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-anthracite-500 mt-1">
                    Polvo Suspendido en Obra
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* BANNER CTA: MUESTRA TÉCNICA IN SITU */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="label-editorial text-gold-600 font-bold block mb-2">
              DISPONIBILIDAD INMEDIATA
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-tight mb-4">
              ¿Tiene un proyecto con especificaciones complejas?
            </h2>
            <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Coordinamos una prueba física de reflectometría en su propia obra. Compruebe la diferencia real entre una cera y el diamante puro.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm px-7 py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                asChild
              >
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Coordinar Muestra Técnica en Obra</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 hover:border-gold-400 text-anthracite-800 font-heading font-semibold text-sm px-7 py-6 rounded-xl transition-all"
                asChild
              >
                <Link to="/contacto">
                  Consultar Cobertura en Mi Distrito
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Trabajos;
