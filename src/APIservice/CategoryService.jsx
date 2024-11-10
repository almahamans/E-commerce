import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = `${baseUrl}/api/categories`;

export const getAllCategories = async () => {
  try {
    const response = await axios(`${endPoint}`);
    return response;
  } catch (error) {
    console.error("Error fetching category info:", error);
    return [];
  }
}

export const addCategoryService = async (category) => {
  try {
    const response = await axios.post(`${endPoint}`, category, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("add category response", response);
    return response.data;
  } catch (error) {
    console.error("Error in adding category service:", error);
    throw error; 
  }
}
