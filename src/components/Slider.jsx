import React from "react";
import { Carousel } from "antd";
import Logo from "../assets/logo.png";
import Slide1 from "../assets/naira.png";
import Bank from "../assets/bank.JPG";
import Slide2 from "../assets/banner1.jpeg";
import Slide3 from "../assets/codeBanner.jpeg";
import Slide4 from "../assets/qrBanner.jpeg";
const Slider = () => (
  <Carousel autoplay>
    <div className="w-full h-full">
      <img src={Logo} alt="Logo" className="h-[200px]" />
    </div>
    <div className="w-full h-full">
      <img src={Slide1} alt="Logo" className="h-[200px]" />
    </div>
    <div className="w-full h-full">
      <img src={Bank} alt="Logo" className="h-[200px]" />
    </div>
    <div className="w-full h-full">
      <img src={Slide2} alt="Logo" className="h-[200px]" />
    </div>
    <div className="w-full h-full">
      <img src={Slide3} alt="Logo" className=" h-[200px]" />
    </div>
    <div className="w-full h-full">
      <img src={Slide4} alt="Logo" className=" h-[200px]" />
    </div>
  </Carousel>
);

export default Slider;
