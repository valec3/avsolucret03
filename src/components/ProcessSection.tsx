import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-surface-low/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
              METODOLOGÍA EN 4 PASOS
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
            Cómo Trabajamos
          </h2>

          <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium">
            Cuatro pasos. Responde la pregunta que todo cliente se hace antes de contratar:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-ambient flex flex-col justify-between hover:border-gold-300 hover:shadow-elevated transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-diamond-700 bg-diamond-50 px-2.5 py-1 rounded-md border border-diamond-200">
                      PASO {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-low border border-slate-200/80 flex items-center justify-center text-gold-600 group-hover:bg-gold-50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-anthracite-900 mb-3 group-hover:text-diamond-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {step.tag && (
                  <div className="pt-4 mt-6 border-t border-slate-100 text-[10px] font-mono font-bold text-gold-700 uppercase tracking-wider">
                    {step.tag}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
