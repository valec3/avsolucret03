import { trustSectors } from "@/data/trust";

export const TrustStrip = () => {
  return (
    <section className="bg-surface-low/80 border-y border-slate-200/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-gold-600" />
            <span className="text-[11px] font-heading font-extrabold text-gold-800 uppercase tracking-widest">
              Sectores de Intervención en Lima:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {trustSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.label}
                  className="flex items-center gap-2 text-xs font-heading font-bold text-anthracite-800"
                >
                  <Icon className="w-4 h-4 text-diamond-600 shrink-0" />
                  <span className="leading-snug">{sector.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
