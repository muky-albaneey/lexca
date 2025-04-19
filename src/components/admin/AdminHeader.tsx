'use client';
import { useState } from 'react';
import {
  Bell,
  HelpCircle,
  Menu,
  Settings,
  LogOut,
  Grid,
  Users,
  ShoppingCart,
  DollarSign,
  Repeat,
  FileText,
} from 'lucide-react';
import Image from 'next/image';

export default function AdminHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#e5e5e8] px-4 py-3 flex items-center justify-between relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/lexca_logo.svg" // Replace with your actual logo
          alt="Lexcka Logo"
          width={100}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="w-[300px] bg-white px-4 py-2 rounded-full flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center gap-3 relative">
        {/* Bell */}
        <div className="relative">
          <Bell className="w-5 h-5 text-black" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Help */}
        <HelpCircle className="w-5 h-5 text-black" />

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Mobile Popup */}
          {mobileMenuOpen && (
            <div className="absolute right-0 top-12 w-[250px] bg-white rounded-lg shadow-lg p-4 z-50">
              {/* Menu List */}
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 font-semibold text-gray-800">
                  <Grid className="w-4 h-4" />
                  Dashboard
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <ShoppingCart className="w-4 h-4" />
                  Products
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Repeat className="w-4 h-4" />
                  Referrals
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  Earnings
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Users className="w-4 h-4" />
                  Users
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FileText className="w-4 h-4" />
                  Blog
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Settings className="w-4 h-4" />
                  Settings
                </li>
              </ul>

              {/* Platform Status */}
              <div className="mt-6 border-t pt-4">
                <p className="font-semibold text-gray-800 mb-2">Platform Status</p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <span className="font-medium">Server Status:</span>{' '}
                    <span className="text-green-600 font-semibold">Operational</span>
                  </p>
                  <p>
                    <span className="font-medium">Last Backup:</span> 2 hours ago
                  </p>

                  <div className="space-y-2">
                    {/* System Load */}
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>System Load</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: '28%' }}
                        ></div>
                      </div>
                    </div>

                    {/* Storage */}
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Storage</span>
                        <span>64%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: '64%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
