import { Link } from "react-router";
import { Icon } from "../media/Icon"

export function Header() {
	return (
		<header className="bg-black-600 text-white p-4 shadow-md">
			<nav className="container mx-auto flex items-center justify-between">
				<Icon />
				<ul className="flex gap-6">
					<li>
						<Link to="/" className="hover:text-black-200 transition">
							Home
						</Link>
					</li>
					<li>
						<Link to="/aboutus" className="hover:text-black-200 transition">
							About Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}