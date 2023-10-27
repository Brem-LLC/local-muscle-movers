import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3059605d.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_9a73666e.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/keystatic-api_169f9f21.mjs');
const _page1  = () => import('./chunks/keystatic-astro-page_0854390b.mjs');
const _page2  = () => import('./chunks/generic_a7039462.mjs');
const _page3  = () => import('./chunks/index_1b9358dc.mjs');
const _page4  = () => import('./chunks/resources_fe0f2c8b.mjs');
const _page5  = () => import('./chunks/hire-us_66a69e3b.mjs');
const _page6  = () => import('./chunks/about_c524d10b.mjs');
const _page7  = () => import('./chunks/join_67efcee6.mjs');
const _page8  = () => import('./chunks/quote_418bea1b.mjs');
const _page9  = () => import('./chunks/_.._d6cbb0b6.mjs');const pageMap = new Map([["node_modules/@keystatic/astro/internal/keystatic-api.js", _page0],["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page1],["node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/resources.astro", _page4],["src/pages/hire-us.astro", _page5],["src/pages/about.astro", _page6],["src/pages/join.astro", _page7],["src/pages/api/quote.js", _page8],["src/pages/[...slug].astro", _page9]]);
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
