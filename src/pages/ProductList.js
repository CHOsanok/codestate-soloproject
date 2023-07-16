import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import Products from "../components/Products";

const ProductList = () => {
  const products = useSelector((state) => state.dogData);
  const [currentType, setCurrentType] = useState("All");

  return (
    <div>
      <main className="flex flex-col items-center">
        <section className="h-[640px] m-10">
          <Category products={products} setCurrentType={setCurrentType} />
          <Products products={products} currentType={currentType} />
        </section>
      </main>
    </div>
  );
};

export default ProductList;
