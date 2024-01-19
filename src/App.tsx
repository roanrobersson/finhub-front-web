import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SecondPage from "pages/Second";

import DefaultLayout from "components/Layout";

import HomePage from "./pages/Home";

export default function App() {
	const queryClient = useMemo(() => new QueryClient({}), []);

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/second-page" element={<SecondPage />} />
					</Route>
				</Routes>
			</BrowserRouter>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
