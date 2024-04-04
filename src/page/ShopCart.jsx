import React from "react";
import PlantSlider from "../components/PlantSlider";
import Calculate from "../components/Calculate";
import { NavLink } from "react-router-dom";

const ShopCart = () => {
  return (
    <div>
      <div className="my-9 flex items-center sm:hidden">
        <NavLink to="/">
          <p className="text-[15px] font-bold">Home</p>
        </NavLink>
        &nbsp;/&nbsp;
        <NavLink to="/shop">
          <p className="text-[15px]">Shop</p>
        </NavLink>
        &nbsp;/&nbsp;
        <p className="text-[15px]"> Shopping cart</p>
      </div>
      <Calculate />
      <PlantSlider />
    </div>
  );
};

export default ShopCart;
