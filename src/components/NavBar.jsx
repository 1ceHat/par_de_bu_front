import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-[#D4F3F0] flex justify-between items-center mb-5 px-6 py-3 rounded-b-3xl shadow-md min-w-full">
      <div className="font-bold text-xl text-gray-700 w-40 h-dvw">
        <a href="/">
          <img alt="LOGO" src="./images/logo2.png"></img>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
          <Search className="size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск..."
            className="ml-2 outline-none text-lg bg-transparent"
          />
        </div>
        <ShoppingBag className="w-6 h-6 text-gray-600" />
        <User className="w-6 h-6 text-gray-600" />
      </div>
    </nav>
  );
};

export default NavBar;
