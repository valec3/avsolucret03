import { Star, ShieldCheck, Quote } from "lucide-react";
import { testimonials, testimonialsOverview } from "@/data/testimonials";

export const HomeTestimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-low/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span className="label-editorial text-gold-800 font-extrabold tracking-widest">
              {testimonialsOverview.sectionBadge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-4">
            {testimonialsOverview.title}
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-heading font-extrabold text-anthracite-900">
              {testimonialsOverview.ratingValue} / {testimonialsOverview.ratingMax}
            </span>
            <span className="text-xs text-anthracite-600 font-medium">
              {testimonialsOverview.ratingSummaryText}
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-ambient flex flex-col justify-between hover:border-gold-300 transition-all"
            >
              <div>
                {/* Header Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-diamond-200" />
                </div>

                <h3 className="font-heading text-base font-bold text-anthracite-900 mb-2.5">
                  "{rev.title}"
                </h3>

                <p className="font-sans text-xs sm:text-sm text-anthracite-600 leading-relaxed mb-6 font-medium">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-heading text-sm font-extrabold text-anthracite-900">
                  {rev.name}
                </div>
                <div className="text-[11px] text-anthracite-600 font-medium">
                  {rev.role}
                </div>
                <div className="text-[10px] font-mono text-diamond-700 font-bold mt-0.5">
                  {rev.district}
                </div>

                <div className="mt-3 py-1.5 px-2.5 rounded-md bg-surface-low border border-slate-200/80 text-[10px] font-mono text-anthracite-700 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{rev.work}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeTestimonials;
