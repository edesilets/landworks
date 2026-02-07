import type { Route } from "./+types/underconstructionroute";
import {UnderConstructionPage} from "../pages/UnderConstructionPage"

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Home - Desilets Landworks" },
		{ name: "Land Modifying", content: "Welcome to Desilets Landworks" },
	];
}

export default function UnderConstructionRoute() {
	return (<UnderConstructionPage />);
}