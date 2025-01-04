import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { ProductProvider } from './context/ProductContext';
import { SupplierProvider } from './context/SupplierContext';
import { TransactionProvider } from './context/TransactionContext';
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <ProductProvider>
            <SupplierProvider>
              <TransactionProvider>
                <div className="app">
                  <Header />
                  <div>
                    <div>
                      <AppRoutes />
                    </div>
                  </div>
                  <Footer />
                </div>
              </TransactionProvider>
            </SupplierProvider>
          </ProductProvider>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
