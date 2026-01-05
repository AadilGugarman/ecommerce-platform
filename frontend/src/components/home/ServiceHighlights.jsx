import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { LiaShippingFastSolid } from "react-icons/lia";
import { RiExchangeBoxLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { TfiGift } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";

const services = [
  {
    icon: <LiaShippingFastSolid className="text-5xl text-indigo-600" />,
    title: "Free Shipping",
    desc: "For all orders over $200",
  },
  {
    icon: <RiExchangeBoxLine className="text-4xl text-green-500" />,
    title: "7 Days Returns",
    desc: "For every product",
  },
  {
    icon: <MdPayment className="flex text-4xl text-yellow-500" />,
    title: "Secured Payment",
    desc: "All payment methods accepted",
  },
  {
    icon: <TfiGift className="text-4xl text-pink-500" />,
    title: "Special Gifts",
    desc: "For our regular customers",
  },
  {
    icon: <BiSupport className="text-4xl text-blue-500" />,
    title: "24/7 Support",
    desc: "Connect with us anytime",
  },
];

const ServiceHighlights = () => {
  return (
    <div className="container pb-3 border-b-2 ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1},   // mobile
          640: { slidesPerView: 2 },   // small screens
          768: { slidesPerView: 3 },   // tablets
          1024: { slidesPerView: 5 },  // desktop shows all 5
        }}
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx} className="px-2">
  <div className="relative z-10 flex flex-col items-center h-40 p-6 text-center transition-all duration-300 transform bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-2">
    {service.icon}
    <h3 className="mt-3 text-lg font-bold whitespace-nowrap">{service.title}</h3>
    <p className="text-sm text-gray-500">{service.desc}</p>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default ServiceHighlights;
