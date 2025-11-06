import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import logo from "../images/logo2.png";

const NavBar = () => {
  return (
    <nav className="bg-[#D4F3F0] flex justify-between items-center mb-5 px-6 py-3 rounded-b-3xl shadow-md min-w-full max-sm:w-1/4 max-sm:px-0 max-sm:justify-around">
      <div className="font-bold text-xl text-gray-700 w-40 h-dvw max-sm:w-28">
        <a href="/par_de_bu_front">
          <img alt="LOGO" src={logo}></img>
        </a>
      </div>
      <div className="flex items-center space-x-4 max-sm:space-x-2">
        <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm max-sm:w-32 max-sm:px-2">
          <Search className="size-4 text-gray-400 max-sm:size-6"/>
          <input
            type="text"
            placeholder="Поиск..."
            className="ml-2 outline-none text-lg bg-transparent max-sm:text-[12px] max-sm:w-full"
          />
        </div>
        <ShoppingBag className="size-6 text-gray-600 max-sm:size-5 max-sm:mx-0" />
        <User className="size-6 text-gray-600 max-sm:size-5 max-sm:ml-1" />
      </div>
    </nav>
  );
};

export default NavBar;
