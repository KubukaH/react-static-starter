import * as React from "react";

// MUI components
import Box from "@mui/material/Box";

// Local Imports
import di from "../../tools/media/images/blank-avatar.jpg";

const employees = [
  {
    name: "Maxwell Dodo Munenge",
    email: "maxwellm@basilwizi.co.zw",
    role: "Programmes",
    image: di
  },
  {
    name: "Nomathemba Nyoni",
    email: "norman@basilwizi.co.zw",
    role: "Finance officer ",
    image: di
  },
  {
    name: "Danisa Mudimba",
    email: "danisam@basilwizi.co.zw",
    role: "Area Coordinator ",
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
          width: ['90%','90%',1/4],
          height: ['90%','90%',1/4],
          display:"flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          boxShadow: 4,
          mx: "auto",
          my: 5
        }}
      >
        <Box
          component="img"
          src={di}
          alt="Director"
          sx={{
            width: "100%",
            height: 1
          }}
        />
        <Box
          sx={{
            fontSize: 26, fontWeight: "medium", color: "text.primary", py: 3
          }}
        >
          Director
        </Box>
        <Box
          sx={{
            fontSize: 16, fontWeight: "medium", color: "text.primary"
          }}
        >
          Christopher Mweembe
        </Box>
        <Box
          sx={{
            fontSize: 12, fontWeight: "medium", color: "text.primary"
          }}
        >
          (christopherm@basilwizi.co.zw)
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-evenly",
          mx: ["auto"],
          flexWrap: "wrap"
        }}
      >
        {
          employees.map((e) => (
            <Box
              key={e.name}
              sx={{
                width: ["75%", "75%", 1/4],
                height: ["75%", "75%", 1/4],
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 3,
                boxShadow: 4,
                mx: "auto",
                my: 5
              }}
            >
              <Box
                component="img"
                src={e.image}
                alt={e.name}
                sx={{
                  width: "100%",
                  height: "100%"
                }}
              />
              <Box
                sx={{
                  fontSize: 26, fontWeight: "medium", color: "text.primary", py: 3
                }}
              >
                {e.role}
              </Box>
              <Box
                sx={{
                  fontSize: 16, fontWeight: "medium", color: "text.primary"
                }}
              >
                {e.name}
              </Box>
              <Box
                sx={{
                  fontSize: 12, fontWeight: "medium", color: "text.primary"
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