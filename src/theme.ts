import { cc } from "lib/tailwindUtils";
import { PrimeReactPTOptions } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

const theme: PrimeReactPTOptions = {
	...Tailwind,
	button: {
		root: (options) => ({
			className: cc({ "rounded-lg": !options?.props.rounded })
		})
	},
	inputtext: {
		root: {
			className: cc("rounded-lg border-none")
		}
	},
	password: {
		input: {
			className: cc("rounded-lg border-none w-full")
		},
		iconField: {
			root: {
				className: "w-full"
			}
		},
		showIcon: { className: "-mt-2" },
		hideIcon: { className: "-mt-2" }
	}
};

export default theme;
