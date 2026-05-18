import ProfileCard from "@/components/ui/ProfileCard";
import TravelStatistics from "@/components/ui/TravelStatistics"; // Import the new component
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userStats = {
    totalBookings: 12,
    countriesVisited: 18,
    upcomingTrips: 2,
    totalSpent: 15750,
  };

  return (
    <div className="bg-gray-50 min-h-screen p-10 md:p-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-normal tracking-tight mb-2">My Profile</h1>
        <p className="text-gray-500 mb-8">
          Manage your account settings and travel preferences.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard user={user} />
          </div>

          {/* Right Column: Statistics & Other Details */}
          <div className="lg:col-span-2">
            <TravelStatistics stats={userStats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
