/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DL7yatQU.mjs';
import { $ as $$Layout } from '../chunks/Layout_C8Z0hdBb.mjs';
import { g as getCollectionsConfig } from '../chunks/content.config_CJ-T_7NT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { collection: collectionParam } = Astro2.params;
  const collectionsConfig = getCollectionsConfig();
  const collectionConfig = collectionsConfig.find((c) => c.name === collectionParam);
  if (!collectionConfig) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  const entries = await getCollection(collectionParam);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": collectionConfig.label || `Archivo de ${collectionParam}`, "description": `Explora todas las entradas en la categor\xEDa de ${collectionConfig.label}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-6"> ${collectionConfig.label || `Archivo de ${collectionParam}`} </h1> <ul class="space-y-4"> ${entries.map((entry) => renderTemplate`<li> <a${addAttribute(`/${collectionParam}/${entry.slug}`, "href")} class="text-2xl font-semibold text-primary-600 hover:underline"> ${entry.data.title} </a> ${entry.data.description && renderTemplate`<p class="text-gray-600 mt-1">${entry.data.description}</p>`} </li>`)} </ul> </main> ` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/[collection]/index.astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/[collection]/index.astro";
const $$url = "/[collection]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
