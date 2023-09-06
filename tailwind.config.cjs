/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ocra: ["OCRAbyBT"],
				courier: ["Courier"]
			  },
			animation: {
			'ping-fast': 'ping 0.7s cubic-bezier(1, 0, 0.2, 1) infinite',
			}
		},
	},
	plugins: [],
}
