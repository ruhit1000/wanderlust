import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Input } from "@heroui/react";
import {
  ArrowLeft,
  Pencil,
  TrashBin,
  MapPin,
  Star,
  Calendar,
  Check,
  ArrowRight,
} from "@gravity-ui/icons";
import EditDestination from "@/components/ui/EditDestination";
import DeletePackage from "@/components/ui/DeletePackage";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetch data
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const destination = await res.json();
  const {
    destinationName,
    country,
    duration,
    price,
    departureDate,
    description,
    imageUrl,
  } = destination;

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
        <div className="lg:col-span-1">
          <Card
            className="border border-gray-100 shadow-lg sticky top-8 rounded-xl"
            shadow="sm"
          >
            <div className="flex flex-col gap-6 p-5">
              {/* Price */}
              <div>
                <p className="text-gray-500 text-sm mb-1">Starting from</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-[#19A5C3]">
                    ${price}
                  </span>
                  <span className="text-gray-500 mb-1 text-sm">per person</span>
                </div>
              </div>

              {/* Date Picker (HeroUI Input fallback) */}
              <Input
                type="text"
                variant="flat"
                defaultValue={departureDate}
                aria-label="Departure Date"
                className="w-full bg-gray-50 rounded-lg"
                classnames={{
                  inputWrapper: "bg-gray-50 border-none shadow-none",
                }}
              />

              {/* Book Button */}
              <Button
                color="primary"
                className="w-full bg-[#19A5C3] text-white font-medium text-md py-6 rounded-lg"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Button>

              {/* Perks */}
              <div className="flex flex-col gap-3 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" /> Free cancellation
                  up to 7 days
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" /> Travel insurance
                  included
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" /> 24/7 customer
                  support
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
