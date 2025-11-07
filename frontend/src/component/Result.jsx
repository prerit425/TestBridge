import React, { useState } from 'react';
import { Bell, Search, Menu, X } from 'lucide-react';
import Navbar from './Navigations';

export default function ResultsPerformancePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const results = [
    {
      title: 'Physics I Midterm',
      course: 'PHY 101',
      date: 'Nov 15, 2025',
      score: 85,
      grade: 'A',
      status: 'Completed',
    },
    {
      title: 'Mathematics Final',
      course: 'MTH 102',
      date: 'Oct 20, 2025',
      score: 78,
      grade: 'B+',
      status: 'Completed',
    },
    {
      title: 'Chemistry II Test',
      course: 'CHE 202',
      date: 'Nov 5, 2025',
      score: 64,
      grade: 'C+',
      status: 'Completed',
    },
  ];

  const average = (results.reduce((sum, exam) => sum + exam.score, 0) / results.length).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter">
      
      {/* Sidebar for large screens */}
        <Navbar />
      
      {/* Main content */}
      <main className="flex-1 p-6 lg:ml-64 transition-all duration-300 bg-[#1B2E57]/60 backdrop-blur-xl overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search results..."
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Results & Performance</h2>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Average Score</h3>
            <div className="text-4xl font-bold text-blue-400">{average}%</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Completed Exams</h3>
            <div className="text-4xl font-bold text-blue-400">{results.length}</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Highest Score</h3>
            <div className="text-4xl font-bold text-blue-400">
              {Math.max(...results.map((r) => r.score))}%
            </div>
          </div>
        </div>

        {/* Results Table for Desktop */}
        <div className="hidden md:block bg-white/10 rounded-2xl p-6 border border-white/10 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-blue-200">
                <th className="pb-3">Exam Title</th>
                <th className="pb-3">Course</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Score</th>
                <th className="pb-3">Grade</th>
                <th className="pb-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((exam, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-3 font-medium text-blue-100">{exam.title}</td>
                  <td className="text-blue-200">{exam.course}</td>
                  <td className="text-blue-200">{exam.date}</td>
                  <td className="text-blue-200">{exam.score}%</td>
                  <td className="text-blue-200">{exam.grade}</td>
                  <td className="text-center">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/30 text-green-100">
                      {exam.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {results.map((exam, index) => (
            <div
              key={index}
              className="bg-white/10 p-5 rounded-xl border border-white/10 shadow-lg hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {exam.title}
              </h3>
              <p className="text-sm text-blue-200">Course: {exam.course}</p>
              <p className="text-sm text-blue-200">Date: {exam.date}</p>
              <p className="text-sm text-blue-200">Score: {exam.score}%</p>
              <p className="text-sm text-blue-200 mb-3">Grade: {exam.grade}</p>
              <div className="flex justify-end">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/30 text-green-100">
                  {exam.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-white/10 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-100">
            Performance Insights
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Great work maintaining consistency! Your average score is above 80%, showing strong understanding of core subjects. 
            Focus on Chemistry II for improvement and keep practicing regularly to sustain your performance.
          </p>
        </div>
      </main>
    </div>
  );
}
