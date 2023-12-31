import React, { useState } from "react";
import { BRANDIMAGEURL, IMAGEURL } from "../config/config";

const Category = ({ products, setCurrentType }) => {
  const [currentCategory, setCurrentCategory] = useState("전체");

  const changeCategory = (e) => {
    const CATEGORY = e.target.nextElementSibling.textContent;
    setCurrentCategory(CATEGORY);

    if (CATEGORY === "상품") setCurrentType("Product");
    if (CATEGORY === "카테고리") setCurrentType("Category");
    if (CATEGORY === "기획전") setCurrentType("Exhibition");
    if (CATEGORY === "브랜드") setCurrentType("Brand");
    if (CATEGORY === "전체") setCurrentType("All");
  };
  const cateArr = ["All", "Product", "Category", "Exhibition", "Brand"];

  return (
    <div className="flex flex-row justify-center items-center  mb-10">
      {cateArr.map((item, index) => {
        let name = "전체";
        const IMAGE =
          products[index].type === "Brand"
            ? products[index][BRANDIMAGEURL]
            : products[index][IMAGEURL];

        if (item === "Product") name = "상품";
        if (item === "Category") name = "카테고리";
        if (item === "Exhibition") name = "기획전";
        if (item === "Brand") name = "브랜드";

        const categoryStyle =
          currentCategory === name
            ? "inline border-b-4 border-black"
            : "inline";

        return (
          <button
            key={index}
            onClick={(e) => changeCategory(e)}
            className="mx-4"
          >
            <img
              className="w-[82px] h-[82px] rounded-full"
              src={IMAGE}
              alt={name}
            />
            <p className={categoryStyle}>{name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Category;
