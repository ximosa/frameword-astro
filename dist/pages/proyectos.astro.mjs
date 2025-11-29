/* empty css                                  */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C8Z0hdBb.mjs';
import { $ as $$CardGrid } from '../chunks/CardGrid_DoW07_s3.mjs';
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Portafolio Fotograf\xEDa Profesional",
      description: "Sitio web elegante y minimalista para fot\xF3grafo profesional. Dise\xF1o limpio que pone el foco en las im\xE1genes con navegaci\xF3n intuitiva y galer\xEDa responsive.",
      buttonText: "Ver proyecto",
      url: "/projects/portafolio-photografia"
    }
    // Agregar más proyectos aquí cuando se creen
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos | MiSitio Web", "description": "Descubre mi portafolio de proyectos de desarrollo web y dise\xF1o." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mis Proyectos</h1> <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Una selección de proyectos que he desarrollado, desde sitios web corporativos hasta aplicaciones web innovadoras.
</p> </div> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "items": projects, "columns": 3, "variant": "generic", "showButton": true, "gap": "large", "class": "max-w-6xl mx-auto" })} </div> </section> ` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/proyectos.astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Proyectos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
