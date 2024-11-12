import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = `${baseUrl}/api/categories`;
const token = localStorage.getItem("token");

export const getAllCategories = async () => {
    try {
      const response = await axios(`${endPoint}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
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
          "Authorization": `Bearer ${token}`,
        },
      });
      console.log("add category response", response);
      // console.log(token.role);
      return response.data;

    } catch (error) {
      console.error("Error in adding category service:", error);
      throw error;
    }
}

export const deleteCategoryService = async (id) => {
    try {
      const response = await axios.delete(`${endPoint}/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      console.log("delete serviceee", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};

export const updateCategoryService = async (id, product) => {
  try {
    const response = await axios.put(`${endPoint}/${id}`, product, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log("delete serviceee", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export const getSingleCategoryService = async (id) => {
  try {
    const response = await axios(`${endPoint}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log("service", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}