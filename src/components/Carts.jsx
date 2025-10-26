import { Link } from "react-router-dom";

const Carts = () => {
  const cards = [
    {
      title: "Simple Process",
      subtitle: "Energy Savings Have Never Been Easier",
      description:
        "Eligible homeowners enjoy an enjoyable experience that prioritizes their comfort while helping them save £100s on their bills each year.",
      button: true,
      link: "/about",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Why Choose Us",
      subtitle: "Reliable Energy Installers",
      description:
        "Our experience allows us to choose the best materials and installations that suit your home for long-term savings.",
      button: true,
      link: "/about",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Grants Tailored for You!",
      subtitle: "Different needs, different installations",
      description:
        "We are experts in installing various heating system upgrades, from boilers and heat pumps to solar panels.",
      button: true,
      link: "/about",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      gradient: "from-orange-500 to-amber-500"
    },
  ];

  return (
    <div className="relative py-16 px-6 md:px-8 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-500 rounded-full"></div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
         What We Offer <span className="text-[#FF7300]">Choose Us</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Why Artists Trust Royal Music Marketing
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Card Content */}
            <div className="relative p-8 h-full flex flex-col">
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {card.title}
                </h3>
                <h4 className="text-lg font-semibold text-green-600 mb-4">
                  {card.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              {card.button && (
                <div className="mt-auto">
                  <Link
                    to={card.link}
                    className={`inline-flex items-center justify-center w-full bg-[#FF7300]${card.gradient} hover:shadow-lg transform hover:-translate-y-1 text-black font-semibold px-6 py-4 rounded-xl transition-all duration-300 group/btn`}
                  >
                    <span>Learn More</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
              <div className="absolute inset-[2px] rounded-2xl bg-white z-10"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of satisfied homeowners who are already benefiting from our energy solutions.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center bg-[#FF7300] to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Get Your Free Assessment</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;