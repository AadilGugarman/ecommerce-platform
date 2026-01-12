import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import { MdClose } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";

/* 🔥 FULL & RICH CATEGORY TREE */
const categories = [
  {
    name: "Fashion",
    count: 128,
    children: [
      {
        name: "Men",
        count: 46,
        children: [
          { name: "Shirts", count: 18 },
          { name: "Pants", count: 14 },
          { name: "Shoes", count: 14 },
        ],
      },
      {
        name: "Women",
        count: 32,
        children: [
          { name: "Dresses", count: 12 },
          { name: "Bags", count: 10 },
          { name: "Jewelry", count: 10 },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    count: 56,
    children: [
      { name: "Mobiles", count: 20 },
      { name: "Laptops", count: 16 },
      { name: "Headphones", count: 20 },
    ],
  },
  {
    name: "Jewellery",
    count: 34,
    children: [
      { name: "Rings", count: 12 },
      { name: "Necklaces", count: 11 },
      { name: "Bracelets", count: 11 },
    ],
  },
  {
    name: "Furniture",
    count: 22,
    children: [
      { name: "Beds", count: 8 },
      { name: "Sofas", count: 7 },
      { name: "Tables", count: 7 },
    ],
  },
  {
    name: "Accessories",
    count: 31,
    children: [
      { name: "Belts", count: 10 },
      { name: "Wallets", count: 11 },
      { name: "Sunglasses", count: 10 },
    ],
  },
  { name: "Watches", count: 21 },
  { name: "Cosmetics", count: 27 },
  { name: "Outerwear", count: 18 },
];

const slugify = (v) => v.toLowerCase().replace(/\s+/g, "-");

const CategoryPanel = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const activeCategory = location.pathname.split("/")[2];
  const activeSub = params.get("sub");
  const activeType = params.get("type");

  /* 🔥 AUTO-EXPAND ACTIVE CATEGORY / SUB */
  useEffect(() => {
    const map = {};
    if (activeCategory) map[activeCategory] = true;
    if (activeSub) map[activeSub] = true;
    setSubmenuOpen(map);
  }, [activeCategory, activeSub]);

  const toggleDrawer = (v) => () => setOpen(v);

  const toggleNode = (key) =>
    setSubmenuOpen((p) => ({ ...p, [key]: !p[key] }));

  const goCategory = (cat) => {
    navigate(`/category/${slugify(cat)}`);
    setOpen(false);
  };

  const goSub = (cat, sub) => {
    navigate(`/category/${slugify(cat)}?sub=${slugify(sub)}`);
    setOpen(false);
  };

  const goType = (cat, sub, type) => {
    navigate(
      `/category/${slugify(cat)}?sub=${slugify(sub)}&type=${slugify(type)}`
    );
    setOpen(false);
  };

  const renderTree = (items, parentCat = null, parentSub = null) => (
    <List>
      {items.map((item) => {
        const slug = slugify(item.name);
        const hasChildren = !!item.children;

        const isActive =
          slug === activeCategory ||
          slug === activeSub ||
          slug === activeType;

        return (
          <Fragment key={item.name}>
            <ListItem disablePadding>
              <ListItemButton
                className={`transition-all ${
                  isActive ? "bg-blue-100 font-semibold" : ""
                }`}
              >
                {/* ✅ TEXT CLICK → NAVIGATION */}
                <ListItemText
                  primary={`${item.name} (${item.count})`}
                  className="cursor-pointer"
                  onClick={() =>
                    parentSub
                      ? goType(parentCat, parentSub, item.name)
                      : parentCat
                      ? goSub(parentCat, item.name)
                      : goCategory(item.name)
                  }
                />

                {/* ✅ ICON CLICK → TOGGLE ONLY */}
                {hasChildren && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleNode(slug);
                    }}
                    className="cursor-pointer"
                  >
                    {submenuOpen[slug] ? (
                      <TfiAngleDown />
                    ) : (
                      <FaRegPlusSquare />
                    )}
                  </span>
                )}
              </ListItemButton>
            </ListItem>

            {hasChildren && (
              <Collapse in={submenuOpen[slug]} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 3 }}>
                  {renderTree(
                    item.children,
                    parentCat || item.name,
                    parentCat ? item.name : null
                  )}
                </Box>
              </Collapse>
            )}
          </Fragment>
        );
      })}
    </List>
  );

  return (
    <div>
      <Button
        className="!font-bold flex items-center gap-1 !text-black w-full justify-start"
        onClick={toggleDrawer(true)}
      >
        <RiMenu3Line className="text-3xl" />
        SHOP BY CATEGORIES
        <TfiAngleDown className="ml-2" />
      </Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box className="flex items-center justify-between p-4 w-72">
          <h2 className="text-lg font-bold">Shop by Categories</h2>
          <button onClick={toggleDrawer(false)}>
            <MdClose className="text-3xl" />
          </button>
        </Box>

        {renderTree(categories)}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
