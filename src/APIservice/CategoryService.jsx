import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios(`http://localhost:5000/api/categories`);
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
