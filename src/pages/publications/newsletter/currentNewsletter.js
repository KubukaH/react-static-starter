import * as React from "react";

import Box from "@mui/material/Box";
import { getImageById } from "../../../settings/images";

const CurrentNewsletter = () => {
  const image = getImageById("basilwizi-newsletter-april-2015");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column","row"],
        alignItems: "flex-start",
        width: [1, .95],
        border: "0.15px dotted purple",
        height: 1,
        my: 4,
        mx: "auto"
      }}
    >
      <Box
        component="img"
        src={image.img}
        alt="Current Issue"
        sx={{
          width: .5,
          m: ["auto", 0]
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", 
          width: 1
        }}
      >
        <Box
          sx={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            p: 2, 
            bgcolor: "background.basilwiziColor"
          }}
        >
          At a glance
        </Box>
        <Box p={3}>
          Tonga is being taught in local schools<br/>
          Women photographers starts bussiness<br/>
          Poem by Mathew Munkuli<br/>
          Firshermen buying equipment in Bulawayo
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentNewsletter;