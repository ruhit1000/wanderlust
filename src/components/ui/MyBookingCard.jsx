import React from "react";
import Image from "next/image";
import { Calendar, Eye, MapPin, TrashBin, Check } from "@gravity-ui/icons";
import Link from "next/link";
import DeleteBooking from "./DeleteBooking";

const MyBookingCard = ({ booking }) => {
  // Destructure the expected booking data.
  const {
    userName,
    userId,
    userEmail,
    destinationPrice,
    destinationName,
    destinationImage,
    destinationId,
    departureDate,
    _id,
  } = booking || {};

  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-4xl mx-auto my-4 p-4 gap-6">
      {/* Image Section */}
      <div className="relative w-full md:w-[320px] h-50 shrink-0 rounded-lg overflow-hidden">
        <Image
          src={destinationImage || "/placeholder-image.jpg"}
          alt={destinationName || "Destination"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between grow">
        <div>
          {/* Status Badge */}
          <div className="flex items-center gap-1 bg-green-50 text-green-700 w-fit px-3 py-1 rounded-full text-sm font-medium mb-3 border border-green-100">
            <Check className="w-4 h-4" />
            <span>Confirmed</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            {destinationName || "Unknown Destination"}
          </h2>

          {/* Details list */}
          <div className="flex flex-col gap-2 text-gray-600 text-sm mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>Departure: {departureDate || "Date not set"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              {/* Using a placeholder booking ID structure since it wasn't in your destructured props */}
              <span>
                Booking ID: {destinationId ? `b${destinationId}` : "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer section with Price and Buttons */}
        <div className="flex justify-between items-end mt-4 md:mt-0">
          {/* Price */}
          <div className="text-3xl font-bold text-[#19A5C3]">
            ${destinationPrice || "0"}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <DeleteBooking destinationName={destinationName} bookingId={_id} />

            <Link
              className="bg-[#19A5C3] text-white font-medium px-3 py-2 rounded-lg hover:bg-[#168a9f] flex items-center gap-2"
              href={`/destinations/${destinationId}`}
            >
              <Eye className="w-4 h-4" />
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
