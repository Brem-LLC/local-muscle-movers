import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro.f66c1913.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/tedmartin/sites/localmusclemovers/marketing/keystatic.page", "client:component-export": "Keystatic" })}`;
}, "/Users/tedmartin/sites/localmusclemovers/marketing/src/pages/keystatic/[...params].astro");

const $$file = "/Users/tedmartin/sites/localmusclemovers/marketing/src/pages/keystatic/[...params].astro";
const $$url = "/keystatic/[...params]";

export { $$ as default, $$file as file, prerender, $$url as url };
