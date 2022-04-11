import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NEWSLETTERS } from "../../../settings/pdfs/newsletterPdfs";

const Newsletters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column"],
        alignItems: "flex-start",
        width: 1,
        my: 4,
        p: 3
      }}
    >
      {
        NEWSLETTERS.map((prj) => (
          <Box 
            key={prj.id}
            sx={{
              borderBottom: "0.25px dotted #a0a465",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Box
              sx={{
                fontSize: 12, fontWeight: 150, color: "#a0a465", p: 2
              }}
            >{prj.title}</Box>
            <Box
            >
              <Button 
                type="button"
                aria-label="Download file"
              >
                💾
              </Button>
            </Box>
          </Box>
        ))
      }
    </Box>
  );
};

export default Newsletters;