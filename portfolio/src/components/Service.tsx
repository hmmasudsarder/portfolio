"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
  },
  // {
  //   id: 2,
  //   title: "UI/UX Design",
  //   description:
  //     "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
  // },
  {
    id: 3,
    title: "Debugging code in javascript fixed the bug",
    description:
      "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
  },
];

const Services = ({ id }: { id: string }) => {
  const [selected, setSelected] = useState(1);

  return (
    <section
      id={id}
      className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 min-h-screen"
    >
      <div className="text-center my-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          My Quality Services
        </h2>
        <p className="text-black mt-6 text-lg sm:text-xl font-medium text-center max-w-3xl mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelected(service.id)}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-lg transition-all duration-300 cursor-pointer my-4 ${
              selected === service.id
                ? "bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-lg scale-105"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            <div>
              <span
                className={`flex text-2xl sm:text-3xl font-bold ${
                  selected === service.id ? "text-white" : "text-purple-600"
                }`}
              >
                0{service.id}
              </span>
              <h3
                className={`text-xl sm:text-2xl font-bold mt-1 ${
                  selected === service.id ? "text-white" : "text-purple-600"
                }`}
              >
                {service.title}
              </h3>
              {selected === service.id && (
                <p className="text-white text-sm sm:text-base mt-2 font-medium">
                  {service.description}
                </p>
              )}
            </div>
            <ArrowUpRight
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                selected === service.id
                  ? "text-white transform rotate-45"
                  : "text-purple-600 hover:text-purple-800"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
