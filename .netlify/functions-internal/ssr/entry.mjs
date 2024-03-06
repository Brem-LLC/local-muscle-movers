import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_yYU4EZx8.mjs';

const _page0  = () => import('./chunks/keystatic-api_BPFDe1vj.mjs');
const _page1  = () => import('./chunks/keystatic-astro-page_nR54TCPx.mjs');
const _page2  = () => import('./chunks/generic_sLA-tx9b.mjs');
const _page3  = () => import('./chunks/index_HE3ijo_W.mjs');
const _page4  = () => import('./chunks/quote-thank-you_dvOMpGta.mjs');
const _page5  = () => import('./chunks/join-thank-you_ZSkHsIo0.mjs');
const _page6  = () => import('./chunks/quote_n1oGVVEL.mjs');
const _page7  = () => import('./chunks/join__sNfKvzh.mjs');
const _page8  = () => import('./chunks/_.._pTwUQpSY.mjs');const pageMap = new Map([["node_modules/@keystatic/astro/internal/keystatic-api.js", _page0],["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page1],["node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/quote-thank-you.astro", _page4],["src/pages/join-thank-you.astro", _page5],["src/pages/api/quote.js", _page6],["src/pages/api/join.js", _page7],["src/pages/[...slug].astro", _page8]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
