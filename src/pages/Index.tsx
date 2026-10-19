import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";

// Lazy loading de componentes bajo el pliegue para acelerar el primer render
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const HomeTransformation = lazy(() => import("@/components/HomeTransformation"));
const WorkReelsSection = lazy(() => import("@/components/WorkReelsSection"));
const ProductSection = lazy(() => import("@/components/ProductSection"));
const HomeTestimonials = lazy(() => import("@/components/HomeTestimonials"));
const HomeFAQ = lazy(() => import("@/components/HomeFAQ"));
const CTASection = lazy(() => import("@/components/CTASection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Pulido, Cristalizado y Mantenimiento de Pisos en Lima | AV Solucret"
        description="Pulido diamantado, cristalizado, vitrificado y mantenimiento de pisos de mármol, granito, terrazo, mosaicos, porcelanato y concreto. Atención en todo Lima Metropolitana. Sin polvo y con garantía por escrito."
        canonical="https://avsolucret.com/"
        breadcrumbs={[{ name: "Inicio", path: "/" }]}
        keywords={[
          "pulido de pisos lima",
          "cristalizado de pisos lima",
          "mantenimiento de pisos lima",
          "pulido diamantado lima",
          "restauracion de marmol san isidro",
          "pulido de terrazo miraflores",
          "vitrificado de pisos lima",
          "sellado de pisos peru",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HomeAndConstructionBusiness",
              name: companyData.name,
              alternateName: companyData.legalName,
              image: "https://avsolucret.com/general/piso-marmol.webp",
              logo: "https://avsolucret.com/main/logo.png",
              telephone: `+51${companyData.phone.replace(/\s+/g, "")}`,
              email: companyData.email,
              url: "https://avsolucret.com",
              sameAs: [
                companyData.social.facebook,
                companyData.social.tiktok,
                companyData.social.instagram,
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: companyData.address,
                addressLocality: companyData.city,
                addressRegion: "Lima",
                postalCode: companyData.postalCode,
                addressCountry: companyData.countryCode,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: companyData.geo.latitude,
                longitude: companyData.geo.longitude,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
              areaServed: companyData.districtsCoverage,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: testimonialsOverview.ratingValue,
                bestRating: testimonialsOverview.ratingMax,
                worstRating: "1",
                ratingCount: testimonialsOverview.ratingCount.toString(),
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Pulido, Cristalizado y Mantenimiento de Pisos",
                itemListElement: servicesCatalogOffers.map((offer) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: offer.name,
                    description: offer.description,
                  },
                })),
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: homeFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />
      <Header activeTab="Inicio" />
      <main>
        {/* 1. Portada (Sección 3 del PDF) */}
        <HeroSection />

        {/* 2. Materiales que trabajamos (Sección 5 del PDF) */}
        <TrustStrip />

        {/* 3. Servicios: Seis bloques (Sección 4 del PDF) */}
        <ServicesSection />

        {/* Componentes bajo el pliegue cargados progresivamente sin bloquear el LCP */}
        <Suspense fallback={<div className="min-h-[120px]" />}>
          {/* 4. Cómo trabajamos: Cuatro pasos (Sección 7 del PDF) */}
          <ProcessSection />

          {/* 5. Los Tres Planes (Sección 6 del PDF) */}
          <PricingSection />

          {/* 6. Por Qué AV Solucret: 4 pilares (Sección 9 del PDF) */}
          <WhyChooseUs />

          {/* 7. Showcase de Casos Reales Certificados */}
          <HomeTransformation />

          {/* 8. En Obra: Reels de Video del Equipo en Acción */}
          <WorkReelsSection />

          {/* 9. Nanoprotección Hidrofóbica de Alta Gama */}
          <ProductSection />

          {/* 10. Prueba Social: Testimonios de Clientes en Lima */}
          <HomeTestimonials />

          {/* 11. Resolución de Dudas: Preguntas Frecuentes */}
          <HomeFAQ />

          {/* 12. Cierre y Contacto: Residencial y Empresas (Sección 10 del PDF) */}
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
