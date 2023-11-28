export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_a4a03b6b.mjs').then(n => n.i);

export { page };
