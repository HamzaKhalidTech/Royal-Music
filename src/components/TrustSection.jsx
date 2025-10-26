import React from "react";
import la1 from "../assets/la1.webp";
import l2 from "../assets/l2.gif";

const TrustSection = () => {
  return (
    <section className="trust-section py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 rounded-full -translate-y-36 translate-x-36 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-32 translate-y-32 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-4 py-2 w-fit mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-medium text-sm">TRUSTED NATIONWIDE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-[#FF7300]">11,000+</span> Successful
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Installations Across the UK
              </h3>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Our proven process ensures homeowners across the UK become more 
              financially resilient while living in healthier and smarter environments. 
              Apply for free, greener upgrades today and secure a sustainable future 
              for you and the coming generations.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF7300]">98%</div>
                <div className="text-sm text-gray-600 mt-1">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF7300]">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF7300]">100%</div>
                <div className="text-sm text-gray-600 mt-1">UK Coverage</div>
              </div>
            </div>

            {/* UK Map */}
            <div className="pt-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Nationwide Coverage</h4>
                </div>
                <img 
                  src={la1} 
                  alt="UK Coverage Map showing our service areas across the United Kingdom" 
                  className="w-full rounded-lg shadow-sm" 
                />
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={l2}
                  alt="Professional installation team at work in Glasgow"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-green-700 px-4 py-3 rounded-xl shadow-lg border border-green-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-sm">Trusted & Verified</span>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">Glasgow Installation</div>
                      <div className="text-sm text-gray-600 mt-1">Completed in 2 days</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-700 font-bold">£2,800</div>
                      <div className="text-xs text-gray-500">Grant Covered</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-4 rounded-2xl shadow-xl transform rotate-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-xs opacity-90">Trustpilot</div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 transform -rotate-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-gray-700">
                    <div>250+</div>
                    <div>Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;