import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../assets/logo.png";
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-[150px] object-cover m-4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Slide1}
              alt="Logo"
              className="w-full h-[150px] object-cover m-4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Slide2}
              alt="Logo"
              className="w-full h-[150px] object-cover m-4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Slide3}
              alt="Logo"
              className="w-full h-[150px] object-cover m-4"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
