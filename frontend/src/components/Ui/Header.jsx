import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const getLinkStyles = (path) => {
    return `relative font-semibold transition-colors duration-300 ease-in-out group ${
      isActiveLink(path)
        ? "text-[#EA3C3C]"
        : "text-gray-600 hover:text-[#EA3C3C]"
    }`;
  };

  const getUnderlineStyles = (path) => {
    return `bottom-0 left-0 absolute bg-[#EA3C3C] h-0.5 transition-all duration-300 ease-in-out ${
      isActiveLink(path) ? "w-0" : "w-0 group-hover:w-full"
    }`;
  };

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <h1 className="font-bold font-Poppins text-[#EA3C3C] text-2xl md:text-[1.75rem] lg:text-[2rem] tracking-tight">
                  Car<span className="text-black">Link</span>
                </h1>
                <span className="-bottom-1 left-0 absolute bg-gradient-to-r from-[#EA3C3C] to-transparent w-full h-[2px]"></span>
              </div>
              <svg
                className="w-6 md:w-7 h-6 md:h-7 text-[#EA3C3C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex items-center space-x-10 hidden">
            <Link to="/" className={getLinkStyles("/")}>
              <span className="relative z-10">Home</span>
              <span className={getUnderlineStyles("/")}></span>
            </Link>
            <Link to="/service" className={getLinkStyles("/service")}>
              <span className="relative z-10">Service</span>
              <span className={getUnderlineStyles("/service")}></span>
            </Link>
            <Link to="/system" className={getLinkStyles("/system")}>
              <span className="relative z-10">System</span>
              <span className={getUnderlineStyles("/system")}></span>
            </Link>
            <Link to="/about" className={getLinkStyles("/about")}>
              <span className="relative z-10">About</span>
              <span className={getUnderlineStyles("/about")}></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="md:flex items-center space-x-4 hidden">
            <Link
              to="/login"
              className="border-gray-300 hover:border-gray-400 px-6 py-2 border rounded-md font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-[#EA3C3C] hover:bg-[#d63535] shadow-sm hover:shadow px-6 py-2 rounded-md font-medium text-white transition-all duration-200"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex justify-center items-center p-2 rounded-md text-gray-700 hover:text-[#EA3C3C] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/"
            className={`block px-4 py-3 rounded-lg font-medium text-base transform transition-all hover:translate-x-2 duration-300 ease-in-out ${
              isActiveLink("/")
                ? "text-[#EA3C3C] bg-red-50"
                : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/service"
            className={`block px-4 py-3 rounded-lg font-medium text-base transform transition-all hover:translate-x-2 duration-300 ease-in-out ${
              isActiveLink("/service")
                ? "text-[#EA3C3C] bg-red-50"
                : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/system"
            className={`block px-4 py-3 rounded-lg font-medium text-base transform transition-all hover:translate-x-2 duration-300 ease-in-out ${
              isActiveLink("/system")
                ? "text-[#EA3C3C] bg-red-50"
                : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            System
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-3 rounded-lg font-medium text-base transform transition-all hover:translate-x-2 duration-300 ease-in-out ${
              isActiveLink("/about")
                ? "text-[#EA3C3C] bg-red-50"
                : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="space-y-2 mt-4">
            <Link
              to="/login"
              className="block border-gray-300 hover:border-gray-400 px-4 py-2 border rounded-md w-full font-medium text-center text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="block bg-[#EA3C3C] hover:bg-[#d63535] shadow-sm hover:shadow px-4 py-2 rounded-md w-full font-medium text-center text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
