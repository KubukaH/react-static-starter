import * as React from "react";
import { Outlet } from "react-router-dom";

// MUI components
import Box from "@mui/material/Box";

const AccountLayout = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "95%",
        height: "96%",
        m: "auto"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start"
        }}
      >
        <Box
          sx={{
            color: "text.base",
            fontWeight: 200,
            fontSize: 52,
            fontFamily: "Elephant Regular"
          }}
        >
          Basilwizi Trust
        </Box>
        <Box
          sx={{
            color: "text.base",
            fontWeight: 200,
            fontSize: 14,
            fontFamily: "Elephant Regular",
            verticalAlign: "sup",
            display: "inline"
          }}
        >
          &copy;
        </Box>
        <Box
          sx={{
            color: "text.base",
            fontWeight: 200,
            fontSize: 52,
            fontFamily: "Elephant Regular",
            ml: 5,
            display: { xs: "none", md: "block" }
          }}
        >
          | {title}
        </Box>
      </Box>
      {/**
       * Applying feaures and Fixes
       */}
       <Outlet />
    </Box>
  );
}

export default AccountLayout;
