import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      title: '10 Ways to Optimize Your Business Operations',
      excerpt: 'Discover practical strategies to streamline your workflow and boost productivity across your organization.',
      author: 'Sarah Johnson',
      date: 'Oct 5, 2025',
      category: 'Productivity',
      readTime: '5 min read',
    },
    {
      title: 'The Future of Digital Transformation',
      excerpt: 'Explore emerging trends and technologies that are reshaping how businesses operate in the digital age.',
      author: 'Michael Chen',
      date: 'Oct 3, 2025',
      category: 'Technology',
      readTime: '7 min read',
    },
    {
      title: 'Building Strong Vendor Relationships',
      excerpt: 'Learn the key principles of creating and maintaining successful partnerships with your vendors.',
      author: 'Emily Rodriguez',
      date: 'Sep 28, 2025',
      category: 'Business',
      readTime: '6 min read',
    },
    {
      title: 'Data-Driven Decision Making',
      excerpt: 'How to leverage analytics and insights to make better business decisions and drive growth.',
      author: 'David Kim',
      date: 'Sep 25, 2025',
      category: 'Analytics',
      readTime: '8 min read',
    },
    {
      title: 'Customer Success Stories: TechCorp',
      excerpt: 'How TechCorp increased efficiency by 40% using Zunday\'s automation features.',
      author: 'Jessica Williams',
      date: 'Sep 20, 2025',
      category: 'Case Study',
      readTime: '4 min read',
    },
    {
      title: 'Security Best Practices for Modern Businesses',
      excerpt: 'Essential security measures every business should implement to protect their data and systems.',
      author: 'Alex Thompson',
      date: 'Sep 15, 2025',
      category: 'Security',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Productivity', 'Technology', 'Business', 'Analytics', 'Case Study', 'Security'];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, tips, and insights to help your business thrive in the digital age.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                      <p className="text-xs text-gray-500">{blog.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;