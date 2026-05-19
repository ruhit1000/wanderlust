import MyBookingCard from "@/components/ui/MyBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-semibold">My Bookings</h1>
      <p className="opacity-70 mt-2">
        Manage and view your upcoming travel plans
      </p>

      <div className="grid grid-cols-1 gap-2 bg-white p-6 rounded-lg shadow-md mt-6">
        {bookings.map((booking) => (
          <MyBookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
