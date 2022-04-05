import * as React from "react";

// MUI components
import Box from "@mui/material/Box";
import OpenRoute from "../components/routes/authRoute";

const AccountIndex = ({ leftText, rightText, rightComponent, leftLinks }) => {
  return (
    <OpenRoute>
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
            display: "flex",
            flexDirection: ["column", "row"],
            width: "100%",
            height: "100%",
            border: "1px dotted #a0a465",
            overflow: "hidden",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px"
          }}
        >
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.basilwiziColor",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 4
            }}
          >
            <Box
              sx={{ color: "text.basilwiziTransparent", fontSize: 22, fontWeight: "medium", textAlign: "justify" }}
            >
              {leftText}
            </Box>
            <Box
              component="h4"
              sx={{ color: "text.secondary", fontWeight: 100}}
            >
              Do not share your passwords. We use a strong OAuth strategy.
            </Box>
            <Box 
              p={2}
              sx={{
                borderTop: "8px solid blue",
                borderRadius: 10,
                width: "100%"
              }}
            >
              {leftLinks}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
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
            {rightText}
            </Box>
            {rightComponent}
          </Box>
        </Box>
      </Box>
    </OpenRoute>
  );
}

export default AccountIndex;