import React from 'react';

const UserDashboard = ({ user, vehicles }) => {
 return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <h2>Your Registered Vehicles:</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>{vehicle.make} {vehicle.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;