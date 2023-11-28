export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_a3bf04ae.mjs').then(n => n.g);

export { page };
