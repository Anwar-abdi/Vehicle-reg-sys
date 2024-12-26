import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaCarAlt,
  FaFileAlt,
  FaCreditCard,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { id: "introduction", label: "Introduction", icon: <FaBook /> },
        { id: "quick-start", label: "Quick Start Guide", icon: <FaCarAlt /> },
      ],
    },
    {
      title: "Registration Process",
      items: [
        {
          id: "new-registration",
          label: "New Vehicle Registration",
          icon: <FaFileAlt />,
        },
        { id: "renewal", label: "Registration Renewal", icon: <FaFileAlt /> },
        { id: "transfer", label: "Ownership Transfer", icon: <FaFileAlt /> },
      ],
    },
    {
      title: "Payment & Fees",
      items: [
        {
          id: "payment-methods",
          label: "Payment Methods",
          icon: <FaCreditCard />,
        },
        { id: "fee-structure", label: "Fee Structure", icon: <FaCreditCard /> },
      ],
    },
    {
      title: "Help & Support",
      items: [
        { id: "faq", label: "FAQ", icon: <FaQuestionCircle /> },
        { id: "support", label: "Support", icon: <FaQuestionCircle /> },
      ],
    },
  ];

  return (
    <div className="top-16 left-0 fixed border-gray-200 bg-white border-r w-64 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search documentation..."
            className="border-gray-200 bg-gray-50 py-2 pr-4 pl-10 border focus:border-transparent rounded-lg focus:ring-2 focus:ring-[#EA3C3C] w-full text-sm"
          />
          <FaSearch className="top-1/2 left-3 absolute text-gray-400 transform -translate-y-1/2" />
        </div>
      </div>
      <nav className="px-4 pb-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h5 className="mb-3 font-semibold text-gray-900 text-sm uppercase tracking-wider">
              {section.title}
            </h5>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      activeSection === item.id
                        ? "bg-[#EA3C3C]/10 text-[#EA3C3C]"
                        : "text-gray-600 hover:text-[#EA3C3C] hover:bg-[#EA3C3C]/5"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

const ContentSection = ({ id }) => {
  const content = {
    introduction: {
      title: "Introduction",
      content: `Welcome to the CarLink Documentation. This guide will help you understand our vehicle registration system and how to use it effectively.

Our platform simplifies the vehicle registration process, making it easier for vehicle owners to manage their registrations online.`,
    },
    "quick-start": {
      title: "Quick Start Guide",
      content: `Get started with CarLink in minutes:

1. Create an account
2. Add your vehicle information
3. Choose your registration type
4. Complete the payment
5. Receive your registration certificate`,
    },
    // Add more content sections as needed
  };

  const section = content[id] || {
    title: "Coming Soon",
    content: "This section is currently under development.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-none prose prose-lg"
    >
      <h1 className="mb-6 font-bold text-4xl text-gray-900">{section.title}</h1>
      <div className="space-y-4">
        {section.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="bg-white pt-16 min-h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="mx-auto ml-64 p-8 max-w-4xl">
        <ContentSection id={activeSection} />
      </div>
    </div>
  );
};

export default Documentation;
