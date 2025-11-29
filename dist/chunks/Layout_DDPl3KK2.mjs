import { c as createComponent, d as createAstro, e as addAttribute, a as renderScript, b as renderTemplate, m as maybeRenderHead, r as renderComponent, s as spreadAttributes, u as unescapeHTML, i as renderSlot, j as renderHead } from './astro/server_DHUdpo0D.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/node_modules/astro/components/ClientRouter.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="theme-toggle relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out" aria-label="Cambiar tema"> <span class="sr-only">Cambiar tema</span> <svg class="sun-icon w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform rotate-0 scale-100 dark:rotate-90 dark:scale-0 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg> <svg class="moon-icon w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform rotate-90 scale-0 dark:rotate-0 dark:scale-100 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </button> ${renderScript($$result, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/ThemeToggle.astro", void 0);

const siteConfig = {
  name: "Mi Sitio Webgae",
  description: "Un sitio web moderno construido con Astro",
  url: "https://misitio.com",
  navigation: {
    main: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "/servicios" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" }
    ]
  },
  theme: {
    default: "system",
    colors: {
      primary: "#3B82F6",
      // blue-500
      secondary: "#6B7280"
      // gray-500
    }
  },
  content: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        route: "/blog",
        schema: {
          title: { type: "string", required: true },
          description: { type: "string", required: true },
          date: { type: "date", required: true },
          author: { type: "string", required: true },
          image: { type: "string", optional: true },
          category: { type: "string", required: true }
        }
      }
    ],
    pagination: {
      postsPerPage: 9
    }
  },
  seo: {
    title: "Mi Sitio Web",
    description: "Un sitio web moderno construido con Astro",
    keywords: ["astro", "web", "desarrollo"],
    author: "Tu Nombre"
  },
  social: {
    email: "contacto@misitio.com"
  }
};
function getSiteConfig() {
  return siteConfig;
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const siteConfig = getSiteConfig();
  return renderTemplate`${maybeRenderHead()}<header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50"> <div class="container mx-auto px-4"> <nav class="flex items-center justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-gray-900 dark:text-white">${siteConfig.name}</a> </div> <!-- Menú para escritorio --> <div class="hidden md:flex items-center space-x-4"> ${siteConfig.navigation.main.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${item.external ? "external-link" : ""}`, "class")}${spreadAttributes(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}> ${item.label} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> <!-- Botón de menú para móvil --> <div class="md:hidden flex items-center"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <button id="mobile-menu-button" class="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"> <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"> <path id="menu-open-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <path id="menu-close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </nav> </div> <!-- Menú desplegable para móvil --> <div id="mobile-menu" class="md:hidden hidden bg-white/95 dark:bg-gray-900/95"> ${siteConfig.navigation.main.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${item.external ? "external-link" : ""}`, "class")}${spreadAttributes(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}> ${item.label} </a>`)} </div> </header> ${renderScript($$result, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const {
    title = "Suscr\xEDbete a nuestro newsletter",
    description = "Recibe las \xFAltimas actualizaciones y art\xEDculos directamente en tu email.",
    placeholder = "Tu email aqu\xED...",
    buttonText = "Suscribirme"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="newsletter bg-gray-50 dark:bg-gray-800 py-12" data-astro-cid-motrwrji> <div class="container mx-auto px-4" data-astro-cid-motrwrji> <div class="max-w-2xl mx-auto text-center" data-astro-cid-motrwrji> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-motrwrji> ${title} </h3> <p class="text-gray-600 dark:text-gray-300 mb-8" data-astro-cid-motrwrji> ${description} </p> <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" method="POST" action="/api/newsletter" data-astro-cid-motrwrji> <input type="email" name="email"${addAttribute(placeholder, "placeholder")} required class="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-astro-cid-motrwrji> <button type="submit" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-astro-cid-motrwrji> ${buttonText} </button> </form> <p class="text-sm text-gray-500 dark:text-gray-400 mt-4" data-astro-cid-motrwrji>
Sin spam, solo contenido de calidad. Puedes darte de baja en cualquier momento.
</p> </div> </div> </section> ${renderScript($$result, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/Newsletter.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/Newsletter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto"> <!-- Newsletter Section --> <div class="border-b border-gray-200 dark:border-gray-700"> ${renderComponent($$result, "Newsletter", $$Newsletter, { "title": "Mantente actualizado", "description": "Suscr\xEDbete para recibir las \xFAltimas noticias y actualizaciones.", "placeholder": "Tu email...", "buttonText": "Suscribirme" })} </div> <div class="container mx-auto px-4 py-8"> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="mb-4 md:mb-0"> <p class="text-sm text-gray-600 dark:text-gray-400">
&copy; ${today.getFullYear()} MiSitio. Todos los derechos reservados.
</p> </div> <div class="flex space-x-6"> <a href="/admin/nuevo-post" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" title="Panel de Administración"> <span class="sr-only">Admin</span> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </a> <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </footer>`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title: propTitle,
    description: propDescription,
    image: propImage,
    url: propUrl,
    type = "website",
    frontmatter,
    noindex = false,
    canonical
  } = Astro2.props;
  const siteConfig = getSiteConfig();
  const currentUrl = propUrl || new URL(Astro2.url.pathname, siteConfig.url).href;
  const pageTitle = frontmatter?.title || propTitle || siteConfig.seo.title;
  const pageDescription = frontmatter?.description || propDescription || siteConfig.seo.description;
  const pageImage = frontmatter?.image || propImage || siteConfig.ogImage;
  const pageAuthor = frontmatter?.author || siteConfig.seo.author;
  const pageDate = frontmatter?.date ? new Date(frontmatter.date) : null;
  const pageTags = frontmatter?.tags || [];
  const pageCategory = frontmatter?.category;
  const isHomePage = Astro2.url.pathname === "/";
  const fullTitle = isHomePage ? pageTitle : `${pageTitle} | ${siteConfig.name}`;
  const canonicalUrl = canonical || currentUrl;
  const ogType = type === "article" || frontmatter ? "article" : "website";
  const absoluteImage = pageImage ? pageImage.startsWith("http") ? pageImage : new URL(pageImage, siteConfig.url).href : null;
  const keywords = [
    ...siteConfig.seo.keywords,
    ...pageTags || [],
    pageCategory
  ].filter(Boolean).join(", ");
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- T\xEDtulo y metadatos b\xE1sicos --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>', '</title><meta name="description"', '><!-- Keywords y autor --><meta name="keywords"', '><meta name="author"', '><!-- Idioma y robots --><meta name="language" content="es-ES">', '<!-- URL can\xF3nica --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', ">", "", "<!-- Open Graph para art\xEDculos -->", "", "", "", '<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', ">", "", "", "", "<!-- LinkedIn -->", "", '<!-- Favicon y iconos --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), fullTitle, addAttribute(pageDescription, "content"), addAttribute(keywords, "content"), addAttribute(pageAuthor, "content"), noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, addAttribute(canonicalUrl, "href"), addAttribute(ogType, "content"), addAttribute(siteConfig.name, "content"), addAttribute(fullTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(canonicalUrl, "content"), absoluteImage && renderTemplate`<meta property="og:image"${addAttribute(absoluteImage, "content")}>`, absoluteImage && renderTemplate`<meta property="og:image:alt"${addAttribute(pageTitle, "content")}>`, ogType === "article" && pageAuthor && renderTemplate`<meta property="article:author"${addAttribute(pageAuthor, "content")}>`, ogType === "article" && pageDate && renderTemplate`<meta property="article:published_time"${addAttribute(pageDate.toISOString(), "content")}>`, ogType === "article" && pageCategory && renderTemplate`<meta property="article:section"${addAttribute(pageCategory, "content")}>`, ogType === "article" && pageTags && pageTags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), addAttribute(fullTitle, "content"), addAttribute(pageDescription, "content"), absoluteImage && renderTemplate`<meta name="twitter:image"${addAttribute(absoluteImage, "content")}>`, absoluteImage && renderTemplate`<meta name="twitter:image:alt"${addAttribute(pageTitle, "content")}>`, siteConfig.social?.twitter && renderTemplate`<meta name="twitter:site"${addAttribute(`@${siteConfig.social.twitter}`, "content")}>`, renderTemplate`<meta name="twitter:creator"${addAttribute(siteConfig.seo.author, "content")}>`, absoluteImage && renderTemplate`<meta property="og:image:width" content="1200">`, absoluteImage && renderTemplate`<meta property="og:image:height" content="630">`, unescapeHTML(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": ogType === "article" ? "Article" : "WebSite",
      "name": fullTitle,
      "description": pageDescription,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.url
      },
      ...ogType === "article" ? {
        "headline": pageTitle,
        "author": {
          "@type": "Person",
          "name": pageAuthor
        },
        "datePublished": pageDate?.toISOString(),
        "dateModified": pageDate?.toISOString(),
        "image": absoluteImage ? {
          "@type": "ImageObject",
          "url": absoluteImage,
          "caption": pageTitle
        } : void 0,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      } : {
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteConfig.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    })
  ));
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><!-- 2. Usar el componente SEO y quitar las etiquetas anteriores -->', '<meta name="generator"', ">", "", '</head> <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans flex flex-col min-h-screen"> ', ' <main class="container mx-auto px-4 py-8 flex-grow"> ', " </main> ", ' <script>\n			// Este script se asegura de que no haya un "destello" del tema incorrecto.\n			const theme = (() => {\n				if (\n					typeof localStorage !== "undefined" &&\n					localStorage.getItem("theme")\n				) {\n					return localStorage.getItem("theme");\n				}\n				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n					return "dark";\n				}\n				return "light";\n			})();\n\n			if (theme === "light") {\n				document.documentElement.classList.remove("dark");\n			} else {\n				document.documentElement.classList.add("dark");\n			}\n			// Sincronizar en todas las pesta\xF1as\n			window.addEventListener("storage", () => {\n				if (localStorage.getItem("theme") === "dark") {\n					document.documentElement.classList.add("dark");\n				} else {\n					document.documentElement.classList.remove("dark");\n				}\n			});\n		<\/script> </body> </html>'])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description }), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$SEO as a, getSiteConfig as g };
