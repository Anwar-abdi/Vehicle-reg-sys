import { useState } from 'react';
import { toast } from 'react-toastify';
import { uploadApi } from '../../services/api';

export default function VehicleForm() {
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    year: '',
    vin: '',
    licensePlate: '',
    type: '',
    owner: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (
        !vehicle.make ||
        !vehicle.model ||
        !vehicle.year ||
        !vehicle.vin ||
        !vehicle.licensePlate ||
        !vehicle.type ||
        !vehicle.owner
      ) {
        throw new Error('All fields are required');
      }

      // Prepare the vehicle data as a plain JSON object
      const vehicleData = { ...vehicle };

      // Send the POST request to the server with JSON data
      const response = await uploadApi.post('/vehicles/register', vehicleData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the request body is treated as JSON
        },
      });

      // Check if the response status is successful
      if (response.status === 200) {
        toast.success('Vehicle registered successfully!');

        // Reset the form after successful submission
        setVehicle({
          make: '',
          model: '',
          year: '',
          vin: '',
          licensePlate: '',
          type: '',
          owner: '',
        });
      } else {
        throw new Error('Failed to register vehicle');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to register vehicle');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-[#F5F5F5] w-[100vw] h-[110vh] justify-center mt-[3rem]">
      <div className="mt-[2rem] space-y-2">
        <h1 className="text-center text-[2.5rem] font-semibold">
          <span className="text-[#DC143C]">Vehicle</span> Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[70vw] rounded shadow-md mt-3 px-6 py-4"
        >
          <div className="flex flex-wrap justify-between gap-4">
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="make"
              >
                Make:
              </label>
              <input
                type="text"
                id="make"
                name="make"
                value={vehicle.make}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="model"
              >
                Model:
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={vehicle.model}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="year"
              >
                Year:
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={vehicle.year}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="vin"
              >
                VIN:
              </label>
              <input
                type="text"
                id="vin"
                name="vin"
                value={vehicle.vin}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="licensePlate"
              >
                License Plate:
              </label>
              <input
                type="text"
                id="licensePlate"
                name="licensePlate"
                value={vehicle.licensePlate}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type"
              >
                Vehicle Type:
              </label>
              <select
                id="type"
                name="type"
                value={vehicle.type}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Vehicle Type</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Truck">Truck</option>
                <option value="Bicycle">Bicycle</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="owner"
              >
                Owner:
              </label>
              <input
                type="text"
                id="owner"
                name="owner"
                value={vehicle.owner}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#DC143C] text-white font-bold py-2 px-[6rem] rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            >
              {loading ? 'Registering...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
