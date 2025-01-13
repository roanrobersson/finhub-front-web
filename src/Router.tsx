import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "pages/auth/AuthLayout";
import ForgotPassword from "pages/auth/ForgotPassword";
import SignIn from "pages/auth/SignIn";
import SignUp from "pages/auth/SignUp";
import Dashboard from "pages/Dashboard";
import MainLayout from "pages/MainLayout";
import NotFound from "pages/NotFound";
import Unauthorized from "pages/Unauthorized";
import routeKeys from "routeKeys";

import ProtectedRoute from "components/ProtectedRoute";
import PublicRoute from "components/PublicRoute";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<PublicRoute>
							<AuthLayout />
						</PublicRoute>
					}
				>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
				</Route>

				<Route
					element={
						<ProtectedRoute>
							<MainLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Navigate to="dashboard" />} />

					<Route path="dashboard" element={<Dashboard />} />

					<Route path={routeKeys.unauthorized()} element={<Unauthorized />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
