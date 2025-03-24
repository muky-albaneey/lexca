"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BiChevronUp } from "react-icons/bi"; 
import { BiChevronDown } from "react-icons/bi"; 
const faqs = [
  "How do I join the AffiliateHub program?",
  "How much can I earn as an affiliate?",
  "When and how do I get paid?",
  "Do I need a website to become an affiliate?",
  "What kind of support do you offer to affiliates?",
  "Can I promote products internationally?",
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <>
     <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-gray-600 text-center mt-2">
        Find answers to common questions about our affiliate program.
      </p>
      
      {/* FAQ List */}
      <div className="mt-6 border-t border-gray-300">
        {faqs.map((question, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm font-medium flex items-center">
              {question}
                
               
              </span>
              <span className="mr-2">{openIndex === index ? <BiChevronUp /> : <BiChevronDown />}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 text-sm px-6 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
          </div>
        ))}
      </div>
      
     
    </div>
     {/* Call to Action */}
     <div className="bg-black text-white text-center py-6 mt-6">
     <h3 className="text-lg font-bold">Ready to Start Earning?</h3>
     <p className="text-sm mt-2 px-4">
       Join thousands of successful affiliates who are earning commissions by
       promoting products they love.
     </p>
     <button className="bg-white text-black px-4 py-2 rounded-md mt-4 font-medium">
       Apply Now
     </button>
   </div>
   </>
  );
};

export default FAQ;
