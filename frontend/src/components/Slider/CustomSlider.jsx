import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./slider.css";

const CustomSlider = ({
  title,
  items,
  height,
  slidesToShow,
  responsive = [],
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive,
  };

  return (
    <div className="relative w-full pb-3 my-5 border-b-2">
      {title && <h2 className="m-3 text-xl font-semibold">{title}</h2>}

      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={idx} className="px-2">
            {item.link ? (
              <Link to={item.link}>
                <div
                  className={`flex items-center justify-center rounded-lg ${height} bg-gray-200 overflow-visible`}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                  {item.title && (
                    <div className="absolute text-xl font-bold text-white">
                      {item.title}
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <div
                className={`flex items-center justify-center rounded-lg ${height} bg-gray-200`}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                )}
                {item.title && (
                  <div className="absolute text-xl font-bold text-white">
                    {item.title}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
