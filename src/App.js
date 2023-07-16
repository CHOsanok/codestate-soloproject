import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookMark from "./pages/BookMark";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Head from "./components/Head";
import Footer from "./components/Footer";

function App() {
  const url = "http://cozshopping.codestates-seb.link/api/v1/products?count=10";
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_DOGS", payload: data }));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="flex flex-col relative w-[1280px] h-[1200px]">
        <header className="h-[80px]">
          <Head />
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Product" element={<ProductList />} />
          <Route path="/BookMark" element={<BookMark />} />
        </Routes>
        <footer className="absolute bottom-0">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
