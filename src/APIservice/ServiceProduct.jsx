import axios from "axios";

const baseURL = "http://localhost:5000/api/products";

export const getAllProducts = async (
  searchTerm = "",
  pageNumber = 1,
  pageSize = 3,
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();

  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (searchTerm) {
    params.append("searchTerm", searchTerm);
  }
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  const url = `${baseURL}?${params.toString()}`;
  const response = await axios.get(url);
  console.log(url);

  return response;
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};

export const deleteProductById = () => {};