import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Slider from "@mui/material/Slider";

const Sidebar = () => {
  const { category } = useParams();
  const [price, setPrice] = useState([200, 5000]);
  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };
  return (
    <aside className="w-full">
      {/* Breadcrumbs */}
      <div className="ml-2">
        <Breadcrumbs aria-label="breadcrumb" className="bg-inherit">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>

          <span className="font-semibold text-blue-800 capitalize">
            {category}
          </span>
        </Breadcrumbs>
      </div>

      {/* Filters */}
      <div className="p-3 overflow-auto bg-gray-100 border h-[550px] space-y-2 sidebar-scrollbar">
        {/* Categories */}
        <div className="flex flex-col">
          <h2 className="mb-2 text-lg font-semibold">Shop By Categories</h2>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Fashion</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Electronics</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Bags</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Shoes</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Accessories</span>}
          />
        </div>

        {/* Availability */}
        <div className="flex flex-col">
          <h2 className="mb-2 text-lg font-semibold">Availability</h2>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">In Stock</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Out of Stock</span>}
          />
        </div>

        {/* Price Range */}
        <div className="flex flex-col">
          <h2 className="mb-2 text-lg font-semibold">Price Range</h2>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Under $50</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">$50 - $100</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">$100 - $200</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Above $200</span>}
          />
        </div>

        {/* <div className="flex flex-col">
          <h2 className="mb-2 text-lg font-semibold">Brand</h2>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Nike</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Adidas</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Puma</span>}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-sm">Zara</span>}
          />
        </div> */}

        <div>
          <h2 className="mb-2 text-lg font-semibold">Price Range</h2>
          <Slider
            value={price}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{price[0]}</span>
            <span>₹{price[1]}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
