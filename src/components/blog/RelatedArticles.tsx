import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: '10 Proven Strategies to Boost Your Affiliate Marketing Income',
    date: 'Mar 15, 2025',
    readTime: '8 min read',
    description:
      'Learn the top strategies that successful affiliate marketers use to maximize their earnings and grow their business sustainably.',
    author: 'Sarah Johnson',
    image: '/images/seo.png',
  },
  {
    id: 2,
    title: 'How to Choose the Right Products to Promote as an Affiliate',
    date: 'Mar 10, 2025',
    readTime: '6 min read',
    description:
      'Selecting the right products to promote is crucial for your success. This guide will help you identify profitable opportunities.',
    author: 'Michael Chen',
    image: '/images/products.png',
  },
  {
    id: 3,
    title:
      'Building Trust with Your Audience: The Key to Affiliate Success',
    date: 'Mar 5, 2025',
    readTime: '7 min read',
    description:
      'Discover why trust is the foundation of successful affiliate marketing and how to build authentic relationships with your audience.',
    author: 'Emma Davis',
    image: '/images/trust.png',
  },
];

export default function RelatedArticles() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg"
            >
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="mr-2">{article.date}</span>
                  <span>•</span>
                  <span className="ml-2">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 hover:text-blue-500 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-purple-500 font-bold">
                      {article.author[0]}
                    </span>
                  </div>
                  <span className="text-gray-700 text-sm">
                    {article.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
