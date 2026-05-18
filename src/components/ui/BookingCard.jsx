"use client";
import { authClient } from "@/lib/auth-client";
import { ArrowRight, Check } from "@gravity-ui/icons";
import { Button, Card, Form, Input } from "@heroui/react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const { name, email, id } = user || {};

  const {
    destinationName,
    country,
    duration,
    price,
    departureDate,
    description,
    imageUrl,
    _id,
  } = destination;

  const handleBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let bookingData = Object.fromEntries(formData.entries());

    bookingData = {
      ...bookingData,
      userId: id,
      destinationName: destinationName,
      destinationPrice: price,
      userName: name,
      userEmail: email,
      destinationId: _id,
      destinationImage: imageUrl,
    };

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const result = await res.json();

    if (result?.acknowledged) {
      toast.success("Booking successful!");
      e.target.reset();
    } else {
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
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
          <Form onSubmit={handleBooking}>
            <Input
              type="text"
              variant="flat"
              defaultValue={departureDate}
              name="departureDate"
              aria-label="Departure Date"
              className="w-full bg-gray-50 rounded-lg mb-2"
              classnames={{
                inputWrapper: "bg-gray-50 border-none shadow-none",
              }}
            />

            {/* Book Button */}
            <Button
              color="primary"
              className="w-full bg-[#19A5C3] text-white font-medium text-md py-6 rounded-lg"
              type="submit"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Form>

          {/* Perks */}
          <div className="flex flex-col gap-3 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" /> Free cancellation up
              to 7 days
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" /> Travel insurance
              included
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" /> 24/7 customer support
            </div>
          </div>
        </div>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default BookingCard;
