'use client';

import { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    title: '10 Best Affiliate Marketing Strategies for 2023',
    category: 'Audience Building',
    date: 'Jul 15, 2023',
    description: 'Learn the top strategies that successful affiliate marketers are using to maximize their earnings...',
    views: '1,245 views',
    status: 'Published',
  },
  {
    id: 2,
    title: 'How to Create High-Converting Product Reviews',
    category: 'Email Marketing',
    date: 'Jul 10, 2023',
    description: 'Discover the secrets to writing product reviews that actually convert visitors into buyers.',
    views: '987 views',
    status: 'Published',
  },
  {
    id: 3,
    title: 'Email Marketing Strategies for Affiliate Marketers',
    category: 'Audience Building',
    date: 'Jun 15, 2023',
    description: 'How to build and leverage an email list to boost your affiliate marketing earnings.',
    views: 'No views yet',
    status: 'Draft',
  },
  {
    id: 4,
    title: 'How to Create High-Converting Product Reviews',
    category: 'Email Marketing',
    date: 'Jul 10, 2023',
    description: 'Discover the secrets to writing product reviews that actually convert visitors into buyers.',
    views: '987 views',
    status: 'Published',
  },
  {
    id: 5,
    title: '10 Best Affiliate Marketing Strategies for 2023',
    category: 'Audience Building',
    date: 'Jul 15, 2023',
    description: 'Learn the top strategies that successful affiliate marketers are using to maximize their earnings...',
    views: '1,245 views',
    status: 'Published',
  },
  {
    id: 6,
    title: 'How to Create High-Converting Product Reviews',
    category: 'Email Marketing',
    date: 'Jul 10, 2023',
    description: 'Discover the secrets to writing product reviews that actually convert visitors into buyers.',
    views: '987 views',
    status: 'Published',
  },
  {
    id: 7,
    title: 'Email Marketing Strategies for Affiliate Marketers',
    category: 'Content creation',
    date: 'Jun 15, 2023',
    description: 'How to build and leverage an email list to boost your affiliate marketing earnings.',
    views: 'No views yet',
    status: 'Draft',
  },
  {
    id: 8,
    title: 'How to Create High-Converting Product Reviews',
    category: 'Social media',
    date: 'Jul 10, 2023',
    description: 'Discover the secrets to writing product reviews that actually convert visitors into buyers.',
    views: '987 views',
    status: 'Published',
  },
  {
    id: 9,
    title: '10 Best Affiliate Marketing Strategies for 2023',
    category: 'Content creation',
    date: 'Jul 15, 2023',
    description: 'Learn the top strategies that successful affiliate marketers are using to maximize their earnings...',
    views: '1,245 views',
    status: 'Published',
  },
  {
    id: 11,
    title: 'How to Create High-Converting Product Reviews',
    category: 'SEO',
    date: 'Jul 10, 2023',
    description: 'Discover the secrets to writing product reviews that actually convert visitors into buyers.',
    views: '987 views',
    status: 'Published',
  },
  {
    id: 12,
    title: 'Email Marketing Strategies for Affiliate Marketers',
    category: 'Content creation',
    date: 'Jun 15, 2023',
    description: 'How to build and leverage an email list to boost your affiliate marketing earnings.',
    views: 'No views yet',
    status: 'Draft',
  },
  {
    id: 13,
    title: 'How to Create High-Converting Product Reviews',
    category: 'SEO',
    date: 'Jul 10, 2023',
    description: 'Discover the secrets to writing product reviews that actually convert visitors into buyers.',
    views: '987 views',
    status: 'Published',
  },
];

const categories = ['All Categories', 'Audience Building', 'SEO', 'Email Marketing', 'Content creation', 'Social media'];
const statuses = ['Published', 'Draft'];

export default function BlogPage() {
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('Published');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
 
//   const totalPages = 3;
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const filteredPosts = mockPosts
    .filter(
      (post) =>
        (category === 'All Categories' || post.category === category) &&
        (status === '' || post.status.toLowerCase() === status.toLowerCase()) &&
        post.title.toLowerCase().includes(search.toLowerCase())
    );

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-lg font-bold">Blog</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm">
            <Plus className="h-4 w-4" />
            New Post
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded text-sm"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select
          className="border px-4 py-2 rounded text-sm"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          {statuses.map((stat) => (
            <option key={stat}>{stat}</option>
          ))}
        </select>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-400">📷</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-black text-white text-[10px] px-2 py-[2px] rounded-full">{post.category}</span>
                <span className="flex items-center gap-1">{post.date}</span>
              </div>
              <h3 className="text-sm font-semibold leading-snug">{post.title}</h3>
              <p className="text-xs text-gray-500">{post.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{post.views}</span>
                <span
                  className={`px-2 py-[2px] rounded-full text-[10px] ${
                    post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {post.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10 text-sm">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className="px-4 py-1.5 bg-black text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className="px-4 py-1.5 bg-black text-white rounded-full"
        >
          {num}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-4 py-1.5 bg-black text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
    </div>
  );
}
