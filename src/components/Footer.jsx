import React from "react";
import { motion } from "framer-motion";

export default function Footer({
  companyName = "Heavy Qasim Solutions",
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-20 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF7300] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">ROYAL MUSIC</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading energy efficiency specialists providing government-approved heating grants, 
                insulation solutions, and sustainable home upgrades across the UK.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@heavyqasim.co.uk</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>UK Wide Coverage</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["Trustpilot 4.9", "ECO4 Approved", "Gas Safe", "10+ Years"].map((badge, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-xs font-medium text-gray-200">
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/20">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Our Process", "/process"],
                  ["Case Studies", "/cases"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Grants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/20">Our Grants</h4>
              <ul className="space-y-3">
                {[
                  ["ECO4 Scheme", "/grants/eco4"],
                  ["Boiler Grants", "/grants/boilers"],
                  ["Insulation", "/grants/insulation"],
                  ["Solar Panels", "/grants/solar"],
                  ["Heat Pumps", "/grants/heat-pumps"],
                  ["All Grants", "/grants"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-white/20">Support</h4>
              <ul className="space-y-3 mb-8">
                {[
                  ["Privacy Policy", "/privacy"],
                  ["Terms of Service", "/terms"],
                  ["Complaints", "/complaints"],
                  ["FAQ", "/faq"],
                  ["Apply Now", "/apply"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-gray-300 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { name: "Facebook", icon: "F", color: "hover:bg-blue-600" },
                    { name: "Instagram", icon: "I", color: "hover:bg-pink-600" },
                    { name: "LinkedIn", icon: "L", color: "hover:bg-blue-500" },
                    { name: "Twitter", icon: "T", color: "hover:bg-blue-400" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="/"
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <span className="font-semibold">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Save on Your Energy Bills?</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Check your eligibility for government grants in under 2 minutes
            </p>
            <button className="bg-[#FF7300] to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Check Eligibility Now
            </button>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300"
        >
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {year} <span className="font-semibold text-white">Heavy Qasim Solutions</span>. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-400">
              Registered in England & Wales | Company No: 12345678
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <span >ECO4 Approved Installer</span>
            <span>•</span>
            <span>Gas Safe Registered</span>
            <span>•</span>
            <span>Trustpilot 4.9/5</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}