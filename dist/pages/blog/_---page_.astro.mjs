/* empty css                                     */
import { c as createComponent, d as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, e as addAttribute } from '../../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DwXBnoml.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DDPl3KK2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return paginate(sortedPosts, { pageSize: 9 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Blog - P\xE1gina ${page.currentPage} | Mi Sitio Web`, "description": "Lee las \xFAltimas noticias y art\xEDculos de nuestro blog." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
Nuestro Blog
</h1> ${page.data.length === 0 ? renderTemplate`<div class="text-center"> <p class="text-gray-600 dark:text-gray-400 mb-4">
No se encontraron posts.
</p> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${page.data.map((post) => renderTemplate`<article class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="block flex-grow"> <div class="relative"> <img${addAttribute(post.data.image || "/blog-placeholder-default.jpg", "src")}${addAttribute(`Imagen para ${post.data.title}`, "alt")} class="w-full h-48 object-cover"> <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded"> ${post.data.category} </span> </div> <div class="p-6"> <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white"> ${post.data.title} </h2> <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"> ${post.data.description} </p> <div class="flex items-center justify-between mt-auto"> <time${addAttribute(post.data.date.toISOString(), "datetime")} class="text-sm text-gray-500 dark:text-gray-400"> ${new Date(post.data.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <span class="text-sm text-gray-500 dark:text-gray-400">
Por ${post.data.author} </span> </div> </div> </a> </article>`)} </div>  ${page.lastPage > 1 && renderTemplate`<nav class="mt-12 flex justify-center items-center gap-2" aria-label="Paginación del blog">  ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Anterior
</a>` : renderTemplate`<span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg cursor-not-allowed"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Anterior
</span>`}  <div class="hidden sm:flex gap-1"> ${Array.from({ length: page.lastPage }, (_, i) => i + 1).map((num) => num === page.currentPage ? renderTemplate`<span class="inline-flex items-center justify-center w-10 h-10 text-sm font-semibold text-white bg-blue-600 rounded-lg"> ${num} </span>` : renderTemplate`<a${addAttribute(num === 1 ? "/blog" : `/blog/${num}`, "href")} class="inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"> ${num} </a>`)} </div>  <span class="sm:hidden px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
Página ${page.currentPage} de ${page.lastPage} </span>  ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
Siguiente
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>` : renderTemplate`<span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg cursor-not-allowed">
Siguiente
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span>`} </nav>`}` })}`} </div> </section> ` })}`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/blog/[...page].astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
