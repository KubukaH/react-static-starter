import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI imports
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const FooterComponent = () => {
  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        borderTop: '1px dashed #a0a465',
        textAlign: 'center',
        height: "7vh",
        justifyContent: "center",
        backgroundColor: 'background.default'
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          textDecoration: "none",
          color: "text.primary",
          size: 14,
          fontWeight: "medium",
          mx: .7
        }}
      >
        Basilwizi Trust
      </Box>
      <Box
        sx={{ verticalAlign: "sub", fontSize: 12, display: "inline" }}
      >
        ...helping fight poverty in the Zambezi Valley
      </Box>
      <Box
        sx={{ pt: 1 }}
      >
        &copy;{new Date().getFullYear()}
      </Box>
    </Box>
  );
}

export default FooterComponent;