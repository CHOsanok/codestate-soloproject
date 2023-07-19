import { BsStarFill } from "react-icons/bs";
import React, { useState } from "react";
import {
  BRANDNAME,
  BRANDIMAGEURL,
  BRANDFOLLOWER,
  DISCOUNT,
  PRICE,
  TITLE,
  SUBTITLE,
  IMAGEURL,
} from "../config/config";

const Products = ({ products, currentType }) => {
  const [productList, setProductList] = useState(products);

  const bookMarkChange = (itemId) => {
    setProductList((prevProducts) =>
      prevProducts.map((item) =>
        item.id === itemId ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  };

  return (
    <div className="grid grid-cols-4 gap-10 w-[1128px]">
      {productList.length !== 0 &&
        productList.map((item) => {
          if (item.type === currentType || currentType === "All") {
            const NAME =
              item.type === "Category"
                ? `#${item[TITLE]}`
                : item[TITLE] || item[BRANDNAME];

            const IMAGE = item[BRANDIMAGEURL] || item[IMAGEURL];
            const SPECIALINFO =
              item.type === "Brand"
                ? "관심고객수"
                : item.type === "Product"
                ? `${item[DISCOUNT]}%`
                : "";

            const DISCOUNTSTYLE =
              item.type === "Product" ? "font-bold text-fuchsia-600" : "";
            let subName = "";

            if (item.type === "Category") {
              subName = "";
            } else if (item.type === "Exhibition") {
              subName = item[SUBTITLE];
            } else if (item.type === "Brand") {
              subName = Number(item[BRANDFOLLOWER]).toLocaleString();
            } else {
              subName = Number(item[PRICE]).toLocaleString() + "원";
            }

            const subNmaeStyle = item.type !== "Exhibition" ? "text-right" : "";
            const bookMarkCheck = item.bookmarked ? "text-yellow-300" : "";

            return (
              <div key={item.id}>
                <div
                  className="flex justify-center items-center relative rounded-2xl
                           bg-black text-white w-[264px] h-[210px] mr-3"
                >
                  <button
                    onClick={() => bookMarkChange(item.id)}
                    className="absolute bottom-3 right-3 text-2xl"
                  >
                    <BsStarFill className={bookMarkCheck} />
                  </button>
                  <img
                    className="h-full rounded-2xl w-[264px]"
                    src={IMAGE}
                    alt={NAME}
                  />
                </div>
                <div className="flex flex-col w-[259px] ">
                  <div className="flex justify-between">
                    <p className="font-bold">{NAME}</p>
                    <p className={DISCOUNTSTYLE}>{SPECIALINFO} </p>
                  </div>
                  <p className={subNmaeStyle}>{subName}</p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Products;
