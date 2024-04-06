import React, { useContext, useState } from "react";
import { RadioGroup, FormControlLabel, Button } from "@mui/material";
import { UseAllContext } from "../App";

import Cards from "../assets/images/photos/footer/cards.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Payment = () => {
  const { mapCart, setmapCart } = useContext(UseAllContext);
  const [selectedValue, setSelectedValue] = useState("none");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const totalAmount =
    mapCart.reduce((total, item) => total + item.prices * item.counts, 0) - 16;

  return (
    <div className="col-span-3">
      <h3 className="col-span-1 mb-5 text-[17px] font-bold">Your Order</h3>
      <div>
        <table className="w-full border-separate border-spacing-y-[10px]">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="px-4 py-2 text-left text-[16px] font-medium">
                Products
              </th>
              <th className="px-5 py-2 text-left text-[16px] font-medium"></th>
              <th className="px-10 py-2 text-left text-[16px] font-medium">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {mapCart.length === 0 ? (
              <tr className=" bg-grey">
                <td className="flex max-h-[72px] items-center gap-3">
                  <img
                    src="https://inde.io/uploads/491010faa0885af7d22bab1ca5c517c3.jpg"
                    alt="table img info"
                    className="h-[66px] w-[66px] object-fill md:h-[50px] md:w-[50px]"
                  />
                  <div>
                    <h4 className="text-[15px] font-medium">Barberton Daisy</h4>
                    <p className="text-oridinary">
                      <span className="text-[#A5A5A5.]">SKU:</span>{" "}
                      1995751877966
                    </p>
                  </div>
                </td>
                <td className="px-5 text-center">
                  <p className=" text-oridinary">{"(x1)"}</p>
                </td>
                <td className="px-10 text-right">
                  <p className="text-[18px] font-bold text-check">0.00</p>
                </td>
              </tr>
            ) : (
              mapCart.map((item, index) => (
                <tr className=" bg-grey" key={item.id}>
                  <td className="flex max-h-[72px] items-center gap-3">
                    <img
                      src={item.image}
                      alt="table img info"
                      className="h-[66px] w-[66px] object-fill md:h-[50px] md:w-[50px]"
                    />
                    <div>
                      <h4 className="text-[15px] font-medium">{item.name}</h4>
                      <p className="text-oridinary">
                        <span className="text-[#A5A5A5.]">SKU:</span> 199575187
                        {item.sku}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 text-center">
                    <p className=" text-oridinary">{`(x${item.counts})`}</p>
                  </td>
                  <td className="px-10 text-right">
                    <p className="text-[18px] font-bold text-check">
                      ${item.prices * item.counts}.00
                    </p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="mb-12 mt-4">
          <p className="mb-5 text-end">
            Have a coupon code?{" "}
            <span className="cursor-pointer text-check">Click here</span>
          </p>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[15px]">Subtotal</p>
            <p className="text-[18px] font-medium">
              ${(totalAmount + 16).toFixed(2)}
            </p>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[15px]">Coupon Discount</p>
            <p className="text-[15px]">(-) 00.00</p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[15px]">Shiping</p>
            <p className="text-[18px] font-medium">$16.00</p>
          </div>
          <p className="mb-6 text-right text-[12px] text-check">
            View shipping charge
          </p>
          <div className="mb-7 flex items-center justify-between">
            <p className="text-[16px] font-bold">Total</p>
            <p className="text-[18px] font-medium text-check">
              $
              {mapCart.length === 0
                ? (totalAmount + 16).toFixed(2)
                : totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
        <h3 className="mb-5 text-[17px] font-bold">Payment Method</h3>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="first"
          name="radio-buttons-group"
          sx={{ marginBottom: "50px" }}
        >
          <label
            htmlFor="card"
            className={`mb-1 rounded-md border px-6 py-3 ${selectedValue == "first" ? "border-check" : "border-[#EAEAEA] "}`}
            onClick={handleChange}
          >
            <FormControlLabel
              value="first"
              control={
                <input type="radio" id="card" name="1" className="mr-2" />
              }
              label={<img src={Cards} />}
            />
          </label>
          <label
            htmlFor="card"
            className={`mb-1 rounded-md border px-6 py-3 ${selectedValue == "second" ? "border-check" : "border-[#EAEAEA] "}`}
            onClick={handleChange}
          >
            <FormControlLabel
              value="second"
              control={
                <input type="radio" id="bank" name="1" className="mr-2" />
              }
              label="Dorect bank transfer"
            />
          </label>
          <label
            htmlFor="cash"
            className={`mb-1 rounded-md border px-6 py-3 ${selectedValue == "third" ? "border-check" : "border-[#EAEAEA] "}`}
            onClick={handleChange}
          >
            <FormControlLabel
              value="third"
              control={
                <input type="radio" id="cash" name="1" className="mr-2" />
              }
              label="Cash on delivery"
            />
          </label>
        </RadioGroup>
        <Button
          variant="contained"
          sx={{
            borderRadius: "3",
            backgroundColor: "#46A358",
            width: "100%",
            textTransform: "none",
            paddingY: "12px",
            "&:hover": {
              backgroundColor: "#46A358",
            },
          }}
        >
          <span className="text-[15px] font-bold text-[#fff] md:text-[14px]">
            Place Order
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Payment;
