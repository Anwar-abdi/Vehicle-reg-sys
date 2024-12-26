import React from "react";
import car_imgs from "../assets/carimgs.png";

const About = () => {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
      icon: (
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "500+",
      label: "Cars Available",
      icon: (
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
      ),
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Expert Team",
      description:
        "Our dedicated professionals bring years of industry expertise.",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your automotive needs.",
      icon: (
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
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto px-4 container">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="top-20 -left-40 absolute bg-red-50 opacity-30 blur-3xl rounded-full w-80 h-80"></div>
            <div className="right-0 bottom-0 absolute bg-red-50 opacity-30 blur-3xl rounded-full w-96 h-96"></div>
          </div>

          {/* Main Content */}
          <div className="relative mx-auto mb-20 max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl">
              About <span className="text-[#EA3C3C]">CarLink</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Revolutionizing the automotive industry with innovative solutions
              and exceptional service.
            </p>
          </div>

          {/* Stats Section */}
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-5xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl p-8 rounded-2xl transform transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-red-50 p-4 rounded-full">{stat.icon}</div>
                  <h3 className="font-bold text-[#EA3C3C] text-4xl">
                    {stat.number}
                  </h3>
                  <p className="font-medium text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-white py-20">
        <div className="mx-auto px-4 container">
          <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1 group perspective-1000">
              {/* Decorative Elements */}
              <div className="-top-4 -left-4 z-0 absolute bg-red-50 opacity-60 blur-xl rounded-full w-24 h-24"></div>
              <div className="-right-4 -bottom-4 z-0 absolute bg-red-100 opacity-60 blur-xl rounded-full w-32 h-32"></div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl transform-gpu transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
                {/* Image Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main Image */}
                <img
                  src={car_imgs}
                  alt="Luxury Car"
                  className="shadow-2xl rounded-2xl w-full h-[500px] transform transition-all duration-700 object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Image Border Glow */}
                <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-2xl transition-all duration-500"></div>

                {/* Corner Accents */}
                <div className="top-4 left-4 absolute border-t-2 border-red-500/0 group-hover:border-red-500/50 border-l-2 w-8 h-8 transition-all duration-500"></div>
                <div className="right-4 bottom-4 absolute border-r-2 border-red-500/0 group-hover:border-red-500/50 border-b-2 w-8 h-8 transition-all duration-500"></div>
              </div>

              {/* Background Effects */}
              <div className="-right-8 -bottom-8 -z-10 absolute bg-[#EA3C3C] opacity-10 blur-2xl rounded-full w-48 h-48"></div>
              <div className="-top-8 -left-8 -z-10 absolute bg-[#EA3C3C] opacity-10 blur-2xl rounded-full w-32 h-32"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="font-bold text-4xl md:text-5xl leading-tight">
                Driving Innovation, <br />
                <span className="inline-block relative text-[#EA3C3C]">
                  Delivering Excellence
                  <span className="bottom-0 left-0 absolute bg-[#EA3C3C]/20 w-full h-1"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At CarLink, we're more than just a car service platform. We're
                your trusted partner in all things automotive, committed to
                delivering exceptional experiences and innovative solutions.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto px-4 max-w-4xl text-center container">
          <h2 className="mb-8 font-bold text-3xl md:text-4xl">
            Our <span className="text-[#EA3C3C]">Mission</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To revolutionize the automotive industry by providing innovative
            solutions that simplify vehicle ownership and management. We strive
            to create seamless experiences that exceed customer expectations
            while maintaining the highest standards of quality and reliability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
