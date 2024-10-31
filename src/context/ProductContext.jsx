import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../service/ServiceProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts();
        setProductsData(response);
        console.log(response)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ productsData, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};