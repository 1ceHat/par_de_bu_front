import React from "react";
import { ThumbsUp } from "lucide-react";

const InfoBar = () => {
  return (
    <div className="bg-[#D4F3F0] mt-10 mx-6 rounded-3xl shadow-sm relative">
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black rotate-[-8deg] place-self-start text-center">
        НЕ ЗНАЕТЕ, КАК ПОМОЧЬ <br /> СВОЕМУ ТЕЛУ?
      </h2>
      <p className="text-xl lg:text-2xl xl:text-3xl mt-6 pb-8 pr-5 rotate-[8deg] text-gray-800 place-self-end">
        Мы спешим на помощь! <ThumbsUp className="inline w-6 h-6 ml-1" />
      </p>
      <svg
        className="absolute inset-0 opacity-40 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 100 C 217 244 145 41 339 46 C 763 54 769 253 1326 129 C 1665 60 1669 -15 1810 66 Z"
          stroke="black"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default InfoBar;
