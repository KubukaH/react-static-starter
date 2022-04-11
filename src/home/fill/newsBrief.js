import * as React from "react";

import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import { getImageById } from "../../settings/images";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Basilwizi hands over state of the art computers",
    content: "On the 27th of October 2011, Basilwizi handed over the Public Access Point (PAP) at Binga Library to Binga Rural District Council in a bid to ...",
    link: "/basilwizi/previous-archived/basilwizi-works-with-the-lcp",
    attribute: "basilwizi-teacher-training"
  }, 
  {
    title: "Community Radio is the way Forward",
    content: "Community radio creates a space for development and for people to share ideas. With more community radio stations in Zimbabwe people would be 'able to talk ...'",
    link: "/basilwizi/previous-archived/basilwizi-community-radio-is-the-way-forward",
    attribute: "basilwizi-community-radio-is-the-way-forward"
  },
  {
    title: "Director of Basilwizi evaluates in the rural areas",
    content: "As a part of the monitoring & evaluation plan in Basilwizi the director attends reflection community meetings and workshops together with the project officers.",
    link: "/basilwizi/previous-archived/basilwizi-frank-mudimba-engaging-in-discussion",
    attribute: "basilwizi-frank-mudimba-engaging-in-discussion"
  },
  {
    title: "The Zambezi Valley Refrain",
    content: "On the 13th of August 2016, the Tonga people witnessed a historic milestone of their life time, through participating in the launch of Basilwizi book ...",
    link: "/basilwizi/previous-archived/basilwizi-ngoma-buntibe-ceremony",
    attribute: "basilwizi-ngoma-buntibe-ceremony"
  },
  {
    title: "International day of the African child",
    content: "On the occasion of the international day of the African child, Basilwizi remembers all those children abused by society ...",
    link: "/basilwizi/previous-archived/basilwizi-international-day-of-the-african-child",
    attribute: "basilwizi-international-day-of-the-african-child"
  },
  {
    title: "Fishermen work together for better conditions",
    content: "Paul Muleya (45) is a fisherman from the village Nsungwale in Binga district. He has made the seven hour long journey to meet with Basilwizi and ...",
    link: "/basilwizi/previous-archived/basilwizi-fishermen-work-together",
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
          gridTemplateColumns: ['repeat(1, 1fr)','repeat(3, 1fr)'],
          columnGap: 2.5,
          rowGap: 2.5,
          p: 4
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
                    height: .6
                  }}
                  alt={srcImg.title}
                />
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: 17,
                    fontWeight: "bold",
                    px: [1, 2],
                    textOverflow: "ellipsis"
                  }}
                >
                  {n.title}
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    fontWeight: "medium",
                    px: 2,
                    textAlign: "justify",
                    fontFamily: "Times New Roman",
                    py: [3, 0]
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
                    p: [1, 2],
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