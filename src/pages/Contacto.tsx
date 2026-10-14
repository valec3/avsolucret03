import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck, 
  Send, 
  MessageSquare, 
  Building2, 
  CheckCircle2, 
  Car, 
  FileCheck2,
  Lock,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { 
  limaDistricts, 
  mineralSurfaces, 
  contactRoadmap, 
  contactHeroData 
} from "@/data/contact";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    surface: mineralSurfaces[0],
    district: limaDistricts[0],
    area: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hola AV SOLUCRET, solicito una Evaluación Técnica In Situ 100% Gratuita:
• *Nombre / Empresa:* ${formData.name || "Cliente"}
• *Teléfono:* ${formData.phone || "No especificado"}
• *Superficie Mineral:* ${formData.surface}
• *Distrito en Lima:* ${formData.district}
• *Metraje aproximado:* ${formData.area ? `${formData.area} m²` : "Por confirmar en visita"}
${formData.comments ? `• *Observaciones:* ${formData.comments}\n` : ""}
Deseo agendar la visita técnica sin compromiso para diagnosticar mis pisos.`;

    const whatsappUrl = `https://wa.me/51961801932?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "name": "Contacto y Cotizaciones de Pulido de Pisos | AV SOLUCRET",
          "url": "https://avsolucret.com/contacto",
          "description":
            "Solicite inspección técnica in situ sin costo para pulido diamantado y restauración en Lima. Respuesta en menos de 15 minutos.",
        },
        {
          "@type": "HomeAndConstructionBusiness",
          "name": "AV SOLUCRET",
          "telephone": companyData.phone,
          "email": companyData.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyData.address,
            "addressLocality": "Lima",
            "addressRegion": "Lima",
            "postalCode": "15036",
            "addressCountry": "PE",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-12.0864",
            "longitude": "-77.0189",
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "07:30",
              "closes": "19:00",
            },
          ],
        },
      ],
    };

    return (
      <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
        <SEO
          title="Contacto y Cotización In Situ Gratuita"
          description="Agende su visita técnica in situ 100% gratuita para pulido de mármol, terrazo y concreto en Lima. WhatsApp directo: +51 961 801 932."
          canonical="https://avsolucret.com/contacto"
          breadcrumbs={[
            { name: "Inicio", path: "/" },
            { name: "Contacto y Presupuesto", path: "/contacto" },
          ]}
          schema={contactSchema}
          keywords={[
            "cotizar pulido de pisos lima",
            "telefono pulido de marmol lima",
            "contacto av solucret",
            "inspeccion tecnica de pisos miraflores san isidro",
            "presupuesto pulido terrazo lima",
          ]}
        />
        <Header activeTab="Contacto" />

        <main className="pt-28 lg:pt-36">
        
        {/* ========================================================================= */}
        {/* HERO SECTION CONTACTO (Image 7) */}
        {/* ========================================================================= */}
        <section className="pb-12 lg:pb-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span className="label-editorial text-gold-600 text-[11px] font-bold tracking-widest">
                  {contactHeroData.badge}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
                {contactHeroData.titlePrefix}{" "}
                <span className="text-diamond-700 underline decoration-gold-300 decoration-2 underline-offset-4">
                  {contactHeroData.titleHighlight}
                </span>
              </h1>

              <p className="font-sans text-base text-anthracite-500 leading-relaxed max-w-2xl">
                {contactHeroData.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GRID PRINCIPAL: FORMULARIO + MAPA OPERATIVO (Image 7) */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-surface-low/40 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* ------------------------------------------------------------------- */}
              {/* COLUMNA IZQUIERDA: FORMULARIO TÉCNICO & DIRECTIVES (6 cols) */}
              {/* ------------------------------------------------------------------- */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                
                {/* Card Superior: Línea Directa de WhatsApp (Image 7) */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-ambient">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-diamond-700 uppercase tracking-widest block mb-1">
                        LÍNEA DIRECTA DE INGENIERÍA
                      </span>
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900">
                        {companyData.phoneDisplay}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-anthracite-400">
                      Perú (+51) • Central Operativa
                    </span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                    asChild
                  >
                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Chatear por WhatsApp Ahora (24/7)</span>
                    </a>
                  </Button>
                </div>

                {/* Formulario de Evaluación In Situ 100% Gratuito (Image 7) */}
                <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-ambient">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-heading text-xl font-extrabold text-anthracite-900">
                        Solicitar Evaluación Técnica In Situ
                      </h3>
                      <p className="text-xs text-anthracite-600 mt-1 font-medium">
                        Completá los datos y te redirigirá a WhatsApp con la solicitud lista para enviar.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-300 shrink-0">
                      100% GRATUITO
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nombre Completo o Empresa */}
                    <div>
                      <label htmlFor="contacto-nombre" className="block text-xs font-heading font-extrabold text-anthracite-900 uppercase tracking-wider mb-2">
                        Nombre Completo o Empresa:
                      </label>
                      <input
                        id="contacto-nombre"
                        type="text"
                        required
                        placeholder="Ej. Arq. Carlos Mendoza / Condominio El Roble"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-low border border-slate-300 rounded-xl text-sm font-sans text-anthracite-900 placeholder:text-anthracite-400 focus:outline-none focus:border-diamond-600 focus:ring-2 focus:ring-diamond-500/20 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Teléfono / WhatsApp */}
                    <div>
                      <label htmlFor="contacto-telefono" className="block text-xs font-heading font-extrabold text-anthracite-900 uppercase tracking-wider mb-2">
                        Teléfono / WhatsApp:
                      </label>
                      <input
                        id="contacto-telefono"
                        type="tel"
                        required
                        placeholder="Ej. 961 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-low border border-slate-300 rounded-xl text-sm font-sans text-anthracite-900 placeholder:text-anthracite-400 focus:outline-none focus:border-diamond-600 focus:ring-2 focus:ring-diamond-500/20 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Tipo de Superficie Mineral */}
                    <div>
                      <label htmlFor="contacto-superficie" className="block text-xs font-heading font-extrabold text-anthracite-900 uppercase tracking-wider mb-2">
                        Tipo de Superficie Mineral:
                      </label>
                      <select
                        id="contacto-superficie"
                        value={formData.surface}
                        onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-low border border-slate-300 rounded-xl text-sm font-sans text-anthracite-900 focus:outline-none focus:border-diamond-600 focus:ring-2 focus:ring-diamond-500/20 focus:bg-white transition-all cursor-pointer font-medium"
                      >
                        {mineralSurfaces.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Distrito & Metraje Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contacto-distrito" className="block text-xs font-heading font-extrabold text-anthracite-900 uppercase tracking-wider mb-2">
                          Distrito en Lima:
                        </label>
                        <select
                          id="contacto-distrito"
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          className="w-full px-4 py-3 bg-surface-low border border-slate-300 rounded-xl text-sm font-sans text-anthracite-900 focus:outline-none focus:border-diamond-600 focus:ring-2 focus:ring-diamond-500/20 focus:bg-white transition-all cursor-pointer font-medium"
                        >
                          {limaDistricts.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contacto-metraje" className="block text-xs font-heading font-extrabold text-anthracite-900 uppercase tracking-wider mb-2">
                          Metraje Aprox. (m²):
                        </label>
                        <input
                          id="contacto-metraje"
                          type="number"
                          placeholder="Ej. 120"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 bg-surface-low border border-slate-300 rounded-xl text-sm font-sans text-anthracite-900 placeholder:text-anthracite-400 focus:outline-none focus:border-diamond-600 focus:ring-2 focus:ring-diamond-500/20 focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-anthracite-900 hover:bg-black text-white font-heading font-bold text-sm py-6 rounded-xl shadow-ambient transition-all mt-4 group"
                    >
                      <span>Enviar Solicitud de Visita Técnica Gratuita</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>

                {/* Datos Operativos & Cobertura */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 text-xs font-sans text-anthracite-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-diamond-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-anthracite-900 block font-heading">
                        Modalidad Operativa:
                      </strong>
                      <span>Servicio 100% In Situ a domicilio, residencias y empresas en todo Lima Metropolitana</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-anthracite-900 block font-heading">
                        Jornada Técnica & Emergencias:
                      </strong>
                      <span>Lunes a Sábado de 7:30 AM a 8:00 PM • Guardias nocturnas para retail y corporativos</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-diamond-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-anthracite-900 block font-heading">
                        Licitaciones & Consultas Institucionales:
                      </strong>
                      <span>{companyData.email}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* ------------------------------------------------------------------- */}
              {/* ------------------------------------------------------------------- */}
              {/* COLUMNA DERECHA: PROCESO CLARO & RESPALDO TÉCNICO (6 cols) */}
              {/* ------------------------------------------------------------------- */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* Panel Limpio: ¿Cómo es el proceso de atención? (Predictibilidad UX) */}
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-ambient p-6 sm:p-8">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-diamond-700 uppercase tracking-widest block mb-1">
                      PROCESO TRANSPARENTE
                    </span>
                    <h3 className="font-heading text-xl font-bold text-anthracite-900">
                      ¿Cómo atendemos su requerimiento?
                    </h3>
                    <p className="text-xs text-anthracite-600 mt-1">
                      Sin trámites engorrosos ni tiempos muertos. Tres pasos directos desde el primer contacto:
                    </p>
                  </div>

                  {/* 3 Pasos Claros y Directos */}
                  <div className="space-y-4 mb-6">
                    {contactRoadmap.map((item, idx) => (
                      <div key={item.step} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-low border border-slate-200/70">
                        <div className={`w-8 h-8 rounded-lg text-white font-heading font-black text-xs flex items-center justify-center shrink-0 ${
                          idx === 0 ? "bg-diamond-600" : idx === 1 ? "bg-gold-600" : "bg-anthracite-900"
                        }`}>
                          {item.step}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-heading text-sm font-bold text-anthracite-900">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono font-semibold text-gold-700 bg-gold-50 px-1.5 py-0.5 rounded border border-gold-200">
                              {item.benefit}
                            </span>
                          </div>
                          <p className="text-xs text-anthracite-600 leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resumen de Cobertura Lima */}
                  <div className="p-4 rounded-xl bg-diamond-50/60 border border-diamond-200/70">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-diamond-600" />
                      <span className="text-xs font-heading font-extrabold text-diamond-800 uppercase tracking-wider">
                        Cobertura en Lima Metropolitana
                      </span>
                    </div>
                    <p className="text-xs text-anthracite-700 leading-relaxed">
                      Atención diaria prioritaria en San Isidro, Miraflores, Surco, San Borja, La Molina, Barranco, Magdalena, Jesús María, San Miguel, Callao y complejos en playas del Sur / Asia.
                    </p>
                  </div>
                </div>

                {/* Respaldo Institucional y Seguridad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
                    <div className="text-xs">
                      <div className="font-heading font-bold text-anthracite-900">
                        Seguro SCTR al Día
                      </div>
                      <div className="text-anthracite-600 text-[11px]">
                        Personal 100% asegurado para residencias y torres
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
                    <FileCheck2 className="w-5 h-5 text-diamond-600 shrink-0" />
                    <div className="text-xs">
                      <div className="font-heading font-bold text-anthracite-900">
                        Garantía Formal
                      </div>
                      <div className="text-anthracite-600 text-[11px]">
                        Certificado técnico con respaldo de factura
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legal Trust Strip */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between text-xs text-anthracite-600">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-diamond-600 shrink-0" />
                    <span className="text-[11px]">
                      Datos protegidos por la Ley N° 29733 (LPDP Perú). Sin spam.
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-anthracite-700 font-bold shrink-0">
                    RUC: {companyData.ruc}
                  </div>
                </div>

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

export default Contacto;
