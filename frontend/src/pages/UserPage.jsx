import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    username: '',
    phone: '',
  });

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      toast.error('Please login to access this page');
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    setEditedData({
      username: parsedUser.username,
      phone: parsedUser.phone,
    });
    setLoading(false);

    // Welcome toast with user icon
    toast.success(
      <div className="flex items-center">
        <FaUser className="mr-2" />
        <span>Welcome back, {parsedUser.User}!</span>
      </div>,
      {
        position: 'top-right',
        autoClose: 3000,
      }
    );
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      // Update user data in localStorage
      const updatedUser = { ...user, ...editedData };
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setEditing(false);
      toast.success('Profile updated successfully!');
    } catch {
      toast.error('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setEditedData({
      username: user.username,
      phone: user.phone,
    });
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

return (
  <div className="min-h-screen bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 mb-6 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <FaUser className="text-blue-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
              <p className="text-blue-100">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center space-x-2"
          >
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Information Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <FaUser className="mr-2 text-blue-500" />
              Profile Information
            </h2>
            {!editing ? (
              <button
                onClick={handleEdit}
                className="text-blue-500 hover:text-blue-600 transition duration-200"
              >
                <FaEdit className="text-xl" />
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  onClick={handleSave}
                  className="text-green-500 hover:text-green-600 transition duration-200"
                >
                  <FaCheck className="text-xl" />
                </button>
                <button
                  onClick={handleCancel}
                  className="text-red-500 hover:text-red-600 transition duration-200"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Username</p>
              {editing ? (
                <input
                  type="text"
                  value={editedData.username}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      username: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="font-medium text-gray-800">{user.username}</p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="font-medium text-gray-800">{user.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Phone</p>
              {editing ? (
                <input
                  type="text"
                  value={editedData.phone}
                  onChange={(e) =>
                    setEditedData({ ...editedData, phone: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="font-medium text-gray-800">{user.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">🚗</span>
            Vehicle Management
          </h2>
          <div className="space-y-4">
            <Link
              to="/vehicleForm"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-200 flex items-center justify-center space-x-2"
            >
              <span>Register New Vehicle</span>
            </Link>
            {/* Add more action buttons here if needed */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default UserPage;
