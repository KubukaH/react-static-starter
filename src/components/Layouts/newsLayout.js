import * as React from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const NewsLayout = () => {

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
          Twaabane
        </Box>
        <Box
          sx={{
            color: "text.base",
            fontWeight: 200,
            fontSize: 14,
            fontFamily: "Elephant Regular",
            pt: 5
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
          News - Online
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}

export default NewsLayout;