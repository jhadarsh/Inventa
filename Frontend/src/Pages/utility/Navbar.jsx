import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/inventory", label: "Inventory" },
    { path: "/forecast", label: "Forecast" },
    { path: "/delivery", label: "Delivery" },
    { path: "/blockchain", label: "Blockchain" },
    { path: "/about", label: "About" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Inventa
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-700 text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-600 transition ${
                location.pathname === link.path ? "text-blue-700 font-semibold" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${
                location.pathname === link.path ? "text-blue-700 font-semibold" : "text-gray-700"
              } hover:text-blue-600 transition`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
