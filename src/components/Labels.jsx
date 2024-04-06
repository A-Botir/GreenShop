import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const Labels = () => {
  const location = useLocation();

  return (
    <div className="col-span-5">
      <div
        className={`flex items-center justify-between ${location.pathname === "/checkout" ? "mb-5 " : "mb-2"}`}
      >
        <h3 className="text-[17px] font-bold">Billing Address</h3>
        {location.pathname === "/cabinat" ? (
          <Button
            variant="text"
            color="success"
            sx={{
              textTransform: "none",
              color: "#46A358",
            }}
          >
            <span className="text-[15px] text-check md:text-[14px]">Add</span>
          </Button>
        ) : null}
      </div>
      {location.pathname === "/cabinat" ? (
        <p className="mb-8 text-oridinary">
          The following addresses will be used on the checkout page by default.
        </p>
      ) : null}
      <div>
        <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-8">
          <label className="text-[15px]">
            First Name <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label className="text-[15px]">
            Last Name <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label className="text-[15px]">
            Country / Region{" "}
            <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              placeholder="Enter a country / region"
              required
            />
          </label>
          <label className="text-[15px]">
            Town / City <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label className="text-[15px]">
            State <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              placeholder="House number and street name"
              required
            />
          </label>
          <label>
            <input
              type="text"
              className="mt-[26px] w-full border border-[#EAEAEA] p-3 outline-none"
              placeholder="Appartment, suite, unit, etc. (optional)"
              required
            />
          </label>
          <label className="text-[15px]">
            State <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              placeholder="Select a state"
              required
            />
          </label>
          <label className="text-[15px]">
            Zip <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label className="text-[15px]">
            Email address <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="email"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label cla>
            Phone Number <span className="text-[22px] text-[#F03800]">*</span>
            <div className="mt-2 flex items-center gap-3">
              <select
                name="number"
                required
                className="block border border-[#EAEAEA] p-[9px] outline-none"
              >
                <option value="1">+966</option>
                <option value="2">+998</option>
                <option value="3">+046</option>
                <option value="4">+210</option>
              </select>
              <input
                type="text"
                className="w-full border border-[#EAEAEA] p-3 outline-none"
                required
              />
            </div>
          </label>
        </div>
        {location.pathname === "/checkout" ? (
          <>
            <div className="mb-12 rounded-[50%]">
              <label className="flex cursor-pointer items-center gap-1 text-[15px] font-medium">
                <input type="checkbox" />
                Ship to a different address?
              </label>
            </div>
            <div className="grid w-full grid-cols-2">
              <label className="col-span-1 gap-x-5 text-[15px]">
                Order notes (optional){" "}
                <span className="text-[22px] text-[#F03800]">*</span>
                <p>
                  <textarea
                    rows="15"
                    cols="45"
                    name="text"
                    className="mt-2 block h-[150px] w-[97%] border border-[#EAEAEA] p-2 outline-none"
                  ></textarea>
                </p>
              </label>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Labels;
