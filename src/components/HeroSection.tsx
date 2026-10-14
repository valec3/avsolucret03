import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { heroData } from "@/data/hero";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-16 bg-white overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric 7:5 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content & Directives - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-600 shrink-0" />
              <span className="label-editorial text-gold-800 text-[11px] font-extrabold tracking-widest">
                {heroData.badge}
              </span>
            </motion.div>

            {/* Main Headline H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-anthracite-900 leading-[1.12] tracking-tight mb-6"
            >
              {heroData.headlinePrefix}{" "}
              <span className="text-diamond-700 underline decoration-diamond-200 decoration-wavy decoration-2 underline-offset-4">
                {heroData.headlineHighlight}
              </span>{" "}
              {heroData.headlineSuffix}
            </motion.h1>

            {/* Technical Copy Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-anthracite-600 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {heroData.subtitle}
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm sm:text-base px-7 py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all duration-200 group"
                asChild
              >
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{heroData.ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 hover:border-gold-400 hover:bg-gold-50/50 text-anthracite-800 font-heading font-semibold text-sm sm:text-base px-6 py-6 rounded-xl transition-all duration-200"
                asChild
              >
                <Link to="/trabajos">
                  {heroData.ctaSecondaryText}
                  <span className="ml-1 text-gold-600">→</span>
                </Link>
              </Button>
            </motion.div>

            {/* Micro-Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/80"
            >
              {heroData.microTrust.map((item) => (
                <div key={item.id} className="flex items-center gap-2.5 text-xs sm:text-sm text-anthracite-700 font-medium">
                  {item.iconType === "check" ? (
                    <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  ) : (
                    <Shield className="w-4 h-4 text-diamond-600 shrink-0" />
                  )}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column (High-Reflectivity Bento Gallery - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Top Large Bento Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-ambient group aspect-[16/10] bg-slate-100"
            >
              <img
                src={heroData.bentoCards.main.image}
                alt={heroData.bentoCards.main.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                width="640"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              {/* Floating Dark Badge */}
              <div className="absolute bottom-3.5 left-3.5 px-3 py-1.5 rounded-md bg-anthracite-900/90 backdrop-blur-md border border-white/10 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-heading font-semibold tracking-wider uppercase">
                  {heroData.bentoCards.main.badge}
                </span>
              </div>
            </motion.div>

            {/* Bottom Dual Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden border border-slate-200 shadow-ambient aspect-[4/3] group bg-slate-100"
              >
                <img
                  src={heroData.bentoCards.statCard.image}
                  alt={heroData.bentoCards.statCard.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="225"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* White Floating Stat Card */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-sm rounded-lg p-2.5 border border-slate-100 shadow-sm">
                  <div className="font-heading text-base font-extrabold text-anthracite-900 leading-tight">
                    {heroData.bentoCards.statCard.statValue}
                  </div>
                  <div className="text-[10px] text-anthracite-700 font-bold tracking-wide uppercase">
                    {heroData.bentoCards.statCard.statLabel}
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right Card: Concreto Arquitectónico */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative rounded-xl overflow-hidden border border-slate-200 shadow-ambient aspect-[4/3] group bg-slate-100"
              >
                <img
                  src={heroData.bentoCards.industrialCard.image}
                  alt={heroData.bentoCards.industrialCard.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="225"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-anthracite-900/80 backdrop-blur-sm border border-white/10 text-white">
                  <span className="text-[10px] font-heading font-semibold tracking-wider uppercase">
                    {heroData.bentoCards.industrialCard.badge}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Horizontal Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 sm:mt-20 pt-8 pb-8 px-6 sm:px-10 rounded-2xl bg-surface-low border border-slate-200/90 shadow-ambient"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {heroData.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 ${
                  idx > 0 ? "md:pl-6" : ""
                }`}
              >
                {stat.isSpecial ? (
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-6 h-6 text-diamond-600" />
                    <span className="font-heading text-xl font-bold text-anthracite-900 uppercase">
                      {stat.value}
                    </span>
                  </div>
                ) : (
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-anthracite-900 mb-1">
                    {stat.value}
                  </div>
                )}
                <div className="text-xs font-bold uppercase tracking-wider text-anthracite-700 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-anthracite-600 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
