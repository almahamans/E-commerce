import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../APIservice/ServiceProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(10);
  const [sortBy, setSortBy] = useState("CreatedAt");

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProducts(
        searchTerm,
        pageNumber,
        pageSize,
        sortBy,
        sortOrder
      );
      setProductsData(response.data.data.items);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, pageNumber, pageSize, sortBy, sortOrder]);
  
  return (
    <ProductContext.Provider
      value={{
        productsData,
        setProductsData,
        isLoading,
        setIsLoading,
        error,
        setError,
        searchTerm,
        setSearchTerm,
        totalPages,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
        fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};