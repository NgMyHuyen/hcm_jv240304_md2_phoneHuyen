import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./templates/User/Login/Login";
import Home from "./templates/User/Home";
import SignUp from "./templates/User/SignUp/SignUp";
import "./App.scss";
import AdminWeb from "./templates/Admin/AdminWeb/AdminWeb";
import ManageUser from "./templates/Admin/ManageUser/ManageUser.jsx";
import ManageProduct from "./templates/Admin/ManageProduct/ManageProduct.jsx";
import ProductsDetail from "./organism/Detail/ProductsDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-detail" element={<ProductsDetail />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* adminLogin -> sua lai: admin-login */}

        <Route path="/adminweb" element={<AdminWeb />}>
          <Route path="user" element={<ManageUser />}></Route>
          <Route path="product" element={<ManageProduct />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
