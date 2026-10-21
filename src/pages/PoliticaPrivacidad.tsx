import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileText, ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Política de Privacidad y Tratamiento de Datos | AV SOLUCRET"
        description="Conozca nuestra política de privacidad y protección de datos personales conforme a la Ley N° 29733 de la República del Perú. Seguridad y confidencialidad garantizada."
        canonical="https://avsolucret.com/politica-de-privacidad"
        keywords={[
          "politica de privacidad av solucret",
          "ley 29733 proteccion datos peru",
          "terminos privacidad pulido pisos",
        ]}
      />

      <Header activeTab="Contacto" />

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

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-diamond-50 border border-diamond-200 text-diamond-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-diamond-600" />
                <span>MARCO LEGAL PERÚ • LEY N° 29733</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
                Política de Privacidad & <br />
                <span className="text-diamond-700">Protección de Datos Personales</span>
              </h1>

              <p className="font-sans text-sm text-anthracite-500">
                Última actualización: <strong>Octubre 2026</strong> • Vigente para todos los usuarios y clientes en Lima y a nivel nacional.
              </p>
            </div>

            {/* Content Container */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-ambient space-y-8 font-sans text-sm text-anthracite-700 leading-relaxed">
              
              <section className="space-y-3">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-diamond-50 text-diamond-700 flex items-center justify-center text-xs font-mono font-bold">
                    01
                  </span>
                  Identidad del Titular del Banco de Datos
                </h2>
                <p>
                  El titular del banco de datos personales y responsable del tratamiento de los mismos es <strong>AV SOLUCRET S.A.C.</strong> (en adelante, "AV SOLUCRET"), con domicilio legal en Lima Metropolitana, Perú, correo electrónico de contacto: <strong>{companyData.email}</strong> y teléfono de atención técnica: <strong>{companyData.phoneDisplay}</strong>.
                </p>
                <p>
                  En estricto cumplimiento con la <strong>Ley N° 29733 (Ley de Protección de Datos Personales)</strong> y su Reglamento aprobado mediante Decreto Supremo N° 003-2013-JUS, garantizamos el resguardo, confidencialidad y adecuado tratamiento de toda la información suministrada voluntariamente por nuestros clientes, proveedores y visitantes.
                </p>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-diamond-50 text-diamond-700 flex items-center justify-center text-xs font-mono font-bold">
                    02
                  </span>
                  Datos Personales Recopilados
                </h2>
                <p>
                  A través de nuestros canales de cotización, formularios de contacto in situ y mensajería directa por WhatsApp oficial, AV SOLUCRET podrá recopilar los siguientes datos:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-anthracite-600">
                  <li>Nombres y apellidos / Razón Social empresarial.</li>
                  <li>Número de documento de identidad (DNI / CE) o RUC.</li>
                  <li>Número telefónico de contacto celular o WhatsApp.</li>
                  <li>Dirección de correo electrónico.</li>
                  <li>Ubicación geográfica, distrito y dirección física del inmueble a intervenir para fines exclusivos de diagnóstico técnico y traslado de maquinaria.</li>
                  <li>Metraje aproximado, material pétreo del piso y fotografías de la superficie para evaluación mineralógica.</li>
                </ul>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-diamond-50 text-diamond-700 flex items-center justify-center text-xs font-mono font-bold">
                    03
                  </span>
                  Finalidad del Tratamiento de Datos
                </h2>
                <p>
                  La información personal recabada será utilizada exclusivamente para:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/60">
                    <div className="font-heading font-semibold text-xs text-anthracite-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Diagnósticos y Presupuestos
                    </div>
                    <p className="text-xs text-anthracite-500">
                      Elaborar fichas técnicas de intervención, cálculo de reflectometría estimada y visitas in situ de evaluación técnica.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/60">
                    <div className="font-heading font-semibold text-xs text-anthracite-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Gestión Operativa en Obra
                    </div>
                    <p className="text-xs text-anthracite-500">
                      Coordinación logística de cuadrillas técnicas, trámites de acceso SCTR en edificios y condominios.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/60">
                    <div className="font-heading font-semibold text-xs text-anthracite-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Facturación y Garantías
                    </div>
                    <p className="text-xs text-anthracite-500">
                      Emisión de comprobantes tributarios electrónicos (SUNAT) y emisión del certificado de garantía escrita por 5 años.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-low border border-slate-200/60">
                    <div className="font-heading font-semibold text-xs text-anthracite-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Cero Spam Comercial
                    </div>
                    <p className="text-xs text-anthracite-500">
                      Nunca vendemos, alquilamos ni transferimos sus datos a terceros bajo ninguna circunstancia.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-diamond-50 text-diamond-700 flex items-center justify-center text-xs font-mono font-bold">
                    04
                  </span>
                  Ejercicio de Derechos ARCO
                </h2>
                <p>
                  De conformidad con la legislación peruana, usted tiene derecho permanente al <strong>Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO)</strong> respecto de sus datos personales.
                </p>
                <p>
                  Para ejercer cualquiera de estos derechos, basta con remitir una solicitud formal por escrito a nuestro correo institucional <strong>{companyData.email}</strong> indicando su nombre completo, documento de identidad y el detalle de su requerimiento. Su solicitud será atendida en un plazo máximo de 10 días hábiles.
                </p>
              </section>

              <section className="space-y-3 pt-6 border-t border-slate-100">
                <h2 className="font-heading text-xl font-bold text-anthracite-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-diamond-50 text-diamond-700 flex items-center justify-center text-xs font-mono font-bold">
                    05
                  </span>
                  Seguridad de la Información
                </h2>
                <p>
                  En AV SOLUCRET implementamos medidas de seguridad técnicas, organizativas y legales para evitar la alteración, pérdida, tratamiento o acceso no autorizado a los datos recopilados, empleando canales cifrados con protocolo SSL/TLS de 256 bits en todos nuestros entornos web.
                </p>
              </section>

            </div>

            {/* Contact helper card */}
            <div className="mt-8 p-6 rounded-xl bg-surface-low border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-anthracite-900 text-sm">
                  ¿Tiene alguna duda legal sobre sus datos?
                </h4>
                <p className="text-xs text-anthracite-500 mt-0.5">
                  Nuestro equipo de asesoría técnica y legal se encuentra a su entera disposición.
                </p>
              </div>
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-anthracite-900 hover:bg-anthracite-800 text-white text-xs font-heading font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-diamond-400" />
                <span>Contactar a Legal</span>
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaPrivacidad;
