import { useLocation } from "react-router-dom";
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

import Slide1 from "../assets/images/photos/main/card/image  5.jpg";
import Slide2 from "../assets/images/photos/main/card/image  6.jpg";
import Slide3 from "../assets/images/photos/main/card/image  7.jpg";

const PlantSlider = () => {
  const location = useLocation();

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
            <div>
              <div>
                <img src={Slide1} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide1} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide1} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide1} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide1} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-[60px] grid grid-cols-5 gap-6">
            <div>
              <div>
                <img src={Slide2} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide2} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide2} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide2} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide2} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-[60px] grid grid-cols-5 gap-6">
            <div>
              <div>
                <img src={Slide3} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide3} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide3} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide3} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Slide3} alt="" className="object-contain" />
              </div>
              <div className="mt-5">
                <p className="text-[15px]">Beach Spider Lily</p>
                <p className="text-[16px] font-bold text-check">$129.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PlantSlider;
