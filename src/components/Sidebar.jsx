import React from "react";
import {
  Slider,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionActions,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { UseAllContext } from "../App";

import SideBar from "../assets/images/photos/main/sidebar img.png";

function valuetext(value) {
  return `${value}`;
}

const Sidebar = () => {
  const { showSideBar, setshowSideBar } = useContext(UseAllContext);

  const [value, setValue] = React.useState([20, 1400]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={`w-[28%] sm:w-full ${showSideBar ? "sm:hidden" : "sm:block"}`}
    >
      <div className="bg-[#FBFBFB] pb-5 pl-[18px] pr-6 pt-[14px]">
        <div className="mb-9 sm:mb-2 sm:hidden">
          <h4 className="mb-2 text-[18px] font-bold ">Categories</h4>
          <nav className="pl-3 sm:hidden">
            <ul>
              <li className="flex items-center justify-between font-bold leading-10">
                <button className=" text-[15px] text-check">
                  Potter Plants
                </button>
                <span>(33)</span>
              </li>
              <li className="flex items-center justify-between  leading-10">
                <button className=" text-[15px]">Seeds </button>{" "}
                <span>(33)</span>
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
        </div>
        <div className="mb-12 sm:mb-3">
          <h4 className="text-[18px] font-bold">Price Range</h4>
          <div className="mt-5 pl-3 sm:mt-[6px]">
            <Slider
              getAriaLabel={() => "Price range"}
              sx={{
                width: "80%",
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
        <div className="mb-9 sm:hidden">
          <h4 className="mb-2 text-[18px] font-bold sm:hidden">Size</h4>
          <nav className="mb-9 pl-3">
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
        <div className="hidden sm:mb-2 sm:block">
          <Accordion
            defaultExpanded={false}
            sx={{ border: "none", background: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ fontWeight: "700", marginY: "10px !" }}
            >
              Categories
            </AccordionSummary>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="House Plants" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Potter Plants" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Small Plants" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Big Plants" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Succulents" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Trerrariums" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Gardening" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Accessories" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Accordion>
          <Accordion
            defaultExpanded={false}
            sx={{ marginBottom: "10px", border: "none", background: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ fontWeight: "700", marginY: "10px !" }}
            >
              Size
            </AccordionSummary>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Small" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Medium" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding secondaryAction={<span>(33)</span>}>
                  <ListItemButton>
                    <ListItemText primary="Large" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Accordion>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <img src={SideBar} alt="side img" className="w-full object-fill" />
      </div>
    </div>
  );
};

export default Sidebar;
