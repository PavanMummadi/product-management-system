import "../App.css";
import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployees() {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    getAllEmployees().then(res => setEmployees(res.data));
  };

  const handleDelete = (id) => {
    deleteEmployee(id).then(fetchEmployees);
  };

return (
  <div className="app">

    {/* TOP LEFT */}
    <div className="top-left">
      <div className="logo-box">
  <img src="/logo.png" alt="EMS Logo" />
</div>
       <div className="contact-box">
    <p>Contact for info:</p>
    <p>+1 (314) 335 8888</p>
  </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="main-container">

      <h2 className="title">EMPLOYEE MANAGEMENT SYSTEM</h2>

      <div className="table-box">

        <button
          className="add-btn"
          onClick={() => navigate("/add")}
        >
          Add Employee
        </button>

        <table>
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.first}</td>
                <td>{emp.last}</td>
                <td>{emp.email}</td>
                <td>
                  <button
                    className="edit"
                    onClick={() => navigate(`/edit/${emp.id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  </div>
);
}

export default ListEmployees;