import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, FileCheck, ArrowLeft, CheckCircle2, ShieldCheck, HardHat, AlertTriangle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Términos y Condiciones de Servicio Técnico | AV SOLUCRET"
        description="Condiciones generales de contratación, protocolos de intervención en obra, coberturas SCTR, tolerancia cero al polvo y garantías técnicas de AV SOLUCRET en Lima."
        canonical="https://avsolucret.com/terminos-y-condiciones"
        keywords={[
          "terminos y condiciones av solucret",
          "garantia pulido pisos lima",
          "protocolo obra restauracion marmol",
          "cobertura sctr trabajos pulido",
        ]}
      />

      <Header activeTab="Servicios" />

      <main className="pt-28 lg:pt-36">
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb / Back Link */}
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-diamond-700 hover:text-diamond-800 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Volver al Inicio</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Scale className="w-3.5 h-3.5 text-gold-600" />
                <span>ESTÁNDARES CONTRACTUALES DE INGENIERÍA</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
                Términos y Condiciones del <br />
                <span className="text-diamond-700">Servicio de Restauración & Pulido</span>
              </h1>

              <p className="font-sans text-sm text-anthracite-500">
                Última revisión: <strong>Octubre 2026</strong> • Aplica a proyectos residenciales, patrimoniales, comerciales e industriales en el Perú.
              </p>
            </div>

            {/* Content Container */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-ambient space-y-8 font-sans text-sm text-anthracite-700 leading-relaxed">
              
              <section className="space-y-3">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-gold-50 text-gold-700 flex items-center justify-center text-xs font-mono font-bold">
                    01
                  </span>
                  Objeto y Alcance del Servicio
                </h2>
                <p>
                  Los presentes Términos regulan las condiciones bajo las cuales <strong>AV SOLUCRET S.A.C.</strong> ejecuta servicios de diagnóstico in situ, desbaste, rectificación, nivelación, pulido diamantado micro-secuencial, vitrificado, densificación y sellado nanométrico sobre pavimentos minerales (mármol, granito, terrazo veneciano, concreto arquitectónico y lajas naturales).
                </p>
                <p>
                  Todo servicio se formaliza mediante una <strong>Ficha de Evaluación Técnica o Cotización Formal Aceptada</strong>, en la que se detallan las áreas (m²), el diagnóstico del sustrato, la secuencia abrasiva y el plazo de ejecución acordado.
                </p>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-gold-50 text-gold-700 flex items-center justify-center text-xs font-mono font-bold">
                    02
                  </span>
                  Garantía de Habitabilidad y Cero Polvo en Obra
                </h2>
                <p>
                  AV SOLUCRET se compromete a operar bajo el estándar de <strong>Tolerancia Cero al Polvo Residual</strong>. Para cumplir esta garantía operativa:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-anthracite-600">
                  <li>Todas las máquinas de desbaste pesado y orilleras cuentan con campana de succión hermética acoplada a extractores ciclónicos industriales con filtros <strong>HEPA Clase M (retención del 99.97%)</strong>.</li>
                  <li>No es indispensable desocupar ni evacuar la vivienda o edificio comercial durante los trabajos en áreas de tránsito regular.</li>
                  <li>Se realiza el enmascarado preventivo con film plástico de alta densidad sobre zócalos, tapajuntas de carpintería y tomas de corriente adyacentes a la cota de desbaste.</li>
                </ul>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-gold-50 text-gold-700 flex items-center justify-center text-xs font-mono font-bold">
                    03
                  </span>
                  Requisitos Previos a la Intervención en el Inmueble
                </h2>
                <p>
                  Para la ejecución regular y segura de los trabajos, el cliente o la administración del inmueble facilitará:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/60">
                    <div className="font-heading font-semibold text-xs text-anthracite-900 mb-1 flex items-center gap-1.5">
                      <HardHat className="w-3.5 h-3.5 text-diamond-600" />
                      Suministro Eléctrico & Agua
                    </div>
                    <p className="text-xs text-anthracite-500">
                      Disponibilidad de punto de toma eléctrica de 220V estable y toma de agua corriente para refrigeración de diamantado cuando aplique.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/60">
                    <div className="font-heading font-semibold text-xs text-anthracite-900 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Permisos de Acceso y SCTR
                    </div>
                    <p className="text-xs text-anthracite-500">
                      Coordinación con la junta de propietarios o seguridad del edificio. AV SOLUCRET entrega con 24h de anticipación las pólizas SCTR de salud y pensión de todo su personal.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-gold-50 text-gold-700 flex items-center justify-center text-xs font-mono font-bold">
                    04
                  </span>
                  Métricas de Entrega: Reflectometría y Planimetría
                </h2>
                <p>
                  A la culminación del servicio, se verifican los parámetros objetivos de calidad en presencia del cliente mediante instrumental digital certificado:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-anthracite-600">
                  <li><strong>Reflectómetro Digital a 60°:</strong> Se garantiza el alcance del umbral pactado (hasta <strong>92–95 GU</strong> para acabado Espejo Mecánico en mármol y terrazo).</li>
                  <li><strong>Ensayo de Repelencia Líquida:</strong> Tras el curado de <em>AV-SHIELD™ Ultra</em>, se constata el efecto hidrofóbico con gota perlada (ángulo de contacto &gt; 110°).</li>
                  <li><strong>Homogeneidad Cromática:</strong> En reparaciones epóxicas de terrazo veneciano o fisuras de mármol, se valida la integración de grano mineral con el piso original.</li>
                </ul>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-gold-50 text-gold-700 flex items-center justify-center text-xs font-mono font-bold">
                    05
                  </span>
                  Póliza de Garantía Escrita por 5 Años
                </h2>
                <p>
                  Los tratamientos que incluyen la aplicación integral del sellador nanométrico <em>AV-SHIELD™ Ultra</em> cuentan con un <strong>Certificado de Garantía Escrita por 5 Años</strong> contra deslaminación, descascaramiento y decoloración solar, sujeto al cumplimiento de las pautas de limpieza neutra entregadas al cliente.
                </p>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                  <strong>Exclusiones de la Garantía:</strong> La garantía quedará sin efecto en caso de derrame no limpiado de ácidos industriales concentrados (ácido muriático, fluorhídrico), arrastre violento de maquinaria pesada sin protección o manipulación no autorizada con ceras acrílicas o químicos corrosivos.
                </div>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-gold-50 text-gold-700 flex items-center justify-center text-xs font-mono font-bold">
                    06
                  </span>
                  Jurisdicción y Ley Aplicable
                </h2>
                <p>
                  Cualquier controversia o discrepancia derivada del cumplimiento de estos términos se resolverá prioritariamente de mutuo acuerdo y bajo el marco de las leyes de la República del Perú, sometiéndose las partes a la competencia territorial de los jueces y tribunales del Distrito Judicial de Lima.
                </p>
              </section>

            </div>

            {/* Support CTA */}
            <div className="mt-8 p-6 rounded-xl bg-surface-low border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-anthracite-900 text-sm">
                  ¿Requiere aclaración técnica sobre su proyecto?
                </h4>
                <p className="text-xs text-anthracite-500 mt-0.5">
                  Nuestros ingenieros de operaciones revisarán sus términos particulares de obra.
                </p>
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-diamond-600 hover:bg-diamond-700 text-white text-xs font-heading font-semibold transition-colors"
              >
                <span>Consultar con Operaciones</span>
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

export default TerminosCondiciones;
