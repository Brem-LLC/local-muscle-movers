export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.4c2f0de6.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender.f1f64f4e.mjs').then(n => n.r);

export { page };
