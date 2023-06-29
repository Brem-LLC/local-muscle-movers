import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro.4c2f0de6.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/tedmartin/sites/local-muscle-movers/marketing/keystatic.page", "client:component-export": "Keystatic" })}`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/keystatic/[...params].astro");

const $$file = "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/keystatic/[...params].astro";
const $$url = "/keystatic/[...params]";

export { $$ as default, $$file as file, prerender, $$url as url };
