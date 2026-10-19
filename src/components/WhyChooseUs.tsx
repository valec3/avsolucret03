import { motion } from "framer-motion";
import { Shield, Sparkles, FileText, Clock } from "lucide-react";
import { companyData } from "@/data/company";

export const WhyChooseUs = () => {
  const icons = [Clock, Sparkles, FileText, Shield];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
              RESPALDO Y FORMALIDAD
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
            Por Qué AV Solucret
          </h2>

          <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium">
            Cuatro pilares de confianza y método de trabajo para su tranquilidad:
          </p>
        </div>

        {/* 4 Pillars Grid (Literal from Section 9 of PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.valueProps.map((prop, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface-low/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-ambient flex flex-col justify-between hover:bg-white hover:border-gold-300 hover:shadow-elevated transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-gold-600 mb-5 shadow-2xs group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-lg font-extrabold text-anthracite-900 mb-3 group-hover:text-diamond-600 transition-colors">
                    {prop.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed font-medium">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
