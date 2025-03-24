import React from 'react';

export default function About() {
  return (
    <div className="font-sans">
      {/* About Section */}
      <section className="bg-black text-white text-center p-8">
        <h1 className="text-xl font-bold">About Affiliate</h1>
        <p>Empowering creators and influencers to monetize their audience through trusted product recommendations</p>
      </section>

      {/* Mission Section */}
      <section className="bg-white text-center p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <span className="text-blue-500 text-xl">ℹ️</span>
          </div>
        </div>
        <h2 className="text-xl font-bold">Our Mission</h2>
        <p className="mb-8">
          At affiliate, we're on a mission to revolutionize affiliate marketing by creating a transparent, user-friendly platform that connects quality products with authentic recommendations.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold">For Creators</h3>
            <p>We empower content creators with the tools to monetize their influence without compromising their authenticity. Our platform offers competitive commission rates, real-time analytics, and a diverse product catalog.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold">For Shoppers</h3>
            <p>We curate trusted product recommendations from verified creators across diverse categories. Every purchase supports creators while ensuring customers receive quality products from established marketplaces.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white text-center p-8">
        <h2 className="text-xl font-bold">Our Values</h2>
        <p className="mb-8">The principle that guides everything we do at affiliate</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white text-black p-4 rounded-lg">
            <div className="text-blue-500 text-xl">🔒</div>
            <h3 className="font-bold">Quality</h3>
            <p>We maintain high standards for products featured on our platform, ensuring creators can recommend with confidence.</p>
          </div>

          <div className="bg-white text-black p-4 rounded-lg">
            <div className="text-blue-500 text-xl">❤️</div>
            <h3 className="font-bold">Authenticity</h3>
            <p>We encourage genuine recommendations and transparent relationships between creators and their audiences.</p>
          </div>

          <div className="bg-white text-black p-4 rounded-lg">
            <div className="text-blue-500 text-xl">👥</div>
            <h3 className="font-bold">Community</h3>
            <p>We foster a supportive ecosystem where creators can connect, share insights, and grow together.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
