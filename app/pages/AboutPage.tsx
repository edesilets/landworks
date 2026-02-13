export function AboutPage () {
  return (
    <div>
		<div className="container mx-auto px-4 py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-800 mb-6">
					About Us
				</h1>
				
				<div className="bg-white rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Our Story
					</h2>
					<p className="text-gray-600 mb-4">
						Desilets Landworks was founded with a passion for creating beautiful 
						outdoor spaces that bring joy and value to our clients' properties.
					</p>
					<p className="text-gray-600 mb-4">
						We believe that every landscape has potential, and our mission is to 
						unlock that potential through thoughtful design, quality craftsmanship, 
						and attentive service.
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-md p-8 mb-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Our Values
					</h2>
					<ul className="space-y-3 text-gray-600">
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">✓</span>
							<span><strong>Quality:</strong> We never compromise on the quality of our work</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">✓</span>
							<span><strong>Integrity:</strong> Honest communication and transparent pricing</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">✓</span>
							<span><strong>Creativity:</strong> Innovative solutions for every project</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">✓</span>
							<span><strong>Customer Focus:</strong> Your satisfaction is our priority</span>
						</li>
					</ul>
				</div>

				<div className="bg-blue-50 rounded-lg p-8">
					<h2 className="text-2xl font-semibold text-gray-700 mb-4">
						Get in Touch
					</h2>
					<p className="text-gray-600 mb-4">
						Ready to start your landscaping project? We'd love to hear from you!
					</p>
					<p className="text-gray-700">
						Email us at:{" "}
						<a 
							href="mailto:chad@Desiletslandworks.com" 
							className="text-blue-600 hover:text-blue-800 font-semibold"
						>
							chad@Desiletslandworks.com
						</a>
					</p>
				</div>
			</div>
		</div>
    </div>
  );
};

export default AboutPage;