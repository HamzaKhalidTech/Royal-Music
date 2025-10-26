import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGrantsOpen, setIsGrantsOpen] = useState(false);
  const [isMobileGrantsOpen, setIsMobileGrantsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null); // used to detect outside clicks
  const grantsButtonRef = useRef(null); // for focus management
  const location = useLocation();

  const grantsItems = [
    { name: "ECO4 Scheme", path: "/grants/eco4" },
    { name: "Boiler Grants", path: "/grants/boilers" },
    { name: "Insulation Grants", path: "/grants/insulation" },
    { name: "Solar Panel Grants", path: "/grants/solar" },
    { name: "Heat Pump Grants", path: "/grants/heat-pumps" },
    { name: "All Government Grants", path: "/grants" },
  ];

  const quickGrants = [
    { name: "Check Eligibility", path: "/eligibility" },
    { name: "Apply Now", path: "/apply" },
    { name: "Grant Calculator", path: "/calculator" },
  ];

  // Close menus on route change (good UX)
  useEffect(() => {
    setIsMenuOpen(false);
    setIsGrantsOpen(false);
    setIsMobileGrantsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside and handle Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsGrantsOpen(false);
        setIsMobileGrantsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsGrantsOpen(false);
        setIsMobileGrantsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Homepage">
            <div className="w-10 h-10 bg-[#FF9500] from-[#FF9500] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <img className="w-[30px]" src={logo} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-6">Royal Music</span>
              <span className="text-xs text-gray-500 font-medium">Marketing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Process", path: "/process" },
                { name: "Case Studies", path: "/cases" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-[#FF9500] font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9500] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Desktop Grants Dropdown */}
              <div className="relative">
                <button
                  ref={grantsButtonRef}
                  onClick={() => setIsGrantsOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={isGrantsOpen}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#FF9500] font-medium transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-900 rounded"
                >
                  <span>Grants</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isGrantsOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isGrantsOpen && (
                  <div
                    role="menu"
                    aria-label="Grants menu"
                    className="absolute left-0 mt-6 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 animate-fadeIn z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Available Grants</h3>
                          <ul className="space-y-2">
                            {grantsItems.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.path}
                                  onClick={() => setIsGrantsOpen(false)}
                                  className="block py-2 px-3 text-gray-600 hover:text-[#FF9500] hover:bg-green-50 rounded-lg transition-all duration-200"
                                  role="menuitem"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Quick Actions</h3>
                          <ul className="space-y-2">
                            {quickGrants.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.path}
                                  onClick={() => setIsGrantsOpen(false)}
                                  className="block py-2 px-3 text-gray-600 hover:text-[#FF9500] hover:bg-green-50 rounded-lg transition-all duration-200"
                                  role="menuitem"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#FF9500] font-medium transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9500] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
              <Link
                to="/eligibility"
                className="bg-gradient-to-r from-[#FF9500] to-yellow-600 hover:from-[#FF9500] hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Check Eligibility
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring[#FF9500]"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="space-y-1 pt-4 border-t border-gray-200">
            {[{ name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Process", path: "/process" },
            { name: "Case Studies", path: "/cases" },
            { name: "Contact", path: "/contact" }].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Grants Dropdown */}
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => setIsMobileGrantsOpen((v) => !v)}
                className="flex items-center justify-between w-full py-4 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 font-medium text-lg focus:outline-none"
                aria-expanded={isMobileGrantsOpen}
                aria-controls="mobile-grants"
              >
                <span>Grants</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileGrantsOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id="mobile-grants"
                className={`transition-all duration-300 ease-in-out ${
                  isMobileGrantsOpen ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4">
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-4">Available Grants</h4>
                    <div className="space-y-1">
                      {grantsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileGrantsOpen(false);
                          }}
                          className="block py-3 px-6 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 text-base border-l-2 border-green-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-4">Quick Actions</h4>
                    <div className="space-y-1">
                      {quickGrants.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileGrantsOpen(false);
                          }}
                          className="block py-3 px-6 text-gray-600 hover:text-blue-600 hover:bg-[#FF9500] rounded-lg transition-all duration-200 text-base border-l-2 border-blue-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="border-t border-gray-200 pt-4 px-2">
              <Link
                to="/eligibility"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-[#FF9500] to-emerald-600 hover:from-#FF9500]  hover:to-emerald-700 text-white font-semibold text-center py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
