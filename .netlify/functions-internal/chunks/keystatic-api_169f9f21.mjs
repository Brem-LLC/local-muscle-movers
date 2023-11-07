export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/keystatic-api_c51bc1c0.mjs').then(n => n.a);

export { page };
