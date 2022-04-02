import * as React from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const AboutLayout = () => {
  return (
    <Box 
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        py: 4,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Outlet />
    </Box>
  )
}

export default AboutLayout;