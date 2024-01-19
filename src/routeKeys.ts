type RouteKeys = Record<string, (...args: any[]) => string>;

const routeKeys = {
	home: () => "/",
	second: () => "/second-page"
} satisfies RouteKeys;

export default routeKeys;
