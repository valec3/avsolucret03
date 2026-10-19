import { Check } from "lucide-react";
import { materialsWorked } from "@/data/packages";

export const TrustStrip = () => {
  return (
    <section className="bg-surface-low/90 border-y border-slate-200/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span className="text-[11px] font-heading font-extrabold text-gold-800 uppercase tracking-widest">
              Materiales que trabajamos:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {materialsWorked.map((material, idx) => (
              <span
                key={material}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-heading font-semibold text-anthracite-800 shadow-2xs hover:border-gold-400 transition-colors"
              >
                <Check className="w-3 h-3 text-gold-600 shrink-0" />
                <span>{material}</span>
                {idx < materialsWorked.length - 1 && (
                  <span className="text-slate-300 ml-1 font-normal">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
