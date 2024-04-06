import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { Home, Shop, ShopCart, Checkout, Cabinet, SinglePage } from "./page";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MobHeader from "./components/MobHeader";
import Authorization from "./components/Authorization";

export const UseAllContext = createContext();

const App = () => {
  const [hidden, setHidden] = useState(true);
  const [flowers, setFlowers] = useState([]);
  const [count, setCount] = useState(1);
  const [mapCart, setmapCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1666/flowers");
        setFlowers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("buyFlower")) || [];
    setmapCart(storedCartItems);
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = (flower) => {
    const buyFlower = {
      id: flower.id,
      name: flower.common_name,
      image: flower.online_img,
      counts: count,
      prices: flower.price,
      sku: flower.genus_id,
    };

    let cartItems = JSON.parse(localStorage.getItem("buyFlower")) || [];
    const existingIndex = cartItems.findIndex(
      (item) => item.id === buyFlower.id,
    );

    if (existingIndex !== -1) {
      cartItems[existingIndex].counts = count;
    } else {
      cartItems.push(buyFlower);
    }
    localStorage.setItem("buyFlower", JSON.stringify(cartItems));
    alert("Added to cart successfully!");
  };

  return (
    <UseAllContext.Provider
      value={{
        hidden,
        setHidden,
        flowers,
        decrement,
        increment,
        count,
        addToCart,
        mapCart,
        setmapCart,
      }}
    >
      <div className="relative w-full bg-[#FFFFFF]">
        <Authorization />
        <div className="h-[75px]  w-full sm:hidden"></div>
        <Header />

        <div className="container">
          <MobHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<SinglePage />} />
            <Route path="/shop/checkout" element={<Checkout />} />
            <Route path="/shop/shopcart" element={<ShopCart />} />
            <Route path="/cabinat" element={<Cabinet />} />
          </Routes>
          <Footer />
          <div className="hidden h-[120px] sm:block"></div>
        </div>
      </div>
    </UseAllContext.Provider>
  );
};

export default App;

// Json $ npx json-server src/db/data.json --port 1666
