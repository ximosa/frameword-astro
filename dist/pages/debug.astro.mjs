/* empty css                                  */
import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from '../chunks/astro/server_DHUdpo0D.mjs';
import 'piccolore';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DL7yatQU.mjs';
export { renderers } from '../renderers.mjs';

const $$Debug = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  return renderTemplate`${maybeRenderHead()}<pre>${JSON.stringify(posts, null, 2)}</pre>`;
}, "C:/Users/Joaqu\xEDn/Documents/frameword-astro/src/pages/debug.astro", void 0);

const $$file = "C:/Users/Joaquín/Documents/frameword-astro/src/pages/debug.astro";
const $$url = "/debug";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Debug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
