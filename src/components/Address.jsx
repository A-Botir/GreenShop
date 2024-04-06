import React from "react";
import { Button } from "@mui/material";
import Labels from "../components/Labels";

const Address = () => {
  return (
    <>
      <form>
        <Labels />
      </form>
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[17px] font-medium">Shipping Address</h3>
          <div className="flex items-center gap-10">
            <label className="flex items-center gap-2">
              <input type="radio" />
              Same as billing address
            </label>
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
          </div>
        </div>
        <p className="text-oridinary">
          You have not set up this type of address yet.
        </p>
      </div>
    </>
  );
};

export default Address;
