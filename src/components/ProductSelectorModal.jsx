import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductSelectorModal = ({ products, onClose, onSelect }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex justify-center items-end z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-t-3xl p-6 w-full max-h-[80%] overflow-y-auto"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-center text-2xl font-semibold mb-6">
            Возможные товары
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
            {products.map((products) => (
              <ProductCard
                product={products}
                onClick={() => onSelect(products)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductSelectorModal;
