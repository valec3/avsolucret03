import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, ArrowRight, Gauge, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { surfaces, finishLevels, technicalPackages } from "@/data/packages";

const PricingSection = () => {
  const [area, setArea] = useState<number>(85);
  const [surface, setSurface] = useState<string>("marmol");
  const [finish, setFinish] = useState<string>("premium");

  // Estimador de tiempo de obra (en días laborales)
  const estimatedDays = area <= 50 ? "1 a 2 días" : area <= 120 ? "2 a 3 días" : "3 a 5 días";
  const projectedGloss = finish === "premium" ? "92+ Gloss Units (Espejo Puro)" : "80+ Gloss Units";
  const protocolName =
    finish === "premium"
      ? "Protocolo Diamantado 7 Fases + AV-SHIELD™ Ultra"
      : finish === "restauracion"
      ? "Protocolo Estándar 5 Fases"
      : "Protocolo de Cristalizado Térmico";

  const getWhatsAppMessage = () => {
    const surfaceName = surfaces.find((s) => s.id === surface)?.name || surface;
    const text = `Hola AV SOLUCRET, utilicé el estimador técnico en su web:
- Metraje aprox: ${area} m²
- Superficie: ${surfaceName}
- Acabado buscado: ${finish}
- Protocolo sugerido: ${protocolName}
Deseo agendar la visita de diagnóstico in situ sin costo para recibir su cotización formal.`;
    return `https://wa.me/51961801932?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
              ESTÁNDARES DE ESPECIFICACIÓN Y ALCANCE
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
            Paquetes y Protocolos Técnicos
          </h2>

          <p className="font-sans text-sm sm:text-base text-anthracite-600 leading-relaxed font-medium">
            Inversión inteligente por metro cuadrado en Lima Metropolitana. Sin costos
            ocultos, con calibración instrumental y garantía formal por escrito.
          </p>
        </div>

        {/* 4 Protocol Packages (CERO PRECIOS VISIBLES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {technicalPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? "bg-white border-2 border-gold-400 shadow-glow-gold -translate-y-2"
                  : "bg-surface-low/80 border border-slate-200/90 shadow-ambient hover:border-slate-300"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-anthracite-900 text-white text-[10px] font-heading font-bold uppercase tracking-wider whitespace-nowrap shadow-sm">
                  ★ MÁS SOLICITADO RESIDENCIAL
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest block mb-2">
                  {pkg.level}
                </span>

                <h3 className="font-heading text-xl font-extrabold text-anthracite-900 mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-anthracite-500 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Warranty Badge */}
                <div className="mb-6 p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-600 shrink-0" />
                  <span className="text-xs font-heading font-bold text-anthracite-800">
                    {pkg.warranty}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-anthracite-600">
                      <Check className="w-3.5 h-3.5 text-diamond-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conversion CTA */}
              <Button
                variant={pkg.highlight ? "default" : "outline"}
                className={`w-full font-heading font-semibold text-xs py-5 rounded-xl transition-all ${
                  pkg.highlight
                    ? "bg-diamond-600 hover:bg-diamond-500 text-white shadow-ambient"
                    : "border-slate-300 hover:border-diamond-400 text-anthracite-800"
                }`}
                asChild
              >
                <a
                  href={`https://wa.me/51961801932?text=${encodeURIComponent(
                    `Hola AV SOLUCRET, deseo solicitar diagnóstico in situ para el ${pkg.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar este Nivel
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Estimador Técnico de Metraje y Diagnóstico (SIN PRECIOS EN DINERO) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-surface-low border border-slate-200/90 p-8 sm:p-12 shadow-ambient"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <Gauge className="w-4 h-4 text-diamond-600" />
                  <span className="label-editorial text-diamond-700 font-bold">
                    DIAGNÓSTICO TÉCNICO EN TIEMPO REAL
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 tracking-tight">
                  Estimador Técnico de Diagnóstico y Metraje
                </h3>
                <p className="font-sans text-xs sm:text-sm text-anthracite-500 mt-1">
                  Ajuste el metraje exacto y seleccione el tipo de piso para calcular el protocolo sugerido y el tiempo de obra requerido.
                </p>
              </div>

              {/* Slider de Metraje con Accesos Rápidos Táctiles */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <label htmlFor="area-range-slider" className="text-xs font-heading font-extrabold text-anthracite-900 uppercase tracking-wider block">
                      Área estimada del proyecto:
                    </label>
                    <span className="text-[11px] text-anthracite-600">
                      Seleccioná un metraje rápido o ajustá el control deslizante:
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 self-start sm:self-auto bg-diamond-50/80 px-3.5 py-1.5 rounded-xl border border-diamond-200/80">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-diamond-700">
                      {area}
                    </span>
                    <span className="text-xs font-heading font-bold text-diamond-800">m²</span>
                  </div>
                </div>

                {/* Chips de Selección Rápida para Móvil y Desktop */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { value: 30, label: "30 m²", desc: "Hall / Baño" },
                    { value: 80, label: "80 m²", desc: "Dpto / Sala" },
                    { value: 150, label: "150 m²", desc: "Casa / Dúplex" },
                    { value: 300, label: "300+ m²", desc: "Corporativo" },
                  ].map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => setArea(preset.value)}
                      className={`py-2 px-1 rounded-xl text-center transition-all border ${
                        area === preset.value
                          ? "bg-diamond-600 text-white border-diamond-600 shadow-sm font-bold scale-[1.02]"
                          : "bg-surface-low/80 hover:bg-slate-100 text-anthracite-800 border-slate-200 hover:border-slate-300 font-semibold"
                      }`}
                    >
                      <div className="text-xs font-heading font-bold leading-tight">{preset.label}</div>
                      <div className={`text-[9px] hidden sm:block truncate mt-0.5 ${area === preset.value ? "text-diamond-100" : "text-anthracite-600"}`}>
                        {preset.desc}
                      </div>
                    </button>
                  ))}
                </div>

                <input
                  id="area-range-slider"
                  type="range"
                  min="15"
                  max="500"
                  step="5"
                  value={area}
                  aria-label="Metraje del piso en metros cuadrados"
                  aria-valuemin={15}
                  aria-valuemax={500}
                  aria-valuenow={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-diamond-600 focus:outline-none focus:ring-2 focus:ring-diamond-500/30"
                />
                <div className="flex justify-between text-[11px] text-anthracite-600 mt-2 font-mono font-medium">
                  <span>15 m² (Mínimo)</span>
                  <span>250 m²</span>
                  <span>500+ m² (Gran Superficie)</span>
                </div>
              </div>

              {/* Selector de Material */}
              <div>
                <label className="block text-xs font-heading font-bold text-anthracite-800 uppercase tracking-wider mb-2">
                  Material o soporte a intervenir:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {surfaces.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSurface(s.id)}
                      className={`p-2.5 rounded-lg text-xs font-heading font-semibold transition-all text-center border ${
                        surface === s.id
                          ? "bg-diamond-600 text-white border-diamond-600 shadow-sm"
                          : "bg-white text-anthracite-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector de Nivel de Acabado */}
              <div>
                <label className="block text-xs font-heading font-bold text-anthracite-800 uppercase tracking-wider mb-2">
                  Nivel de acabado requerido:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {finishLevels.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFinish(f.id)}
                      className={`p-2.5 rounded-lg text-xs font-heading font-semibold transition-all text-center border ${
                        finish === f.id
                          ? "bg-anthracite-900 text-white border-anthracite-900 shadow-sm"
                          : "bg-white text-anthracite-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Box (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-ambient flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <span className="text-xs font-mono font-extrabold text-gold-800 uppercase tracking-wider">
                    PROYECCIÓN DE OBRA
                  </span>
                  <span className="text-[10px] font-heading font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-300">
                    Visita in situ 100% Gratuita
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-diamond-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-anthracite-600 font-bold uppercase tracking-wider">
                        Protocolo Sugerido
                      </div>
                      <div className="font-heading text-sm font-extrabold text-anthracite-900">
                        {protocolName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-anthracite-600 font-bold uppercase tracking-wider">
                        Tiempo Estimado de Ejecución
                      </div>
                      <div className="font-heading text-sm font-extrabold text-anthracite-900">
                        {estimatedDays} en obra
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-diamond-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-anthracite-600 font-bold uppercase tracking-wider">
                        Reflectometría Proyectada
                      </div>
                      <div className="font-heading text-sm font-extrabold text-anthracite-900">
                        {projectedGloss}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200 text-xs text-anthracite-700 leading-relaxed mb-6 font-medium">
                  🛡️ <strong>Insumo incluido:</strong> Nanosellador hidrofóbico{" "}
                  <strong>AV-SHIELD™ Ultra</strong> y aspiración continua con retención HEPA 99.97%.
                </div>
              </div>

              <div>
                <Button
                  size="lg"
                  className="w-full bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm py-6 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
                  asChild
                >
                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enviar Diagnóstico a WhatsApp para Cotizar</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <div className="text-center mt-2.5 text-[11px] font-mono text-anthracite-600 flex items-center justify-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Respuesta técnica estimada en &lt; 15 min</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
