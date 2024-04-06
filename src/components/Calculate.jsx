import { IconButton, Button } from "@mui/material";
import { UseAllContext } from "../App";
import { useContext } from "react";

import Img from "../assets/images/photos/main/card/image  3.jpg";
import { NavLink } from "react-router-dom";

const Calculate = () => {
  const { increment, decrement, count } = useContext(UseAllContext);

  return (
    <section className="flex items-start gap-[86px]">
      <div>
        <table class="w-full border-separate border-spacing-y-[10px]">
          <thead>
            <tr class="bg-gray-200 border-b">
              <th class="px-4 py-2 text-left text-[16px] font-medium">
                Products
              </th>
              <th class="px-12 py-2 text-left text-[16px] font-medium">
                Price
              </th>
              <th class="px-8 py-2 text-center text-[16px] font-medium">
                Quantity
              </th>
              <th class="px-12 py-2 text-left text-[16px] font-medium">
                Total
              </th>
              <th class="px-4 py-2 text-left text-[16px] font-medium"></th>
            </tr>
          </thead>
          <tbody>
            <tr class=" bg-grey">
              <td class="flex max-h-[72px] items-center gap-3">
                <img
                  src={Img}
                  alt="table img info"
                  className="h-[70px] w-[70px] object-fill md:h-[50px] md:w-[50px]"
                />
                <div>
                  <h4 class="text-[16px] font-medium">Barberton Daisy</h4>
                  <p class="text-oridinary">
                    <span className="text-[#A5A5A5.]">SKU:</span> 1995751877966
                  </p>
                </div>
              </td>
              <td class="px-12 text-right">
                <p class="font-medium text-oridinary">$119.00</p>
              </td>
              <td class="px-8 text-center">
                <div className="flex items-center gap-6">
                  <button
                    className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                    onClick={decrement}
                  >
                    −
                  </button>
                  <p className="text-[20px]">{count}</p>
                  <button
                    className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="px-12 text-right">
                <p class="text-[16px] font-bold text-check">$238.00</p>
              </td>
              <td class="px-4 text-right">
                <IconButton aria-label="delete">
                  <div>
                    <svg
                      width="24.000000"
                      height="24.000000"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <rect
                        id="Iconly/Curved/Delete"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <path
                        id="Stroke 1"
                        d="M18.88 9.55C18.88 17.57 20.04 21.19 12.27 21.19C4.51 21.19 5.69 17.57 5.69 9.55"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M20.36 6.47L4.21 6.47"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 5"
                        d="M15.71 6.47C15.71 6.47 16.24 2.71 12.28 2.71C8.33 2.71 8.86 6.47 8.86 6.47"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </IconButton>
              </td>
            </tr>
            <tr class=" bg-grey">
              <td class="flex max-h-[72px] items-center gap-3">
                <img
                  src={Img}
                  alt="table img info"
                  className="h-[70px] w-[70px] object-fill md:h-[50px] md:w-[50px]"
                />
                <div>
                  <h4 class="text-[16px] font-medium">Blushing Bromeliad</h4>
                  <p class="text-oridinary">
                    <span className="text-[#A5A5A5.]">SKU:</span>
                    19957518757065
                  </p>
                </div>
              </td>
              <td class="px-12 text-right">
                <p class="font-medium text-oridinary">$139.00</p>
              </td>
              <td class="px-8 text-center">
                <div className="flex items-center gap-6">
                  <button
                    className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                    onClick={decrement}
                  >
                    −
                  </button>
                  <p className="text-[20px]">{count}</p>
                  <button
                    className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="px-12 text-right">
                <p class="text-[16px] font-bold text-check">$834.00</p>
              </td>
              <td class="px-4  text-right">
                <IconButton aria-label="delete">
                  <div>
                    <svg
                      width="24.000000"
                      height="24.000000"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <rect
                        id="Iconly/Curved/Delete"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <path
                        id="Stroke 1"
                        d="M18.88 9.55C18.88 17.57 20.04 21.19 12.27 21.19C4.51 21.19 5.69 17.57 5.69 9.55"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M20.36 6.47L4.21 6.47"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 5"
                        d="M15.71 6.47C15.71 6.47 16.24 2.71 12.28 2.71C8.33 2.71 8.86 6.47 8.86 6.47"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </IconButton>
              </td>
            </tr>
            <tr class=" bg-grey">
              <td class="flex max-h-[72px] items-center gap-3">
                <img
                  src={Img}
                  alt="table img info"
                  className="h-[70px] w-[70px] object-fill md:h-[50px] md:w-[50px]"
                />
                <div>
                  <h4 class="text-[16px] font-medium">Aluminum Plant</h4>
                  <p class="text-oridinary">
                    <span className="text-[#A5A5A5.]">SKU:</span>
                    1995751877786
                  </p>
                </div>
              </td>
              <td class="px-12 text-right">
                <p class="font-medium text-oridinary">$179.00</p>
              </td>
              <td class="px-8 text-center">
                <div className="flex items-center gap-6">
                  <button
                    className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                    onClick={decrement}
                  >
                    −
                  </button>
                  <p className="text-[20px]">{count}</p>
                  <button
                    className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="px-12 text-right">
                <p class="text-[16px] font-bold text-check">$1,611.00</p>
              </td>
              <td class="px-4  text-right">
                <IconButton aria-label="delete">
                  <div>
                    <svg
                      width="24.000000"
                      height="24.000000"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <rect
                        id="Iconly/Curved/Delete"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <path
                        id="Stroke 1"
                        d="M18.88 9.55C18.88 17.57 20.04 21.19 12.27 21.19C4.51 21.19 5.69 17.57 5.69 9.55"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M20.36 6.47L4.21 6.47"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 5"
                        d="M15.71 6.47C15.71 6.47 16.24 2.71 12.28 2.71C8.33 2.71 8.86 6.47 8.86 6.47"
                        stroke="#727272"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="mb-3 border-b border-[#46A35880] pb-3 text-[18px] font-bold sm:mb-5">
          Cart Totals
        </h3>
        <label htmlFor="coupon">Coupon Apply</label>
        <div className="mb-7 mt-2 flex items-center justify-between border border-check">
          <input
            type="text"
            placeholder="Enter coupon code here..."
            id="coupon"
            className="flex-grow border-none px-3 py-2 outline-none"
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              backgroundColor: "#46A358",
              paddingY: "12px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#46A358",
              },
            }}
          >
            <span className="text-[15px] font-bold text-[#fff] md:text-[14px]">
              Apply
            </span>
          </Button>
        </div>
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
        <Button
          variant="contained"
          sx={{
            borderRadius: "3",
            backgroundColor: "#46A358",
            width: "100%",
            textTransform: "none",
            paddingY: "12px",
            marginBottom: "8px",
            "&:hover": {
              backgroundColor: "#46A358",
            },
          }}
        >
          <span className="text-[15px] font-bold text-[#fff] md:text-[14px]">
            Proceed To Checkout
          </span>
        </Button>
        <NavLink to="/checkout">
          <Button
            variant="text"
            color="success"
            sx={{
              textTransform: "none",
              color: "#46A358",
              width: "100%",
              paddingY: "12px",
            }}
          >
            <span className="text-[15px] text-check md:text-[14px]">
              Continue Shopping
            </span>
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default Calculate;
