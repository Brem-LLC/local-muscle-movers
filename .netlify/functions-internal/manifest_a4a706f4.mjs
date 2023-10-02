import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_4f28ec70.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"hire-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hire-us","type":"page","pattern":"^\\/hire-us\\/?$","segments":[[{"content":"hire-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hire-us.astro","pathname":"/hire-us","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"join/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/join","type":"page","pattern":"^\\/join\\/?$","segments":[[{"content":"join","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/join.astro","pathname":"/join","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"api/quote","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/quote","type":"endpoint","pattern":"^\\/api\\/quote$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/quote.js","pathname":"/api/quote","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.919f0770.css"}],"routeData":{"route":"/keystatic/[...params]","type":"page","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"src/pages/keystatic/[...params].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/keystatic/[...params]","type":"endpoint","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"src/pages/api/keystatic/[...params].ts","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/tedmartin/sites/localmovers/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/tedmartin/sites/localmovers/src/pages/hire-us.astro",{"propagation":"none","containsHead":true}],["/Users/tedmartin/sites/localmovers/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tedmartin/sites/localmovers/src/pages/join.astro",{"propagation":"none","containsHead":true}],["/Users/tedmartin/sites/localmovers/src/pages/resources.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/keystatic/[...params].astro":"chunks/pages/__f702669d.mjs","\u0000@astrojs-manifest":"manifest_a4a706f4.mjs","/Users/tedmartin/sites/localmovers/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_c12429fd.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_b5469372.mjs","\u0000@astro-page:src/pages/keystatic/[...params]@_@astro":"chunks/_.._03793ac2.mjs","\u0000@astro-page:src/pages/resources@_@astro":"chunks/resources_b634b838.mjs","\u0000@astro-page:src/pages/hire-us@_@astro":"chunks/hire-us_3202bb37.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_79b28afe.mjs","\u0000@astro-page:src/pages/join@_@astro":"chunks/join_71a41bc5.mjs","\u0000@astro-page:src/pages/api/keystatic/[...params]@_@ts":"chunks/_.._7483c2bb.mjs","\u0000@astro-page:src/pages/api/quote@_@js":"chunks/quote_bcb3bcda.mjs","/Users/tedmartin/sites/localmovers/src/content/pages/home/index.yaml?astroDataCollectionEntry=true":"chunks/index_5df9061d.mjs","/Users/tedmartin/sites/localmovers/src/content/services/heavy-items/index.yaml?astroDataCollectionEntry=true":"chunks/index_874d65e5.mjs","/Users/tedmartin/sites/localmovers/src/content/services/hoisting/index.yaml?astroDataCollectionEntry=true":"chunks/index_11f0d28e.mjs","/Users/tedmartin/sites/localmovers/src/content/services/moving/index.yaml?astroDataCollectionEntry=true":"chunks/index_18e71e64.mjs","/Users/tedmartin/sites/localmovers/src/content/services/rearrangement/index.yaml?astroDataCollectionEntry=true":"chunks/index_7647c0d5.mjs","/Users/tedmartin/sites/localmovers/src/content/testimonials/anonymous-yelp-review/index.yaml?astroDataCollectionEntry=true":"chunks/index_c93beeab.mjs","/Users/tedmartin/sites/localmovers/src/content/testimonials/lee-van-dyke/index.yaml?astroDataCollectionEntry=true":"chunks/index_cac447d2.mjs","/Users/tedmartin/sites/localmovers/src/content/testimonials/melanie-dorn/index.yaml?astroDataCollectionEntry=true":"chunks/index_e525cf8b.mjs","@astrojs/react/client.js":"_astro/client.85cfb84c.js","@components/quoteForm.jsx":"_astro/quoteForm.eced9e24.js","/Users/tedmartin/sites/localmovers/keystatic.page":"_astro/keystatic.c9309af8.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/checklist.2d6a321e.jpg","/_astro/burlington.0a59e5bf.jpeg","/_astro/portland.20e75653.jpeg","/_astro/about.a353adf8.css","/_astro/about.919f0770.css","/_astro/about.da296eb5.css","/_astro/index.9f704329.css","/_astro/client.85cfb84c.js","/_astro/index.9fca9056.js","/_astro/index.c6dae603.js","/_astro/jsx-runtime.f924815b.js","/_astro/keystatic.c9309af8.js","/_astro/quoteForm.eced9e24.js","/images/logo.png","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/browserconfig.xml","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/mstile-150x150.png","/favicon/safari-pinned-tab.svg","/favicon/site.webmanifest","/images/home/home/componentBlocks/0/value/bannerImage.jpeg","/index.html","/resources/index.html","/hire-us/index.html","/about/index.html","/join/index.html","/api/quote"]});

export { manifest };
