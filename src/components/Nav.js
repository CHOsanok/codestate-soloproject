import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const menuOnOf = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <div className="flex  flex-row items-center fixed  bg-white w-[1280px] h-[80px] shadow-lg">
      <Link to="/">
        <div className="flex flex-col items-end place-content-center w-[55px] h-[30px] ml-10 m-2">
          <div className="bg-blue-700 w-[25px] h-[10px] mb-1 rounded-md "></div>
          <div className="flex  ">
            <div className=" bg-indigo-950 w-[15px] h-[10px] rounded-md"></div>
            <div className=" bg-indigo-950 w-[35px] h-[10px] rounded-md ml-1"></div>
          </div>
        </div>
      </Link>
      <p className=" text-4xl font-bold m-3 ">COZ Shopping</p>
      <button className="flex  absolute right-10" onClick={menuOnOf}>
        <FaHamburger />
      </button>
      {menu && (
        <div className="flex  absolute right-10">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Nav;
