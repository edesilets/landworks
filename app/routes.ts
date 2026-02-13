import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

// When you add a new route file you must rebuild the project. Otherwise css will not be found.
export default [
	index("routes/UnderConstructionRoute.tsx"),
	route("home","routes/HomeRoute.tsx"),
	route("aboutus", "routes/AboutUsRoute.tsx"),
	route("services", "routes/ServicesRoute.tsx"),
] satisfies RouteConfig;