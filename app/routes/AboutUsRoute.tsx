import type { Route } from "./+types/aboutusroute";
import { AboutPage } from "../pages/AboutPage"

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Us - Desilets Landworks" },
		{ name: "description", content: "Learn more about Desilets Landworks" },
	];
}

export default function AboutUsRoute() {
	return (
		<AboutPage />
	);
}