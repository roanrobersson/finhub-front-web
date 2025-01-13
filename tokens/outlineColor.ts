import type { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const outlineColor = {
	primary: {
		DEFAULT: "var(--outline-primary)"
	},
	secondary: {
		DEFAULT: "var(--outline-secondary)"
	}
} satisfies ResolvableTo<RecursiveKeyValuePair>;

export default outlineColor;
