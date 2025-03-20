import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2a1454] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a
            className="block lg:text-2xl md:text-xl text-sm font-semibold  sm:text-5xl  my-4 md:my-6  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight"
            href="#"
          >
            Pronoybanik82@gmail.com
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex space-x-6 text-sm text-white">
            <li>
              <a href="#" className="hover:text-purple-300">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-300">
                Services
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-purple-300">
                works
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-purple-300">
                Skill
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-purple-300">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright Section */}
        <div className="text-sm text-gray-300 text-center">
          © 2024 All rights reserved by{" "}
          <a href="#" className="hover:text-purple-400">
            ThemeJunction
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
