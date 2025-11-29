/* empty css                                     */
import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, b as renderTemplate, a as renderScript, r as renderComponent } from '../../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DL7yatQU.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C8Z0hdBb.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$YouTube;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg my-8"> <iframe${addAttribute(`https://www.youtube.com/embed/${id}`, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full"></iframe> </div>`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/YouTube.astro", void 0);

const $$Astro$1 = createAstro();
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  return renderTemplate`<!-- Botón flotante para abrir TOC -->${maybeRenderHead()}<button id="toc-button" class="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group" aria-label="Tabla de contenidos" data-astro-cid-xvrfupwn> <svg class="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xvrfupwn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" data-astro-cid-xvrfupwn></path> </svg> <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold" data-astro-cid-xvrfupwn> ${headings.length} </span> </button> <!-- Modal TOC --> <div id="toc-modal" class="fixed inset-0 z-50 hidden" aria-labelledby="toc-title" role="dialog" aria-modal="true" data-astro-cid-xvrfupwn> <!-- Backdrop --> <div id="toc-backdrop" class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" data-astro-cid-xvrfupwn></div> <!-- Panel del TOC --> <div class="fixed inset-y-0 right-0 flex max-w-full pl-10" data-astro-cid-xvrfupwn> <div id="toc-panel" class="w-screen max-w-md transform transition-transform duration-300 ease-out translate-x-full" data-astro-cid-xvrfupwn> <div class="flex h-full flex-col bg-white dark:bg-gray-900 shadow-2xl" data-astro-cid-xvrfupwn> <!-- Header --> <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700" data-astro-cid-xvrfupwn> <div class="flex items-center justify-between" data-astro-cid-xvrfupwn> <h2 id="toc-title" class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-xvrfupwn>
Tabla de Contenidos
</h2> <button id="toc-close" class="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Cerrar" data-astro-cid-xvrfupwn> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-xvrfupwn> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-xvrfupwn></path> </svg> </button> </div> </div> <!-- Lista de contenidos --> <nav class="flex-1 overflow-y-auto px-6 py-4" data-astro-cid-xvrfupwn> <ul class="space-y-1" data-astro-cid-xvrfupwn> ${headings.map((heading) => renderTemplate`<li${addAttribute(`margin-left: ${(heading.depth - 2) * 1}rem`, "style")} class="group" data-astro-cid-xvrfupwn> <a${addAttribute(`#${heading.slug}`, "href")} data-toc-link class="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" data-astro-cid-xvrfupwn> <span class="flex items-center gap-2" data-astro-cid-xvrfupwn> <span class="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors" data-astro-cid-xvrfupwn></span> ${heading.text} </span> </a> </li>`)} </ul> </nav> <!-- Footer con info adicional --> <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700" data-astro-cid-xvrfupwn> <p class="text-xs text-gray-500 dark:text-gray-400 text-center" data-astro-cid-xvrfupwn> ${headings.length} ${headings.length === 1 ? "secci\xF3n" : "secciones"} en este
                        artículo
</p> </div> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/components/TableOfContents.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const post = Astro2.props;
  const { Content, headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.excerpt }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-lg dark:prose-invert mx-auto py-12 px-4"> <div class="text-center mb-8"> <div class="mb-4"> <span class="bg-gray-600 text-white text-sm font-bold px-3 py-1 rounded-full"> ${post.data.category} </span> </div> <h1 class="text-4xl font-bold mb-4">${post.data.title}</h1> <time${addAttribute(post.data.date.toISOString(), "datetime")} class="text-gray-500 dark:text-gray-400">
Publicado el ${new Date(post.data.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} por ${post.data.author} </time> </div> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(`Imagen para ${post.data.title}`, "alt")} class="w-full h-auto rounded-lg shadow-lg mb-8">`} ${renderComponent($$result2, "Content", Content, { "components": { YouTube: $$YouTube } })} </article>  ${headings.length > 0 && renderTemplate`${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })}`}` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
