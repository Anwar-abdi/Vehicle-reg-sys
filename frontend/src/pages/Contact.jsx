import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = ({ icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center space-x-4 bg-white shadow-sm hover:shadow-md p-4 rounded-xl transition-all duration-300"
  >
    <div className="bg-[#EA3C3C]/10 p-3 rounded-lg">
      <span className="text-[#EA3C3C] text-xl">{icon}</span>
    </div>
    <div>
      <h3 className="font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="top-20 -left-40 absolute bg-[#EA3C3C]/5 opacity-30 blur-3xl rounded-full w-80 h-80" />
        <div className="right-0 bottom-0 absolute bg-[#EA3C3C]/5 opacity-30 blur-3xl rounded-full w-96 h-96" />
      </motion.div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="font-medium text-[#EA3C3C] text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
            Contact <span className="text-[#EA3C3C]">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have questions about our services? We're here to help and provide
            you with the best support possible.
          </p>
        </motion.div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white shadow-sm p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700 text-sm"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block border-gray-200 bg-gray-50 mt-1 px-4 py-3 border focus:border-transparent rounded-lg focus:ring-2 focus:ring-[#EA3C3C] w-full transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 text-sm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block border-gray-200 bg-gray-50 mt-1 px-4 py-3 border focus:border-transparent rounded-lg focus:ring-2 focus:ring-[#EA3C3C] w-full transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block font-medium text-gray-700 text-sm"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block border-gray-200 bg-gray-50 mt-1 px-4 py-3 border focus:border-transparent rounded-lg focus:ring-2 focus:ring-[#EA3C3C] w-full transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700 text-sm"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block border-gray-200 bg-gray-50 mt-1 px-4 py-3 border focus:border-transparent rounded-lg focus:ring-2 focus:ring-[#EA3C3C] w-full transition-colors duration-200 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#EA3C3C] hover:bg-[#d63535] px-6 py-3 rounded-lg w-full font-medium text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <ContactInfo
              icon={<FaPhone />}
              title="Phone"
              content="+252 61 XXX XXXX"
            />
            <ContactInfo
              icon={<FaEnvelope />}
              title="Email"
              content="info@somnog.so"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt />}
              title="Address"
              content="Mogadishu, Somalia"
            />

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-sm mt-8 p-6 rounded-2xl"
            >
              <h3 className="mb-4 font-semibold text-gray-800 text-lg">
                Working Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Thursday: 8:00 AM - 6:00 PM</p>
                <p>Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
