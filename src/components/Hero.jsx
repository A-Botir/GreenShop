import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <section className=" pb-[300px] pt-[165px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="container">
            <h4 className="mb-[14px] text-[20px] uppercase">
              Face Makeup Brush
            </h4>
            <h2 className="font-raleway text-[50px] ">Skincare Brush Set</h2>
            <h2 className="font-raleway text-[50px] ">Sale 30% Off</h2>
            <button className=" font-raleway mt-[45px] border border-[#111111] px-8 py-4 font-medium uppercase hover:bg-[#111111] hover:text-[white]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <h4 className="mb-[14px] text-[20px] uppercase">
              Face Makeup Brush
            </h4>
            <h2 className="font-raleway text-[50px] ">
              The Best Skin Care Product
            </h2>
            <h2 className="font-raleway text-[50px] ">The Benefit Is 2 In 1</h2>
            <button className=" font-raleway mt-[45px] border border-[#111111] px-8 py-4 font-medium uppercase hover:bg-[#111111] hover:text-[white]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <h4 className="mb-[14px] text-[20px] uppercase">
              Face Makeup Brush
            </h4>
            <h2 className="font-raleway text-[50px] ">
              It Has A Rejuvenating Effect
            </h2>
            <h2 className="font-raleway text-[50px] ">Free Consultation</h2>
            <button className=" font-raleway mt-[45px] border border-[#111111] px-8 py-4 font-medium uppercase hover:bg-[#111111] hover:text-[white]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
