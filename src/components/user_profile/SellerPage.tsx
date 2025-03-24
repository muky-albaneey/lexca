"use client";import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: "$249.99",
    rating: 4.8,
    image: "/headphones1.jpg",
  },
  {
    id: 2,
    name: "Bluetooth Over-Ear Headphones",
    price: "$179.99",
    rating: 4.6,
    image: "/headphones2.jpg",
  },
  {
    id: 3,
    name: "Premium True Wireless Earbuds",
    price: "$129.99",
    rating: 4.5,
    image: "/earbuds.jpg",
  },
  {
    id: 4,
    name: "Studio Monitor Headphones",
    price: "$199.99",
    rating: 4.7,
    image: "/monitor-headphones.jpg",
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: "$89.99",
    rating: 4.8,
    image: "/bluetooth-speaker.jpg",
  },
  {
    id: 6,
    name: "Home Theater Sound System",
    price: "$399.99",
    rating: 4.9,
    image: "/sound-system.jpg",
  },
];

export default function SellerPage() {
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="relative w-full h-40 md:h-64">
        <img
          src="/header-bg.jpg"
          alt="Header Background"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute top-4 left-4">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Seller Info */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold">AudioTech Pro</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <span>⭐ 4.8 (1,156 reviews)</span>
            <span className="text-sm px-2 py-1 bg-gray-200 rounded-md">
              Electronics
            </span>
          </div>
          <div className="text-gray-500 mt-1">
            42 Products · Joined on May 12, 2021 · San Francisco, CA
          </div>

          {/* Verification */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-green-500">✔️ Verified Seller</span>
            <span className="text-green-500">✔️ Top Rated</span>
            <span className="text-green-500">✔️ Fast Shipper</span>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-gray-600">
            <p>📧 partners@audiotechpro.com</p>
            <p>🌐 audiotechpro.com</p>
          </div>
        </div>

        {/* Affiliate Program */}
        <div className="mt-6 md:mt-0">
          <div className="text-gray-600">
            <p>Commission Rate: <span className="font-medium">12%–15%</span></p>
            <p>Payment Terms: <span className="font-medium">Net 30</span></p>
          </div>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg">
            Become an Affiliate
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-8">
        {/* Sorting */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Products ({products.length})</h2>
          <select
            className="border rounded-md p-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Newest">Newest</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative border rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <div className="flex items-center mt-2">
                  <span>⭐ {product.rating}</span>
                  <span className="text-gray-400 ml-2">
                    by AudioTech Pro
                  </span>
                </div>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
