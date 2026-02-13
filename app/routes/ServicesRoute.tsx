import type { Route } from "./+types/servicesroute";
import ServicesPage from "../pages/ServicesPage";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Services Provided Desilets Landworks" },
		{ name: "Land Modifying", content: "Services Desilets Landworks can provide" },
	];
}

export default function ServicesRoute() {
	return (<ServicesPage	/>);
}