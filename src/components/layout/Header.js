import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Logo" />
        <h1>Telecom Inventory</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href={`/dashboard/${user?.role}`}>Dashboard</a></li>

          <li><a href="/products">Products</a></li>
          <li><a href="/suppliers">Suppliers</a></li>
          <li><a href="/notifications">Notifications</a></li>
        </ul>
      </nav>
      <div className="user-menu">
        <span>{user?.username}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
