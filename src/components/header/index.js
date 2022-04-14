import * as React from 'react';

// MUI components
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Local imports
import AboutMenu from './menus/aboutMenu';
import ProjectsMenu from './menus/projectsMenu';
import PublicationsMenu from './menus/publicationsMenu';
import PartnersMenu from './menus/partnersMenu';
import ContactMenu from './menus/contactMenu';
import HomeMenu from './menus/homeMenu';
import ToggleDrawer from './drawer';
import ProfileMenu from './menus/profileMenu';
// import ProfileMenu from './menus/profileMenu';

const navs = [
  {
    item: <HomeMenu />,
    base: "one"
  },
  {
    item: <AboutMenu />,
    base: "two"
  },
  {
    item: <ProjectsMenu />,
    base: "three"
  },
  {
    item: <PublicationsMenu />,
    base: "four"
  },
  {
    item: <PartnersMenu />,
    base: "five"
  },
  {
    item: <ContactMenu />,
    base: 'six'
  },
  {
    item: <ProfileMenu />,
    base: 'seven'
  }
];

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <ElevationScroll {...props}>
        <AppBar 
          position="fixed"
          enableColorOnDark
          sx={{ 
            borderRadius: "0px !important", 
            backgroundColor: "#a0a465",
            height: "7vh"
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{ 
                display: { xs: "none", md: "none", lg: "flex" },
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: 2/3,
                mx: "auto",
                height: "100%",
                alignItems: "baseline",
                pt: 1,
                pb: "0px !important"
              }}
            >
              {
                navs.map((nav) => (
                  <Box 
                    key={nav.base}
                  >
                    {nav.item}
                  </Box>
                ))
              }
            </Box>
            <Box
              sx={{ 
                display: { xs: "flex", md: "flex", lg: "none" },
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                mx: "auto",
                height: "100%",
                pb: 2,
                pl: 1
              }}
            >
              <ToggleDrawer />
              <Box
                sx={{
                  fontSize: 16, fontWeight: "medium", color: "inherit",
                  fontFamily: "Roboto",
                }}
              >
                Basilwizi - people of the Great River
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
}

export default Header;