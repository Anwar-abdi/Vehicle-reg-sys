import { useState } from "react";
import { registerUser } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import luxuryCar from "../assets/sign_up.png";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { username, email, password, phone } = formData;

  const Register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerUser(formData);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      toast.success("Registration successful! 🎉", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Optional: Redirect after successful registration
      setTimeout(() => (window.location.href = "/login"), 3000);
    } catch (err) {
      toast.error(err.message || "Registration failed", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-400/20 to-blue-600/20 w-full h-[100vh]">
      <div className="flex bg-white shadow-lg rounded-lg w-full max-w-6xl overflow-hidden">
        {/* Right Column - Form (now on left) */}
        <div className="p-8 w-full md:w-1/2">
          <h2 className="mb-8 font-bold text-2xl text-center text-gray-800">
            Sign Up
          </h2>
          <form onSubmit={Register}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow-sm focus:shadow-outline px-3 py-3 border rounded w-full text-gray-700 leading-tight appearance-none focus:outline-none"
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow-sm focus:shadow-outline px-3 py-3 border rounded w-full text-gray-700 leading-tight appearance-none focus:outline-none"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow-sm focus:shadow-outline px-3 py-3 border rounded w-full text-gray-700 leading-tight appearance-none focus:outline-none"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow-sm focus:shadow-outline px-3 py-3 border rounded w-full text-gray-700 leading-tight appearance-none focus:outline-none"
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-red-500 hover:bg-red-600 focus:shadow-outline px-8 py-2 rounded font-bold text-white transition duration-300 focus:outline-none"
                type="submit"
                disabled={loading}
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>

        {/* Left Column - Image (now on right) */}
        <div className="md:block relative hidden w-1/2">
          <img
            src={luxuryCar}
            alt="Luxury Sports Car"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
