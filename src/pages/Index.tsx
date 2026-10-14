import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import HomeTransformation from "@/components/HomeTransformation";
import ProductSection from "@/components/ProductSection";
import PricingSection from "@/components/PricingSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFAQ from "@/components/HomeFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { companyData } from "@/data/company";
import { homeFaqs } from "@/data/faq";
import { servicesCatalogOffers } from "@/data/services";
import { testimonialsOverview } from "@/data/testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-anthracite-900 selection:bg-diamond-100 selection:text-diamond-800">
      <SEO
        title="Expertos en Pulido Diamantado en Lima, Perú | AV SOLUCRET"
        description="Restauración de alto estándar para mármol, terrazo, granito y concreto arquitectónico en Lima Metropolitana. Brillo espejo natural sin ceras, 100% libre de polvo y garantía por escrito."
        canonical="https://avsolucret.com/"
        breadcrumbs={[{ name: "Inicio", path: "/" }]}
        keywords={[
          "pulido diamantado lima",
          "pulido de pisos lima",
          "restauracion de marmol san isidro",
          "pulido de terrazo miraflores",
          "concreto pulido litio surco",
          "pulido de pisos sin polvo lima",
          "mantenimiento de pisos de granito",
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
                name: "Servicios Especializados de Restauración y Pulido Diamantado",
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
        {/* 1. Hero Principal */}
        <HeroSection />

        {/* 2. Franja de Sectores & Confianza */}
        <TrustStrip />

        {/* 3. Protocolos Principales de Intervención */}
        <ServicesSection />

        {/* 4. Showcase Interactivo Antes/Después con Casos Verificados en Lima */}
        <HomeTransformation />

        {/* 5. Nanoprotección Hidrofóbica de Alta Gama */}
        <ProductSection />

        {/* 6. Protocolos Técnicos & Estimador de Metraje */}
        <PricingSection />

        {/* 7. Prueba Social: Testimonios de Clientes Reales en Lima */}
        <HomeTestimonials />

        {/* 8. Resolución de Dudas: Preguntas Frecuentes Técnicas */}
        <HomeFAQ />

        {/* 9. Llamado a la Acción Final */}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
