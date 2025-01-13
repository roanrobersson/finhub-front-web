import type { FC } from "react";

type ConsoleLogProps = {
	variant?: "log" | "warn" | "error";
	message?: any;
	children?: any;
} & Record<string, any>;

const ConsoleLog: FC<ConsoleLogProps> = ({
	variant = "log",
	message,
	children,
	...restProps
}) => {
	const optionalParams = Object.values(restProps);

	if (optionalParams.length) {
		console[variant](message ?? children, Object.values(optionalParams));
		return null;
	}

	console[variant](message ?? children);

	return null;
};

export default ConsoleLog;
