import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

const backgroundImage = {
	"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
	"gradient-conic":
		"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
	"artifacts-img": "url('/images/artifacts.png')"
} satisfies RecursiveKeyValuePair;

export default backgroundImage;
