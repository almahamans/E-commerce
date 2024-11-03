import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../service/ServiceProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [serchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(serchTerm);
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
    <ProductContext.Provider value={{ productsData, isLoading, error, setSearchTerm }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};