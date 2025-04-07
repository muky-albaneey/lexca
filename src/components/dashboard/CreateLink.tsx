'use client';

import { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import { ToggleSwitch } from './ToggleSwitch';
// import { ToggleSwitch } from '@/components/ToggleSwitch'; // Adjust the path if needed

export default function CreateLink() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [trackClicks, setTrackClicks] = useState(false);

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#221c1c] flex justify-center items-center px-4 py-10 md:px-8">
      <div className="bg-white rounded-lg w-full max-w-6xl p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            <h1 className="text-xl md:text-2xl font-bold">Create Affiliate Link</h1>
          </div>
          <button className="bg-black text-white text-sm px-4 py-2 rounded">Create Link</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Link Information */}
          <div className="border p-4 rounded-md">
            <h2 className="text-lg font-bold mb-1">Link Information</h2>
            <p className="text-sm text-gray-500 mb-4">Enter the details of your affiliate link.</p>

            <label className="block text-sm font-medium mb-1">Link Name</label>
            <input type="text" placeholder="Summer Sale Campaign" className="border w-full p-2 rounded mb-1" />
            <p className="text-xs text-gray-500 mb-4">A descriptive name to help you identify this link.</p>

            <label className="block text-sm font-medium mb-1">Original URL</label>
            <input type="text" placeholder="https://amazon.com/dp/B09G9FPHY6" className="border w-full p-2 rounded mb-1" />
            <p className="text-xs text-gray-500 mb-4">The destination URL you want to promote.</p>

            <label className="block text-sm font-medium mb-1">Custom Slug (Optional)</label>
            <div className="flex items-center border rounded mb-1">
              <span className="px-2 text-sm text-gray-500">Lexcka.co/</span>
              <input type="text" placeholder="summer-sale" className="p-2 w-full outline-none" />
            </div>
            <p className="text-xs text-gray-500 mb-4">Leave blank to generate automatically.</p>

            <label className="block text-sm font-medium mb-1">Description (Optional)</label>
            <textarea placeholder="Brief description of this affiliate link" className="w-full border p-2 rounded h-24" />
          </div>

          {/* Right Column - Tracking & Settings */}
          <div className="border p-4 rounded-md">
            <h2 className="text-lg font-bold mb-1">Tracking & Settings</h2>
            <p className="text-sm text-gray-500 mb-4">Configure tracking and additional settings for your link.</p>

            <label className="block text-sm font-medium mb-1">Campaign</label>
            <select className="border w-full p-2 rounded mb-4 text-sm">
              <option>Select campaign</option>
            </select>

            <label className="block text-sm font-medium mb-1">Tracking ID (Optional)</label>
            <input type="text" placeholder="Your custom tracking ID" className="border w-full p-2 rounded mb-1" />
            <p className="text-xs text-gray-500 mb-4">Add a custom tracking ID for more detailed analytics.</p>

            <label className="block text-sm font-medium mb-1">UTM Parameters (Optional)</label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input type="text" placeholder="utm_source" className="border p-2 rounded text-sm" />
              <input type="text" placeholder="utm_medium" className="border p-2 rounded text-sm" />
              <input type="text" placeholder="utm_campaign" className="border p-2 rounded text-sm" />
              <input type="text" placeholder="utm_content" className="border p-2 rounded text-sm" />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-sm font-medium">Active</p>
                <p className="text-xs text-gray-500">Enable or disable this affiliate link.</p>
              </div>
              <ToggleSwitch checked={isActive} onChange={() => setIsActive(!isActive)} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-sm font-medium">Track Clicks</p>
                <p className="text-xs text-gray-500">Track the number of clicks on this link.</p>
              </div>
              <ToggleSwitch checked={trackClicks} onChange={() => setTrackClicks(!trackClicks)} />
            </div>

            <button
              className="w-full bg-black text-white py-2 rounded mt-6"
              onClick={handleSubmit}
            >
              Create Affiliate Link
            </button>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <p className="text-lg font-medium mb-2">Link Created<br />successfully</p>
              <Check className="mx-auto text-black w-6 h-6" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
