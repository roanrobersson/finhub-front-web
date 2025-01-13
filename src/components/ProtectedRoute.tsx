import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router";
import routeKeys from "routeKeys";

import useSession from "hooks/useSession";

type ProtectedRouteProps = PropsWithChildren<{}>;

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const { isAuthenticated, isLoading } = useSession();
	const shouldRedirect = !isAuthenticated && !isLoading;
	return shouldRedirect ? <Navigate to={routeKeys.signIn()} replace /> : children;
};

export default ProtectedRoute;

export type { ProtectedRouteProps };
