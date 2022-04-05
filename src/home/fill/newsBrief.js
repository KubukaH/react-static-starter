import * as React from "react";

import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import { getImageById } from "../../settings/images";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Teachers Waiting Training Scheme",
    content: "Learn more about Basilwizi Teachers Waiting Training Scheme. The scheme is part of Basilwizi's effort to emancipate Tonga teaching.",
    link: "/basilwizi/online-news/teachers-programme",
    attribute: "basilwizi-teacher-training"
  },
  {
    title: "Christmas Cheer for Basilwizi workforce",
    content: "Christmas presents bring joy to the less privilidged nenbers of society in the River Valley. It was one of a kind. Best wishes for the new year coming ahead",
    link: "/basilwizi/online-news/christmas-cheer",
    attribute: "basilwizi-christmas-cheer-for-basilwizi-workforce"
  },
  {
    title: "Basilwizi NANGO chairperson's Prize Award.",
    content: "We are delighted to parade the National Association of Non-Governmental Organisations (NANGO) Chairperson's Prize of Excellence in Corporate Governance.",
    link: "/basilwizi/online-news/nango-award",
    attribute: "basilwizi-community-borehole"
  },
  {
    title: "The Zambezi Valley Refrain",
    content: "On the 13th of August 2016, the Tonga people witnessed a historic milestone of their life time, through participating in the launch of Basilwizi book 'The Zambezi Refrain, Lweendo LwaBasilwizi' and adopting the new 5 year strategic plan for Basilwizi.",
    link: "/basilwizi/online-news/zambezi-refrain",
    attribute: "basilwizi-ngoma-buntibe-ceremony"
  },
  {
    title: "International day of the African child",
    content: "On the occasion of the international day of the African child, Basilwizi remembers all those children abused by society, all the girls denied of education and other rights on the basis of culture, tradition, religion or race.",
    link: "/basilwizi/online-news/day-of-african-child",
    attribute: "basilwizi-international-day-of-the-african-child"
  },
  {
    title: "Fishermen work together for better conditions",
    content: "Paul Muleya (45) is a fisherman from the village Nsungwale in Binga district. He has made the seven hour long journey to meet with Basilwizi and to search for equipment for the group of fishermen he is representing.",
    link: "/basilwizi/online-news/fishermen-work-together",
    attribute: "basilwizi-fishermen-work-together"
  }
];
 
const NewsBrief = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 1,
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
          width: 1,
          px: 3
        }}
      >
        Stories making the headlines
      </Box>
      <Box
        sx={{
          width: 1,
          height: 1,
          display: "grid",
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 2.5,
          rowGap: 2.5,
          m: 4
        }}
      >
        {
          data.map((n) => {
            const srcImg = getImageById(n.attribute);
            return (
              <Box
                key={n.title}
                sx={{
                  width: 1,
                  height: 362,
                  boxShadow: 3,
                  border: 0,
                  borderRadius: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  bgcolor: alpha(theme.palette.background.basilwiziColor, .15)
                }}
              >
                <Box
                  component="img"
                  src={srcImg.img}
                  sx={{
                    width: 1,
                    height: ["256","128px"]
                  }}
                  alt={srcImg.title}
                />
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: 17,
                    fontWeight: "bold",
                    px: 3
                  }}
                >
                  {n.title}
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: 13,
                    fontWeight: "medium",
                    p: "6%"
                  }}
                >
                  {n.content}
                </Box>
                <Box
                  component={Link}
                  to={n.link}
                  sx={{
                    color: "text.secondary",
                    fontSize: 13,
                    fontWeight: "bold",
                    p: 5,
                    textDecoration: "none",
                    "&:hover, &:focus": {
                      textDecoration: "underline dotted blue",
                      color: "text.base"
                    }
                  }}
                >
                  Read more
                </Box>
              </Box>
            )
          } )
        }
      </Box>
    </Box>
  );
}

export default NewsBrief;