import { NavLink, useLocation } from "react-router-dom";

import Logo from "../assets/images/icons/Logo.svg";
import Cards from "../assets/images/photos/footer/cards.svg";
import PotTop from "../assets/images/photos/footer/PotTop.svg";
import PotBott from "../assets/images/photos/footer/PotBott.svg";
import Bailer from "../assets/images/photos/footer/Bailer.svg";
import Cactus from "../assets/images/photos/footer/Cactus.svg";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="py-[6px]">
      <div className="grid grid-cols-9 gap-10 bg-[#FBFBFB] px-6 pb-6 pt-7">
        <div className="col-span-6 grid grid-cols-10 gap-5">
          <div className="col-span-3">
            <div className="bg-[url('./assets/images/photos/footer/Ellipse.svg')] bg-left-bottom bg-no-repeat pl-4">
              <img src={PotTop} alt="footer img" />
              <img src={PotBott} alt="footer img" />
            </div>
            <h4 className="mb-2 mt-4 text-[17px] font-bold">Garden Care</h4>
            <p className="text-oridinary ">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="col-span-4 border-x border-[#46A3581A] px-[26px]">
            <img
              src={Cactus}
              alt="footer img"
              className="bg-[url('./assets/images/photos/footer/Ellipse.svg')] bg-left-bottom bg-no-repeat pl-4"
            />
            <h4 className="mb-2 mt-4 text-[17px] font-bold">
              Plant Renovation
            </h4>
            <p className="text-oridinary ">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="col-span-3">
            <img
              src={Bailer}
              alt="footer img"
              className="bg-[url('./assets/images/photos/footer/Ellipse.svg')] bg-left bg-no-repeat pl-2"
            />
            <h4 className="mb-2 mt-4 text-[17px] font-bold">Watering Graden</h4>
            <p className="text-oridinary ">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <h4 className="mb-4 text-[17px] font-bold">
            Would you like to join newsletters?
          </h4>
          <form
            id="footer-form"
            className="shadow-footerform mb-4 flex w-full items-center"
          >
            <input
              type="email"
              className=" flex-grow  rounded-l-md p-3 outline-none"
              placeholder="enter your email address..."
              minLength={5}
            />
            <button
              type="submit"
              className="rounded-r-md bg-check px-6 py-3 text-[18px] font-bold text-[white] transition duration-300"
            >
              Join
            </button>
          </form>
          <p className="text-[13px] text-oridinary">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="flex items-center gap-10 border-y border-[#46A35880] bg-[#46A3581A] px-6 py-8">
        <div className="col-span-1">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo icon"
              className="h-[34px] min-w-[150px] md:h-7 md:w-28"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-7 items-center gap-16 ">
          <div className="col-span-2 flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.09196 7.92543C9.09196 6.77437 8.15926 5.84167 7.0082 5.84167C5.85799 5.84167 4.92529 6.77437 4.92529 7.92543C4.92529 9.07565 5.85799 10.0083 7.0082 10.0083C8.15926 10.0083 9.09196 9.07565 9.09196 7.92543Z"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99959 16.5C4.58457 16.5 0.75 12.2989 0.75 7.8322C0.75 4.33539 3.54758 1.5 6.99959 1.5C10.4516 1.5 13.25 4.33539 13.25 7.8322C13.25 12.2989 9.41543 16.5 6.99959 16.5Z"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6208 7.51581C14.6208 7.51581 11.9457 10.7263 9.98919 10.7263C8.03347 10.7263 5.32837 7.51581 5.32837 7.51581"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.04346 9.97397C2.04346 4.27556 4.02758 2.37665 9.97997 2.37665C15.9323 2.37665 17.9165 4.27556 17.9165 9.97397C17.9165 15.6716 15.9323 17.5713 9.97997 17.5713C4.02758 17.5713 2.04346 15.6716 2.04346 9.97397Z"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>contact@greenshop.com</p>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9604 5.24426C13.4363 5.53093 14.5896 6.6851 14.8771 8.16093"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.41715 13.5825C0.668834 7.83352 1.48623 5.20096 2.0922 4.35263C2.17005 4.21552 4.08881 1.34323 6.14557 3.02839C11.2508 7.23288 4.78767 6.63843 9.07458 10.9261C13.3624 15.2128 12.767 8.74996 16.9717 13.8541C18.6569 15.9117 15.7845 17.8303 15.6483 17.9073C14.7999 18.5141 12.1664 19.3315 6.41715 13.5825Z"
                stroke="#46A358"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>+88 01911 717 490</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-20 border-b border-[#46A35833] bg-[#FBFBFB] px-6 py-8">
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-[16px] font-bold lg:text-[18px]">My Account</h4>
          <ul className="flex flex-col gap-3">
            <li>My Account</li>
            <li>Our stores</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-[16px] font-bold lg:text-[18px]">Help & Guide</h4>
          <ul className="flex flex-col gap-3">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li> Product Policy </li>
            <li>How to Return</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-[16px] font-bold lg:text-[18px]">Categories</h4>
          <ul className="flex flex-col gap-3">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds </li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-[16px] font-bold lg:text-[18px]">Social Media</h4>
          <div className="mb-5 flex items-center justify-center gap-2">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-[#46A35833]">
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z"
                  fill="#46A358"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-[#46A35833]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.46667C10.1333 1.46667 10.4 1.46667 11.2667 1.53333C13.4667 1.6 14.4667 2.66667 14.5333 4.8C14.6 5.66667 14.6 5.86667 14.6 8C14.6 10.1333 14.6 10.4 14.5333 11.2C14.4667 13.3333 13.4 14.4 11.2667 14.4667C10.4 14.5333 10.2 14.5333 8 14.5333C5.86667 14.5333 5.6 14.5333 4.8 14.4667C2.6 14.4 1.6 13.3333 1.53333 11.2C1.46667 10.3333 1.46667 10.1333 1.46667 8C1.46667 5.86667 1.46667 5.6 1.53333 4.8C1.6 2.66667 2.66667 1.6 4.8 1.53333C5.6 1.46667 5.86667 1.46667 8 1.46667ZM8 0C5.8 0 5.53333 0 4.73333 0.0666667C1.8 0.2 0.2 1.8 0.0666667 4.73333C0 5.53333 0 5.8 0 8C0 10.2 0 10.4667 0.0666667 11.2667C0.2 14.2 1.8 15.8 4.73333 15.9333C5.53333 16 5.8 16 8 16C10.2 16 10.4667 16 11.2667 15.9333C14.2 15.8 15.8 14.2 15.9333 11.2667C16 10.4667 16 10.2 16 8C16 5.8 16 5.53333 15.9333 4.73333C15.8 1.8 14.2 0.2 11.2667 0.0666667C10.4667 0 10.2 0 8 0ZM8 3.86667C5.73333 3.86667 3.86667 5.73333 3.86667 8C3.86667 10.2667 5.73333 12.1333 8 12.1333C10.2667 12.1333 12.1333 10.2667 12.1333 8C12.1333 5.73333 10.2667 3.86667 8 3.86667ZM8 10.6667C6.53333 10.6667 5.33333 9.46667 5.33333 8C5.33333 6.53333 6.53333 5.33333 8 5.33333C9.46667 5.33333 10.6667 6.53333 10.6667 8C10.6667 9.46667 9.46667 10.6667 8 10.6667ZM12.2667 2.8C11.7333 2.8 11.3333 3.2 11.3333 3.73333C11.3333 4.26667 11.7333 4.66667 12.2667 4.66667C12.8 4.66667 13.2 4.26667 13.2 3.73333C13.2 3.2 12.8 2.8 12.2667 2.8Z"
                  fill="#46A358"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-[#46A35833]">
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.03186 13.0036C11.0699 13.0036 14.3718 8.00118 14.3718 3.66357C14.3718 3.52144 14.3689 3.38005 14.3624 3.2392C15.0033 2.77588 15.5605 2.19756 16 1.53953C15.4118 1.80085 14.7789 1.97682 14.1149 2.05616C14.7926 1.64981 15.313 1.0067 15.5585 0.24021C14.9241 0.616357 14.2217 0.889688 13.4742 1.03709C12.8749 0.399076 12.0218 0 11.0779 0C9.26483 0 7.79464 1.4702 7.79464 3.28233C7.79464 3.54001 7.82357 3.79041 7.87962 4.0308C5.1516 3.89377 2.73239 2.58735 1.11352 0.601253C0.831273 1.08622 0.668767 1.64999 0.668767 2.25106C0.668767 3.38988 1.24837 4.3953 2.12968 4.98363C1.59121 4.96707 1.08531 4.81894 0.642926 4.57291C0.642198 4.58656 0.642198 4.60039 0.642198 4.61476C0.642198 6.2047 1.77392 7.53204 3.27578 7.83285C3.00008 7.90801 2.71001 7.94841 2.41047 7.94841C2.19901 7.94841 1.99338 7.9273 1.79339 7.88927C2.21121 9.19332 3.42318 10.1425 4.86007 10.1693C3.73636 11.0499 2.32094 11.5745 0.783049 11.5745C0.518272 11.5745 0.256952 11.5594 0 11.529C1.45273 12.46 3.17769 13.0036 5.03186 13.0036Z"
                  fill="#46A358"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-[#46A35833]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33333 1.66667C3.33333 2.6 2.6 3.33333 1.66667 3.33333C0.733333 3.33333 0 2.6 0 1.66667C0 0.733333 0.733333 0 1.66667 0C2.6 0 3.33333 0.733333 3.33333 1.66667ZM3.33333 4.66667H0V15.3333H3.33333V4.66667ZM8.66667 4.66667H5.33333V15.3333H8.66667V9.73333C8.66667 6.6 12.6667 6.33333 12.6667 9.73333V15.3333H16V8.6C16 3.33333 10.0667 3.53333 8.66667 6.13333V4.66667Z"
                  fill="#46A358"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-[#46A35833]">
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1653 4.42995L15.168 4.43062C15.168 4.43062 15.1676 4.4305 15.1667 4.4303C15.1663 4.4302 15.1658 4.43008 15.1653 4.42995ZM4.32444 4.35686C6.91762 4.19575 11.7483 4.19575 14.3415 4.35686L14.3422 4.3644C14.4047 4.99716 14.4299 5.84143 14.4299 7.01915C14.4299 8.18238 14.4053 9.02689 14.3441 9.66498C11.6962 9.77026 6.97129 9.77027 4.32282 9.66502C4.261 9.03324 4.23602 8.19137 4.23602 7.01915C4.23602 5.84143 4.26123 4.99716 4.32369 4.3644L4.32444 4.35686ZM15.2422 9.61106C15.2422 9.61109 15.2405 9.61148 15.237 9.61215L15.2422 9.61106ZM3.49794 9.60768L3.50063 9.60836C3.49881 9.60793 3.49792 9.60769 3.49794 9.60768ZM0 7.01915C0 11.8412 0.388873 13.63 3.42208 13.8633C6.22196 14.0189 12.4439 14.0189 15.2438 13.8633C18.277 13.7078 18.6659 11.8412 18.6659 7.01915C18.6659 2.19713 18.277 0.408316 15.2438 0.174993C12.4439 -0.0583309 6.22196 -0.0583309 3.42208 0.174993C0.388873 0.408316 0 2.19713 0 7.01915ZM3.49794 4.43062C3.49792 4.43061 3.49884 4.43037 3.50073 4.42992L3.49794 4.43062ZM9.78228 8.73886C8.50388 9.37806 6.99973 8.44845 6.99973 7.01915C6.99973 5.58986 8.50388 4.66025 9.78228 5.29945C11.1994 6.008 11.1994 8.0303 9.78228 8.73886Z"
                  fill="#46A358"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-[16px] font-bold lg:text-[18px]">We accept</h4>
          <img src={Cards} alt="payment cards img" />
        </div>
      </div>
      <div className="py-2">
        <p className="text-center">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
