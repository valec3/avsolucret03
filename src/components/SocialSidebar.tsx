import { motion } from "framer-motion";
import { companyData } from "@/data/company";

export const SocialSidebar = () => {
  const socials = [
    {
      name: "Facebook",
      href: companyData.social.facebook,
      ariaLabel: "Visitar Facebook oficial de AV SOLUCRET",
      colorClass: "hover:text-[#1877F2] hover:bg-blue-50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: companyData.social.tiktok,
      ariaLabel: "Visitar TikTok oficial de AV SOLUCRET",
      colorClass: "hover:text-black hover:bg-slate-100",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: companyData.social.instagram,
      ariaLabel: "Visitar Instagram oficial de AV SOLUCRET",
      colorClass: "hover:text-[#E4405F] hover:bg-pink-50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      aria-label="Redes sociales oficiales"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center select-none"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/95 backdrop-blur-md border-y border-r border-slate-200/90 rounded-r-2xl shadow-ambient p-1.5 flex flex-col gap-2"
      >
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            title={item.name}
            className={`group w-10 h-10 flex items-center justify-center rounded-xl text-anthracite-600 bg-surface-low transition-all duration-200 hover:translate-x-1 ${item.colorClass}`}
          >
            {item.icon}
          </a>
        ))}
      </motion.div>
    </aside>
  );
};

export default SocialSidebar;
