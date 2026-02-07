import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Home - Desilets Landworks" },
		{ name: "Land Modifying", content: "Welcome to Desilets Landworks" },
	];
}

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-800 mb-6">
					Welcome to Desilets Landworks
				</h1>
				
				<div className="bg-white rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Professional Landscaping Services
					</h2>
					<p className="text-gray-600 mb-4">
						We provide top-quality landscaping and land management services 
						to transform your outdoor spaces into beautiful, functional areas.
					</p>
					<p className="text-gray-600">
						With years of experience and a commitment to excellence, 
						we're here to bring your vision to life.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-blue-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-blue-800 mb-2">
							Design
						</h3>
						<p className="text-gray-600">
							Creative landscape design tailored to your needs and preferences.
						</p>
					</div>
					
					<div className="bg-green-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-green-800 mb-2">
							Installation
						</h3>
						<p className="text-gray-600">
							Expert installation of plants, hardscapes, and outdoor features.
						</p>
					</div>
					
					<div className="bg-amber-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-amber-800 mb-2">
							Maintenance
						</h3>
						<p className="text-gray-600">
							Regular maintenance to keep your landscape looking its best.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}