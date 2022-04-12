import * as React from "react";
import { Link } from "react-router-dom";

// MUI Components
import { Box } from '@mui/system';
import { alpha, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';

// MUI Icons
import ChromeReader from '@mui/icons-material/ChromeReaderModeTwoTone';
import PermContactCalendar from '@mui/icons-material/PermContactCalendarTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import InfoIcon from '@mui/icons-material/Info';
import { Facebook, Twitter, Instagram, AddPhotoAlternate, Telegram, WhatsApp } from "@mui/icons-material";

// Local Imports
import banner from '../assets/img/basilwizi_banner.jpg';
import Subscribe from "./subscribe";
import NewsBrief from "./fill/newsBrief";
import ShowcaseBrief from "./fill/showcaseBrief";
import { useCTX } from "../components/context";

const linksBtns = [
  {
    name: "about",
    icon: <InfoIcon />,
    url: "/basilwizi"
  },
  {
    name: "contact",
    icon: <PermContactCalendar />,
    url: "/basilwizi/contact"
  },
  {
    name: "sponsors",
    icon: <StoreTwoToneIcon />,
    url: "/basilwizi/partners-and-sponsors"
  },
  {
    name: "news",
    icon: <ChromeReader />,
    url: "/basilwizi/online-news"
  }
];

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

const HomePage = () => {
  const theme = useTheme();
  const auth = useCTX();
  const { isLoggedIn } = auth;

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
          height: "100%",
          width: "100%"
        }}
        src={banner}
        alt="Basilwizi Home Banner"
      />
      <Box
        sx={{ 
          color: "text.base", 
          fontSize: ["7vw","3.5vw"], 
          fontWeight: 100,
          p: 5,
          fontFamily: "Algerian", 
          alignText: "center"
        }}
      >
        Welcome - Tutambule
      </Box>
      <Box 
        sx={{ 
          color: "text.primary", 
          fontSize: 13, 
          fontWeight: "medium",
          p: 8,
          textAlign: "justify",
        }}
      >
        Basilwizi Trust is a community development organization, founded in 2002 by the local people of the Zambezi valley, north western part of Zimbabwe. The existence of Basilwizi Trust is a demonstration of concern and determination by Zambezi valley communities to demand and restore their dignity taken away from them by the displacement from the Zambezi River banks. Poverty, the main cause of vulnerability to food insecurity, is one of the defining features of the Zambezi valley. The Zambezi valley districts rank least on the Zimbabwe development index and yet they have great potential to be better from the vast natural resources found in the region. Thus Basilwizi works to assist the communities of Binga, Gokwe North, Hwange and Nyaminyami administrative districts to realize own development and emancipation from extreme poverty through community led interventions.
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 512,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ 
            color: "#fff", 
            fontSize: 18, 
            fontWeight: "medium",
            bgcolor: "background.basilwiziColor",
            py: 3,
            px: 3,
            width: "100%"
          }}
        >
          Watch Stories
        </Box>
        <Box
          component="iframe"
          sx={{
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/ratdbWKBfks?rel=0"
          frameborder="0" 
          allowfullscreen
          title="Basilwizi Videos"
        />
      </Box>
      {/**
       * Code for Filling the Home Page.
       * It was split for easy maintenance purposes
       */}
      <NewsBrief />
      <ShowcaseBrief />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: alpha(theme.palette.background.basilwiziColor, .1),
          height: "100%",
          width: "100%",
          pb: 8
        }}
      >
        <Box
          sx={{ 
            color: "#fff", 
            fontSize: 22, 
            fontWeight: "medium",
            textDecoration: "underline",
            py: 3,
            bgcolor: "background.basilwiziColor",
            width: "100%",
            px: 3
          }}
        >
          Quick Links
        </Box>
        <Box  
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            height: "100%",
            width: "100%",
            py: 5,
            flexWrap: "wrap"
          }}
        >
          {
            linksBtns.map((link) => (
              <Box
                component={Link}
                to={link.url}
                key={link.name}
                sx={{
                  boxShadow: 2,
                  borderRadius: 2,
                  overflow: "hidden",
                  textDecoration: "none"
                }}
              >
                <Button
                  startIcon={link.icon}
                >
                  {link.name}
                </Button>
              </Box>
            ))
          }
        </Box>
      </Box>
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
              textAlign: ["left", "center"]
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
              !isLoggedIn &&
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
                  to="/basilwizi/accounts"
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

export default HomePage;