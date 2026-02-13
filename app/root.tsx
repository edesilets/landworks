import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { UnderConstructionPage } from "./pages/UnderConstructionPage";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export async function loader({ context }) {
  return {
    "UNDER_CONSTRUCTION": (context.cloudflare.env.UNDER_CONSTRUCTION.toLowerCase() === 'true'),
  };
}

export function Layout({ children } : { children: React.ReactNode }) {
	// Access Cloudflare environment variable
	const isUnderConstruction = useLoaderData<typeof loader>().UNDER_CONSTRUCTION;

	// If under construction, show only the construction page
	if (isUnderConstruction) {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="DeSilets Landworks - Coming Soon" />
					<Links />
				</head>
				<body>
					<main>
						<UnderConstructionPage />
					</main>
					{/* <ScrollRestoration /> */}
					<Scripts />
				</body>
			</html>
		);
	}

	// Normal layout when site is live
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Desilets Landworks - Professional Landscaping Services" />
				<meta name="keywords" content="landscaping,landworks,outdoor" />
				<Meta />
				<Links />
				<title>Desilets Landworks</title>
			</head>
			<body className="flex flex-col min-h-screen">
				<main className="flex-grow">
					{children}
				</main>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}