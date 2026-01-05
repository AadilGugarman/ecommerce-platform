import React from "react";
import FreeShipping from "../components/home/FreeShipping";
import TabSection from "../components/home/TabSection";
import FeaturedProducts from "../components/Slider/FeaturedProducts";
import ServiceHighlights from "../components/home/ServiceHighlights";
import SliderSection from "../components/Slider/SliderSection";

const Home = () => {
  return (
    <div>
      <SliderSection />
      <FreeShipping />
      <TabSection />
      <FeaturedProducts />
      <ServiceHighlights />
    </div>
  );
};

export default Home;
