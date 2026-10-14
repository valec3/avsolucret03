import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  User, 
  Search, 
  Tag,
  ShieldCheck
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

import { Article, articles, blogCategories as categories } from "@/data/blog";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === "all" || art.categoryKey === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Academia Técnica de Restauración y Pulido de Pisos | AV SOLUCRET",
    description:
      "Guías de ingeniería, patología mineral y mantenimiento de pavimentos en Lima, Perú.",
    url: "https://avsolucret.com/blog",
    publisher: {
      "@type": "Organization",
      name: "AV SOLUCRET",
      logo: {
        "@type": "ImageObject",
        url: "https://avsolucret.com/main/logo.png",
      },
    },
    blogPost: articles.map((art) => ({
      "@type": "BlogPosting",
      headline: art.title,
      description: art.excerpt,
      url: `https://avsolucret.com${art.slug}`,
      datePublished: "2026-10-12",
      author: {
        "@type": "Person",
        name: art.author,
      },
      image: `https://avsolucret.com${art.image}`,
    })),
  };

  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Blog Técnico y Guías de Restauración de Pisos"
        description="Biblioteca técnica de preservación de mármol, terrazo, concreto y piedras rústicas en Lima. Protocolos científicos sin mitos caseros."
        canonical="https://avsolucret.com/blog"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog Técnico", path: "/blog" },
        ]}
        schema={blogSchema}
        keywords={[
          "blog pulido de pisos lima",
          "consejos pulir marmol peru",
          "como limpiar terrazo veneciano",
          "reparar pisos quemados con acido",
          "concreto pulido litio peru",
          "cuidados de pisos de piedra",
        ]}
      />
      <Header activeTab="Blog" />

      <main className="pt-28 lg:pt-36">
        
        {/* ========================================================================= */}
        {/* HERO BLOG */}
        {/* ========================================================================= */}
        <section className="pb-16 lg:pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-6">
                <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                <span className="label-editorial text-gold-600 text-[11px] font-bold tracking-widest">
                  ACADEMIA PETROGRÁFICA & CONOCIMIENTO TÉCNICO
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-anthracite-900 tracking-tight leading-[1.15] mb-6">
                GUÍAS DE MANTENIMIENTO,{" "}
                <span className="text-diamond-700">RESTAURACIÓN</span> & CIENCIA MINERAL
              </h1>

              <p className="font-sans text-base text-anthracite-500 leading-relaxed max-w-2xl">
                Artículos técnicos de divulgación sobre preservación de mármol, terrazo, granito,
                porcelanato y concreto en Lima Metropolitana. Sin mitos caseros: ciencia de
                materiales aplicada al cuidado de su suelo.
              </p>
            </div>

            {/* Filter Pills & Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-heading font-semibold transition-all ${
                      selectedCategory === cat.id
                        ? "bg-diamond-600 text-white shadow-sm"
                        : "bg-surface-low text-anthracite-600 hover:bg-slate-100 border border-slate-200/60"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-anthracite-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar tema (ej. vinagre, ceras, laja)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-surface-low border border-slate-200 rounded-lg text-xs font-sans text-anthracite-800 focus:outline-none focus:border-diamond-500 transition-colors"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* ARTÍCULO DESTACADO (FEATURED POST) */}
        {/* ========================================================================= */}
        {selectedCategory === "all" && !searchQuery && (
          <section className="py-16 lg:py-20 bg-surface-low/50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-ambient overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  
                  {/* Left: Image (7 cols) */}
                  <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:h-[440px] overflow-hidden relative bg-slate-100">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold tracking-wider">
                      ARTÍCULO DESTACADO
                    </div>
                  </div>

                  {/* Right: Content (5 cols) */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-anthracite-400 font-mono mb-3">
                        <span className="text-diamond-700 font-bold bg-diamond-50 px-2.5 py-0.5 rounded border border-diamond-200">
                          {featuredArticle.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold-600" />
                          {featuredArticle.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-anthracite-900 tracking-tight leading-snug mb-4 group-hover:text-diamond-700 transition-colors">
                        {featuredArticle.title}
                      </h2>

                      <p className="font-sans text-sm text-anthracite-500 leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-anthracite-400 font-medium pb-6 border-b border-slate-100">
                        <User className="w-3.5 h-3.5 text-gold-600" />
                        <span>Por {featuredArticle.author}</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-semibold text-xs py-5 px-6 rounded-xl shadow-ambient hover:shadow-glow-blue"
                        asChild
                      >
                        <Link to={featuredArticle.slug}>
                          <span>Leer Guía Completa</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* GRID DE ARTÍCULOS TÉCNICOS */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="label-editorial text-gold-600 font-bold block mb-1">
                  ÍNDICE TÉCNICO
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-anthracite-900">
                  Todas las Publicaciones ({filteredArticles.length})
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredArticles.map((article) => (
                  <motion.article
                    key={article.title}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-ambient hover:shadow-elevated hover:border-gold-300 transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono font-bold">
                          {article.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-anthracite-400 font-mono mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gold-600" />
                            {article.readTime}
                          </span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>

                        <h4 className="font-heading text-lg font-bold text-anthracite-900 leading-snug mb-3 group-hover:text-diamond-700 transition-colors">
                          <Link to={article.slug}>{article.title}</Link>
                        </h4>

                        <p className="font-sans text-xs text-anthracite-500 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <Link
                        to={article.slug}
                        className="text-xs font-heading font-semibold text-diamond-700 hover:text-diamond-600 flex items-center gap-1 pt-4"
                      >
                        <span>Leer artículo completo</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className="text-[10px] text-anthracite-400 font-mono pt-4">
                        AV SOLUCRET
                      </span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* BANNER DE CONSULTA TÉCNICA RÁPIDA */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-surface-low/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="label-editorial text-gold-600 font-bold block mb-2">
              DIAGNÓSTICO IN SITU GRATUITO
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-anthracite-900 tracking-tight mb-4">
              ¿Tu piso ya sufrió daños por ceras o químicos abrasivos?
            </h2>
            <p className="font-sans text-sm sm:text-base text-anthracite-500 leading-relaxed max-w-xl mx-auto mb-8">
              No aplique remedios caseros que puedan empeorar la porosidad. Envíenos una foto por
              WhatsApp para una evaluación técnica inmediata sin costo.
            </p>

            <Button
              size="lg"
              className="bg-diamond-600 hover:bg-diamond-500 text-white font-heading font-bold text-sm px-7 py-6 rounded-xl shadow-ambient hover:shadow-glow-blue"
              asChild
            >
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Consultar con un Ingeniero por WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
