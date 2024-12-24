// hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  const signup = (data) => {
    // Logic for signup goes here
    console.log('Signing up:', data);
  };

  return { signup };
};

export default useAuth;
