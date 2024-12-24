import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth'; // Custom hook to access authentication context
import {
  fetchAllVehicles,
  approveVehicle,
  rejectVehicle,
} from '../services/api'; // Assume these functions are part of your API service

const AdminPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch all vehicles for admin review
    const loadVehicles = async () => {
      try {
        const vehicleData = await fetchAllVehicles();
        setVehicles(vehicleData);
      } catch (error) {
        console.error('Failed to load vehicles', error);
      }
    };

    loadVehicles();
  }, []);

  const handleApprove = async (vehicleId) => {
    try {
      await approveVehicle(vehicleId);
      setVehicles(
        vehicles.map((v) =>
          v.id === vehicleId ? { ...v, status: 'approved' } : v
        )
      );
    } catch (error) {
      console.error('Failed to approve vehicle', error);
    }
  };

  const handleReject = async (vehicleId) => {
    try {
      await rejectVehicle(vehicleId);
      setVehicles(
        vehicles.map((v) =>
          v.id === vehicleId ? { ...v, status: 'rejected' } : v
        )
      );
    } catch (error) {
      console.error('Failed to reject vehicle', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Welcome, {user?.name}</h2>
      <h3>Pending Vehicle Approvals</h3>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.make} {vehicle.model} ({vehicle.year}) - {vehicle.status}
            <button onClick={() => handleApprove(vehicle.id)}>Approve</button>
            <button onClick={() => handleReject(vehicle.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
