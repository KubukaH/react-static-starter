import * as React from "react";

import Box from "@mui/material/Box";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';

import { alpha, useTheme } from "@mui/material/styles";
import { IMAGES } from "../../settings/images";
import { Link, useLocation } from "react-router-dom";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ShowcaseBrief = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 256,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper"
      }}
    >
      <Box
        sx={{ 
          color: "#fff", 
          fontSize: 22, 
          fontWeight: "medium",
          bgcolor: "background.basilwiziColor",
          py: 3,
          width: "100%",
          px: 3
        }}
      >
        Gallery
      </Box>
      <ImageList
        sx={{
          width: "100%",
          height: 550,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        rowHeight={200}
        gap={1}
      >
        {IMAGES.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          if (item.type === "logo") return null;

          return (
            <ImageListItem 
              key={item.id} 
              cols={cols} 
              rows={rows}
              component={Link}
              to={`/img/${item.id}`}
              state={{ location }}
            >
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}

export default ShowcaseBrief;