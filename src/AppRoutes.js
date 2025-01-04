import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './pages/Products/ProductListPage';
import ProductDetailsPage from './pages/Products/ProductDetailsPage';
import AddProductPage from './pages/Products/AddProductPage';
import SupplierListPage from './pages/Suppliers/SupplierListPage';
import AddSupplierPage from './pages/Suppliers/AddSupplierPage';
import AdminDashboardPage from './pages/Dashboard/AdminDashboardPage';
import ManagerDashboardPage from './pages/Dashboard/ManagerDashboardPage';
import StaffDashboardPage from './pages/Dashboard/StaffDashboardPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import Home from './pages/Home';
import StockInPage from './pages/Transactions/StockInPage';
import StockOutPage from './pages/Transactions/StockOutPage';
import NotificationsPage from './pages/Notifications/NotificationsPage';
import UserManagementPage from './pages/User/UserManagementPage';
import UserProfilePage from './pages/User/UserProfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route name="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboards */}
      <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
      <Route path="/dashboard/manager" element={<ManagerDashboardPage />} />
      <Route path="/dashboard/staff" element={<StaffDashboardPage />} />

      {/* Products */}
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/products/add" element={<AddProductPage />} />

      {/* Suppliers */}
      <Route path="/suppliers" element={<SupplierListPage />} />
      <Route path="/suppliers/add" element={<AddSupplierPage />} />
      {/* Transactions */}
      <Route path="/transactions/stock-in" element={<StockInPage />} />
      <Route path="/transactions/stock-out" element={<StockOutPage />} />

      {/* Notifications */}
      <Route path="/notifications" element={<NotificationsPage />} />

      <Route path="/users" element={<UserManagementPage />} />
      <Route path="/users/:id" element={<UserProfilePage />} />

    </Routes>
  );
};

export default AppRoutes;
