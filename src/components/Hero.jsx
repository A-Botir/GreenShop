import Button from "@mui/material/Button";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Vase from "../assets/images/photos/main/hero img.png";

const Hero = () => {
  return (
    <section className="bg-contain bg-no-repeat sm:rounded-[24px] sm:bg-[url('./assets/images/back/smHero.svg')]">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          className: "swiper-pagination-bullet",
        }}
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-3 sm:gap-0">
            <div className="pl-12 sm:col-span-2 sm:pb-7 sm:pl-6 sm:pt-6">
              <p className="mb-2 font-medium uppercase sm:mb-0 sm:text-[11px] md:text-[13px]">
                Welcome to GreenShop 1
              </p>
              <h1 className="mb-1 text-[46px] font-black leading-[46px] sm:text-[24px] sm:leading-7 lg:text-[70px] lg:leading-[70px]">
                Let’s Make a Better&nbsp;
                <span className="text-[46px] font-black leading-[46px] text-check sm:text-[24px] sm:leading-7 lg:text-[70px] lg:leading-[70px]">
                  Planet
                </span>
              </h1>
              <p className="mb-11 text-oridinary sm:mb-3">
                We are an online plant shop offering a wide range
                <span className="text-oridinary  sm:hidden">
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <div className="sm:hidden">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#46A358",
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "Cera Pro",
                    paddingX: "26px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#46A358",
                    },
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="hidden sm:block">
                <button className="flex items-center gap-1 text-[12px] font-bold leading-[14px] text-check ">
                  SHOP NOW
                  <svg
                    width="16.000000"
                    height="16.000000"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <rect
                      id="Iconly/Curved/Arrow - Right"
                      width="16.000000"
                      height="16.000000"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <path
                      id="Stroke 1"
                      d="M13.16 7.81L3.16 7.81"
                      stroke="#46A358"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      id="Stroke 3"
                      d="M9.13 3.8C9.13 3.8 13.16 5.97 13.16 7.81C13.16 9.65 9.13 11.83 9.13 11.83"
                      stroke="#46A358"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative h-full sm:col-span-1">
              <img src={Vase} alt="hero img" className="ml-auto sm:hidden" />
              <img
                src={Vase}
                alt="hero img small"
                className="absolute bottom-8 left-0 w-[25%] sm:bottom-3 sm:left-[-36px] sm:w-[50%]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-3 sm:gap-0">
            <div className="pl-12 sm:col-span-2 sm:pb-7 sm:pl-6 sm:pt-6">
              <p className="mb-2 font-medium uppercase sm:mb-0 sm:text-[11px] md:text-[13px]">
                Welcome to GreenShop 2
              </p>
              <h1 className="mb-1 text-[46px] font-black leading-[46px] sm:text-[24px] sm:leading-7 lg:text-[70px] lg:leading-[70px]">
                Let’s Make a Better&nbsp;
                <span className="text-[46px] font-black leading-[46px] text-check sm:text-[24px] sm:leading-7 lg:text-[70px] lg:leading-[70px]">
                  Planet
                </span>
              </h1>
              <p className="mb-11 text-oridinary sm:mb-3">
                We are an online plant shop offering a wide range
                <span className="text-oridinary  sm:hidden">
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <div className="sm:hidden">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#46A358",
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "Cera Pro",
                    paddingX: "26px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#46A358",
                    },
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="hidden sm:block">
                <button className="flex items-center gap-1 text-[12px] font-bold leading-[14px] text-check ">
                  SHOP NOW
                  <svg
                    width="16.000000"
                    height="16.000000"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <rect
                      id="Iconly/Curved/Arrow - Right"
                      width="16.000000"
                      height="16.000000"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <path
                      id="Stroke 1"
                      d="M13.16 7.81L3.16 7.81"
                      stroke="#46A358"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      id="Stroke 3"
                      d="M9.13 3.8C9.13 3.8 13.16 5.97 13.16 7.81C13.16 9.65 9.13 11.83 9.13 11.83"
                      stroke="#46A358"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative h-full sm:col-span-1">
              <img src={Vase} alt="hero img" className="ml-auto sm:hidden" />
              <img
                src={Vase}
                alt="hero img small"
                className="absolute bottom-8 left-0 w-[25%] sm:bottom-3 sm:left-[-36px] sm:w-[50%]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-3 sm:gap-0">
            <div className="pl-12 sm:col-span-2 sm:pb-7 sm:pl-6 sm:pt-6">
              <p className="mb-2 font-medium uppercase sm:mb-0 sm:text-[11px] md:text-[13px]">
                Welcome to GreenShop 3
              </p>
              <h1 className="mb-1 text-[46px] font-black leading-[46px] sm:text-[24px] sm:leading-7 lg:text-[70px] lg:leading-[70px]">
                Let’s Make a Better&nbsp;
                <span className="text-[46px] font-black leading-[46px] text-check sm:text-[24px] sm:leading-7 lg:text-[70px] lg:leading-[70px]">
                  Planet
                </span>
              </h1>
              <p className="mb-11 text-oridinary sm:mb-3">
                We are an online plant shop offering a wide range
                <span className="text-oridinary  sm:hidden">
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <div className="sm:hidden">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#46A358",
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "Cera Pro",
                    paddingX: "26px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#46A358",
                    },
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="hidden sm:block">
                <button className="flex items-center gap-1 text-[12px] font-bold leading-[14px] text-check ">
                  SHOP NOW
                  <svg
                    width="16.000000"
                    height="16.000000"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <rect
                      id="Iconly/Curved/Arrow - Right"
                      width="16.000000"
                      height="16.000000"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <path
                      id="Stroke 1"
                      d="M13.16 7.81L3.16 7.81"
                      stroke="#46A358"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      id="Stroke 3"
                      d="M9.13 3.8C9.13 3.8 13.16 5.97 13.16 7.81C13.16 9.65 9.13 11.83 9.13 11.83"
                      stroke="#46A358"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative h-full sm:col-span-1">
              <img src={Vase} alt="hero img" className="ml-auto sm:hidden" />
              <img
                src={Vase}
                alt="hero img small"
                className="absolute bottom-8 left-0 w-[25%] sm:bottom-3 sm:left-[-36px] sm:w-[50%]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
