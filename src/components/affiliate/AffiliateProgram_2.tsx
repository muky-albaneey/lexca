"use client";
import React, { useState } from "react";

const AffiliateProgram_2 = () => {
  const [activeTab, setActiveTab] = useState("Standard Commission");

  const commissionData = {
    "Standard Commission": [
      { title: "Electronics", rate: "8%", desc: "Commission on all electronics products including headphones, speakers, and smart devices." },
      { title: "Fashion & Apparel", rate: "12%", desc: "Commission on all fashion items including clothing, shoes, and accessories." },
      { title: "Home & Kitchen", rate: "10%", desc: "Commission on all home goods including appliances, cookware, and furniture." }
    ],
    "Tiered Commission": [
      { title: "Electronics", rate: "10%", desc: "Higher commission for top-performing affiliates in electronics." },
      { title: "Fashion & Apparel", rate: "15%", desc: "Higher commission for fashion affiliates based on sales volume." },
      { title: "Home & Kitchen", rate: "12%", desc: "Increased earnings for high-performing home & kitchen affiliates." }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Commission Structure */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Commission Structure</h2>
        <p className="text-gray-600 mt-2">
          Our tiered commission structure rewards your performance. The more you
          sell, the higher your commission rate.
        </p>
        {/* Tabs */}
        <div className="flex justify-center mt-4 border-b">
          {["Standard Commission", "Tiered Commission"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab ? "border-b-2 border-black font-bold" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Commission Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {commissionData[activeTab].map((item) => (
          <div key={item.title} className="border p-6 rounded-lg text-center">
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-xl font-bold mt-2">{item.rate}</p>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Success Stories */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold">Success Stories</h2>
        <p className="text-gray-600 mt-2">
          Hear from affiliates who have transformed their online presence into
          profitable businesses.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Sarah Johnson", role: "Fashion Blogger", earnings: "$2,500/month", review: "Affiliate has completely changed how I monetize my fashion blog. The platform is intuitive, the commission rates are competitive, and I love how easy it is to track my earnings." },
            { name: "Michael Thompson", role: "Tech Reviewer", earnings: "$3,800/month", review: "As a tech reviewer, I've tried many affiliate programs, but Affiliate stands out with its wide product selection and reliable payment system. My audience trusts the products I recommend through this platform." },
            { name: "Emily Rodriguez", role: "Lifestyle Influencer", earnings: "$5,200/month", review: "The seller dashboard provides all the analytics I need to understand what products are performing best with my audience. It's helped me optimize my content strategy and increase my earnings by 40%." }
          ].map((user) => (
            <div key={user.name} className="border p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="font-bold">{user.name}</h3>
              <p className="text-gray-600">{user.role}</p>
              <span className="bg-gray-200 px-3 py-1 text-sm rounded-md mt-2 inline-block">
                Earning {user.earnings}
              </span>
              <p className="text-gray-600 mt-2">{user.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram_2;
