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

  const [documents, setDocuments] = useState({
    proofOfOwnership: '',
    insurance: '',
    emissionTest: '',
    document: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setDocuments((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate file types and sizes
      const validateFile = (file, maxSize = 5 * 1024 * 1024) => {
        // 5MB max
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
          throw new Error('Only PDF, JPEG, and PNG files are allowed');
        }
        if (file.size > maxSize) {
          throw new Error('File size should not exceed 5MB');
        }
      };

      // Validate required files
      if (!documents.proofOfOwnership || !documents.insurance) {
        throw new Error(
          'Proof of ownership and insurance documents are required'
        );
      }

      validateFile(documents.proofOfOwnership);
      validateFile(documents.insurance);
      if (documents.emissionTest) {
        validateFile(documents.emissionTest);
      }

      const formData = new FormData();

      // Add vehicle data
      Object.keys(vehicle).forEach((key) => {
        formData.append(key, vehicle[key]);
      });

      // Add document files
      Object.keys(documents).forEach((key) => {
        if (documents[key]) {
          formData.append(key, documents[key]);
        }
      });

      await uploadApi.post('/vehicles/register', formData);

      toast.success('Vehicle registered successfully!');

      // Reset form
      setVehicle({
        make: '',
        model: '',
        year: '',
        vin: '',
        licensePlate: '',
        type: '',
        owner: '',
      });
      setDocuments({
        proofOfOwnership: '',
        insurance: '',
        emissionTest: '',
        document: '',
      });
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

            <div className="mb-4 flex flex-col w-[48%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="document"
              >
                Upload Document:
              </label>
              <input
                type="file"
                id="document"
                name="document"
                onChange={handleFileChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            <div className="mb-4 flex flex-col w-[48%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Proof of Ownership:
              </label>
              <input
                type="file"
                name="proofOfOwnership"
                onChange={handleFileChange}
                required
                className="appearance-none border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4 flex flex-col w-[48%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Insurance Document:
              </label>
              <input
                type="file"
                name="insurance"
                onChange={handleFileChange}
                required
                className="appearance-none border rounded w-full py-2 px-3"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Emission Test (Optional):
            </label>
            <input
              type="file"
              name="emissionTest"
              onChange={handleFileChange}
              className="appearance-none border rounded w-full py-2 px-3"
            />
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
