import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Instagram } from "lucide-react";
import { companyData, footerNavItems, coverageDistricts } from "@/data/company";

const Footer = () => {
  return (
    <footer className="relative bg-surface-low/80 border-t border-slate-200/80 pt-16 pb-16 sm:pb-20 overflow-hidden">
      
      {/* Watermark Background */}
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
                alt="Logo AV Solucret"
                className="h-10 w-auto object-contain"
                width="160"
                height="40"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed mb-4 max-w-sm">
              Pulido diamantado, cristalizado, vitrificado y mantenimiento de pisos en Lima Metropolitana y Callao. Sin polvo y con garantía por escrito.
            </p>

            <div className="text-xs text-anthracite-500 mb-5 space-y-1">
              <div><strong>Razón Social:</strong> {companyData.legalName}</div>
              <div><strong>RUC:</strong> {companyData.ruc}</div>
              <div><strong>En operación desde:</strong> {companyData.operatingSince} ({companyData.yearsOfOperation} años)</div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-anthracite-700 text-xs font-heading font-semibold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-diamond-600 shrink-0" />
              <span>{companyData.guaranteeText}</span>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
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

          {/* Column 3: Cobertura en Lima (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-anthracite-900 uppercase tracking-wider mb-1">
              Cobertura en Lima
            </h4>
            <span className="inline-block text-[10px] font-mono font-bold text-gold-700 uppercase tracking-widest mb-3">
              LIMA METROPOLITANA Y CALLAO
            </span>
            <p className="text-[11px] text-anthracite-500 leading-relaxed mb-3">
              {companyData.coverageText}
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-anthracite-600 font-medium">
              {coverageDistricts.map((district, idx) => {
                const districtSlugMap: Record<string, string> = {
                  "San Isidro": "/zonas/pulido-de-pisos-san-isidro",
                  "Miraflores": "/zonas/pulido-de-pisos-miraflores",
                  "Surco": "/zonas/pulido-de-pisos-surco",
                  "Santiago de Surco": "/zonas/pulido-de-pisos-surco",
                  "La Molina": "/zonas/pulido-de-pisos-la-molina",
                };
                const href = districtSlugMap[district];

                return (
                  <span key={district} className="inline-flex items-center">
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
                    {idx < coverageDistricts.length - 1 && (
                      <span className="text-slate-300 ml-2 font-normal">·</span>
                    )}
                  </span>
                );
              })}
              <span className="text-anthracite-400">· y demás distritos</span>
            </div>
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
                <span>Teléfono / WhatsApp: {companyData.phoneDisplay}</span>
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
                <span>Oficina: {companyData.office}</span>
              </div>

              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-diamond-600 transition-colors"
              >
                <Instagram className="w-4 h-4 text-diamond-600 shrink-0" />
                <span>Instagram: {companyData.instagramHandle}</span>
              </a>

              <div className="flex items-center gap-2.5 text-anthracite-500">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{companyData.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-anthracite-500 pr-0 sm:pr-24 lg:pr-28">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} {companyData.name} — {companyData.legalName}. RUC {companyData.ruc}. Todos los derechos reservados.</span>
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
