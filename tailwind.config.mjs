/** @type {import('tailwindcss').Config} */
const themeColors = require('./tailwind.colors.js');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: themeColors,
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: 'class',
}
