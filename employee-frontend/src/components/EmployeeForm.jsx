import React, { useState, useEffect } from "react";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeForm() {
  const [form, setForm] = useState({
  first: "",
  last: "",
  email: ""
});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployeeById(id).then(res => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEmployee = () => {
    if (id) {
      updateEmployee(id, form).then(() => navigate("/"));
    } else {
      createEmployee(form).then(() => navigate("/"));
    }
  };

  return (
    <div className="container">
      <h2>{id ? "Update" : "Add"} Employee</h2>

      <input className="form-control mb-2"
  name="first"
  value={form.first}
  placeholder="First Name"
  onChange={handleChange} />

<input className="form-control mb-2"
  name="last"
  value={form.last}
  placeholder="Last Name"
  onChange={handleChange} />

<input className="form-control mb-2"
  name="email"
  value={form.email}
  placeholder="Email"
  onChange={handleChange} />

      <button className="btn btn-success"
        onClick={saveEmployee}>
        Save
      </button>
    </div>
  );
}

export default EmployeeForm;