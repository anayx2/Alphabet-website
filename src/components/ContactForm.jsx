// import { useState } from "react";

// export default function ContactForm() {
//   const [isModalOpen, setIsModalOpen] = useState(true); // State for modal visibility
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     budget: "",
//     about: "",
//   });

//   const handleOpenModal = () => {
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//     handleCloseModal();
//   };

//   return (
//     <div>
//       {/* Button to open the Contact Form */}

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-3xl p-8 w-full max-w-3xl shadow-lg relative text-black">
//             {/* Close Button */}
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Header */}
//             <div className="flex items-center mb-6">
//               <div class="flex -space-x-2 overflow-hidden">
//                 <img
//                   class="inline-block size-10 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 ></img>

//                 <img
//                   class="inline-block size-10 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 ></img>
//               </div>
//               <div className="ml-4">
//                 <h2 className="text-2xl font-semibold">
//                   Book a call with our experts
//                 </h2>
//                 <p className="text-gray-500 text-sm">
//                   to discuss your goals and build a project plan
//                 </p>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-gray-700 mb-1">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                     placeholder="John Doe"
//                     required
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, fullName: e.target.value })
//                     }
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-gray-700 mb-1">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                     placeholder="you@example.com"
//                     required
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               {/* Phone and Budget */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-gray-700 mb-1">
//                     Phone <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex">
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                       placeholder="8123456789"
//                       required
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-1">
//                     What is your budget? <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                     required
//                     value={formData.budget}
//                     onChange={(e) =>
//                       setFormData({ ...formData, budget: e.target.value })
//                     }
//                   >
//                     <option value="" disabled>
//                       Select your budget
//                     </option>
//                     <option value="Less than $1000">Less than $1000</option>
//                     <option value="$1000 - $5000">$1000 - $5000</option>
//                     <option value="More than $5000">More than $5000</option>
//                   </select>
//                 </div>
//               </div>

//               {/* About Project */}
//               <div>
//                 <label className="block text-gray-700 mb-1">
//                   About Project <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                   placeholder="Briefly describe your project"
//                   required
//                   value={formData.about}
//                   onChange={(e) =>
//                     setFormData({ ...formData, about: e.target.value })
//                   }
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <div className="text-center mt-6">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
//                 >
//                   REQUEST A QUOTE
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 ml-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <p className="text-center text-gray-500 text-sm">
//                 By submitting the form I agree with the{" "}
//                 <a href="#" className="text-indigo-600 hover:underline">
//                   Privacy Policy
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight, Globe, Clock, X } from "lucide-react";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [timeFormat, setTimeFormat] = useState("12h");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    about: "",
    selectedDate: new Date(2024, 11, 19),
    duration: "15m",
    timeSlot: null,
  });

  const [currentMonth, setCurrentMonth] = useState(11);

  const timeSlots = [
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleTimeSlotSelect = (slot) => {
    setFormData((prev) => ({
      ...prev,
      timeSlot: slot,
    }));
    // Here you would typically add logic for final submission
    console.log("Complete Booking Data:", formData);
  };

  const CustomCaption = ({ date, decreaseMonth, increaseMonth }) => (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">
          December <span className="text-gray-500">2024</span>
        </h2>
      </div>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={decreaseMonth}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-4 h-4 text-gray-500" />
        </button>
        <button
          type="button"
          onClick={increaseMonth}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {step === 1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-7xl shadow-lg relative text-black">
            {/* Close Button */}
            <button
              onClick={() => setStep(0)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-semibold">
                  Book a call with our experts
                </h2>
                <p className="text-gray-500 text-sm">
                  to discuss your goals and build a project plan
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Phone and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="8123456789"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    What is your budget? <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select your budget
                    </option>
                    <option value="Less than $1000">Less than $1000</option>
                    <option value="$1000 - $5000">$1000 - $5000</option>
                    <option value="More than $5000">More than $5000</option>
                  </select>
                </div>
              </div>

              {/* About Project */}
              <div>
                <label className="block text-gray-700 mb-1">
                  About Project <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Briefly describe your project"
                  required
                  value={formData.about}
                  onChange={(e) =>
                    setFormData({ ...formData, about: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
                >
                  SCHEDULE A MEETING
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2"
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
              </div>

              <p className="text-center text-gray-500 text-sm">
                By submitting the form I agree with the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="fixed inset-0 flex items-start md:items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div className="bg-white w-[2rem] min-h-screen md:min-h-0 md:w-auto md:rounded-[32px] p-6 md:p-8 md:max-w-[95%] relative">
            <button
              onClick={() => setStep(1)}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="grid md:grid-cols-[250px,2fr,200px] gap-8">
              {/* Mobile Header Section - Shows on mobile, hidden on desktop */}
              <div className="md:col-span-3 md:hidden space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                    HL
                  </div>
                  <span className="text-gray-600 font-medium">Alphabet Technology</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl text-gray-900 font-semibold">
                    Project discussion
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Schedule a short intro call, and we'd love to discuss how we
                    can elevate your business with our varied services.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <div className="flex rounded-lg border border-gray-200 p-0.5">
                      <button
                        className={`px-4 py-1 rounded-md text-sm transition-colors ${
                          formData.duration === "15m"
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, duration: "15m" }))
                        }
                      >
                        15m
                      </button>
                      <button
                        className={`px-4 py-1 rounded-md text-sm transition-colors ${
                          formData.duration === "30m"
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, duration: "30m" }))
                        }
                      >
                        30m
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <select className="flex-1 text-sm text-gray-900 rounded-lg border border-gray-200 py-2 px-3 pr-8 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCN0M4OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-[length:12px_8px] bg-[right_12px_center] bg-no-repeat">
                      <option>Asia/Kolkata</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Left Panel - Hidden on mobile */}
              <div className="hidden md:block space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                    HL
                  </div>
                  <span className="text-gray-900 font-medium">Alphabet Technology</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl text-gray-900 font-semibold">
                    Project discussion
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Schedule a short intro call, and we'd love to discuss how we
                    can elevate your business with our varied services.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <div className="flex rounded-lg border border-gray-200 p-0.5">
                      <button
                        className={`px-4 py-1 rounded-md text-sm transition-colors ${
                          formData.duration === "15m"
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, duration: "15m" }))
                        }
                      >
                        15m
                      </button>
                      <button
                        className={`px-4 py-1 rounded-md text-sm transition-colors ${
                          formData.duration === "30m"
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, duration: "30m" }))
                        }
                      >
                        30m
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <select className="flex-1 text-sm text-gray-900 rounded-lg border border-gray-200 py-2 px-3 pr-8 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCN0M4OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-[length:12px_8px] bg-[right_12px_center] bg-no-repeat">
                      <option>Asia/Kolkata</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="md:border-x border-gray-100 md:px-8">
                <DayPicker
                  mode="single"
                  selected={formData.selectedDate}
                  onSelect={(date) =>
                    setFormData((prev) => ({ ...prev, selectedDate: date }))
                  }
                  month={new Date(2024, currentMonth)}
                  onMonthChange={(month) => setCurrentMonth(month.getMonth())}
                  components={{ Caption: CustomCaption }}
                  showOutsideDays
                  className="rdp-custom w-full"
                />
              </div>

              {/* Time Slots */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">
                    Thu {formData.selectedDate.getDate()}
                  </span>
                  <div className="flex rounded-lg border border-gray-200 p-0.5">
                    <button
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        timeFormat === "12h"
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                      onClick={() => setTimeFormat("12h")}
                    >
                      12h
                    </button>
                    <button
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        timeFormat === "24h"
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                      onClick={() => setTimeFormat("24h")}
                    >
                      24h
                    </button>
                  </div>
                </div>

                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 -mr-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      className={`w-full px-4 py-2.5 text-sm text-gray-900 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors ${
                        formData.timeSlot === slot
                          ? "bg-indigo-50 border-indigo-500"
                          : ""
                      }`}
                      onClick={() => handleTimeSlotSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                {formData.timeSlot && (
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        // Final submission logic
                        console.log("Final Booking Submission", formData);
                        // You can add actual submission logic here
                        alert("Meeting Scheduled Successfully!");
                      }}
                      className="w-full px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
                    >
                      Confirm Meeting
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
