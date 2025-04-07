'use client';

import { useState } from 'react';
import { MoreVertical, Copy } from 'lucide-react';

const allLinks = [
  {
    name: 'Summer Sale Campaign',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/s/summer1',
    clicks: 1245,
    conversions: 87,
    earnings: '$435.00',
  },
  {
    name: 'Tech Review Blog Post',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/t/tech-review',
    clicks: 876,
    conversions: 52,
    earnings: '$312.00',
  },
  {
    name: 'Holiday Gift Guide',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/h/gifts',
    clicks: 2134,
    conversions: 143,
    earnings: '$715.00',
  },
  {
    name: 'Home Office Essentials',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/h/office',
    clicks: 567,
    conversions: 31,
    earnings: '$186.00',
  },
  {
    name: 'Fitness Equipment',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/f/fitness',
    clicks: 789,
    conversions: 45,
    earnings: '$225.00',
  },
  {
    name: 'Outdoor Gear',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/o/outdoor',
    clicks: 345,
    conversions: 23,
    earnings: '$123.00',
  },
  {
    name: 'Kitchen Essentials',
    originalUrl: 'https://amazon.com',
    shortLink: 'https://affhub.co/k/kitchen',
    clicks: 654,
    conversions: 56,
    earnings: '$400.00',
  },
  // Add more data as needed...
];

export default function AffiliateLinks() {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(allLinks.length / perPage);
  const start = (page - 1) * perPage;
  const currentLinks = allLinks.slice(start, start + perPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Affiliate Links</h1>
        <button className="bg-black text-white px-4 py-2 rounded">+ Create Link</button>
      </div>

      <button className="mb-4 border px-4 py-1 rounded">All Links</button>

      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b">
          <p className="font-semibold text-lg">Your Affiliate Links</p>
          <p className="text-sm text-gray-500">Manage and track all your affiliate links in one place.</p>
        </div>

        <div className="hidden md:grid grid-cols-6 px-4 py-2 text-sm font-medium border-b">
          <p>Name</p>
          <p>Original URL</p>
          <p>Short Link</p>
          <p>Clicks</p>
          <p>Conversions</p>
          <p>Earnings</p>
        </div>

        {currentLinks.map((link, idx) => (
          <div
            key={start + idx}
            className="border-b hover:bg-gray-50 transition grid md:grid-cols-6 grid-cols-1 px-4 py-2 gap-2 text-sm"
          >
            <div>
              <p className="md:hidden font-medium text-gray-500">Name</p>
              <p className="font-medium">{link.name}</p>
            </div>
            <div>
              <p className="md:hidden font-medium text-gray-500">Original URL</p>
              <a href={link.originalUrl} className="text-blue-600 underline">
                {link.originalUrl}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <p className="md:hidden font-medium text-gray-500">Short Link</p>
                <span>{link.shortLink}</span>
              </div>
              <Copy size={14} className="cursor-pointer" />
            </div>
            <div>
              <p className="md:hidden font-medium text-gray-500">Clicks</p>
              {link.clicks.toLocaleString()}
            </div>
            <div>
              <p className="md:hidden font-medium text-gray-500">Conversions</p>
              {link.conversions}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="md:hidden font-medium text-gray-500">Earnings</p>
                {link.earnings}
              </div>
              <div className="relative">
                <button onClick={() => setDropdownIndex(start + idx === dropdownIndex ? null : start + idx)}>
                  <MoreVertical size={18} />
                </button>
                {dropdownIndex === start + idx && (
                  <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-28 text-sm z-10">
                    <button className="w-full px-4 py-2 hover:bg-gray-100">Edit link</button>
                    <button className="w-full px-4 py-2 text-red-600 hover:bg-gray-100">Delete link</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="px-4 py-2 text-sm text-gray-500">
          Showing {start + 1} to {Math.min(start + perPage, allLinks.length)} of {allLinks.length} links
        </div>

        <div className="flex justify-end gap-2 px-4 py-4">
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="border px-4 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            className="border px-4 py-1 rounded bg-black text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
