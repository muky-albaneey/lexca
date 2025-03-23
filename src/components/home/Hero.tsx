'use client';

import { useState } from 'react';
import Image from 'next/image'

const images = [
  '/hero_img1.svg', // Replace with your actual image paths
  '/hero_img2.svg',
  '/hero_img3.svg',
  '/hero_img4.svg',
];

export default function Hero() {
  const [heroImage, setHeroImage] = useState('/hero_img.svg');

  return (
    <div className="relative min-h-screen w-full bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Start Earning as an <br /> Affiliate Today!
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Join our network of sellers and earn commissions on every sale.
              It&apos;s free to sign up and easy to get started.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                Join as Seller
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 border">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image Grid */}
      <div className="mt-8 px-4 md:px-16 overflow-x-auto snap-x snap-mandatory">
  <div className="flex gap-4 md:grid md:grid-cols-4">
    {images.map((img, index) => (
      <div
        key={index}
        onClick={() => setHeroImage(img)}
        className="cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105 flex-shrink-0 w-[45%] md:w-full snap-center"
      >
        <Image
          src={img}
          alt={`Image ${index + 1}`}
          width={500} // Set an appropriate width
          height={300} // Set an appropriate height
          className="h-40 md:h-48 w-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
