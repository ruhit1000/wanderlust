import React from "react";

const Banner = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 my-8">
      <div className="relative w-full rounded-2xl bg-[url('/assets/banner.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 shadow-lg">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 px-6 text-center flex flex-col items-center gap-6 w-full max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Discover Your <br className="hidden sm:block" /> Next Adventure
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-2xl">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button className="uppercase bg-[#19A5C3] hover:bg-[#168a9f] text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto tracking-wider text-sm shadow-md">
              Explore Now
            </button>
            <button className="uppercase bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto tracking-wider text-sm border border-white/30 shadow-md">
              View Destination
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-11/12 max-w-5xl mx-auto -mt-16 md:-mt-12 lg:-mt-14 shadow-xl rounded-xl bg-white border border-gray-100">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Location */}
          <div className="px-6 py-4 flex-1 hover:bg-gray-50 cursor-pointer transition rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
            <h3 className="text-sm font-semibold text-gray-900">Location</h3>
            <p className="text-xs text-gray-500 mt-1">Address, City or Zip</p>
          </div>

          {/* Date */}
          <div className="px-6 py-4 flex-1 hover:bg-gray-50 cursor-pointer transition">
            <h3 className="text-sm font-semibold text-gray-900">
              Date/Duration
            </h3>
            <p className="text-xs text-gray-500 mt-1">Anytime/3 Days</p>
          </div>

          {/* Budget */}
          <div className="px-6 py-4 flex-1 hover:bg-gray-50 cursor-pointer transition">
            <h3 className="text-sm font-semibold text-gray-900">Budget</h3>
            <p className="text-xs text-gray-500 mt-1">$0-$3000</p>
          </div>

          {/* People */}
          <div className="px-6 py-4 flex-1 hover:bg-gray-50 cursor-pointer transition">
            <h3 className="text-sm font-semibold text-gray-900">People</h3>
            <p className="text-xs text-gray-500 mt-1">5-10</p>
          </div>

          {/* Search Button */}
          <div className="p-3 bg-white flex items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
            <button className="w-full md:w-auto h-full min-h-12 bg-[#19A5C3] hover:bg-[#168a9f] text-white rounded-lg px-8 font-medium transition-colors shadow-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
