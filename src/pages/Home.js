import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Telecom Inventory Management System</h1>
        <p>
          Manage your telecom inventory with ease. Track products, suppliers, stock levels, and transactions, all in one platform.
        </p>
        <button className="register-button" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Home;
