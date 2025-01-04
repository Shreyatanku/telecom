import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/UserManagementPage.module.css';

const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
  { id: 2, name: 'Manager User', email: 'manager@example.com', role: 'Manager' },
  { id: 3, name: 'Staff User', email: 'staff@example.com', role: 'Staff' },
];

const UserManagementPage = () => {
  const [users, setUsers] = useState(mockUsers);
  const navigate = useNavigate();

  const handleViewProfile = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>User Management</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className={styles.viewButton}
                  onClick={() => handleViewProfile(user.id)}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementPage;
