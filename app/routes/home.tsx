import type { Route } from "./+types/home";
import { LandingPage } from "../pages/landingPage";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Desilets Land Works" },
		{ name: "Land Modifying", content: "Welcome to Desilets Land Works" },
	];
}

export default function Home({ }: Route.ComponentProps) {
	return <LandingPage />;
	// return <Welcome message={loaderData.message} />;
}
