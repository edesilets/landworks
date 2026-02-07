import { Link } from "react-router";

export function Header() {
	return (
		<header className="bg-blue-600 text-white p-4 shadow-md">
			<nav className="container mx-auto flex items-center justify-between">
				<h1 className="text-2xl font-bold">
					<Link to="/" className="hover:text-blue-200">
						Desilets Landworks
					</Link>
				</h1>
				<ul className="flex gap-6">
					<li>
						<Link to="/" className="hover:text-blue-200 transition">
							Home
						</Link>
					</li>
					<li>
						<Link to="/aboutus" className="hover:text-blue-200 transition">
							About Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}