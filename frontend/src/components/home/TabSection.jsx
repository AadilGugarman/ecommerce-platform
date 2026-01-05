import React, { useState } from "react";
import Box from "@mui/material/Box";
import TabsHeader from "./TabsHeader";
import TabContent from "./TabContent";
import { fashionProducts, beautyProducts } from "../../data/dummyData.js";

import CategoryTabs from "../product/CategoryTabs.jsx";
import { Link } from "react-router-dom";

const TabSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Fashion",
    "Electronics",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ];

  const tabContents = [
    <CategoryTabs products={fashionProducts} />,
    <CategoryTabs products={beautyProducts} />,
  ];

  return (
    <div className="w-full">
      <div className="container flex ">
        {/* Heading */}

        <div className="flex-col hidden w-1/3 lg:flex">
          <p className="text-2xl font-bold">Popular Products</p>
          <p>Do not miss the current Offers</p>
        </div>

        <Box className="w-full m-auto rounded-md md:w-full lg:w-2/3 ">
          <TabsHeader
            value={value}
            handleChange={handleChange}
            labels={tabLabels}
          />
        </Box>
      </div>

      {tabContents.map((component, idx) => (
        <Link>
        <TabContent key={idx} value={value} index={idx} className="!w-full ">
          {component}
        </TabContent>
        </Link>
      ))}
    </div>
  );
};

export default TabSection;

//  "👜 Latest Fashion Trends and Clothing",
//     "📱 Electronics – Mobiles, Laptops, Accessories",
//     "👟 Stylish Footwear for Men & Women",
//     "🛒 Fresh Groceries at Best Prices",
//     "💄 Beauty & Cosmetics Collections",
//     "💪 Health & Wellness Essentials",
//     "💍 Elegant Jewellery Designs",
