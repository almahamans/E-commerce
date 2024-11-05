import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = `${baseUrl}/api/products`;

export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 3,
  searchTerm = "",
  sortBy = "CreatedAt",
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();
  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);
  params.append("searchTerm", searchTerm);
  params.append("sortBy", sortBy);
  params.append("sortOrder", sortOrder);

  const url = `${endPoint}?${params.toString()}`;
  const response = await axios.get(url);
  console.log("urlllllll", url);

  return response;
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};

export const deleteProductById = () => {};