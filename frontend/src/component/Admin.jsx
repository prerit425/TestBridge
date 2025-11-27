import React from 'react';
import { Home, BookOpen, BarChart, Settings, LogOut, Bell, User, Users, Edit, FileText } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter">
      {/* Sidebar */}
      <aside className="w-64 fixed top-0 left-0 h-full bg-[#162B55]/90 backdrop-blur-lg border-r border-white/10 flex flex-col p-5 space-y-6 z-20">
        <h1 className="text-xl font-semibold tracking-wide mb-8">Admin Dashboard</h1>
        <nav className="flex flex-col space-y-3">
          <button className="flex items-center space-x-3 px-4 py-2 bg-blue-600/30 rounded-lg hover:bg-blue-500/40 transition">
            <Home size={18}/> <span>Overview</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-500/20 rounded-lg transition">
            <Users size={18}/> <span>Manage Students</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-500/20 rounded-lg transition">
            <BookOpen size={18}/> <span>Manage Exams</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-500/20 rounded-lg transition">
            <BarChart size={18}/> <span>Performance Reports</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-500/20 rounded-lg transition">
            <Settings size={18}/> <span>Portal Settings</span>
          </button>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-500/20 rounded-lg transition">
            <LogOut size={18}/> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#1B2E57]/60 backdrop-blur-xl overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Administrator Overview</h2>
          <div className="flex items-center space-x-4">
            <Bell className="text-white/80 hover:text-white cursor-pointer" />
            <User className="text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Total Students</h3>
            <div className="text-4xl font-bold text-blue-400">482</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Active Exams</h3>
            <div className="text-4xl font-bold text-blue-400">6</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Completed Exams</h3>
            <div className="text-4xl font-bold text-blue-400">18</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-blue-100 mb-2">Average Performance</h3>
            <div className="text-4xl font-bold text-blue-400">82%</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-blue-100">Exam Management</h3>
              <BookOpen size={18} className="text-blue-300" />
            </div>
            <p className="text-sm text-blue-200 mb-4">Create, edit, or delete exams currently active on the platform.</p>
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-sm">Manage Exams</button>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-blue-100">Student Database</h3>
              <Users size={18} className="text-blue-300" />
            </div>
            <p className="text-sm text-blue-200 mb-4">View and control student registrations, eligibility, and activity logs.</p>
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-sm">View Students</button>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-blue-100">Performance Analytics</h3>
              <BarChart size={18} className="text-blue-300" />
            </div>
            <p className="text-sm text-blue-200 mb-4">Access detailed performance insights and download analytical reports.</p>
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-sm">View Reports</button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-100">Recent Administrative Activity</h3>
          <ul className="space-y-3 text-sm">
            <li className="bg-white/10 p-3 rounded-lg flex items-center justify-between">
              <span>Updated exam schedule for Physics I Midterm</span>
              <span className="text-blue-300">5 min ago</span>
            </li>
            <li className="bg-white/10 p-3 rounded-lg flex items-center justify-between">
              <span>Added new student batch for Chemistry II</span>
              <span className="text-blue-300">30 min ago</span>
            </li>
            <li className="bg-white/10 p-3 rounded-lg flex items-center justify-between">
              <span>Generated overall performance report</span>
              <span className="text-blue-300">1 hour ago</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
