"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import SecondaryButton from "@/shared/SecondaryButton";

// Define form data structure
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const ContactForm = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset(); // Reset form after successful submission
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id={id}
      className="flex items-center justify-center py-16 px-8 bg-purple-50"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg space-y-8 md:space-y-0 md:space-x-12">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-xl sm:text-5xl md:text-2xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
            Let’s work together!
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            I design and code beautifully simple things, and I love what I do.
            Let’s make something amazing together!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={`border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.firstName
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className={`border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.lastName
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Enter a valid email address",
                  })}
                  className={`border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: "Enter a valid 10-digit phone number",
                  })}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <select
                {...register("category", {
                  required: "Please select a category",
                })}
                className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.category
                    ? "focus:ring-red-500"
                    : "focus:ring-purple-500"
                }`}
              >
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message"
                rows={4}
                {...register("message", { required: "Message is required" })}
                className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "focus:ring-red-500"
                    : "focus:ring-purple-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <SecondaryButton type="submit">
              {isSubmitting ? "Sending..." : "Send Message"}
            </SecondaryButton>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-auto">
          <ContactInfo icon={Phone} title="Phone" value="+01716621249" />
          <ContactInfo
            icon={Mail}
            title="Email"
            value="hmmasudsardar@mail.com"
          />
          <ContactInfo
            icon={MapPin}
            title="Address"
            value="Dhaka, Bangladesh"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

// Contact Info Component
interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  value,
}) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-md">
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-center md:text-left">
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  </div>
);
