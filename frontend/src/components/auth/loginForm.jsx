import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../services/api';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      console.log('Attempting login with:', formData);
      const response = await login(formData);
      console.log('Login response:', response);

      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userData', JSON.stringify(response));

        toast.success('Login successful! 👋', {
          position: 'top-right',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/user');
        }, 2000);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(
        error.response?.data?.message || `Login failed: ${error.message}`,
        {
          position: 'top-right',
          autoClose: 4000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 w-full h-[100vh]">
      <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        <h2 className="mb-8 font-bold text-2xl text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-red-500 hover:bg-red-600 focus:shadow-outline px-8 py-2 rounded font-bold text-white focus:outline-none disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
