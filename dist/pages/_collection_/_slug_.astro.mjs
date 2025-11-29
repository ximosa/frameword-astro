/* empty css                                     */
import { c as createComponent, d as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DL7yatQU.mjs';
import { $ as $$Layout, a as $$SEO } from '../../chunks/Layout_C8Z0hdBb.mjs';
import { g as getCollectionsConfig } from '../../chunks/content.config_CJ-T_7NT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const collectionsConfig = getCollectionsConfig();
  const paths = [];
  for (const collection of collectionsConfig) {
    const entries = await getCollection(collection.name);
    for (const entry of entries) {
      paths.push({
        params: { collection: collection.name, slug: entry.slug },
        props: { entry }
      });
    }
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SEO", $$SEO, { "frontmatter": entry.data, "type": "article" })} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 prose lg:prose-xl"> <h1 class="text-4xl font-bold mb-4">${entry.data.title}</h1> ${entry.data.pubDate && renderTemplate`<p class="text-gray-500 mb-6">
Publicado el: ${entry.data.pubDate.toLocaleDateString()} </p>`} <article> ${renderComponent($$result2, "Content", Content, {})} </article> </main> ` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/[collection]/[slug].astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/[collection]/[slug].astro";
const $$url = "/[collection]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
