import React, { useState } from "react";
import { RadioGroup, FormControlLabel, Button } from "@mui/material";
import Img from "../assets/images/photos/main/card/image  2.jpg";
import Cards from "../assets/images/photos/footer/cards.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Payment = () => {
  const [selectedValue, setSelectedValue] = useState("none");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="col-span-3">
      <h3 className="col-span-1 mb-5 text-[17px] font-bold">Your Order</h3>
      <div>
        <table class="w-full border-separate border-spacing-y-[10px]">
          <thead>
            <tr class="bg-gray-200 border-b">
              <th class="px-4 py-2 text-left text-[16px] font-medium">
                Products
              </th>
              <th class="px-5 py-2 text-left text-[16px] font-medium"></th>
              <th class="px-10 py-2 text-left text-[16px] font-medium">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class=" bg-grey">
              <td class="flex max-h-[72px] items-center gap-3">
                <img
                  src={Img}
                  alt="table img info"
                  className="h-[66px] w-[66px] object-fill md:h-[50px] md:w-[50px]"
                />
                <div>
                  <h4 class="text-[15px] font-medium">Barberton Daisy</h4>
                  <p class="text-oridinary">
                    <span className="text-[#A5A5A5.]">SKU:</span> 1995751877966
                  </p>
                </div>
              </td>
              <td class="px-5 text-center">
                <p className=" text-oridinary">{"(x2)"}</p>
              </td>
              <td class="px-10 text-right">
                <p class="text-[18px] font-bold text-check">$238.00</p>
              </td>
            </tr>
            <tr class=" bg-grey">
              <td class="flex max-h-[72px] items-center gap-3">
                <img
                  src={Img}
                  alt="table img info"
                  className="h-[66px] w-[66px] object-fill md:h-[50px] md:w-[50px]"
                />
                <div>
                  <h4 class="text-[15px] font-medium">Blushing Bromeliad</h4>
                  <p class="text-oridinary">
                    <span className="text-[#A5A5A5]">SKU:</span> 19957518757065
                  </p>
                </div>
              </td>
              <td class="px-5 text-center">
                <p className=" text-oridinary">{"(x6)"}</p>
              </td>
              <td class="px-10 text-right">
                <p class="text-[18px] font-bold text-check">$834.00</p>
              </td>
            </tr>
            <tr class=" bg-grey">
              <td class="flex max-h-[72px] items-center gap-3">
                <img
                  src={Img}
                  alt="table img info"
                  className="h-[66px] w-[66px] object-fill md:h-[50px] md:w-[50px]"
                />
                <div>
                  <h4 class="text-[15px] font-medium">Aluminum Plant</h4>
                  <p class="text-oridinary">
                    <span className="text-[#A5A5A5]">SKU:</span> 1995751877786
                  </p>
                </div>
              </td>
              <td class="px-5 text-center">
                <p className=" text-oridinary">{"(x9)"}</p>
              </td>
              <td class="px-10 text-right">
                <p class="text-[18px] font-bold text-check">$1,611.00</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-12 mt-4">
          <p className="mb-5 text-end">
            Have a coupon code? <span className="text-check">Click here</span>
          </p>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[15px]">Subtotal</p>
            <p className="text-[18px] font-medium">$2,683.00</p>
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
            <p className="text-[18px] font-medium text-check">$2,699.00</p>
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
