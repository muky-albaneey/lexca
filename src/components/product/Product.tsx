"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";


const sellers = [
  { id: 1, name: "Wireless Noise-Cancelling Headphones", price: 249.99, rating: 4.8, brand: "AudioTech Pro", category: "Electronics", image: "/headphones.svg" },
  { id: 2, name: "Smart Fitness Tracker Watch", price: 129.99, rating: 3.6, brand: "FitGear", category: "Electronics", image: "/fitness-watch.svg" },
  { id: 3, name: "Professional Blender Set", price: 189.99, rating: 3.5, brand: "KitchenPro", category: "Home & Kitchen", image: "/blender.svg" },
  { id: 4, name: "Ergonomic Office Chair", price: 299.99, rating: 3.9, brand: "ComfortSeating", category: "Home & Kitchen", image: "/chair.svg" },
  { id: 5, name: "Ultra HD Smart TV 55-inch", price: 599.99, rating: 4.7, brand: "VisualPlus", category: "Electronics", image: "/smart-tv.svg" },
  { id: 6, name: "Portable Bluetooth Speaker", price: 79.99, rating: 4.4, brand: "SoundWave", category: "Electronics", image: "/speaker.svg" },
];


const FilterSidebar = ({ selectedRating, setSelectedRating, priceRange, setPriceRange, selectedCategories, setSelectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = ["Electronics", "Home & Kitchen", "Fashion", "Beauty & Personal Care", "Sports & Outdoors"];
  const ratings = [4, 3, 2, 1];

  // Reset all filters to initial state
  const clearFilters = () => {
    setSelectedRating(null);
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-72">
      <h1
  className="text-[#000] font-bold "
  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
>
  Filters
</h1>

        <button
          onClick={clearFilters}
          className="w-full p-2 shadow-md round-lg shadow-[#E5E5E5]"
        >
          Clear Filters
        </button>
        <div className="bg-white rounded-lg p-4 shadow-md">
          {/* Price Range */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input
  type="range"
  min="0"
  max="1000"
  value={priceRange[1]}
  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
  className="
    w-full 
    appearance-none 
    bg-black 
    h-2 
    rounded-lg
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-webkit-slider-thumb]:border 
    [&::-webkit-slider-thumb]:border-black
    [&::-moz-range-thumb]:w-4 
    [&::-moz-range-thumb]:h-4 
    [&::-moz-range-thumb]:bg-white 
    [&::-moz-range-thumb]:rounded-full 
    [&::-moz-range-thumb]:cursor-pointer 
    [&::-moz-range-thumb]:border 
    [&::-moz-range-thumb]:border-black
  "
/>

            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Categories</h3>
            {categories.map((category) => (
              <label key={category} className="flex items-center text-sm mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategories.includes(category)}
                  onChange={() => setSelectedCategories(prev => 
                    prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                  )}
                />
                {category}
              </label>
            ))}
          </div>

          {/* Ratings */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Ratings</h3>
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center text-sm mb-2">
                <input
                  type="radio"
                  name="rating"
                  className="mr-2"
                  checked={selectedRating === rating}
                  onChange={() => setSelectedRating(rating)}
                />
                {rating}★ & Up
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden w-full relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-2 mb-4  rounded-lg hover:bg-gray-200 flex justify-between items-center"
        >
          <span className="font-bold">Filters</span>
          <IoChevronDown className={`${isOpen ? "rotate-180" : ""} transition-transform`} />
        </button>

        {isOpen && (
          <div className="w-[100%] bg-white p-4 shadow-md rounded-lg absolute z-50">
            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="w-full p-2 shadow-md round-lg shadow-[#E5E5E5] mb-4"
            >
              Clear Filters
            </button>

            {/* Price Range */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                className="
    w-full 
    appearance-none 
    bg-black 
    h-2 
    rounded-lg
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-webkit-slider-thumb]:border 
    [&::-webkit-slider-thumb]:border-black
    [&::-moz-range-thumb]:w-4 
    [&::-moz-range-thumb]:h-4 
    [&::-moz-range-thumb]:bg-white 
    [&::-moz-range-thumb]:rounded-full 
    [&::-moz-range-thumb]:cursor-pointer 
    [&::-moz-range-thumb]:border 
    [&::-moz-range-thumb]:border-black
  "
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map((category) => (
                <label key={category} className="flex items-center text-sm mb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedCategories.includes(category)}
                    onChange={() => setSelectedCategories(prev => 
                      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
                    )}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* Ratings */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Ratings</h3>
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center text-sm mb-2">
                  <input
                    type="radio"
                    name="rating"
                    className="mr-2"
                    checked={selectedRating === rating}
                    onChange={() => setSelectedRating(rating)}
                  />
                  {rating}★ & Up
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};



const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sellers);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const filtered = sellers
      .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((product) => (selectedRating ? product.rating >= selectedRating : true))
      .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
      .filter((product) => (selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true));

    setFilteredProducts(filtered);
  }, [searchQuery, selectedRating, priceRange, selectedCategories]);

  return (
    <section className="py-4">
    <div className="md:ml-28 md:pl-0 pl-4">
    <h1 className="font-bold text-2xl">All Products</h1>
    <input
      type="text"
      placeholder="Search by name, location, or specialty..."
      className="border-[0] rounded-md py-2 pl-10 pr-3 w-full md:w-[30%] text-sm bg-[#FFFFFF] outline-none shadow-md shadow-[#E5E5E5] "
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>


    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row">
      <FilterSidebar
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <div className="flex-1 md:ml-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full h-56">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-sm">⭐ {product.rating} • By {product.brand}</p>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                  <button className="mt-4 bg-black text-white px-4 py-2 rounded w-full"><Link href='/product_detail/1'>Buy Now</Link> </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Product;
