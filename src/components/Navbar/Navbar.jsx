"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Person } from "@gravity-ui/icons";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-md rounded-lg">
      <div>
        <ul className="flex gap-4 font-medium">
          <li className={pathname === "/" ? "text-blue-500 underline" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathname === "/destinations" ? "text-blue-500 underline" : ""
            }
          >
            <Link href="/destinations">Destinations</Link>
          </li>
          <li
            className={
              pathname === "/my-bookings" ? "text-blue-500 underline" : ""
            }
          >
            <Link href="/my-bookings">My Bookings</Link>
          </li>
          <li
            className={
              pathname === "/add-destination" ? "text-blue-500 underline" : ""
            }
          >
            <Link href="/add-destination">Add Destination</Link>
          </li>
        </ul>
      </div>
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt={"Wanderlust Logo"}
          width={130}
          height={130}
          className="h-auto w-auto"
          loading="eager"
        />
      </div>
      <div>
        <ul className="flex gap-4 font-medium items-center">
          {user ? (
            <>
              <li>Welcome, {user?.name?.split(' ')[0]}!</li>
              <li><ProfileAvatar user={user} /></li>
            </>
          ) : (
            <>
              <li
                className={
                  pathname === "/login" ? "text-blue-500 underline" : ""
                }
              >
                <Link href="/login">Login</Link>
              </li>
              <li
                className={
                  pathname === "/signup" ? "text-blue-500 underline" : ""
                }
              >
                <Link href="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
