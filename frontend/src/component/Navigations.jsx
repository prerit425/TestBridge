import React, { useState } from 'react';
import {
  Home,
  Users,
  BookOpen,
  BarChart,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavButton = ({ icon: Icon, text, to, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 w-full text-left ${
        isActive
          ? 'bg-gradient-to-r from-blue-600/60 to-indigo-700/60 shadow-lg shadow-blue-900/30 text-white'
          : 'text-white/90 hover:bg-blue-500/20 hover:text-white'
      }`
    }
  >
    <Icon size={18} className="shrink-0" />
    <span className="truncate">{text}</span>
  </NavLink>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Toggle Button (Visible on Mobile) */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#162B55]/80 p-2 rounded-md text-white hover:bg-blue-600/60 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay (dark blur background when sidebar open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 
        bg-gradient-to-b from-[#162B55] via-[#1B2E57] to-[#13315C]
        backdrop-blur-2xl border-r border-white/10 flex flex-col p-5 text-white 
        shadow-[2px_0_8px_rgba(0,0,0,0.25)] transition-transform duration-300 
        z-[9999] ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        
        {/* Header */}
        <h1 className="text-xl font-semibold tracking-wide text-blue-100 mb-6">
          Student Dashboard
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 flex-1">
          <NavButton
            icon={Home}
            text="Dashboard"
            to="/"
            onClick={() => setOpen(false)}
          />
          <NavButton
            icon={BookOpen}
            text="Exams / Test"
            to="/exams"
            onClick={() => setOpen(false)}
          />
          <NavButton
            icon={BarChart}
            text="Result & Performance"
            to="/results"
            onClick={() => setOpen(false)}
          />
          <NavButton
            icon={Users}
            text="Resources"
            to="/resource"
            onClick={() => setOpen(false)}
          />
          <NavButton
            icon={Settings}
            text="Settings"
            to="/settings"
            onClick={() => setOpen(false)}
          />
        </nav>

        {/* Logout */}
        <div className="pt-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-2 rounded-lg text-white/90 hover:bg-blue-500/20 hover:text-white transition"
          >
            <LogOut size={18} className="text-blue-200" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
