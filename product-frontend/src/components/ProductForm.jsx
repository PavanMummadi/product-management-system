import React, { useState, useEffect } from "react";
import {
  createProduct,
  updateProduct,
  getProductById
} from "../services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ProductForm() {

  const [form, setForm] = useState({
    name: "",
    quality: "",
    price: ""
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProductById(id)
        .then(res => setForm(res.data))
        .catch(() => toast.error("Failed to load product"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "price") {
      value = value.replace(/[^0-9.]/g, "");
      value = value ? `$${value}` : "";
    }

    setForm({
      ...form,
      [e.target.name]: value
    });
  };

  const saveProduct = () => {

    // ✅ VALIDATION
    if (!form.name || !form.quality || !form.price) {
      toast.error("All fields are required");
      return;
    }

const cleanData = {
  ...form,
  price:
    typeof form.price === "string"
      ? parseFloat(form.price.replace("$", ""))
      : form.price
};

    setLoading(true);

    if (id) {
      updateProduct(id, cleanData)
        .then(() => {
          toast.success("Product updated successfully");
          navigate("/");
        })
        .catch(() => toast.error("Update failed"))
        .finally(() => setLoading(false));
    } else {
      createProduct(cleanData)
        .then(() => {
          toast.success("Product added successfully");
          navigate("/");
        })
        .catch(() => toast.error("Creation failed"))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="form-container">

      <h2>{id ? "Edit" : "Add"} Product</h2>

      {/* 🔥 LOADING */}
      {loading && <p className="loader">Processing...</p>}

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="quality"
        placeholder="Quality"
        value={form.quality}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <button onClick={saveProduct} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>

    </div>
  );
}

export default ProductForm;