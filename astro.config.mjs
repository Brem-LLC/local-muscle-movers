import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import netlify from "@astrojs/netlify/functions";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), markdoc(), keystatic(), partytown(), sitemap(), robotsTxt()],
  output: 'hybrid',
  adapter: netlify()
});