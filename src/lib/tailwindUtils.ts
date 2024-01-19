import { cva } from "class-variance-authority";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";

import twConfig from "../../tailwind.config";
import backgroundImage from "../../tokens/backgroundImage";
import colors from "../../tokens/colors";
import fontFamily from "../../tokens/fontFamily";
import fontSize from "../../tokens/fontSize";

const extractClassNames = (object: object, separator = "-"): string[] => {
	let keys: string[] = [];

	for (const k in object) {
		if (typeof object[k as keyof object] === "object" && object[k as keyof object] !== null) {
			const deepKeys = extractClassNames(object[k as keyof object], separator).map((key) => `${k}${separator}${key}`);
			keys = keys.concat(deepKeys);
		} else {
			keys.push(k as keyof object);
		}
	}

	return keys;
};

const customTwMerge = extendTailwindMerge({
	override: {
		classGroups: {
			"font-size": [{ text: extractClassNames(fontSize) }],
			"font-family": [{ font: extractClassNames(fontFamily) }],
			"text-color": [{ text: extractClassNames(colors) }]
		}
	},
	extend: {
		classGroups: {
			"bg-image": [{ bg: extractClassNames(backgroundImage) }]
		}
	}
});

export const customCva: typeof cva = (base, config) => {
	const result = cva(base, config);
	return (props) => customTwMerge(result(props));
};

type ClassArg = Parameters<typeof clsx>;

export const cc = (...classes: ClassArg) => {
	return customTwMerge(clsx(...classes));
};

export const tailwindConfig = resolveConfig(twConfig);
