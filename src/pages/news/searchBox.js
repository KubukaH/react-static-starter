import * as React from "react";

// MUI components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const SearchBox = ({ searchText, requestSearch, clearSearch }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: ["center","flex-end"],
        width: "100%",
        pb: 12
      }}
    >
      <Box
        sx={{ p: 0.5, pb: 0 }}
      >
        <TextField
          variant="outlined"
          size="small"
          value={searchText}
          onChange={requestSearch}
          placeholder="Search…"
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: searchText ? 'visible' : 'hidden' }}
                onClick={clearSearch}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
          sx={{
            width: {
              xs: 1,
              sm: 'auto',
            },
            m: (theme) => theme.spacing(1, 0.5, 1.5),
            '& .MuiSvgIcon-root': {
              mr: 0.5,
            },
            '& .MuiInput-underline:before': {
              borderBottom: 1,
              borderColor: 'divider',
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default SearchBox;