import type { RecursiveKeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const outlineColor = {
	primary: {
		DEFAULT: "var(--outline-primary)"
	}
} satisfies ResolvableTo<RecursiveKeyValuePair>;

export default outlineColor;
