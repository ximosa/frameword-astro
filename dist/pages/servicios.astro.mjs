/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C8Z0hdBb.mjs';
import { $ as $$CardGrid } from '../chunks/CardGrid_DoW07_s3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  const services = [
    {
      title: "Desarrollo Web a Medida",
      description: "Creaci\xF3n de sitios web y aplicaciones web desde cero, totalmente personalizadas para cumplir con tus objetivos. Utilizo tecnolog\xEDas modernas como Astro, React y Vue para construir experiencias r\xE1pidas e interactivas.",
      buttonText: "Ver detalles",
      url: "/services/desarrollo-web-a-medida"
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
