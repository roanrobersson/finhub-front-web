import { QueryClient, useMutation, UseMutationOptions } from "@tanstack/react-query";

import AuthService from "services/AuthService";

const queryKeys = {
	// profile: () => ["auth/profile"]
} as const;

type UseSignInVariables = Parameters<typeof AuthService.signIn>[0];

export const useSignIn = (
	options?: Omit<UseMutationOptions<unknown, unknown, UseSignInVariables>, "mutationFn">,
	queryClient?: QueryClient
) => {
	return useMutation(
		{
			mutationFn: AuthService.signIn,
			...options
		},
		queryClient
	);
};

type UseSignInWithGoogleVariables = Parameters<typeof AuthService.signInWithGoogle>[0];

export const useSignInWithGoogle = (
	options?: Omit<UseMutationOptions<unknown, unknown, UseSignInWithGoogleVariables>, "mutationFn">,
	queryClient?: QueryClient
) => {
	return useMutation(
		{
			mutationFn: AuthService.signInWithGoogle,
			...options
		},
		queryClient
	);
};

type UseSignUpVariables = Parameters<typeof AuthService.signUp>[0];

export const useSignUp = (
	options?: Omit<UseMutationOptions<unknown, unknown, UseSignUpVariables>, "mutationFn">,
	queryClient?: QueryClient
) => {
	return useMutation(
		{
			mutationFn: AuthService.signUp,
			...options
		},
		queryClient
	);
};

type UseSignOutVariables = Parameters<typeof AuthService.signIn>[0];

export const useSignOut = (
	options?: Omit<UseMutationOptions<unknown, UseSignOutVariables>, "mutationFn">,
	queryClient?: QueryClient
) => {
	return useMutation(
		{
			mutationFn: AuthService.signOut,
			...options
		},
		queryClient
	);
};
