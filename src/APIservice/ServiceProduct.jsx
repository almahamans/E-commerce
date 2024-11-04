import axios from "axios";

export const getAllProducts = async (searchTerm = "", currentPage = 1, pageSize = 2) => {
  try {
    const response = await axios(
      `http://localhost:5000/api/products`,
      {params: {search: searchTerm, currentPage, pageSize}}
    );
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // or handle the error as appropriate
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios(`http://localhost:5000/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // or handle the error as appropriate
  }
};

export const deleteProductById = () => {};