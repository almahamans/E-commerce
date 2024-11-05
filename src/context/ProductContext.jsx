import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";


import { getAllProducts } from "../APIservice/ServiceProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProducts(
        searchTerm,
        pageNumber,
        pageSize,
        sortOrder
      );
      console.log("searchTerm:", searchTerm);

      setProductsData(response.data.data.items);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchProducts();
  }, [searchTerm, pageNumber, sortOrder]);

  return (
    <ProductContext.Provider
      value={{
        productsData,
        isLoading,
        setIsLoading,
        error,
        setSearchTerm,
        searchTerm,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        sortOrder,
        setSortOrder,
        totalPages
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};
