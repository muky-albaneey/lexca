'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Affiliate has completely changed how I monetize my fashion blog. The platform is intuitive, the commission rates are competitive, and I love how easy it is to track my earnings.",
    name: 'Sarah Johnson',
    role: 'Fashion Blogger',
    image: '/user.svg', // Replace with an actual image path
  },
  {
    text: "Using this platform has increased my earnings by 30%! It's easy to use and very effective.",
    name: 'John Doe',
    role: 'Tech Reviewer',
    image: '/user.svg', // Replace with an actual image path
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#DBEAFE] py-16">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="mx-4 max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <FaQuoteLeft size={32} className="text-gray-300 mb-4" />
          <p className="text-gray-700 italic mb-6">
            {testimonials[currentIndex].text}
          </p>
          <div className="flex items-center">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={48} // 12 * 4 = 48px
            height={48} // 12 * 4 = 48px
            className="w-12 h-12 rounded-full mr-4"
          />
            <div>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
