import React from "react";
import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navigations.jsx";
import { exams } from "../config/Examconfig.js";

export default function Exam() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter">
      {/* ✅ Unified Navbar — handles mobile toggle internally */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="pt-16 lg:pt-0 lg:ml-64 p-6 transition-all duration-300 bg-[#1B2E57]/60 backdrop-blur-xl overflow-y-auto min-h-screen">
        {/* --- Header --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 mt-6 gap-4">
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search exams..."
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
              size={18}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 tracking-wide">
          🧾 All Exams
        </h2>

        {/* --- Desktop Table --- */}
        <div className="hidden md:block bg-white/10 rounded-2xl p-6 border border-white/10 overflow-x-auto shadow-lg hover:shadow-xl transition">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="pb-3">Exam Title</th>
                <th className="pb-3">Course</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Time</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-3 font-medium text-blue-100">
                    {exam.title}
                  </td>
                  <td className="text-blue-200">{exam.course}</td>
                  <td className="text-blue-200">{exam.date}</td>
                  <td className="text-blue-200">{exam.time}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exam.status === "Upcoming"
                          ? "bg-blue-500/30 text-blue-100"
                          : exam.status === "Ongoing"
                          ? "bg-yellow-400/30 text-yellow-100"
                          : "bg-green-500/30 text-green-100"
                      }`}
                    >
                      {exam.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {exam.status === "Upcoming" ? (
                      <Link to="/ongoing">
                        <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-sm">
                          Start
                        </button>
                      </Link>
                    ) : exam.status === "Ongoing" ? (
                      <button className="px-4 py-1 rounded-lg bg-yellow-400/80 text-gray-900 hover:opacity-90 transition text-sm">
                        Resume
                      </button>
                    ) : (
                      <button className="px-4 py-1 rounded-lg bg-green-500/30 text-green-100 hover:bg-green-400/40 transition text-sm">
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Mobile Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white/10 p-5 rounded-xl border border-white/10 shadow-lg hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {exam.title}
              </h3>
              <p className="text-sm text-blue-200 mb-1">
                Course: {exam.course}
              </p>
              <p className="text-sm text-blue-200 mb-1">Date: {exam.date}</p>
              <p className="text-sm text-blue-200 mb-3">Time: {exam.time}</p>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exam.status === "Upcoming"
                      ? "bg-blue-500/30 text-blue-100"
                      : exam.status === "Ongoing"
                      ? "bg-yellow-400/30 text-yellow-100"
                      : "bg-green-500/30 text-green-100"
                  }`}
                >
                  {exam.status}
                </span>
                {exam.status === "Upcoming" ? (
                  <Link to="/ongoing">
                    <button className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-xs">
                      Start
                    </button>
                  </Link>
                ) : exam.status === "Ongoing" ? (
                  <button className="px-3 py-1 rounded-md bg-yellow-400/80 text-gray-900 hover:opacity-90 transition text-xs">
                    Resume
                  </button>
                ) : (
                  <button className="px-3 py-1 rounded-md bg-green-500/30 text-green-100 hover:bg-green-400/40 transition text-xs">
                    View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
