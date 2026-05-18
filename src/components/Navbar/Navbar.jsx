"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative flex justify-between items-center py-4 px-4 md:px-10 bg-white shadow-md rounded-lg">
      {/* 1. Mobile Menu Button */}
      <div className="lg:hidden flex flex-1 items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-600 focus:outline-none rounded-md hover:bg-gray-100"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 2. Desktop Left Links */}
      <div className="hidden lg:flex flex-1">
        <ul className="flex gap-4 font-medium">
          <li
            className={
              pathname === "/"
                ? "text-blue-500 underline"
                : "hover:text-blue-500 transition"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathname === "/destinations"
                ? "text-blue-500 underline"
                : "hover:text-blue-500 transition"
            }
          >
            <Link href="/destinations">Destinations</Link>
          </li>
          <li
            className={
              pathname === "/my-bookings"
                ? "text-blue-500 underline"
                : "hover:text-blue-500 transition"
            }
          >
            <Link href="/my-bookings">My Bookings</Link>
          </li>
          <li
            className={
              pathname === "/add-destination"
                ? "text-blue-500 underline"
                : "hover:text-blue-500 transition"
            }
          >
            <Link href="/add-destination">Add Destination</Link>
          </li>
        </ul>
      </div>

      {/* 3. Center Logo */}
      <div className="flex justify-center flex-1 lg:flex-none">
        <Link href="/">
          <Image
            src={"/assets/Wanderlast.png"}
            alt={"Wanderlust Logo"}
            width={130}
            height={130}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

      {/* 4. Right Links */}
      <div className="flex flex-1 justify-end">
        <ul className="flex gap-3 lg:gap-4 font-medium items-center">
          {user ? (
            <>
              {/* Hide greeting on very small mobile screens to save space */}
              <li className="hidden sm:block text-sm lg:text-base text-gray-700">
                Welcome, {user?.name?.split(" ")[0]}!
              </li>
              <li>
                <ProfileAvatar user={user} />
              </li>
            </>
          ) : (
            <>
              <li
                className={
                  pathname === "/login"
                    ? "text-blue-500 underline"
                    : "hover:text-blue-500 transition"
                }
              >
                <Link href="/login">Login</Link>
              </li>
              <li
                className={
                  pathname === "/signup"
                    ? "text-blue-500 underline"
                    : "hover:text-blue-500 transition"
                }
              >
                <Link href="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[110%] left-0 w-full bg-white shadow-xl border border-gray-100 rounded-lg z-50 md:hidden flex flex-col py-4 px-6 gap-4">
          <ul className="flex flex-col gap-4 font-medium text-lg">
            <li
              className={pathname === "/" ? "text-blue-500" : "text-gray-700"}
              onClick={closeMenu}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                pathname === "/destinations" ? "text-blue-500" : "text-gray-700"
              }
              onClick={closeMenu}
            >
              <Link href="/destinations">Destinations</Link>
            </li>
            <li
              className={
                pathname === "/my-bookings" ? "text-blue-500" : "text-gray-700"
              }
              onClick={closeMenu}
            >
              <Link href="/my-bookings">My Bookings</Link>
            </li>
            <li
              className={
                pathname === "/add-destination"
                  ? "text-blue-500"
                  : "text-gray-700"
              }
              onClick={closeMenu}
            >
              <Link href="/add-destination">Add Destination</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
