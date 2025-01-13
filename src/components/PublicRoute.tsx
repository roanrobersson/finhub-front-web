import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router";
import routeKeys from "routeKeys";

import useSession from "hooks/useSession";

type PublicRouteRouteProps = PropsWithChildren<{}>;

const PublicRoute: FC<PublicRouteRouteProps> = ({ children }) => {
	const { isAuthenticated, isLoading } = useSession();
	const shouldRedirect = isAuthenticated && !isLoading;
	return shouldRedirect ? <Navigate to={routeKeys.home()} replace /> : children;
};

export default PublicRoute;

export type { PublicRouteRouteProps };
