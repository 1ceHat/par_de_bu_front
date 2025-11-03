import React from "react";
import { Plus } from "lucide-react";
import ProductCard from "./ProductCard";

const ConstructorSlot = ({ index, product, onClick }) => {
  return (
    <div>
      {product ? (
        <ProductCard
          product={product}
          onClick={onClick}
        />
      ) : (
        <button
          onClick={onClick}
          className="w-40 h-44 bg-[#D4F3F0] rounded-2xl flex flex-col justify-center items-center shadow-sm hover:shadow-md transition"
        >
          <Plus className="w-12 h-12 text-gray-400" />
        </button>
      )}
      <span className="text-gray-400 mt-2 text-lg font-semibold">{index}</span>
    </div>
  );
};

export default ConstructorSlot;
