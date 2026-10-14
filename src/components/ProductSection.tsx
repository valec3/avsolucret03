import { motion } from "framer-motion";
import { CheckCircle2, Shield, Hexagon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productSpecs, productData } from "@/data/product";

const ProductSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-low/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-ambient">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Technical Nano-Shield Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-surface-low to-white border border-slate-200/90 p-8 shadow-ambient flex flex-col items-center text-center relative overflow-hidden group">
                
                {/* Top Compliance Badge */}
                <div className="px-3 py-1 rounded-md bg-gold-50 border border-gold-300 text-[10px] font-heading font-extrabold text-gold-800 uppercase tracking-wider mb-8">
                  {productData.badge}
                </div>

                {/* Hexagonal Molecule Schematic */}
                <div className="relative w-36 h-36 flex items-center justify-center my-3">
                  {/* Outer Structural Hexagon */}
                  <Hexagon className="w-32 h-32 text-diamond-200 stroke-[1.5]" />
                  
                  {/* Inner Hexagon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Hexagon className="w-20 h-20 text-diamond-500 stroke-[2]" />
                  </div>

                  {/* Core Particle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-diamond-600/15 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-diamond-700" />
                    </div>
                  </div>
                </div>

                {/* Product Name & Moniker */}
                <div className="mt-4">
                  <h4 className="font-heading text-2xl font-black text-anthracite-900 tracking-tight">
                    {productData.name}
                  </h4>
                  <p className="font-mono text-xs text-anthracite-600 font-medium uppercase tracking-widest mt-1">
                    {productData.category}
                  </p>
                </div>

                {/* Decorative Grid Line */}
                <div className="w-16 h-0.5 bg-diamond-600/30 rounded-full mt-6" />
              </div>
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
                      <div className="text-xs text-anthracite-600 font-medium mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conversion Row */}
              <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-100">
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

                <div className="text-xs font-heading font-extrabold text-gold-800 bg-gold-50 px-3 py-2 rounded-lg border border-gold-300">
                  {productData.inclusionBadge}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
