import React from "react";
import Banner from "../components/Banner";
import { useSelector } from 'react-redux';

const Main = () => {
  const products = useSelector(state => state.dogData);

  return (
    <div>
      <main className="flex flex-col justify-center items-center grow">
        <section className="h-[640px] m-10 ">
          <p className="font-bold text-2xl mb-5">상품 리스트</p>
          <Banner products={products} />
          <p className="font-bold text-2xl mb-5">북마크 리스트</p>
        </section>
      </main>
    </div>
  );
};

export default Main;
