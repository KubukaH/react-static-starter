import * as React from "react";
import { Link, Outlet } from "react-router-dom";

// MUI Components
import { Box, useTheme, alpha } from '@mui/system';
import IconButton from '@mui/material/IconButton';

import { Facebook, Twitter, Instagram, AddPhotoAlternate, Telegram, WhatsApp } from "@mui/icons-material";

// Local Imports
import banner from '../../assets/img/basilwizi_banner.jpg';
import Subscribe from "../../home/subscribe";
import BreadCrumbsPage from "../breadcrumbs";
import { useCTX } from "../context";

const socialMedia = [
  {
    name: "facebook",
    icon: <Facebook />
  },
  {
    name: "twitter",
    icon: <Twitter />
  },
  {
    name: "instagram",
    icon: <Instagram />
  },
  {
    name: "whatsapp",
    icon: <WhatsApp />
  },
  {
    name: "tumblr",
    icon: <AddPhotoAlternate />
  },
  {
    name: "telegram",
    icon: <Telegram />
  }
];

const PagesLayout = () => {
  const theme = useTheme();
  const auth = useCTX();

  return (
    <Box
      sx={{
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 3,
        boxShadow: 1,
        width: ["95%", "100ch"],
        minHeight: [512, "82vh"],
        mx: "auto",
        mb: 5
      }}
    >
      <Box
        component="img"
        sx={{
          height: ["100%"],
          width: ["100%"]
        }}
        src={banner}
        alt="Basilwizi Home Banner"
      />
      <BreadCrumbsPage />
      <Outlet />
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column","row"],
          justifyContent: ["center", "space-between"],
          minHeight: "calc(82vh - 366px)",
          height: "100%",
          width: "100%",
          bgcolor: alpha(theme.palette.background.basilwiziColor, .99),
          p: 4,
          color: "#fff"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: ["100%", 1/3]
          }}
        >
          <Box
            sx={{ 
              color: "text.transparent", 
              fontWeight: "medium", 
              fontSize: 26
            }}
          >
            Donate
          </Box>
          <Box
            sx={{ 
              color: "inherit", fontWeight: "medium", fontSize: 12, pt: 2
            }}
          >
            Account Name: Basilwizi Trust<br />
            Bank: Stanbic<br />
            Branch/ Sort Code: 3302<br />
            Account number: 9140001196900<br />
            Swift Code: SBICZWHXX
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: ["100%", 1/3],
            py: [8, 0]
          }}
        >
          <Box
            sx={{
              color:"text.transparent", fontWeight: "medium", fontSize: 26
            }}
          >
            Subscribe
          </Box>
          <Box
            sx={{
              displax: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Subscribe />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: ["100%", 1/3],
          }}
        >
          <Box
            sx={{
              color:"text.transparent", 
              fontWeight: "medium", 
              fontSize: 26,
              textAlign: ["left","center"]
            }}
          >
            Social Media
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end", 
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: ["flex-start", "flex-end"], 
                p: 1
              }}
            >
              {
                socialMedia.map((s) => (
                  <Box 
                    component={IconButton}
                    key={s.name}
                    size="small"
                    aria-label="show more"
                    color="inherit"
                    sx={{ overflow: "hidden" }}
                  >
                    {s.icon}
                  </Box>
                ))
              }
            </Box>
            {
              !auth.user &&
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: ["flex-start", "flex-end"], 
                  p: 1
                }}
              >
                <Box
                  component={Link}
                  to="/basilwizi/acc"
                  sx={{
                    color: "inherit", fontWeight: "medium", fontSize: 20,
                    textDecoration: "none", pt: 2
                  }} 
                >
                  Sign In / Sign Up
                </Box>
              </Box>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PagesLayout;