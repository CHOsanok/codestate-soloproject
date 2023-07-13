import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=10")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="flex flex-col w-[1280px] h-screen">
      <header className="h-[80px]">
        <Head />
      </header>
      <main className="flex flex-col justify-center items-center grow">
        <section className="m-10 ">
          <p className="font-bold text-2xl mb-5">상품 리스트</p>
          <Banner products={products} />
          <p className="font-bold text-2xl mb-5">북마크 리스트</p>
          <Banner products={products} />
        </section>
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
