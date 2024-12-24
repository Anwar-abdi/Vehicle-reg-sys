import React from "react";
import car_imgs from "../assets/carimgs.png";

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Cars Available" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto px-4 container">
        <h1 className="mb-16 font-bold text-4xl text-center md:text-5xl">
          About <span className="text-[#EA3C3C]">Us</span>
        </h1>

        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <img
              src={car_imgs}
              alt="Luxury Car"
              className="shadow-2xl rounded-lg w-full h-[400px] object-cover"
            />
            <div className="-right-6 -bottom-6 -z-10 absolute bg-[#EA3C3C] opacity-10 rounded-full w-40 h-40"></div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-4xl leading-tight">
              Driving Innovation, <br /> Delivering Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to transforming the way people experience
              vehicles. With a passion for innovation and a focus on customer
              satisfaction, we provide seamless services tailored to your needs.
              From vehicle registration and compliance to helping you find the
              perfect car, our mission is to simplify the process and deliver
              excellence every step of the way.
            </p>

            <div className="gap-4 grid grid-cols-3 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-[#EA3C3C] text-2xl">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
