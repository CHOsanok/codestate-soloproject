import React from "react";
import { useSelector } from 'react-redux';
import Category from "../components/Category";

const BookMark = () => {
  const products = useSelector(state => state.dogData);

  return (
    <div>
      <main className="flex flex-col items-center grow">
        <section  className="h-[640px] m-10 ">
          <Category products={products}/>
        </section>
      </main>
    </div>
  );
};

export default BookMark;
