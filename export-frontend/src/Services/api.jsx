import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/products/"; // Adjust to your backend URL

// Fetch all products
export const getProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}${id}/`);
  return response.data;
};

// Create a new product
/*export const createProduct = async (productData) => {
  const response = await axios.post(API_BASE_URL, productData);
  return response.data;
};

// Update a product by ID
export const updateProduct = async (id, productData) => {
  const response = await axios.put(`${API_BASE_URL}${id}/`, productData);
  return response.data;
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}${id}/`);
  return response.data;
};
*/

