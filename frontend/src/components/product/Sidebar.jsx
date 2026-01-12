import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

const Sidebar = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  /* ================= URL → STATE ================= */

  const brandsFromURL =
    searchParams.get("brand")?.split(",") || [];

  const stockFromURL =
    searchParams.get("stock")?.split(",") || [];

  const priceFromURL = searchParams.get("price")
    ? searchParams.get("price").split("-").map(Number)
    : [0, 10000];

  const [selectedBrands, setSelectedBrands] = useState(brandsFromURL);
  const [availability, setAvailability] = useState(stockFromURL);
  const [price, setPrice] = useState(priceFromURL);

  /* 🔁 SYNC URL → UI (REFRESH / BACK SAFE) */
  useEffect(() => {
    setSelectedBrands(brandsFromURL);
    setAvailability(stockFromURL);
    setPrice(priceFromURL);
  }, [searchParams.toString()]);

  /* ================= STATE → URL ================= */

  const updateURL = ({
    brands = selectedBrands,
    stock = availability,
    priceRange = price,
  }) => {
    const params = new URLSearchParams(searchParams);

    brands.length
      ? params.set("brand", brands.join(","))
      : params.delete("brand");

    stock.length
      ? params.set("stock", stock.join(","))
      : params.delete("stock");

    params.set("price", `${priceRange[0]}-${priceRange[1]}`);

    setSearchParams(params);
  };

  /* ================= HANDLERS ================= */

  const toggleItem = (value, list, setList, key) => {
    const updated = list.includes(value)
      ? list.filter((v) => v !== value)
      : [...list, value];

    setList(updated);
    updateURL({ [key]: updated });
  };

  const handlePriceChange = (_, newValue) => {
    setPrice(newValue);
    updateURL({ priceRange: newValue });
  };

  const clearAll = () => {
    setSelectedBrands([]);
    setAvailability([]);
    setPrice([0, 10000]);

    const params = new URLSearchParams(searchParams);
    params.delete("brand");
    params.delete("stock");
    params.delete("price");

    setSearchParams(params);
  };

  /* ================= CATEGORY → BRAND AUTO FILTER ================= */

  const brandMap = {
    fashion: ["Nike", "Adidas", "Puma", "Zara"],
    electronics: ["Apple", "Samsung", "Sony", "Boat"],
    beauty: ["Lakme", "Loreal", "Maybelline"],
  };

  const brands = brandMap[category] || [];

  return (
    <aside className="w-full">
      {/* Filters */}
      <div className="p-3 overflow-auto bg-gray-100 border h-[550px] space-y-4 sidebar-scrollbar">

        {/* Brand Filter */}
        {brands.length > 0 && (
          <div>
            <h2 className="mb-2 text-lg font-semibold">Brand</h2>

            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      toggleItem(
                        brand,
                        selectedBrands,
                        setSelectedBrands,
                        "brands"
                      )
                    }
                  />
                }
                label={<span className="text-sm">{brand}</span>}
              />
            ))}
          </div>
        )}

        {/* Availability */}
        <div>
          <h2 className="mb-2 text-lg font-semibold">Availability</h2>

          {["in", "out"].map((status) => (
            <FormControlLabel
              key={status}
              control={
                <Checkbox
                  size="small"
                  checked={availability.includes(status)}
                  onChange={() =>
                    toggleItem(
                      status,
                      availability,
                      setAvailability,
                      "stock"
                    )
                  }
                />
              }
              label={
                <span className="text-sm">
                  {status === "in" ? "In Stock" : "Out of Stock"}
                </span>
              }
            />
          ))}
        </div>

        {/* Price Slider */}
        <div>
          <h2 className="mb-2 text-lg font-semibold">Price</h2>

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

        {/* Clear All */}
        <button
          onClick={clearAll}
          className="w-full py-2 mt-3 text-sm text-white bg-gray-800 rounded"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
