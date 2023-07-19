import React from "react";
import { FOOTER_CONTENT, FOOTER_COPYRIGHT } from "../config/config";

const Footer = () => {
  return (
    <div className="bg-white w-[1280px] h-[58px] text-center drop-shadow-2xl">
      <p className="text-gray-400">{FOOTER_CONTENT}</p>
      <p className="text-gray-400">{FOOTER_COPYRIGHT}</p>
    </div>
  );
};

export default Footer;
