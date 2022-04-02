import { createTheme } from '@mui/material/styles';
import { colors } from "@mui/material";
import shadows from './shadows';
import typography from './typography';

const themeColor1 = "#a0a465";
const themeColor2 = "#55554fbe";

const theme = createTheme({
  palette: {
    background: {
      default: '#f9faef',
      paper: colors.common.white,
      basilwiziColor: themeColor1,
      basilwiziTransparent: themeColor2
    },
    primary: {
      contrastText: '#ffffff',
      main: '#5664d2'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
      warning: "#b93467",
      base: themeColor1,
      transparent: themeColor2
    }
  },
  shadows,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 4,
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appbar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

export default theme;
