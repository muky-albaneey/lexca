
"use client";
import { AiOutlineArrowLeft } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { useState } from 'react';
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: 'Electronics',
    products: 245,
    sellers: 42,
    description: 'Discover the latest gadgets, audio equipment, smart home devices, and more from top brands.',
    tags: ['Audio', 'Computers', 'Smart Home'],
    icon: '💻',
    popular: true,
    bg: '#DBEAFE',
  },
  {
    id: 2,
    name: 'Fashion',
    products: 378,
    sellers: 67,
    description: 'Explore trendy clothing, accessories, footwear, and jewelry for all ages and styles.',
    tags: ['Men’s Clothing', 'Women’s Clothing', 'Shoes'],
    icon: '🛍️',
    popular: true,
    bg: '#F3E8FF',
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    products: 312,
    sellers: 53,
    description: 'Find everything you need for your home, from kitchen appliances to furniture and home decor.',
    tags: ['Kitchen Appliances', 'Cookware', 'Furniture'],
    icon: '🏠',
    popular: true,
    bg: '#FEF3C7',
  },
  {
    id: 4,
    name: 'Sports & Outdoors',
    products: 215,
    sellers: 44,
    description: 'Get active with sports equipment, outdoor gear, fitness accessories, and activewear.',
    tags: ['Fitness', 'Camping', 'Team Sports'],
    icon: '🏅',
    bg: '#FEE2E2',
  },
  {
    id: 5,
    name: 'Books & Media',
    products: 423,
    sellers: 29,
    description: 'Expand your knowledge with books, e-books, audiobooks, and other media across all genres.',
    tags: ['Fiction', 'Non-Fiction', 'Children’s Books'],
    icon: '📚',
    bg: '#D1FAE5',
  },
  {
    id: 6,
    name: 'Toys & Games',
    products: 187,
    sellers: 32,
    description: 'Find fun toys, games, puzzles, and entertainment for children of all ages.',
    tags: ['Action Figures', 'Board Games', 'Educational Toys'],
    icon: '🧸',
    bg: '#FEF9C3',
  },
  {
    id: 7,
    name: 'Automotive',
    products: 134,
    sellers: 23,
    description: 'Keep your vehicle running smoothly with auto parts, accessories, tools, and car care.',
    tags: ['Parts & Accessories', 'Tools & Equipment', 'Car Care'],
    icon: '🚗',
    bg: '#F1F5F9',
  },
  {
    id: 8,
    name: 'Pet Supplies',
    products: 142,
    sellers: 19,
    description: 'Find everything your pets need, from food and treats to toys, beds, and grooming supplies.',
    tags: ['Dog Supplies', 'Cat Supplies', 'Fish Supplies'],
    icon: '🐶',
     bg: '#FFEDD5',
  },
  {
    id: 9,
    name: 'Baby & Kids',
    products: 168,
    sellers: 24,
    description: 'Shop essentials for babies and children, including clothing, toys, gear, and nursery items.',
    tags: ['Baby Gear', 'Diapers & Wipes', 'Feeding'],
    icon: '👶',
     bg: '#E0F2FE',
  },
  {
    id: 10,
    name: 'Beauty & Personal Care',
    products: 186,
    sellers: 38,
    description: 'Shop premium skincare, makeup, haircare, and personal care products from trusted brands.',
    tags: ['Skincare', 'Makeup', 'Haircare'],
    icon: '💄',
     bg: '#FCE7F3',
  },
  {
    id: 11,
    name: 'Health & Wellness',
    products: 156,
    sellers: 27,
    description: 'Support your wellbeing with vitamins, supplements, fitness trackers, and wellness products.',
    tags: ['Vitamins', 'Supplements', 'Medical Supplies'],
    icon: '🩺',
     bg: '#DCFCE7',
  },
  {
    id: 12,
    name: 'Office & School Supplies',
    products: 129,
    sellers: 18,
    description: 'Stock up on office essentials, stationery, school supplies, and workspace accessories.',
    tags: ['Writing Supplies', 'Paper Products', 'Office Furniture'],
    icon: '📎',
    bg: '#E0E7FF',
  },
];

export default function BrowseAllCategories() {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Browse Categories</h2>
      <p className="text-center mb-6">
        Explore our wide range of product categories and find the perfect items to promote as an affiliate.
      </p>
      
      {/* Search */}
      <div className="w-full md:w-[50%] m-auto relative flex ">
        <AiOutlineSearch className="absolute left-2 top-3" />
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 px-11 border border-gray-300 rounded-md mb-6"
      />
      </div>

      {/* Categories */}
      <div className='flex justify-between p-5'>
        <div className="flex items-center gap-2">
        <AiOutlineArrowLeft />
        back
        </div>
        <h1>All Categories</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="rounded-lg shadow-sm p-4 hover:shadow-lg transition">
            <div className="flex justify-between">
            <div className={`text-2xl rounded-2xl p-2`} style={{ backgroundColor: category.bg }}>
                {category.icon}
              </div>
              {category.popular && <span className="bg-[#E5E5E5] h-5 flex items-center rounded-full px-2">Popular</span>}
            </div>
            <h3 className="text-lg font-bold my-2">{category.name}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
            <div className="flex flex-wrap mt-2">
              {category.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 mr-2 mb-2 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <span  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 mr-2 mb-2 rounded">
                 +2more
                </span>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              
              <Link href='/category/1'>Browse Category</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
