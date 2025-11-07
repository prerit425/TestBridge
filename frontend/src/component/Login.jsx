import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SplitLoginComponent() {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'student@gmail.com' && password === '12345') {
      navigate('/');
    } else if (email === 'admin@gmail.com' && password === '12345') {
      navigate('/admin');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] p-4 sm:p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-blue-200/10 rounded-full blur-3xl top-10 left-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-indigo-300/10 rounded-full blur-3xl bottom-0 right-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Card */}
      <motion.div
        className="relative w-full max-w-5xl h-auto sm:h-[500px] rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl bg-[#1C2C54]/95 border border-white/10 flex flex-col sm:flex-row"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section (Forms) */}
        <div className="relative w-full sm:w-1/2 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showSignup ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-full p-8 sm:p-10 text-white"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 tracking-wide text-center">
                  Welcome Back
                </h2>
                <p className="text-blue-100 mb-6 text-sm sm:text-base text-center">
                  Login to access your exam dashboard
                </p>

                <form className="w-full max-w-xs" onSubmit={handleLogin}>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition"
                  >
                    Sign In
                  </button>
                  {error && (
                    <p className="text-red-300 text-sm mt-3 text-center">{error}</p>
                  )}
                </form>

                {/* Mobile toggle */}
                <div className="sm:hidden mt-6 text-center">
                  <p className="text-sm text-blue-100">
                    New here?{' '}
                    <button
                      onClick={() => setShowSignup(true)}
                      className="text-blue-300 underline hover:text-white transition"
                    >
                      Create account
                    </button>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-full p-8 sm:p-10 text-white"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 tracking-wide text-center">
                  Create Your Account
                </h2>
                <p className="text-blue-100 mb-6 text-sm sm:text-base text-center">
                  Register to begin your examination journey
                </p>
                <form className="w-full max-w-xs">
                  <input
                    placeholder="Full name"
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
                  />
                  <input
                    placeholder="Email"
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
                  />
                  <button className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90 transition">
                    Sign Up
                  </button>
                </form>

                {/* Mobile toggle */}
                <div className="sm:hidden mt-6 text-center">
                  <p className="text-sm text-blue-100">
                    Already have an account?{' '}
                    <button
                      onClick={() => setShowSignup(false)}
                      className="text-blue-300 underline hover:text-white transition"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Section (Desktop Overlay) */}
        <motion.div
          className="hidden sm:flex w-1/2 relative overflow-hidden items-center justify-center text-center"
          animate={{ backgroundColor: showSignup ? '#E6EEF8' : '#1C2C54' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            key={showSignup ? 'signup-overlay' : 'login-overlay'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-br from-[#BFCFED]/40 via-[#D0E2F5]/30 to-[#1E3A6A]/40 backdrop-blur-xl border-l border-white/10 shadow-inner"
          />
          <motion.div
            className="relative z-10 px-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {!showSignup ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-3">
                  New Candidate?
                </h2>
                <p className="text-blue-100 mb-6 max-w-xs text-sm">
                  Sign up to create your exam account and start learning.
                </p>
                <button
                  onClick={() => setShowSignup(true)}
                  className="mt-2 px-6 py-2.5 rounded-full font-medium bg-white/80 text-indigo-700 hover:bg-white/90 transition shadow-sm"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-indigo-900 mb-3">
                  Already Registered?
                </h2>
                <p className="text-gray-700 mb-6 max-w-xs text-sm">
                  Login with your credentials to continue.
                </p>
                <button
                  onClick={() => setShowSignup(false)}
                  className="mt-2 px-6 py-2.5 rounded-full font-medium border border-indigo-700 text-indigo-800 bg-white/70 hover:bg-indigo-50 transition shadow-sm"
                >
                  Sign In
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
