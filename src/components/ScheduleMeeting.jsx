"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight, Globe, Clock, X } from "lucide-react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ScheduleMeeting({ onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 11, 19));
  const [timeFormat, setTimeFormat] = useState("12h");
  const [duration, setDuration] = useState("15m");
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

  const handleMonthChange = (event) => {
    setCurrentMonth(parseInt(event.target.value));
    setSelectedDate(new Date(2024, parseInt(event.target.value), 1));
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
          onClick={decreaseMonth}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-4 h-4 text-gray-500" />
        </button>
        <button
          onClick={increaseMonth}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-start md:items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white w-full min-h-screen md:min-h-0 md:w-auto md:rounded-[32px] p-6 md:p-8 md:max-w-5xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="grid md:grid-cols-[300px,1fr,250px] gap-8">
          {/* Header Section - Shows on mobile, hidden on desktop */}
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
                Schedule a short intro call, and we'd love to discuss how we can
                elevate your business with our varied services.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <div className="flex rounded-lg border border-gray-200 p-0.5">
                  <button
                    className={`px-4 py-1 rounded-md text-sm transition-colors ${
                      duration === "15m"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setDuration("15m")}
                  >
                    15m
                  </button>
                  <button
                    className={`px-4 py-1 rounded-md text-sm transition-colors ${
                      duration === "30m"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setDuration("30m")}
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
                Schedule a short intro call, and we'd love to discuss how we can
                elevate your business with our varied services.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <div className="flex rounded-lg border border-gray-200 p-0.5">
                  <button
                    className={`px-4 py-1 rounded-md text-sm transition-colors ${
                      duration === "15m"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setDuration("15m")}
                  >
                    15m
                  </button>
                  <button
                    className={`px-4 py-1 rounded-md text-sm transition-colors ${
                      duration === "30m"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    onClick={() => setDuration("30m")}
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
              selected={selectedDate}
              onSelect={setSelectedDate}
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
                Thu {selectedDate.getDate()}
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
                  className="w-full px-4 py-2.5 text-sm text-gray-900 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
