import React, { useState } from 'react';
import {
  FileText,
  Video,
  BookOpen,
  ExternalLink,
  Download,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';
import Navbar from './Navigations.jsx';
import { resources } from '../config/Examconfig.js';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredResources = resources.filter((res) =>
    res.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter">
      
      {/* Sidebar (Desktop) */}
        <Navbar />
      

      {/* Main Content */}
      <main className="flex-1 p-6 lg:ml-64 transition-all duration-300 overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 pl-4 pr-10 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/40 w-full"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 pointer-events-none"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6 tracking-wide text-white">
          📚 Study Resources
        </h2>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                {res.type === 'PDF' && (
                  <FileText className="text-blue-300" size={22} />
                )}
                {res.type === 'Video' && (
                  <Video className="text-indigo-300" size={22} />
                )}
                {res.type === 'Article' && (
                  <BookOpen className="text-green-300" size={22} />
                )}
                <h2 className="text-lg font-semibold text-white truncate">
                  {res.title}
                </h2>
              </div>

              <p className="text-blue-200 text-sm mb-3">{res.category}</p>
              <p className="text-white/80 text-sm mb-5">{res.description}</p>

              <div className="flex justify-between items-center">
                <a
                  href={res.link}
                  className="text-sm flex items-center space-x-2 text-blue-300 hover:text-white transition"
                >
                  <ExternalLink size={14} /> <span>Open</span>
                </a>
                {res.type === 'PDF' && (
                  <button className="flex items-center space-x-2 bg-blue-600/40 hover:bg-blue-500/50 px-3 py-1.5 rounded-lg text-sm">
                    <Download size={14} /> <span>Download</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Resources Found */}
        {filteredResources.length === 0 && (
          <div className="text-center text-blue-200 mt-10 text-sm">
            No resources found for “
            <span className="font-semibold">{searchTerm}</span>”
          </div>
        )}
      </main>
    </div>
  );
}
