import axios from 'axios';

const API_URL = 'http://localhost:4000/api'; // replace with your API base URL

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// For file uploads, create a separate instance
export const uploadApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add token interceptor to uploadApi
uploadApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request config:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Login function
export const login = async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Login error details:', {
      status: error.response?.status,
      message: error.response?.data?.message,
    });
    throw error;
  }
};

// Get current user
export const getCurrentUser = async () => {
  const response = await api.get('/users/me');
  return response.data;
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

// Fetch all vehicles (for admin)
export const fetchAllVehicles = async () => {
  try {
    const response = await api.get('/vehicles');
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};

// Approve a vehicle (for admin)
export const approveVehicle = async (vehicleId) => {
  try {
    const response = await api.post(`/vehicles/approve/${vehicleId}`);
    return response.data; // Return the updated vehicle
  } catch (error) {
    console.error('Error approving vehicle:', error);
    throw error;
  }
};

// Reject a vehicle (for admin)
export const rejectVehicle = async (vehicleId) => {
  try {
    const response = await api.post(`/vehicles/reject/${vehicleId}`);
    return response.data; // Return the updated vehicle
  } catch (error) {
    console.error('Error rejecting vehicle:', error);
    throw error;
  }
};

// Add other API functions here

export default api;
