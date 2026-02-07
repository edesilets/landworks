import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
	index("routes/HomeRoute.tsx"),
	route("aboutus", "routes/AboutUsRoute.tsx"),
] satisfies RouteConfig;