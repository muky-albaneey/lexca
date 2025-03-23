'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-gray-700 hover:text-black transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Products</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Categories</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Sellers</a>
            <a href="#" className="text-gray-700 hover:text-black transition">About</a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-6">
            <FiSearch size={20} className="text-gray-600 cursor-pointer hover:text-black" />
            <FiUser size={20} className="text-gray-600 cursor-pointer hover:text-black" />
            <FiShoppingCart size={20} className="text-gray-600 cursor-pointer hover:text-black" />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-700">
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-20 right-0 h-full w-64 bg-white z-50 shadow-lg transition-transform rounded-l-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <button onClick={() => setIsOpen(false)}>
            <FiX size={28} className="text-gray-700" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col mt-4">
          <a href="#" className="py-3 px-4 bg-black text-white">Home</a>
          <a href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100">Products</a>
          <a href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100">Categories</a>
          <a href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100">Sellers</a>
          <a href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
            Profile <FiUser size={18} />
          </a>
          <a href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
            Cart <FiShoppingCart size={18} />
          </a>
          <a href="#" className="py-3 px-4 text-gray-700 hover:bg-gray-100">About Us</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
