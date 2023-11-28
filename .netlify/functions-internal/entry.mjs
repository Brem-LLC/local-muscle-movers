import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6cba2614.mjs';

const _page0  = () => import('./chunks/keystatic-api_f1bedcfb.mjs');
const _page1  = () => import('./chunks/keystatic-astro-page_0fc77bec.mjs');
const _page2  = () => import('./chunks/generic_75c58638.mjs');
const _page3  = () => import('./chunks/index_32fc6b38.mjs');
const _page4  = () => import('./chunks/resources_70a84ff1.mjs');
const _page5  = () => import('./chunks/thank-you_634e69f9.mjs');
const _page6  = () => import('./chunks/hire-us_7517b953.mjs');
const _page7  = () => import('./chunks/about_3efdcd0f.mjs');
const _page8  = () => import('./chunks/join_8f23a8bd.mjs');
const _page9  = () => import('./chunks/quote_270a605d.mjs');const pageMap = new Map([["node_modules/@keystatic/astro/internal/keystatic-api.js", _page0],["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page1],["node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/resources.astro", _page4],["src/pages/thank-you.astro", _page5],["src/pages/hire-us.astro", _page6],["src/pages/about.astro", _page7],["src/pages/join.astro", _page8],["src/pages/api/quote.js", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
