import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navigations';

export default function ExamDashboard() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter">

      {/* ✅ Single Navbar handles both mobile & desktop */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="pt-16 lg:pt-0 lg:ml-64 p-6 transition-all duration-300 bg-[#1B2E57]/60 backdrop-blur-xl overflow-y-auto min-h-screen">
        
        {/* 🔹 Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 mt-6">
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search exams..."
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* 🔹 Top Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          
          {/* Upcoming Exam */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-blue-100">Your Next Exam</h2>
            <p className="text-xl font-bold">Physics I Midterm</p>
            <p className="text-sm text-blue-200 mb-4">Course: PHY 101</p>
            <p className="text-sm mb-2">Date: Nov 15, 2025 | Time: 10:00 AM</p>
            <p className="text-sm text-blue-200 mb-4">Duration: 60 Minutes</p>
            <div className="text-center">
              <Link to="/ongoing">
                <button className="mt-2 px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition">
                  Start Exam
                </button>
              </Link>
            </div>
          </div>

          {/* Performance Snapshot */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 flex flex-col items-center shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-blue-100">Performance Snapshot</h2>
            <div className="text-5xl font-bold text-blue-400">85%</div>
            <p className="text-sm text-blue-200 mt-2">Overall Average Score</p>
            <div className="flex space-x-4 mt-4">
              <button className="text-sm text-blue-300 underline">View Details</button>
              <button className="text-sm text-blue-300 underline">Feedback</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-blue-100">Quick Access</h2>
            <div className="flex flex-col space-y-3">
              <button className="py-2 rounded-lg bg-blue-600/30 hover:bg-blue-500/40 transition">
                Practice Tests
              </button>
              <button className="py-2 rounded-lg bg-blue-600/30 hover:bg-blue-500/40 transition">
                Mock Exams
              </button>
              <button className="py-2 rounded-lg bg-blue-600/30 hover:bg-blue-500/40 transition">
                Study Materials
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Recent Activity */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4 text-blue-100">
              Recent Portal Activity
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="bg-white/10 p-3 rounded-lg">
                New Result: Chemistry II Final is now available.
              </li>
              <li className="bg-white/10 p-3 rounded-lg">
                Announcement: Maintenance scheduled for Sunday.
              </li>
              <li className="bg-white/10 p-3 rounded-lg">
                New Resource: Chapter 4 Notes uploaded.
              </li>
            </ul>
          </div>

          {/* To-Do List */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4 text-blue-100">To-Do List</h2>
            <ul className="space-y-3 text-sm">
              <li className="bg-white/10 p-3 rounded-lg flex justify-between">
                Read Portal Policy <span className="text-blue-300">Pending</span>
              </li>
              <li className="bg-white/10 p-3 rounded-lg flex justify-between">
                Verify Webcam Setup <span className="text-green-300">Done</span>
              </li>
              <li className="bg-white/10 p-3 rounded-lg flex justify-between">
                Complete Fee Payment <span className="text-yellow-300">Due</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
