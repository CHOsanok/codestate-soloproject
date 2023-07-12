import React from "react";
import Footer from "../components/Footer";
import Kategorie from "../components/Kategorie";
import Nav from "../components/Nav";

const ProductList = () => {
  return (
    <div className="flex flex-col w-[1280px] h-screen">
      <header className="h-[80px]">
        <Nav />
      </header>
      <main className="flex flex-col justify-center items-center grow">
        <section className="  m-10 ">
          <Kategorie />
        </section>
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default ProductList;
