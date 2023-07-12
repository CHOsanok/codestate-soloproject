import React from "react";
import { AiFillGift, AiOutlineStar } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      className="
      flex
      flex-col
      absolute
      top-4
      right-0
      mr-[-20px]
       rounded-2xl
       shadow-lg
    "
    >
      <BsFillTriangleFill className="text-gray-100 text-2xl ml-40 mb-[-5px]"></BsFillTriangleFill>
      <div className=" flex flex-col justify-center items-left bg-gray-100   w-[200px] h-[150px] rounded-xl">
        <div className="flex items-center border-b">
          <p className="text-xl p-2 ">OOO님, 안녕하세요!</p>
        </div>
        <Link to="/Product" className="flex items-center p-2 border-b">
          <AiFillGift />
          <p className="text-xl ">상품리스트 페이지</p>
        </Link>
        <Link to="/BookMark" className="flex items-center p-2  ">
          <AiOutlineStar />
          <p className="text-xl ">북마크 페이지</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
