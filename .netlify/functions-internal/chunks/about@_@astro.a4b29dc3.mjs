export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.f66c1913.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender.feb8f133.mjs').then(n => n.a);

export { page };
