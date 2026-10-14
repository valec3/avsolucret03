import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { transformationCases } from "@/data/transformations";

export const HomeTransformation = () => {
  const [activeCase, setActiveCase] = useState(transformationCases[0]);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
              <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
                EVIDENCIA FÍSICA IN SITU • ANTES Y DESPUÉS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15]">
              Deslizá para Comprobar la Transformación
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium lg:text-right">
            Resultados tangibles sin ceras temporales ni trucos visuales. Brillo mineral profundo obtenido con calibración mecánica diamantada.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-slate-200/80">
          {transformationCases.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveCase(item)}
              className={`px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all border ${
                activeCase.id === item.id
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
          
          {/* Left Column: Interactive Before/After Slider (7 cols) */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              key={activeCase.id}
              beforeImage={activeCase.beforeImage}
              afterImage={activeCase.afterImage}
              beforeLabel={activeCase.beforeLabel}
              afterLabel={activeCase.afterLabel}
            />
            <div className="flex items-center justify-between text-xs text-anthracite-600 mt-3 font-medium px-1">
              <span>↔ Arrastrá la barra central para comparar</span>
              <span className="font-mono text-diamond-700 font-bold">{activeCase.location}</span>
            </div>
          </div>

          {/* Right Column: Case Details & Metrics (5 cols) */}
          <div className="lg:col-span-5 bg-surface-low/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-diamond-700 uppercase tracking-widest block mb-1">
                CASO REAL VERIFICADO EN LIMA
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-anthracite-900 mb-2">
                {activeCase.title}
              </h3>

              <div className="text-xs font-heading font-semibold text-gold-700 mb-4">
                {activeCase.location}
              </div>

              <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed mb-6 font-medium">
                {activeCase.description}
              </p>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {activeCase.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-sm"
                  >
                    <div className="font-heading text-base sm:text-lg font-black text-diamond-700">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-heading font-bold text-anthracite-900 mt-0.5 truncate">
                      {metric.label}
                    </div>
                    <div className="text-[9px] text-anthracite-600 truncate mt-0.5 font-medium">
                      {metric.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 text-xs text-anthracite-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-diamond-600 shrink-0" />
                  <span>Maquinaria trifásica sin emisión de polvo tóxico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Muestra de brillo in situ gratuita antes de iniciar</span>
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
                  `Hola AV SOLUCRET, vi el caso de ${activeCase.title} en su web y deseo solicitar una prueba de brillo in situ para mi piso.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Solicitar Prueba In Situ para Mi Piso</span>
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
