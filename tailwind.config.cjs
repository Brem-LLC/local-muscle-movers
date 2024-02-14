/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				primary: ['Libre Baskerville', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: 'rgb(34, 83, 44)',
					500: '#F3DC95',
					dark: '#CDAD7D'
				}
			},
			backgroundImage: {
				'gradient-1': 'linear-gradient(0deg, rgba(255,234,166,1) 0%, rgba(212,187,109,1) 50%, rgba(161,139,68,1) 100%)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
}
