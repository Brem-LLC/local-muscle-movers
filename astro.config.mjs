import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify/functions'

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
