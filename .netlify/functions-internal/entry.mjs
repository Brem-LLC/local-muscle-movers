import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3aef7449.mjs';

const _page0  = () => import('./chunks/keystatic-api_02c07db7.mjs');
const _page1  = () => import('./chunks/keystatic-astro-page_a5cbd398.mjs');
const _page2  = () => import('./chunks/generic_0463923c.mjs');
const _page3  = () => import('./chunks/index_7ca651df.mjs');
const _page4  = () => import('./chunks/quote_bd245c82.mjs');
const _page5  = () => import('./chunks/join_a2614afd.mjs');
const _page6  = () => import('./chunks/_.._28221a01.mjs');const pageMap = new Map([["node_modules/@keystatic/astro/internal/keystatic-api.js", _page0],["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page1],["node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/api/quote.js", _page4],["src/pages/api/join.js", _page5],["src/pages/[...slug].astro", _page6]]);
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
