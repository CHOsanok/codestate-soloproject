import React from "react";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import { BOOKMARKLIST, PRODUCTLIST } from "../config/config";

const Main = () => {
  const products = useSelector((state) => state.dogData);

  return (
    <div>
      <main className="flex flex-col justify-center items-center">
        <section className="h-[640px] m-10">
          <p className="font-bold text-2xl mb-5">{PRODUCTLIST}</p>
          <Banner products={products} />
          <p className="font-bold text-2xl mb-5">{BOOKMARKLIST}</p>
        </section>
      </main>
    </div>
  );
};

export default Main;
