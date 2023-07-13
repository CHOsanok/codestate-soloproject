import React from "react";
import {
  BRANDNAME,
  BRANDIMAGE,
  BRANDFOLLOWER,
  DISCOUNT,
  PRICE,
  TITLE,
  IMAGE,
  SUBTITLE,
} from "../constants";

const Banner = ({ products }) => {
  console.log(products[0]);
  return (
    <div className="flex flex-row w-[1128px] overflow-hidden mb-5">
      {products.length !== 0 &&
        products.map((item) => {
          return (
            <div>
              <div
                key={item.id}
                className="flex justify-center items-center rounded-2xl
              bg-black text-white w-[264px] h-[210px] mr-3"
              >
                <img
                  className="h-full rounded-2xl w-[264px]"
                  src={item ? item[BRANDIMAGE] || item[IMAGE] : ""}
                  alt={item ? item[BRANDNAME] || item[TITLE] : ""}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex">
                  <p>
                    {item
                      ? item.type === "Category"
                        ? "#" + item[TITLE]
                        : item[TITLE] || item[BRANDNAME]
                      : ""}
                  </p>
                  <p> </p>
                </div>
                {item.type === "Category" ? (
                  ""
                ) : (
                  <p className="">
                    {item
                      ? item.type === "Exhibition"
                        ? item[SUBTITLE]
                        : item[PRICE]
                        ? Number(item[PRICE]).toLocaleString() + "원"
                        : Number(item[BRANDFOLLOWER]).toLocaleString()
                      : ""}
                  </p>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banner;
