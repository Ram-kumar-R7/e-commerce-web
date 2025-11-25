import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Product from "./Components/Product";
import TodoList from "./Components/TodoList";
import NewProduct from "./Components/NewProduct";
import NotFound from "./Components/NotFound";
import UpdateProduct from "./Components/UpdateProduct";

const App = () => {
  let userName = "Ram kumar";
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/:userName" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
