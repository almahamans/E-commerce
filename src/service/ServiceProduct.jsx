import axios from "axios";

export const getAllProducts = async (searchTerm) => {
  try {
    const response = await axios(
      `http://localhost:5000/api/products?search=${searchTerm}`
    );
    return response.data.data.items;
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