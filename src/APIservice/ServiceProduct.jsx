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
    console.log("serviceeee", response.data.value.data)
    return response.data.value;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const deleteProductById = () => {};