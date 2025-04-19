import { CgLogOut } from "react-icons/cg"; 
import { AiOutlineSetting } from "react-icons/ai"; 
// 'use client';

import { useStatusStore } from '@/store/nav';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { LogOut } from 'lucide-react';
import {
  FiMenu,
  FiX,
  FiSearch,
  FiBell,
  FiShoppingCart,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';

const Navbar = () => {

  const productResults = [
    { id: 1, name: "Wireless Noise-Cancelling Headphones", price: 249.99, rating: 4.8, brand: "AudioTech Pro", category: "Electronics", image: "/headphones.svg" },
    { id: 2, name: "Smart Fitness Tracker Watch", price: 129.99, rating: 3.6, brand: "FitGear", category: "Electronics", image: "/fitness-watch.svg" },
    { id: 3, name: "Professional Blender Set", price: 189.99, rating: 3.5, brand: "KitchenPro", category: "Home & Kitchen", image: "/blender.svg" },
    { id: 4, name: "Ergonomic Office Chair", price: 299.99, rating: 3.9, brand: "ComfortSeating", category: "Home & Kitchen", image: "/chair.svg" },
    { id: 5, name: "Ultra HD Smart TV 55-inch", price: 599.99, rating: 4.7, brand: "VisualPlus", category: "Electronics", image: "/smart-tv.svg" },
    { id: 6, name: "Portable Bluetooth Speaker", price: 79.99, rating: 4.4, brand: "SoundWave", category: "Electronics", image: "/speaker.svg" },
  ];

  
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSellerTools, setShowSellerTools] = useState(false);  
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const inputRef = useRef(null);
  const { status, setStatus } = useStatusStore();
useEffect(() => {
  if (showSearch && inputRef.current) {
    inputRef.current.focus();
  }
}, [showSearch]);

const wrapperRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSearchResultsVisible(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <FiMenu size={24} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/lexca_logo.svg" alt="Logo" width={40} height={40} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>
            <Link href="/all_category/1">Categories</Link>
            <Link href="/seller/1">Sellers</Link>
            <Link href="/about">About</Link>
            <Link href="/affiliate">Affiliate</Link>
          </nav>
        </div>

        {/* Right: Icons & Profile */}
        <div className="flex items-center gap-4">
          {/* Search */}
          {/* Search with expand on click */}
            <div className="relative hidden md:block">
              <FiSearch
                className="text-gray-700 hover:text-black cursor-pointer"
                size={20}
                onClick={() => setShowSearch(prev => !prev)}

              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchResultsVisible(true);
                  }}
                className={`
                  absolute right-0 top-0 bg-white border border-gray-300 rounded px-3 py-1 text-sm
                  transition-all duration-300 ease-in-out
                  ${showSearch ? 'opacity-100 scale-x-100 w-48' : 'opacity-0 scale-x-0 w-0'}
                  origin-right
                `}
                ref={inputRef}
              />
            </div>


          {/* Cart */}
          <FiShoppingCart className="text-gray-700 hover:text-black cursor-pointer" size={20} />

          {/* Notification Bell with Badge */}
          <div className="relative" ref={notificationRef}>
  <div onClick={() => setShowNotifications(prev => !prev)} className="cursor-pointer">
    <FiBell className="text-gray-700 hover:text-black" size={20} />
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">3</span>
  </div>

  {showNotifications && (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border rounded-md z-50">
      <div className="p-4 text-sm">
        <p className="font-semibold mb-2">Notifications</p>
        <ul className="space-y-2">
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">🛒 Your order has been shipped</li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">📦 Package delivered successfully</li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">⭐ You received a new review</li>
        </ul>
      </div>
    </div>
  )}
</div>


          {/* Profile Picture */}
          <div className="relative">
            <Image
              src="/profile.svg" // Replace with actual image
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-50">
                <Link href="/user_dashboard/1" onClick={() => setStatus("setting")} className="flex gap-1  items-center px-4 py-2 hover:bg-gray-100"><AiOutlineSetting />Settings</Link>
                <Link href="#" className="flex gap-1 items-center text-red-700 px-4 py-2 hover:bg-red-700 hover:text-white"><CgLogOut color="red" />Log Out</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center border rounded-md px-3 py-2">
          <FiSearch className="text-gray-500" />
          <input
              type="text"
              placeholder="Search for products..."
              className="ml-2 w-full outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchResultsVisible(true);
              }}
            />

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Image src="/lexca_logo.svg" alt="Logo" width={40} height={40} />
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} className="text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col mt-2 text-sm">
          <a href="#" className="py-3 px-4">Home</a>
          <a href="#" className="py-3 px-4">Products</a>
          <a href="#" className="py-3 px-4">Categories</a>
          <a href="#" className="py-3 px-4">Sellers</a>
          <a href="#" className="py-3 px-4">About</a>

          {/* Seller Tools Dropdown */}
        <div className="border-b mt-2 pt-2">
          <button
            className="w-full flex items-center justify-between py-3 px-4 text-left"
            onClick={() => setShowSellerTools(!showSellerTools)}
          >
            <span>Dashboard</span>
            {showSellerTools ? <FiChevronUp   /> : <FiChevronDown />}
          </button>
          
          {showSellerTools && (
            <div className="flex flex-col transition-all duration-200 ease-in-out">
            <Link
              href="/user_dashboard/1"
              className="py-2 px-6 text-sm"
              onClick={() => setStatus("overview")}
            >
              Dashboard
            </Link>
           
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm"  onClick={() => setStatus("upload")}>Upload Products</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("links")}>Affiliate Links</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("earnings")}>Earnings & Payouts</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("referrals")}>Referrals</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("tracking")}>Tracking</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("blog")}>Blog</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("setting")}>Settings</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm" onClick={() => setStatus("message")}>Message</Link>
              <Link href="/user_dashboard/1" className="py-2 px-6 text-sm text-red-600">Logout</Link>
            </div>
          )}
        </div>

        </nav>

        {/* Mobile User Footer */}
        <div className="absolute bottom-4 left-4 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/profile.svg" // Replace with actual image
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Jemima20</p>
              <p className="text-gray-500 text-xs">jemima20@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}



<div ref={wrapperRef}>
{searchResultsVisible && searchQuery && (
  <div className="absolute top-full left-0 w-full bg-white z-50 shadow-lg px-4 py-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {productResults
  .filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((product, index) => (
    <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
      <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={160}
              className="w-full h-40 object-cover"
            />

      <div className="p-3">
        <h3 className="text-sm font-semibold truncate">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-2 w-full bg-black text-white py-1 rounded">Buy Now</button>
      </div>
    </div>
))}

    </div>
  </div>
)}
</div>



    </header>
  );
};

export default Navbar;
