export function Footer() {
	return (
		<footer className="bg-gray-800 text-white p-6 mt-auto">
			<div className="container mx-auto text-center">
				<p className="text-gray-300">
					Contact us:{" "}
					<a 
						href="mailto:chad@desiletslandworks.com" 
						className="text-blue-400 hover:text-blue-300 transition"
					>
						chad@desiletslandworks.com
					</a>
				</p>
				<p className="text-gray-400 text-sm mt-2">
					© {new Date().getFullYear()} Desilets Landworks. All rights reserved.
				</p>
			</div>
		</footer>
	);
}