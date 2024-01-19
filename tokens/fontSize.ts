import type { ThemeConfig } from "tailwindcss/types/config";

type FontSizeConfigObj = ThemeConfig["fontSize"];

const title = {
	"title-sm": [
		"0.625rem", // 10px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"title-md": [
		"0.75rem", // 12px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"title-lg": [
		"0.875rem", // 14px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"title-xl": [
		"1rem", // 16px
		{
			lineHeight: "1.3",
			fontWeight: "800"
		}
	],
	"title-2xl": [
		"2rem", // 32px
		{
			lineHeight: "1.4",
			fontWeight: "700"
		}
	],
	"title-3xl": [
		"25rem", // 32px
		{
			lineHeight: "1.4",
			fontWeight: "800"
		}
	]
} satisfies FontSizeConfigObj;

const field = {
	"field-sm": [
		"0.75rem", // 12px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"field-md": [
		"0.75rem", // 12px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"field-lg": [
		"0.8125rem", // 13px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"field-xl": [
		"0.875rem", // 14px
		{
			lineHeight: "1.2",
			fontWeight: "600"
		}
	],
	"field-2xl": [
		"0.875rem", // 14px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"field-3xl": [
		"1rem", // 16px
		{
			lineHeight: "1.3",
			fontWeight: "600"
		}
	],
	"field-4xl": [
		"1.125rem", // 18px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	],
	"field-5xl": [
		"1.375rem", // 22px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	],
	"field-6xl": [
		"1.5rem", // 24px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	]
} satisfies FontSizeConfigObj;

const body = {
	"body-sm": [
		"0.875rem", // 14px
		{
			lineHeight: "1.2",
			fontWeight: "600"
		}
	],
	"body-md": [
		"1.125rem", // 18px
		{
			lineHeight: "1.3",
			fontWeight: "600"
		}
	]
} satisfies FontSizeConfigObj;

const fontSize = {
	...title,
	...field,
	...body
} satisfies FontSizeConfigObj;

export default fontSize;
