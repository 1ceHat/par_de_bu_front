import React, { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import ConstructorSlot from "../components/ConstructorSlot";
import ProductSelectorModal from "../components/ProductSelectorModal";
import ProductDetail from "../components/ProductDetail";
import ProductCard from "../components/ProductCard";

// images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

const ConstructorPage = () => {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const prd = useLocation().state?.product;

  useEffect(() => {
    if (prd) {
      setSlots((prev) => {
        const updated = [...prev];
        updated[prd.step - 1] = prd; // 👈 ставим товар по step
        return updated;
      });
    }
  }, [prd]);

  // Пример товаров
  const products = [
    { "id": 1, 
      "title": "Currant and Lemongrass", 
      "brand": "LEVRANA", 
      "imgs": [image1],
      "category": "Гель для умывания с кислотами",
      "description": "Этот гель для умывания с кислотами смородины и лимонграсса нежно отшелушивает, удаляя мертвые клетки кожи и загрязнения. Он осветляет тон кожи, сужает поры и дарит освежающее ощущение, оставляя кожу гладкой и обновленной.",
      "consist": "Вода, кокос-глюкозид, глицерин, ксантановая гум, бензиловый спирт, бетаин, молочная кислота, экстракт травы цимбопогона флексуозус, экстракт листьев розмарина официналис, салициловая кислота, экстракт плодов черной смородины, калий сорбат, натрий бензоат, экстракт плодов вакциниум витис-идея.",
      "using": "Используйте гель ежедневно для умывания. Нанесите небольшое количество на влажную кожу, мягко помассируйте и тщательно смойте. Избегайте контакта с глазами. Подходит для жирной и комбинированной кожи. Рекомендуется тест на чувствительность.",
      "seller": "",
      "step": 1
    },
    { "id": 2, 
      "title": "Bioderma Sensibio", 
      "brand": "", 
      "imgs": [image2],
      "category": "Очищающий гель для лица.",
      "description": "Sensibio бережно очищает кожу, удаляя загрязнения и макияж без раздражения. Успокаивающая формула поддерживает естественный баланс кожи, что делает его идеальным для чувствительных типов кожи.",
      "consist": "Вода, натрий кокоамфоацетат, пропандиол, натрий лауроиль саркосинат, лимонная кислота, коко- глюкозид, глицерил олеат, натрий цитрат, peg-90 глицерил исостеарат, маннитол, ксилитол, лаурет-2, рахманоза, фруктоолигосахариды, токоферол, гидрогенизированные пальмовые глицериды цитрат, лецитин, аскорбил палмитат.",
      "using": "Используйте Sensibio Gel moussant ежедневно для мягкого очищения. Нанесите на влажную кожу, помассируйте и тщательно смойте. Подходит для чувствительной кожи. Избегайте контакта с глазами. ",
      "seller": "",
      "step": 1
    },
    { "id": 3, 
      "title": "lab biome hydration", 
      "brand": "NATURA SIBERICA", 
      "imgs": [image3],
      "category": "Гель для умывания",
      "description": "Biome Hydration Cleanser глубоко очищает, сохраняя естественный баланс влаги кожи. Обогащенный пробиотиками, он способствует здоровому микробиому, оставляя кожу свежей, увлажненной и сияющей.",
      "consist": "Вода, вода линнеи бореалис, фосфолипиды, ферментный фильтрат flavocetraria nivalis, экстракt laminaria angustatа, экстракт цветков trifolium pratense, экстракт comarum palustre, экстракт корня rhaponticum carthamoides, экстракт цветков/ листьев/стеблей nepetа sibirica.",
      "using": "Используйте Biome Hydration Cleanser ежедневно для мягкого очищения. Нанесите на влажную кожу, помассируйте и смойте. Идеально подходит для всех типов кожи, увлажняет и питает с помощью натуральных экстрактов.",
      "seller": "",
      "step": 1
    },
    { "id": 4, 
      "title": "Hyaluronic", 
      "brand": "LIBREDERM", 
      "imgs": [image4],
      "category": "Пенка для умывания",
      "description": "Гиалуроновая пенка для умывания глубоко увлажняет и питает кожу, удаляя загрязнения, не лишая её влаги. Улучшает упругость кожи, оставляя её мягкой, гладкой и свежей.",
      "consist": "Вода, кокамидопропил бетаин, натрий лауроил саркозинат, дексил гликозид, гидроксиэтил мочевина, гуар гидроксипропилтримониум хлорид, натрий кокосил глутамат, peg-40 водородированный касторовое масло, мальтолигоцил глюкозид/ водородированный гидролизованный крахмал, натрий рса, натрий гиалуронат, парфюм, бутилфенил метилпропиональ, бензилсалицилат, гидроксиизогексил-3- циклогексенкарбальдегид, тетрасодий эдта, лимонная кислота, метилхлороизотиазолинон, метилизотиазолинон, магний нитрат, магний хлорид.",
      "using": "Используйте гиалуроновую пенку для умывания ежедневно для мягкого очищения. Нанесите небольшое количество на влажную кожу, помассируйте и тщательно смойте. Подходит для всех типов кожи, увлажняет во время очищения. Избегайте контакта с глазами.",
      "seller": "",
      "step": 2
    },
  ];

  const maxCols = Math.max(...products.map(p => p.step));
  const [slots, setSlots] = useState(Array(maxCols).fill(null));

  const handleSlotClick = (index) => {
    setSelectedSlot(index);
    setShowSelector(true);
  };

  const handleProductSelect = (product) => {
    const updatedSlots = [...slots];
    updatedSlots[selectedSlot - 1] = product;
    setSlots(updatedSlots);
    setShowSelector(false);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 w-2/3 max-sm:w-full max-sm:px-5">
      <div className="bg-[#D4F3F0] rounded-xl py-4 px-2 text-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          В НАШЕМ КОНСТРУКТОРЕ МОЖНО
          <br />
          ПОСМОТРЕТЬ ПОДХОДЯЩИЕ ДРУГ К ДРУГУ ТОВАРЫ
        </h1>
      </div>

      <div className={`grid grid-cols-2 sm:grid-cols-${maxCols} gap-6 justify-items-center`}>
        {slots.map((product, index) => (
          <ConstructorSlot
            key={index}
            index={index + 1}
            product={product}
            onClick={() => handleSlotClick(index + 1)}
          />
        ))}
      </div>


      {/* модалка выбора */}
      {showSelector && (
        <ProductSelectorModal
          products={products.filter(p => p.step === selectedSlot)}
          onClose={() => setShowSelector(false)}
          onSelect={(products) => {
            setSelectedProduct(products);
          }}
        />
      )}

      {/* модалка деталей */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onChoose={() =>  handleProductSelect(selectedProduct)}
        />
      )}
    </div>
  );
};

export default ConstructorPage;
