import React from 'react';

const ServicesPage = () => {
  return (
		<div className="container mx-auto px-4 py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-white-800 mb-6">
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
					<div className="bg-white rounded-lg p-6">
						<h3 className="text-xl font-semibold text-blue-800 mb-2">
							Material Delivery
						</h3>
						<p className="text-gray-600">
							Gravel, Peastone, loom, you name it we deliver it. 14K per load
						</p>
					</div>

					<div className="bg-white rounded-lg p-6">
						<h3 className="text-xl font-semibold text-blue-800 mb-2">
							Land Clearing
						</h3>
						<p className="text-gray-600">
							Need trees removed? Ground leveled? Over grown shrubs. We've got you covered
						</p>
					</div>
					
					<div className="bg-green-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-green-800 mb-2">
							Site Preperations
						</h3>
						<p className="text-gray-600">
							Need soil prepeed or land leveled before a cement pad is poured?
						</p>
					</div>
					
					<div className="bg-yellow-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-black-800 mb-2">
							Snow Removal
						</h3>
						<p className="text-gray-600">
							Need your driveway, or parking lot cleared? We can get that done in a couple 8 foot swipes!
						</p>
					</div>
				</div>
			</div>
		</div>
  );
};

export default ServicesPage;