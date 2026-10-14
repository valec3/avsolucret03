import { useEffect } from "react";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  keywords?: string[];
  breadcrumbs?: BreadcrumbItem[];
}

export const SEO = ({
  title,
  description,
  canonical = "https://avsolucret.com",
  type = "website",
  image = "https://avsolucret.com/general/piso-marmol.webp",
  schema,
  keywords = [
    "pulido de pisos lima",
    "pulido diamantado peru",
    "restauracion de marmol san isidro",
    "pulido de terrazo veneciano miraflores",
    "concreto pulido industrial",
    "sellador de pisos lima",
  ],
  breadcrumbs,
}: SEOProps) => {
  const fullTitle = title.includes("AV SOLUCRET")
    ? title
    : `${title} | AV SOLUCRET Lima`;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // Helper for updating meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta
    setMetaTag("name", "description", description);
    if (keywords.length > 0) {
      setMetaTag("name", "keywords", keywords.join(", "));
    }

    // 3. Local SEO Geotargeting (Lima Metropolitana, Perú)
    setMetaTag("name", "geo.region", "PE-LIM");
    setMetaTag("name", "geo.placename", "Lima");
    setMetaTag("name", "geo.position", "-12.115;-77.018");
    setMetaTag("name", "ICBM", "-12.115, -77.018");

    // 4. Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:locale", "es_PE");
    setMetaTag("property", "og:site_name", "AV SOLUCRET");

    // 5. Twitter Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // 6. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // 7. Schema.org JSON-LD Generation (incluyendo BreadcrumbList si aplica)
    const jsonLdPayloads: Array<Record<string, unknown>> = [];

    // A. BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      jsonLdPayloads.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: crumb.path.startsWith("http")
            ? crumb.path
            : `https://avsolucret.com${crumb.path.startsWith("/") ? crumb.path : `/${crumb.path}`}`,
        })),
      });
    }

    // B. Page Specific Schema
    if (schema) {
      if (Array.isArray(schema)) {
        jsonLdPayloads.push(...schema);
      } else {
        jsonLdPayloads.push(schema);
      }
    }

    // C. Script Injection
    let scriptTag = document.getElementById("json-ld-schema") as HTMLScriptElement | null;
    if (jsonLdPayloads.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "json-ld-schema";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text =
        jsonLdPayloads.length === 1
          ? JSON.stringify(jsonLdPayloads[0])
          : JSON.stringify({
              "@context": "https://schema.org",
              "@graph": jsonLdPayloads,
            });
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, description, canonical, type, image, schema, keywords, breadcrumbs]);

  return null;
};

export default SEO;
