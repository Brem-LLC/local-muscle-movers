/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_4f28ec70.mjs';
import 'clsx';
import 'html-escaper';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/tedmartin/sites/localmovers/keystatic.page", "client:component-export": "Keystatic" })}`;
}, "/Users/tedmartin/sites/localmovers/src/pages/keystatic/[...params].astro", void 0);

const $$file = "/Users/tedmartin/sites/localmovers/src/pages/keystatic/[...params].astro";
const $$url = "/keystatic/[...params]";

export { $$ as default, $$file as file, prerender, $$url as url };
