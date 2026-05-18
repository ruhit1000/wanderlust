import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-5 sm:px-10 lg:px-16 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white mb-3 md:mb-4 tracking-wide font-medium text-sm md:text-base">
              NEWSLETTER
            </h3>
            <p className="mb-4 text-xs sm:text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-800 px-4 py-3 rounded-lg max-w-sm">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm w-full text-white placeholder-gray-500"
              />
              <span className="text-white text-lg cursor-pointer hover:text-[#19A5C3] transition-colors">
                ↗
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 md:mb-4 tracking-wide font-medium text-sm md:text-base">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                Destinations
              </li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                My Bookings
              </li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                My Profile
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 md:mb-4 tracking-wide font-medium text-sm md:text-base">
              SUPPORT
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 md:mb-4 tracking-wide font-medium text-sm md:text-base">
              CONTACT US
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>786 901 1622</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">
                info@wanderlust.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <p className="text-xs sm:text-sm">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex gap-6 text-white text-xl">
            <span className="cursor-pointer hover:text-[#19A5C3] transition-colors">
              X
            </span>
            <span className="cursor-pointer hover:text-[#19A5C3] transition-colors">
              in
            </span>
            <span className="cursor-pointer hover:text-[#19A5C3] transition-colors">
              ◎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
