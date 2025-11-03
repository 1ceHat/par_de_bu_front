import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

const ProductSection = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="my-10">
      <h3 className="text-center text-xl font-semibold bg-[#D4F3F0] py-2 mx-6 rounded-xl">
        {title}
      </h3>
      <div className="flex justify-center flex-wrap gap-6 mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* модальное окно */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductSection;
