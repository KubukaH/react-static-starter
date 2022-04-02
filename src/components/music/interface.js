import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { styled, useTheme } from '@mui/material/styles';

// Local imports
import { getImageById } from '../../settings/images';
import AudioControls from './controls';
import tracks from './tracks';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MediaControlCard() {
  const theme = useTheme();
  // State
  const [trackIndex, setTrackIndex] = React.useState(0);
  const [trackProgress, setTrackProgress] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Destructure for conciseness
  const { title, artist, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = React.useRef(new Audio(audioSrc));
  const intervalRef = React.useRef();
  const isReady = React.useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [100]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  React.useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  React.useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }

  const banner_img = getImageById("basilwizi-ngoma-buntibe-ceremony");

  return (
    <Card 
      sx={{ 
        display: 'flex',
        flexDirection: "row",
        border: "3px solid #f1f1f1",
        width: "350px",
        height: "128px",
        mb: 5,
        bgcolor: "background.basilwiziColor"
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 2/3, p: 3 }}>
        <CardContent sx={{ flex: '1 0 auto', p: 0 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              fontSize: "1vw",
              p: 0
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              fontSize: "0.6vw",
              p: 0
            }}
          >
            {artist}
          </Box>
        </CardContent>
          {/**
           * Progress Bar
           */}
        <Slider
          aria-label="time-indicator"
          size="small"
          value={trackProgress}
          min={0}
          step={1}
          max={duration ? duration : 0}
          onChange={(_, value) => onScrub(value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(trackProgress)}</TinyText>
          <TinyText>
            {'-'}
            {
              trackProgress > 0 ? formatDuration(duration - trackProgress) : "0.00"
            }
          </TinyText>
        </Box>
        {/**
         * Audio Control Settings
         */}
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 1/3 }}
        image={banner_img.img}
        alt={`track artwork for ${title} by ${artist}`}
      />
    </Card>
  );
}
