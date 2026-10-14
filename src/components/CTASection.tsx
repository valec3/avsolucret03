import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { ctaData } from "@/data/cta";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-surface-low border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-ambient"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-600 shrink-0" />
                <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
                  {ctaData.badge}
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-anthracite-900 tracking-tight leading-tight mb-4">
                {ctaData.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed max-w-xl">
                {ctaData.subtitle}
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 shrink-0">
              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-sm px-6 py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                asChild
              >
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>{ctaData.whatsappButtonText}</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white border-slate-300 hover:border-gold-400 text-anthracite-800 font-heading font-semibold text-sm px-6 py-6 rounded-xl transition-all"
                asChild
              >
                <a href={`tel:${companyData.phone}`}>
                  <Phone className="w-4 h-4 mr-2 text-diamond-600" />
                  <span>{ctaData.callButtonText}</span>
                </a>
              </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
