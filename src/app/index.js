import * as React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import "@reach/dialog/styles.css";

// Local Imports
import NavigationScroll from "../settings/NavigationScroll";
import theme from '../theme';
import NotFound from '../404/NotFound';
import AppLayout from '../components/Layouts/mainLayout';
import HomePage from '../home';
import PagesIndex from '../pages';
import MusicIndex from '../components/music';
import ImagePreview from '../home/fill/previewImage';
import ImageModal from '../home/fill/imageModal';

const App = () => {
  const location = useLocation();

  const state = location.state;

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <NavigationScroll>
        <ThemeProvider theme={theme}>
          <Routes location={ state || location } >
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="basilwizi/*" element={<PagesIndex />} />
              <Route path='/img/:id' element={<ImagePreview />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <MusicIndex />
          {/* Show the modal when a `backgroundLocation` is set */}
          {state && (
            <Routes>
              <Route path="/img/:id" element={<ImageModal />} />
            </Routes>
          )}
        </ThemeProvider>
      </NavigationScroll>
    </StyledEngineProvider>
  );
}

export default App;