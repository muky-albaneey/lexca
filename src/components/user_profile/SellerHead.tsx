import Image from 'next/image';

const SellerHead = () => {
  return (
    <div className="relative w-full">
      {/* Background Cover Image */}
      <div className="relative h-60 md:h-40 w-full">
        <Image
          src="/banner.svg" // Change to your cover image path
          alt="Cover"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Logo and Navigation */}
      <div className="absolute left-4 -bottom-12 md:-bottom-8 flex items-center space-x-4">
        {/* Logo */}
        <div className="w-20 h-20 md:w-16 md:h-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            src="/logo.svg" // Change to your logo path
            alt="Logo"
            width={80}
            height={80}
            objectFit="cover"
          />
        </div>
        
        <div>
          {/* Featured Seller Badge */}
          <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured Seller
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="absolute left-4 bottom-0 md:bottom-4 flex bg-white rounded-lg shadow-lg px-3 py-2 space-x-4">
        <button className="font-semibold border-b-2 border-black">Products</button>
        <button className="text-gray-500">About</button>
        <button className="text-gray-500">Reviews</button>
        <button className="text-gray-500">Affiliate Program</button>
      </div>
    </div>
  );
};

export default SellerHead;
