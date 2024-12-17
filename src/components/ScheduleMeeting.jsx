'use client'

import { useState } from 'react'

export default function ScheduleMeeting({ onClose }) {
  const [selectedDate, setSelectedDate] = useState('19')
  const [timeFormat, setTimeFormat] = useState('12h')
  const [duration, setDuration] = useState('15m')

  const timeSlots = [
    '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm',
    '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm'
  ]

  return (
    <div className="bg-white rounded-3xl p-8 max-w-5xl w-full relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="grid md:grid-cols-[300px,1fr,250px] gap-6">
        {/* Left Panel */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
              HL
            </div>
            <div>
              <div className="font-medium">Halo Lab</div>
            </div>
          </div>
          <h2 className="text-xl font-semibold">Project discussion</h2>
          <p className="text-sm text-gray-600">
            Schedule a short intro call, and we'd love to discuss how we
            can elevate your business with our varied services.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex border rounded-md">
                <button 
                  className={`px-3 py-1 text-sm rounded-l-md ${duration === '15m' ? 'bg-gray-100' : ''}`}
                  onClick={() => setDuration('15m')}
                >
                  15m
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-r-md ${duration === '30m' ? 'bg-gray-100' : ''}`}
                  onClick={() => setDuration('30m')}
                >
                  30m
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>Asia/Kolkata</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">December 2024</h2>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 text-sm gap-1">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
              <div key={day} className="text-gray-500 text-center py-2">{day}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i + 1}
                className={`p-2 text-sm rounded-lg ${
                  selectedDate === String(i + 1)
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedDate(String(i + 1))}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>Thu {selectedDate}</div>
            </div>
            <div className="flex border rounded-md">
              <button 
                className={`px-2 py-1 text-xs rounded-l-md ${timeFormat === '12h' ? 'bg-gray-100' : ''}`}
                onClick={() => setTimeFormat('12h')}
              >
                12h
              </button>
              <button 
                className={`px-2 py-1 text-xs rounded-r-md ${timeFormat === '24h' ? 'bg-gray-100' : ''}`}
                onClick={() => setTimeFormat('24h')}
              >
                24h
              </button>
            </div>
          </div>
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className="w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

