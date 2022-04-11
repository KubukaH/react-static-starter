import * as React from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import { getImageById } from "../../settings/images";

const NewsLayout = ({ title }) => {
  const image = getImageById("basilwizi-ict-logo");

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
            fontSize: 40,
            fontFamily: "Elephant Regular"
          }}
        >
          Twaabane Times
        </Box>
        <Box
          sx={{
            color: "text.base",
            fontWeight: 200,
            fontSize: 14,
            fontFamily: "Elephant Regular",
            pt: 2
          }}
        >
          &copy;
        </Box>
        <Box
          sx={{
            color: "text.base",
            fontWeight: 200,
            fontSize: 40,
            fontFamily: "Elephant Regular",
            ml: 5,
            display: { xs: "none", md: "block" }
          }}
        >
          | {title}
        </Box>
      </Box>
      <Box
        p={1}
        sx={{
          borderTop: "1px solid purple",
          borderBottom: "3.5px solid purple",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: 1
        }}
      >
        <Box
          component="img"
          src={image.img}
          alt="LogoICT"
          sx={{ width: .20, height: 1 }}
        />
        <Box
          sx={{
            fontSize: 10,
            fontFamily: "Heebo",
            fontWeight: "medium",
            width: 1,
            textAlign: "justify",
          }}
        >
          The newsletter name is derived from a Tonga word "Twaabane" which means "sharing". This newsletter is called as such because its intention is to improve information dissemination, sharing and access in the Zambezi valley. It is prepared and published by Tonga.Online ICT and Cultural Promotion Project. The project operates under Basilwizi Trust.<br/><br/>
          iKwaabana
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default NewsLayout;