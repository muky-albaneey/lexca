import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: '10 Proven Strategies to Boost Your Affiliate Marketing Income',
    description:
      'Learn the top strategies that successful affiliate marketers use to maximize their earnings and grow their business sustainably.',
    date: 'Mar 15, 2025',
    readTime: '8 min read',
    author: 'Sarah Johnson',
    image: '/seo.svg', // Add actual image paths here
  },
  {
    id: 2,
    title: 'How to Choose the Right Products to Promote as an Affiliate',
    description:
      'Selecting the right products to promote is crucial for your success. This guide will help you identify profitable opportunities.',
    date: 'Mar 10, 2025',
    readTime: '6 min read',
    author: 'Michael Chen',
    image: '/products.svg', // Add actual image paths here
  },
  {
    id: 3,
    title: 'Building Trust with Your Audience: The Key to Affiliate Success',
    description:
      'Discover why trust is the foundation of successful affiliate marketing and how to build authentic relationships with your audience.',
    date: 'Mar 5, 2025',
    readTime: '7 min read',
    author: 'Emma Davis',
    image: '/trust.svg', // Add actual image paths here
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-sm font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Latest Articles
            </span>
            <h2 className="text-3xl font-bold mt-2">From Our Blog</h2>
          </div>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1"
          >
            View all articles →
          </a>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="flex items-center mr-3">
                    📅 {article.date}
                  </span>
                  <span className="flex items-center">⏱️ {article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-500 rounded-full">
                    👤
                  </span>
                  {article.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
