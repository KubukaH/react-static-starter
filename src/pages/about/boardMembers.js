import * as React from "react";

// MUI components
import Box from "@mui/material/Box";

// Local Imports
import di from "../../tools/media/images/blank-avatar.jpg";

const board = [
  {
    name: "Isaac Mumpande",
    role: "Board Chair",
    image: di
  },
  {
    name: "Clemencia Sianyuka",
    role: "Board Secretary",
    image: di
  },
  {
    name: "Enos Kawina",
    role: "Board treasurer",
    image: di
  },
  {
    name: "Boniface S.  Mutale",
    role: "Member",
    image: di
  },
  {
    name: "Dickson Mundia",
    role: "Member",
    image: di
  },
  {
    name: "Fanuel Cumanzala",
    role: "Member",
    image: di
  },
  {
    name: "Chief Simuchembu",
    role: "Member",
    image: di
  },
  {
    name: "Chief Negandi",
    role: "Member",
    image: di
  },
  {
    name: "Mathias Munzabwa",
    role: "Member",
    image: di
  },
  {
    name: "Mwendo Siakwenga",
    role: "Member",
    image: di
  },
  {
    name: "Letween Siadyobbe",
    role: "Member",
    image: di
  },
];

const BoardMembers = () => {
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
          color: "text.primary", fontSize: 28, fontWeight: "medium",
          textDecoration: "underline", textAlign: "center"
        }} 
      >
        Board Members
      </Box>
      {
        board.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              borderBottom: "1.5px dashed #a0a465",
              justifyContent: "space-between",
              py: 4,
              alignItems: "center"
            }}
          >
            <Box
              sx={{ 
                color: "primary.main", 
                fontSize: 17, 
                fontWeight: "medium",
                textDecoration: "none",
                "&:hover,&:focus": {
                  textDecoration: "underline dotted red",
                  color: "text.warning"
                }
              }}
            >
              {item.name}
            </Box>
            <Box
              sx={{ 
                color: "primary.main", 
                fontSize: 17, 
                fontWeight: "medium",
              }}
            >
              {item.role}
            </Box>
            <Box
              component="img"
              sx={{
                height: "100%",
                maxHeight: ["35px", "50px"]
              }}
              src={item.image}
              alt={item.name}
            />
          </Box>

        ))
      }
    </Box>
  );
}

export default BoardMembers;