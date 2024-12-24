import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/api";
import luxuryCar from "../assets/sign_in.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Attempting login with:", formData);
      const response = await login(formData);
      console.log("Login response:", response);

      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userData", JSON.stringify(response));

        toast.success("Login successful! 👋", {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/user");
        }, 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || `Login failed: ${error.message}`,
        {
          position: "top-center",
          autoClose: 4000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[100vh]">
      {/* Left Column - Image */}
      <div className="md:flex justify-center items-center hidden bg-gray-100 p-8 md:w-1/2">
        <img
          src={luxuryCar}
          alt="Luxury Car"
          className="shadow-xl rounded-lg max-w-full h-auto object-cover"
        />
      </div>

      {/* Right Column - Login Form */}
      <div className="flex justify-center items-center bg-gray-50 w-full md:w-1/2">
        <div className="bg-white shadow-lg mx-4 p-8 rounded-lg w-full max-w-md">
          <h2 className="mb-8 font-bold text-3xl text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Please enter your details to sign in
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold text-gray-700 text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow-sm px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 w-full text-gray-700 leading-tight appearance-none focus:outline-none"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 font-semibold text-gray-700 text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow-sm px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 w-full text-gray-700 leading-tight appearance-none focus:outline-none"
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-red-500 hover:bg-red-600 disabled:opacity-50 px-8 py-3 rounded-lg focus:ring-4 focus:ring-red-300 w-full font-bold text-white transition duration-200 focus:outline-none"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
