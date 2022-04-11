import * as React from "react";

// MUI components
import Box from "@mui/material/Box";

const AdvisoryCouncil = () => {
  return (
    <Box
      p={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: ["95%", 3/4],
        height: "100%",
        py: 4,
        px: [4, 0],
        mx: "auto",
        alignItems: "center"
      }}
    >
      <Box 
        sx={{ 
          color: "text.base", 
          fontSize: ["7vw", "3.5vw"], 
          fontWeight: 300,
          textAlign: "center",
          fontFamily: "Algerian",
        }} 
      >
        Advisory Council
      </Box>
      <Box
        sx={{ 
          color: "primary.main", 
          fontSize: 16, 
          fontWeight: "medium",
          textDecoration: "none",
          "&:hover,&:focus": {
            textDecoration: "underline dotted blue",
            color: "text.warning"
          },
          my: 10,
          textAlign: "justify"
        }}
      >
        The Advisory Committee plays a liaison and advisory role to the Board and Management. The Advisory committee technically assess progress in implementation and provide advices on programming issues and the Board and management on emerging issues. membersship to this structure is at the instance of the board which  considers individual's community standing, knowledge, skills and experience on issues relevant to Basilwizi work.
      </Box>
    </Box>
  );
}

export default AdvisoryCouncil;