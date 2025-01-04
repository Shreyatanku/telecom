export const supplierService = {
    getAllSuppliers: async () => {
      // Mock data; replace with API call.
      return [
        { id: 1, name: 'Tech Supplies Co.', contact: 'tech@supplies.com', address: '123 Tech St', orderCount: 120 },
        { id: 2, name: 'Furniture World', contact: 'info@furnitureworld.com', address: '456 Home Lane', orderCount: 45 },
      ];
    },
  
    addSupplier: async (supplier) => {
      // Mock adding a supplier; replace with API call.
      return { ...supplier, id: Date.now() };
    },
  };
  