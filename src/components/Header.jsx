import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { IconButton, Button } from "@mui/material";
import { UseAllContext } from "../App";

import Logo from "../assets/images/icons/Logo.svg";

const Header = () => {
  const location = useLocation();
  const { setHidden } = useContext(UseAllContext);

  const handleLoginClick = () => {
    setHidden(false);
  };

  return (
    <header className=" fixed top-0 z-[80] w-full bg-[#fff] sm:bottom-0 sm:top-auto sm:border-none">
      <div className="container border-b-[0.3px] border-[#46A35880] pt-3 sm:hidden">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img src={Logo} alt="logo icon" className="w-[150px] md:w-28" />
          </NavLink>
          <nav>
            <ul className="flex items-center gap-[30px] md:gap-5">
              <li
                className={`border-b-[3px] hover:font-bold lg:text-[16px]  ${
                  location.pathname === "/"
                    ? " border-[#46A358] font-bold"
                    : "border-[#fff]"
                }`}
              >
                <NavLink to="/">
                  <p
                    className={`${location.pathname === "/" ? "font-bold" : ""} py-[22px] md:py-[16px]`}
                  >
                    Home
                  </p>
                </NavLink>
              </li>
              <li
                className={`border-b-[3px] hover:font-bold lg:text-[16px] ${
                  location.pathname === "/shop" ||
                  location.pathname === "/shopcart" ||
                  location.pathname === "/checkout" ||
                  location.pathname === "/shop/:id"
                    ? " border-[#46A358] font-bold"
                    : "border-[#fff]"
                }`}
              >
                <NavLink to="/shop">
                  <p
                    className={`${
                      location.pathname === "/shop" ||
                      location.pathname === "/shopcart" ||
                      location.pathname === "/checkout" ||
                      location.pathname === "/shop/:id"
                        ? "font-bold"
                        : ""
                    } py-[22px] md:py-[16px]`}
                  >
                    Shop
                  </p>
                </NavLink>
              </li>
              <li
                className={`border-b-[3px] hover:font-bold lg:text-[16px]   ${
                  location.pathname === "/plantcare"
                    ? "border-[#46A358] font-bold"
                    : "border-[#fff]"
                }`}
              >
                <p
                  className={`${location.pathname === "/plantcare" ? "font-bold" : ""} py-[22px] md:py-[16px]`}
                >
                  Plant Care
                </p>
              </li>
              <li
                className={`border-b-[3px] hover:font-bold lg:text-[16px] ${
                  location.pathname === "/blogs"
                    ? " border-[#46A358] font-bold"
                    : "border-[#fff]"
                }`}
              >
                <p
                  className={`${location.pathname === "/blogs" ? "font-bold" : ""} py-[22px] md:py-[16px]`}
                >
                  Blogs
                </p>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <IconButton aria-label="search">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z"
                  fill="#3D3D3D"
                />
              </svg>
            </IconButton>
            <NavLink to="/shopcart">
              <IconButton aria-label="shop">
                <div className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z"
                      fill="#3D3D3D"
                    />
                  </svg>
                  <span className="absolute right-[-6px] top-0 flex h-4 w-4 items-center justify-center rounded-[50%] border border-[white] bg-[#46A358] text-[9px] text-[white]">
                    13
                  </span>
                </div>
              </IconButton>
            </NavLink>
            <Button
              variant="contained"
              onClick={handleLoginClick}
              sx={{
                backgroundColor: "#46A358",
                color: "white",
                fontWeight: "700",
                fontFamily: "Cera Pro",
                paddingX: "16px",
                "&:hover": {
                  backgroundColor: "#46A358",
                },
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1601 9.10057H7.12598"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.7212 6.67059L17.1612 9.10059L14.7212 11.5306"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6342 5.35823C12.3592 2.3749 11.2425 1.29156 6.80082 1.29156C0.883322 1.29156 0.883322 3.21656 0.883322 8.9999C0.883322 14.7832 0.883322 16.7082 6.80082 16.7082C11.2425 16.7082 12.3592 15.6249 12.6342 12.6416"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-1 text-[16px] font-medium text-[#fff] md:text-[14px]">
                Login
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative hidden sm:block">
        <div className=" sm:container">
          <nav className="w-full  rounded-t-[30px] bg-[white] px-8 py-6 shadow-head">
            <ul className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-12">
                <li className="">
                  <NavLink to="/">
                    <svg
                      width="20.000000"
                      height="20.000000"
                      viewBox="0 0 15 17"
                      fill={`${location.pathname === "/" ? "#D9D9D9" : "#46A358"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Home"
                        d="M4.61 15.31L4.61 12.76C4.61 12.11 5.14 11.58 5.79 11.58L8.19 11.58C8.5 11.58 8.8 11.7 9.03 11.93C9.25 12.15 9.37 12.45 9.37 12.76L9.37 15.31C9.37 15.58 9.48 15.84 9.67 16.03C9.86 16.22 10.12 16.33 10.4 16.33L12.03 16.33C12.79 16.33 13.53 16.03 14.07 15.5C14.61 14.96 14.91 14.23 14.91 13.48L14.91 6.22C14.91 5.61 14.64 5.02 14.16 4.63L8.61 0.22C7.64 -0.55 6.25 -0.52 5.32 0.28L-0.12 4.63C-0.61 5.01 -0.91 5.6 -0.92 6.22L-0.92 13.47C-0.92 15.05 0.37 16.33 1.96 16.33L3.55 16.33C4.12 16.33 4.58 15.88 4.58 15.31L4.61 15.31Z"
                        fill={` ${location.pathname === "/" ? "#46A358" : "#D9D9D9"}`}
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/cabinat">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4134 1.74133C17.3781 0.618439 15.9575 0 14.413 0C13.2585 0 12.2012 0.36499 11.2704 1.08475C10.8008 1.44806 10.3752 1.89255 10 2.41135C9.62494 1.8927 9.19922 1.44806 8.7294 1.08475C7.79877 0.36499 6.74149 0 5.58701 0C4.04251 0 2.62177 0.618439 1.58646 1.74133C0.563507 2.8511 0 4.36722 0 6.01059C0 7.70203 0.630341 9.25034 1.98364 10.8833C3.19427 12.3441 4.93423 13.8269 6.94916 15.544C7.63718 16.1304 8.41705 16.795 9.22684 17.5031C9.44077 17.6904 9.71527 17.7936 10 17.7936C10.2846 17.7936 10.5592 17.6904 10.7729 17.5034C11.5826 16.7952 12.363 16.1302 13.0513 15.5435C15.0659 13.8268 16.8059 12.3441 18.0165 10.8832C19.3698 9.25034 20 7.70203 20 6.01044C20 4.36722 19.4365 2.8511 18.4134 1.74133Z"
                        fill={` ${location.pathname === "/cabinat" ? "#46A358" : "#D9D9D9"}`}
                      />
                    </svg>
                  </NavLink>
                </li>
              </div>
              <div className="flex items-center justify-center gap-12">
                <li className="">
                  <NavLink to="/shopcart">
                    <svg
                      width="20.000000"
                      height="20.000000"
                      viewBox="0 0 18 17"
                      fill={`${location.pathname === "/shopcart" ? "#46A358" : "#D9D9D9"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Vector"
                        d="M17.33 4.8L16.38 10.77C16.21 11.95 15.27 12.71 14.07 12.71L5.83 12.71C4.72 12.71 3.69 11.87 3.52 10.77L2.49 3.79L2.23 1.85C2.14 1.35 1.72 1.01 1.12 1.01L0.51 1.01C0.17 1.01 -0.17 0.67 -0.17 0.34C-0.17 0 0.17 -0.34 0.51 -0.34L1.12 -0.34C2.32 -0.34 3.35 0.5 3.43 1.68L3.6 3.03L15.78 3.03C16.21 3.03 16.64 3.2 16.9 3.53C17.24 3.87 17.33 4.38 17.33 4.8ZM6.52 15.49C6.52 15.95 6.13 16.33 5.66 16.33C5.19 16.33 4.8 15.95 4.8 15.49C4.8 15.02 5.19 14.64 5.66 14.64C6.13 14.64 6.52 15.02 6.52 15.49ZM14.24 16.33C14.71 16.33 15.1 15.95 15.1 15.49C15.1 15.02 14.71 14.64 14.24 14.64C13.77 14.64 13.38 15.02 13.38 15.49C13.38 15.95 13.77 16.33 14.24 16.33Z"
                        fill={` ${location.pathname === "/shopcart" ? "#46A358" : "#D9D9D9"}`}
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>
                  </NavLink>
                </li>
                <li className="" onClick={handleLoginClick}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99967 9.82998C12.2655 9.82998 14.1022 8.00257 14.1022 5.74835C14.1022 3.49413 12.2655 1.66672 9.99967 1.66672C7.73389 1.66672 5.89711 3.49413 5.89711 5.74835C5.89711 8.00257 7.73389 9.82998 9.99967 9.82998Z"
                      fill="#D9D9D9"
                    />
                    <path
                      d="M12.1364 11.5307H7.86292C5.38429 11.5307 3.33301 13.5716 3.33301 16.0375C3.33301 16.6328 3.58942 17.143 4.10224 17.3981C4.87147 17.8233 6.58087 18.3335 9.99967 18.3335C13.4185 18.3335 15.1279 17.8233 15.8971 17.3981C16.3245 17.143 16.6663 16.6328 16.6663 16.0375C16.6663 13.4865 14.6151 11.5307 12.1364 11.5307Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </li>
              </div>
            </ul>
            <div className="absolute left-[44%] right-[44%] top-[-30px] z-[89] flex h-[72px] w-[72px] items-center justify-center rounded-[50%] bg-[#FFF]">
              <button className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-gradient-to-b from-[#46A35866] to-[#46A358] shadow-headbtn">
                <svg
                  width="27.000000"
                  height="24.000000"
                  viewBox="0 0 27 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M13.38 12.89C9.28 12.89 5.18 12.89 1.09 12.89C0.96 12.89 0.82 12.89 0.7 12.86C0.25 12.76 -0.05 12.33 0 11.89C0.06 11.44 0.43 11.11 0.91 11.1C1.98 11.1 3.05 11.1 4.12 11.1C11.32 11.1 18.52 11.1 25.71 11.1C25.85 11.1 26 11.1 26.13 11.13C26.57 11.23 26.86 11.65 26.81 12.09C26.77 12.53 26.39 12.88 25.92 12.88C24.71 12.89 23.5 12.89 22.29 12.89C19.32 12.89 16.35 12.89 13.38 12.89C13.38 12.89 13.38 12.89 13.38 12.89Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M10.55 24C9.2 23.79 7.81 23.72 6.51 23.36C3.76 22.61 2.19 20.72 1.74 17.92C1.57 16.89 1.47 15.84 1.35 14.8C1.28 14.17 1.58 13.76 2.13 13.69C2.67 13.62 3.07 13.98 3.13 14.52C3.26 15.7 3.35 16.89 3.57 18.06C3.98 20.16 5.7 21.62 7.83 21.81C8.84 21.9 9.85 22.01 10.86 22.13C11.59 22.21 11.93 23.03 11.49 23.63C11.3 23.88 11.08 23.96 10.55 24Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M25.44 9.39C25.43 9.53 25.43 9.67 25.39 9.8C25.3 10.11 25 10.37 24.74 10.38C24.3 10.39 23.79 10.06 23.69 9.64C23.62 9.35 23.62 9.04 23.58 8.74C23.45 7.78 23.39 6.81 23.18 5.87C22.76 3.95 21.53 2.73 19.61 2.32C18.47 2.07 17.29 1.99 16.13 1.84C16 1.83 15.87 1.82 15.75 1.79C15.33 1.68 15.05 1.28 15.11 0.87C15.16 0.4 15.52 0.05 15.97 0.08C17.5 0.19 19.04 0.3 20.51 0.77C22.86 1.52 24.34 3.15 24.9 5.53C25.2 6.79 25.3 8.1 25.49 9.38C25.47 9.39 25.46 9.39 25.44 9.39Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M25.42 14.88C25.29 16.16 25.2 17.58 24.81 18.94C24.07 21.51 21.89 23.28 19.23 23.54C18.15 23.65 17.07 23.81 15.99 23.94C15.61 23.99 15.2 23.62 15.12 23.16C15.04 22.7 15.32 22.25 15.78 22.19C16.32 22.12 16.87 22.1 17.42 22.03C18.32 21.91 19.25 21.88 20.11 21.6C21.96 21.01 23 19.66 23.27 17.74C23.42 16.72 23.53 15.7 23.63 14.67C23.69 14.08 24.08 13.66 24.6 13.69C25.1 13.72 25.45 14.17 25.42 14.88Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M1.32 9.27C1.52 7.95 1.62 6.6 1.94 5.31C2.6 2.71 4.34 1.11 6.95 0.53C8.13 0.26 9.34 0.17 10.54 0.01C10.72 -0.01 10.92 -0.01 11.09 0.03C11.51 0.13 11.75 0.5 11.71 0.94C11.67 1.39 11.36 1.69 10.92 1.73C9.84 1.86 8.76 1.97 7.68 2.12C5.41 2.44 3.83 4.02 3.52 6.28C3.37 7.36 3.25 8.45 3.12 9.54C3.07 9.98 2.7 10.31 2.24 10.3C1.79 10.3 1.41 9.94 1.39 9.5C1.38 9.43 1.38 9.36 1.38 9.28C1.36 9.28 1.34 9.27 1.32 9.27Z"
                    fill="#FFFFFF"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
