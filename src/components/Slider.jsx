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
          <div className="w-[500px] h-[150px]">
            <img src={Logo} alt="Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[500px] h-[150px]">
            <img src={Slide1} alt="Logo" />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                German
                <font color="#d38019">
                  {" "}
                  blocked <br /> account{" "}
                </font>{" "}
                provided
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Open and get your blocked account settled at a
                <br /> faster pace through German bureacracy in just <br /> one
                click
              </p>
            </div>
            <div className="w-[433px] h-[433px] mt-4">
              <img src={Slide2} alt="Logo" />
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                Free German
                <br />
                <font color="#d38019"> language </font> tutorials!
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Open and get your blocked account settled at a
                <br /> faster pace through German bureacracy in just <br /> one
                click
              </p>
            </div>
            <div className="w-[401px] h-[529px] mt-4">
              <img src={Slide3} alt="Logo" />
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="w-full flex items-center justify-around bg-img1 bg-cover bg-center">
            <div className="m-4">
              <p className="text-6xl font-semibold ">
                Digital
                <font color="#d38019"> companion </font> <br />
                for your stay!
              </p>
              <p className="mt-6 text-2xl text-[#555351]">
                Open and get your blocked account settled at a
                <br /> faster pace through German bureacracy in just <br /> one
                click
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
