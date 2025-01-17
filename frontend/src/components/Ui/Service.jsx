// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCarAlt,
  FaFileAlt,
  FaCreditCard,
  FaClipboardCheck,
  FaIdCard,
  FaShieldAlt,
} from "react-icons/fa";

const ServiceCard = ({ icon, title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white shadow-sm hover:shadow-xl p-6 rounded-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group-hover:scale-x-100 top-0 absolute inset-x-0 bg-gradient-to-r from-[#EA3C3C] to-rose-400 rounded-t-2xl h-1 transform origin-left transition-transform duration-300 scale-x-0" />

      <div className="space-y-8">
        <motion.div 
          className="flex items-center space-x-4"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <div className="bg-[#EA3C3C]/10 p-4 rounded-xl">
              <div className="text-[#EA3C3C] transition-colors duration-300">
                {icon}
              </div>
            </div>
          </div>
          <h2 className="font-semibold text-gray-800 text-xl">{title}</h2>
        </motion.div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {features && (
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center hover:bg-[#EA3C3C]/5 p-2.5 rounded-lg transition-all duration-200 group/item"
              >
                <div className="flex-shrink-0 mr-3">
                  <div className="group-hover/item:bg-[#EA3C3C]/20 flex justify-center items-center bg-[#EA3C3C]/10 rounded-full w-6 h-6 transition-colors duration-200">
                    <svg
                      className="group-hover/item:text-[#EA3C3C] w-3.5 h-3.5 text-[#EA3C3C]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="group-hover/item:text-gray-800 font-medium text-[0.925rem] text-gray-600 transition-colors duration-200">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Service = () => {
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      icon: <FaCarAlt className="w-12 h-12" />,
      title: "Vehicle Registration",
      description: "Complete vehicle registration and renewal services online",
      features: [
        "New vehicle registration",
        "Registration renewal",
        "Ownership transfer",
        "Plate replacement",
        "Registration certificate duplicate",
      ],
    },
    {
      icon: <FaFileAlt className="w-12 h-12" />,
      title: "Document Management",
      description: "Secure digital storage for all your vehicle documentation",
      features: [
        "Digital document storage",
        "Quick document retrieval",
        "Document verification",
        "Secure cloud backup",
        "Document sharing options",
      ],
    },
    {
      icon: <FaCreditCard className="w-12 h-12" />,
      title: "Payment Solutions",
      description: "Secure and flexible payment options for all services",
      features: [
        "Multiple payment methods",
        "Secure transactions",
        "Payment history",
        "Auto-payment setup",
        "Invoice generation",
      ],
    },
    {
      icon: <FaClipboardCheck className="w-12 h-12" />,
      title: "Vehicle Inspection",
      description:
        "Comprehensive vehicle inspection and certification services",
      features: [
        "Safety inspections",
        "Emission testing",
        "Digital inspection reports",
        "Appointment scheduling",
        "Inspection reminders",
      ],
    },
    {
      icon: <FaIdCard className="w-12 h-12" />,
      title: "License Services",
      description: "Complete driver's license services and management",
      features: [
        "License renewal",
        "International permits",
        "Address changes",
        "Duplicate license",
        "Points tracking",
      ],
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Insurance Services",
      description: "Vehicle insurance solutions and management",
      features: [
        "Insurance renewal",
        "Policy comparison",
        "Claim assistance",
        "Digital insurance cards",
        "Coverage updates",
      ],
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setFilteredServices(services);
    setIsLoading(false);
  }, []);

  // Check if we're on the service page
  const isServicePage = window.location.pathname === '/service';

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="top-20 -left-40 absolute bg-[#EA3C3C]/5 opacity-30 blur-3xl rounded-full w-80 h-80"></div>
        <div className="right-0 bottom-0 absolute bg-[#EA3C3C]/5 opacity-30 blur-3xl rounded-full w-96 h-96"></div>
      </motion.div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="block mb-2 font-medium text-[#EA3C3C] text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h1 className="mb-4 font-bold text-3xl text-gray-800 md:text-4xl lg:text-5xl">
            Our <span className="text-[#EA3C3C]">Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg leading-relaxed">
            Comprehensive vehicle management solutions to make your automotive
            experience seamless and efficient.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            // Loading skeleton
            [...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-100 rounded-2xl h-96"></div>
            ))
          ) : filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No services found matching your search.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        {!isServicePage && (
          <div className="space-y-6 mt-20 text-center">
            <h3 className="font-semibold text-2xl text-gray-800">
              Ready to Get Started?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover how our comprehensive vehicle management services can
              simplify your automotive needs.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/service"
                className="inline-flex items-center space-x-2 bg-[#EA3C3C] hover:bg-[#d63535] hover:shadow-lg hover:shadow-[#EA3C3C]/25 px-8 py-4 rounded-xl font-medium text-white transition-all duration-300"
              >
                <span>View All Services</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border-[#EA3C3C] border-2 bg-white hover:bg-[#EA3C3C] hover:shadow-lg hover:shadow-[#EA3C3C]/25 px-8 py-4 rounded-xl font-medium text-[#EA3C3C] hover:text-white transition-all duration-300"
              >
                <span>Contact Us</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              🔒 Secure platform • 24/7 Support • Easy registration
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Service;
