import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsClasses } from "@mui/material/Tabs";

const TabsHeader = ({ value, handleChange, labels }) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      aria-label="visible arrows tabs example"
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.3 },
        },
        [`& .MuiTab-root`]: {
          // Default size
          fontSize: "1rem",
          minWidth: 100,
          padding: "6px 12px",
          // Responsive for mobile (smaller screens)
          "@media (max-width:600px)": {
            fontSize: "0.75rem",
            minWidth: 70,
            padding: "4px 8px",
          },
        },
      }}
    >
      {labels.map((label, idx) => (
        <Tab key={idx} label={label} />
      ))}
    </Tabs>
  );
};

export default TabsHeader;
