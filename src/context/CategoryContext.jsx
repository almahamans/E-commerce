import React, { createContext, useEffect, useState } from 'react'

import { getAllCategories } from '../APIservice/CategoryService';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
      const [categoriesData, setCategoriesData] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
        setIsLoading(true);
        try {
            const response = await getAllCategories();
            setCategoriesData(response.data.data.items);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
        };

        fetchCategories();
    }, []);

    return (
      <CategoryContext.Provider
        value={{ categoriesData }}
      >
        {children}
      </CategoryContext.Provider>
    );
}
