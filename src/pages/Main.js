import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div className="flex flex-col w-[1280px] h-screen">
      <header className="h-[80px]">
        <Nav />
      </header>
      <main className="flex flex-col justify-center items-center grow">
        <section className="  m-10 ">
          <p className="font-bold text-2xl mb-5 ">상품 리스트</p>
          <Banner />
          <p className="font-bold text-2xl mb-5 text-left">북마크 리스트</p>
          <Banner />
        </section>
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
