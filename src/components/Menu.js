import React from "react";
import { AiFillGift, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex flex-col p-2  justify-center items-left bg-white drop-shadow-md w-[200px] h-[150px] rounded-xl">
      <div className="flex items-center">
        <p className="text-xl p-1">OOO님, 안녕하세요!</p>
      </div>

      <Link to="/Product" className="flex items-center">
        <AiFillGift />
        <p className="text-xl p-1">상품리스트 페이지</p>
      </Link>
      <Link to="/BookMark" className="flex items-center">
        <AiOutlineStar />
        <p className="text-xl p-1">북마크 페이지</p>
      </Link>
    </div>
  );
};

export default Menu;
