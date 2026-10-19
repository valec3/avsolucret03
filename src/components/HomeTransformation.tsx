import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Layers, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export const HomeTransformation = () => {
  // Mostramos 3 proyectos destacados con fotografías 100% reales de trabajos concluidos
  const featuredCases = projects.slice(0, 3);
  const [activeProject, setActiveProject] = useState(featuredCases[0]);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
              <span className="label-editorial text-gold-800 font-extrabold tracking-widest uppercase">
                Casos Reales Verificados en Lima
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15]">
              Obras Reales y Resultados Certificados
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium lg:text-right">
            Resultados tangibles sin ceras temporales ni trucos visuales. Brillo mineral profundo obtenido con diamantado progresivo y acabado según el plan.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-slate-200/80">
          {featuredCases.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveProject(item)}
              className={`px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all border ${
                activeProject.id === item.id
                  ? "bg-anthracite-900 text-white border-anthracite-900 shadow-sm"
                  : "bg-surface-low hover:bg-slate-100 text-anthracite-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Real Photo with badges (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-ambient group bg-slate-950 aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={activeProject.image}
                alt={`${activeProject.title} - ${activeProject.material}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 text-anthracite-900 font-heading text-[11px] font-extrabold backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-gold-600" />
                  {activeProject.material}
                </span>
                <span className="px-3 py-1 rounded-full bg-anthracite-900/90 text-white font-heading text-[11px] font-bold backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  {activeProject.district}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-[11px] font-mono uppercase text-gold-400 font-bold">
                    Acabado de Obra Finalizado
                  </div>
                  <div className="font-heading font-extrabold text-base sm:text-lg">
                    {activeProject.title}
                  </div>
                </div>
                <div className="text-right bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  <div className="text-[10px] uppercase font-mono text-slate-300">Reflectancia</div>
                  <div className="text-sm sm:text-base font-bold text-gold-400 font-mono">
                    {activeProject.glossUnits}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-anthracite-600 mt-3 font-medium px-1">
              <span>Fotografía real in situ de trabajo entregado</span>
              <span className="font-mono text-diamond-700 font-bold">{activeProject.district}</span>
            </div>
          </div>

          {/* Right Column: Case Details & Metrics (5 cols) */}
          <div className="lg:col-span-5 bg-surface-low/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-diamond-700 uppercase tracking-widest block mb-1">
                FICHA TÉCNICA DEL TRABAJO
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-anthracite-900 mb-2">
                {activeProject.title}
              </h3>

              <div className="text-xs font-heading font-semibold text-gold-700 mb-4">
                {activeProject.district} • {activeProject.area}
              </div>

              {/* Reto & Solución */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs">
                  <span className="font-heading font-bold text-anthracite-900 block mb-1">
                    Diagnóstico inicial:
                  </span>
                  <p className="text-anthracite-600 leading-relaxed font-medium">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs">
                  <span className="font-heading font-bold text-diamond-700 block mb-1">
                    Solución ejecutada:
                  </span>
                  <p className="text-anthracite-600 leading-relaxed font-medium">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                  <div className="font-heading text-sm sm:text-base font-black text-diamond-700">
                    {activeProject.glossUnits.split(" ")[0]}
                  </div>
                  <div className="text-[10px] font-heading font-bold text-anthracite-900 mt-0.5 truncate">
                    Reflectancia
                  </div>
                  <div className="text-[9px] text-anthracite-600 truncate mt-0.5 font-medium">
                    Brillo natural
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                  <div className="font-heading text-sm sm:text-base font-black text-diamond-700">
                    0 Polvo
                  </div>
                  <div className="text-[10px] font-heading font-bold text-anthracite-900 mt-0.5 truncate">
                    En húmedo
                  </div>
                  <div className="text-[9px] text-anthracite-600 truncate mt-0.5 font-medium">
                    Con aspiración
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                  <div className="font-heading text-sm sm:text-base font-black text-diamond-700">
                    Por Escrito
                  </div>
                  <div className="text-[10px] font-heading font-bold text-anthracite-900 mt-0.5 truncate">
                    Garantía
                  </div>
                  <div className="text-[9px] text-anthracite-600 truncate mt-0.5 font-medium">
                    Certificada
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-anthracite-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-diamond-600 shrink-0" />
                  <span>Maquinaria con aspiración sin levantar polvo en el ambiente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Muestra de brillo in situ previa a la ejecución</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
              asChild
            >
              <a
                href={`https://wa.me/51961801932?text=${encodeURIComponent(
                  `Hola AV Solucret, vi el proyecto de ${activeProject.title} (${activeProject.material}) en su web y deseo solicitar cotización para mi piso.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Cotizar Proyecto Similar por WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeTransformation;
