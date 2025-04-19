'use client';

import React from 'react';
import { Search, Package } from 'lucide-react';
import { AdminUseStatusStore } from '@/store/nav';

const products = [
  {
    id: 1,
    name: 'Wireless Gaming Headset',
    seller: 'AudioTech',
    price: 129.99,
    status: 'approved',
    date: '2023-08-15',
  },
  {
    id: 2,
    name: 'Ergonomic Keyboard',
    seller: 'KeyMaster',
    price: 79.99,
    status: 'pending',
    date: '2023-08-10',
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    seller: 'MouseCorp',
    price: 49.99,
    status: 'rejected',
    date: '2023-08-05',
  },
  {
    id: 4,
    name: 'Gaming Monitor',
    seller: 'VisionTech',
    price: 299.99,
    status: 'approved',
    date: '2023-08-01',
  },
];

const ProductManagement = () => {
  const pendingProduct = products.find((p) => p.status === 'pending');
     const { adminStatus, setAdminStatus } = AdminUseStatusStore();
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Product Management</h1>
        <p className="text-gray-600">
          Manage, approve, and track products across your platform.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Products</p>
            <p className="text-2xl font-bold">4</p>
            <p className="text-sm text-gray-400">+3 this week</p>
          </div>
          <Package className="text-gray-300" />
        </div>
        <div className="bg-white border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Pending Approval</p>
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-gray-400">+2 this week</p>
          </div>
          <Package className="text-gray-300" />
        </div>
      </div>

      {/* Pending Approval Section */}
      {pendingProduct && (
        <div className="bg-white border rounded-lg p-4 space-y-2">
          <h2 className="text-lg font-semibold">Pending Approval</h2>
          <p className="text-sm text-gray-500">
            Products awaiting your review and approval
          </p>
          <div className="border rounded-md p-4 space-y-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{pendingProduct.name}</p>
                <p className="text-sm text-gray-500">
                  Seller: {pendingProduct.seller}
                </p>
                <p className="mt-1 font-semibold">${pendingProduct.price.toFixed(2)}</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                Pending
              </span>
            </div>
            <div className="flex gap-2 mt-3 justify-end">
              <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                Reject
              </button>
              <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
                Approve
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Table Section */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Product Management</h2>
            <p className="text-sm text-gray-500">Manage all products on your platform</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center gap-1" onClick={() => setAdminStatus('add_product')}>
            <Package size={16} /> Add Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute top-2.5 left-3 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-md pl-9 pr-3 py-2 text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2 pr-4">Product</th>
                <th className="py-2 pr-4 hidden sm:table-cell">Seller</th>
                <th className="py-2 pr-4 hidden sm:table-cell">Price</th>
                <th className="py-2 pr-4 hidden sm:table-cell">Status</th>
                <th className="py-2 pr-4 hidden sm:table-cell">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-3 pr-4">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-xs text-gray-400">ID: #{product.id}</p>
                    </div>
                  </td>
                  <td className="py-3 pr-4 hidden sm:table-cell">{product.seller}</td>
                  <td className="py-3 pr-4 hidden sm:table-cell">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-3 pr-4 hidden sm:table-cell">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        product.status === 'approved'
                          ? 'bg-green-100 text-green-700'
                          : product.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 pr-4 hidden sm:table-cell">{product.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
