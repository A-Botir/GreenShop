import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MobHeader from "./components/MobHeader";
import { Home, Shop, ShopCart, Checkout } from "./page";

const App = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="h-[75px] w-full sm:hidden"></div>
      <Header />
      <div className="container">
        <MobHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shopcart" element={<ShopCart />} />
        </Routes>
        <Footer />
        <div className="hidden h-[120px] sm:block"></div>
      </div>
    </div>
  );
};

export default App;
