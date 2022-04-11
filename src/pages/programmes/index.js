import * as React from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';

import { getProgramById } from "../../settings/progrms";
import { getImageById } from "../../settings/images";

const ProgrammesIndex = () => {
  const { id } = useParams();
  const project = getProgramById(id);
  const image = getImageById("basilwizi-"+id);
  return (
    <Box 
      sx={{ 
        display: "flex",
        flexDirection: "column",
        width: 1,
        minHeight: "50vh",
        alignItems: "center"
      }} 
    >
      <Box
        sx={{
          fontSize: ["5vw", "3.5vw"],
          fontWeight: 300,
          fontFamily: "Algerian",
          color: "text.base"
        }}
      >
        Programmes and Projects
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: .95,
          border: "0.25px dashed #a0a465",
          borderTopLeftRaius: "16px",
          borderTopRightRadius: "16px",
          my: 8
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 1,
            borderBottom: "0.25px dashed #a0a465",
            bgcolor: "background.basilwiziTransparent",
            alignItems: "center"
          }}
        >
          <Box
            sx={{ 
              fontSize: ["4vw", "1.25vw"], 
              color: "text.base", 
              fontWeight: 500, 
              fontFamily: "Roboto",
              width: "calc(100% - 30px)",
              p: 1
            }}
          >
            {project.id.split("-").map(x => x).join(" ").toUpperCase()}
          </Box>
          <Box sx={{ color: "#fff", width: "30px", border: 0.5, m: 1, alignItems: "center" }} >
            <RuleOutlinedIcon />
          </Box>
        </Box>
        {
          project.imgDsc && (
            <ImageListItem>
              <Box
                component="img"
                src={image.img}
                alt="Image description for this programme"
                sx={{
                  width: 1,
                  height: "auto"
                }}
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={project.imgDsc}
                position="bottom"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${image.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          )
        }
        <Box sx={{ display: "flex", p: 3 }} >
          {project.dat}
        </Box>
      </Box>
    </Box>
  );
};

export default ProgrammesIndex;