import React from "react";
import pymentimg from "../assets/pyment.png";
import register_img from "../assets/register.png";
import storage_img from "../assets/storage.png";

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-white shadow-lg hover:shadow-xl p-6 border-red-500 border-b-2 rounded-lg w-full transition-shadow duration-300">
    <div className="flex flex-col items-center space-y-4">
      <img className="w-20 h-20 object-contain" src={image} alt={title} />
      <h2 className="font-semibold text-center text-xl md:text-2xl">{title}</h2>
      <p className="text-center text-gray-500 text-sm md:text-base">
        {description}
      </p>
    </div>
  </div>
);

const Service = () => {
  const services = [
    {
      image: register_img,
      title: "Vehicle Registration System",
      description:
        "Simplify the process of registering your vehicle or renewing your registration online. Fast, secure, and hassle-free!",
    },
    {
      image: storage_img,
      title: "Document Management Storage",
      description:
        "Digitally store and access your vehicle's important documents like registration papers, insurance, and inspection reports.",
    },
    {
      image: pymentimg,
      title: "Payment Gateway Integration",
      description:
        "Make payments for your registration, taxes, and fines securely with integrated payment options including credit cards, PayPal, and online banking.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-3xl md:text-4xl">
            Our <span className="text-[#EA3C3C]">Service</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We provide comprehensive vehicle registration services to make your
            experience seamless and efficient.
          </p>
        </div>

        {/* Services Grid */}
        <div className="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-[#EA3C3C] hover:bg-[#d63535] px-8 py-3 rounded-md font-semibold text-white transform transition-colors duration-200 hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
