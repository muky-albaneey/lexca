"use client";import { useState } from 'react';
import { Copy, Share2 } from 'lucide-react';

const generateMockReferrals = (count = 42) => {
  const names = ['Sarah Johnson', 'Michael Chen', 'Emma Williams', 'David Rodriguez', 'Lisa Thompson'];
  const emails = ['sarah.j@example.com', 'michael.c@example.com', 'emma.w@example.com', 'david.r@example.com', 'lisa.t@example.com'];
  const statuses = ['Active', 'Inactive'];
  const referrals = [];

  for (let i = 0; i < count; i++) {
    referrals.push({
      name: names[i % names.length],
      email: emails[i % emails.length],
      joined: `2023-${(i % 12 + 1).toString().padStart(2, '0')}-${(i % 28 + 1).toString().padStart(2, '0')}`,
      status: statuses[i % statuses.length],
      earnings: Math.floor(Math.random() * 5000) + 500,
      commission: Math.floor(Math.random() * 500) + 50,
    });
  }

  return referrals;
};

export default function ReferralsDashboard() {
  const referralsPerPage = 5;
  const [page, setPage] = useState(1);
  const referrals = generateMockReferrals(42);

  const totalPages = Math.ceil(referrals.length / referralsPerPage);
  const paginatedReferrals = referrals.slice((page - 1) * referralsPerPage, page * referralsPerPage);

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Referrals</h1>
        <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
          <Share2 size={16} /> Invite Friends
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Total Referrals</p>
          <h2 className="text-2xl font-bold">{referrals.length}</h2>
          <p className="text-sm text-green-500">+8 from last month</p>
        </div>
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Active Referrals</p>
          <h2 className="text-2xl font-bold">
            {referrals.filter(r => r.status === 'Active').length}
          </h2>
          <p className="text-sm text-green-500">66% of total referrals</p>
        </div>
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Referral Earnings</p>
          <h2 className="text-2xl font-bold">$1,240.50</h2>
          <p className="text-sm text-green-500">+320.75 from last month</p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="border p-4 rounded-xl mb-6">
        <h2 className="font-semibold mb-2">Your Referral Link</h2>
        <p className="text-sm text-gray-500 mb-2">Share this link with friends to earn 10% of their earnings for the first year.</p>
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
          <div className="flex-grow relative w-full">
            <input
              type="text"
              value="https://affiliatehub.com/ref/johndoe123"
              readOnly
              className="w-full border p-2 rounded bg-gray-100 text-sm"
            />
            <button className="absolute top-2 right-2">
              <Copy size={16} />
            </button>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
            <Share2 size={16} /> Share
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">Earn 10% commission on all referral earnings</p>
      </div>

      {/* Referral History */}
      <div className="border p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Referral History</h2>
        <p className="text-sm text-gray-500 mb-4">Track the performance of your referrals.</p>

        {/* Header row */}
        <div className="hidden md:grid grid-cols-6 font-semibold border-b py-2">
          <p>Name</p>
          <p>Email</p>
          <p>Joined</p>
          <p>Status</p>
          <p>Earnings</p>
          <p>Your Commission</p>
        </div>

        {/* Data rows */}
        {paginatedReferrals.map((ref, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-6 gap-1 md:gap-0 border-b py-2 text-sm">
            <p><span className="md:hidden font-semibold">Name </span>{ref.name}</p>
            <p><span className="md:hidden font-semibold">Email </span>{ref.email}</p>
            <p><span className="md:hidden font-semibold">Joined </span>{ref.joined}</p>
            <p>
              <span className="md:hidden font-semibold">Status </span>
              <span className={`px-2 py-1 text-xs rounded-full ${ref.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                {ref.status}
              </span>
            </p>
            <p><span className="md:hidden font-semibold">Earnings </span>${ref.earnings.toFixed(2)}</p>
            <p><span className="md:hidden font-semibold">Your Commission </span>${ref.commission.toFixed(2)}</p>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <p>
            Showing {(page - 1) * referralsPerPage + 1} to {Math.min(page * referralsPerPage, referrals.length)} of {referrals.length} referrals
          </p>
          <div className="flex gap-2">
            <button
              className="border px-3 py-1 rounded disabled:opacity-50"
              disabled={page === 1}
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <button
              className="border px-3 py-1 rounded disabled:opacity-50"
              disabled={page === totalPages}
              onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
