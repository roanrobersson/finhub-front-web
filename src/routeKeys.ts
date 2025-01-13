type RouteKeys = Record<string, (...args: any[]) => string>;

const routeKeys = {
	home: () => "/",
	signIn: () => "/sign-in",
	signUp: () => "/sign-up",
	forgotPassword: () => "/forgot-password",
	unauthorized: () => "/unauthorized",
	notFound: () => "/not-found"
} satisfies RouteKeys;

export default routeKeys;
