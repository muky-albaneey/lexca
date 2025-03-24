import { FC } from 'react';
import { FaLaptop, FaCamera, FaDumbbell } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineKitchen } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

const categories = [
  { name: 'Electronics', icon: <FaLaptop className="text-blue-500" />, bgColor: 'bg-blue-100' },
  { name: 'Fashion', icon: <GiClothes className="text-purple-500" />, bgColor: 'bg-purple-100' },
  { name: 'Home & Kitchen', icon: <MdOutlineKitchen className="text-yellow-500" />, bgColor: 'bg-yellow-100' },
  { name: 'Beauty', icon: <AiOutlineHeart className="text-pink-500" />, bgColor: 'bg-pink-100' },
  { name: 'Photography', icon: <FaCamera className="text-green-500" />, bgColor: 'bg-green-100' },
  { name: 'Sports & Fitness', icon: <FaDumbbell className="text-red-500" />, bgColor: 'bg-red-100' },
];

const CategorySection: FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-center text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-0">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg border-[#E5E5E5] hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${category.bgColor}`}>
              {category.icon}
            </div>
            <span className="mt-2 text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
