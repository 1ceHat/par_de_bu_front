import React, { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";


const ProductDetail = ({ product, onClose, onChoose }) => {
  const [activeTab, setActiveTab] = useState("описание");
  const navigate = useNavigate();
  const location = useLocation();
  const isConstructorPage = location.pathname.includes("/constructor");
  if (!product) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Контейнер окна */}
        <motion.div
          className="bg-white rounded-3xl p-6 w-[90%] max-w-lg relative overflow-hidden max-sm:p-2"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Название и подзаголовок */}
          <div className="text-center mt-2">
            <h2 className="text-md font-semibold">{product.brand}</h2>
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-gray-400">{product.category}</p>
          </div>

          {/* Изображение */}
          <div className="flex justify-center mt-4 mb-4 relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D4F3F0] p-2 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
            {product.imgs.map((img)=>(
              <img
              src={img}
              alt={product.title}
              className="w-56 h-56 object-contain"
              />
              ))}
            
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#D4F3F0] p-2 rounded-full">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Вкладки */}
          <div className="flex justify-around bg-[#D4F3F0] rounded-xl p-2 text-gray-600 font-medium mb-4 max-sm:text-[14px] max-sm:w-full">
            {["описание", "состав", "применение", "продавец"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg transition ${
                  activeTab === tab ? "underline text-black" : "opacity-70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Контент */}
          <div className="text-gray-700 text-justify leading-relaxed mb-4">
            {activeTab === "описание" && (<p className="max-sm:p-3">{product.description ? product.description : " " }</p>)}
            {activeTab === "состав" && (<p className="max-sm:p-3">{product.consist ? product.consist : " " }</p>)}
            {activeTab === "применение" && (<p className="max-sm:p-3">{product.using ? product.using : " " } </p>)}
            {activeTab === "продавец" && (<p className="max-sm:p-3">{product.seller ? product.seller : " "}</p>)}
          </div>

          {/* Кнопка */}
          {!isConstructorPage ? (
            <button
                onClick={() => navigate("./constructor", {state: {product}})}
                className="w-full bg-[#D4F3F0] text-gray-800 font-semibold py-3 rounded-xl mt-4 hover:bg-[#bdeae5] transition max-sm:"
            >
                Перейти в конструктор
            </button>
          ):(
            <button
              onClick={() => {
                if (onChoose) onChoose(); // вставляем в слот
                onClose(); // закрываем модалку
              }}
              className="w-full bg-[#D4F3F0] text-gray-800 font-semibold py-3 rounded-xl mt-4 hover:bg-[#bdeae5] transition"
            >
              Выбрать
            </button>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetail;
