"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const relatedProducts = [
  {
    id: 1,
    name: "Earbud Oraimo",
    description: "Wireless headphone with active noise canceling and 30-hour battery life",
    price: "$423.04",
    commission: "8% commission",
    rating: "4.8",
    image: "/earbuds.jpg",
  },
  {
    id: 2,
    name: "Earbud Oraimo",
    description: "Wireless headphone with active noise canceling and 30-hour battery life",
    price: "$423.04",
    commission: "8% commission",
    rating: "4.8",
    image: "/earbuds.jpg",
  },
  {
    id: 3,
    name: "Earbud Oraimo",
    description: "Wireless headphone with active noise canceling and 30-hour battery life",
    price: "$423.04",
    commission: "8% commission",
    rating: "4.8",
    image: "/earbuds.jpg",
  },
  {
    id: 4,
    name: "Earbud Oraimo",
    description: "Wireless headphone with active noise canceling and 30-hour battery life",
    price: "$423.04",
    commission: "8% commission",
    rating: "4.8",
    image: "/earbuds.jpg",
  },
  {
    id: 5,
    name: "Earbud Oraimos",
    description: "Wireless headphone with active noise canceling and 30-hour battery life",
    price: "$423.04",
    commission: "8% commission",
    rating: "4.8",
    image: "/earbuds.jpg",
  },
];

const RelatedProducts = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(prev + 1, relatedProducts.length - itemsPerPage));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="relative">
        <div className="hidden md:flex gap-4 overflow-hidden ml-40">
          {relatedProducts.slice(scrollIndex, scrollIndex + itemsPerPage).map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 w-1/5">
              <Image src={product.image} alt={product.name} width={150} height={150} className="rounded-lg mx-auto" />
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
              <p className="text-blue-600 text-sm font-semibold">{product.commission}</p>
              <p className="text-yellow-500">⭐ {product.rating}</p>
            </div>
          ))}
        </div>
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 w-full">
              <Image src={product.image} alt={product.name} width={150} height={150} className="rounded-lg mx-auto" />
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
              <p className="text-blue-600 text-sm font-semibold">{product.commission}</p>
              <p className="text-yellow-500">⭐ {product.rating}</p>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 flex gap-2 hidden md:block">
          <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full shadow-md">
            <IoChevronBack size={24} />
          </button>
          <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full shadow-md">
            <IoChevronForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
