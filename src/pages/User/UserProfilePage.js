import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../styles/UserProfilePage.module.css';

const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin', bio: 'System administrator.' },
  { id: 2, name: 'Manager User', email: 'manager@example.com', role: 'Manager', bio: 'Manages operations.' },
  { id: 3, name: 'Staff User', email: 'staff@example.com', role: 'Staff', bio: 'Handles daily tasks.' },
];

const UserProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className={styles.container}>
        <h1>User not found</h1>
        <button className={styles.backButton} onClick={() => navigate('/users')}>
          Back to User Management
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <button className={styles.backButton} onClick={() => navigate('/users')}>
        Back to User Management
      </button>
    </div>
  );
};

export default UserProfilePage;
