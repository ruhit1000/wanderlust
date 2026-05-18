"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowLeft, Compass } from "@gravity-ui/icons"; // Assuming Compass exists, if not, remove it or use MapPin
import { redirect } from "next/navigation";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-sky-50 to-white p-4">
      <div className="max-w-lg w-full text-center">
        {/* Decorative Icon & 404 Number */}
        <div className="flex justify-center items-center mb-6 text-[#19A5C3]">
          <h1 className="text-9xl font-black tracking-tighter drop-shadow-sm">
            4
          </h1>
          <div className="mx-2 bg-sky-100 rounded-full p-4 animate-bounce">
            <Compass className="w-20 h-20 text-[#19A5C3]" />
          </div>
          <h1 className="text-9xl font-black tracking-tighter drop-shadow-sm">
            4
          </h1>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Wandered off the map?
        </h2>
        <p className="text-gray-500 mb-10 text-lg leading-relaxed px-4">
          We can't seem to find the destination you're looking for. It might
          have been moved, deleted, or perhaps it never existed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={()=> redirect('/')}
            className="bg-[#19A5C3] hover:bg-[#168a9f] text-white font-medium px-8 py-6 rounded-xl transition-colors shadow-lg shadow-sky-200"
            startContent={<ArrowLeft className="w-5 h-5" />}
          >
            Back to Homepage
          </Button>

          <Button
            onClick={()=> redirect('/destinations')}
            variant="flat"
            className="bg-sky-100 text-[#19A5C3] font-medium px-8 py-6 rounded-xl hover:bg-sky-200 transition-colors"
          >
            Explore Destinations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
