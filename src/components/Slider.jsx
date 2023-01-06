import React from "react";
import { Carousel } from "antd";
import Logo from "../assets/logo.png";
import Slide1 from "../assets/naira.png";
import Bank from "../assets/bank.JPG";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
const Slider = () => (
  <Carousel autoplay>
    <div>
      <img src={Logo} alt="Logo" className="w-full h-[160px]" />
    </div>
    <div>
      <img src={Slide1} alt="Logo" className="h-[160px]" />
    </div>
    <div>
    <img src={Bank} alt="Logo" className="h-[160px]" />
    </div>
    <div>
      <h3 className="h-[160px] text-white text-center bg-red-600 font-semibold text-xl">
        4
      </h3>
    </div>
    <div>
      <img src={Slide3} alt="Logo" className="w-full h-[160px]" />
    </div>
  </Carousel>
);

export default Slider;
