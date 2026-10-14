import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import { companyData } from "@/data/company";
import { protocols } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
              <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
                INGENIERÍA EN SUPERFICIES MINERALES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15]">
              Sistemas Abrasivos Graduales de Diamante Sintético
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium lg:text-right">
            Cada superficie mineral recibe un protocolo térmico-mecánico específico:
            desde desbaste con granos 50 hasta cristalizado y vitrificado en grano 3000.
          </p>
        </div>

        {/* 2x2 Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {protocols.map((protocol, idx) => (
            <motion.div
              key={protocol.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-ambient hover:shadow-elevated hover:border-gold-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Protocol Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-diamond-700 bg-diamond-50 px-2.5 py-1 rounded-md border border-diamond-200/60">
                      PROTOCOLO {protocol.number}
                    </span>
                    <span className="text-xs text-anthracite-600 font-bold">
                      • {protocol.category}
                    </span>
                  </div>

                  {protocol.segmentBadge && (
                    <span className="text-[10px] font-mono font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 tracking-wider">
                      {protocol.segmentBadge}
                    </span>
                  )}
                </div>

                {/* Protocol Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-anthracite-900 mb-3 group-hover:text-diamond-600 transition-colors">
                  {protocol.title}
                </h3>

                {/* Protocol Description */}
                <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed mb-6 font-medium">
                  {protocol.description}
                </p>

                {/* Optional Image */}
                {protocol.image && (
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 border border-slate-100 bg-slate-100">
                    <img
                      src={protocol.image}
                      alt={protocol.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="500"
                      height="281"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {protocol.imageTag && (
                      <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-anthracite-900/80 backdrop-blur-sm text-white text-[10px] font-heading font-semibold tracking-wider">
                        {protocol.imageTag}
                      </div>
                    )}
                  </div>
                )}

                {/* Optional Stat Badge */}
                {protocol.statBadge && (
                  <div className="mb-6 p-4 rounded-xl bg-surface-low border border-slate-200/80 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-diamond-600 shrink-0" />
                    <div>
                      <div className="font-heading text-sm font-extrabold text-anthracite-900">
                        {protocol.statBadge.value}
                      </div>
                      <div className="text-xs text-anthracite-600 font-medium">
                        {protocol.statBadge.label}
                      </div>
                    </div>
                  </div>
                )}

                {/* Optional Pills */}
                {protocol.pills && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {protocol.pills.map((pill) => (
                      <span
                        key={pill}
                        className="text-[10px] font-mono font-bold text-anthracite-700 bg-surface-low px-2.5 py-1 rounded border border-slate-200"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Protocol Action Footer */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/51961801932?text=${encodeURIComponent(
                    `Hola AV SOLUCRET, deseo consultar por el ${protocol.title} para mi proyecto en Lima.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs sm:text-sm font-bold text-diamond-700 hover:text-diamond-600 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{protocol.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-anthracite-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                  <span>Visita sin costo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-surface-low border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-base font-bold text-anthracite-900">
              ¿Tu piso presenta manchas profundas, salitre costero o pérdida total de brillo?
            </h4>
            <p className="text-xs text-anthracite-600 mt-0.5">
              Realizamos una evaluación técnica in situ 100% gratuita con reflectómetro digital en cualquier distrito de Lima.
            </p>
          </div>

          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-xs sm:text-sm shrink-0 shadow-sm transition-all"
          >
            <span>Agendar Evaluación In Situ</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
