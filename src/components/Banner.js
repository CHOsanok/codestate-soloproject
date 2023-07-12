import React from "react";
const array = [1, 2, 3, 4, 5];

const Banner = () => {
  return (
    <div className="flex flex-row w-[1128px] overflow-hidden mb-20">
      {array.map((item, idx) => {
        return (
          <div>
            <div
              key={idx}
              className="flex justify-center items-center rounded-xl
              bg-black text-white w-[264px] h-[210px] mr-3"
            >
              Banner
            </div>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
