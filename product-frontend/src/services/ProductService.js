import axios from "axios";

const API = "http://localhost:8080/api/products";

// ✅ GET ALL (with pagination, search, sorting)
export const getAllProducts = (page, keyword, sortBy, direction) => {
  return axios.get(
    `${API}?page=${page}&keyword=${keyword}&sortBy=${sortBy}&direction=${direction}`
  );
};

// ✅ GET BY ID
export const getProductById = (id) => {
  return axios.get(`${API}/${id}`);
};

// ✅ CREATE
export const createProduct = (product) => {
  return axios.post(API, product);
};

// ✅ UPDATE
export const updateProduct = (id, product) => {
  return axios.put(`${API}/${id}`, product);
};

// ✅ DELETE
export const deleteProduct = (id) => {
  return axios.delete(`${API}/${id}`);
};