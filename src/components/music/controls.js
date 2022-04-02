import React from "react";

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Pause } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/system";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', pl: 1, pb: 1 }}>
      <IconButton 
        aria-label="previous" 
        onClick={theme.direction === 'rtl' ? onNextClick : onPrevClick}
      >
        {
          theme.direction === 'rtl' 
            ? <SkipNextIcon sx={{ height: 20, width: 20 }} /> 
            : <SkipPreviousIcon sx={{ height: 20, width: 20 }} />
        }
      </IconButton>
      <IconButton 
        aria-label="play/pause"
        onClick={
          isPlaying 
            ? () => onPlayPauseClick(false)
            : () => onPlayPauseClick(true)
        }
      >
        {
          isPlaying
            ? <Pause sx={{ height: 20, width: 20 }} />
            : <PlayArrowIcon sx={{ height: 20, width: 20 }} />
        }
      </IconButton>
      <IconButton 
        aria-label="next"
        onClick={
          theme.direction === 'rtl'
            ? onPrevClick
            : onNextClick
        }
      >
        {
          theme.direction === 'rtl' 
            ? <SkipPreviousIcon sx={{ height: 20, width: 20 }} /> 
            : <SkipNextIcon sx={{ height: 20, width: 20 }} />
        }
      </IconButton>
    </Box>
  );
}

export default AudioControls;
