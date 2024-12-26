import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaBook,
  FaCar,
  FaUserCog,
  FaSearch,
  FaBell,
  FaRegQuestionCircle,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const getLinkStyles = (path) => {
    return `relative font-semibold transition-all duration-300 ease-in-out group hover:scale-105 ${
      isActiveLink(path)
        ? "text-[#EA3C3C]"
        : "text-gray-600 hover:text-[#EA3C3C]"
    }`;
  };

  const getUnderlineStyles = (path) => {
    return `bottom-0 left-0 absolute bg-[#EA3C3C] h-0.5 transition-all duration-300 ease-in-out ${
      isActiveLink(path) ? "w-full scale-100" : "w-0 group-hover:w-full"
    }`;
  };

  const serviceItems = [
    {
      path: "/service",
      label: "All Services",
      icon: <FaCar />,
      description: "Browse our complete service catalog",
      badge: "New",
    },
    {
      path: "/documentation",
      label: "Documentation",
      icon: <FaBook />,
      description: "Detailed guides and documentation",
    },
    {
      path: "/system",
      label: "System Access",
      icon: <FaUserCog />,
      description: "Access system features and settings",
      badge: "Pro",
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <h1 className="font-bold font-Poppins text-[#EA3C3C] text-2xl md:text-[1.75rem] lg:text-[2rem] tracking-tight">
                  Car<span className="text-black">Link</span>
                </h1>
                <motion.span
                  className="-bottom-1 left-0 absolute bg-gradient-to-r from-[#EA3C3C] to-transparent w-full h-[2px]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <motion.svg
                className="w-6 md:w-7 h-6 md:h-7 text-[#EA3C3C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="md:flex items-center space-x-8 hidden">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className={getLinkStyles("/")}>
                <span className="relative z-10">Home</span>
                <span className={getUnderlineStyles("/")} />
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <div className="relative group">
              <motion.button
                className={`flex items-center space-x-1.5 ${getLinkStyles(
                  "/service"
                )}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Services</span>
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative top-[1px]"
                >
                  <FaChevronDown className="w-3 h-3" />
                </motion.div>
                <span className={getUnderlineStyles("/service")} />
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="left-1/2 absolute border-gray-100/50 bg-white shadow-gray-200/70 shadow-lg backdrop-blur-sm mt-3 border rounded-2xl w-72 transform -translate-x-1/2 overflow-hidden"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-2">
                      {serviceItems.map((item, index) => (
                        <Link key={item.path} to={item.path} className="block">
                          <motion.div
                            initial={{ x: 0, backgroundColor: "transparent" }}
                            whileHover={{
                              x: 8,
                              backgroundColor: "rgba(234, 60, 60, 0.05)",
                            }}
                            transition={{ duration: 0.2 }}
                            className={`px-4 py-3 rounded-xl hover:shadow-sm ${
                              index !== serviceItems.length - 1 ? "mb-1" : ""
                            }`}
                          >
                            <div className="flex justify-between items-center group">
                              <div className="flex items-center space-x-3">
                                <span className="group-hover:scale-110 text-[#EA3C3C] text-lg transform transition-transform duration-200">
                                  {item.icon}
                                </span>
                                <div>
                                  <div className="group-hover:text-[#EA3C3C] font-medium text-gray-900 text-sm transition-colors duration-200">
                                    {item.label}
                                  </div>
                                  <div className="group-hover:text-gray-600 text-gray-500 text-xs transition-colors duration-200">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                              {item.badge && (
                                <span className="group-hover:scale-105 bg-[#EA3C3C] px-2 py-1 rounded-full font-medium text-white text-xs transform transition-transform duration-200">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/about" className={getLinkStyles("/about")}>
                <span className="relative z-10">About</span>
                <span className={getUnderlineStyles("/about")} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/contact" className={getLinkStyles("/contact")}>
                <span className="relative z-10">Contact</span>
                <span className={getUnderlineStyles("/contact")} />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Right Section */}
          <div className="md:flex items-center space-x-6 hidden">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSearch}
              className="p-2 text-gray-500 hover:text-[#EA3C3C] transition-colors duration-200"
            >
              <FaSearch className="w-5 h-5" />
            </motion.button>

            {/* Help Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-500 hover:text-[#EA3C3C] transition-colors duration-200"
            >
              <FaRegQuestionCircle className="w-5 h-5" />
            </motion.button>

            {/* Notification Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-gray-500 hover:text-[#EA3C3C] transition-colors duration-200"
            >
              <FaBell className="w-5 h-5" />
              <span className="top-1 right-1 absolute bg-[#EA3C3C] rounded-full w-2 h-2" />
            </motion.button>

            {/* Auth Buttons */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="relative border-gray-300 hover:border-[#EA3C3C] px-6 py-2 border rounded-lg font-medium text-gray-600 hover:text-[#EA3C3C] transition-all duration-300"
              >
                Sign in
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="relative bg-[#EA3C3C] hover:bg-[#d63535] hover:shadow-lg hover:shadow-[#EA3C3C]/20 px-6 py-2 rounded-lg font-medium text-white transition-all duration-300"
              >
                Sign up
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="flex items-center space-x-4 md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-500 hover:text-[#EA3C3C] transition-colors duration-200"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex justify-center items-center p-2 rounded-md text-gray-700 hover:text-[#EA3C3C] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="top-16 absolute inset-x-0 border-gray-100/50 bg-white/90 shadow-lg backdrop-blur-md p-4 border-t"
          >
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <FaSearch className="top-1/2 left-3 absolute text-gray-400 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for services, documentation, or help..."
                  className="border-gray-200/70 bg-gray-50/80 py-3 pr-4 pl-10 border focus:border-transparent rounded-xl focus:ring-2 focus:ring-[#EA3C3C] w-full transition-colors duration-200"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="top-16 z-50 absolute inset-x-0 md:hidden bg-white/90 shadow-lg backdrop-blur-md overflow-hidden"
          >
            <div className="space-y-1 p-3">
              {serviceItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 10 }}
                  className="rounded-xl overflow-hidden"
                >
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                      isActiveLink(item.path)
                        ? "text-[#EA3C3C] bg-red-50"
                        : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-[#EA3C3C] text-lg">
                        {item.icon}
                      </span>
                      <div>
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-gray-500 text-xs">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="bg-[#EA3C3C] px-2 py-1 rounded-full font-medium text-white text-xs">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ x: 10 }}
                className="rounded-xl overflow-hidden"
              >
                <Link
                  to="/about"
                  className={`block px-4 py-3 rounded-xl font-medium text-base ${
                    isActiveLink("/about")
                      ? "text-[#EA3C3C] bg-red-50"
                      : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="rounded-xl overflow-hidden"
              >
                <Link
                  to="/contact"
                  className={`block px-4 py-3 rounded-xl font-medium text-base ${
                    isActiveLink("/contact")
                      ? "text-[#EA3C3C] bg-red-50"
                      : "text-gray-700 hover:text-[#EA3C3C] hover:bg-red-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-2 mt-4">
                <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className="block border-gray-300 hover:border-[#EA3C3C] px-4 py-2 border rounded-lg font-medium text-center text-gray-600 hover:text-[#EA3C3C] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="block bg-[#EA3C3C] hover:bg-[#d63535] hover:shadow-lg hover:shadow-[#EA3C3C]/20 px-4 py-2 rounded-lg font-medium text-center text-white transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
