import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

export const createOrder = async(order) => {
    try {
    const response = await axios.post(`${baseUrl}/api/v1/orders`, order, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    console.log("createOrder service", response.data);
    return response.data;
    } catch (error) {
    console.error("Error fetching products:", error);
    return [];
    }
}