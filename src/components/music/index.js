import * as React from 'react';

// Mui components
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//Local imports
import MediaControlCard from './interface';

const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: "tooltip",
  bottom: 2,
  right: 2,
  backgroundColor: "#55554fbe",
  "&:hover,&:focus": {
    backgroundColor: "#a0a465",
  }
});

const MusicIndex = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <MediaControlCard />
          </Paper>
        </Fade>
      )}
    </Popper>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <StyledFab 
        variant="extended" 
        size='small'
        aria-label='music-player'
        onClick={handleClick('bottom-end')}
      >
        <PlayArrowIcon sx={{ mr: 1 }} />
        <Box
          sx={{
            fontSize: '1vw',
            color: '#fff',
            textAlign: 'center',
            animation: 'glow 1s ease-in-out infinite alternate',
    
            "@keyframes glow": {
              from: {
                textShadow: "0 0 1px #fff, 0 0 2px #fff, 0 0 3px #e60073, 0 0 4px #e60073, 0 0 5px #e60073, 0 0 6px #e60073, 0 0 7px #e60073"
              },
              
              to: {
                textShadow: "0 0 2px #fff, 0 0 3px #ff4da6, 0 0 4px #ff4da6, 0 0 5px #ff4da6, 0 0 6px #ff4da6, 0 0 7px #ff4da6, 0 0 8px #ff4da6"
              }
            }
          }}
        >
          Ibutonga Music Player
        </Box>
      </StyledFab>
    </Box>
    </>
  );
}

export default MusicIndex;