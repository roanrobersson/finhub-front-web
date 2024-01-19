import type { ThemeConfig } from "tailwindcss/types/config";

type FontFamilyConfigObj = ThemeConfig["fontFamily"];

const fontFamily = {
	manrope: ["Manrope", "sans-serif"]
} satisfies FontFamilyConfigObj;

export default fontFamily;
