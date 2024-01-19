import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

const borderRadius = {
	DEFAULT: "var(--radius)",
	sm: "calc(var(--radius) - 4px)",
	md: `calc(var(--radius) - 2px)`,
	lg: `var(--radius)`,
	full: "9999px"
} satisfies RecursiveKeyValuePair;

export default borderRadius;
