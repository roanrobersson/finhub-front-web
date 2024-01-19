import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

import backgroundColor from "./tokens/backgroundColor";
import backgroundImage from "./tokens/backgroundImage";
import borderColor from "./tokens/borderColor";
import borderRadius from "./tokens/borderRadius";
import colors from "./tokens/colors";
import fontFamily from "./tokens/fontFamily";
import fontSize from "./tokens/fontSize";
import outlineColor from "./tokens/outlineColor";
import ringColor from "./tokens/ringColor";
import screens from "./tokens/screens";
import textColor from "./tokens/textColor";

import type { Config } from "tailwindcss";

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	darkMode: "selector",
	theme: {
		screens,
		fontFamily,
		fontSize,
		borderRadius,
		container: {
			center: true
		},
		extend: {
			backgroundImage,
			colors,
			textColor,
			borderColor,
			ringColor,
			backgroundColor,
			outlineColor,
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".___example-class": {
					"background-color": "green",
					"@apply bg-red-600 text-primary-500 font-bold": {}
				}
			});
		}),
		tailwindcssAnimate
	]
} satisfies Config;

export default config;
