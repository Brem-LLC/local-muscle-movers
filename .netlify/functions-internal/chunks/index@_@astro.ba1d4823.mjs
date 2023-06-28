export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.ccd62b36.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender.cedbfab8.mjs').then(n => n.i);

export { page };
