import type { Route } from "./+types/home";
import ServicesPage from "~/pages/ServicesPage";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Home - Desilets Landworks" },
		{ name: "Land Modifying", content: "Welcome to Desilets Landworks" },
	];
}

export default function Home() {
	return (<ServicesPage	/>);
}