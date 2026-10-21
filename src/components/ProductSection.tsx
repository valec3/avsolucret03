import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productSpecs, productData, technicalSheets } from "@/data/product";

const ProductSection = () => {
  const [showTechSheet, setShowTechSheet] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-surface-low/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-ambient">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Real On-Site Photography (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-200/90 shadow-ambient bg-slate-50 aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={productData.image}
                  alt={productData.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-anthracite-950/75 backdrop-blur-md text-white text-[11px] font-heading font-semibold px-2.5 py-1 rounded-md tracking-wide">
                  Imagen referencial
                </span>
              </div>
              <p className="font-sans text-xs text-anthracite-500 mt-3 text-center font-medium">
                Piso de terrazo veneciano terminado con reflejo nítido · Tratamiento con Sistema Bristone®
              </p>
            </motion.div>

            {/* Right Column: Specification & Action (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 mb-3 self-start">
                <span className="w-2 h-2 rounded-full bg-diamond-600" />
                <span className="label-editorial text-diamond-700 font-bold">
                  {productData.sectionLabel}
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
                {productData.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium mb-8">
                {productData.description}
              </p>

              {/* Technical Checks Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {productSpecs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-diamond-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading text-sm font-bold text-anthracite-900">
                        {item.title}
                      </div>
                      <div className="text-xs text-anthracite-600 font-medium mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desplegable de Ficha Técnica Publicable */}
              <div className="mb-8 border border-slate-200 rounded-2xl overflow-hidden bg-surface-low/50">
                <button
                  type="button"
                  onClick={() => setShowTechSheet(!showTechSheet)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-slate-100/70 transition-colors"
                  aria-expanded={showTechSheet}
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-diamond-700" />
                    <span className="font-heading text-xs sm:text-sm font-bold text-anthracite-900">
                      Ver Ficha Técnica Oficial (Sistema Bristone®)
                    </span>
                  </div>
                  {showTechSheet ? (
                    <ChevronUp className="w-4 h-4 text-anthracite-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-anthracite-500" />
                  )}
                </button>

                {showTechSheet && (
                  <div className="p-5 border-t border-slate-200 bg-white space-y-4">
                    {/* Tabs selector */}
                    <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                      {technicalSheets.map((sheet, index) => (
                        <button
                          key={sheet.title}
                          type="button"
                          onClick={() => setActiveTab(index)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                            activeTab === index
                              ? "bg-diamond-700 text-white shadow-sm"
                              : "bg-surface-low text-anthracite-600 hover:bg-slate-200/70"
                          }`}
                        >
                          {sheet.title}
                        </button>
                      ))}
                    </div>

                    {/* Table display */}
                    <div>
                      <div className="mb-2">
                        <h4 className="font-heading text-xs font-extrabold text-diamond-800 uppercase tracking-wide">
                          {technicalSheets[activeTab].title} — {technicalSheets[activeTab].subtitle}
                        </h4>
                      </div>
                      <div className="overflow-x-auto rounded-lg border border-slate-200">
                        <table className="w-full text-left text-xs font-sans">
                          <tbody>
                            {technicalSheets[activeTab].rows.map((row, idx) => (
                              <tr
                                key={row.param}
                                className={idx % 2 === 0 ? "bg-white" : "bg-surface-low/60"}
                              >
                                <td className="px-3.5 py-2 font-heading font-bold text-anthracite-800 border-b border-slate-100 w-1/3">
                                  {row.param}
                                </td>
                                <td className="px-3.5 py-2 text-anthracite-600 border-b border-slate-100">
                                  {row.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Conversion Row */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <Button
                  size="lg"
                  className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm px-7 py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                  asChild
                >
                  <a
                    href={`https://wa.me/51961801932?text=${encodeURIComponent(
                      productData.ctaWhatsAppMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{productData.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <div className="text-xs font-heading font-semibold text-gold-900 bg-gold-50 px-3.5 py-2.5 rounded-lg border border-gold-300">
                  {productData.inclusionBadge}
                </div>
              </div>

              {/* Legal Trademark Notice */}
              <p className="text-[11px] font-sans text-anthracite-500 mt-4 leading-normal">
                {productData.trademarkNotice}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
