import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployees from "./components/ListEmployees";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (npm
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployees />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/edit/:id" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;