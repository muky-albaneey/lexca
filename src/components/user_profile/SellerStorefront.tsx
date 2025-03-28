import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: '$249.99',
    rating: 4.8,
    image: '/images/headphones-1.jpg',
  },
  {
    id: 2,
    name: 'Bluetooth Over-Ear Headphones',
    price: '$179.99',
    rating: 4.6,
    image: '/images/headphones-2.jpg',
  },
  {
    id: 3,
    name: 'Premium True Wireless Earbuds',
    price: '$129.99',
    rating: 4.5,
    image: '/images/earbuds.jpg',
  },
  {
    id: 4,
    name: 'Studio Monitor Headphones',
    price: '$199.99',
    rating: 4.7,
    image: '/images/studio-headphones.jpg',
  },
  {
    id: 5,
    name: 'Portable Bluetooth Speaker',
    price: '$89.99',
    rating: 4.4,
    image: '/images/speaker.jpg',
  },
  {
    id: 6,
    name: 'Home Theater Sound System',
    price: '$399.99',
    rating: 4.9,
    image: '/images/sound-system.jpg',
  },
];

const SellerStorefront = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Store Info */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="space-y-3.5">
          <h1 className="text-2xl font-bold">AudioTech Pro</h1>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-xl">⭐</span>
            <span className="text-gray-700 font-medium">
              4.8 <span className="text-gray-500">(156 reviews)</span>
            </span>
          </div>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-md">
            Electronics
          </span>
          <div className="text-gray-500">
            <p>📦 42 Products</p>
            <p>📅 Joined on May 12, 2021</p>
            <p>📍 San Francisco, CA</p>
          </div>
          <div>
            <h2 className="font-semibold">Verification</h2>
            <ul className="text-gray-500">
              <li>✅ Verified Seller</li>
              <li>✅ Top Rated</li>
              <li>✅ Fast Shipper</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Contact Information</h2>
            <p className="text-blue-500">partners@audiotechpro.com</p>
            <a
              href="https://audiotechpro.com"
              className="text-blue-500 hover:underline"
            >
              audiotechpro.com
            </a>
          </div>
          <div>
            <h2 className="font-semibold">Affiliate Program</h2>
            <p>Commission Rate: 12-15%</p>
            <p>Payment Terms: Net 30</p>
            <button className="bg-black text-white px-4 py-2 mt-2 rounded-md">
              Become an Affiliate
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="mt-8 lg:mt-0">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Products ({products.length})</h2>
            <select className="border rounded-md px-2 py-1 text-gray-700">
              <option value="newest">Newest</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    ⭐<span className="text-gray-700">{product.rating}</span>
                  </div>
                  <p className="text-lg font-semibold">{product.price}</p>
                  <button className="mt-2 w-full bg-black text-white py-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerStorefront;
