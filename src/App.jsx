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

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <UseAllContext.Provider
      value={{
        hidden,
        setHidden,
        flowers,
        setFlowers,
        decrement,
        increment,
        count,
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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shopcart" element={<ShopCart />} />
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
