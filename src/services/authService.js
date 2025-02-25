// src/services/authService.js
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail } from './emailService';

const API_URL = 'http://localhost:5000/api/auth';
const JWT_SECRET = 'your_jwt_secret';

const login = async (email, password) => {
  const response = await axios.post(${API_URL}/login, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (formData) => {
  const response = await axios.post(${API_URL}/register, formData);
  const token = jwt.sign({ email: formData.email }, JWT_SECRET, { expiresIn: '1h' });
  sendVerificationEmail(formData.email, token);
  return response.data;
};

const verifyEmail = async (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    await axios.post(${API_URL}/verify-email, { email: decoded.email });
    return true;
  } catch (error) {
    return false;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  login,
  register,
  verifyEmail,
  logout,
};
