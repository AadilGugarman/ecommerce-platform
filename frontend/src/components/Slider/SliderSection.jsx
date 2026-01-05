import React from "react";
import CustomSlider from "./CustomSlider";

const SliderSection = () => {
  const slider1 = [
    { title: "Ad 1", image: "https://via.placeholder.com/600x300", link: "/" },
    { title: "Ad 2", image: "https://via.placeholder.com/600x300", link: "/" },
    { title: "Ad 3", image: "https://via.placeholder.com/600x300", link: "/" },
  ];

  const slider2 = [
    {
      title: "Product 1",
      image: "https://via.placeholder.com/200x200",
      link: "/product/1",
    },
    {
      title: "Product 2",
      image: "https://via.placeholder.com/200x200",
      link: "/product/2",
    },
    {
      title: "Product 3",
      image: "https://via.placeholder.com/200x200",
      link: "/product/3",
    },
    {
      title: "Product 1",
      image: "https://via.placeholder.com/200x200",
      link: "/product/1",
    },
    {
      title: "Product 2",
      image: "https://via.placeholder.com/200x200",
      link: "/product/2",
    },
    {
      title: "Product 3",
      image: "https://via.placeholder.com/200x200",
      link: "/product/3",
    },
    {
      title: "Product 3",
      image: "https://via.placeholder.com/200x200",
      link: "/product/3",
    },
  ];

  return (
    <div>
      <CustomSlider
        title="Top Ads"
        items={slider1}
        height="h-72"
        slidesToShow={1}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]}
      />

      <CustomSlider
        title="Featured Products"
        items={slider2}
        height="h-40"
        slidesToShow={6}
        responsive={[
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]}
      />
    </div>
  );
};

export default SliderSection;
