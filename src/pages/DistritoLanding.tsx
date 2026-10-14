import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ChevronDown, 
  Layers, 
  Clock, 
  Car,
  FileCheck2,
  HardHat,
  Sparkles as _Sparkles, // NEVER USE SPARKLE ICON
  SearchCheck,
  Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { districtsData, DistrictInfo } from "@/data/districts";

interface DistritoLandingProps {
  districtSlug?: string;
}

const DistritoLanding = ({ districtSlug }: DistritoLandingProps) => {
  const params = useParams<{ slug: string }>();
  const currentSlug = districtSlug || params.slug || "";
  const district: DistrictInfo | undefined = districtsData[currentSlug];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!district) {
    return <Navigate to="/servicios" replace />;
  }

  const customSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "name": `${companyData.name} - ${district.name}`,
        "legalName": companyData.legalName,
        "url": `https://avsolucret.com/zonas/${district.slug}`,
        "telephone": `+51${companyData.phone.replace(/\s+/g, "")}`,
        "taxID": companyData.ruc,
        "description": district.metaDescription,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": companyData.address,
          "addressLocality": district.name,
          "addressRegion": "Lima",
          "addressCountry": "PE",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": district.geo.latitude,
          "longitude": district.geo.longitude,
        },
        "areaServed": [district.name, "Lima Metropolitana"],
        "priceRange": "$$",
      },
      {
        "@type": "Service",
        "name": district.title,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": companyData.legalName,
          "telephone": companyData.phone,
        },
        "areaServed": district.name,
        "description": district.metaDescription,
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hola AV SOLUCRET, necesito coordinar una visita técnica gratuita para pulido de pisos en ${district.name}.`
  );
  const whatsappDistrictUrl = `https://wa.me/51${companyData.phone.replace(/\s+/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white text-anthracite-900 font-sans antialiased selection:bg-diamond-500 selection:text-white">
      <SEO
        title={district.title}
        description={district.metaDescription}
        canonical={`https://avsolucret.com/zonas/${district.slug}`}
        type="website"
        image={`https://avsolucret.com${district.caseStudy.image}`}
        keywords={[
          `pulido de pisos ${district.name.toLowerCase()}`,
          `restauracion de marmol ${district.name.toLowerCase()}`,
          `terrazo ${district.name.toLowerCase()}`,
          `pulido diamantado lima`,
          `servicio in situ ${district.name.toLowerCase()}`,
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Zonas de Atención", path: "/contacto" },
          { name: district.name, path: `/zonas/${district.slug}` },
        ]}
        schema={customSchema}
      />

      <Header activeTab="" />

      <main className="pt-24 lg:pt-32">
        {/* ========================================================================= */}
        {/* HERO SECTION DE LA ZONA / DISTRITO (2-COLUMN ARCHITECTURAL GRID) */}
        {/* ========================================================================= */}
        <section className="relative pb-16 lg:pb-24 border-b border-slate-100 overflow-hidden bg-gradient-to-b from-surface-low/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Columna Izquierda: Copy & Conversión (7 cols) */}
              <div className="lg:col-span-7">
                {/* Badge Geotargeteado */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-diamond-50 border border-diamond-200 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-diamond-700" />
                  <span className="font-mono text-diamond-700 text-[11px] font-bold tracking-wider uppercase">
                    COBERTURA TÉCNICA IN SITU: {district.name.toUpperCase()}, LIMA
                  </span>
                </div>

                {/* H1 Principal con Intención Local */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-anthracite-900 tracking-tight leading-[1.12] mb-6">
                  {district.headline}
                </h1>

                {/* Bajada */}
                <p className="font-sans text-base sm:text-lg text-anthracite-600 leading-relaxed mb-8 max-w-2xl">
                  {district.subheadline}
                </p>

                {/* Micro-Trust Strip Local */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 py-3.5 px-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-xs font-heading font-semibold text-anthracite-700">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-diamond-600 shrink-0" />
                    <span>Sin Polvo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>CIP 184652</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-diamond-600 shrink-0" />
                    <span>Seguro SCTR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Móvil In Situ</span>
                  </div>
                </div>

                {/* Botones de Conversión */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={whatsappDistrictUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all group"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Solicitar Visita Técnica en {district.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link
                    to="/trabajos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-low hover:bg-slate-100 text-anthracite-800 font-heading font-semibold text-sm border border-slate-200 transition-colors"
                  >
                    <span>Ver Obras Realizadas</span>
                  </Link>
                </div>
              </div>

              {/* Columna Derecha: Tarjeta Visual de Alto Impacto (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                  {/* Imagen Real del Proyecto en el Distrito */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                    <img
                      src={district.caseStudy.image}
                      alt={district.caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      width="600"
                      height="412"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  </div>

                  {/* Badges Flotantes Superiores */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <div className="px-3 py-1 rounded-full bg-anthracite-950/80 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] font-bold">
                      OBRA REAL • {district.name.toUpperCase()}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gold-500 text-slate-950 font-mono text-[11px] font-black shadow-md">
                      {district.caseStudy.glossUnits}
                    </div>
                  </div>

                  {/* Card Flotante Inferior de Información In Situ */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-700 text-xs font-heading font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Unidad Móvil Activa en {district.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-anthracite-400 font-semibold">
                        SCTR AL DÍA
                      </span>
                    </div>

                    <p className="text-xs text-anthracite-700 font-medium leading-snug">
                      {district.caseStudy.title} — {district.caseStudy.substrate}
                    </p>

                    <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[11px] text-anthracite-500">
                      <span>Evaluación de brillo sin costo</span>
                      <strong className="text-diamond-700 font-semibold">Respuesta &lt; 15 min</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DIAGNÓSTICO PATOLÓGICO DEL SUSTRATO EN LA ZONA (GRID COMPARATIVO) */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-mono font-bold text-gold-700 uppercase tracking-widest block mb-2">
                ANÁLISIS PATOLÓGICO LOCAL • {district.name.toUpperCase()}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-anthracite-900 tracking-tight">
                {district.localProblemTitle}
              </h2>
            </div>

            {/* Grid 2 Columnas: Problema vs Solución de Ingeniería */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Card 1: Diagnóstico del Desgaste */}
              <div className="p-7 rounded-3xl bg-surface-low border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg border border-amber-200">
                  ⚠️
                </div>
                <h3 className="font-heading text-lg font-bold text-anthracite-900">
                  ¿Por qué se desgasta el piso en {district.name}?
                </h3>
                <p className="text-sm text-anthracite-600 leading-relaxed">
                  {district.localProblemDesc}
                </p>
                <div className="pt-2 text-xs font-mono text-anthracite-500 border-t border-slate-200/60">
                  Afecta principalmente: {district.targetArchitecture}
                </div>
              </div>

              {/* Card 2: Solución Ingenieril AV SOLUCRET */}
              <div className="p-7 rounded-3xl bg-diamond-50/50 border border-diamond-200/80 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-100 text-diamond-700 flex items-center justify-center font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5 text-diamond-700" />
                </div>
                <h3 className="font-heading text-lg font-bold text-anthracite-900">
                  {district.engineeredSolutionTitle}
                </h3>
                <p className="text-sm text-anthracite-600 leading-relaxed">
                  {district.engineeredSolutionDesc}
                </p>
                <div className="pt-2 text-xs font-mono text-diamond-700 font-semibold border-t border-diamond-200/60 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Protocolo certificado con aspiración ciclónica HEPA sin polvo</span>
                </div>
              </div>
            </div>

            {/* Substratos Predominantes en la Zona */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono font-bold text-anthracite-700 uppercase tracking-wider mb-4">
                Superficies y piedras minerales que restauramos en {district.name}:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {district.predominantSubstrates.map((substrate) => (
                  <span
                    key={substrate}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-low border border-slate-200 text-xs font-semibold text-anthracite-800"
                  >
                    <Layers className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{substrate}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROTOCOLO IN SITU: 3 PASOS TRANSPARENTES */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-20 bg-surface-low/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-[11px] font-mono font-bold text-diamond-700 uppercase tracking-widest block mb-2">
                OPERACIÓN DIRECTA A DOMICILIO
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900">
                ¿Cómo atendemos su piso en {district.name}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-diamond-50 text-diamond-700 font-heading font-black text-sm flex items-center justify-center border border-diamond-200">
                  01
                </div>
                <h3 className="font-heading text-base font-bold text-anthracite-900">
                  Inspección y Diagnóstico In Situ
                </h3>
                <p className="text-xs sm:text-sm text-anthracite-600 leading-relaxed">
                  Un especialista colegiado acude a su domicilio en {district.name} para medir reflectometría (GU), evaluar dureza y revisar juntas sin ningún costo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 font-heading font-black text-sm flex items-center justify-center border border-gold-200">
                  02
                </div>
                <h3 className="font-heading text-base font-bold text-anthracite-900">
                  Intervención Mecánica sin Polvo
                </h3>
                <p className="text-xs sm:text-sm text-anthracite-600 leading-relaxed">
                  Llegamos con unidades móviles, maquinaria industrial y extractores ciclónicos HEPA. El desbaste diamantado se ejecuta al agua, cuidando muebles y paredes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-anthracite-900 text-white font-heading font-black text-sm flex items-center justify-center">
                  03
                </div>
                <h3 className="font-heading text-base font-bold text-anthracite-900">
                  Garantía Escrita y Tránsito Libre
                </h3>
                <p className="text-xs sm:text-sm text-anthracite-600 leading-relaxed">
                  Entregamos el acta de conformidad técnica con nuestra garantía formal por escrito y recomendaciones de limpieza neutra. El piso queda transitable de inmediato.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PREGUNTAS FRECUENTES DEL DISTRITO */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[11px] font-mono font-bold text-gold-700 uppercase tracking-widest block mb-2">
                DUDAS FRECUENTES EN {district.name.toUpperCase()}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900">
                Preguntas Habituales de Nuestros Clientes
              </h2>
            </div>

            <div className="space-y-3.5">
              {district.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-surface-low/80 border-diamond-300 shadow-sm"
                        : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-heading text-sm sm:text-base font-bold text-anthracite-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-diamond-500 rounded-2xl transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                            isOpen ? "bg-diamond-600" : "bg-slate-300"
                          }`}
                        />
                        <span className={`${isOpen ? "text-diamond-950 font-extrabold" : "text-anthracite-900"}`}>
                          {faq.question}
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180 text-diamond-600" : "text-anthracite-400"
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: {
                              height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                              opacity: { duration: 0.25, delay: 0.05 }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
                              opacity: { duration: 0.18 }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-anthracite-600 leading-relaxed font-medium border-t border-slate-200/60 mt-1">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CTA FINAL DE AGENDAMIENTO */}
        {/* ========================================================================= */}
        <section className="py-16 bg-anthracite-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-[11px] font-mono font-bold text-gold-400 uppercase tracking-widest block">
              ATENCIÓN INMEDIATA EN {district.name.toUpperCase()}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              ¿Desea restaurar el brillo de sus pisos en {district.name}?
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Agende hoy una inspección técnica in situ sin costo. Nuestros ingenieros evaluarán el estado de su sustrato y le brindarán una propuesta técnica formal.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappDistrictUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Contactar por WhatsApp Directo</span>
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm border border-white/20 transition-colors"
              >
                <span>Formulario de Contacto Web</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DistritoLanding;
