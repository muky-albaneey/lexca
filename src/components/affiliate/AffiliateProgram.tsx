// import { IoAnalyticsSharp } from "react-icons/io"; 
import { BsFillPeopleFill } from "react-icons/bs"; 
import { MdOutlineGppGood } from "react-icons/md"; 
// import { IoAnalytics } from "react-icons/io"; 
import { TbWorld } from "react-icons/tb"; 
import { AiOutlineLaptop } from "react-icons/ai"; 
import { BsCurrencyDollar } from "react-icons/bs"; 
import { IoAnalytics } from "react-icons/io5";

export default function AffiliateProgram() {
    return (
      <div className="bg-black text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Turn Your Influence Into Income</h1>
          <p className="mt-4 text-lg">
            Join thousands of successful affiliates who are earning commissions by promoting products they love.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold">Apply Now</button>
            <button className="border border-white px-6 py-3 rounded-md font-semibold">Learn How It Works</button>
          </div>
        </div>
        
        <div className="bg-white text-black mt-12 py-12 px-4 md:px-8 rounded-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Why Join Our Affiliate Program?</h2>
          <p className="text-center mt-2 max-w-2xl mx-auto">
            Our affiliate program is designed to help you maximize your earning potential with industry-leading tools and support.
          </p>
  
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            <div className="border-x border-b rounded-b-lg border-[#ebe0e0]">
              <div className="p-6  rounded-md flex items-start gap-4">
                
                <div className="w-10 px-4 h-8 flex items-center justify-center bg-[#dbdada80] font-bold rounded-full ">
                   <span className="text-xl"><BsCurrencyDollar /></span>
                </div>

                <div>
                  <h3 className="font-semibold">Competitive Commissions</h3>
                  <p>Earn up to 15% commission on every sale. Our tiered commission structure rewards top performers.</p>
                </div>
              </div>
              <div className="p-6  rounded-md flex items-start gap-4">
                
                <div className="w-10 px-4 h-8 flex items-center justify-center bg-[#dbdada80] font-bold rounded-full ">
                <span className="text-xl"><AiOutlineLaptop /></span>
                </div>

                <div>
                  <h3 className="font-semibold">Marketing Resources</h3>
                  <p>Access product images, descriptions, and promotional materials to boost your marketing efforts.</p>
                </div>
              </div>  
            </div> 
           <div className="border-x border-b rounded-b-lg border-[#ebe0e0]">
            <div className="p-6  rounded-md flex items-start gap-4">
                
                <div className="w-10 px-4 h-8 flex items-center justify-center bg-[#dbdada80] font-bold rounded-full ">
                <span className="text-xl"><TbWorld /></span>
                </div>

                <div>
                  <h3 className="font-semibold">Global Marketplace</h3>
                  <p>Promote products to a worldwide audience with international shipping options available.</p>
                </div>
              </div>
              <div className="p-6  rounded-md flex items-start gap-4">
               
                <div className="w-10 px-4 h-8 flex items-center justify-center bg-[#dbdada80] font-bold rounded-full ">
                <span className="text-xl"><MdOutlineGppGood /></span>
                </div>

                <div>
                  <h3 className="font-semibold">Reliable Payments</h3>
                  <p>Get paid on time, every time with multiple payment options and a low minimum payout threshold.</p>
                </div>
              </div>
           </div>
           <div className="border-x border-b rounded-b-lg border-[#ebe0e0]">

              <div className="p-6  rounded-md flex items-start gap-4">
                <div className="w-10 px-4 h-8 flex items-center justify-center bg-[#dbdada80] font-bold rounded-full ">    
                <span className="text-xl"><IoAnalytics /></span>
                </div>

                  <div>
                    <h3 className="font-semibold">Real-time Analytics</h3>
                    <p>Track your performance with detailed analytics and reporting tools to optimize your strategy.</p>
                  </div>
                </div>
                <div className="p-6  rounded-md flex items-start gap-4">
                   <div className="w-10 px-4 h-8 flex items-center justify-center bg-[#dbdada80] font-bold rounded-full ">
                   <span className="text-xl"><BsFillPeopleFill /></span>
                   </div>
                 
                  <div>
                    <h3 className="font-semibold">Dedicated Support</h3>
                    <p>Our affiliate management team is available to help you maximize your earnings and success.</p>
                  </div>
                </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
  