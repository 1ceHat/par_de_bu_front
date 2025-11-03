import React from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center justify-around w-40 transition-transform hover:scale-105 hover:shadow-lg"
    >
      <img
          src={product.imgs}
          alt={product.title}
          className="w-24 h-24 object-contain mb-3 rounded-md"
        />
        <p className="text-sm text-gray-700 text-cente">{product.title}</p>
    </button>
  );
};

export default ProductCard;
