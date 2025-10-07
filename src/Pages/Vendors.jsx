import React from 'react';

const Vendors = () => {
  const vendors = [
    {
      name: 'TechCorp Solutions',
      category: 'Technology',
      rating: 4.8,
      description: 'Leading provider of enterprise software solutions',
    },
    {
      name: 'Global Logistics',
      category: 'Shipping',
      rating: 4.6,
      description: 'Worldwide shipping and logistics services',
    },
    {
      name: 'Creative Design Co',
      category: 'Design',
      rating: 4.9,
      description: 'Professional design and branding services',
    },
    {
      name: 'Data Analytics Pro',
      category: 'Analytics',
      rating: 4.7,
      description: 'Advanced data analytics and insights',
    },
    {
      name: 'Cloud Services Inc',
      category: 'Cloud',
      rating: 4.8,
      description: 'Reliable cloud infrastructure and hosting',
    },
    {
      name: 'Marketing Masters',
      category: 'Marketing',
      rating: 4.9,
      description: 'Full-service digital marketing agency',
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Trusted Vendors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified vendors and partners. Build strong business relationships and grow together.
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {vendor.name.charAt(0)}
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {vendor.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {vendor.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {vendor.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-900 font-semibold">{vendor.rating}</span>
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Vendor CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Vendor</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our network of trusted vendors and reach thousands of potential customers
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vendors;