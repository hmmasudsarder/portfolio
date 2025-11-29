"use client";

import PrimaryButton from "@/shared/PrimaryButton";
import SecondaryButton from "@/shared/SecondaryButton";
import verifyToken from "@/utils/verifyToken";
import { JwtPayload } from "jsonwebtoken";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { JwtPayload } from "jsonwebtoken"; 

// Extend JwtPayload to include 'role'
interface CustomJwtPayload extends JwtPayload {
  role?: string;
}

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("token") : null;

  let tokenInfo: CustomJwtPayload | null = null; 

  if (token) {
    tokenInfo = verifyToken(token) as CustomJwtPayload; // Type assertion
  }

  // Check if a token exists in localStorage
  useEffect(() => {
    setIsLoggedIn(!!token && token.length > 0); // Check if token exists and isn't empty
  }, [token]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update state
    // Redirect to the login page or home
    window.location.href = "/login";
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a
                className="block lg:text-2xl md:text-xl text-sm font-semibold  sm:text-5xl  my-4 md:my-6  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight"
                href="#"
              >
                MAS
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-10 text-lg font-semibold ">
                  <li>
                    <Link
                      className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                      href="#services"
                    >
                      Service
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                      href="#project"
                    >
                      Project
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                      href="#skill"
                    >
                      Skill
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                      href="#blog"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <Link
                      className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                      href="#contact"
                    >
                      Contact
                    </Link>
                  </li>

                  {tokenInfo?.role === "admin" ? (
                    <li>
                      <Link
                        className="text-black font-semibold leading-2 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                        href="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                  ) : null}

                  {/* Toggle Button */}
                  {/* <li>
                    <label
                      htmlFor="AcceptConditions"
                      className="relative inline-block h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                    >
                      <input
                        type="checkbox"
                        id="AcceptConditions"
                        className="peer sr-only"
                      />
                      <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
                      <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
                        <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-200 transition"></span>
                      </span>
                    </label>
                  </li> */}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {/* <div className="sm:flex sm:gap-4">
                  {isLoggedIn ? (
                    <PrimaryButton handler={handleLogout}>Logout</PrimaryButton>
                  ) : (
                    <>
                      <Link href="/login">
                        <PrimaryButton>Login</PrimaryButton>
                      </Link>

                      <Link href="/register" className="hidden sm:flex">
                        <SecondaryButton>Register</SecondaryButton>
                      </Link>
                    </>
                  )}
                </div> */}

                {/* <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div> */}
              </div> 
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
