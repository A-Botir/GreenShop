import React, { useContext, useState } from "react";
import { UseAllContext } from "../App";
import { IconButton, Button } from "@mui/material";
import Login from "../components/Login";
import Registration from "../components/Registration";

const Authorization = () => {
  const { hidden, setHidden } = useContext(UseAllContext);
  const [step, setStep] = useState(1);

  const toggleAuthorization = () => {
    setHidden(!hidden);
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div
      className={`${hidden ? "hidden" : "block"} absolute z-[95] h-screen w-full overflow-hidden bg-[#0A0D1240]`}
    >
      <div className="container">
        <div className="flex h-screen items-center justify-center">
          <div className="relative w-[35%] border-b-[10px] border-check bg-[#fff] py-8 sm:w-full sm:border-[none] sm:pb-5 sm:pt-20">
            <div className="mx-auto w-[75%] sm:w-[90%]">
              <nav className="mb-8">
                <ul className="flex items-center justify-center gap-3">
                  <li
                    className={`text-[20px] font-medium hover:text-check ${step == 1 ? "text-check" : ""}`}
                    onClick={() => handleStepChange(1)}
                  >
                    Login
                  </li>
                  <span className="block h-[18px] w-[1px] bg-[#3D3D3D]"></span>
                  <li
                    className={`text-[20px] font-medium hover:text-check ${step == 2 ? "text-check" : ""}`}
                    onClick={() => handleStepChange(2)}
                  >
                    Register
                  </li>
                </ul>
              </nav>
              {step === 1 && <Login />}
              {step === 2 && <Registration />}
              <fieldset className="mb-6 mt-4 border-t border-[#EAEAEA]">
                <legend align="center" className="px-2 text-[13px]">
                  {step === 1 && <>Or login with</>}
                  {step === 2 && <>Or register with</>}
                </legend>
              </fieldset>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={
                  <svg
                    width="20.000000"
                    height="20.000000"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip9_990">
                        <rect
                          id="google 1"
                          width="20.000000"
                          height="20.000000"
                          fill="white"
                          fillOpacity="0"
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id="google 1"
                      width="20.000000"
                      height="20.000000"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <g clipPath="url(#clip9_990)">
                      <path
                        id="Vector"
                        d="M16.43 17.6C14.69 19.07 12.44 20 10 20C6.35 20 3.15 17.99 1.42 15.06L2.07 12.06L4.94 11.53C5.61 13.69 7.63 15.27 10 15.27C11.14 15.27 12.21 14.91 13.09 14.26L15.85 14.68L16.43 17.6Z"
                        fill="#59C36A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M16.43 17.6L15.85 14.68L13.09 14.26C12.21 14.91 11.14 15.27 10 15.27L10 20C12.44 20 14.69 19.07 16.43 17.6Z"
                        fill="#00A66C"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M4.72 10C4.72 10.53 4.8 11.05 4.94 11.53L1.42 15.06C0.54 13.58 0 11.85 0 10C0 8.14 0.54 6.41 1.42 4.93L4.25 5.42L4.94 8.46C4.8 8.94 4.72 9.46 4.72 10Z"
                        fill="#FFDA2D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M20 10C20 13.04 18.58 15.77 16.43 17.6L13.09 14.26C13.77 13.77 14.34 13.11 14.72 12.34L10 12.34C9.67 12.34 9.41 12.08 9.41 11.75L9.41 8.24C9.41 7.91 9.67 7.65 10 7.65L19.25 7.65C19.53 7.65 19.77 7.85 19.82 8.13C19.94 8.74 20 9.37 20 10Z"
                        fill="#4086F4"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M14.72 12.34C14.34 13.11 13.77 13.77 13.09 14.26L16.43 17.6C18.58 15.77 20 13.04 20 10C20 9.37 19.94 8.74 19.82 8.13C19.77 7.85 19.53 7.65 19.25 7.65L10 7.65L10 12.34L14.72 12.34Z"
                        fill="#4175DF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M16.59 2.79C16.6 2.95 16.53 3.1 16.43 3.22L13.92 5.72C13.72 5.93 13.39 5.95 13.16 5.78C12.23 5.08 11.14 4.72 10 4.72C7.63 4.72 5.61 6.3 4.94 8.46L1.42 4.93C3.15 2 6.35 0 10 0C12.33 0 14.6 0.85 16.38 2.35C16.51 2.46 16.58 2.62 16.59 2.79Z"
                        fill="#FF641A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M13.16 5.78C13.39 5.95 13.72 5.93 13.92 5.72L16.43 3.22C16.53 3.1 16.6 2.95 16.59 2.79C16.58 2.62 16.51 2.46 16.38 2.35C14.6 0.85 12.33 0 10 0L10 4.72C11.14 4.72 12.23 5.08 13.16 5.78Z"
                        fill="#F03800"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                }
                sx={{
                  width: "100%",
                  paddingY: "10px",
                  borderRadius: "5px",
                  borderColor: "#EAEAEA",
                  marginBottom: "15px",
                }}
              >
                Login with Google
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={
                  <svg
                    width="20.000000"
                    height="20.000000"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip9_1018">
                        <rect
                          id="facebook 1"
                          width="20.000000"
                          height="20.000000"
                          fill="white"
                          fillOpacity="0"
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id="facebook 1"
                      width="20.000000"
                      height="20.000000"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <g clipPath="url(#clip9_1018)">
                      <path
                        id="Vector"
                        d="M13.33 3.32L15.15 3.32L15.15 0.14C14.84 0.09 13.75 0 12.49 0C6.71 0 8.29 6.54 8.06 7.5L5.15 7.5L5.15 11.05L8.06 11.05L8.06 20L11.62 20L11.62 11.05L14.41 11.05L14.85 7.5L11.62 7.5C11.77 5.14 10.98 3.32 13.33 3.32Z"
                        fill="#3B5999"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                }
                sx={{
                  width: "100%",
                  paddingY: "10px",
                  borderRadius: "5px",
                  borderColor: "#EAEAEA",
                  marginBottom: "15px",
                }}
              >
                Login with Facebook
              </Button>
            </div>
            <div className="absolute right-2 top-2 z-[96]">
              <IconButton aria-label="close" onClick={toggleAuthorization}>
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

export default Authorization;
