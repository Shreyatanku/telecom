import React, { createContext, useState, useContext, useEffect } from 'react';
import { productService } from '../services/productService'; // Ensure this file exists.

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await productService.getAllProducts();
    setProducts(data);
  };

  const addProduct = async (product) => {
    const newProduct = await productService.addProduct(product);
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, fetchProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
