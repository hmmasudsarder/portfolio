"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface TBlog {
  title: string;
  content: string;
  author: string;
  _id: string;
  image: string;
  category: string;
}

const Blog = ({ loadId }: { loadId: string }) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        const data = await res.json();
        setBlogs(data?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <section id={loadId} className="py-16 px-8 min-h-screen">
      <div className="text-center my-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          Recent Blogs
        </h2>
        <p className="text-black mt-8 text-xl font-medium text-center">
          We put your ideas and thus your wishes in the form of a unique web
          <br /> project that inspires you and your customers.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog._id}`}
              key={blog._id}
              className="border p-4 rounded-lg shadow"
            >
              <Image
                width={300}
                height={400}
                src={blog.image || "/fallback-image.jpg"}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">{blog.title}</h3>
              <p className="text-gray-700 mt-2">
                {blog.content.substring(0, 100)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
