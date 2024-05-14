import React from "react";
import logo from "../assets/logonew.png";

function Header() {
  return (
    <div className="w-full">
      <img src={logo} alt="" className="w-12 h-10 mt-5 ml-5  md:w-24 md:h-20" />
      <hr className="bg-gradient-to-r from-white  to-red-400 p-[1.5px] md:p-1 border-none mb-1" />
      <hr className="bg-gradient-to-r from-white  to-red-400 p-2 border-none md:p-3" />
    </div>
  );
}

export default Header;
