import React from 'react';
// Importing icons from react-icons/fa for visual elements
import { FaUsers, FaChartLine, FaDollarSign, FaShoppingCart } from 'react-icons/fa';

// Define the DashboardAdmin functional component
const DashboardAdmin: React.FC = () => {
  // Define colors from the design system for consistent styling
  const primaryColor = '#135bec';
  const backgroundColor = '#101622';
  const sidebarBackgroundColor = '#1a202c'; // A slightly different dark shade for the sidebar

  return (
    // Main container for the dashboard.
    // Applies the background color and sets the font family to Inter.
    // Note: For 'Inter' font to be available, it should be imported globally
    // (e.g., via a Google Fonts CDN link in public/index.html or through tailwind.config.js).
    <div className="flex min-h-screen font-inter text-white" style={{ backgroundColor: backgroundColor }}>
      {/* Sidebar navigation section */}
      <aside className="w-64 p-6 flex flex-col shadow-lg" style={{ backgroundColor: sidebarBackgroundColor }}>
        {/* Dashboard title/logo */}
        <div className="text-2xl font-bold mb-8" style={{ color: primaryColor }}>
          Admin Panel
        </div>

        {/* Navigation links list */}
        <nav className="flex-1">
          <ul>
            {/* Active Dashboard link with primary color accent */}
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 rounded-md text-white transition-colors duration-200" style={{ backgroundColor: `${primaryColor}33` }}> {/* 33 is ~20% opacity */}
                <FaChartLine className="mr-3 text-lg" /> {/* Icon for Dashboard */}
                Dashboard
              </a>
            </li>
            {/* Other navigation links */}
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                <FaUsers className="mr-3 text-lg" /> {/* Icon for Users */}
                Users
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="