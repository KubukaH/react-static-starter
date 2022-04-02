import * as React from "react";
import { Link, Outlet } from "react-router-dom";

// MUI imports
import { Box } from '@mui/system';

// Local imports
import Header from "../header";
import FooterComponent from "../footer";

const AppLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          mobile: 512,
          laptop: "100vh"
        },
        bgcolor: "#f9faef",
        p: 0,
        m: 0,
        borderRadius: "0px !important",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Header />
      <Outlet />
      <FooterComponent />
    </Box>
  );
}

export default AppLayout;