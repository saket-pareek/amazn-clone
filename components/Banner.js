import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <section className="relative">
      <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} showIndicators={false} showThumbs={false}>
        <div className="">
          <img src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div className="">
          <img src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div className="">
          <img src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
      <div className="absolute bottom-0 w-full z-20 h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

export default Banner;
