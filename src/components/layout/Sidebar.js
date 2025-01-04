import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', roles: ['Admin', 'Manager', 'Staff'] },
    { label: 'Products', path: '/products', roles: ['Admin', 'Manager'] },
    { label: 'Suppliers', path: '/suppliers', roles: ['Admin', 'Manager'] },
    { label: 'Transactions', path: '/transactions', roles: ['Admin', 'Manager', 'Staff'] },
    { label: 'Notifications', path: '/notifications', roles: ['Admin', 'Manager', 'Staff'] },
    { label: 'Users', path: '/users', roles: ['Admin'] },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems
          .filter((item) => item.roles.includes(user?.role))
          .map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
