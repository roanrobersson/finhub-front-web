import type { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const borderColor = {
	primary: {
		DEFAULT: "rgb(from var(--border-primary) r g b / var(--tw-border-opacity))"
	}
} satisfies ResolvableTo<RecursiveKeyValuePair>;

export default borderColor;
