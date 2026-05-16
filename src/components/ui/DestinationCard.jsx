import { ArrowUpRight, Calendar, MapPin } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationCard = ({ destination }) => {
  const { destinationName, country, duration, price, imageUrl, _id } = destination;
  return (
    <div className="flex flex-col justify-between">
      <div>
        <Image src={imageUrl} alt={destinationName} width={600} height={300} />
        <div className="p-2">
          <div className="flex gap-1 items-center mt-3">
            <MapPin /> {country}
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">{destinationName}</h3>
            <h3 className="text-xl font-bold">
              ${price}
              <span className="text-sm font-normal opacity-60">/person</span>
            </h3>
          </div>
          <div className="flex gap-1 items-center mt-1">
            <Calendar />
            {duration}
          </div>
        </div>
      </div>
      <Link
        href={`/destinations/${_id}`}
        className="flex gap-1 items-center mt-3 text-blue-600 ml-2"
      >
        BOOK NOW
        <ArrowUpRight />
      </Link>
    </div>
  );
};

export default DestinationCard;
