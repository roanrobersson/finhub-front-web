import { ComponentPropsWithoutRef, FC } from "react";
import { Outlet } from "react-router";
import { cc } from "lib/tailwindUtils";

import Header from "../components/Header";

type MainLayoutProps = Omit<ComponentPropsWithoutRef<"div">, "children">;

const MainLayout: FC<MainLayoutProps> = ({ className, ...restProps }) => {
	return (
		<div className={cc("flex h-screen flex-col", className)} {...restProps}>
			<Header />

			<div className="h-full overflow-scroll">
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
