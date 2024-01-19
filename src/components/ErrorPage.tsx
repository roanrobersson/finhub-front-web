import { NavLink, useRouteError } from "react-router-dom";

import { Button } from "./ui/Button";

export default function ErrorPage() {
	const error = useRouteError() as any;

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
			<h1>Error page</h1>

			<p className="font-mono">
				<span className="mr-2">{error?.status}</span>
				<i>{error?.statusText || error?.message}</i>
			</p>
			<Button asChild>
				<NavLink to="/">Back to Home</NavLink>
			</Button>
		</div>
	);
}
