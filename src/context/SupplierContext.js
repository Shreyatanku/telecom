import React, { createContext, useState, useContext, useEffect } from 'react';
import { supplierService } from '../services/supplierService'; // API service for suppliers.

const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    const data = await supplierService.getAllSuppliers();
    setSuppliers(data);
  };

  const addSupplier = async (supplier) => {
    const newSupplier = await supplierService.addSupplier(supplier);
    setSuppliers((prev) => [...prev, newSupplier]);
  };

  return (
    <SupplierContext.Provider value={{ suppliers, fetchSuppliers, addSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};

export const useSupplier = () => useContext(SupplierContext);
