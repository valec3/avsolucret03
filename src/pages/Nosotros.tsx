import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Compass, 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { 
  timelineEvents, 
  guarantees, 
  methodologySteps, 
  aboutMission, 
  aboutVision, 
  substrateHighlights 
} from "@/data/about";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Nosotros | AV Solucret - MV Arquitectura & Construcción S.A.C."
        description="Conozca nuestra trayectoria desde 2022, tecnología de pulido en húmedo con aspiración sin polvo, empresa formal (RUC 20602100198) y garantía por escrito."
        canonical="https://avsolucret.com/nosotros"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ]}
        keywords={[
          "empresa de pulido de pisos lima",
          "mv arquitectura y construccion sac",
          "av solucret ruc 20602100198",
          "pulido de pisos sin polvo lima",
          "garantia por escrito pulido pisos",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Sobre AV Solucret",
          description: "Empresa formal en Lima Metropolitana con equipo técnico propio, especializada en pulido, cristalizado y mantenimiento de pisos.",
          mainEntity: {
            "@type": "Organization",
            name: companyData.name,
            legalName: companyData.legalName,
            taxID: companyData.ruc,
          },
        }}
      />
      <Header activeTab="Nosotros" />

      <main className="pt-28 lg:pt-36">
        
        {/* ========================================================================= */}
        {/* HERO SECTION NOSOTROS (Image 2) */}
        {/* ========================================================================= */}
        <section className="pb-16 lg:pb-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl mx-auto text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-gold-600 shrink-0" />
                <span className="label-editorial text-gold-800 text-[11px] font-extrabold tracking-widest">
                  NUESTRA HISTORIA & FILOSOFÍA TÉCNICA
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-anthracite-900 tracking-tight leading-[1.1] mb-6"
              >
                EXCELENCIA EN CADA{" "}
                <span className="text-diamond-700 underline decoration-gold-300 decoration-wavy decoration-2 underline-offset-8">
                  SUPERFICIE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-anthracite-500 leading-relaxed max-w-2xl mx-auto mb-10"
              >
                Nacimos en Lima con un propósito inquebrantable: erradicar las ceras temporales
                y devolver a los pisos su dignidad original mediante ciencia abrasiva diamantada.
              </motion.p>

              {/* Blockquote de Honor (Image 2) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-surface-low/80 border-l-4 border-l-gold-500 border border-slate-200/90 text-left shadow-ambient mb-8"
              >
                <p className="font-heading text-base sm:text-lg lg:text-xl font-bold text-anthracite-800 leading-relaxed italic">
                  “Transformamos la materia mineral combinando maquinaria planetaria de última
                  generación, resinas abrasivas de diamante híbridas y densificadores de silicato
                  de litio de grado arquitectónico internacional.”
                </p>

                {/* 3 Micro-Chips under quote */}
                <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-slate-200/60 text-xs font-heading font-semibold text-anthracite-600">
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    ENTREGA ÁGIL EN 24 A 48 HRS
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border border-slate-200">
                    <Shield className="w-3.5 h-3.5 text-diamond-600" />
                    ASPIRADO HEPA • CERO POLVO
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border border-slate-200">
                    <Shield className="w-3.5 h-3.5 text-gold-600" />
                    BLINDAJE NANO AV-SHIELD™
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECCIÓN EVOLUTIVA & TIMELINE HISTÓRICO (Image 2) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-surface-low/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Columna Izquierda: Showcase de Obra con Métricas (6 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 flex flex-col gap-4"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-ambient aspect-[4/3] bg-slate-100 group">
                  <img
                    src="/gallery/pulido-diamantado-y-sellado.jpeg"
                    alt="Operadores AV SOLUCRET con maquinaria planetaria trifásica"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wider">
                    CALIBRACIÓN MICROMÉTRICA
                  </div>

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-gold-300">
                        Tecnología Planetaria 380V Sin Polvo
                      </div>
                      <div className="font-heading text-sm font-bold text-white">
                        Calibración Micrométrica sin Polvo
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300 font-bold text-xs">
                      ⚡
                    </span>
                  </div>
                </div>

                {/* Strip Inferior con 3 Métricas */}
                <div className="grid grid-cols-3 gap-3 bg-white p-5 rounded-xl border border-slate-200/80 shadow-ambient text-center">
                  <div>
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-diamond-700">
                      0%
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-anthracite-500 mt-0.5">
                      Polvo Suspendido
                    </div>
                  </div>
                  <div className="border-x border-slate-100">
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900">
                      3000
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-anthracite-500 mt-0.5">
                      m² Promedio / Mes
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-gold-600">
                      4
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-anthracite-500 mt-0.5">
                      Años de Operación
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Columna Derecha: Timeline Vertical (6 cols) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-6"
              >
                <div className="mb-8">
                  <span className="label-editorial text-gold-600 font-bold block mb-2">
                    LÍNEA DE EVOLUCIÓN TÉCNICA
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-anthracite-900 tracking-tight leading-tight">
                    Cuatro años de operación elevando los acabados arquitectónicos en Lima
                  </h2>
                </div>

                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-gold-400 before:via-diamond-400 before:to-slate-200">
                  {timelineEvents.map((evt) => (
                    <div key={evt.year} className="relative group">
                      {/* Node Dot */}
                      <div className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-gold-500 group-hover:scale-125 transition-transform" />

                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-lg font-black text-anthracite-900">
                          {evt.year}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-diamond-700 bg-diamond-50 px-2 py-0.5 rounded border border-diamond-200">
                          {evt.tag}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-anthracite-500 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* MISIÓN & VISIÓN CORPORATIVA (Image 3) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="label-editorial text-gold-600 font-bold block mb-2">
                PILARES FUNDACIONALES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight mb-4">
                Misión & Visión Corporativa
              </h2>
              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed">
                Nuestra doctrina guía tanto la ciencia de materiales como el respeto estético por la piedra noble.
              </p>
            </div>

            {/* Cards 01 y 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Card 01 - Misión */}
              <div className="p-8 sm:p-10 rounded-2xl bg-surface-low border border-slate-200/90 shadow-ambient flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-4xl font-black text-gold-600">
                      {aboutMission.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold text-xs">
                      P
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-anthracite-900 mb-4">
                    {aboutMission.title}
                  </h3>

                  <p className="font-sans text-sm text-anthracite-600 leading-relaxed mb-6">
                    {aboutMission.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    <div className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-wider mb-1">
                      {aboutMission.commitmentsHeader}
                    </div>
                    {aboutMission.commitments.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-anthracite-600">
                        <Check className="w-4 h-4 text-gold-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 02 - Visión */}
              <div className="p-8 sm:p-10 rounded-2xl bg-surface-low border border-slate-200/90 shadow-ambient flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-diamond-600" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-4xl font-black text-diamond-700">
                      {aboutVision.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-diamond-100 text-diamond-700 flex items-center justify-center font-bold text-xs">
                      👁️
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-anthracite-900 mb-4">
                    {aboutVision.title}
                  </h3>

                  <p className="font-sans text-sm text-anthracite-600 leading-relaxed mb-6">
                    {aboutVision.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    <div className="text-[10px] font-mono font-bold text-diamond-700 uppercase tracking-wider mb-1">
                      {aboutVision.commitmentsHeader}
                    </div>
                    {aboutVision.commitments.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-anthracite-600">
                        <Check className="w-4 h-4 text-diamond-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tríada Metodológica (Image 3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methodologySteps.map((m) => (
                <div
                  key={m.step}
                  className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-diamond-700 bg-diamond-50 px-2 py-0.5 rounded inline-block mb-3">
                      FASE {m.step}
                    </div>
                    <h4 className="font-heading text-base font-bold text-anthracite-900 mb-2">
                      {m.title}
                    </h4>
                    <p className="text-xs text-anthracite-500 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* GARANTÍAS OPERACIONALES EN OBRA (Image 3) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-surface-low/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="label-editorial text-gold-600 font-bold block mb-2">
                SEGURIDAD & RIGOR NORMATIVO
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight mb-4">
                Garantías Operacionales en Obra
              </h2>
              <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed">
                Cada proyecto residencial, comercial o industrial cuenta con respaldo normativo,
                cobertura y personal íntegro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {guarantees.map((g) => (
                <div
                  key={g.title}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-ambient flex flex-col justify-between hover:shadow-elevated hover:border-gold-300 transition-all group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-low border border-slate-200/60 flex items-center justify-center text-diamond-600 mb-5 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                      <g.icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-wider block mb-1">
                      {g.subtitle}
                    </span>

                    <h3 className="font-heading text-lg font-bold text-anthracite-900 mb-3">
                      {g.title}
                    </h3>

                    <p className="font-sans text-xs text-anthracite-500 leading-relaxed mb-6">
                      {g.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-heading font-semibold text-diamond-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{g.check}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Especialidad por Tipología de Sustrato (Image 3) */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-ambient">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-5">
                  <span className="label-editorial text-gold-600 font-bold block mb-2">
                    PASIÓN MINERAL
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 mb-4">
                    Especialidad por Tipología de Sustrato
                  </h3>
                  <p className="text-sm text-anthracite-500 leading-relaxed mb-6">
                    No todas las piedras responden al mismo abrasivo. En AV SOLUCRET calibramos los
                    Newtons de presión por centímetro cuadrado y la dureza de aglomerante metálico
                    según la matriz geológica de cada piso.
                  </p>
                  <Link
                    to="/trabajos"
                    className="font-heading text-sm font-semibold text-diamond-700 hover:text-diamond-600 inline-flex items-center gap-1.5"
                  >
                    <span>Ver casos de estudio documentados</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {substrateHighlights.map((sub) => (
                    <div key={sub.category} className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-200 group">
                      <img
                        src={sub.image}
                        alt={sub.treatment}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] font-mono text-gold-300 uppercase block">
                          {sub.category}
                        </span>
                        <span className="font-heading text-xs font-bold">
                          {sub.treatment}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* BANNER INSTITUCIONAL & FIRMA DEL ING. VIDAL (Image 3) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Compass / Seal Icon */}
            <div className="w-12 h-12 mx-auto rounded-full bg-surface-low border border-slate-200 flex items-center justify-center text-diamond-700 mb-6">
              <Compass className="w-6 h-6" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-tight mb-4">
              La verdadera ingeniería de superficies no se desgasta:{" "}
              <span className="text-gold-600 underline decoration-slate-300 decoration-2">
                perdura.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Permítanos evaluar sus instalaciones in situ sin costo de diagnóstico en Lima
              Metropolitana. Comprobaremos el nivel de brillo de su piso y diseñaremos una
              propuesta técnica transparente.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm px-7 py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                asChild
              >
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coordinar Mantenimiento
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 hover:border-gold-400 text-anthracite-800 font-heading font-semibold text-sm px-7 py-6 rounded-xl transition-all"
                asChild
              >
                <Link to="/contacto">
                  Coordinar Inspección Técnica
                </Link>
              </Button>
            </div>

            {/* Respaldo Institucional y Empresa Formal */}
            <div className="inline-flex flex-col items-center pt-8 border-t border-slate-200/80">
              {/* Graphic Signature line */}
              <div className="w-36 h-8 text-gold-600/70 mb-2">
                <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10 28C35 8 50 35 75 18C100 2 110 32 145 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="font-heading text-sm font-extrabold text-anthracite-900 tracking-wide">
                {companyData.name}
              </div>
              <div className="text-[11px] font-mono text-gold-700 font-semibold tracking-wider uppercase">
                {companyData.legalName}
              </div>
              <div className="text-[10px] text-anthracite-500 tracking-tight mt-0.5">
                RUC {companyData.ruc} • Equipo Técnico Propio
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nosotros;
