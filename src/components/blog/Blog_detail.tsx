"use client";
import { FaHeart } from "react-icons/fa";
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin, FaBookmark } from "react-icons/fa";
import ArticleDetail from "./ArticleDetail";
import CommentsSection from "./CommentsSection";
import RelatedArticles from "./RelatedArticles";

export default function BlogDetail() {
  return (
   <>
     <div className="max-w-4xl mx-auto p-6 md:p-12">
      {/* Back Link */}
      <div className="text-purple-600 text-sm font-medium flex items-center mb-4">
        <a href="#" className="hover:underline">&larr; Back to all articles</a>
        <span className="ml-2 bg-purple-200 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">Strategy</span>
      </div>
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">How to Maximize Your Affiliate Marketing Revenue</h1>
      
      {/* Author Info */}
      <div className="flex items-center mt-4 text-gray-500 text-sm">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <p className="text-gray-900 font-medium">Sarah Johnson</p>
          <p className="text-xs">Author</p>
        </div>
        <div className="flex items-center ml-6">
          <IoCalendarOutline className="mr-1" /> Mar 15, 2023
        </div>
        <div className="flex items-center ml-4">
          <IoTimeOutline className="mr-1" /> 8 min read
        </div>
      </div>
      
      {/* Like Button */}
      <div className="mt-4 flex justify-end">
        <button className="flex items-center space-x-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100">
          <FaHeart className="text-red-500" />
          <span>1.2K Likes</span>
        </button>
      </div>
      
      {/* Image */}
      <div className="mt-6">
        <img src="/marketing-image.jpg" alt="Marketing" className="w-full rounded-lg" />
      </div>

      {/* Social Sharing - Mobile Only */}
      <div className="flex justify-center space-x-4 mt-4 md:hidden">
        <FaTwitter className="text-blue-500 text-xl cursor-pointer" />
        <FaFacebook className="text-blue-700 text-xl cursor-pointer" />
        <FaLinkedin className="text-blue-600 text-xl cursor-pointer" />
        <FaBookmark className="text-gray-700 text-xl cursor-pointer" />
      </div>
    </div>
    <ArticleDetail />
    <CommentsSection />
    <RelatedArticles />
   </>
  );
}
