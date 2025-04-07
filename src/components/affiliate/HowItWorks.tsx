export default function HowItWorks() {
  const stepPositions = {
    1: "top-4 left-80",
    2: "top-14 left-20",
    3: "top-24 left-80",
    4: "top-34 left-20",
    5: "top-44 left-80"
  };
  
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
        <p className="mt-2 text-gray-600">
          Getting started as an affiliate is simple. Follow these steps to begin earning commissions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 "></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row'}`}>
              {/* Empty space for alternating layout */}
              <div className="w-1/2 block"></div>
              
              {/* Dot on the vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>

              {/* Step Content (Step number next to title) */}
              <div className="w-1/2 ">
                <div className="flex flex-col gap-2 md:px-11">
                  {/* Step Number (beside title) */}
                  <div className="w-full text-white">1</div>
                  <div
                      className={`w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full absolute
                        ${step.number === '1' || step.number === '3' || step.number === '5' 
                          ? `left-1/3 md:left-72 top-[${index * 5}rem]` 
                          : `left-2/3 md:left-96 top-[${index * 5}rem]`}
                      `}
                    >
                      {step.number}
                    </div>



                  <h3 className="font-semibold md:px-1 px-2">{step.title}</h3>
                </div>
                <p className={`md:text-right md:text-sm md:px-1 px-2 text-[.6rem]
                        ${step.number === '1' || step.number === '3' || step.number === '5' 
                          ? `text-right` 
                          : `text-left`}
                      `}>{step.description}</p>
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
