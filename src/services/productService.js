export const productService = {
    getAllProducts: async () => {
      // Mock data; replace with API call.
      return [
        { id: 1, name: 'Laptop', category: 'Electronics', stockLevel: 20, reorderPoint: 5 },
        { id: 2, name: 'Sofa', category: 'Furniture', stockLevel: 0, reorderPoint: 3 },
        { id: 3, name: 'T-Shirt', category: 'Apparel', stockLevel: 50, reorderPoint: 10 },
      ];
    },
  
    addProduct: async (product) => {
      // Mock adding a product; replace with API call.
      return { ...product, id: Date.now() };
    },
  };
  