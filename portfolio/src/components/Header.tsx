"use client";
import React from "react";
import Image from "next/image";
import image from "../images/masud.jpg";
import facebook from "../images/icons/icons8-facebook-250.png";
import github from "../images/icons/icons8-github-500.png";
import linkedin from "../images/icons/icons8-linkedin-250.png";

const Header = ({ id }: { id: string }) => {
  const resume = "/cv/my-cv.pdf";

  return (
    <section
      id={id}
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:min-h-screen"
    >
      {/* Left Section (Text) */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          I am Masud
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          Next-Level Web <br className="hidden sm:block" /> Developer.
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-[90%] md:max-w-[600px] mx-auto md:mx-0">
          I break down complex user experience problems to create
          integrity-focused solutions that connect billions of people.
        </p>

        {/* Buttons & Socials */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          {/* CV Download Button */}
          <a
            href={resume}
            className="inline-flex  items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-indigo-500 rounded-lg shadow-sm cursor-pointer transition-colors duration-300 hover:bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 hover:text-white hover:border-indigo-600"
            download="masud_sarder_resume.pdf"
          >
            Download CV
          </a>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                link: "https://x.com/hmmasudsardar",
                img: facebook,
                alt: "Facebook",
              },
              {
                link: "https://github.com/hmmasudsarder",
                img: github,
                alt: "GitHub",
              },
              {
                link: "https://www.linkedin.com/in/hmmasudsarder/",
                img: linkedin,
                alt: "LinkedIn",
              },
            ].map(({ link, img, alt }) => (
              <a
                key={alt}
                href={link}
                target="_blank"
                className="inline-flex transition duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg items-center justify-center px-3 py-3 rounded-full text-base font-medium text-center text-white border border-indigo-500  shadow-sm cursor-pointer hover:bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 hover:text-white hover:border-indigo-600"
              >
                <Image
                  src={img}
                  width={24}
                  height={24}
                  alt={alt}
                  className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 border-black rounded-xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition">
          <Image src={image} alt="Profile" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Header;
