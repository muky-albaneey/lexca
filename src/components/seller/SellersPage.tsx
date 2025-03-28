"use client";
// import { useEffect, useRef, useState } from "react";
// import { IoChevronDownCircleOutline } from "react-icons/io5";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { TbCurrencyNaira } from "react-icons/tb"; 
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai"; 
import { CiLocationOn } from "react-icons/ci"; 

const sellers = [
  {
    id: 1,
    name: "AudioTech Pro",
    category: "Electronics",
    rating: 4.8,
    reviews: 156,
    products: 42,
    since: "May 2021",
    image: "/audio-tech.svg",
    featured: true,
    verificationStatus: "Verified Sellers",
    description:'Specializing in premium audio equipment with expert reviews and competitive pricing. Join our affiliate…',
  },
  {
    id: 2,
    name: "FitGear",
    category: "Fitness",
    rating: 4.6,
    reviews: 98,
    products: 67,
    since: "Nov 2020",
    image: "/fit-gear.svg",
    featured: true,
    verificationStatus: "Top Rated Sellers",
    description:'Your one-stop shop for fitness equipment, workout gear, and supplements. Our products are tested…',

  },
  {
    id: 3,
    name: "ComfortSeating",
    category: "Furniture",
    rating: 4.9,
    reviews: 201,
    products: 28,
    since: "Jun 2020",
    image: "/comfort-seatings.svg",
    featured: true,
    verificationStatus: "Featured Sellers",
    description:'High-quality displays, TVs, and visual equipment for home and office. We offer extended warranties on all our…',
  },
  {
    id: 4,
    name: "KitchenPro",
    category: "Home & Kitchen",
    rating: 4.5,
    reviews: 87,
    products: 53,
    since: "Aug 2021",
    image: "/kitchen-pro.svg",
    featured: false,
    verificationStatus: "Verified Sellers",
    description:'Professional kitchen equipment for home chefs. Our products are used by professional chefs around the world.',
  },
  {
    id: 5,
    name: "VisualPlus",
    category: "Electronics",
    rating: 4.7,
    reviews: 124,
    products: 35,
    since: "Jan 2022",
    image: "/visual-plus.svg",
    featured: false,
    verificationStatus: "Top Rated Sellers",
    description:'Ergonomic office chairs and comfortable seating solutions for home and office. Designed with your comfo…',

  },
  {
    id: 6,
    name: "SoundWave",
    category: "Electronics",
    rating: 4.4,
    reviews: 76,
    products: 31,
    since: "Mar 2022",
    image: "/soundwave.svg",
    featured: false,
    verificationStatus: "Verified Sellers",
    description:'Portable audio solutions for music lovers on the go. Our products are designed for durability and superior…',
  },
  {
    id: 7,
    name: "PhotoPro",
    category: "Photography",
    rating: 4.8,
    reviews: 112,
    products: 45,
    since: "Feb 2021",
    image: "/photo-pro.svg",
    featured: false,
    verificationStatus: "Top Rated Sellers",
    description:'Professional photography equipment and accessories. Trusted by professional photographers worldwide.',

  },
  {
    id: 8,
    name: "SafeHome",
    category: "Home Security",
    rating: 4.7,
    reviews: 93,
    products: 37,
    since: "Nov 2021",
    image: "/safe-home.svg",
    featured: false,
    verificationStatus: "Verified Sellers",
    description:'Smart home security systems and devices to keep your family safe. Easy to install and use with 24/7 monitorin…',
  },
  {
    id: 9,
    name: "KitchenElite",
    category: "Home & Kitchen",
    rating: 4.6,
    reviews: 84,
    products: 49,
    since: "Jan 2022",
    image: "/kitchen-elite.svg",
    featured: false,
    verificationStatus: "Top Rated Sellers",
    description:'Premium cookware and kitchen accessories for the discerning home chef. Our products are designed to la…',
  }
];



  const FilterSidebar = ({ onFilter, onReset }) => {
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [joinedDate, setJoinedDate] = useState("Any Time");
    const [verificationStatus, setVerificationStatus] = useState(["Verified Sellers"]);
    const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  
    useEffect(() => {
      onFilter({ selectedRating, selectedCategories, joinedDate, verificationStatus });
    }, [selectedRating, selectedCategories, joinedDate, verificationStatus]);
  
    const handleReset = () => {
      setSelectedRating(null);
      setSelectedCategories([]);
      setJoinedDate("Any Time");
      setVerificationStatus(["Verified Sellers"]);
      onReset();
    };
  
    return (
      <div className="relative">
        {/* Mobile Filter Toggle Button */}
        <button
          className="md:hidden flex items-center justify-between w-full bg-gray-100 px-4 py-2 rounded-md text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Filter Options</span>
          <IoChevronDownCircleOutline className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
  
        {/* Filter Sidebar - Visible by default on desktop, dropdown on mobile */}
        <div
          className={`bg-white shadow-md rounded-lg p-4 border border-gray-200 w-[18rem] md:relative md:block
            ${isOpen ? "absolute top-12 left-0 z-50 bg-white" : "hidden md:block"}`}
        >
          {/* Clear Filters Button */}
          <button onClick={handleReset} className="mb-4 w-full py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
            Clear All Filters
          </button>
  
          {/* Seller Rating */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Seller Rating</h3>
            {["Any Rating", "4.5 & Up", "4.0 & Up", "3.5 & Up"].map((rating) => (
              <div key={rating} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="sellerRating"
                  value={rating}
                  checked={selectedRating === rating}
                  onChange={() => setSelectedRating(rating)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">{rating}</span>
              </div>
            ))}
          </div>
          <hr className="my-2 bg-[#E5E5E5] text-[#E5E5E5]" />
  
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
            {["Electronics", "Home & Kitchen", "Fashion", "Beauty & Personal Care", "Sports & Outdoors", "Furniture", "Photography", "Home Security"].map((category) => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() =>
                    setSelectedCategories((prev) =>
                      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
                    )
                  }
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">{category}</span>
              </div>
            ))}
          </div>
          <hr className="my-2 text-[#E5E5E5]" />
  
          {/* Joined Date */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Joined Date</h3>
            {["Any Time", "Last Year", "Last 2 Years", "Last 3 Years"].map((date) => (
              <div key={date} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="joinedDate"
                  value={date}
                  checked={joinedDate === date}
                  onChange={() => setJoinedDate(date)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">{date}</span>
              </div>
            ))}
          </div>
          <hr className="my-2 text-[#E5E5E5]" />
  
          {/* Verification Status */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Verification Status</h3>
            {["Verified Sellers", "Top Rated Sellers", "Featured Sellers"].map((status) => (
              <div key={status} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={verificationStatus.includes(status)}
                  onChange={() =>
                    setVerificationStatus((prev) =>
                      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
                    )
                  }
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">{status}</span>
              </div>
            ))}
          </div>
          <hr className="my-2 text-[#E5E5E5]" />
  
          {/* Apply Filters Button */}
          <button className="w-full py-2 rounded-md bg-black text-white hover:opacity-90">
            Apply Filters
          </button>
        </div>
      </div>
    );
  };
  
//   export default FilterSidebar;
  
  

// export default FilterSidebar;

const options = [
  'Highest Rating',
  'Lowest Rating',
  'Alphabetical (A-Z)',
  'Alphabetical (Z-A)',
];

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
}
function CustomDropdown({ value, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-100 rounded-sm py-2 px-3 text-sm bg-[#fff] cursor-pointer"
      >
        {value}
      </div>
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-100 rounded-sm shadow-md z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="py-2 px-3 text-sm cursor-pointer hover:bg-[#C5A289] hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SellersPage = () => {
  const [products, setProducts] = useState(sellers);
  const [sortBy, setSortBy] = useState("Highest Rating");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilter = (filters) => {
    let filtered = sellers;

    if (filters.selectedRating !== null) {
      filtered = filtered.filter((seller) => seller.rating >= filters.selectedRating);
    }

    if (filters.selectedCategories.length) {
      filtered = filtered.filter((seller) =>
        filters.selectedCategories.includes(seller.category)
      );
    }

    if (filters.selectedVerification) {
        filtered = filtered.filter((seller) =>
          filters.selectedVerification.includes(seller.verificationStatus)
        );
      }
      

    setProducts(filtered);
  };

  useEffect(() => {
    const filtered = sellers.filter((seller) =>
      seller.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  }, [searchQuery]);

  const handleSort = (value) => {
    setSortBy(value);
    const sortedProducts = [...products];

    if (value === "Highest Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (value === "Lowest Rating") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (value === "Alphabetical (A-Z)") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "Alphabetical (Z-A)") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
     

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative flex flex-col md:flex-row items-center w-full md:w-3/4 gap-2">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Search by name..."
              className="border-[0] rounded-md py-2 pl-10 pr-3 w-full md:w-[45%] text-sm bg-gray-100 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
         
        </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center items-center gap-2 
                    pointer-events-auto">

          <h6>Sort by</h6>
          <CustomDropdown value={sortBy} onChange={handleSort} />
        

        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar onFilter={handleFilter} onReset={() => setProducts(sellers)} />

        <div className="p-6 w-full">
          <h2 className="text-3xl font-bold text-center">Our Trusted Sellers</h2>
          <p className="text-gray-600 text-center mt-2">Browse our network of verified sellers.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {products.map((seller) => (
              <div key={seller.id} className="rounded-lg shadow hover:shadow-md transition p-4">
                <div className="relative w-full h-36">
                  <Image src={seller.image} alt={seller.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                </div>
                <div className="mt-4">
                  <div className="w-full flex justify-between">
                  <h3 className="text-lg font-semibold">{seller.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">⭐ {seller.rating} ({seller.reviews})</p>
                  </div>
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded">{seller.category}</span>
                  <p className="text-sm text-gray-600 mt-2">
                  {seller.description}
                  </p>
                  <p className="text-sm text-gray-500">📦 {seller.products} Products • Since {seller.since}</p>
                  <button className="mt-4 bg-black text-white px-4 py-2 rounded w-full">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersPage;
