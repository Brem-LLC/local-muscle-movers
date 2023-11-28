export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_5ad997cd.mjs').then(n => n.q);

export { page };
