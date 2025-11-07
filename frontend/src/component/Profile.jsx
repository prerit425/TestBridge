import React, { useState } from 'react';
import { Bell, Edit, Save } from 'lucide-react';
import Navbar from './Navigations.jsx';

export default function StudentSettingsPage() {
  const [profile, setProfile] = useState({
    name: 'Aastha Shukla',
    email: 'student@gmail.com',
    studentId: 'GLA12345678',
    password: '12345',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter">
      
      {/* ✅ Single Navbar handles both mobile & desktop */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="pt-16 lg:pt-0 lg:ml-64 p-6 transition-all duration-300 bg-[#1B2E57]/60 backdrop-blur-xl overflow-y-auto min-h-screen">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 mt-6">
          <h2 className="text-2xl font-semibold tracking-wide">Account Settings</h2>
          <Bell className="text-white/80 hover:text-white cursor-pointer" />
        </div>

        {/* Profile Information */}
        <div className="bg-white/10 rounded-2xl p-6 border border-white/10 mb-8 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-100">Profile Information</h3>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 text-sm bg-blue-600/40 hover:bg-blue-500/50 px-3 py-1.5 rounded-lg transition"
              >
                <Edit size={14} /> <span>Edit</span>
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 text-sm bg-green-600/40 hover:bg-green-500/50 px-3 py-1.5 rounded-lg transition"
              >
                <Save size={14} /> <span>Save</span>
              </button>
            )}
          </div>

          {/* Editable Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-blue-200">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                disabled={!isEditing}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg mt-1 bg-white/10 text-white focus:outline-none ${
                  isEditing
                    ? 'border border-blue-300/40 focus:ring-2 focus:ring-blue-400/40'
                    : 'border border-transparent'
                }`}
              />
            </div>

            <div>
              <label className="text-sm text-blue-200">Student ID</label>
              <input
                type="text"
                value={profile.studentId}
                disabled
                className="w-full p-3 rounded-lg mt-1 bg-white/10 text-white border border-transparent cursor-not-allowed"
              />
            </div>

            <div>
              <label className="text-sm text-blue-200">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                disabled={!isEditing}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg mt-1 bg-white/10 text-white focus:outline-none ${
                  isEditing
                    ? 'border border-blue-300/40 focus:ring-2 focus:ring-blue-400/40'
                    : 'border border-transparent'
                }`}
              />
            </div>

            <div>
              <label className="text-sm text-blue-200">Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                disabled={!isEditing}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg mt-1 bg-white/10 text-white focus:outline-none ${
                  isEditing
                    ? 'border border-blue-300/40 focus:ring-2 focus:ring-blue-400/40'
                    : 'border border-transparent'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-blue-100 mb-4">Preferences</h3>

          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-200">Enable Email Notifications</span>
            <input type="checkbox" className="w-5 h-5 accent-blue-400" defaultChecked />
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-200">Enable Exam Reminders</span>
            <input type="checkbox" className="w-5 h-5 accent-blue-400" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-blue-200">Dark Theme</span>
            <input type="checkbox" className="w-5 h-5 accent-blue-400" />
          </div>
        </div>
      </main>
    </div>
  );
}
