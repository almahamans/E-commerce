import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = `${baseUrl}/api/products`;

export const getAllProducts = async (
  searchTerm = "",
  pageNumber = 1,
  pageSize = 3,
  sortBy = "CreatedAt",
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();
  if (searchTerm) {
    params.append("searchTerm", searchTerm);
  }
  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);
  params.append("sortBy", sortBy);
  params.append("sortOrder", sortOrder);

  const url = `${endPoint}?${params.toString()}`;
  const response = await axios(url);
  // console.log("urlllllll", url);
  return response;
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios(`${endPoint}/${id}`);
    // console.log("service", response)
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};

export const GetProductsByCategoryId = async (id) => {
  try {
    const response = await axios(`${baseUrl}/api/categories/products/${id}`);
    console.log("ProductsByCategoryId service", response.data.value.data);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export const addProductService = async (product) => {
  console.log("add product service", product)
  try {
    const response = await axios.post(`${endPoint}`, product, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log("add product response", response);
    return response.data;
  } catch (error) {
    console.error("Error in adding product service:", error);
    throw error;
  }
}

export const deleteProductService = async (id) => {
  try {
    const response = await axios.delete(`${endPoint}/${id}`);
    console.log("delete serviceee", response.data);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export const updateProductService = async (id, product) =>{
  try {
    const response = await axios.put(`${endPoint}/${id}`, product, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log("delete serviceee", response.data);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}