import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, Shop, ShopCart, Checkout } from "./page";

const App = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shopCart" element={<ShopCart />} />
        </Routes>
        <Footer />
        <div className="hidden h-[120px] sm:block"></div>
      </div>
    </div>
  );
};

export default App;
