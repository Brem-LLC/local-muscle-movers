import { c as createAstro, a as createComponent, r as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead, b as renderComponent, F as Fragment, u as unescapeHTML, g as createCollectionToGlobResultMap, h as createGetCollection } from './astro.ccd62b36.mjs';
/* empty css                          */import { createReader } from '@keystatic/core/reader';
import { _ as _hoc_function } from './pages/_...params_.ts.e4ff8689.mjs';
/* empty css                          */
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Base;
  const { title } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="description" content="Astro description">\n		<meta name="viewport" content="width=device-width">\n		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">\n\n		<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"><\/script>\n		<!-- Favicons -->\n		<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">\n		<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">\n		<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">\n		<link rel="manifest" href="favicon/site.webmanifest">\n		<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">\n		<meta name="msapplication-TileColor" content="#da532c">\n		<meta name="theme-color" content="#ffffff">\n		<meta name="generator"', ">\n		<title>", "</title>\n	", '</head>\n	<body class="overflow-y-scroll">\n		', '\n\n		<script src="./node_modules/flowbite/dist/flowbite.min.js"><\/script>\n	</body>\n</html>'])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/layouts/Base.astro");

const $$Astro$d = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Hero;
  const { heroData } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex items-end bg-primary/60 bg-cover bg-fixed bg-center bg-no-repeat px-7 pt-44 bg-blend-color-burn lg:px-10 lg:pt-40"${addAttribute(`background-image: url(${heroData.bannerImage})`, "style")}>
	<div class="z-1 relative mx-auto w-full max-w-screen-xl py-8 text-white lg:pb-20 lg:pt-16 xl:px-0">
		<div class="mb-6 max-w-screen-md lg:mb-0">
			<h1 class="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">${heroData.heading}</h1>
			<p class="mb-6 font-light text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
				${heroData.subheading}
			</p>
			<a${addAttribute(heroData.buttonLink, "href")} class="focus:ring-primary-900 dark:bg-primary-600 inline-flex items-center rounded-lg bg-primary px-5 py-3 text-center font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 dark:hover:bg-primary dark:focus:ring-primary">${heroData.buttonText}</a>
		</div>
	</div>
</section>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/Hero.astro");

const $$Astro$c = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: klass } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(klass, "class")} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 320 254"><path d="M152.4 11c-6.7 2.4-10.2 4.7-11.8 7.9-2 4.1-3.9 13.6-3.4 17 .2 1.7.1 3.1-.4 3.1s-.6.4-.3 1c.3.5.1 1-.6 1-2.2 0-.2 8.1 3.4 13.4 3.7 5.5 5.2 12.3 4.8 22.6-.1 4.8-.5 5.8-3.3 8.2-1.7 1.5-5.6 3.5-8.7 4.4-3.1.9-6.2 1.8-7 2-.8.3-1.1.7-.7 1.1.3.3 3 0 6-.7 5-1.2 5.7-1.1 8.3.6 1.5 1 4 2.4 5.5 3.1 3.2 1.4 3.7 3.9 4.3 21.8.2 6.6.7 15.5 1.1 19.8.6 6.8.5 7.9-1.1 9.1-1.6 1.2-1.6 1.3-.1 1.9.9.4 1.6 1.6 1.6 2.7s.3 2 .8 2c.4 0 1.8.3 3.1.7 1.8.5 2.2.3 1.6-.7-.4-.7-.9-3.1-1.1-5.4-.2-2.3-.8-6.8-1.3-10.1-1-6.3-2.5-27.6-2.3-33.3 0-1.8.6-4 1.3-4.8 1.4-1.8 5.9-1.9 5.9-.1 0 1.1 1.4 1.2 6.8.5 3.7-.5 8.6-1.1 11-1.3 2.7-.2 5.4-1.3 7.4-3 1.7-1.4 4.4-3.3 6.1-4.2 2.6-1.3 3.2-1.3 4.1-.1.9 1.2 2.8 1.2 11.6.3l10.5-1.1-6-.6c-3.3-.4-7.9-.4-10.4-.1-3.2.5-4.7.2-5.5-.8-.6-.8-2.6-2.5-4.5-3.8-1.8-1.3-4-3.9-4.7-5.7-2.1-4.9-1.7-15 .6-20.3 1.1-2.4 2.1-6.1 2.2-8.2.1-2.1.4-3.6.8-3.4 1.7 1.1 3.5-1.8 3.6-6 .1-2.5-.1-4.5-.5-4.5-.3 0-.6-3-.7-6.6 0-4.5-.5-6.8-1.5-7.5-.8-.5-1-.9-.5-.9.6 0 .1-.7-1-1.6-1-.8-1.2-1.3-.4-.9 3.8 1.6-6.1-6-10.5-8.1-6.2-3-16.5-3.2-24.1-.4zm16.3-.4c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm9.6 13.9c1 2.7 2.3 5.8 2.8 6.7 1.9 3.7.2 5.2-2.7 2.3-2.7-2.6-7.8-2.9-12.5-.6-4.3 2.1-4.4 2.1-7 .2-2.3-1.7-3.5-1.9-8.5-1.1-3.3.4-6 .7-6.2.5-.1-.1.1-1.2.6-2.5.8-2.2 9.4-6 13.7-6 1.1 0 4.1-1.1 6.5-2.4 2.6-1.3 6-2.3 7.9-2.2 3.2.1 3.6.5 5.4 5.1zm-15.8 13.1c2.1 2.2 2.7 2.5 4 1.4 1.2-1 2.1-1 4.1-.1 1.5.6 3.4 1 4.3.7 5.5-1.5 7.1-1.6 7.1-.4 0 .6.7 1.9 1.6 2.9 1.4 1.6 1.4 2.3-.1 8.6-2.3 9.4-4.5 15.1-6.1 15.7-.7.3-2.8.1-4.6-.5-1.8-.5-5-.9-7-.9-4.7 0-5.1 2.3-.9 4.4 1.8 1 3.1 2.6 3.4 4.3.8 4.4-.5 21.7-1.7 22.6-2 1.3-15.9.5-18.6-1.1-6.3-3.9-6.5-6.9-1.3-13.8 2.4-3.1 3.6-5.7 3.4-7.2-.3-2.7 1.2-4.8 5.4-7.4l3-1.9-4.3.6c-5.1.8-6.7-.6-11.3-10.5-4.3-9.3-4.3-10-.8-13.9 2.5-2.7 3.5-3.2 5.7-2.6 4.8 1.1 8.6.6 10.2-1.5 1.9-2.4 1.7-2.5 4.5.6zm17.6 44.1c.5 1.5 1.2 4.5 1.5 6.7.6 4 .5 4.2-2.8 5.4-4.6 1.6-5.8 1.5-5.8-.6 0-2.6 4.2-14.2 5.2-14.2.5 0 1.3 1.2 1.9 2.7z"></path><path d="M160.5 44.4c-1.1.8-1.6 1.9-1.2 3 .4 1-.2 2.1-1.8 3.2-3 2-3.2 3.4-.5 3.4 1.1 0 2.3.7 2.6 1.5.9 2.2 6.1 1.8 8.6-.7 2-2 2-2.2.3-3.4-1-.7-2.3-1.5-2.9-1.7-.8-.3-.7-1 .1-2.5 1.1-1.8 1-2.3-.6-3.2-2.5-1.3-2.4-1.3-4.6.4zM157.1 82.7c-.1 1.2.4 2.5.9 2.8 1.2.7 1.2-.2 0-3-.8-1.9-.9-1.9-.9.2zM221.4 48c-10 1.4-17.4 3.9-17.4 5.9 0 .9-.9 4.2-2 7.4-3.8 10.7-2.3 17.2 4.8 21.2 4 2.2 5.4 2.5 9.7 1.9 6.3-.8 8.1-1.8 9.9-5.2 1.3-2.6 3.1-10 2.8-11.4-.3-1.1 4.6-2.1 6.5-1.3 1 .3 1.9.6 2.1.5.2-.1 1.2 1 2.3 2.4 1.1 1.5 2.6 2.6 3.2 2.7 1.2 0 11 10.9 12.9 14.2 1.1 2.1 1.8 1.9-15.7 4.7-7.6 1.2-14.2 2.2-14.5 2.3-.3 0-2.2-.5-4.3-1.2-5.3-1.8-7-.7-2.2 1.3 2.9 1.3 5.6 1.6 9.7 1.3l5.6-.5.6 3.2c.7 4-.6 12.9-1.9 12.9-.5 0-1.5-.9-2-2.1l-1.1-2-.9 2.1c-.6 1.1-2.8 2.7-5 3.5-3.6 1.3-4.3 2.2-7.2 8.6-1.7 3.9-3.7 8.9-4.4 11.2-1.4 4.5-4.5 6.9-11.7 9.1-4.9 1.6-4.7 3.3.5 3.3 3.3 0 3.5.2 2.9 2.5-.6 2.5 0 3 3.2 2.6 1.1-.2 1.1.2.2 1.9-.9 1.6-.8 2.5.1 3.6 1.7 2.1 1.9 8.6.3 10.9-.8 1.1-1.4 4.5-1.4 7.9 0 4.8-.4 6.2-2.2 7.7-1.1 1.1-2.5 1.9-2.9 1.9-.4 0-1.4.3-2.3.6-1.1.4-1.6 0-1.6-1.4 0-2.2-3.3-3.3-7.5-2.4-3.8.7-3 2.9 2 5.1 2.5 1.1 4.5 2.2 4.5 2.5 0 .3-1.9 1.6-4.2 3l-4.3 2.6h3.3c4.6 0 4.3 2.7-.5 3.6-2.1.4-5.1 1.2-6.8 1.8-3.9 1.4-38.3 1.3-49.4-.2-4.6-.7-9.4-1.8-10.6-2.6-2.7-1.8-3.7-6-2.5-11 1-4.3-.1-17.1-1.6-18.6-.5-.5-.9 3.1-.9 9.8 0 9.3-.3 11.3-2.3 15.1-1.7 3.2-2.4 6.5-2.7 12-.2 4.2-.4 7.6-.4 7.6-.1 0-.3 5.8-.5 13-.2 9.1-1 15.4-2.5 21-2.5 9.5-2.5 9.5-.8 9.5.9 0 2-2.9 3.1-8.8 4.3-22.3 4-21.8 11.5-20.8 3.9.5 5 .3 5.5-.9.8-2.2 2.5-1.8 3.8 1 .9 2 1.8 2.5 4.9 2.5 5 0 6.9-.8 6.9-3.1 0-1 .7-1.9 1.5-1.9s1.5.7 1.5 1.5 1.1 2.2 2.5 3.1l2.6 1.7-.7 12.8c-.7 12.5-.6 12.9 1.3 12.9 1.8 0 2.1-.8 2.5-5.7.3-3.1.1-7.3-.3-9.2-.4-1.9-.4-4.2.2-5.2.5-1 .9-2.7.9-3.9 0-2.4 2.6-3.8 4.3-2.1 1.1 1.1 1.2 11.3.1 20.8-.4 3.6-.3 5.3.5 5.3.7 0 1.1-2.1 1.1-5.3 0-6.8 2.8-18.9 4.8-20.5.9-.7 4.5-1.2 8.6-1.2 7.5 0 21.8-3.9 27-7.4 1.5-1 2.9-1.6 3-1.4 2.4 4 5.8 19.5 6.4 29 .3 5.3.7 6.8 1.9 6.8 2.3 0 .9-19.2-2.2-29.2-2-6.3-2.3-9-1.9-15.5.8-12.1.5-18.9-1.1-23.5-2.1-6.1-1-15.2 3.3-26.8 1.9-5.2 3.4-10.6 3.3-12 0-1.8.2-2.1.8-1.1.6.9.9-.4.9-3.9.1-5.3 1.8-8.2 5.2-8.7 3.7-.6 26.9-9 26.3-9.6-.3-.4-.2-.7.3-.8 3.9-.3 6.7-1 11.4-3.2 3-1.4 8.1-3.3 11.2-4.3 3.1-.9 5.5-2.1 5.3-2.5-.3-.4.2-1 1.1-1.3.8-.3 1.3-.2 1 .3-.4.5.3.7 1.4.4 1.1-.3 1.7-1 1.3-1.6-.4-.6 0-.8 1.1-.4s1.5.3 1-.4c-.4-.8.1-.9 1.6-.4 1.7.5 2.1.4 1.5-.6-.6-.9-.3-1.1.9-.6 1.1.5 1.5.3 1-.5s-.2-.9.9-.5c1 .3 1.7.2 1.7-.4 0-.6.5-.7 1-.4.6.3 1 .1 1-.6s.3-1 .6-.6c.4.3 1.8 0 3.3-.7 2.9-1.6 6.9-5.6 5.5-5.6-.5 0-.3-.4.5-.9 3.8-2.5-3.3-13.4-14.9-22.6-6-4.8-27.3-17.2-43.2-25.2-5.4-2.7-15.9-3.7-25.4-2.3zm18.5 2.7c1 1 2.1 2.6 2.4 3.5.4 1 1.4 1.8 2.4 1.8.9 0 4.4.9 7.7 2.1 18.2 6.3 36.3 17.8 45.1 28.6 4.7 5.8 5.1 7.2 3.4 12-.9 2.6-2.1 3.4-8.7 5.8-25.4 9-33.5 11.5-36.7 11.5-1.9 0-3.5.4-3.5 1 0 .5-.7 1-1.5 1-.9 0-2.6.9-3.8 2-2.7 2.6-5.2 2.2-5.1-.8 0-1.3-.5-2.2-1.4-2.2-2.9 0-.4-2.5 4.6-4.5 6.7-2.7 6.9-3.1 1.6-2.6-2.4.1-5.6 0-6.9-.3-2.2-.6-2.5-1.2-2.4-4.9.3-8.4 1-9.9 5.9-11.4 2.5-.7 8.7-1.6 13.8-2 7.5-.5 9.5-.3 11 .9 2.5 2.3 7.8 4.8 9.9 4.8 1 0-.5-1.4-3.4-3-5.5-3.1-12.5-8.9-32.4-26.5-10.8-9.5-12.4-10.7-12.7-8.7-.4 2.6-3.7 3-6.3.6-.9-.8-4.5-2.1-7.8-2.7-4.4-.8-6.1-1.6-6.1-2.8 0-1.1 1-1.6 3.3-1.6 1.7 0 7.5-.7 12.7-1.5 12.5-2.1 12.8-2.1 14.9-.1zm-29.5 146c-1.1 4.8-3.9 8.8-6.3 9.1-2.3.4-2.4.2-1.8-4.4.5-5.2 2.5-7.4 6.4-7.4 2 0 2.3.4 1.7 2.7zm-76.4 2.9c6.9.8 12.9 1.9 13.5 2.5.5.5 1.8.9 3 .9 6.1.1 6.9 6 1.4 10.9-1.6 1.4-2.9 3.6-2.9 4.8 0 3.5-1.5 2.7-4.1-2.2-2.6-5-3.1-5.2-5-2.9-1.3 1.6-6.2 4.4-7.7 4.4-.6 0-1.3-1.6-1.6-3.5-.6-3.2-1-3.5-4.4-3.5-5 0-5.7-.6-8.1-6.8-2.7-6.9-2.7-7.6.7-6.8 1.5.3 8.3 1.3 15.2 2.2zm65.5.3c.3.6.2 2.8-.1 5.1-.5 3.3-1.3 4.3-3.8 5.4-3.5 1.6-11.9 2.7-21.9 3l-6.8.1-2-5.5c-1-3-1.9-5.4-1.9-5.5 0 0 2.4.2 5.3.4 12 1.1 16.9.6 18.6-1.7 1.3-1.7 2.7-2.1 6.8-2.2 2.8 0 5.4.4 5.8.9zm-37.4 5.5c.9 3.4-.5 7.6-2.6 7.6-1.1 0-1.5-1.1-1.5-3.9 0-7.2 2.6-9.5 4.1-3.7zm-43.6 7.7c1.1 1.7-.5 8.1-1.8 7.6-1.3-.4-2.2-5.1-1.3-7.3.6-1.7 2.2-1.8 3.1-.3z"></path><path d="M256.8 107.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM95 48.9c0 .5 3.2 1.3 7.2 1.9 11.8 1.8 9.2.5-4.9-2.4-1.3-.2-2.3 0-2.3.5zM83 53.5c-3 1.3-6.1 2.8-6.7 3.4-.7.7-1.3.9-1.3.6 0-1.8-36.9 19-41.8 23.4-1.2 1.1-2.5 2-2.8 2-1.9-.3-11.8 9.9-13.9 14.4l-2.5 5.2 4.2-5c11.6-13.6 25-23.4 43.7-32.2 6.4-3 13.3-6.3 15.4-7.4 2.2-1 4.9-1.9 6.1-1.9 1.2 0 3.3-1.1 4.6-2.5 2.8-3 2.2-3-5 0zM111 52.4c0 .9 3 1.4 3.5.6.4-.6-.3-1-1.4-1-1.2 0-2.1.2-2.1.4zM121.4 54.8c.9 1.5-2.6 3.2-6.9 3.2-1.9 0-5.8 1.2-8.6 2.6-5.6 2.8-8.4 2.6-7.6-.6.3-1.1.1-2-.3-2-2.1 0-4 1.4-4 2.9 0 2.5-4.5 6.8-7.9 7.6-2.2.5-5.9 3.9-13.7 12.6-10.3 11.6-20.6 20.9-26.9 24.2-2.6 1.4-2.7 1.6-.9 1.7 1.2 0 5.6-2.7 9.9-6 7.6-5.9 7.9-6 14.4-6.2 4.2-.1 5.2-.3 2.8-.5-2.1-.2-4.1-1.1-4.4-1.9-.3-.7-1-1.1-1.7-.7C63 93.3 78 76.3 80.8 74.5c11.4-7.3 12.8-7.9 17.5-7.6 1.2.1 1.7 1 1.7 3.5 0 3.4 3.9 10.3 6.9 12.1 2.7 1.7 10.4 2.2 12.8 1 2.6-1.4 5.3-4.6 7.6-9.2 1.8-3.3 2.1-13.3.5-13.3-.5 0-.7-.4-.4-.9.3-.4-.5-1.7-1.7-2.8-2.9-2.6-5.2-4-4.3-2.5zM115.3 91.2c3.5.5 6.4.5 7.3 0 1.2-.6-.7-.9-5.7-1h-7.4l5.8 1z"></path><path d="M98.6 93.7c-2.3 1.2-5 1.5-12.7 1.1-5.4-.3-9.6-.1-9.3.4.3.4 1.8.8 3.5.8H83v6.2c0 3.5-.3 8-.7 10.2l-.6 3.9-12.5-.5c-7.6-.3-11.8-.2-10.8.4.9.5 1.6 1.5 1.6 2.3 0 2-12.8 2.9-22.1 1.6-9.3-1.3-16-3.4-21.2-6.9-3.5-2.3-3.8-2.9-3.5-6.3.2-2.1 0-3.5-.4-3.3-.5.3-.8 2.5-.8 4.9 0 4.4.1 4.5 5.8 7.4 10.3 5.2 18.2 6.9 35.7 7.5 8.8.3 17.8 1 20 1.6 2.2.5 7.9 1.4 12.7 1.9 10.5 1.2 15 3.3 21.2 10.2 2.5 2.8 4.6 4.6 4.6 3.9 0-.8.9-1 2.5-.6 1.4.4 2.5.4 2.5.1 0-1.9-5.6-12-9.2-16.4-4.9-6.1-11.6-10.5-10.2-6.6.4.9-.3 1.6-2 2.1-1.4.3-2.6 1.2-2.6 1.8 0 .7-1.3 1.3-3 1.3h-3.1l.3-13.1.3-13.1 5.4-.3c3.5-.2 6.3-1 7.9-2.3 3-2.3 1.8-2.4-2.2-.2zM86 100c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1z"></path><path d="M49.8 114.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM159.2 120.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zM159.2 128.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zM124 144c1.7 3.1 4.6 4.2 13.3 4.8 6.6.4 7.9.3 7.5-.9-.3-.9-2.7-1.6-7.4-1.9-3.8-.4-8.4-1.4-10.3-2.3-4.3-2.1-4.4-2.1-3.1.3zM182.5 142.7c-3.5.9-3.8 2.1-.6 2.8 3.3.7 10.1-1 10.1-2.6 0-.9-5.9-1.1-9.5-.2zM197.8 157.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM117.1 159.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zM188.5 170c-1.3.6-1.5.9-.5.9.8 0 2.2-.4 3-.9 1.8-1.2.2-1.2-2.5 0zM192 174.4c0 .2.7.6 1.5 1 .8.3 1.5.1 1.5-.4 0-.6-.7-1-1.5-1s-1.5.2-1.5.4z"></path></svg>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/logo.astro");

const portland = "/_astro/portland.20e75653.jpeg";

const burlington = "/_astro/burlington.0a59e5bf.jpeg";

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$b = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  const reader = createReader(process.cwd(), _hoc_function);
  const generalInformation = await reader.singletons.general.read();
  const menu = await reader.singletons.menu.read();
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav class="navigation fixed left-0 right-0 z-50 w-full border-gray-200 bg-primary transition-all duration-200 aria-[scrolled]:drop-shadow-lg">\n	<div class="bg-white py-2 text-center text-primary sm:h-12 sm:py-0">\n		<div class="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between gap-2 px-10 sm:flex-row sm:gap-8">\n			<div class="flex items-center gap-1.5">\n				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">\n					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>\n				</svg>\n				<span>Moving 7 days a week</span>\n			</div>\n			<button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="flex items-center gap-1.5">\n				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">\n					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>\n				</svg>\n				<span>Call Us: ', '</span>\n			</button>\n		</div>\n	</div>\n	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 transition-all duration-200 group-aria-[scrolled]:py-4 lg:group-aria-[scrolled]:py-2">\n		<a href="/" class="relative z-0 flex items-center lg:pl-32">\n			', '\n			<h3 class="lg:group-aria-lg:[scrolled]:opacity-0 origin-left text-lg font-bold text-white transition-all group-aria-[scrolled]:text-black md:text-2xl lg:group-aria-[scrolled]:invisible lg:group-aria-[scrolled]:scale-x-0">\n				Local Muscle Movers\n			</h3>\n		</a>\n		<div class="flex items-center lg:order-2 lg:hidden">\n			<button data-collapse-toggle="mobile-menu-2" type="button" class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 hover:text-black focus:text-black focus:outline-none focus:ring-2 group-aria-[scrolled]:text-black lg:hidden" aria-controls="mobile-menu-2" aria-expanded="false">\n				<span class="sr-only">Open main menu</span>\n				<svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>\n			</button>\n		</div>\n		<div class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">\n			<ul class="mt-4 flex flex-col items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:items-center lg:gap-0 lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-3">\n				', '\n			</ul>\n		</div>\n	</div>\n</nav>\n\n<!-- Popup -->\n<div id="popup-modal" tabindex="-1" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full overflow-y-scroll overflow-x-auto p-4 md:inset-0">\n	<div class="relative max-h-full w-full max-w-md">\n		<div class="relative rounded-lg bg-white shadow dark:bg-gray-700">\n			<button type="button" class="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">\n				<svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>\n				<span class="sr-only">Close modal</span>\n			</button>\n			<div class="grid grid-cols-2 gap-5 p-6 pt-14 text-center">\n				<div>\n					<img', ' alt="Portland" class="mb-2 aspect-video w-full rounded-md">\n					<h4 class="mb-2 text-base font-bold">Portland, ME</h4>\n					<a href="tel:207-370-9090" class="flex items-center justify-center gap-2 hover:underline">\n						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">\n							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>\n						</svg>\n						', "\n					</a>\n				</div>\n\n				<div>\n					<img", ' alt="burlington" class="mb-2 aspect-video w-full rounded-md">\n					<h4 class="mb-2 text-base font-bold">Burlington, VT</h4>\n					<a href="tel:207-370-9090" class="flex items-center justify-center gap-2 hover:underline">\n						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">\n							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>\n						</svg>\n						', "\n					</a>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<script>\nconst navigation = document.querySelector('.navigation')\nwindow.addEventListener('scroll', () => {\n	let fromTop = window.scrollY\n	if (fromTop >= 50) {\n			navigation.setAttribute('aria-scrolled', 'true')\n		} else {\n			navigation.removeAttribute('aria-scrolled')\n		}\n	})\n<\/script>"])), maybeRenderHead($$result), generalInformation?.hours, renderComponent($$result, "Logo", $$Logo, { "class": "absolute -top-8 left-0 hidden h-28 w-32 rounded-b fill-white transition-all duration-200 group-aria-[scrolled]:h-36 group-aria-[scrolled]:bg-white group-aria-[scrolled]:fill-black lg:block" }), menu?.menuItems.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${item.button != true && renderTemplate`<li>
									<a${addAttribute(item.link, "href")} class="block rounded py-2 pl-3 pr-4 text-white aria-[current]:bg-primary aria-[current]:text-white lg:bg-transparent lg:text-primary" aria-current="page">
										${item.name}
									</a>
								</li>`}${item.button == true && renderTemplate`<li>
									<a${addAttribute(item.link, "href")} class="focus:ring-primary-900 dark:bg-primary-600 block rounded-lg bg-primary px-5 py-3 text-center font-medium text-white lg:bg-white lg:text-primary">
										${item.name}
									</a>
								</li>`}` })}`), addAttribute(portland, "src"), generalInformation?.phone, addAttribute(burlington, "src"), generalInformation?.phoneSecondary);
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/Header.astro");

const $$Astro$a = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  const reader = createReader(process.cwd(), _hoc_function);
  const generalInformation = await reader.singletons.general.read();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="rounded-lg bg-white py-4 sm:py-6 xl:py-8">
	<a tip-data="Mon-Fri, 9AM to 4PM" href="tel:207-370-9090" class="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white before:pointer-events-none before:absolute before:right-full before:top-1/2 before:mr-2 before:inline-block before:w-max before:-translate-y-1/2 before:rounded before:border before:border-primary before:bg-primary before:p-2 before:text-sm before:text-white before:opacity-0 before:content-[attr(tip-data)] hover:before:pointer-events-auto hover:before:opacity-100">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
		</svg>
	</a>

	<div class="mx-auto w-full max-w-7xl justify-center px-7 sm:flex sm:items-center sm:justify-between lg:px-10">
		<p class="mb-4 text-center text-sm text-gray-500 sm:mb-0">
			${generalInformation?.title}
		</p>
		<div class="flex items-center justify-center divide-x text-sm text-gray-500">
			<p class="px-3">
				<strong class="text-gray-800">USDOT</strong> # ${generalInformation?.usdot}
			</p>
			<p class="px-3">Copryright &copy; 2023</p>
		</div>
	</div>
</footer>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/Footer.astro");

const $$Astro$9 = createAstro();
const $$CTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CTA;
  return renderTemplate`${maybeRenderHead($$result)}<div class="bg-primary text-white">
	<div class="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
		<div>
			<h2 class="mb-3 text-3xl font-bold tracking-tight sm:text-6xl">
				Start your move <br>with us
			</h2>
			<p>The first step is filling out our estimate form</p>
		</div>
		<div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
			<a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get Free Estimate</a>
		</div>
	</div>
</div>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/CTA.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Reviews;
  const { testimonials } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="bg-white dark:bg-gray-900">\n	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">\n		<div class="swiper reviews-slider mx-auto max-w-screen-md">\n			<div class="swiper-wrapper">\n				', `
			</div>

			<div class="mt-12 flex items-center justify-center gap-8">
				<button class="reviews-button-prev">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path>
					</svg>
				</button>
				<button class="reviews-button-next">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>

<script>
	const reviewsslider = new Swiper('.reviews-slider', {
		loop: true,
		slidesPerView: 1,
		autoHeight: true,
		effect: 'coverflow',
		coverflowEffect: {
			slideShadows: false
		},

		// Navigation arrows
		navigation: {
			nextEl: '.reviews-button-next',
			prevEl: '.reviews-button-prev'
		}
	})
<\/script>`])), maybeRenderHead($$result), testimonials.map((testimonial) => renderTemplate`<div class="swiper-slide">
							<figure>
								<svg class="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
								</svg>
								<blockquote>
									<p class="text-base font-medium leading-relaxed text-gray-900 dark:text-white lg:text-2xl lg:leading-relaxed">${testimonial.data?.quote}</p>
								</blockquote>
								<figcaption class="mt-6 flex items-center justify-center space-x-3">
									<img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
									<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
										<div class="pr-3 font-medium text-gray-900 dark:text-white">- ${testimonial.data?.name}</div>
									</div>
								</figcaption>
							</figure>
						</div>`));
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/Reviews.astro");

const $$Astro$7 = createAstro();
const $$TrustableTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TrustableTeam;
  const { imageTextData } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl space-y-12 px-4 py-8 sm:py-16 lg:space-y-20 lg:px-6">
		${imageTextData?.imagePlacement == "right" && renderTemplate`<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:gap-16">
					<div class="text-gray-500 dark:text-gray-400 sm:text-lg">
						<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Trusted for over a decade</h2>
						<p class="mb-8 font-light lg:text-xl">
							We've built a reputation throughout New England as a moving company you can trust. Whether you're moving halfway across the country or across the street, we've got you covered.
							Throughout our history we've seen it all, and we use that experience to make your move as smooth as possible. Our customers return to us time and time again for their moving needs. Let
							our reviews speak for themselves: Check us out on Google Reviews and Yelp for more firsthand customer feedback!
						</p>
					</div>
					<img class="mb-4 flex w-full rounded-lg lg:mb-0"${addAttribute(imageTextData?.image, "src")} alt="office feature image">
				</div>`}
		${imageTextData?.imagePlacement == "left" && renderTemplate`<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:gap-16">
					<img class="order-last mb-4 flex w-full rounded-lg lg:order-none lg:mb-0"${addAttribute(imageTextData?.image, "src")} alt="office feature image 2">
					<div class="order-first text-gray-500 dark:text-gray-400 sm:text-lg lg:order-none">
						<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Your Local Moving Team</h2>
						<p class="mb-8 font-light lg:text-xl">
							We build crews that work well together, and crews that work well together keep our customers happy. Our staff has experience with all kinds of moves, be it a top floor apartment in the
							middle of a city or a rural location with rougher terrain, we can handle it all.
						</p>
					</div>
				</div>`}
	</div>
</section>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/TrustableTeam.astro");

const $$Astro$6 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Services;
  const { services } = Astro2.props;
  return renderTemplate`<!-- Icon Blocks -->${maybeRenderHead($$result)}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 astro-G5JPLRHU">
	<!-- Grid -->
	<div class="grid gap-12 md:grid-cols-2 astro-G5JPLRHU">
		<div class="lg:w-full astro-G5JPLRHU">
			<div class="lg:w-3/4 astro-G5JPLRHU">
				<h2 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl astro-G5JPLRHU">Services Offered</h2>
				<p class="mt-3 text-gray-800 dark:text-gray-400 astro-G5JPLRHU">
					We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.
				</p>
				<a href="/join" class="mt-5 inline-flex items-center gap-x-2 font-medium text-primary hover:underline astro-G5JPLRHU">
					Contact sales to learn more
					<svg class="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1 astro-G5JPLRHU" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" class="astro-G5JPLRHU"></path>
					</svg>
				</a>
			</div>
			<div class="embed-container astro-G5JPLRHU"><iframe src="https://www.youtube.com/embed/CLv16TFTKNs" frameborder="0" allowfullscreen class="astro-G5JPLRHU"></iframe></div>
		</div>
		<!-- End Col -->

		<div class="space-y-6 lg:space-y-10 astro-G5JPLRHU">
			${services.map((service) => renderTemplate`<div class="flex astro-G5JPLRHU">
						<span class="mx-auto inline-flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:text-gray-200 astro-G5JPLRHU">
							<svg class="h-5 w-5 astro-G5JPLRHU" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" class="astro-G5JPLRHU"></path>
								<path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" class="astro-G5JPLRHU"></path>
							</svg>
						</span>
						<div class="ml-5 sm:ml-8 astro-G5JPLRHU">
							<h2 class="text-base font-semibold text-gray-800 dark:text-gray-200 sm:text-3xl astro-G5JPLRHU">${service.data.name}</h2>
							<p class="mt-1 text-gray-600 dark:text-gray-400 astro-G5JPLRHU">${unescapeHTML(service.data.description)}</p>
						</div>
					</div>`)}
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Icon Blocks -->
<!-- <div class="bg-white py-24 sm:py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-primary">What We Provide</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services We Offered</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">We're insured and FMCSA registered.</p>
		</div>

		<div class="mx-auto mt-12 w-full max-w-screen-md">
			<div class="w-full">
				<ul class="-mb-px flex flex-wrap border-b-2 border-primary text-center text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
					<li class="flex-1" role="presentation">
						<button
							class="w-full rounded-t-lg bg-slate-50 px-5 py-4 text-base font-medium aria-selected:bg-primary aria-selected:text-white"
							id="Moving-tab"
							data-tabs-target="#Moving"
							type="button"
							role="tab"
							aria-controls="Moving"
							aria-selected="false">Moving</button
						>
					</li>
					<li class="flex-1" role="presentation">
						<button
							class="w-full rounded-t-lg border-transparent bg-slate-50 px-5 py-4 text-base font-medium hover:border-gray-300 hover:text-gray-600 aria-selected:bg-primary aria-selected:text-white dark:hover:text-gray-300"
							id="Rearrangement-tab"
							data-tabs-target="#Rearrangement"
							type="button"
							role="tab"
							aria-controls="Rearrangement"
							aria-selected="false">Rearrangement</button
						>
					</li>
					<li class="flex-1" role="presentation">
						<button
							class="w-full rounded-t-lg border-transparent bg-slate-50 px-5 py-4 text-base font-medium hover:border-gray-300 hover:text-gray-600 aria-selected:bg-primary aria-selected:text-white dark:hover:text-gray-300"
							id="Hoisting-tab"
							data-tabs-target="#Hoisting"
							type="button"
							role="tab"
							aria-controls="Hoisting"
							aria-selected="false">Hoisting</button
						>
					</li>
					<li class="flex-1" role="presentation">
						<button
							class="w-full rounded-t-lg border-transparent bg-slate-50 px-5 py-4 text-base font-medium hover:border-gray-300 hover:text-gray-600 aria-selected:bg-primary aria-selected:text-white dark:hover:text-gray-300"
							id="heavy-items-tab"
							data-tabs-target="#heavy-items"
							type="button"
							role="tab"
							aria-controls="heavy-items"
							aria-selected="false">Heavy Items</button
						>
					</li>
				</ul>
			</div>
			<div id="myTabContent">
				<div class="hidden rounded-lg bg-gray-50 p-8 dark:bg-gray-800" id="Moving" role="tabpanel" aria-labelledby="Moving-tab">
					<h3 class="mb-5 text-3xl font-bold text-gray-800">Moving doesn't have to be difficult</h3>
					<p class="text-xl leading-relaxed">
						We'll move you from your current location to your next. Residential or commercial, rain or shine. We've been doing it every day for years and we have all the tools for the job.
						<br /><br />
						Trustworthiness is among the most important traits we look for when hiring new movers. We understand the sensitivity involved with allowing us into your home and handling your posessions. We
						train our team to high standards of careful handling as well as courteous conduct.
					</p>
				</div>
				<div class="hidden rounded-lg bg-gray-50 p-8 dark:bg-gray-800" id="Rearrangement" role="tabpanel" aria-labelledby="Rearrangement-tab">
					<h3 class="mb-5 text-3xl font-bold text-gray-800">Making space for new carpets</h3>
					<p class="text-xl leading-relaxed">We can move your furniture out of your room, or all your rooms, so you can get your floors redone. And then we'll put it back.</p>

					<a
						href="#"
						class="mt-8 block w-fit rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						>Get Free Estimate</a
					>
				</div>
				<div class="hidden rounded-lg bg-gray-50 p-8 dark:bg-gray-800" id="Hoisting" role="tabpanel" aria-labelledby="Hoisting-tab">
					<h3 class="mb-5 text-3xl font-bold text-gray-800">Narrow stairwell? Small doorways?</h3>
					<p class="text-xl leading-relaxed">
						In many cases, we'll be able to get large items into the second floor of your home over the side of your deck or through a window. To determine if your hoist is within our scope of work,
						fill out our estimate form and we'll work with you to get it done.
					</p>

					<a
						href="#"
						class="mt-8 block w-fit rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						>Get Free Estimate</a
					>
				</div>
				<div class="hidden rounded-lg bg-gray-50 p-8 dark:bg-gray-800" id="heavy-items" role="tabpanel" aria-labelledby="heavy-items-tab">
					<h3 class="mb-5 text-3xl font-bold text-gray-800">This is where the "muscle" comes in</h3>
					<p class="text-xl leading-relaxed">
						Local Muscle has loads of experience moving items up to 500 pounds, including pianos, gun safes, stone benches, and armoirs. To determine if your item is within our scope of work, fill out
						our estimate form.
					</p>

					<a
						href="#"
						class="mt-8 block w-fit rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						>Get Free Estimate</a
					>
				</div>
			</div>
		</div>
	</div>
</div> -->`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/Services.astro");

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/services/heavy-items/index.yaml": () => import('./index.2318a792.mjs'),"/src/content/services/hoisting/index.yaml": () => import('./index.4e66d704.mjs'),"/src/content/services/moving/index.yaml": () => import('./index.1da5577e.mjs'),"/src/content/services/rearrangement/index.yaml": () => import('./index.6112874b.mjs'),"/src/content/testimonials/anonymous-yelp-review/index.yaml": () => import('./index.40b9c241.mjs'),"/src/content/testimonials/lee-van-dyke/index.yaml": () => import('./index.9a1567e0.mjs'),"/src/content/testimonials/melanie-dorn/index.yaml": () => import('./index.30ab4cf6.mjs')

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"testimonials":{"type":"data","entries":{"anonymous-yelp-review/index":"/src/content/testimonials/anonymous-yelp-review/index.yaml","lee-van-dyke/index":"/src/content/testimonials/lee-van-dyke/index.yaml","melanie-dorn/index":"/src/content/testimonials/melanie-dorn/index.yaml"}},"services":{"type":"data","entries":{"heavy-items/index":"/src/content/services/heavy-items/index.yaml","moving/index":"/src/content/services/moving/index.yaml","rearrangement/index":"/src/content/services/rearrangement/index.yaml","hoisting/index":"/src/content/services/hoisting/index.yaml"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$5 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const reader = createReader(process.cwd(), _hoc_function);
  const homePage = await reader.singletons.homePage.read();
  const services = await getCollection("services");
  const testimonials = await getCollection("testimonials");
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Homepage" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${homePage?.componentBlocks?.map((block) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${block?.discriminant == "banner" && renderTemplate`${renderComponent($$result3, "Hero", $$Hero, { "heroData": block?.value })}`}` })}`)}${renderComponent($$result2, "Services", $$Services, { "services": services })}
	${homePage?.componentBlocks?.map((block) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${block?.discriminant == "imageText" && renderTemplate`${renderComponent($$result3, "TrustableTeam", $$TrustableTeam, { "imageTextData": block?.value })}`}${block?.discriminant == "testimonialSelector" && renderTemplate`${renderComponent($$result3, "Reviews", $$Reviews, { "testimonials": testimonials })}`}` })}`)}${renderComponent($$result2, "CTA", $$CTA, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/index.astro");

const $$file$3 = "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/index.astro";
const $$url$3 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const checklist = "/_astro/flat-lay-notebook-with-list-desk.48ed66a4.jpg";

const $$Astro$4 = createAstro();
const $$ShortHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ShortHero;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="relative z-0 flex w-full items-center bg-primary/60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-cover bg-fixed bg-center bg-no-repeat px-7 pb-12 pt-44 bg-blend-color-burn md:h-96 md:pt-40 lg:px-10">
	<div class="mx-auto w-full max-w-7xl">
		<h1 class="text-4xl font-bold text-white">${unescapeHTML(title)}</h1>
		${description && renderTemplate`<p class="mt-4 w-full max-w-lg text-lg text-white">${unescapeHTML(description)}</p>`}
	</div>
</section>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/ShortHero.astro");

const $$Astro$3 = createAstro();
const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Resources;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Resources" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "ShortHero", $$ShortHero, { "title": "Resources" })}

	
	${maybeRenderHead($$result2)}<section>
		<div class="mx-auto w-full max-w-7xl px-7 py-16 lg:px-10">
			<div class="mx-auto w-full max-w-6xl text-center">
				<h1 class="mb-2 text-3xl font-bold md:text-5xl">Moving Checklist</h1>
				<p class="text-lg leading-relaxed">Quick reference for steps to ensure your move goes off without a hitch</p>
			</div>

			<div class="mt-10 grid grid-cols-2 gap-10">
				<ul class="list-disc space-y-3 pl-6 leading-relaxed">
					<li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						All small and loose items are protected and boxed
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						A 'no pack' zone is designated for essentials (phone chargers, medicine, keys)
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Boxes are sealed and labeled
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Items in drawers and on shelves are cleared
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Appliances are detached/unhooked
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Gas/oil is removed from equipment
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Flammable substances, ammunitions, explosives, and alcohol, are handled separately
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Parking arrangements are secured
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Property management/neighbors are aware of your move
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						If applicable, an elevator is explicitly reserved
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Confirm no other work crews are scheduled at the same time as us
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Pathways are clear, inside and outside load and unload sites
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						Sites are clean, sanitary, and safe
					</li><li class="flex items-start gap-1">
						<svg class="mr-1.5 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
						In the Winter, your driveway, walkways, and roads are plowed and salted/sanded
					</li>
				</ul>

				<div class="relative">
					<img${addAttribute(checklist, "src")} alt="checklist" class="absolute inset-0 h-full w-full object-cover">
				</div>
			</div>
		</div>
	</section>

	
	<section class="bg-gray-100 py-16">
		<div class="mx-auto w-full max-w-7xl px-7 text-center lg:px-10">
			<h2 class="mb-4 text-3xl font-bold md:text-5xl">Policies and Contracts</h2>
			<p class="mx-auto w-full max-w-4xl">
				We've outlined our Terms of Service and Full Value Replacement Coverage in simple language for quick reference. For interstate moves, the FMCSA also provides brochures regarding your legal
				rights.
			</p>

			<div class="mt-12 grid grid-cols-2 gap-8 text-left">
				<div>
					<h3 class="mb-5 text-2xl font-medium text-primary">Local (in-state)</h3>
					<ul class="list-disc pl-6 text-left">
						<li>
							<a href="#" class="text-lg leading-relaxed hover:underline">In State Terms and Conditions Outline</a>
						</li>
						<li>
							<a href="#" class="text-lg leading-relaxed hover:underline">In State Full Value Replacement Coverage</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-5 text-2xl font-medium text-primary">Interstate</h3>
					<ul class="list-disc pl-6 text-left">
						<li>
							<a href="#" class="text-lg leading-relaxed hover:underline">Interstate Carrier Liability Agreement</a>
						</li>
						<li>
							<a href="#" class="text-lg leading-relaxed hover:underline">"Ready to Move"</a><span class="text-yellow-500">[External Link]</span>
						</li>
						<li>
							<a href="#" class="text-lg leading-relaxed hover:underline">"Your Rights and Responsiblities"</a><span class="text-yellow-500">[External Link]</span>
						</li>
					</ul>
				</div>
			</div>

			<p class="mt-8 max-w-3xl text-left">
				We bill differently for interstate moves, as mandated by law. We will determine a flat rate and provide a quote, rather than create an hourly-based estimate.
			</p>
		</div>
	</section>

	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/resources.astro");

const $$file$2 = "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/resources.astro";
const $$url$2 = "/resources";

const resources = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Resources,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Homepage" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "ShortHero", $$ShortHero, { "title": "Meet the Muscle" })}

	
	${maybeRenderHead($$result2)}<section>
		<div class="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-7 py-16 lg:grid-cols-2 lg:px-10">
			<div class="">
				<h1 class="mb-8 text-3xl font-bold md:text-5xl">Our story, in storage units</h1>
				<p class="text-lg leading-relaxed">
					No doubt we're well acquainted with storage units. Ten years ago our story started in one. Founding partner Alex Sargent got the idea to start a moving company after overhearing
					complaints about the moving experience and attitude of the movers people had hired. Ned Swain, a frequent customer, liked the idea so much he brought it to two other friends, Jake
					Holz and Jon Donnell. Soon after, Local Muscle was born with the driving idea that customer service and attitude of the crews will be what sets us apart. The results speak for
					themselves.
				</p>
			</div>

			<div>
				<iframe class="aspect-video w-full rounded-md border-8 border-primary" src="https://www.youtube.com/embed/CLv16TFTKNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		</div>
	</section>

	
	<section class="bg-gray-100 py-16">
		<div class="mx-auto w-full max-w-7xl px-7 text-center lg:px-10">
			<h2 class="mb-8 text-3xl font-bold md:text-5xl">Our Mission</h2>
			<p class="text-lg leading-relaxed">To provide a stress free and cost effective move that leaves you wondering what you were worried about in the first place.</p>
		</div>
	</section>

	<section>
		<div class="mx-auto w-full max-w-7xl px-7 py-16 lg:px-10">
			<div class="mx-auto w-full max-w-6xl text-center">
				<h1 class="mb-8 text-3xl font-bold md:text-5xl">Why choose Local Muscle?</h1>
				<p class="text-lg leading-relaxed">
					We've built a reputation throughout New England as a moving company you can trust. Whether you're moving halfway across the country or across the street, we've got you
					covered.Throughout our history we really have seen it all, and use that knowledge to make your move as smooth as possible.Many of our customers have returned to us time and time
					again for their moving needs. That being said, we prefer to let our reviews speak for themselves. Check us out on Google Reviews and Yelp for more firsthand customer feedback!
				</p>
			</div>

			<div class="mt-10">
				<iframe class="aspect-video w-full rounded-md border-8 border-primary" src="https://www.youtube.com/embed/8bWU_GcFb90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<p class="mt-5 text-lg leading-relaxed">
				Put simply, we want to change your opinion of movers and moving for the better. Each move is carefully tailored to best fit your needs and ensure a positive experience for customers
				and crews alike. From the point you complete our estimate form, a member of our dedicated staff will be in contact with you every step of the way. Get started with our estimate form.
			</p>
		</div>
	</section>

	<section class="bg-gray-100 py-16">
		<div class="mx-auto w-full max-w-7xl px-7 text-center lg:px-10">
			<blockquote class="mb-2 text-2xl font-medium italic">"I love lifting heavy awkward things, and running around."</blockquote>
			<p class="text-lg font-bold">- Ned Swain</p>
		</div>
	</section>

	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/about.astro");

const $$file$1 = "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/about.astro";
const $$url$1 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead($$result)}<section class="bg-white">
	<div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
		<p class="mb-10 text-lg">
			If you’re someone who enjoys physical work and problem-solving in a positive environment, we’d like to meet you. Base pay begins at $16/hour, with movers averaging around $21/hour with tips and
			additional incentives factored in. Eligible movers who complete our driving assessment receive additional pay on top of that. You can get things started by filling out the form below.
			<br><br>
			You can also reach us by email at <a class="hover:text-primary hover:underline" href="mailto:hiring@localmusclemovers.com.">hiring@localmusclemovers.com.</a>
		</p>

		<h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">Application Form</h2>
		<p class="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">This is not a formal application, but it's a great way to start the process.</p>
		<form action="#" class="space-y-8">
			<div class="grid grid-cols-2 gap-8">
				<div>
					<label for="first-name" class="mb-2 block text-sm font-medium text-gray-900">First Name*</label>
					<input type="text" id="first-name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary" required>
				</div>
				<div>
					<label for="last-name" class="mb-2 block text-sm font-medium text-gray-900">Last Name*</label>
					<input type="text" id="last-name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary" required>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-8">
				<div class="col-span-2">
					<label for="phone" class="mb-2 block text-sm font-medium text-gray-900">Phone*</label>
					<input type="tel" id="phone" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary" required>
				</div>
				<div>
					<label for="ext" class="mb-2 block text-sm font-medium text-gray-900">Ext.</label>
					<input type="text" id="ext" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary" required>
				</div>
			</div>

			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-gray-900">Email*</label>
				<input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary" required>
			</div>

			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-gray-900">Which branch are you interested in contacting?</label>

				<div class="flex items-center gap-12">
					<div class="flex items-center gap-2">
						<input type="checkbox" name="portland" id="portland" class="text-primary accent-primary focus:outline-primary">
						<label for="portland" class="text-sm">Portland, ME</label>
					</div>
					<div class="flex items-center gap-2">
						<input type="checkbox" name="burlington" id="burlington" class="text-primary accent-primary focus:outline-primary">
						<label for="burlington" class="text-sm">Burlington, VT</label>
					</div>
				</div>
			</div>

			<div class="sm:col-span-2">
				<label for="message" class="mb-2 block text-sm font-medium text-gray-900">Your interests, work history, availability, anything you think is relevant:</label>
				<textarea id="message" rows="6" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary"></textarea>
			</div>
			<button type="submit" class="focus:ring-primary-300 rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 sm:w-fit">Send message</button>
		</form>
	</div>
</section>`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/components/ContactForm.astro");

const $$Astro = createAstro();
const $$Join = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Join;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "Resources" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "ShortHero", $$ShortHero, { "title": "Join Our Crew", "description": "Local Muscle is currently looking for able-bodied, reliable people to join us in moving" })}
	${renderComponent($$result2, "ContactForm", $$ContactForm, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/join.astro");

const $$file = "/Users/tedmartin/sites/local-muscle-movers/marketing/src/pages/join.astro";
const $$url = "/join";

const join = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Join,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { about as a, index as i, join as j, resources as r };
