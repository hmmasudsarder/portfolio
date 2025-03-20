import ProductItem from "@/components/ProductItem";
import React from "react";
import { TProject } from "../types/projectType";

const AllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project`, {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <section className="py-16 px-8  min-h-screen">
      <div className="text-center my-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          My Recent Works
        </h2>
        <p className="text-black mt-8 text-xl  font-medium text-center">
          We put your ideas and thus your wishes in the form of a unique web
          project that <br /> inspires you and you customers.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto">
        {projects?.data?.map((project: TProject) => (
          <ProductItem key={project?._id} projectData={project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
