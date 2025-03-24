import { FC } from 'react';
import { FaLaptop, FaShoppingBag, FaHome, FaHeart, FaCamera, FaDumbbell } from 'react-icons/fa';

const categories = [
  { icon: <FaLaptop className="text-blue-500" size={24} />, name: 'Electronics', bgColor: 'bg-blue-100' },
  { icon: <FaShoppingBag className="text-purple-500" size={24} />, name: 'Fashion', bgColor: 'bg-purple-100' },
  { icon: <FaHome className="text-yellow-500" size={24} />, name: 'Home & Kitchen', bgColor: 'bg-yellow-100' },
  { icon: <FaHeart className="text-pink-500" size={24} />, name: 'Beauty', bgColor: 'bg-pink-100' },
  { icon: <FaCamera className="text-green-500" size={24} />, name: 'Photography', bgColor: 'bg-green-100' },
  { icon: <FaDumbbell className="text-red-500" size={24} />, name: 'Sports & Fitness', bgColor: 'bg-red-100' },
];

const CategoryGrid: FC = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <div className={`${category.bgColor} p-4 rounded-full mb-2`}>
              {category.icon}
            </div>
            <span className="font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
