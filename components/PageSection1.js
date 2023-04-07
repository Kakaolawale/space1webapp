import React from 'react';

const HomePageSection = () => {
  const sections = [
    {
      imageSrc: "/images/space1two.jpg",
      heading: "MODERN WEB/MOBILE APP DEVELOPMENT EXPERIENCE",
      text: "Find high-quality services at every price point. No hourly rates, just project-based pricing.Find the right freelancer to begin working on your project within minutes."
    },
    {
      imageSrc: "/images/space1twelve.jpg",
      heading: "PREMIUM BRANDING EXPERIENCE FROM LOGO TO BROCHURE AND SOUVIRNIRS DESIGNS",
      text: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.Questions? Our round-the-clock support team is available to help anytime, anywhere."
    },
    {
      imageSrc: "/images/space1four.jpg",
      heading: "MAKE HIGH-END ANIMATIONS AND 3D VISUALS WITH GREAT QUALITY",
      text: "Find the talent needed to get your business growing."
    }
  ];

  return (
    <div className="py-5">
      <div className="max-w-10xl tracking-tight mb-2 text-space1-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-gray-100 w-full h-auto py-8 px-4 sm:px-6 lg:px-8">
              <img src={section.imageSrc} alt={`Section ${index + 1}`} className="w-full mb-6 rounded-lg shadow-md sm:mb-0 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-3/4" />
              <h2 className="text-2xl font-bold mt-2 text-center text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-lg text-center text-gray-700">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageSection;
