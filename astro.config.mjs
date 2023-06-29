<<<<<<< HEAD
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
=======
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify/functions'
>>>>>>> 6de80b33758b07122350e73707579e4281990588

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false
			}
		}),
	],
	output: 'hybrid',
	adapter: netlify()
})
