import { ComponentPropsWithoutRef, FC } from "react";
import { Outlet } from "react-router";
import { cc } from "lib/tailwindUtils";

import Header from "./Header";

type DefaultLayoutProps = Omit<ComponentPropsWithoutRef<"div">, "children">;

const DefaultLayout: FC<DefaultLayoutProps> = ({ className, ...restProps }) => {
	return (
		<div className={cc("h-min-screen", className)} {...restProps}>
			<Header />
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
