import React, { useState } from "react";

const Kategorie = () => {
  const [selectKategorie, setSelectKategorie] = useState("전체");

  const changeKategorie = (e) => {
    const kategorie = e.target.nextElementSibling.textContent;
    const currentKategorie =
      kategorie === "전체"
        ? "전체"
        : kategorie === "상품"
        ? "상품"
        : kategorie === "카테고리"
        ? "카테고리"
        : kategorie === "기획전"
        ? "기획전"
        : "브랜드";
    setSelectKategorie(currentKategorie);
  };

  return (
    <div>
      <button onClick={(e) => changeKategorie(e)} className="bg-balck mx-4  ">
        <img
          className="w-[82px] h-[82px] rounded-full"
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4GR5wVy5wUN-H7eupc4vPTbprRrmrkl0NQ&usqp=CAU
        "
          alt="all"
        />
        {selectKategorie === "전체" ? (
          <p className="inline border-b-4 border-black ">전체</p>
        ) : (
          <p className="inline border-black ">전체</p>
        )}
      </button>

      <button onClick={(e) => changeKategorie(e)} className="bg-balck mx-4  ">
        <img
          className="w-[82px] h-[82px] rounded-full"
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4GR5wVy5wUN-H7eupc4vPTbprRrmrkl0NQ&usqp=CAU
        "
          alt="all"
        />
        {selectKategorie === "상품" ? (
          <p className="inline border-b-4 border-black ">상품</p>
        ) : (
          <p className="inline border-black ">상품</p>
        )}
      </button>

      <button onClick={(e) => changeKategorie(e)} className="bg-balck mx-4  ">
        <img
          className="w-[82px] h-[82px] rounded-full"
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4GR5wVy5wUN-H7eupc4vPTbprRrmrkl0NQ&usqp=CAU
        "
          alt="all"
        />
        {selectKategorie === "카테고리" ? (
          <p className="inline border-b-4 border-black ">카테고리</p>
        ) : (
          <p className="inline border-black ">카테고리</p>
        )}
      </button>

      <button onClick={(e) => changeKategorie(e)} className="bg-balck mx-4  ">
        <img
          className="w-[82px] h-[82px] rounded-full"
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4GR5wVy5wUN-H7eupc4vPTbprRrmrkl0NQ&usqp=CAU
        "
          alt="all"
        />
        {selectKategorie === "기획전" ? (
          <p className="inline border-b-4 border-black ">기획전</p>
        ) : (
          <p className="inline border-black ">기획전</p>
        )}
      </button>

      <button onClick={(e) => changeKategorie(e)} className="bg-balck mx-4  ">
        <img
          className="w-[82px] h-[82px] rounded-full"
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4GR5wVy5wUN-H7eupc4vPTbprRrmrkl0NQ&usqp=CAU
        "
          alt="all"
        />
        {selectKategorie === "브랜드" ? (
          <p className="inline border-b-4 border-black ">브랜드</p>
        ) : (
          <p className="inline border-black ">브랜드</p>
        )}
      </button>
    </div>
  );
};

export default Kategorie;
