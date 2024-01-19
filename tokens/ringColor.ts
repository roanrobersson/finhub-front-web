import type { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const ringColor = {
	primary: {
		DEFAULT: "rgb(from var(--ring-primary) r g b / var(--tw-ring-opacity))"
	}
} satisfies ResolvableTo<RecursiveKeyValuePair>;

export default ringColor;
