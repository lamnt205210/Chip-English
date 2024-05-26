import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ marginTop: "20px" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const SemesterTab = ({ semester, setSemester }) => {
  const [value, setValue] = useState(semester - 1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSemester(newValue + 1);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: "#ffffff", // White background for the tabs container
          borderRadius: "8px", // Rounded corners for the tab container
          "& .MuiTab-root": {
            minWidth: "100px", // Each tab is ~100px wide
            padding: "10px 16px",
            fontSize: "16px",
            fontFamily: "Cabin, sans-serif",
            textTransform: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            color: "#000000", // Black text color for tabs
            backgroundColor: "#ffffff", // White background for tabs
            borderRadius: "8px", // Adding borderRadius to all tabs
            "&.Mui-selected": {
              color: "#ffffff", // White text color for selected tab
              backgroundColor: "#21bdc6", // Background color for selected tab
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px", // Ensuring selected tab has rounded corners
            },
          },
          "& .MuiTabs-indicator": {
            display: "none", // Remove the default indicator
          },
        }}
      >
        <Tab label="Học kì 1" />
        <Tab label="Học kì 2" />
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        <Box
          sx={{
            p: 2,
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h6">Học kì 1 Content</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            p: 2,
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h6">Học kì 2 Content</Typography>
        </Box>
      </TabPanel> */}
    </div>
  );
};

export default SemesterTab;
