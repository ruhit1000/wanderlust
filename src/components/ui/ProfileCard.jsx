"use client";
import React from "react";
import Image from "next/image";
import { Camera, MapPin } from "@gravity-ui/icons";
import UpdateUserModal from "./UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { set } from "better-auth";
import { useRouter } from "next/navigation";

const ProfileCard = ({ user }) => {

    const router = useRouter();
  const { name, image, location, memberSince, nationality } = user || {};

  const handleUpdate = async (updatedData) => {
    const { name, image } = updatedData;

    const { data, error } = await authClient.updateUser({
        name,
        image
    })

    if (data) {
        toast.success("User updated successfully!");
        router.refresh();
    }
    if (error) {
        toast.error("Error updating user.");
    }
  };

  // Fallback UI Avatar URL
  const avatarUrl =
    image ||
    `https://ui-avatars.com/api/?name=${name || "User"}&background=random`;

  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md border border-gray-100 p-6 mx-auto">
      {/* Avatar Section */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        {/* Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm">
          <Image
            src={avatarUrl}
            alt={name || "User Profile"}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        {/* Camera Icon Badge */}
        <div className="absolute bottom-0 right-0 bg-[#19A5C3] p-1.5 rounded-full text-white border-2 border-white cursor-pointer hover:bg-[#168a9f] transition z-10">
          <Camera className="w-4 h-4" />
        </div>
      </div>

      {/* Name & Location */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
          {name || "User Name"}
        </h2>
        <div className="flex items-center justify-center text-gray-500 text-sm mt-1 gap-1">
          <MapPin className="w-4 h-4" />
          <span>{location || "Add your location"}</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 mb-6" />

      {/* Stats / Details */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Member since</span>
          <span className="font-semibold text-gray-900">
            {memberSince || "N/A"}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Nationality</span>
          <span className="font-semibold text-gray-900">
            {nationality || "Add nationality"}
          </span>
        </div>
      </div>

      {/* Extracted Edit Profile Modal */}
      <UpdateUserModal user={user} onSubmit={handleUpdate} />
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default ProfileCard;
