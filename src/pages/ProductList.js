import React, { useState } from "react";
import Footer from "../components/Footer";
import Kategorie from "../components/Kategorie";
import Banner from "../components/Banner";
import Head from "../components/Head";

const ProductList = () => {
  const [currentKategorie, setCurrentKategorie] = useState("전체");

  return (
    <div className="flex flex-col w-[1280px] h-screen">
      <header className="h-[80px]">
        <Head />
      </header>
      <main className="flex flex-col items-center grow">
        <section className="m-10">
          <Kategorie setCurrentKategorie={setCurrentKategorie} />
        </section>
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default ProductList;
