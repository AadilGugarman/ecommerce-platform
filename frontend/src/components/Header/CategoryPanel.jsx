import React, { useState , Fragment} from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";

import { RiMenu3Line } from "react-icons/ri";
import { TfiAngleDown, TfiAngleRight } from "react-icons/tfi";

const categories = [
  {
    name: "Fashion",
    children: [
      { name: "Men", children: ["Shirts", "Pants", "Shoes"] },
      { name: "Women", children: ["Dresses", "Bags", "Jewelry"] },
    ],
  },
  { name: "Jewellery", children: ["Rings", "Necklaces", "Bracelets"] },
  { name: "Watches" },
  {
    name: "Outerwear",
    children: ["Jackets", "Coats"],
  },
  { name: "Cosmetics" },
  { name: "Accessories" },
  { name: "Electronic" },
  { name: "Furniture" },
  { name: "Sunglasses" },
  { name: "Rolling Diamond" },
  { name: "Xbox Controller" },
  { name: "Leather Watch" },
  { name: "Smart Tablet" },
  { name: "Purse" },
  { name: "Sunglasses" },
];

const CategoryPanel = () => {
 
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleToggle = (category) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

const renderCategories = (items) => (
  <List>
    {items.map((item) => (
      <Fragment key={item.name || item}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => item.children && handleToggle(item.name)}
          >
            <ListItemText
              primary={
                <Link
                  href={`/${item.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-black hover:text-blue-600"
                >
                  {item.name || item}
                </Link>
              }
            />
            {item.children &&
              (submenuOpen[item.name] ? (
                <TfiAngleDown />
              ) : (
                <FaRegPlusSquare />
              ))}
          </ListItemButton>
        </ListItem>
        {item.children && (
          <Collapse in={submenuOpen[item.name]} timeout="auto" unmountOnExit>
            <Box sx={{ pl: 4 }}>
              {Array.isArray(item.children)
                ? renderCategories(
                    item.children.map((c) =>
                      typeof c === "string" ? { name: c } : c
                    )
                  )
                : null}
            </Box>
          </Collapse>
        )}
      </Fragment>
    ))}
  </List>
);



  return (
    <div>
      <Button
        className="!font-bold flex items-center gap-1 !text-black w-full justify-start whitespace-normal
        "
        onClick={toggleDrawer(true)}
      >
        <RiMenu3Line className="text-3xl" />
        SHOP BY CATEGORIES
        <TfiAngleDown className="ml-2 " />
      </Button>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        className="flex items-center justify-between"
      >
        <Box className="flex items-center justify-between p-4 w-72">
          <h2 className="text-lg font-bold ">Shop by Categories</h2>
          <button
            className="text-gray-700 hover:text-black"
            onClick={toggleDrawer(false)}
          >
            <MdClose className="text-3xl" />
          </button>
        </Box>

        {renderCategories(categories)}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
