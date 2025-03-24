'use client';

import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: '$249.99',
    rating: '4.8',
    brand: 'AudioTech Pro',
    image: '/headphones.png',
  },
  {
    id: 2,
    name: 'Smart Fitness Tracker Watch',
    price: '$129.99',
    rating: '4.6',
    brand: 'FitGear',
    image: '/watch.png',
  },
  {
    id: 3,
    name: 'Ultra HD Smart TV 55-inch',
    price: '$599.99',
    rating: '4.7',
    brand: 'VisualPlus',
    image: '/tv.png',
  },
  {
    id: 4,
    name: 'Professional Blender Set',
    price: '$189.99',
    rating: '4.5',
    brand: 'KitchenPro',
    image: '/blender.png',
  },
  {
    id: 5,
    name: 'Ergonomic Office Chair',
    price: '$299.99',
    rating: '4.9',
    brand: 'ComfortSeating',
    image: '/chair.png',
  },
  {
    id: 6,
    name: 'Portable Bluetooth Speaker',
    price: '$79.99',
    rating: '4.4',
    brand: 'SoundWave',
    image: '/speaker.png',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <a
            href="#"
            className="text-gray-600 hover:text-black flex items-center gap-1"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#E5E5E5] rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  ⭐ {product.rating} • By {product.brand}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
