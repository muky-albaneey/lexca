'use client';
import Image from 'next/image';

const sellers = [
  {
    id: 1,
    name: 'AudioTech Pro',
    category: 'Electronics',
    rating: 4.8,
    reviews: 156,
    products: 42,
    since: 'May 2021',
    image: '/audio-tech.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'FitGear',
    category: 'Fitness',
    rating: 4.6,
    reviews: 98,
    products: 67,
    since: 'Nov 2020',
    image: '/fit-gear.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'ComfortSeating',
    category: 'Furniture',
    rating: 4.9,
    reviews: 201,
    products: 28,
    since: 'Jun 2020',
    image: '/comfort-seating.jpg',
    featured: true,
  },
];

export default function TrustedSellers() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Our Trusted Sellers</h2>
      <p className="text-gray-600 text-center mt-2 mb-6">
        Browse our network of verified sellers offering quality products across various categories. Partner with them to earn commissions on every sale.
      </p>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Featured Sellers</h3>
        <a href="#" className="text-black text-sm font-medium flex items-center hover:underline">
          View All <span className="ml-1">&rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <div key={seller.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="relative">
              <Image src={seller.image} alt={seller.name} width={500} height={300} className="w-full h-48 object-cover" />
              {seller.featured && (
                <span className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md">
                  Featured Seller
                </span>
              )}
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">{seller.name}</h4>
              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md inline-block mt-1">{seller.category}</span>
              <p className="text-sm text-gray-600 mt-2">
                Specializing in premium products with expert reviews and competitive pricing.
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="ml-1 text-sm font-semibold">{seller.rating}</span>
                <span className="ml-1 text-xs text-gray-500">({seller.reviews})</span>
              </div>
              <button className="w-full mt-4 py-2 bg-black text-white rounded-md hover:opacity-90">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
