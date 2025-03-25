"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:underline">Back to Product</a> | Electronics | <span className="text-blue-500">Soundcore</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Images */}
        <div>
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image src="/headphones.jpg" alt="Product" layout="fill" objectFit="cover" />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/headphones1.jpg" alt="Thumbnail" layout="fill" objectFit="cover" />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/headphones2.jpg" alt="Thumbnail" layout="fill" objectFit="cover" />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/headphones3.jpg" alt="Thumbnail" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        {/* Right - Product Details */}
        <div>
          <h1 className="text-2xl font-semibold">Wireless Noise-Cancelling Headphones</h1>
          <div className="flex items-center gap-2 text-green-600 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">(4.8) 143 reviews</span>
          </div>

          {/* Price and Discount */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold">$299.99</span>
            <span className="text-gray-500 line-through">$599.99</span>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">14% off</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">In stock</span>
          </div>

          {/* Key Features */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>✔ Active Noise Cancellation</li>
            <li>✔ 30-hour battery life</li>
            <li>✔ Bluetooth 5.0 connectivity</li>
            <li>✔ High resolution audio</li>
            <li>✔ Comfortable memory foam cushion</li>
            <li>✔ Quick charge (10min charge = 5 hours playback)</li>
          </ul>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-lg px-2 py-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-gray-600"
              >
                <AiOutlineMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-gray-600"
              >
                <AiOutlinePlus />
              </button>
            </div>
            <span className="text-gray-500">Total: ${299.99 * quantity}</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2">
              <BsCart /> Add to Cart
            </button>
            <button className="flex-1 bg-black text-white px-4 py-2 rounded">Buy Now →</button>
          </div>

          {/* Affiliate Commission */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-700">💲 Affiliate commission <span className="text-green-600">10%</span></p>
            <p className="text-sm text-gray-500">Earn $12.99 for each sale through your referral link.</p>
            <div className="mt-2 flex items-center justify-between bg-white border px-2 py-1 rounded-lg">
              <span className="text-sm text-gray-500">https://affiliate.com/ref/user1234</span>
              <button className="text-blue-500 text-sm">Copy</button>
            </div>
          </div>

          {/* Shipping & Warranty */}
          <div className="mt-6 text-sm text-gray-600">
            <p>🚚 Free Shipping | Estimated delivery: 2-3 business days</p>
            <p>✅ 2-year manufacturer warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
