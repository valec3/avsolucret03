import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routesSeoData, RouteSeoConfig } from "../src/data/routes-seo.ts";
import { companyData } from "../src/data/company.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

function buildJsonLdSchema(route: RouteSeoConfig): string {
  const schemas: Array<Record<string, unknown>> = [];

  // Breadcrumbs
  if (route.breadcrumbs && route.breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: route.breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: crumb.path.startsWith("http")
          ? crumb.path
          : `https://avsolucret.com${crumb.path.startsWith("/") ? crumb.path : `/${crumb.path}`}`,
      })),
    });
  }

  // Home Organization Schema
  if (route.path === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: companyData.name,
      legalName: companyData.legalName,
      url: "https://avsolucret.com",
      telephone: companyData.phone,
      taxID: companyData.ruc,
      description: route.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyData.address,
        addressLocality: "Lima",
        addressRegion: "Lima",
        addressCountry: "PE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -12.115,
        longitude: -77.018,
      },
      areaServed: companyData.districtsCoverage,
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:30",
          closes: "13:00",
        },
      ],
    });
  } else if (route.type === "article") {
    // Article Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: route.title,
      description: route.description,
      image: route.image,
      author: {
        "@type": "Person",
        name: `Ing. Alejandro Vidal (${companyData.engineerCip})`,
        jobTitle: "Ingeniero Especialista en Tratamiento de Suelos",
      },
      publisher: {
        "@type": "Organization",
        name: companyData.legalName,
        url: "https://avsolucret.com",
        logo: {
          "@type": "ImageObject",
          url: "https://avsolucret.com/main/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": route.canonical,
      },
    });
  } else if (route.path === "/servicios") {
    // Services Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Pulido Diamantado y Restauración de Pisos en Lima",
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: companyData.legalName,
        url: "https://avsolucret.com",
        telephone: companyData.phone,
      },
      areaServed: companyData.districtsCoverage,
      description: route.description,
    });
  }

  if (schemas.length === 0) {
    return "";
  }

  const payload =
    schemas.length === 1
      ? schemas[0]
      : {
          "@context": "https://schema.org",
          "@graph": schemas,
        };

  return `<script id="json-ld-schema" type="application/ld+json">${JSON.stringify(payload)}</script>`;
}

function processHtml(baseHtml: string, route: RouteSeoConfig): string {
  let html = baseHtml;

  // 1. Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  // 2. Meta description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // 3. Meta keywords
  const keywordsStr = route.keywords.join(", ");
  if (/<meta\s+name=["']keywords["']/i.test(html)) {
    html = html.replace(
      /<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="keywords" content="${keywordsStr}" />`
    );
  } else {
    html = html.replace(
      /<\/head>/i,
      `    <meta name="keywords" content="${keywordsStr}" />\n  </head>`
    );
  }

  // 4. Canonical
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // 5. OpenGraph Tags
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:image" content="${route.image}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:type" content="${route.type}" />`
  );

  // 6. Twitter Tags
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:image" content="${route.image}" />`
  );

  // 7. Inject Schema JSON-LD before </head>
  const schemaTag = buildJsonLdSchema(route);
  if (schemaTag) {
    if (html.includes('id="json-ld-schema"')) {
      html = html.replace(/<script\s+id=["']json-ld-schema["'][\s\S]*?<\/script>/i, schemaTag);
    } else {
      html = html.replace(/<\/head>/i, `    ${schemaTag}\n  </head>`);
    }
  }

  // 8. Inject noscript semantic fallback for pure non-JS bots (WhatsApp, Bing, low-bandwidth crawlers)
  const noscriptFallback = `
    <noscript>
      <main style="padding: 2rem; font-family: sans-serif; max-width: 800px; margin: 0 auto;">
        <h1>${route.fallbackH1}</h1>
        <p>${route.fallbackSummary}</p>
        <p>Atención técnica formal en Lima Metropolitana: San Isidro, Miraflores, Surco, San Borja, La Molina.</p>
        <p>Teléfono / WhatsApp: <a href="tel:${companyData.phone}">${companyData.phone}</a> | RUC: ${companyData.ruc}</p>
      </main>
    </noscript>`;

  html = html.replace(/<div id="root"><\/div>/i, `<div id="root"></div>${noscriptFallback}`);

  return html;
}

export function prerenderAllRoutes() {
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(
      "❌ [SSG Prerender] dist/index.html no existe. Ejecuta el empaquetado de producción primero."
    );
    return;
  }

  console.log("🚀 [SSG Prerender] Iniciando generación de rutas estáticas...");
  const baseHtml = fs.readFileSync(templatePath, "utf-8");
  const routes = Object.values(routesSeoData);

  let generatedCount = 0;

  for (const route of routes) {
    const routeHtml = processHtml(baseHtml, route);

    let targetDir = distDir;
    if (route.path !== "/") {
      // e.g. /servicios -> dist/servicios, /blog/cuidados-marmol -> dist/blog/cuidados-marmol
      const subPath = route.path.replace(/^\//, "");
      targetDir = path.join(distDir, ...subPath.split("/"));
    }

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, "index.html");
    fs.writeFileSync(targetFile, routeHtml, "utf-8");
    console.log(`  ✓ Generado [SSG]: ${route.path} -> ${path.relative(rootDir, targetFile)}`);
    generatedCount++;
  }

  console.log(
    `✅ [SSG Prerender] Completado con éxito: ${generatedCount} rutas pre-renderizadas como HTML estático puro.`
  );
}

// Auto-run if executed directly via Node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  prerenderAllRoutes();
}
