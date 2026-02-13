import landworksColor from '../assets/landworks-color.png';

export function UnderConstructionPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-black-900 to-yellow-700 flex items-center justify-center px-4">
			<div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center">
				<div className="mb-6">
			        <img src={landworksColor} alt="Desilets Landworks Logo" style={{ maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto'}} />
					<h1 className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
						🚧 Under Construction 🚧
					</h1>
				</div>
				
				<p className="text-xl text-gray-600 mb-6">
					From the ground up. Our new website is coming soon.
				</p>
				
				<p className="text-gray-500 mb-8">
					Our new website is coming soon. In the meantime, feel free to reach out to us.
				</p>
				
				<div className="border-t border-gray-200 pt-8">
					<p className="text-gray-700 mb-2 font-semibold">
						Contact Us:
					</p>
					<a 
						href="mailto:chad@desiletslandworks.com" 
						className="text-blue-600 hover:text-blue-800 text-lg font-medium transition"
					>
						chad@desiletslandworks.com
					</a>
				</div>
				<div className="mt-8 text-sm text-gray-400">
					© {new Date().getFullYear()} Desilets Landworks. All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default UnderConstructionPage;