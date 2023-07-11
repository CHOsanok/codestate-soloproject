import React from "react";
import { FaHamburger } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex  flex-row items-center fixed  bg-white w-[1280px] h-[80px] shadow-lg">
      <div className="flex flex-col items-end place-content-center w-[55px] h-[30px] ml-10 m-2">
        <div className="bg-blue-700 w-[25px] h-[10px] mb-1 rounded-md "></div>
        <div className="flex  ">
          <div className=" bg-indigo-950 w-[15px] h-[10px] rounded-md"></div>
          <div className=" bg-indigo-950 w-[35px] h-[10px] rounded-md ml-1"></div>
        </div>
      </div>
      <p className=" text-4xl font-bold m-3">COZ Shopping</p>
      <FaHamburger className="absolute right-10" />
    </div>
  );
};

export default Nav;
