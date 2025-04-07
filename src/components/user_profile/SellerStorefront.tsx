"use client";

import { IoMdCheckmark } from "react-icons/io"; 
import { CiLocationOn } from "react-icons/ci"; 
import { AiOutlineCalendar, AiOutlineCodeSandbox } from "react-icons/ai"; 
import Image from 'next/image';
import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: '$249.99',
    rating: 4.8,
    image: '/headphones.svg',
  },
  {
    id: 2,
    name: 'Bluetooth Over-Ear Headphones',
    price: '$179.99',
    rating: 4.6,
    image: '/oraimo.svg',
  },
  {
    id: 3,
    name: 'Premium True Wireless Earbuds',
    price: '$129.99',
    rating: 4.5,
    image: '/earbuds.svg',
  },
  {
    id: 4,
    name: 'Studio Monitor Headphones',
    price: '$199.99',
    rating: 4.7,
    image: '/studio-headphones.svg',
  },
  {
    id: 5,
    name: 'Portable Bluetooth Speaker',
    price: '$89.99',
    rating: 4.4,
    image: '/speaker.svg',
  },
  {
    id: 6,
    name: 'Home Theater Sound System',
    price: '$399.99',
    rating: 4.9,
    image: '/sound-system.svg',
  },
];

const sortingOptions = [
  "Newest",
  "Highest Rating",
  "Lowest Rating",
  "Alphabetical (A-Z)",
  "Alphabetical (Z-A)",
];

const SellerStorefront = () => {
  const [sortBy, setSortBy] = useState("Newest");
  const [products, setProducts] = useState(productsData); // ✅ FIXED
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSort = (option) => {
    setSortBy(option);
    let sortedProducts = [...products];

    switch (option) {
      case "Highest Rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "Lowest Rating":
        sortedProducts.sort((a, b) => a.rating - b.rating);
        break;
      case "Alphabetical (A-Z)":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Alphabetical (Z-A)":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts = [...productsData];
    }
    setProducts(sortedProducts);
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Store Info */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="space-y-3.5">
          <h1 className="text-2xl font-bold">AudioTech Pro</h1>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-xl">⭐</span>
            <span className="text-gray-700 font-medium">
              4.8 <span className="text-gray-500">(156 reviews)</span>
            </span>
          </div>
          <span className="px-1 py-1 border text-gray-700 text-sm rounded-lg mb-3">
            Electronics
          </span>
          <div className="text-gray-500 mt-3">
            <p className="flex items-center gap-1.5"><AiOutlineCodeSandbox />42 Products</p>
            <p className="flex items-center gap-1.5"><AiOutlineCalendar />Joined on May 12, 2021</p>
            <p className="flex items-center gap-1.5"><CiLocationOn />San Francisco, CA</p>
          </div>
          <div>
            <h2 className="font-semibold">Verification</h2>
            <ul className="text-gray-500">
              <li className="flex items-center gap-1.5"><IoMdCheckmark color="#22C55E" /> Verified Seller</li>
              <li className="flex items-center gap-1.5"><IoMdCheckmark color="#22C55E" />Top Rated</li>
              <li className="flex items-center gap-1.5"><IoMdCheckmark color="#22C55E" />Fast Shipper</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Contact Information</h2>
            <p className="pr-4">partners@audiotechpro.com</p>
            <a href="https://audiotechpro.com" className=" hover:underline">
              audiotechpro.com
            </a>
          </div>
          <div>
            <h2 className="font-semibold">Affiliate Program</h2>
            <p className="w-full flex justify-between pr-2">
              <span className="text-[.7rem] text-[#737373]">Commission Rate:</span>
              <span className="text-[.9rem]">12-15%</span>
            </p>
            <p className="w-full flex justify-between pr-2">
              <span className="text-[.7rem] text-[#737373]">Payment Terms:</span>
              <span className="text-[.9rem]">Net 30</span>
            </p>

            <button className="bg-black text-white px-5 py-1 mt-2 rounded-md">
              Become an Affiliate
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-8 lg:mt-0">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Products ({products.length})</h2>
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="border border-gray-100 rounded-sm py-2 px-3 text-sm bg-white cursor-pointer"
              >
                {sortBy}
              </div>
              {isDropdownOpen && (
                <ul className="absolute w-full bg-white border border-gray-100 rounded-sm shadow-md z-10">
                  {sortingOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSort(option)}
                      className="py-2 px-3 text-sm cursor-pointer hover:bg-[#C5A289] hover:text-white"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    ⭐<span className="text-gray-700">{product.rating}</span>
                  </div>
                  <p className="text-lg font-semibold">{product.price}</p>
                  <button className="mt-2 w-full bg-black text-white py-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
};

export default SellerStorefront;
