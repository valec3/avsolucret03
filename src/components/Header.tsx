import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, companyData } from "@/data/company";

interface HeaderProps {
  activeTab?: string;
}

const Header = ({ activeTab = "Inicio" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo Principal */}
          <Link to="/" className="flex items-center gap-3 shrink-0 py-2">
            <img
              src="/main/logo.png"
              alt="Logo AV SOLUCRET - Ingeniería de Superficies"
              className="h-10 sm:h-11 w-auto object-contain"
              width="165"
              height="44"
            />
          </Link>

          {/* Navegación Desktop Limpia y Espaciada */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.name.toLowerCase() === activeTab.toLowerCase();
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative font-heading text-sm transition-colors py-1 ${
                    isActive
                      ? "text-diamond-700 font-extrabold"
                      : "text-anthracite-700 hover:text-diamond-600 font-semibold"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-diamond-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Acción Rápida Directa (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2 text-xs font-heading font-bold text-anthracite-700 hover:text-diamond-600 transition-colors px-3 py-2 rounded-lg hover:bg-surface-low"
              aria-label={`Llamar a ${companyData.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-diamond-600" />
              <span>{companyData.phoneDisplay}</span>
            </a>

            <Button
              className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-ambient hover:shadow-glow-blue transition-all"
              asChild
            >
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>Cotizar Visita In Situ</span>
              </a>
            </Button>
          </div>

          {/* Botón Menú Móvil Limpio */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-anthracite-800 rounded-xl hover:bg-surface-low transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </nav>
      </div>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200 bg-white overflow-hidden shadow-elevated"
          >
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-heading font-bold text-anthracite-900 hover:text-diamond-600 border-b border-slate-100 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${companyData.phone}`}
                  className="flex items-center justify-center gap-2 py-3.5 bg-surface-low rounded-xl text-sm font-heading font-bold text-anthracite-800 border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-diamond-600" />
                  <span>Central: {companyData.phoneDisplay}</span>
                </a>

                <Button
                  className="w-full bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold py-3.5 rounded-xl shadow-ambient"
                  asChild
                >
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </Button>

                {/* Redes Sociales en el menú móvil */}
                <div className="pt-3 flex items-center justify-center gap-3 border-t border-slate-100">
                  <a
                    href={companyData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook AV SOLUCRET"
                    className="w-10 h-10 rounded-xl bg-surface-low flex items-center justify-center text-anthracite-600 hover:text-[#1877F2] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={companyData.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok AV SOLUCRET"
                    className="w-10 h-10 rounded-xl bg-surface-low flex items-center justify-center text-anthracite-600 hover:text-black transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href={companyData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram AV SOLUCRET"
                    className="w-10 h-10 rounded-xl bg-surface-low flex items-center justify-center text-anthracite-600 hover:text-[#E4405F] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
