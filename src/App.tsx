import { FC } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isAxiosError } from "axios";
import { hoursToMilliseconds, minutesToMilliseconds } from "date-fns";
import { EnvEnum } from "enums/EnvEnum";
import { EnvVarEnum } from "enums/EnvVarEnum";
import { cc } from "lib/tailwindUtils";
import { getEnvVariable } from "lib/utils";
import { PrimeReactProvider } from "primereact/api";
import { ProgressSpinner } from "primereact/progressspinner";
import Router from "Router";
import theme from "theme";

import DevTools from "components/DevTools";
import { SessionProvider } from "hooks/useSession";

const isProductionEnv = getEnvVariable(EnvVarEnum.NODE_ENV) === EnvEnum.PRODUCTION;

const App: FC = () => {
	return (
		<GoogleOAuthProvider clientId={getEnvVariable(EnvVarEnum.GOOGLE_CLIENT_ID)}>
			<QueryClientProvider client={queryClient}>
				<SessionProvider fallback={<SessionFallback />}>
					<PrimeReactProvider
						value={{
							ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: cc },
							pt: theme
						}}
					>
						<Router />

						{!isProductionEnv && <ReactQueryDevtools />}

						{!isProductionEnv && <DevTools />}
					</PrimeReactProvider>
				</SessionProvider>
			</QueryClientProvider>
		</GoogleOAuthProvider>
	);
};

const SessionFallback: FC = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<ProgressSpinner />
		</div>
	);
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: minutesToMilliseconds(60),
			gcTime: hoursToMilliseconds(24),
			retry: (failureCount, error) => {
				const isNetworkError = isAxiosError(error) && !error.response;
				if (failureCount > 3) {
					return false;
				}
				return isNetworkError;
			}
		}
	}
});

export default App;
