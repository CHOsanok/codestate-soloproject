import React from "react";
import { AiFillGift, AiOutlineStar } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BOOKMARKPAGE, PRODUCTPAGE, USERNAME } from "../config/config";

const Menu = ({ setMenu }) => {
  return (
    <div className="flex flex-col absolute top-4 right-0 mr-[-20px] rounded-2xl shadow-lg">
      <BsFillTriangleFill className="text-gray-100 text-2xl ml-40 mb-[-5px]"></BsFillTriangleFill>
      <div className="flex flex-col justify-center items-left bg-gray-100 w-[200px] h-[150px] rounded-xl">
        <div className="flex items-center border-b">
          <p className="text-xl p-2">{USERNAME}</p>
        </div>
        <Link to="/Product" className="flex items-center p-2 border-b">
          <AiFillGift />
          <p onClick={() => setMenu(false)} className="text-xl">
            {PRODUCTPAGE}
          </p>
        </Link>
        <Link to="/BookMark" className="flex items-center p-2">
          <AiOutlineStar />
          <p onClick={() => setMenu(false)} className="text-xl">
            {BOOKMARKPAGE}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
