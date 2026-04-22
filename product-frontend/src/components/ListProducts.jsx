import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getAllProducts,
  deleteProduct
} from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ListProducts() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const [sortBy, setSortBy] = useState("id");
  const [direction, setDirection] = useState("asc");

  const navigate = useNavigate();

  // 🔥 FETCH DATA WITH DEBOUNCE
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchProducts();
    }, 400);

    return () => clearTimeout(delay);

    // eslint-disable-next-line
  }, [currentPage, search, sortBy, direction]);

  const fetchProducts = () => {
    setLoading(true);
    setNoData(false);

    getAllProducts(currentPage, search, sortBy, direction)
      .then(res => {
        setProducts(res.data.content);
        setTotalPages(res.data.totalPages);

        if (res.data.content.length === 0) {
          setNoData(true);
        }
      })
      .catch(() => {
        toast.error("Failed to fetch products");
        setNoData(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteProduct(id)
        .then(() => {
          toast.success("Product deleted successfully");
          fetchProducts();
        })
        .catch(() => {
          toast.error("Delete failed");
        });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-container">
      <div className="screen-ui">

        <h3 className="title">Product Management System</h3>

        {/* 🔍 TOP BAR */}
        <div className="top-bar">

          <input
            className="search"
            placeholder="Search Product"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(0);
            }}
          />

          <div style={{ display: "flex", gap: "10px" }}>

            <button
              className="add-btn"
              onClick={() => navigate("/add")}
              disabled={loading}
            >
              Add Product
            </button>

            <button
              style={{
                background: "gray",
                color: "white",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer"
              }}
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

        {/* 🔽 SORTING */}
        <div style={{ marginBottom: "10px" }}>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(0);
            }}
          >
            <option value="id">Default</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

          <select
            value={direction}
            onChange={(e) => {
              setDirection(e.target.value);
              setCurrentPage(0);
            }}
            style={{ marginLeft: "10px" }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* 📊 TABLE */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quality</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {/* 🔄 LOADING */}
            {loading && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  🔍 Searching...
                </td>
              </tr>
            )}

            {/* ❌ NO DATA */}
            {!loading && noData && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "red" }}>
                  ❌ No Product Found
                </td>
              </tr>
            )}

            {/* ✅ DATA */}
            {!loading && products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.quality}</td>
                <td>${p.price.toLocaleString()}</td>

                <td>
                  <button
                    className="edit"
                    onClick={() => navigate(`/edit/${p.id}`)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

        {/* 📄 PAGINATION */}
        <div className="pagination">

          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(0)}
          >
            First
          </button>

          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          <span>
            {totalPages === 0 ? 0 : currentPage + 1} of {totalPages}
          </span>

          <button
            disabled={currentPage >= totalPages - 1}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

          <button
            disabled={currentPage >= totalPages - 1}
            onClick={() => setCurrentPage(totalPages - 1)}
          >
            Last
          </button>

        </div>

      </div>
    </div>
  );
}

export default ListProducts;