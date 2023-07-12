import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookMark from "./pages/BookMark";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Product" element={<ProductList />} />
        <Route path="/BookMark" element={<BookMark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
