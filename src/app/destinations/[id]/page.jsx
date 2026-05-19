import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Star, Calendar } from "@gravity-ui/icons";
import EditDestination from "@/components/ui/EditDestination";
import DeletePackage from "@/components/ui/DeletePackage";
import BookingCard from "@/components/ui/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  // Fetch data
  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const destination = await res.json();
  const { destinationName, country, duration, description, imageUrl } =
    destination;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-800">
      {/* Top Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/destinations"
          className="flex items-center text-gray-500 hover:text-gray-900 transition font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Destinations
        </Link>
        <div className="flex gap-3">
          <EditDestination destination={destination} />
          <DeletePackage packageName={destinationName} id={id} />
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-100 md:h-125 rounded-2xl overflow-hidden mb-10 relative">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1280px"
          priority
        />
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          {/* Location & Title */}
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium">{country}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-4 text-gray-900">
            {destinationName}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-gray-600 mb-10 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-900">4.9</span>
              <span>(234 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-2xl font-normal mb-4 text-gray-900">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
