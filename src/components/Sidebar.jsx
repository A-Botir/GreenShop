import React from "react";
import { Slider, Button, Typography } from "@mui/material";
import SideBar from "../assets/images/photos/main/sidebar img.png";

function valuetext(value) {
  return `${value}`;
}

const Sidebar = () => {
  const [value, setValue] = React.useState([20, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-[28%] sm:w-full">
      <div className="bg-[#FBFBFB] pb-5 pl-[18px] pr-6 pt-[14px]">
        <h4 className="text-[18px] font-bold sm:hidden">Categories</h4>
        <nav className="mt- mb-9 pl-3 sm:hidden">
          <ul>
            <li className="flex items-center justify-between font-bold leading-10">
              <button className=" text-[15px] text-check">Potter Plants</button>
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Seeds </button> <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Small Plants </button>
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Big Plants </button>{" "}
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Succulents</button>{" "}
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Trerrariums </button>{" "}
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Gardening </button>{" "}
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className=" text-[15px]">Accessories</button>{" "}
              <span>(33)</span>
            </li>
          </ul>
        </nav>
        <div className="sm:fixed sm:top-0 sm:z-[100] sm:w-full sm:bg-[#FBFBFB]">
          <h4 className="text-[18px] font-bold">Price Range</h4>
          <div className="mb-12 mt-5 pl-3">
            <Slider
              getAriaLabel={() => "Price range"}
              sx={{
                width: 210,
                color: "#46A358",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#46A358",
                  borderColor: "#FFF",
                  borderWidth: "3px",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#46A358",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#46A358",
                  borderColor: "#46A358",
                },
              }}
              value={value}
              onChange={handleChange}
              getAriaValueText={valuetext}
              min={0}
              max={1500}
            />
            <Typography id="non-linear-slider" gutterBottom>
              <span className="mb-4 flex items-center gap-2 text-[15px]">
                Price:{" "}
                <span className="text-[15px] font-bold text-check">
                  ${value[0]} - ${value[1]}
                </span>
              </span>
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#46A358",
                color: "white",
                fontWeight: "700",
                fontFamily: "Cera Pro",
                paddingX: "16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#46A358",
                },
              }}
            >
              <span className="text-[16px] font-bold text-[#fff] md:text-[14px]">
                Filter
              </span>
            </Button>
          </div>
        </div>
        <h4 className="text-[18px] font-bold sm:hidden">Size</h4>
        <nav className="mt- mb-9 pl-3 sm:hidden ">
          <ul>
            <li className="flex items-center justify-between  leading-10">
              <button className="text-[15px">Small</button>
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className="text-[15px]">Medium</button>
              <span>(33)</span>
            </li>
            <li className="flex items-center justify-between  leading-10">
              <button className="text-[15px]">Large</button>
              <span>(33)</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full sm:hidden">
        <img src={SideBar} alt="side img" className="w-full object-fill" />
      </div>
    </div>
  );
};

export default Sidebar;
