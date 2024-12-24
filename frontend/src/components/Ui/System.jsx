import React from "react";
import login_img from "../assets/key.png";
import signup_img from "../assets/sign_up.png";
import edit_img from "../assets/edit.png";
import { Link } from "react-router-dom";

const StepCard = ({ image, number, title, description, isActive, delay }) => (
  <div
    className={`relative p-6 rounded-xl transition-all duration-500 transform hover:scale-105 ${
      isActive ? "bg-white shadow-xl" : "bg-transparent"
    }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col items-center">
      {/* Image Container */}
      <div className="relative mb-6 group">
        <div className="absolute inset-0 bg-red-50 opacity-20 group-hover:opacity-40 blur-xl rounded-full transition-opacity filter"></div>
        <div className="relative flex justify-center items-center w-24 md:w-28 h-24 md:h-28">
          <img
            className="group-hover:scale-110 w-20 md:w-24 h-20 md:h-24 transform transition-transform duration-300 object-contain"
            src={image}
            alt={title}
          />
        </div>
      </div>

      {/* Number Badge */}
      <div className="top-4 right-4 absolute flex justify-center items-center bg-red-500 rounded-full w-8 h-8 transform -rotate-12">
        <span className="font-bold text-white">{number}</span>
      </div>

      {/* Content */}
      <div className="space-y-3 text-center">
        <h2 className="font-bold text-gray-800 text-xl md:text-2xl">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>

      {/* Connection Line */}
      <div className="lg:block top-1/2 right-0 -z-10 absolute hidden bg-gray-200 w-full h-0.5 transform -translate-y-1/2">
        <div className="top-0 left-0 absolute bg-red-500 h-full transition-all duration-500"></div>
      </div>
    </div>
  </div>
);

const System = () => {
  const steps = [
    {
      image: signup_img,
      number: "1",
      title: "Sign Up",
      description:
        "Create your account in minutes with our simple registration process",
    },
    {
      image: login_img,
      number: "2",
      title: "Log In",
      description: "Securely access your account dashboard",
    },
    {
      image: edit_img,
      number: "3",
      title: "Register Vehicle",
      description: "Complete your vehicle registration quickly and easily",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-6 font-bold text-3xl md:text-4xl lg:text-5xl">
            How It <span className="text-[#EA3C3C]">Works</span>
          </h1>
          <p className="text-base text-gray-600 md:text-lg">
            Follow these simple steps to register your vehicle online. Our
            streamlined process makes vehicle registration quick and
            hassle-free.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Progress Line - Desktop */}
          <div className="lg:block top-1/2 right-0 left-0 absolute hidden bg-gray-200 h-0.5 transform -translate-y-1/2">
            <div className="left-0 absolute bg-[#EA3C3C] w-full h-full transform origin-left transition-transform duration-1000 scale-x-0"></div>
          </div>

          {/* Steps Grid */}
          <div className="relative gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                isActive={true}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-16 text-center">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl text-gray-800 md:text-3xl">
              Ready to Get Started?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Join thousands of satisfied users who have already registered
              their vehicles through our platform.
            </p>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
              <Link
                to="/signup"
                className="bg-[#EA3C3C] hover:bg-[#d63535] hover:shadow-lg px-8 py-3 rounded-md w-full sm:w-auto font-semibold text-white transform transition-all duration-300 hover:scale-105"
              >
                Register Now
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-800 hover:bg-gray-800 px-8 py-3 rounded-md w-full sm:w-auto font-semibold text-gray-800 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex justify-center items-center bg-red-100 rounded-full w-12 h-12">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Quick Process</h3>
            </div>
            <p className="text-gray-600">
              Complete your registration in just a few minutes with our
              streamlined system
            </p>
          </div>

          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex justify-center items-center bg-red-100 rounded-full w-12 h-12">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Secure System</h3>
            </div>
            <p className="text-gray-600">
              Your data is protected with state-of-the-art security measures
            </p>
          </div>

          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex justify-center items-center bg-red-100 rounded-full w-12 h-12">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">24/7 Support</h3>
            </div>
            <p className="text-gray-600">
              Get assistance whenever you need it with our dedicated support
              team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
