import { NavLink } from "react-router-dom";

import Labels from "../components/Labels";
import Payment from "../components/Payment";
import Order from "../components/Order";

const Checkout = () => {
  return (
    <section className="mb-[210px]">
      <div className="my-9 flex items-center sm:hidden">
        <NavLink to="/">
          <p className="text-[15px] font-bold">Home</p>
        </NavLink>
        &nbsp;/&nbsp;
        <NavLink to="/shop">
          <p className="text-[15px]">Shop</p>
        </NavLink>
        &nbsp;/&nbsp;
        <p className="text-[15px]"> Checkout</p>
      </div>
      <form className="grid grid-cols-8 gap-[72px]" id="orderForm">
        <Labels />
        <Payment />
      </form>
      <Order />
    </section>
  );
};

export default Checkout;
