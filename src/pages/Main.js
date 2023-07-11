import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div className="flex flex-col w-[1280px] h-screen">
      <header className="grow">
        <Nav />
      </header>
      <footer className=" bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
