import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.data.items);
        setProductsData(data.data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ productsData, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
