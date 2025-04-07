import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Heart } from 'lucide-react';

const categories = ['All', 'Electronics', 'Home & Kitchen', 'Fashion', 'Sport & outdoor', 'Health & Beauty'];
const sorts = ['Newest', 'Price', 'Most Popular', 'Highest Commission'];

const products = [
  { id: 1, name: 'Wireless Noise-Cancelling Headphones', description: 'Premium over-ear headphones with active noise cancellation and ...', price: 249.99, discount: 25.0, category: 'Electronics', rating: 4.8 },
  { id: 2, name: 'Smart Fitness Watch', description: 'Track your workouts, heart rate, sleep, and more with this...', price: 179.99, discount: 18.0, category: 'Electronics', rating: 4.6 },
  { id: 3, name: 'Portable Bluetooth Speaker', description: 'Waterproof speaker with 24-hour battery life and immersive 360°...', price: 129.99, discount: 13.0, category: 'Electronics', rating: 4.7 },
  { id: 4, name: 'Ergonomic Office Chair', description: 'Adjustable chair with lumbar support and breathable mesh...', price: 299.99, discount: 30.0, category: 'Home & Kitchen', rating: 4.5 },
  { id: 5, name: 'Professional Blender', description: 'High-performance blender with variable speed control and pulse...', price: 199.99, discount: 20.0, category: 'Kitchen', rating: 4.9 },
  { id: 6, name: 'Wireless Charging Pad', description: 'Fast wireless charger compatible with all Qi-enabled devices.', price: 39.99, discount: 4.0, category: 'Electronics', rating: 4.4 },
  { id: 7, name: 'Smart Home Security Camera', description: 'HD security camera with night vision, motion detection, and two...', price: 149.99, discount: 15.0, category: 'Home & Kitchen', rating: 4.6 },
  { id: 8, name: 'Stainless Steel Cookware Set', description: '10-piece cookware set with tri-ply construction for even heat...', price: 349.99, discount: 35.0, category: 'Kitchen', rating: 4.7 },
  { id: 9, name: 'Professional Blender', description: 'High-performance blender with variable speed control and pulse...', price: 199.99, discount: 20.0, category: 'Kitchen', rating: 4.9 },
  { id: 10, name: 'Wireless Charging Pad', description: 'Fast wireless charger compatible with all Qi-enabled devices.', price: 39.99, discount: 4.0, category: 'Electronics', rating: 4.4 },
  { id: 11, name: 'Smart Home Security Camera', description: 'HD security camera with night vision, motion detection, and two...', price: 149.99, discount: 15.0, category: 'Home & Kitchen', rating: 4.6 },
  { id: 12, name: 'Stainless Steel Cookware Set', description: '10-piece cookware set with tri-ply construction for even heat...', price: 349.99, discount: 35.0, category: 'Kitchen', rating: 4.7 },
  { id: 13, name: 'Stainless Steel Cookware Set', description: '10-piece cookware set with tri-ply construction for even heat...', price: 349.99, discount: 35.0, category: 'Kitchen', rating: 4.7 },
];

export default function ProductListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products
    .filter((product) => selectedCategory === 'All' || product.category === selectedCategory)
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch (selectedSort) {
        case 'Price':
          return a.price - b.price;
        case 'Most Popular':
          return b.rating - a.rating;
        case 'Highest Commission':
          return b.discount - a.discount;
        default:
          return b.id - a.id; // Newest
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
console.log(totalPages)
console.log(paginatedProducts)
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <div className="flex gap-2">
          <select
            className="border rounded px-3 py-2 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            className="border rounded px-3 py-2 text-sm"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            {sorts.map((sort) => (
              <option key={sort} value={sort}>{sort}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, idx) => (
              <Card key={idx} className="animate-pulse">
                <CardContent className="p-4">
                  <div className="h-40 bg-gray-200 mb-2 rounded" />
                  <div className="h-4 bg-gray-200 w-3/4 mb-1 rounded" />
                  <div className="h-3 bg-gray-200 w-1/2 mb-1 rounded" />
                  <div className="h-4 bg-gray-200 w-1/3 mb-1 rounded" />
                  <div className="h-3 bg-gray-200 w-1/4 mb-1 rounded" />
                  <div className="h-3 bg-gray-200 w-1/4 mb-1 rounded" />
                  <div className="h-3 bg-gray-200 w-1/4 mb-1 rounded" />
                  <div className="flex justify-between items-center mt-3">
                    <div className="h-6 bg-gray-200 w-16 rounded" />
                    <div className="h-6 w-6 bg-gray-200 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))
          : paginatedProducts.map((product) => (
              <Card key={product.id} className="relative">
                <CardContent className="p-4">
                  <div className="h-40 bg-gray-100 mb-2 rounded" />
                  <h2 className="font-semibold text-sm mb-1 truncate" title={product.name}>{product.name}</h2>
                  <p className="text-xs text-gray-500 truncate" title={product.description}>{product.description}</p>
                  <div className="text-sm font-semibold mt-2">${product.price.toFixed(2)}</div>
                  <div className="text-xs text-green-600">
                    ${product.discount.toFixed(2)} ({Math.round((product.discount / product.price) * 100)}%)
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{product.category}</div>
                  <div className="text-xs text-gray-500">⭐ {product.rating}</div>
                  <div className="flex justify-between items-center mt-3">
                    <Button size="sm">Get Link</Button>
                    <Heart className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button size="sm" variant="outline" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            size="sm"
            variant={currentPage === i + 1 ? 'default' : 'outline'}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button size="sm" variant="outline" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
}
