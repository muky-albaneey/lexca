import { RiGroupLine } from "react-icons/ri"; 
import { AiOutlineUsergroupDelete } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { BiAward } from "react-icons/bi"; 
import { AiOutlineExclamationCircle } from "react-icons/ai"; 
import React from 'react';

export default function About() {
  return (
    <div className="font-sans">
      {/* About Section */}
      <section className="bg-black text-white text-center p-8 py-20">
        <h1 className="text-xl font-bold">About Affiliate</h1>
        <p>Empowering creators and influencers to monetize their audience through trusted product recommendations</p>
      </section>

      {/* Mission Section */}
      <section className="bg-white text-center p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-[#CBDEFD] p-2 rounded-lg">
            <span className="text-blue-500 text-xl"><AiOutlineExclamationCircle /></span>
          </div>
        </div>
        <h2 className="text-xl font-bold">Our Mission</h2>
        <p className="mb-8">
          At affiliate, we're on a mission to revolutionize affiliate marketing by creating a transparent, user-friendly platform that connects quality products with authentic recommendations.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:px-16">
          <div className="bg-[#EFF3F9] p-4 rounded-lg text-left">
            <h3 className="font-bold">For Creators</h3>
            <p>We empower content creators with the tools to monetize their influence without compromising their authenticity. Our platform offers competitive commission rates, real-time analytics, and a diverse product catalog.</p>
          </div>
          <div className="bg-[#EFF3F9] p-4 rounded-lg text-left">
            <h3 className="font-bold">For Shoppers</h3>
            <p>We curate trusted product recommendations from verified creators across diverse categories. Every purchase supports creators while ensuring customers receive quality products from established marketplaces.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white text-center p-8 py-20">
        <h2 className="text-xl font-bold">Our Values</h2>
        <p className="mb-8">The principle that guides everything we do at affiliate</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white text-black p-4 rounded-lg">
            <div className="text-blue-500 text-xl bg-[#CBDEFD] p-2 w-[10%] rounded-full flex justify-center items-center m-auto"><BiAward /></div>
            <h3 className="font-bold">Quality</h3>
            <p>We maintain high standards for products featured on our platform, ensuring creators can recommend with confidence.</p>
          </div>

          <div className="bg-white text-black p-4 rounded-lg">
            <div className="text-blue-500 text-xl bg-[#CBDEFD] p-2 p-2 w-[10%] rounded-full flex justify-center items-center m-auto"><AiOutlineHeart /></div>
            <h3 className="font-bold">Authenticity</h3>
            <p>We encourage genuine recommendations and transparent relationships between creators and their audiences.</p>
          </div>

          <div className="bg-white text-black p-4 rounded-lg">
            <div className="text-blue-500 text-xl bg-[#CBDEFD] p-2 w-[10%] rounded-full flex justify-center items-center m-auto"><RiGroupLine /></div>
            <h3 className="font-bold">Community</h3>
            <p>We foster a supportive ecosystem where creators can connect, share insights, and grow together.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
