/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { $ as $$Layout, g as getSiteConfig } from '../chunks/Layout_C8Z0hdBb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const siteConfig = getSiteConfig();
  const heroSection = {
    title: "Construyendo el Futuro, Hoy.",
    subtitle: "Soluciones web innovadoras para llevar tu negocio al siguiente nivel.",
    ctaText: "Explora mis servicios",
    ctaLink: "/servicios"
  };
  const features = [
    {
      title: "Dise\xF1o Moderno",
      description: "Interfaces de usuario limpias, atractivas y totalmente responsivas."
    },
    {
      title: "Optimizaci\xF3n SEO",
      description: "Tu sitio ser\xE1 visible para los motores de b\xFAsqueda desde el primer d\xEDa."
    },
    {
      title: "Alto Rendimiento",
      description: "Websites ultrarr\xE1pidos gracias a la arquitectura de Astro."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Inicio | ${siteConfig.name}`, "description": siteConfig.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center"> <h1 class="text-5xl font-bold mb-4">${heroSection.title}</h1> <p class="text-lg text-gray-600 dark:text-gray-400 mb-8"> ${heroSection.subtitle} </p> <a${addAttribute(heroSection.ctaLink, "href")} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"> ${heroSection.ctaText} </a> </section> <section class="mt-16"> <h2 class="text-3xl font-bold text-center mb-8">¿Por qué elegirme?</h2> <div class="grid md:grid-cols-3 gap-8 text-center"> ${features.map((feature) => renderTemplate`<div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"> <h3 class="text-xl font-bold mb-2">${feature.title}</h3> <p>${feature.description}</p> </div>`)} </div> </section> ` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
