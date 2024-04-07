import React, { useContext } from "react";
import { UseAllContext } from "../App";
import { IconButton, Button } from "@mui/material";

import Hello from "../assets/images/photos/main/order img.svg";

const Order = () => {
  const { isVisabilaty, setisVisabilaty, mapCart, setmapCart, selectedValue } =
    useContext(UseAllContext);

  const toggleOrdering = () => {
    setisVisabilaty(!isVisabilaty);
  };

  const totalAmount =
    mapCart.reduce((total, item) => total + item.prices * item.counts, 0) - 16;

  const handlePlaceOrder = () => {
    setmapCart([]);
    setisVisabilaty(!isVisabilaty);
    alert("Order completed!");
  };

  return (
    <div
      className={`${isVisabilaty ? "hidden" : "block"} absolute left-0 top-0 z-[92] h-screen w-full overflow-hidden bg-[#0A0D1240]`}
    >
      <div className="container">
        <div className="flex h-screen items-center justify-center ">
          <div className="relative w-[45%] border-b-[10px] border-check bg-[#fff] pb-6 sm:w-full sm:border-[none] sm:pb-5 sm:pt-20">
            <div className="flex flex-col items-center justify-center gap-2 bg-[#ecfccb] py-3">
              <img
                src={Hello}
                alt="order img"
                className="w-[60px] object-fill"
              />
              <p className="text-center text-[16px] text-oridinary">
                Your order has been received
              </p>
            </div>
            <div className="border-y border-[#46A3580F]  py-4">
              <div className="mx-auto grid w-[90%] grid-cols-9 items-start">
                <div className="col-span-2 flex flex-col justify-center border-r border-[#46A35833] pr-2">
                  <p className="mb-[2px] text-oridinary">Order Number</p>
                  <p className="text-[15px] font-bold text-oridinary">
                    19586687
                  </p>
                </div>
                <div className="col-span-2 flex flex-col justify-center border-r border-[#46A35833] px-2">
                  <p className="mb-[2px] text-oridinary">Date</p>
                  <p className="text-[15px] font-bold text-oridinary">
                    09 Apr, 2024
                  </p>
                </div>
                <div className="col-span-2 flex flex-col justify-center border-r border-[#46A35833] px-2">
                  <p className="mb-[2px] text-oridinary">Total</p>
                  <p className="text-[15px] font-bold text-oridinary">
                    {totalAmount}.00
                  </p>
                </div>
                <div className="col-span-3 flex  flex-col justify-center pl-3">
                  <p className="mb-[2px] text-oridinary">Payment Method</p>
                  <p className="text-[15px] font-bold text-oridinary">
                    {selectedValue}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[90%] py-3 ">
              <h4 className="text-[15px] font-bold">Order Details</h4>
              <table className="w-full border-separate border-spacing-y-[6px]">
                <thead className="mb-4 block">
                  <tr className="flex w-full items-center justify-between border-b-[0.3px] border-[#46A35880]">
                    <th className="py-2 text-left text-[16px] font-medium">
                      Products
                    </th>
                    <div className="flex w-[40%] items-center justify-between">
                      <th className="py-2 text-left text-[16px] font-medium">
                        Qty
                      </th>
                      <th className="pr-2 text-right text-[16px] font-medium ">
                        Subtotal
                      </th>
                    </div>
                  </tr>
                </thead>
                <tbody className="tabscroll block h-[149px] max-h-[150px] w-full overflow-y-auto">
                  {mapCart.map((item, index) => (
                    <tr
                      className="mb-1 flex items-center justify-between bg-grey"
                      key={item.id}
                    >
                      <td className="flex max-h-[72px] items-center gap-3 ">
                        <img
                          src={item.image}
                          alt="table img info"
                          className="h-[66px] w-[66px] object-fill md:h-[50px] md:w-[50px]"
                        />
                        <div>
                          <h4 className="text-[15px] font-medium">
                            {item.name}
                          </h4>
                          <p className="text-oridinary">
                            <span className="text-[#A5A5A5.]">SKU:</span>{" "}
                            199575187
                            {item.sku}
                          </p>
                        </div>
                      </td>
                      <div className="flex w-[40%] items-center justify-between">
                        <th className="py-2 pl-2 text-left text-[16px] font-medium">
                          {`(x${item.counts})`}
                        </th>
                        <th className="pr-2 text-right text-[16px] font-medium ">
                          ${item.prices * item.counts}.00
                        </th>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col items-end justify-center border-b-[0.3px] border-[#46A35880] py-2">
                <div className="mb-2 flex w-[60%] items-center justify-between">
                  <p className="text-[15px]">Shiping</p>
                  <p className="text-[18px] font-medium">$16.00</p>
                </div>
                <div className="flex w-[60%] items-center justify-between">
                  <h4 className=" text-[16px] font-bold">Total</h4>
                  <p className="text-[18px] font-bold text-check">
                    ${totalAmount}.00
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center pt-2">
                <p className="mb-6 text-center leading-[22px] text-oridinary">
                  Your order is currently being processed. You will receive an
                  order confirmation email shortly with the expected delivery
                  date for your items.
                </p>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handlePlaceOrder}
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#46A358",
                    textTransform: "none",
                    paddingY: "14px",
                    marginX: "auto",
                    "&:hover": {
                      backgroundColor: "#46A358",
                    },
                  }}
                >
                  <span className="text-[16px] font-bold text-[#fff]">
                    Track your order
                  </span>
                </Button>
              </div>
            </div>
            <div className="absolute right-2 top-2 z-[96]">
              <IconButton aria-label="close" onClick={toggleOrdering}>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <clipPath id="clip9_947">
                      <rect
                        id="X"
                        width="18.000000"
                        height="18.000000"
                        fill="white"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clip9_947)">
                    <path
                      id="Vector 139 (Stroke)"
                      d="M3.16 3.17C3.39 2.94 3.76 2.94 3.99 3.17L9 8.17L14 3.17C14.23 2.94 14.6 2.94 14.83 3.17C15.05 3.39 15.05 3.76 14.83 3.99L9.82 9L14.83 14C15.05 14.23 15.05 14.6 14.83 14.82C14.6 15.05 14.23 15.05 14 14.82L9 9.82L3.99 14.82C3.76 15.05 3.39 15.05 3.16 14.82C2.94 14.6 2.94 14.23 3.16 14L8.17 9L3.16 3.99C2.94 3.76 2.94 3.39 3.16 3.17Z"
                      fill="#46A358"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
