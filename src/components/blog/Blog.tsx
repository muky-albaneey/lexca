"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoCalendarOutline, IoChevronForwardOutline, IoTimeOutline } from "react-icons/io5";

export default function BlogPage() {
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Newest First");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [sortDropdown, setSortDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const articles = [
    { id: 1, image: "/article-1.svg", category: "Product Selection", title: "The Ultimate Guide to Choosing Profitable Affiliate Products", description: "Discover how to identify high-converting products that align with your audience and generate sustainable income.", author: "Michael Chen", date: "Apr 2, 2023", readTime: "12 min read" },
    { id: 2, image: "/article-2.jpg", category: "Audience Building", title: "Building Trust: The Key to Affiliate Marketing Success", description: "Explore how establishing credibility with your audience leads to higher conversion rates and long-term success.", author: "Emma Rodriguez", date: "Feb 28, 2023", readTime: "6 min read" },
    { id: 3, image: "/article-3.jpg", category: "SEO", title: "SEO Strategies Specifically for Affiliate Marketers", description: "Learn how to optimize your content for search engines while maintaining compliance with affiliate program rules.", author: "David Wilson", date: "May 10, 2023", readTime: "10 min read" },
    { id: 4, image: "/article-4.jpg", category: "Social Media", title: "Social Media Strategies for Affiliate Marketers", description: "Learn how to leverage different social platforms to promote affiliate products without being pushy.", author: "Ryan Martinez", date: "Mar 30, 2023", readTime: "8 min read" },
    { id: 5, image: "/article-5.jpg", category: "Analytics", title: "Analytics for Affiliate Marketers: Tracking What Matters", description: "Discover which metrics actually impact your bottom line and how to use data to optimize your affiliate strategy.", author: "Olivia Parker", date: "Jun 15, 2023", readTime: "13 min read" },
    { id: 6, image: "/article-6.jpg", category: "Email Marketing", title: "Email Marketing Tactics That Drive Affiliate Sales", description: "Discover how to build and nurture an email list that consistently generates affiliate commissions.", author: "Lisa Thompson", date: "Jun 5, 2023", readTime: "9 min read" },
    { id: 7, image: "/article-7.jpg", category: "Content Creation", title: "How to Create Compelling Product Reviews That Convert", description: "Master the art of writing authentic product reviews that build trust and drive purchasing decisions.", author: "James Anderson", date: "Apr 18, 2023", readTime: "7 min read" },
    { id: 8, image: "/article-8.jpg", category: "Legal", title: "Affiliate Compliance: Navigating FTC Guidelines and Disclosures", description: "Stay compliant with the latest regulations while maintaining audience trust through proper affiliate disclosures.", author: "Alexandra Lee", date: "May 22, 2023", readTime: "11 min read" }
  ];

  const categories = ["All Categories", "Audience Building", "SEO", "Email Marketing", "Content Creation", "Social Media"];
  const sortOptions = ["Newest First", "Oldest First", "Most Popular"];

  const filteredArticles = articles
    .filter(article => category === "All Categories" || article.category === category)
    .filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.description.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sort === "Newest First" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date));

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Search articles..." className="w-full border rounded-md pl-10 py-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <button onClick={() => setCategoryDropdown(!categoryDropdown)} className="border rounded-md py-2 px-4 flex items-center gap-2">{category} <IoIosArrowDown /></button>
            {categoryDropdown && <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-48 z-10">{categories.map(item => <button key={item} onClick={() => { setCategory(item); setCategoryDropdown(false); }} className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${category === item ? "bg-gray-200" : ""}`}>{item}</button>)}</div>}
          </div>
          <div className="relative">
            <button onClick={() => setSortDropdown(!sortDropdown)} className="border rounded-md py-2 px-4 flex items-center gap-2">{sort} <IoIosArrowDown /></button>
            {sortDropdown && <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-40 z-10">{sortOptions.map(option => <button key={option} onClick={() => { setSort(option); setSortDropdown(false); }} className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sort === option ? "bg-gray-200" : ""}`}>{option}</button>)}</div>}
          </div>
        </div>
      </div>
        {/* Featured Article */}
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <img src="/marketing.jpg" alt="Marketing" className="w-full md:w-1/2 object-cover" />
        <div className="p-6">
          <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs">Strategy</span>
          <h2 className="text-xl font-bold mt-2">How to Maximize Your Affiliate Marketing Revenue</h2>
          <p className="text-gray-500 mt-2">Learn the proven strategies that top affiliates use to increase their conversion rates and maximize their earnings.</p>
          <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
            <span className="h-6 w-6 bg-gray-300 rounded-full"></span>
            <span>Sarah Johnson</span>
            <span>• Mar 15, 2023</span>
            <span>• 8 min read</span>
          </div>
          <button className="mt-4 border border-gray-300 py-2 px-4 rounded-md">Read Full Article →</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {paginatedArticles.map(article => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 relative">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold absolute top-3  z-50">{article.category}</span>
              <div className="flex items-center text-gray-500 text-xs mt-2 space-x-3">
                <div className="flex items-center"><IoCalendarOutline className="mr-1" /> {article.date}</div>
                <div className="flex items-center"><IoTimeOutline className="mr-1" /> {article.readTime}</div>
              </div>
              <h2 className="text-lg font-bold mt-2 text-gray-900">{article.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{article.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">{article.author}</span>
                <a href="#" className="text-blue-600 text-sm font-semibold flex items-center">Read more <IoChevronForwardOutline className="ml-1" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="border px-4 py-2 rounded-md disabled:opacity-50">Previous</button>
        {[...Array(totalPages)].map((_, i) => <button key={i} onClick={() => setCurrentPage(i + 1)} className={`border px-4 py-2 rounded-md ${currentPage === i + 1 ? "bg-blue-600 text-white" : ""}`}>{i + 1}</button>)}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="border px-4 py-2 rounded-md disabled:opacity-50">Next</button>
      </div>
    </div>
  );
}
