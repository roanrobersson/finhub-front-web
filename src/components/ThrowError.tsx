import type { FC } from "react";

type ThrowErrorProps = {
	message?: any;
	options?: ErrorOptions;
	children?: string;
};

const ThrowError: FC<ThrowErrorProps> = ({ message, options, children }) => {
	const msg = children ?? message ?? "An error occurred";

	throw new Error(msg, options);
};

export default ThrowError;
