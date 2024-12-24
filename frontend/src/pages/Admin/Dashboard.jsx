import { useState, useEffect } from 'react';
import { FaUsers, FaCar, FaClipboardList, FaChartBar } from 'react-icons/fa';
import axios from 'axios';
import PropTypes from 'prop-types';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVehicles: 0,
    pendingApprovals: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const [usersRes, vehiclesRes] = await Promise.all([
          axios.get('/api/admin/users', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('/api/admin/vehicles', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const pendingVehicles = vehiclesRes.data.filter(
          (vehicle) => vehicle.status === 'pending'
        ).length;

        setStats({
          totalUsers: usersRes.data.length,
          totalVehicles: vehiclesRes.data.length,
          pendingApprovals: pendingVehicles,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  const DashboardCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className={`p-3 rounded-full ${color} text-white mr-4`}>{icon}</div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );

  DashboardCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<FaUsers size={24} />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Total Vehicles"
          value={stats.totalVehicles}
          icon={<FaCar size={24} />}
          color="bg-green-500"
        />
        <DashboardCard
          title="Pending Approvals"
          value={stats.pendingApprovals}
          icon={<FaClipboardList size={24} />}
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Reports Generated"
          value="View"
          icon={<FaChartBar size={24} />}
          color="bg-purple-500"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => (window.location.href = '/admin/vehicles')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Manage Vehicles
            </button>
            <button
              onClick={() => (window.location.href = '/admin/users')}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Manage Users
            </button>
            <button
              onClick={() => (window.location.href = '/admin/reports')}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Generate Reports
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">No recent activity to display.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
