import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

const colors = {
	inherit: "inherit",
	current: "currentColor",
	transparent: "transparent",
	white: "#ffffff",
	black: "#000000",
	primary: {
		DEFAULT: "var(--primary)",
		"100": "var(--primary-100)",
		"200": "var(--primary-200)",
		"300": "var(--primary-300)",
		"400": "var(--primary-400)",
		"500": "var(--primary-500)",
		"600": "var(--primary-600)",
		"700": "var(--primary-700)",
		"800": "var(--primary-800)",
		"900": "var(--primary-900)",
		foreground: "var(--primary-foreground)"
	},
	secondary: {
		DEFAULT: "var(--secondary)",
		"100": "var(--secondary-100)",
		"200": "var(--secondary-200)",
		"300": "var(--secondary-300)",
		"400": "var(--secondary-400)",
		"500": "var(--secondary-500)",
		"600": "var(--secondary-600)",
		"700": "var(--secondary-700)",
		"800": "var(--secondary-800)",
		"900": "var(--secondary-900)",
		foreground: "var(--secondary-foreground)"
	},
	dark: {
		"100": "var(--dark-100)",
		"200": "var(--dark-200)",
		"300": "var(--dark-300)",
		"400": "var(--dark-400)",
		"500": "var(--dark-500)",
		"600": "var(--dark-600)",
		"700": "var(--dark-700)",
		"800": "var(--dark-800)",
		"900": "var(--dark-900)",
		foreground: "var(--dark-foreground)"
	},
	neutral: {
		"100": "#F9FAFC",
		"200": "#F1F4F8",
		"300": "#E8ECF2",
		"400": "#E2E7EE",
		"500": "#DFE5F1",
		"600": "#C5CCDB",
		"700": "#A6AEBF",
		"800": "#868FA2",
		"900": "#686F82",
		foreground: "var(--neutral-foreground)"
	},
	success: {
		DEFAULT: "var(--success)",
		foreground: "var(--success-foreground)"
	},
	info: {
		DEFAULT: "var(--info)",
		foreground: "var(--info-foreground)"
	},
	danger: {
		DEFAULT: "var(--danger)",
		foreground: "var(--danger-foreground)"
	},
	error: {
		DEFAULT: "var(--error)",
		foreground: "var(--error-foreground)"
	}
} satisfies RecursiveKeyValuePair;

export default colors;
