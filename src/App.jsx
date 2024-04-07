import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";
import { Home, Shop, ShopCart, Checkout, Cabinet, SinglePage } from "./page";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MobHeader from "./components/MobHeader";
import Authorization from "./components/Authorization";
import Search from "./components/Search";

export const UseAllContext = createContext();

const App = () => {
  const [hidden, setHidden] = useState(true);
  const [isVisabilaty, setisVisabilaty] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [count, setCount] = useState(1);
  const [mapCart, setmapCart] = useState([]);
  const [mapItem, setmapItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchPlants, setSearchPlants] = useState([]);
  const inputField = useRef(null);
  const [selectedValue, setSelectedValue] = useState("none");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);
    handleSearch(query);
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get("http://localhost:1666/flowers", {
        params: {
          query: inputValue,
        },
      });
      if (response.status !== 200)
        throw new Error("Could not get results movie list");
      setSearchPlants(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

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

  useEffect(() => {
    const storedListItems =
      JSON.parse(localStorage.getItem("wishFlower")) || [];
    setmapItem(storedListItems);
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
  };

  const addToWishlist = (flower) => {
    const wishFlower = {
      id: flower.id,
      name: flower.scientific_name,
      image: flower.online_img,
      date: flower.year,
      category: flower.category,
    };

    let wishlistItems = JSON.parse(localStorage.getItem("wishFlower")) || [];
    const existingIndex = wishlistItems.findIndex(
      (item) => item.id === wishFlower.id,
    );

    if (existingIndex === -1) {
      wishlistItems.push(wishFlower);
      localStorage.setItem("wishFlower", JSON.stringify(wishlistItems));
    } else {
      alert("Item is already in the wishlist!");
    }
  };

  return (
    <UseAllContext.Provider
      value={{
        hidden,
        setHidden,
        isVisabilaty,
        setisVisabilaty,
        isVisible,
        setIsVisible,
        flowers,
        decrement,
        increment,
        count,
        addToCart,
        mapCart,
        setmapCart,
        addToWishlist,
        mapItem,
        setmapItem,
        searchPlants,
        inputField,
        inputValue,
        setInputValue,
        handleInputChange,
        selectedValue,
        setSelectedValue,
      }}
    >
      <div className="relative w-full">
        <Authorization />
        <div className="h-[75px]  w-full sm:hidden"></div>
        <Header />
        <Search />
        <div className="container">
          <MobHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop searchPlants={searchPlants} />}
            />
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
