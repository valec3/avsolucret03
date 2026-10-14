import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { homeFaqs } from "@/data/faq";

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
              RESOLUCIÓN DE DUDAS FRECUENTES
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
            Preguntas Frecuentes
          </h2>

          <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium">
            Todo lo que necesitás saber antes de iniciar la restauración de tus superficies en Lima.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-surface-low/80 border-diamond-300 shadow-sm"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-heading text-sm sm:text-base font-bold text-anthracite-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-diamond-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-diamond-600" : "text-anthracite-400"}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-anthracite-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-diamond-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-anthracite-600 leading-relaxed font-medium border-t border-slate-200/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-low border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-base font-bold text-anthracite-900">
              ¿Tenés una consulta técnica sobre tu tipo de piso específico?
            </h4>
            <p className="text-xs text-anthracite-600 mt-0.5">
              Nuestros ingenieros responden directamente por WhatsApp en menos de 15 minutos.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-xs sm:text-sm px-6 py-5 rounded-xl shrink-0 shadow-sm"
            asChild
          >
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Consultar a un Ingeniero</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HomeFAQ;
