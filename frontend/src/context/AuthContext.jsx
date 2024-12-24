import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { login as loginUser, signup as signupUser } from '../services/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    try {
      const newUser = await signupUser(userData);
      setUser(newUser);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (credentials) => {
    try {
      const loggedInUser = await loginUser(credentials);
      setUser(loggedInUser);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

