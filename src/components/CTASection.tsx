import { motion } from "framer-motion";
import { MessageSquare, Building2, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ctaData } from "@/data/cta";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600 shrink-0" />
            <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
              {ctaData.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-tight mb-4">
            {ctaData.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium">
            {ctaData.subtitle}
          </p>
        </div>

        {/* 2 Blocks: Residential & Corporate (Literal from Section 10 of PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Block 1: Residential */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-surface-low border border-slate-200/90 p-8 sm:p-10 shadow-ambient flex flex-col justify-between hover:border-gold-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs font-bold text-diamond-700 bg-diamond-50 px-3 py-1 rounded-md border border-diamond-200">
                  {ctaData.residential.badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-diamond-600 shadow-2xs">
                  <Home className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-anthracite-900 mb-3">
                {ctaData.residential.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed mb-8">
                {ctaData.residential.text}
              </p>
            </div>

            <Button
              size="lg"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm py-6 rounded-xl shadow-ambient transition-all"
              asChild
            >
              <a
                href={`https://wa.me/51961801932?text=${encodeURIComponent(
                  ctaData.residential.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>{ctaData.residential.buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          {/* Block 2: Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl bg-surface-low border border-slate-200/90 p-8 sm:p-10 shadow-ambient flex flex-col justify-between hover:border-gold-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-md border border-gold-200">
                  {ctaData.corporate.badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-gold-600 shadow-2xs">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-anthracite-900 mb-3">
                {ctaData.corporate.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed mb-8">
                {ctaData.corporate.text}
              </p>
            </div>

            <Button
              size="lg"
              className="w-full bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm py-6 rounded-xl shadow-ambient transition-all"
              asChild
            >
              <a
                href={`https://wa.me/51961801932?text=${encodeURIComponent(
                  ctaData.corporate.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>{ctaData.corporate.buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
