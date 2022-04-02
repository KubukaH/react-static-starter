import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button
} from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';

import noData from "../assets/svg/no_data.svg";
import CountdownTimer from '../settings/timer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        mx: "auto",
        py: 8,
        color: "text.base"
      }}
    >
      <CountdownTimer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 3/4,
          height: "100%",
          mx:  "auto",
          py: 8
        }}
      >
        <Box
          sx={{
            fontSize: 100,
            fontWeight: "light",
            color: "inherit"
          }}
        >
          4
        </Box>
        <Box
          component="img"
          sx={{
            height: 1/5,
            width: 1/5
          }}
          src={noData}
          alt="Under development"
        />
        <Box
          sx={{
            fontSize: 100,
            fontWeight: "light",
            color: "inherit"
          }}
        >
          4
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: 30,
          fontWeight: "medium",
          color: "inherit"
        }}
      >
        Page Not Found
      </Box>
      <Box
        component="span"
        sx={{
          p: 3
        }}
      >
        <Button
          color='inherit'
          variant="outlined"
          size="large"
          onClick={() => navigate(-1, { replace: true })}
          startIcon={<UndoIcon />}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
