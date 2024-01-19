import type { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const textColor = {
	primary: {
		DEFAULT: "rgb(from var(--text-primary) r g b / var(--tw-text-opacity))"
	},
	secondary: {
		DEFAULT: "rgb(from var(--text-secondary) r g b / var(--tw-text-opacity))"
	}
} satisfies ResolvableTo<RecursiveKeyValuePair>;

export default textColor;
