"use client";
import React from "react";

const AffiliateApplicationForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center">
          Apply to Become an Affiliate
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Fill out the form below to apply to our affiliate program. We’ll
          review your application and get back to you within 48 hours.
        </p>

        {/* Form Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Personal Information</h3>
          <p className="text-gray-500 text-sm mb-4">Tell us about yourself</p>

          {/* Form Fields */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"
              />
            </div>

            {/* Website or Blog URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website or Blog URL
              </label>
              <input
                type="url"
                placeholder="https://"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"
              />
              <p className="text-gray-500 text-xs mt-1">
                If you don’t have a website, leave this blank.
              </p>
            </div>

            {/* Social Media Profiles */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Social Media Profiles
              </label>
              <input
                type="text"
                placeholder="Instagram, YouTube, TikTok, etc."
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:opacity-80"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffiliateApplicationForm;
