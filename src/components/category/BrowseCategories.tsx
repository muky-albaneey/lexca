'use client';

import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    description:
      'Discover the latest gadgets, audio equipment, smart home devices, and more from top electronics brands.',
    products: 245,
    icon: '💻',
  },
  {
    id: 2,
    name: 'Fashion',
    description:
      'Explore trendy clothing, accessories, footwear, and jewelry for all ages and styles.',
    products: 378,
    icon: '🛍️',
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    description:
      'Find everything you need for your home, from kitchen appliances to furniture and home decor.',
    products: 312,
    icon: '🏠',
  },
];

export default function BrowseCategories() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Browse Categories</h1>
        <p className="text-gray-500">
          Explore our wide range of product categories and find the perfect
          items to promote as an affiliate.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Popular Categories */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Popular Categories</h2>
        <button className="text-gray-500 hover:text-black flex items-center gap-1">
          View All
          <span>→</span>
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="border border-[#E5E5E5] rounded-xl shadow-sm hover:shadow-md transition p-5 cursor-pointer p-10"
          >
            <div className="flex items-start gap-4 flex-col">
              {/* Icon */}
              <div className="text-3xl">
                {category.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {category.description}
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                  <span>{category.products} Products</span>
                  <span className="flex items-center gap-1 text-blue-500 hover:text-blue-700">
                    Browse →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
