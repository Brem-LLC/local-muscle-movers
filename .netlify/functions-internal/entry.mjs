import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_a4a706f4.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_4f28ec70.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_c12429fd.mjs');
const _page1  = () => import('./chunks/index_b5469372.mjs');
const _page2  = () => import('./chunks/_.._03793ac2.mjs');
const _page3  = () => import('./chunks/resources_b634b838.mjs');
const _page4  = () => import('./chunks/hire-us_3202bb37.mjs');
const _page5  = () => import('./chunks/about_79b28afe.mjs');
const _page6  = () => import('./chunks/join_71a41bc5.mjs');
const _page7  = () => import('./chunks/_.._7483c2bb.mjs');
const _page8  = () => import('./chunks/quote_bcb3bcda.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/keystatic/[...params].astro", _page2],["src/pages/resources.astro", _page3],["src/pages/hire-us.astro", _page4],["src/pages/about.astro", _page5],["src/pages/join.astro", _page6],["src/pages/api/keystatic/[...params].ts", _page7],["src/pages/api/quote.js", _page8]]);
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
