import * as React from "react";

// MUI components
import Box from "@mui/material/Box";

// Local Imports
import di from "../../tools/media/images/blank-avatar.jpg";

const employees = [
  {
    name: "Danisa Mudimba",
    email: "danisam.basilwizi@gmail.com",
    role: "Programmes Manager",
    image: di
  },
  {
    name: "Argument Mungombe",
    email: "argumentm.basilwizi@gmail.com",
    role: "Finance & Admin Officer ",
    image: di
  },
  {
    name: "Gayson Siampongo",
    email: "gaysons.basilwizi@gmail.com",
    role: "Programmes Officer",
    image: di
  },
];

const Secretariat = () => {
  return (
    <Box
      p={0}
    >
      <Box 
        sx={{ 
          color: "text.base", 
          fontSize: ["5vw", "3.5vw"], 
          fontWeight: 300,
          textAlign: "center",
          fontFamily: "Algerian", 
        }} 
      >
        Secretariat and Management
      </Box>
      <Box
        component="div"
        sx={{
          width: ['90%','90%', .5],
          height: [416, 512],
          display:"flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: 4,
          mx: "auto",
          my: 5,
          bgcolor: "background.basilwiziColor",
          color: "ghostwhite"
        }}
      >
        <Box
          component="img"
          src={di}
          alt="Director"
          sx={{
            width: "100%",
            height: .7
          }}
        />
        <Box
          sx={{
            fontSize: 26, fontWeight: "medium", color: "inherit", py: 3
          }}
        >
          Director
        </Box>
        <Box
          sx={{
            fontSize: 16, fontWeight: "medium", color: "inherit"
          }}
        >
          Christopher Mweembe
        </Box>
        <Box
          sx={{
            fontSize: 12, fontWeight: "medium", color: "inherit"
          }}
        >
          christopherm.basilwizi@gmail.com
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ['repeat(1, 1fr)','repeat(3, 1fr)'],
          columnGap: 5,
          rowGap: 5,
          my: 4,
          mx: 5,
        }}
      >
        {
          employees.map((e) => (
            <Box
              key={e.name}
              sx={{
                width: [.75, 1],
                height: [360, 400],
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                boxShadow: 4,
                mx: ["auto"],
                bgcolor: "background.basilwiziColor",
                color: "ghostwhite"
              }}
            >
              <Box
                component="img"
                src={e.image}
                alt={e.name}
                sx={{
                  width: "100%",
                  height: .7
                }}
              />
              <Box
                sx={{
                  fontSize: ["4vw", "1.6vw"], 
                  fontWeight: "medium", 
                  color: "inherit", 
                  py: 3,
                  textAlign: 'center'
                }}
              >
                {e.role}
              </Box>
              <Box
                sx={{
                  fontSize: 16, fontWeight: "medium", color: "inherit"
                }}
              >
                {e.name}
              </Box>
              <Box
                sx={{
                  fontSize: 12, fontWeight: "medium", color: "inherit"
                }}
              >
                {e.email}
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}

export default Secretariat;