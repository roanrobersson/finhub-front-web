import { createContext, FC, PropsWithChildren, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { useSignIn, useSignInWithGoogle, useSignOut } from "queries/authQueries";

import AuthService from "services/AuthService";

type Session = {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: {
		id: number;
		name: string;
		email: string;
		roles: string[];
		permissions: string[];
		picture: string | null;
	} | null;
	signInQuery: ReturnType<typeof useSignIn>;
	signInWithGoogleQuery: ReturnType<typeof useSignInWithGoogle>;
	signOutQuery: ReturnType<typeof useSignOut>;
};

const SessionContext = createContext<Session | undefined>(undefined);

type SessionProviderProps = PropsWithChildren<{
	fallback: ReactNode;
}>;

const SessionProvider: FC<SessionProviderProps> = ({ fallback, children }) => {
	const [user, setUser] = useState<Session["user"] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const signInQuery = useSignIn({
		onSuccess: async () => {
			const user = await AuthService.getProfile();
			setUser(user.data);
		}
	});
	const signInWithGoogleQuery = useSignInWithGoogle({
		onSuccess: async () => {
			const user = await AuthService.getProfile();
			setUser(user.data);
		}
	});
	const signOutQuery = useSignOut({
		onSuccess: () => {
			setUser(null);
		}
	});

	useEffect(() => {
		fetchProfile();
	}, []);

	const signOut = async (): Promise<void> => {};

	const fetchProfile = async () => {
		try {
			const user = await AuthService.getProfile();
			setUser(user.data);
		} catch (error) {
			// Do nothing
		} finally {
			setIsLoading(false);
		}
	};

	const session = useMemo(
		() => ({
			isAuthenticated: !!user,
			isLoading,
			user,
			signInQuery,
			signInWithGoogleQuery,
			signOutQuery
		}),
		[user, signInQuery, signInWithGoogleQuery, signOut]
	);

	return <SessionContext value={session}>{isLoading ? fallback : children}</SessionContext>;
};

const useSession = (): Session => {
	const session = useContext(SessionContext);

	if (!session) {
		throw new Error("useSession must be used within a SessionProvider");
	}

	return session;
};

export default useSession;

export { SessionContext, SessionProvider };

export type { Session };
