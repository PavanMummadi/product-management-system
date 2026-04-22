import axios from "axios";

const API = "http://localhost:8080/api/employees";

export const getAllEmployees = () => axios.get(API);

export const createEmployee = (emp) => axios.post(API, emp);

export const getEmployeeById = (id) =>
  axios.get(`${API}/${id}`);

export const updateEmployee = (id, emp) =>
  axios.put(`${API}/${id}`, emp);

export const deleteEmployee = (id) =>
  axios.delete(`${API}/${id}`);