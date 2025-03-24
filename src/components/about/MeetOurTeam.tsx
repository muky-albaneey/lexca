import React from 'react';

const MeetOurTeam = () => {
  const team = [
    {
      name: 'Madam Pablo',
      role: 'Founder & CEO',
      description: 'Passionate about creating tools that empower digital creators.',
    },
    {
      name: 'Madam Pablo',
      role: 'Founder & CEO',
      description: 'Passionate about creating tools that empower digital creators.',
    },
    {
      name: 'Madam Pablo',
      role: 'Founder & CEO',
      description: 'Passionate about creating tools that empower digital creators.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Meet Our Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10c0 3.866-3.134 7-7 7S4 13.866 4 10 7.134 3 11 3s7 3.134 7 7zM5.32 16.584a9 9 0 0113.36 0M15 21h-6" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Meet our team</h2>
          <p className="text-gray-500 mt-2">The Passionate individuals behind affiliate</p>
        </div>

        {/* Team Members */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <div className="h-20 w-20 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full mb-4 text-xl font-semibold">
                  MP
                </div>
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                {member.role}
              </a>
              <p className="text-gray-500 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Community Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Ready to join our community</h2>
          <p className="mt-4 text-gray-400">
            Whether you're a content creator looking to monetize your audience or a brand seeking partnership opportunities, we'd love to hear from you.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              Start earning now
            </button>
            <button className="border border-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Affiliate Program Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold">Join our affiliate program</h2>
          <p className="mt-2 text-gray-400">
            Sign up to receive news and updates about new products and special commissions opportunities.
          </p>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-64 bg-gray-800 border border-gray-700 text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md font-medium hover:bg-gray-200 transition">
              Start Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
