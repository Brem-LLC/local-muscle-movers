import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from "@astrojs/netlify/functions";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://localmusclemovers.com',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), markdoc(), keystatic(), partytown(), sitemap()],
  output: 'hybrid',
  adapter: netlify()
});