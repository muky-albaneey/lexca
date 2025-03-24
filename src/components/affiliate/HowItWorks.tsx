export default function HowItWorks() {
    return (
      <div className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
          <p className="mt-2 text-gray-600">
            Getting started as an affiliate is simple. Follow these steps to begin earning commissions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-1/2 hidden md:block"></div>
                <div className="w-1/2 md:w-auto flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full">
                    {step.number}
                  </div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <div className="w-1/2">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const steps = [
    { number: '1', title: 'Apply to Join', description: 'Complete the application form with details about your platform and audience.' },
    { number: '2', title: 'Get Approved', description: 'Our team reviews your application and approves you to join our affiliate network.' },
    { number: '3', title: 'Choose Products', description: 'Browse our catalog and select products that align with your audience’s interests.' },
    { number: '4', title: 'Share Your Links', description: 'Generate unique affiliate links and share them on your website, social media, or other channels.' },
    { number: '5', title: 'Earn Commissions', description: 'Earn commissions on every sale made through your affiliate links. Get paid monthly.' },
  ];
  