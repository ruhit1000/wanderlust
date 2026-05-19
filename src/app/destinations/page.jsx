import DestinationCard from "@/components/ui/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
  const destinations = await res.json();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-16">
      {/* Header Section */}
      <div className="mb-8 md:mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 tracking-tight">
          Explore All Destinations
        </h1>
        <h3 className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
          Find your perfect travel experience from our curated collection.
        </h3>
        <p className="text-sm text-gray-400 mt-4 font-medium">
          Showing {destinations?.length || 0} destinations
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {destinations?.map((dest) => (
          <DestinationCard key={dest._id} destination={dest} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
