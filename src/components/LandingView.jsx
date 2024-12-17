"use client";

import { useState } from "react";

export default function ProjectForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedDate, setSelectedDate] = useState("19");
  const [timeFormat, setTimeFormat] = useState("12h");
  const [duration, setDuration] = useState("15m");

  const timeSlots = [
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to schedule meeting step
  };

  const handleScheduleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Scheduled Date:", selectedDate);
    console.log("Duration:", duration);
    console.log("Time Format:", timeFormat);
    setStep(3); // Final step, e.g., confirmation
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full relative">
        {/* Step 1: Contact Form */}
        {step === 1 && (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Ready to Discuss Your Project?
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleInputChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="Project Details"
                rows="4"
                onChange={handleInputChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-black py-2 rounded-lg hover:bg-indigo-700"
            >
              Next: Schedule Meeting
            </button>
          </form>
        )}

        {/* Step 2: Schedule Meeting */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Schedule a Meeting
            </h2>
            <div className="grid grid-cols-[1fr,250px] gap-6">
              {/* Calendar */}
              <div>
                <h3 className="font-semibold mb-2">Select Date</h3>
                <div className="grid grid-cols-7 gap-2 text-sm">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (d) => (
                      <div key={d} className="text-gray-500 text-center">
                        {d}
                      </div>
                    )
                  )}
                  {Array.from({ length: 31 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(String(i + 1))}
                      className={`p-2 rounded-lg ${
                        selectedDate === String(i + 1)
                          ? "bg-indigo-600 text-black"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="font-semibold mb-2">Select Time</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      className="block w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setTimeFormat("12h")}
                    className={`px-3 py-1 rounded-md ${
                      timeFormat === "12h" ? "bg-indigo-600 text-black" : ""
                    }`}
                  >
                    12h
                  </button>
                  <button
                    onClick={() => setTimeFormat("24h")}
                    className={`px-3 py-1 rounded-md ${
                      timeFormat === "24h" ? "bg-indigo-600 text-black" : ""
                    }`}
                  >
                    24h
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleScheduleSubmit}
                className="bg-indigo-600 text-black py-2 px-4 rounded-lg hover:bg-indigo-700"
              >
                Confirm Meeting
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">You're All Set!</h2>
            <p>
              Thank you, <strong>{formData.name}</strong>. We have scheduled
              your meeting on the <strong>{selectedDate}th</strong>.
            </p>
            <button
              onClick={() => setStep(1)}
              className="bg-indigo-600 text-black px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Back to Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
