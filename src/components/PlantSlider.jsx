import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UseAllContext } from "../App";
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

const PlantSlider = () => {
  const location = useLocation();
  const { flowers, addToCart, addToWishlist } = useContext(UseAllContext);

  return (
    <section
      className={`mb-32  ${location.pathname === "/shop" ? "mt-32" : "mt-[88px]"}`}
    >
      <div className="mb-11 border-b border-[#46A35880] sm:mb-5">
        <h4 className="pb-1  text-[15px] font-bold text-check sm:pb-0 sm:text-[14px] lg:pb-[6px]">
          {location.pathname === "/shop"
            ? "Releted Products"
            : "You may be interested in"}
        </h4>
      </div>
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
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          className: "swiper-pagination-bullet",
        }}
      >
        <SwiperSlide>
          <div className="mb-[60px] grid grid-cols-5 gap-6">
            {flowers.slice(0, 5).map((flower) => (
              <div className="card_item relative" key={flower.id}>
                <div className="h-[255px]">
                  <img
                    src={flower.online_img}
                    alt="flower image"
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[15px]">{flower.common_name}</p>
                  <p className="text-[16px] font-bold text-check">
                    ${flower.price}.00
                  </p>
                </div>
              <div className="cardbtn_group absolute right-2 top-0 z-[20] flex-col items-center justify-center gap-2 sm:bottom-auto sm:left-auto sm:right-1 sm:top-2">
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:h-7 sm:w-7 sm:rounded-[50%]"
                    onClick={() => addToCart(flower)}
                  >
                    <svg
                      width="20.000000"
                      height="19.000000"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        className="hoverable"
                        id="Vector"
                        d="M14.29 15.87L8.24 15.87C5.65 15.87 3.55 13.77 3.55 11.18L3.55 6.38C3.55 3.98 2.35 1.75 0.35 0.43C-0.01 0.19 -0.11 -0.29 0.12 -0.65C0.36 -1.01 0.85 -1.11 1.21 -0.87C2.35 -0.12 3.28 0.88 3.94 2.02C4.09 2.18 5.24 3.41 7.14 3.41L16.14 3.41C18.59 3.36 20.51 5.83 19.87 8.2L18.83 12.32C18.31 14.41 16.44 15.87 14.29 15.87ZM4.91 4.53C5.04 5.13 5.11 5.75 5.11 6.38L5.11 11.18C5.11 12.91 6.51 14.31 8.24 14.31L14.29 14.31C15.72 14.31 16.97 13.34 17.32 11.94L18.35 7.82C18.74 6.41 17.59 4.95 16.14 4.97L7.14 4.97C6.28 4.97 5.54 4.79 4.91 4.53ZM7.85 18.02C7.85 17.48 7.41 17.04 6.87 17.04C5.57 17.09 5.57 18.94 6.87 18.99C7.41 18.99 7.85 18.56 7.85 18.02ZM15.62 18.02C15.62 17.48 15.18 17.04 14.64 17.04C13.35 17.09 13.35 18.94 14.64 18.99C15.18 18.99 15.62 18.56 15.62 18.02ZM16.92 7.32C16.92 6.88 16.57 6.54 16.14 6.54L7.45 6.54C6.42 6.58 6.42 8.06 7.45 8.1L16.14 8.1C16.57 8.1 16.92 7.75 16.92 7.32Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:h-7 sm:w-7 sm:rounded-[50%]"
                    onClick={() => addToWishlist(flower)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="hoverable"
                        d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
                        fill="#3D3D3D"
                      />
                    </svg>
                  </button>
                  <NavLink to={`/shop/${flower.id}`}>
                    <button className=" card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:hidden sm:h-7 sm:rounded-[50%]">
                      <svg
                        width="20.000000"
                        height="20.000000"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <path
                          className="hoverable"
                          id="Vector"
                          d="M14.56 16C10.57 19.18 4.98 18.3 2.02 14.65C-0.83 11.12 -0.65 6.04 2.44 2.82C5.64 -0.51 10.68 -0.95 14.32 1.78C15.63 2.76 16.61 4 17.24 5.5C17.88 7.02 18.07 8.59 17.85 10.22C17.63 11.83 16.99 13.27 15.94 14.62C16.02 14.67 16.11 14.71 16.18 14.78C17.33 15.93 18.48 17.08 19.63 18.23C19.91 18.5 20.04 18.82 19.96 19.2C19.8 19.96 18.9 20.25 18.32 19.73C18.04 19.49 17.79 19.22 17.54 18.96C16.59 18.01 15.64 17.06 14.69 16.12C14.65 16.08 14.61 16.04 14.56 16ZM15.95 8.98C15.96 5.12 12.84 2 8.97 2C5.12 1.99 2 5.09 1.98 8.94C1.97 12.81 5.08 15.94 8.96 15.96C12.8 15.98 15.94 12.84 15.95 8.98Z"
                          fill="#3D3D3D"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-[60px] grid grid-cols-5 gap-6">
            {flowers.slice(5, 10).map((flower) => (
              <div className="card_item relative" key={flower.id}>
                <div className="h-[255px]">
                  <img
                    src={flower.online_img}
                    alt="flower image"
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[15px]">{flower.common_name}</p>
                  <p className="text-[16px] font-bold text-check">
                    ${flower.price}.00
                  </p>
                </div>
                <div className="cardbtn_group absolute right-2 top-0 z-[20] flex-col items-center justify-center gap-2 sm:bottom-auto sm:left-auto sm:right-1 sm:top-2">
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:h-7 sm:w-7 sm:rounded-[50%]"
                    onClick={() => addToCart(flower)}
                  >
                    <svg
                      width="20.000000"
                      height="19.000000"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        className="hoverable"
                        id="Vector"
                        d="M14.29 15.87L8.24 15.87C5.65 15.87 3.55 13.77 3.55 11.18L3.55 6.38C3.55 3.98 2.35 1.75 0.35 0.43C-0.01 0.19 -0.11 -0.29 0.12 -0.65C0.36 -1.01 0.85 -1.11 1.21 -0.87C2.35 -0.12 3.28 0.88 3.94 2.02C4.09 2.18 5.24 3.41 7.14 3.41L16.14 3.41C18.59 3.36 20.51 5.83 19.87 8.2L18.83 12.32C18.31 14.41 16.44 15.87 14.29 15.87ZM4.91 4.53C5.04 5.13 5.11 5.75 5.11 6.38L5.11 11.18C5.11 12.91 6.51 14.31 8.24 14.31L14.29 14.31C15.72 14.31 16.97 13.34 17.32 11.94L18.35 7.82C18.74 6.41 17.59 4.95 16.14 4.97L7.14 4.97C6.28 4.97 5.54 4.79 4.91 4.53ZM7.85 18.02C7.85 17.48 7.41 17.04 6.87 17.04C5.57 17.09 5.57 18.94 6.87 18.99C7.41 18.99 7.85 18.56 7.85 18.02ZM15.62 18.02C15.62 17.48 15.18 17.04 14.64 17.04C13.35 17.09 13.35 18.94 14.64 18.99C15.18 18.99 15.62 18.56 15.62 18.02ZM16.92 7.32C16.92 6.88 16.57 6.54 16.14 6.54L7.45 6.54C6.42 6.58 6.42 8.06 7.45 8.1L16.14 8.1C16.57 8.1 16.92 7.75 16.92 7.32Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:h-7 sm:w-7 sm:rounded-[50%]"
                    onClick={() => addToWishlist(flower)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="hoverable"
                        d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
                        fill="#3D3D3D"
                      />
                    </svg>
                  </button>
                  <NavLink to={`/shop/${flower.id}`}>
                    <button className=" card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:hidden sm:h-7 sm:rounded-[50%]">
                      <svg
                        width="20.000000"
                        height="20.000000"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <path
                          className="hoverable"
                          id="Vector"
                          d="M14.56 16C10.57 19.18 4.98 18.3 2.02 14.65C-0.83 11.12 -0.65 6.04 2.44 2.82C5.64 -0.51 10.68 -0.95 14.32 1.78C15.63 2.76 16.61 4 17.24 5.5C17.88 7.02 18.07 8.59 17.85 10.22C17.63 11.83 16.99 13.27 15.94 14.62C16.02 14.67 16.11 14.71 16.18 14.78C17.33 15.93 18.48 17.08 19.63 18.23C19.91 18.5 20.04 18.82 19.96 19.2C19.8 19.96 18.9 20.25 18.32 19.73C18.04 19.49 17.79 19.22 17.54 18.96C16.59 18.01 15.64 17.06 14.69 16.12C14.65 16.08 14.61 16.04 14.56 16ZM15.95 8.98C15.96 5.12 12.84 2 8.97 2C5.12 1.99 2 5.09 1.98 8.94C1.97 12.81 5.08 15.94 8.96 15.96C12.8 15.98 15.94 12.84 15.95 8.98Z"
                          fill="#3D3D3D"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-[60px] grid grid-cols-5 gap-6">
            {flowers.slice(10, 15).map((flower) => (
              <div className="card_item relative" key={flower.id}>
                <div className="h-[255px]">
                  <img
                    src={flower.online_img}
                    alt="flower image"
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[15px]">{flower.common_name}</p>
                  <p className="text-[16px] font-bold text-check">
                    ${flower.price}.00
                  </p>
                </div>
              <div className="cardbtn_group absolute right-2 top-0 z-[20] flex-col items-center justify-center gap-2 sm:bottom-auto sm:left-auto sm:right-1 sm:top-2">
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:h-7 sm:w-7 sm:rounded-[50%]"
                    onClick={() => addToCart(flower)}
                  >
                    <svg
                      width="20.000000"
                      height="19.000000"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        className="hoverable"
                        id="Vector"
                        d="M14.29 15.87L8.24 15.87C5.65 15.87 3.55 13.77 3.55 11.18L3.55 6.38C3.55 3.98 2.35 1.75 0.35 0.43C-0.01 0.19 -0.11 -0.29 0.12 -0.65C0.36 -1.01 0.85 -1.11 1.21 -0.87C2.35 -0.12 3.28 0.88 3.94 2.02C4.09 2.18 5.24 3.41 7.14 3.41L16.14 3.41C18.59 3.36 20.51 5.83 19.87 8.2L18.83 12.32C18.31 14.41 16.44 15.87 14.29 15.87ZM4.91 4.53C5.04 5.13 5.11 5.75 5.11 6.38L5.11 11.18C5.11 12.91 6.51 14.31 8.24 14.31L14.29 14.31C15.72 14.31 16.97 13.34 17.32 11.94L18.35 7.82C18.74 6.41 17.59 4.95 16.14 4.97L7.14 4.97C6.28 4.97 5.54 4.79 4.91 4.53ZM7.85 18.02C7.85 17.48 7.41 17.04 6.87 17.04C5.57 17.09 5.57 18.94 6.87 18.99C7.41 18.99 7.85 18.56 7.85 18.02ZM15.62 18.02C15.62 17.48 15.18 17.04 14.64 17.04C13.35 17.09 13.35 18.94 14.64 18.99C15.18 18.99 15.62 18.56 15.62 18.02ZM16.92 7.32C16.92 6.88 16.57 6.54 16.14 6.54L7.45 6.54C6.42 6.58 6.42 8.06 7.45 8.1L16.14 8.1C16.57 8.1 16.92 7.75 16.92 7.32Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:h-7 sm:w-7 sm:rounded-[50%]"
                    onClick={() => addToWishlist(flower)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="hoverable"
                        d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
                        fill="#3D3D3D"
                      />
                    </svg>
                  </button>
                  <NavLink to={`/shop/${flower.id}`}>
                    <button className=" card_btn flex h-9 w-9 items-center justify-center rounded-md bg-[white] p-1 sm:hidden sm:h-7 sm:rounded-[50%]">
                      <svg
                        width="20.000000"
                        height="20.000000"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <path
                          className="hoverable"
                          id="Vector"
                          d="M14.56 16C10.57 19.18 4.98 18.3 2.02 14.65C-0.83 11.12 -0.65 6.04 2.44 2.82C5.64 -0.51 10.68 -0.95 14.32 1.78C15.63 2.76 16.61 4 17.24 5.5C17.88 7.02 18.07 8.59 17.85 10.22C17.63 11.83 16.99 13.27 15.94 14.62C16.02 14.67 16.11 14.71 16.18 14.78C17.33 15.93 18.48 17.08 19.63 18.23C19.91 18.5 20.04 18.82 19.96 19.2C19.8 19.96 18.9 20.25 18.32 19.73C18.04 19.49 17.79 19.22 17.54 18.96C16.59 18.01 15.64 17.06 14.69 16.12C14.65 16.08 14.61 16.04 14.56 16ZM15.95 8.98C15.96 5.12 12.84 2 8.97 2C5.12 1.99 2 5.09 1.98 8.94C1.97 12.81 5.08 15.94 8.96 15.96C12.8 15.98 15.94 12.84 15.95 8.98Z"
                          fill="#3D3D3D"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PlantSlider;
