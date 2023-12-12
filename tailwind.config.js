/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-200": "#1FFFAD",
				"primary-300": "#00F59B",
				"primary-400": "#00bc77",
				"primary-500": "#00A367",
				"primary-600": "#007A4E",

				background: "#12002B",

				text: "#2c3e50",

				black: "#0C0C0C",
				white: "#FAFAFA",
			},
		},
	},
	plugins: [],
};
