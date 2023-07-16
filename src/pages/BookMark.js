import React from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category";

const BookMark = () => {
  const products = useSelector((state) => state.dogData);

  return (
    <div>
      <main className="flex flex-col items-cente">
        <section className="m-10 h-[640px]">
          <Category products={products} />
        </section>
      </main>
    </div>
  );
};

export default BookMark;
