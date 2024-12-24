import React from "react";

const Newsletter = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 to-white py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="top-0 left-0 absolute bg-rose-200 opacity-30 blur-3xl rounded-full w-72 h-72 -translate-x-1/2 -translate-y-1/2 filter"></div>
      <div className="right-0 bottom-0 absolute bg-rose-200 opacity-30 blur-3xl rounded-full w-72 h-72 translate-x-1/2 translate-y-1/2 filter"></div>

      <div className="relative z-10 mx-auto px-4 container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold text-rose-600 text-sm uppercase tracking-wider">
            Stay Updated
          </span>
          <h2 className="mt-4 font-bold text-4xl text-gray-900 md:text-5xl leading-tight">
            Get Exclusive Updates & Offers
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join our newsletter and receive the latest news, updates, and
            special offers directly in your inbox.
          </p>

          <form className="flex sm:flex-row flex-col justify-center gap-4 mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-gray-200 bg-white shadow-sm px-6 py-4 border rounded-lg focus:ring-2 focus:ring-rose-500/50 max-w-md text-gray-900 focus:outline-none placeholder-gray-400"
            />
            <button className="bg-rose-600 hover:bg-rose-700 shadow-lg hover:shadow-rose-500/20 px-8 py-4 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105">
              Subscribe Now
            </button>
          </form>

          <p className="mt-4 text-gray-500 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
