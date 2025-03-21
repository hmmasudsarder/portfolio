"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { TProject } from "@/app/types/projectType";
import SecondaryButton from "@/shared/SecondaryButton";
import PrimaryButton from "@/shared/PrimaryButton";
import Link from "next/link";

const ProjectDetails = () => {
  const params = useParams();
  const [project, setProject] = useState<TProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return; // Ensure `id` exists before fetching

    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process?.env?.NEXT_PUBLIC_API_URL}/api/projects/${params.id}`
        );
        const data = await res.json();
        setProject(data?.data || null);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params?.id]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (!project) return <p className="text-center text-xl">Project not found</p>;

  return (
    <section>
      <div className="relative w-full h-56 flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1320916/pexels-photo-1320916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Change to your actual image path
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>

        {/* Text Content */}
        <div className="relative text-center text-white">
          <h1 className="text-3xl font-bold">Deloitte</h1>
          <p className="text-sm mt-2">
            <Link href="/" className="text-gray-300 font-semibold text-xl">
              Home
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 pb-20">
        {/* Header */}
        <header className="bg-gradient-to-r uppercase from-purple-600 to-indigo-600 py-6 text-center text-white text-xl font-bold">
          {project.title}
        </header>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6">
          <Image
            src={project.image || "/fallback-image.jpg"}
            width={1000}
            height={500}
            alt={project.title || "Project Image"}
            className="rounded-lg"
          />
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-600">Category: {project.category}</p>
            <div className="flex justify-center gap-8 mt-4">
              {project.frontEndGitLink && (
                <SecondaryButton>
                  <a href={project.frontEndGitLink} target="_blank">
                    Frontend Code
                  </a>
                </SecondaryButton>
              )}
              {project.backEndGitLink && (
                <SecondaryButton>
                  <a href={project.backEndGitLink} target="_blank">
                    Backend Code
                  </a>
                </SecondaryButton>
              )}
              {project.liveLink && (
                <PrimaryButton>
                  <a href={project.liveLink} target="_blank">
                    Live Preview
                  </a>
                </PrimaryButton>
              )}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed">{project.content}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
