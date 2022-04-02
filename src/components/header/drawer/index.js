import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// MUI imports
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

// @mui/icons-material
import ArrowRight from '@mui/icons-material/ArrowRight';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

import { 
  styled, 
  ThemeProvider, 
  createTheme,
  useTheme,
  alpha
} from '@mui/material/styles';

//Local imports
import logo from "../../../tools/media/images/logo-1.jpg";
import GmailTreeView from './try';

// Nav List
const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const drawerId = "open-drawer-for-mobile";

const ToggleDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const anchorRef = React.useRef(null);
  const theme = useTheme();

  const toggleDrawerOpen = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(true);
  };

  const toggleDrawerClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenDrawer(false);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  }

  return (
    <>
    <Box
      onClick={toggleDrawerOpen}
      onKeyDown={toggleDrawerOpen}
      ref={anchorRef}
      aria-controls={openDrawer ? drawerId : undefined}
      sx={{
        display: ["flex", "flex", "none"],
        transition: theme.transitions.duration.standard,
        background: alpha(theme.palette.background.basilwiziTransparent, .2),
        color: theme.palette.text.primary,
        '&:hover,&:focus': {
          background: alpha(theme.palette.background.basilwiziTransparent, .9),
          color: theme.palette.text.secondary
        },
        width: 30,
        height: 30,
        borderRadius: "50%",
        p: .5,
        cursor: "pointer"
      }}
    >
      <MenuIcon
        sx={{
          color: "#fff",
          width: "100%",
          height: "100%"
        }}
      />
    </Box>
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={toggleDrawerOpen}
      role="presentation"
      aria-label={drawerId}
      id={drawerId}
    >
      <Box
        sx={{ display: 'flex' }}
      >
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: 'dark',
              primary: { main: 'rgb(102, 157, 246)' },
              background: { paper: 'rgb(5, 30, 52)' },
            },
          })}
        >
            <Paper elevation={0} sx={{ maxWidth: 256, borderRadius: 0 }}>
              <ClickAwayListener onClickAway={toggleDrawerClose}>
                <FireNav component="nav" disablePadding>
                  <ListItemButton component="a" href="#home">
                    <ListItemIcon sx={{ fontSize: 20 }}>
                      <Box
                        component={"img"}
                        sx={{
                          borderRadius: "50%",
                          width: 20
                        }}
                        src={logo}
                        alt="Logo"
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ my: 0 }}
                      primary="Basilwizi Trust"
                      primaryTypographyProps={{
                        fontSize: 17,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                  <Divider />
                  <ListItem component="div" disablePadding>
                    <ListItemButton sx={{ height: 56 }}>
                      <ListItemIcon>
                        <Home color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Settings Home"
                        primaryTypographyProps={{
                          color: 'primary',
                          fontWeight: 'medium',
                          variant: 'body2',
                        }}
                      />
                    </ListItemButton>
                    <Tooltip title="Project Settings">
                      <IconButton
                        size="large"
                        sx={{
                          '& svg': {
                            color: 'rgba(255,255,255,0.8)',
                            transition: '0.2s',
                            transform: 'translateX(0) rotate(0)',
                          },
                          '&:hover, &:focus': {
                            bgcolor: 'unset',
                            '& svg:first-of-type': {
                              transform: 'translateX(-4px) rotate(-20deg)',
                            },
                            '& svg:last-of-type': {
                              right: 0,
                              opacity: 1,
                            },
                          },
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            height: '80%',
                            display: 'block',
                            left: 0,
                            width: '1px',
                            bgcolor: 'divider',
                          },
                        }}
                      >
                        <Settings />
                        <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                      </IconButton>
                    </Tooltip>
                  </ListItem>
                  <Divider />
                  <GmailTreeView
                    closeDrawer={closeDrawer}
                  />
                </FireNav>
              </ClickAwayListener>
            </Paper>
        </ThemeProvider>
      </Box>
    </Drawer>
  </>);
}

export default ToggleDrawer;