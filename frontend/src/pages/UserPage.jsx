import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

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
        <span>Welcome back, {parsedUser.username}!</span>
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
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            <FaUser className="inline-block mr-2 mb-1" />
            User Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {user && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Profile Information</h2>
                {!editing ? (
                  <button
                    onClick={handleEdit}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaEdit className="text-xl" />
                  </button>
                ) : (
                  <div className="space-x-2">
                    <button
                      onClick={handleSave}
                      className="text-green-500 hover:text-green-600"
                    >
                      <FaCheck className="text-xl" />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Username</p>
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
                      className="mt-1 p-2 border rounded w-full"
                    />
                  ) : (
                    <p className="font-medium">{user.username}</p>
                  )}
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  {editing ? (
                    <input
                      type="text"
                      value={editedData.phone}
                      onChange={(e) =>
                        setEditedData({ ...editedData, phone: e.target.value })
                      }
                      className="mt-1 p-2 border rounded w-full"
                    />
                  ) : (
                    <p className="font-medium">{user.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
              <div className="space-x-4">
                <button
                  onClick={() => navigate('/vehicle-form')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Register Vehicle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
