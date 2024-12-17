"use client";

import { useState } from "react";

export default function ContactForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    about: "",
  });

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the prop function
  };

  return (
    <div className="bg-white rounded-3xl p-8 max-w-xl w-full relative text-black">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex items-center gap-2 mb-6">
        <img
          src="/placeholder.svg?height=48&width=48"
          className="w-12 h-12 rounded-full"
          alt="Expert 1"
        />
        <img
          src="/placeholder.svg?height=48&width=48"
          className="w-12 h-12 rounded-full"
          alt="Expert 2"
        />
        <div>
          <h2 className="text-2xl font-medium">Book a call with our experts</h2>
          <p className="text-gray-600">
            to discuss your goals and build a project plan
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2">Phone Number</label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 rounded-l-lg bg-gray-50">
                <img
                  src="/placeholder.svg?height=20&width=28"
                  className="w-7 h-5"
                  alt="India flag"
                />
                <span className="ml-2 text-gray-500">+91</span>
              </div>
              <input
                type="tel"
                className="flex-1 px-4 py-2 border rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">
              What is your budget? <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            >
              <option value="">Select budget range</option>
              <option value="0-5k">$0 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k+">$10,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">
            About Project <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-black rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            REQUEST A QUOTE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            By submitting the form I agree with the{" "}
            <a href="#" className="text-indigo-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
