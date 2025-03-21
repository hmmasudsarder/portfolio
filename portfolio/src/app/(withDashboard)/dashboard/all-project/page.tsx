"use client";
import { TProject } from "@/app/types/projectType";
import ProjectTable from "@/components/ProjectTable";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AllProjects: React.FC = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);


  const handleEdit = (id: string) => {
    router.push(`/dashboard/edit-project/${id}`);
  };

  const handleDelete = async (projectId: string) => {
  
    const token = localStorage.getItem("token"); // Retrieve token from localStorage or cookies
    if (!token) {
      alert("No authentication token found");
      return;
    }
  
    if (!confirm("Are you sure you want to delete this project?")) return;
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${projectId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
  
      if (!res.ok) {
        console.error("Failed to delete project:", await res.text());
        throw new Error("Failed to delete project");
      }
  
      // Update state
      setProjects((prev) => prev.filter((p) => p._id !== projectId));
      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project.");
    }
  };
  return (
    <section>
      <div className="text-center my-10">
        <h2 className="text-4xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight uppercase">
          Projects
        </h2>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <ProjectTable
          data={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default AllProjects;
