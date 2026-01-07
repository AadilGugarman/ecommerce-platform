import {
  Dashboard,
  Category,
  Inventory2,
  People,
  ReceiptLong,
  Image,
  Article,
  Settings,
} from "@mui/icons-material";

export const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
    path: "dashboard",
    permission: "dashboard",
  },
  {
    label: "Categories",
    icon: <Category />,
    path: "categories",
    permission: "categories",
  },
  {
    label: "Products",
    icon: <Inventory2 />,
    path: "products",
    permission: "products",
  },
  {
    label: "Users",
    icon: <People />,
    path: "users",
    permission: "users",
  },
  {
    label: "Orders",
    icon: <ReceiptLong />,
    path: "orders",
    permission: "orders",
  },
  {
    label: "Blogs",
    icon: <Article />,
    path: "blogs",
    permission: "blogs",
  },
  {
    label: "Banners",
    icon: <Image />,
    path: "banners",
    permission: "banners",
  },
];

export const SETTINGS_ITEM = {
  label: "Settings",
  icon: <Settings />,
  path: "settings",
  permission: "settings",
};

