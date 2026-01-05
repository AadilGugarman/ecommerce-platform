// src/components/MultiSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedProducts() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="relative w-full pb-3 my-5 border-b-2">
      <div className="container ">
        <div className="flex items-center m-3">
          <p className="text-2xl font-bold">Featured Products</p>
        </div>

        <Slider {...settings}>
          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-pink-500 rounded-lg">
              <h3 className="text-xl font-bold">Card 1</h3>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-black bg-yellow-500 rounded-lg">
              <h3 className="text-xl font-bold">Card 2</h3>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-indigo-500 rounded-lg">
              <h3 className="text-xl font-bold">Card 3</h3>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-gray-600 rounded-lg">
              <h3 className="text-xl font-bold">Card 4</h3>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-teal-500 rounded-lg">
              <h3 className="text-xl font-bold">Card 5</h3>
            </div>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-gray-600 rounded-lg">
              <h3 className="text-xl font-bold">Card 4</h3>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-teal-500 rounded-lg">
              <h3 className="text-xl font-bold">Card 5</h3>
            </div>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-gray-600 rounded-lg">
              <h3 className="text-xl font-bold">Card 4</h3>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center h-40 text-white bg-teal-500 rounded-lg">
              <h3 className="text-xl font-bold">Card 5</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
