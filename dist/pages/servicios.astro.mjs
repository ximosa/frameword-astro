/* empty css                                  */
import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, b as renderTemplate, u as unescapeHTML, r as renderComponent } from '../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DDPl3KK2.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const {
    items,
    columns = 3,
    variant = "generic",
    showImages = true,
    showDate = false,
    showAuthor = false,
    showCategory = false,
    showTags = false,
    showPrice = false,
    showRating = false,
    showButton = false,
    buttonText = "Ver m\xE1s",
    imageAspect = "landscape",
    gap = "medium",
    class: className = ""
  } = Astro2.props;
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  };
  const gapClasses = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8"
  };
  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    let stars = "";
    for (let i = 0; i < fullStars; i++) {
      stars += '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    if (hasHalfStar) {
      stars += '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><defs><linearGradient id="halfStar"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }
    return stars;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card-grid grid ${gridClasses[columns]} ${gapClasses[gap]} ${className}`, "class")} data-astro-cid-zwuirr5b> ${items.map((item) => renderTemplate`<article${addAttribute(`card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${item.featured ? "ring-2 ring-blue-500" : ""}`, "class")} data-astro-cid-zwuirr5b> <!-- Imagen --> ${showImages && item.image && renderTemplate`<div${addAttribute(`relative overflow-hidden ${aspectClasses[imageAspect]}`, "class")} data-astro-cid-zwuirr5b> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" data-astro-cid-zwuirr5b> ${item.featured && renderTemplate`<div class="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium" data-astro-cid-zwuirr5b>
Destacado
</div>`} </div>`} <!-- Contenido --> <div class="p-6" data-astro-cid-zwuirr5b> <!-- Categoría --> ${showCategory && item.category && renderTemplate`<span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded mb-2" data-astro-cid-zwuirr5b> ${item.category} </span>`} <!-- Título --> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2" data-astro-cid-zwuirr5b> ${item.url ? renderTemplate`<a${addAttribute(item.url, "href")} class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-zwuirr5b> ${item.title} </a>` : item.title} </h3> <!-- Descripción --> ${item.description && renderTemplate`<p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3" data-astro-cid-zwuirr5b> ${item.description} </p>`} <!-- Rating --> ${showRating && item.rating && renderTemplate`<div class="flex items-center mb-3" data-astro-cid-zwuirr5b> <div class="flex items-center mr-2" data-astro-cid-zwuirr5b>${unescapeHTML(renderStars(item.rating))}</div> <span class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-zwuirr5b> ${item.rating}/5
</span> </div>`} <!-- Precio --> ${showPrice && item.price !== void 0 && renderTemplate`<div class="mb-3" data-astro-cid-zwuirr5b> <span class="text-2xl font-bold text-green-600 dark:text-green-400" data-astro-cid-zwuirr5b> ${item.currency || "\u20AC"}${item.price} </span> </div>`} <!-- Tags --> ${showTags && item.tags && item.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-3" data-astro-cid-zwuirr5b> ${item.tags.slice(0, 3).map((tag) => renderTemplate`<span class="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded" data-astro-cid-zwuirr5b> ${tag} </span>`)} ${item.tags.length > 3 && renderTemplate`<span class="text-xs text-gray-500 dark:text-gray-400" data-astro-cid-zwuirr5b>
+${item.tags.length - 3} más
</span>`} </div>`} <!-- Metadata (fecha y autor) --> <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4" data-astro-cid-zwuirr5b> <div class="flex items-center space-x-2" data-astro-cid-zwuirr5b> ${showDate && item.date && renderTemplate`<span data-astro-cid-zwuirr5b>📅 ${new Date(item.date).toLocaleDateString()}</span>`} ${showAuthor && item.author && renderTemplate`<span data-astro-cid-zwuirr5b>👤 ${item.author}</span>`} </div> </div> <!-- Botón --> ${showButton && (item.url || item.buttonText) && renderTemplate`<a${addAttribute(item.url || "#", "href")}${addAttribute(`inline-block px-4 py-2 rounded-lg font-medium transition-colors ${item.buttonVariant === "secondary" ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600" : item.buttonVariant === "outline" ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`, "class")} data-astro-cid-zwuirr5b> ${item.buttonText || buttonText} </a>`} </div> </article>`)} </div> `;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/CardGrid.astro", void 0);

const $$Astro = createAstro();
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  const services = [
    {
      title: "Desarrollo Web a Medida",
      description: "Creaci\xF3n de sitios web y aplicaciones web desde cero, totalmente personalizadas para cumplir con tus objetivos. Utilizo tecnolog\xEDas modernas como Astro, React y Vue para construir experiencias r\xE1pidas e interactivas.",
      buttonText: "Ver detalles",
      url: "/servicios/desarrollo-web-a-medida"
    },
    {
      title: "Consultor\xEDa SEO",
      description: "An\xE1lisis y optimizaci\xF3n de tu sitio web para mejorar su posicionamiento en motores de b\xFAsqueda como Google. Aumenta tu visibilidad, atrae m\xE1s tr\xE1fico org\xE1nico y consigue m\xE1s clientes.",
      buttonText: "Consultar",
      url: "#contacto"
    },
    {
      title: "Mantenimiento y Soporte Web",
      description: "Aseguro que tu sitio web funcione sin problemas con paquetes de mantenimiento que incluyen actualizaciones, copias de seguridad, y soporte t\xE9cnico para que puedas centrarte en tu negocio.",
      buttonText: "Contactar",
      url: "#contacto"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios | MiSitio Web", "description": "Descubre los servicios que ofrezco para potenciar tu presencia online." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mis Servicios</h1> <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Soluciones a medida para tus necesidades digitales.
</p> </div> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "items": services, "columns": 3, "variant": "generic", "showButton": true, "gap": "large", "class": "max-w-6xl mx-auto" })} </div> </section> ` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
