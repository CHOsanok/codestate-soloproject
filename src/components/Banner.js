import React from "react";

const Banner = ({ products }) => {
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
                  className="h-full rounded-2xl w-[264px] "
                  src={item.brand_image_url}
                  alt={item.BRANDNAME}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex ">
                  <p>{item.brand_name}</p>
                  <p>관심 고객수</p>
                </div>
                <p className="">{item.follower}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banner;
