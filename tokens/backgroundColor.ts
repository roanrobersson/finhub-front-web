import type { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const backgroundColor = {
	primary: {
		DEFAULT: "rgb(from var(--bg-primary) r g b / var(--tw-bg-opacity))"
	},
	card: {
		DEFAULT: "rgb(from var(--bg-card) r g b / var(--tw-bg-opacity))"
	},
	"field-primary": {
		DEFAULT: "rgb(from var(--bg-field-primary) r g b / var(--tw-bg-opacity))"
	},
	"field-secondary": {
		DEFAULT: "rgb(from var(--bg-field-secondary) r g b / var(--tw-bg-opacity))"
	}
} satisfies ResolvableTo<RecursiveKeyValuePair>;

export default backgroundColor;
