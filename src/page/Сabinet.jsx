import React, { useState } from "react";
import Address from "../components/Address";
import Account from "../components/Account";
import Wishlist from "../components/Wishlist";

const Сabinet = () => {
  const [step, setStep] = useState(3);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <section className="mb-56 mt-16 grid grid-cols-11 gap-7">
      <div className="col-span-3">
        <div className="bg-grey">
          <div className="p-[18px]">
            <h2 className="text-[18px] font-bold">My Account</h2>
          </div>
          <nav>
            <ul>
              <li
                className={`flex items-center gap-2 border-l-4 px-[18px] text-[15px] leading-[45px] hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ${step == 1 ? "border-check bg-[#fff] font-bold text-check" : "border-grey text-oridinary"}`}
                onClick={() => handleStepChange(1)}
              >
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill={`${step == 1 ? "#46A358" : "#727272"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <clipPath id="clip9_1443">
                      <rect
                        id="User"
                        width="18.000000"
                        height="18.000000"
                        fill="white"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clip9_1443)">
                    <path
                      id="Vector"
                      d="M9 1.5C6.96 1.5 5.32 3.13 5.32 5.15C5.32 7.17 6.96 8.8 9 8.8C11.03 8.8 12.67 7.17 12.67 5.15C12.67 3.13 11.03 1.5 9 1.5ZM6.48 5.15C6.48 3.77 7.61 2.65 9 2.65C10.38 2.65 11.51 3.77 11.51 5.15C11.51 6.53 10.38 7.65 9 7.65C7.61 7.65 6.48 6.53 6.48 5.15ZM7.09 10.34C4.83 10.34 3 12.16 3 14.41C3 14.83 3.15 15.37 3.67 15.65C4.36 16.02 5.85 16.5 9 16.5C12.14 16.5 13.63 16.02 14.32 15.65C14.84 15.37 15 14.83 15 14.41C15 12.16 13.16 10.34 10.9 10.34L7.09 10.34ZM4.16 14.41C4.16 12.8 5.47 11.5 7.09 11.5L10.9 11.5C12.52 11.5 13.83 12.8 13.83 14.41C13.83 14.5 13.82 14.56 13.8 14.59C13.79 14.62 13.78 14.63 13.77 14.64C13.32 14.88 12.05 15.34 9 15.34C5.94 15.34 4.67 14.88 4.22 14.64C4.21 14.63 4.2 14.62 4.19 14.59C4.17 14.56 4.16 14.5 4.16 14.41Z"
                      fill={`${step == 1 ? "#46A358" : "#727272"}`}
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
                Account Details
              </li>
              <li
                className={`flex items-center gap-2 border-l-4 px-[18px] text-[15px] leading-[45px] hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ${step == 2 ? "border-check bg-[#fff] font-bold text-check" : "border-grey text-oridinary"}`}
                onClick={() => handleStepChange(2)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2088 7.0835C9.40466 7.0835 8.75049 7.73766 8.75049 8.54266C8.75049 9.34683 9.40466 10.0002 10.2088 10.0002C11.013 10.0002 11.6672 9.34683 11.6672 8.54266C11.6672 7.73766 11.013 7.0835 10.2088 7.0835ZM10.2088 11.2502C8.71549 11.2502 7.50049 10.036 7.50049 8.54266C7.50049 7.0485 8.71549 5.8335 10.2088 5.8335C11.7022 5.8335 12.9172 7.0485 12.9172 8.54266C12.9172 10.036 11.7022 11.2502 10.2088 11.2502Z"
                    fill={`${step == 2 ? "#46A358" : "#727272"}`}
                  />
                  <mask
                    id="mask0_9_1650"
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="1"
                    width="15"
                    height="17"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.3335 1.66675H17.0831V17.9167H3.3335V1.66675Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_9_1650)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.208 2.91675C7.10634 2.91675 4.58301 5.46425 4.58301 8.59425C4.58301 12.5767 9.26967 16.4567 10.208 16.6634C11.1463 16.4559 15.833 12.5759 15.833 8.59425C15.833 5.46425 13.3097 2.91675 10.208 2.91675ZM10.208 17.9167C8.71301 17.9167 3.33301 13.2901 3.33301 8.59425C3.33301 4.77425 6.41717 1.66675 10.208 1.66675C13.9988 1.66675 17.083 4.77425 17.083 8.59425C17.083 13.2901 11.703 17.9167 10.208 17.9167Z"
                      fill={`${step == 2 ? "#46A358" : "#727272"}`}
                    />
                  </g>
                </svg>
                Address
              </li>
              <li className="flex items-center gap-2 border-l-4 border-grey px-[18px] text-[15px] leading-[45px] text-oridinary hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_9_1453)">
                    <path
                      d="M12.8646 15.1873H7.41669C5.0909 15.1873 3.19871 13.2951 3.19871 10.9693V6.64588C3.19871 4.48381 2.12108 2.48255 0.316103 1.29245C-0.00804932 1.07874 -0.0975409 0.642736 0.11617 0.318584C0.329881 -0.00560306 0.765845 -0.0951298 1.09007 0.118652C2.12045 0.798029 2.95638 1.69407 3.55414 2.72572C3.68332 2.87043 4.72495 3.97449 6.43253 3.97449H14.5278C16.7364 3.93319 18.4651 6.14963 17.8877 8.28147L16.9558 11.9958C16.4843 13.8749 14.802 15.1873 12.8646 15.1873ZM4.42734 4.98332C4.54421 5.52326 4.6047 6.08 4.6047 6.64588V10.9693C4.6047 12.5198 5.86616 13.7813 7.41669 13.7813H12.8646C14.1562 13.7813 15.2777 12.9064 15.592 11.6536L16.5239 7.93932C16.8671 6.67259 15.8397 5.35598 14.5278 5.38048H6.4325C5.66022 5.38048 4.98801 5.21398 4.42734 4.98332ZM7.06519 17.1205C7.06519 16.6352 6.67176 16.2418 6.18645 16.2418C5.02046 16.2882 5.02147 17.9533 6.18645 17.9993C6.67176 17.9993 7.06519 17.6059 7.06519 17.1205ZM14.06 17.1205C14.06 16.6352 13.6666 16.2418 13.1813 16.2418C12.0153 16.2882 12.0163 17.9533 13.1813 17.9993C13.6666 17.9993 14.06 17.6059 14.06 17.1205ZM15.2308 7.48948C15.2308 7.10121 14.9161 6.78648 14.5278 6.78648H6.71369C5.78096 6.8236 5.78166 8.15567 6.71369 8.19247H14.5278C14.9161 8.19247 15.2308 7.87774 15.2308 7.48948Z"
                      fill="#727272"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9_1453">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Orders
              </li>
              <li
                className={`flex items-center gap-2 border-l-4 px-[18px] text-[15px] leading-[45px] hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ${step == 3 ? "border-check bg-[#fff] font-bold text-check" : "border-grey text-oridinary"}`}
                onClick={() => handleStepChange(3)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15.1099C7.77222 15.1099 7.55261 15.0273 7.38147 14.8774C6.73511 14.3123 6.11194 13.7811 5.56213 13.3126L5.55933 13.3102C3.94739 11.9365 2.55542 10.7502 1.58691 9.58167C0.504272 8.27527 0 7.03662 0 5.68347C0 4.36877 0.450806 3.15588 1.26929 2.26807C2.09753 1.36975 3.23401 0.875 4.46973 0.875C5.39331 0.875 6.23914 1.16699 6.98364 1.7428C7.35938 2.03345 7.69995 2.38916 8 2.80408C8.30017 2.38916 8.64062 2.03345 9.01648 1.7428C9.76099 1.16699 10.6068 0.875 11.5304 0.875C12.766 0.875 13.9026 1.36975 14.7308 2.26807C15.5493 3.15588 16 4.36877 16 5.68347C16 7.03662 15.4958 8.27527 14.4132 9.58154C13.4447 10.7502 12.0529 11.9364 10.4412 13.3099C9.89038 13.7792 9.26624 14.3112 8.61841 14.8777C8.44739 15.0273 8.22766 15.1099 8 15.1099ZM4.46973 1.81226C3.4989 1.81226 2.60706 2.19971 1.95825 2.90332C1.2998 3.61755 0.937134 4.60486 0.937134 5.68347C0.937134 6.82153 1.36011 7.83936 2.30847 8.98364C3.2251 10.0897 4.5885 11.2516 6.16711 12.5969L6.17004 12.5994C6.72192 13.0697 7.34753 13.6029 7.99866 14.1722C8.65369 13.6018 9.28027 13.0677 9.83325 12.5967C11.4117 11.2513 12.775 10.0897 13.6917 8.98364C14.6399 7.83936 15.0629 6.82153 15.0629 5.68347C15.0629 4.60486 14.7002 3.61755 14.0417 2.90332C13.3931 2.19971 12.5011 1.81226 11.5304 1.81226C10.8192 1.81226 10.1663 2.03833 9.58972 2.48413C9.07593 2.88159 8.71802 3.38403 8.50818 3.7356C8.40027 3.91638 8.21033 4.02429 8 4.02429C7.78967 4.02429 7.59973 3.91638 7.49182 3.7356C7.2821 3.38403 6.92419 2.88159 6.41028 2.48413C5.83374 2.03833 5.18079 1.81226 4.46973 1.81226Z"
                    fill={`${step == 3 ? "#46A358" : "#727272"}`}
                  />
                </svg>
                Wishlist
              </li>
              <li className="flex items-center gap-2 border-l-4 border-grey px-[18px] text-[15px] leading-[45px] text-oridinary hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.1875 11.1404L7.43225 8.22368L9.99275 10.2337L12.1895 7.39868"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7501 1.76245C15.5466 1.76245 16.1916 2.40745 16.1916 3.20395C16.1916 3.9997 15.5466 4.64545 14.7501 4.64545C13.9536 4.64545 13.3086 3.9997 13.3086 3.20395C13.3086 2.40745 13.9536 1.76245 14.7501 1.76245Z"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5664 6.95179C15.6662 7.62304 15.7119 8.37904 15.7119 9.22729C15.7119 14.4308 13.9779 16.1648 8.77441 16.1648C3.57166 16.1648 1.83691 14.4308 1.83691 9.22729C1.83691 4.02454 3.57166 2.28979 8.77441 2.28979C9.60691 2.28979 10.3502 2.33404 11.0117 2.43004"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Reports
              </li>
              <li className="flex items-center gap-2 border-l-4 border-grey px-[18px] text-[15px] leading-[45px] text-oridinary hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90918 11.0933V2.0625"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.0962 8.89819L8.90917 11.0942L6.72217 8.89819"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2775 5.44409C14.9617 5.69159 15.9375 6.69659 15.9375 10.6941C15.9375 16.0191 14.2043 16.0191 9 16.0191C3.79425 16.0191 2.0625 16.0191 2.0625 10.6941C2.0625 6.69659 3.0375 5.69159 5.7225 5.44409"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Downloads
              </li>
              <li className="flex items-center gap-2 border-l-4 border-grey px-[18px] text-[15px] leading-[45px] text-oridinary hover:border-check hover:bg-[#fff] hover:font-bold hover:text-check ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 15.75C4.12918 15.75 2.2175 15.404 1.90764 13.6525C1.59779 11.901 3.58037 8.60806 4.19131 7.52135C6.23443 3.88806 7.62279 2.25 9 2.25C10.3772 2.25 11.7656 3.88806 13.8087 7.52135C14.4196 8.60806 16.4022 11.901 16.0924 13.6525C15.7833 15.404 13.8708 15.75 9 15.75Z"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 6.375V9.29625"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99662 11.9211H9.00337"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Support
              </li>
            </ul>
          </nav>
          <button className="w-full border-l-4 border-t-[0.3px] border-l-grey border-t-[#a9eeb780] px-[18px] py-[19px] hover:border-l-check hover:bg-[#fff]">
            <p className="flex items-center gap-2 text-[15px] font-bold leading-[15px] text-check">
              <svg
                width="18.000000"
                height="18.000000"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip9_1443">
                    <rect
                      id="User"
                      width="18.000000"
                      height="18.000000"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip9_1443)">
                  <path
                    id="Vector"
                    d="M9 1.5C6.96 1.5 5.32 3.13 5.32 5.15C5.32 7.17 6.96 8.8 9 8.8C11.03 8.8 12.67 7.17 12.67 5.15C12.67 3.13 11.03 1.5 9 1.5ZM6.48 5.15C6.48 3.77 7.61 2.65 9 2.65C10.38 2.65 11.51 3.77 11.51 5.15C11.51 6.53 10.38 7.65 9 7.65C7.61 7.65 6.48 6.53 6.48 5.15ZM7.09 10.34C4.83 10.34 3 12.16 3 14.41C3 14.83 3.15 15.37 3.67 15.65C4.36 16.02 5.85 16.5 9 16.5C12.14 16.5 13.63 16.02 14.32 15.65C14.84 15.37 15 14.83 15 14.41C15 12.16 13.16 10.34 10.9 10.34L7.09 10.34ZM4.16 14.41C4.16 12.8 5.47 11.5 7.09 11.5L10.9 11.5C12.52 11.5 13.83 12.8 13.83 14.41C13.83 14.5 13.82 14.56 13.8 14.59C13.79 14.62 13.78 14.63 13.77 14.64C13.32 14.88 12.05 15.34 9 15.34C5.94 15.34 4.67 14.88 4.22 14.64C4.21 14.63 4.2 14.62 4.19 14.59C4.17 14.56 4.16 14.5 4.16 14.41Z"
                    fill="#46A358"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
              Loguot
            </p>
          </button>
        </div>
      </div>
      <div className="col-span-8">
        {step === 1 && <Account />}
        {step === 2 && <Address />}
        {step === 3 && <Wishlist />}
      </div>
    </section>
  );
};

export default Сabinet;
