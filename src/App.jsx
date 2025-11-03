import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import InfoBar from "./components/InfoBar";
import ProductSection from "./components/ProductSection";
import ProductDetail from "./components/ProductDetail";
import ConstructorPage from "./pages/ConstructorPage";

// images
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

function App() {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/get_data/')
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data))
  // }, []);
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
  return (
    <Router>
      <div className="bg-white min-h-screen font-sans place-items-center">
        <NavBar />
        <Routes>
          {/* Главная страница */}
          <Route
            path="/par_de_bu_front"
            element={
              <div className="min-w-full px-20">
              <InfoBar />
              <ProductSection title="Уход за лицом" products={products} />
              <ProductSection title="Уход за телом" products={products} />
              <ProductDetail />
              </div>
            }
          />
          {/* Страница конструктора */}
          <Route path="par_de_bu_front/constructor" element={<ConstructorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;