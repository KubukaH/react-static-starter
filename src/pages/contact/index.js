import * as React from "react";

// MUI components
import Box from "@mui/material/Box";
import { getImageById } from "../../settings/images";

const ContactIndex = () => {
  const image = getImageById("basilwizi-trust-offices-in-binga-center")
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: ["95%", 9/10],
        py: 3,
        mx: "auto",
        minHeight: ["100%", "50vh"],
        alignItems: "center"
      }}
    >
      <Box
        sx={{ 
          color: "text.base", 
          fontSize: ["7vw", "3.5vw"], 
          fontWeight: 300,
          fontFamily: "Algerian", 
          mb: "16px"
        }}
      >
        Contact Info
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          width: "100%",
          height: "100%",
          border: "0.25px dotted #a0a465",
          borderRadius: "16px",
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src={image.img}
          alt={image.title}
          sx={{
            width: ["100%", "60%"],
            height: ["60%", null]
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: ["100%", "40%"],
            height: "100%"
          }}
        >
          <Box
            sx={{ 
              color: "text.base", 
              fontSize: 20, 
              fontWeight: "bold",
              p: "16px",
              bgcolor: "background.basilwiziTransparent",
              width: "100%"
            }}
          >
            Physical Address
          </Box>
          <Box
            sx={{ 
              color: "text.base",
              fontSize: 16, 
              fontWeight: "medium",
              my: "16px",
              pl: "16px",
            }}
          >
            Stand 291, Binga, Zimbabwe
          </Box>
          <Box
            sx={{ 
              color: "text.base", 
              fontSize: 16, 
              fontWeight: "medium",
              mb: "16px",
              pl: "16px",
            }}
          >
            +263 15 356 or 366
          </Box>
          <Box
            sx={{ 
              color: "text.base", 
              fontSize: 16, 
              fontWeight: "medium",
              mb: "16px",
              pl: "16px",
            }}
          >
            bast-binga@basilwizi.org
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactIndex;