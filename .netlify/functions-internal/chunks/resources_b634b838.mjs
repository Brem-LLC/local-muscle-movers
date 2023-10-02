export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender_bc5624ac.mjs').then(n => n.r);

export { page };
