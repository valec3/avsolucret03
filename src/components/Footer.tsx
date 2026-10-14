import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { companyData, footerNavItems, coverageDistricts } from "@/data/company";

const Footer = () => {
  return (
    <footer className="relative bg-surface-low/80 border-t border-slate-200/80 pt-16 pb-16 sm:pb-20 overflow-hidden">
      
      {/* Massive Typographic Watermark Background (Image 1) */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center font-heading font-black text-slate-900/[0.035] text-[15vw] leading-none tracking-tight whitespace-nowrap z-0"
        aria-hidden="true"
      >
        AV SOLUCRET
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200/80">
          
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/main/logo.png"
                alt="Logo AV SOLUCRET"
                className="h-10 w-auto object-contain"
                width="160"
                height="40"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-anthracite-500 leading-relaxed mb-6 max-w-sm">
              Especialistas en ingeniería de superficies minerales, pulido diamantado
              de concreto, terrazo, mármol y granito con especificación arquitectónica.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-low border border-slate-200 text-anthracite-700 text-xs font-heading font-semibold">
              <ShieldCheck className="w-4 h-4 text-diamond-600 shrink-0" />
              <span>Garantía Escrita y Personal con Seguro SCTR</span>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-anthracite-900 uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="font-sans text-xs sm:text-sm text-anthracite-500 hover:text-diamond-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Cobertura en Lima (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-anthracite-900 uppercase tracking-wider mb-1">
              Cobertura en Lima
            </h4>
            <span className="inline-block text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest mb-4">
              SERVICIO TÉCNICO IN SITU
            </span>
            <ul className="space-y-1.5 text-xs text-anthracite-500 font-medium">
              {coverageDistricts.map((district) => {
                const districtSlugMap: Record<string, string> = {
                  "San Isidro": "/zonas/pulido-de-pisos-san-isidro",
                  "Miraflores": "/zonas/pulido-de-pisos-miraflores",
                  "Santiago de Surco": "/zonas/pulido-de-pisos-surco",
                  "La Molina": "/zonas/pulido-de-pisos-la-molina",
                };
                const href = districtSlugMap[district];

                return (
                  <li key={district} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    {href ? (
                      <Link
                        to={href}
                        className="hover:text-diamond-600 hover:underline underline-offset-2 transition-colors"
                      >
                        {district}
                      </Link>
                    ) : (
                      <span>{district}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Central de Contacto (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-anthracite-900 uppercase tracking-wider mb-4">
              Central de Contacto
            </h4>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-anthracite-600">
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-2.5 hover:text-diamond-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-diamond-600 shrink-0" />
                <span>Central: {companyData.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-2.5 hover:text-diamond-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-diamond-600 shrink-0" />
                <span>{companyData.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-diamond-600 shrink-0 mt-0.5" />
                <span>Lima Metropolitana, Perú</span>
              </div>

              <div className="flex items-center gap-2.5 text-anthracite-500">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{companyData.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bottom Bar with WhatsApp Safe-Zone */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-anthracite-500 pr-0 sm:pr-24 lg:pr-28">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} AV SOLUCRET S.A.C. Todos los derechos reservados.</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
            <span>
              Desarrollado por{" "}
              <a
                href="https://kleincode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-anthracite-700 hover:text-diamond-600 transition-colors underline-offset-2 hover:underline"
              >
                Klein Code
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 font-medium text-anthracite-500">
            <Link
              to="/terminos-y-condiciones"
              className="hover:text-anthracite-800 transition-colors underline-offset-4 hover:underline"
            >
              Términos y Condiciones
            </Link>
            <Link
              to="/politica-de-privacidad"
              className="hover:text-anthracite-800 transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
