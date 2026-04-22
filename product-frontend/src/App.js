import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProducts from "./components/ListProducts";
import ProductForm from "./components/ProductForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
<BrowserRouter>

  <ToastContainer />

  <Routes>
    <Route path="/login" element={<Login />} />

    <Route path="/" element={
      <ProtectedRoute>
        <ListProducts />
      </ProtectedRoute>
    } />

    <Route path="/add" element={
      <ProtectedRoute>
        <ProductForm />
      </ProtectedRoute>
    } />

    <Route path="/edit/:id" element={
      <ProtectedRoute>
        <ProductForm />
      </ProtectedRoute>
    } />

  </Routes>
</BrowserRouter>
  );
}

export default App;