import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../APIservice/ServiceProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [serchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [pageSize] = useState(2);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(
          serchTerm,
          currentPage,
          totalPages,
          pageSize
        );
        setProductsData(response.data.data.items);
        const totalCount = response.data.data.totalCount;
        setTotalPages(Math.ceil(totalCount / pageSize));
        if (currentPage > Math.ceil(response.data.data.totalCount / pageSize)) {
          setCurrentPage(
            Math.max(1, Math.ceil( response.data.data.totalCount / pageSize))
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, pageSize, serchTerm]);

  return (
    <ProductContext.Provider
      value={{ productsData, isLoading, setIsLoading, error, setSearchTerm, currentPage, setCurrentPage, totalPages, pageSize }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};
