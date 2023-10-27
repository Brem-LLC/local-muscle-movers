import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from "@astrojs/netlify/functions";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: netlify()
});